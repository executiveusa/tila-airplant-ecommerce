"use client";
import { useRef } from "react";
import { UI_PROPOSAL } from "@/content/ui-proposals";
import type { Lang } from "@/content/copy";

export default function SizeCarousel({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => {
    const card = rail.current?.querySelector<HTMLElement>("article");
    rail.current?.scrollBy({ left: direction * ((card?.offsetWidth || 280) + 16), behavior: "smooth" });
  };
  return <>
    <div className="mx-auto mt-5 flex max-w-6xl justify-end gap-2 px-5 sm:px-8 lg:hidden">
      <button type="button" aria-label={UI_PROPOSAL[lang].previous} onClick={() => scroll(-1)} className="h-11 w-11 rounded-full border border-hueso/40 text-2xl text-hueso">‹</button>
      <button type="button" aria-label={UI_PROPOSAL[lang].next} onClick={() => scroll(1)} className="h-11 w-11 rounded-full border border-hueso/40 text-2xl text-hueso">›</button>
    </div>
    <div ref={rail} className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:px-8 lg:mx-auto lg:mt-10 lg:grid lg:max-w-6xl lg:grid-cols-4 lg:overflow-visible">{children}</div>
  </>;
}
