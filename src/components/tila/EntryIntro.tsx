"use client";
import { useEffect, useState } from "react";
export default function EntryIntro() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem("tila-hyperframes-intro-v1") || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      localStorage.setItem("tila-hyperframes-intro-v1", "seen");
      setPlay(true);
      const timer = setTimeout(() => setPlay(false), 1900);
      const escape = (e: KeyboardEvent) => { if (e.key === "Escape") setPlay(false); };
      window.addEventListener("keydown", escape);
      return () => { clearTimeout(timer); window.removeEventListener("keydown", escape); };
    } catch { return; }
  }, []);
  if (!play) return null;
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-selva" role="region" aria-label="Tila intro">
    <video className="h-auto w-[min(88vw,640px)]" src="/media/tila-intro-hyperframes.mp4" autoPlay muted playsInline preload="auto" onEnded={() => setPlay(false)} onError={() => setPlay(false)} aria-hidden="true" />
    <button autoFocus onClick={() => setPlay(false)} className="absolute right-5 top-5 min-h-[44px] rounded-full border border-hueso/40 px-5 text-sm text-hueso focus:outline focus:outline-2 focus:outline-hueso" aria-label="Skip intro / Saltar intro">Saltar / Skip</button>
  </div>;
}
