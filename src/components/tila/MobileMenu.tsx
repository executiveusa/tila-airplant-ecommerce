"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { COPY, type Lang } from "@/content/copy";
import { UI_PROPOSAL } from "@/content/ui-proposals";

export default function MobileMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const c = COPY[lang];
  const ui = UI_PROPOSAL[lang];
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("button")?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); return; }
      if (event.key !== "Tab" || !panel.current) return;
      const items = Array.from(panel.current.querySelectorAll<HTMLElement>("a, button"));
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", key);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", key); };
  }, [open]);
  const close = () => { setOpen(false); requestAnimationFrame(() => trigger.current?.focus()); };
  const followLink = () => { setOpen(false); };
  const links = [["#tallas", c.nav.sizes], ["#precios", c.nav.prices], ["#como", c.nav.how], ["#faq", c.nav.faq]];
  return <>
    <button ref={trigger} type="button" aria-label={ui.menu} aria-expanded={open} aria-controls="tila-mobile-menu" onClick={() => setOpen((value) => !value)} className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full border border-hueso/25 text-hueso md:hidden">
      <span aria-hidden="true" className="text-xl leading-none">☰</span>
    </button>
    {mounted && open && createPortal(<div id="tila-mobile-menu" ref={panel} role="dialog" aria-modal="true" aria-label={ui.menu} className="fixed inset-0 z-[100] bg-selva px-5 py-5 text-hueso md:hidden">
      <div className="mx-auto flex max-w-6xl justify-end"><button type="button" aria-label={ui.close} onClick={close} className="h-11 w-11 rounded-full border border-hueso/25 text-2xl">×</button></div>
      <nav className="mx-auto mt-8 flex max-w-6xl flex-col border-t border-hueso/20">
        {links.map(([href, label]) => <a key={href} href={href} onClick={followLink} className="flex min-h-14 items-center border-b border-hueso/20 font-display text-2xl">{label}</a>)}
      </nav>
    </div>, document.body)}
  </>;
}
