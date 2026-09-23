"use client";
import { useSyncExternalStore } from "react";
import base from "@/content/rate.json";

// MXN is the base price. USD = MXN / rate, rounded UP to the next $0.05 so USD always covers MXN.
// Rate: baked in at build time (scripts/fetch-rate.mjs), refreshed in the browser once a day from
// open.er-api.com. If the fetch fails, the page keeps the last known rate and shows its date.
export type Rate = { rate: number; date: string };
const BASE: Rate = { rate: base.rate, date: base.date };
const KEY = "tila-usd-mxn";
let cur: Rate = BASE;
let started = false;
const subs = new Set<() => void>();
const ok = (r: any): r is Rate => r && typeof r.rate === "number" && r.rate > 5 && r.rate < 50 && typeof r.date === "string";
const set = (r: Rate) => { cur = r; subs.forEach((f) => f()); };

function start() {
  if (started || typeof window === "undefined") return;
  started = true;
  let cached: any = null;
  try { cached = JSON.parse(localStorage.getItem(KEY) || "null"); } catch {}
  if (ok(cached) && cached.date >= cur.date) set({ rate: cached.rate, date: cached.date });
  const today = new Date().toISOString().slice(0, 10);
  if (ok(cached) && (cached as any).checked === today) return;
  fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" })
    .then((r) => r.json())
    .then((j) => {
      const m = j?.rates?.MXN;
      const d = new Date((j?.time_last_update_unix ?? 0) * 1000).toISOString().slice(0, 10);
      const r = { rate: m, date: d };
      if (!ok(r)) return;
      set(r);
      try { localStorage.setItem(KEY, JSON.stringify({ ...r, checked: today })); } catch {}
    })
    .catch(() => {});
}

export function useRate(): Rate {
  return useSyncExternalStore(
    (cb) => { subs.add(cb); start(); return () => { subs.delete(cb); }; },
    () => cur,
    () => BASE
  );
}

export type Cur = "es" | "en";
export const unit = (mxnPrice: number, lang: Cur, r: Rate) =>
  lang === "en" ? Math.ceil((mxnPrice / r.rate) * 20 - 1e-9) / 20 : mxnPrice;
export const num = (n: number, lang: Cur) =>
  lang === "en"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
    : new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 }).format(n);
export const code = (lang: Cur) => (lang === "en" ? "USD" : "MXN");
// Plain-text form for messages and strings: "$2.45 USD" / "$42 MXN"
export const fmt = (n: number, lang: Cur) => `${num(n, lang)} ${code(lang)}`;
export const rateDate = (d: string, lang: Cur) =>
  new Date(d + "T12:00:00Z").toLocaleDateString(lang === "en" ? "en-US" : "es-MX", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
