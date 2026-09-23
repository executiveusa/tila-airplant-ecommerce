"use client";
import { useEffect, useState } from "react";

// Reveal-on-scroll for [data-reveal] elements. Content stays visible without JS or with reduced motion.
export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    document.documentElement.classList.add("reveal-armed");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => { if (el.closest(".no-scrollbar") || el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in"); else io.observe(el); });
    return () => io.disconnect();
  }, []);
  return null;
}

// Header that tucks away on scroll down and returns on scroll up.
export function SmartHeader({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 12);
      if (y > 200 && y > last + 4) setHidden(true);
      else if (y < last - 4 || y <= 200) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none ${hidden ? "-translate-y-full" : "translate-y-0"} ${solid ? "bg-selva/85 shadow-[0_1px_0_rgba(238,233,218,0.08)] backdrop-blur-md" : "bg-transparent"}`}
    >
      {children}
    </header>
  );
}

// Thumb-reach order button on phones: shows after the hero, hides once the order builder is on screen.
export function MobileOrderBar({ label, sub }: { label: string; sub: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const target = document.getElementById("pedido");
    let pastHero = false, atBuilder = false;
    const update = () => setShow(pastHero && !atBuilder);
    const onScroll = () => { pastHero = window.scrollY > window.innerHeight * 0.7; update(); };
    const io = target ? new IntersectionObserver(([e]) => { atBuilder = e.isIntersecting; update(); }, { threshold: 0.05 }) : null;
    if (target && io) io.observe(target);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-3 bottom-3 z-40 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href="#pedido" tabIndex={show ? 0 : -1} className="flex h-14 items-center justify-between rounded-full bg-bractea pl-6 pr-2 text-white shadow-[0_12px_32px_-8px_rgba(228,71,47,0.6)] active:scale-[0.98]">
        <span className="font-display text-lg font-semibold tracking-tight">{label}</span>
        <span className="flex h-10 items-center rounded-full bg-white/15 px-4 text-sm">{sub}</span>
      </a>
    </div>
  );
}
