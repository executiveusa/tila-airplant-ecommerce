import { PROCESS, PROCESS_PROPOSAL, type FilmSlot } from "@/content/process";
import type { Lang } from "@/content/copy";

// Private draft component. No public route exports it while the manifest is pending.
export default function ProcessPage({ lang }: { lang: Lang }) {
  const c = PROCESS_PROPOSAL[lang];
  const slots: FilmSlot[] = ["trees", "growing", "soil"];
  return <main className="min-h-screen bg-selva px-5 py-16 text-hueso">
    <div className="mx-auto max-w-6xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-bractea-soft">{c.eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-lg">{c.intro}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {slots.map((slot, i) => {
          const film = PROCESS.films[slot];
          return <figure key={slot} className="rounded-2xl border border-hueso/20 bg-selva-2 p-4">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-selva-3 text-hueso/70">
              {film ? <video controls preload="none" src={film.src} aria-label={film.alt[lang]} className="h-full w-full rounded-lg object-contain" /> : c.missing}
            </div>
            <figcaption className="mt-4"><h2 className="font-display text-2xl font-semibold">{c.slots[i]}</h2>
              {film && <p className="mt-2 text-sm text-hueso/75">{film.caption[lang]}</p>}
            </figcaption>
          </figure>;
        })}
      </div>
    </div>
  </main>;
}
