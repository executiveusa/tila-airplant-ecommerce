"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { SIZES, MIN_ORDER, TIERS, tierIndex, nextTier, mxn, type SizeKey } from "@/content/pricing";
import { COPY, WHATSAPP_NUMBER, type Lang } from "@/content/copy";

const start: Record<SizeKey, number> = { chica: 30, mediana: 20, grande: 0, especial: 0 };

export default function QuoteBuilder({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const [q, setQ] = useState<Record<SizeKey, number>>(start);
  const [copied, setCopied] = useState(false);
  const total = Object.values(q).reduce((a, b) => a + b, 0);
  const ti = tierIndex(total);
  const subtotal = SIZES.reduce((s, z) => s + (z.prices ? q[z.key] * z.prices[ti] : 0), 0);
  const nt = nextTier(total);
  const barPct = total < MIN_ORDER ? (total / MIN_ORDER) * 100 : nt ? ((total - TIERS[ti].min) / (TIERS[nt.index].min - TIERS[ti].min)) * 100 : 100;
  const ok = total >= MIN_ORDER;
  const tier = TIERS[ti];

  const message = useMemo(() => {
    const lines = SIZES.filter((z) => q[z.key] > 0).map(
      (z) => z.prices ? `- ${c.sizes[z.key].name} (${z.cm}): ${q[z.key]} x ${mxn(z.prices[ti])} = ${mxn(q[z.key] * z.prices[ti])}` : `- ${c.sizes[z.key].name}: ${q[z.key]} (${c.quoteOnly})`
    );
    return [c.builder.messageIntro, ...lines, `${c.builder.total}: ${total}`, `${c.builder.subtotal}: ${mxn(subtotal)}`, c.builder.messageOutro].join("\n");
  }, [q, ti, total, subtotal, c]);

  const set = (k: SizeKey, v: number) => setQ((p) => ({ ...p, [k]: Math.max(0, Math.min(5000, Math.round(v) || 0)) }));
  const wa = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : "";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <ul className="divide-y divide-moss/15 rounded-2xl border border-moss/15 bg-white/70">
        {SIZES.map((z) => (
          <li key={z.key} className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4">
            <Image src={z.image} alt="" width={64} height={64} className="h-14 w-14 flex-none sm:h-16 sm:w-16 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="font-medium text-ink">{c.sizes[z.key].name}</p>
              <p className="text-xs text-ink/60 sm:text-sm">{z.prices ? `${z.cm} · ${mxn(z.prices[ti])}` : c.quoteOnly}</p>
            </div>
            <div className="flex items-center rounded-full border border-moss/25 bg-white">
              <button type="button" aria-label="-10" onClick={() => set(z.key, q[z.key] - 10)} className="h-11 w-11 rounded-full text-lg text-moss hover:bg-sand">−</button>
              <input
                aria-label={`${c.builder.qty} ${c.sizes[z.key].name}`}
                inputMode="numeric"
                value={q[z.key]}
                onChange={(e) => set(z.key, Number(e.target.value.replace(/\D/g, "")))}
                className="w-12 bg-transparent text-center font-medium tabular-nums text-ink outline-none"
              />
              <button type="button" aria-label="+10" onClick={() => set(z.key, q[z.key] + 10)} className="h-11 w-11 rounded-full text-lg text-moss hover:bg-sand">+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4 rounded-2xl bg-moss p-6 text-cream">
        <dl className="grid grid-cols-2 gap-y-3 text-sm">
          <dt className="text-cream/70">{c.builder.total}</dt>
          <dd className="text-right text-lg font-medium tabular-nums">{total}</dd>
          <dt className="text-cream/70">{c.builder.tierLabel}</dt>
          <dd className="text-right">{c.priceHead.tier(tier.min, tier.max)}</dd>
          <dt className="text-cream/70">{c.builder.subtotal}</dt>
          <dd className="text-right font-display text-3xl tabular-nums">{mxn(subtotal)}</dd>
        </dl>
        <div className="h-2 overflow-hidden rounded-full bg-cream/20" aria-hidden>
          <div className="h-full rounded-full bg-clay transition-[width] duration-300" style={{ width: `${Math.min(100, barPct)}%` }} />
        </div>
        <p className={`text-sm ${ok ? "text-cream" : "text-clay-light"}`} role="status">
          {!ok ? c.builder.under(MIN_ORDER - total) : nt ? `${c.builder.ok} ${c.builder.next(nt.need, mxn(SIZES[0].prices![nt.index]))}` : `${c.builder.ok} ${c.builder.best}`}
        </p>
        {q.especial > 0 && <p className="text-xs text-cream/70">{c.builder.specialLine}</p>}
        <p className="text-xs text-cream/60">{c.taxNote}</p>
        <div className="mt-auto flex flex-col gap-2">
          {wa && ok ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center rounded-full bg-clay font-medium text-white hover:bg-clay-dark">{c.builder.send}</a>
          ) : (
            <span className="flex h-12 items-center justify-center rounded-full bg-cream/15 text-sm text-cream/70">{ok ? c.builder.pending : c.builder.send}</span>
          )}
          <button
            type="button"
            disabled={!ok}
            onClick={async () => { try { await navigator.clipboard.writeText(message); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} }}
            className="h-12 rounded-full border border-cream/40 text-sm font-medium hover:bg-cream/10 disabled:opacity-40"
          >
            {copied ? c.builder.copied : c.builder.copy}
          </button>
          <button type="button" onClick={() => setQ(start)} className="text-xs text-cream/60 underline underline-offset-4">{c.builder.reset}</button>
        </div>
      </div>
    </div>
  );
}
