import Image from "next/image";
import Link from "next/link";
import QuoteBuilder from "./QuoteBuilder";
import { RevealObserver, SmartHeader, MobileOrderBar } from "./Motion";
import { COPY, type Lang } from "@/content/copy";
import { SIZES, TIERS, CREDITS } from "@/content/pricing";
import { Money, RateNote } from "./Money";

// Put a React node into a copy template that expects a string.
const tpl = (fn: (p: string) => string, node: React.ReactNode) => { const [a, b] = fn("\u0000").split("\u0000"); return <>{a}{node}{b}</>; };

// Visual world: the bulbosa itself. Night-jungle green ground (selva), bract red (bractea) for action,
// flower violet (flor) and new-growth green (brote) as supporting color. Leaf-shaped corners, curling tendril lines.

function Tendril({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" fill="none" aria-hidden className={className}>
      <path d="M2 96c48-4 70-58 118-58 40 0 38 44 6 44-26 0-22-38 14-50 56-18 92 58 150 44 46-11 58-52 108-62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Head({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div data-reveal className="max-w-3xl">
      {eyebrow && <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-bractea-dark" : "text-bractea-soft"}`}>{eyebrow}</p>}
      <h2 className={`mt-3 font-display text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.02em] md:text-6xl ${light ? "text-selva" : "text-hueso"}`} style={{ fontVariationSettings: '"wdth" 88' }}>{title}</h2>
      {sub && <p className={`mt-4 text-base md:text-lg ${light ? "text-selva/70" : "text-hueso/65"}`}>{sub}</p>}
    </div>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const who = ["bg-flor", "bg-bractea", "bg-brote text-selva", "bg-selva-3"];
  return (
    <>
      <RevealObserver />
      <div className="relative z-50 bg-bractea px-4 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{c.draftBanner}</div>

      <SmartHeader>
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href={lang === "es" ? "/" : "/en"} className="font-display text-[1.7rem] font-bold tracking-[-0.04em] text-hueso">tila<span className="text-bractea">.</span></Link>
          <ul className="hidden items-center gap-8 text-sm text-hueso/75 md:flex">
            <li><a href="#tallas" className="transition-colors hover:text-hueso">{c.nav.sizes}</a></li>
            <li><a href="#precios" className="transition-colors hover:text-hueso">{c.nav.prices}</a></li>
            <li><a href="#como" className="transition-colors hover:text-hueso">{c.nav.how}</a></li>
            <li><a href="#faq" className="transition-colors hover:text-hueso">{c.nav.faq}</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <Link href={c.nav.otherHref} className="flex h-11 min-w-11 items-center justify-center rounded-full border border-hueso/20 px-3 text-xs font-semibold text-hueso active:scale-95">{c.nav.other}</Link>
            <a href="#pedido" className="flex h-11 items-center rounded-full bg-bractea px-5 text-sm font-semibold text-white transition-colors hover:bg-bractea-dark active:scale-95">{c.nav.cta}</a>
          </div>
        </nav>
      </SmartHeader>

      <main className="-mt-16">
        {/* Hero: full-bleed plant, headline sits in the foliage */}
        <section className="relative isolate min-h-[92svh] overflow-hidden md:min-h-[88vh]">
          <Image src="/images/tila/bulbosa-mediana.jpg" alt={c.hero.photoAlt} fill priority sizes="100vw" className="-z-10 object-cover object-[50%_30%] md:object-[70%_40%]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-selva via-selva/55 to-selva/10 md:bg-gradient-to-r md:from-selva md:via-selva/70 md:to-transparent" />
          <div className="mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:min-h-[88vh] md:justify-center md:pb-16">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-bractea-soft">{c.hero.eyebrow}</p>
            <h1 data-reveal style={{ ["--d" as string]: "80ms", fontVariationSettings: '"wdth" 82' }} className="mt-4 max-w-2xl font-display text-[3.1rem] font-bold leading-[0.92] tracking-[-0.035em] text-hueso sm:text-7xl md:text-8xl">{c.hero.title}</h1>
            <p data-reveal style={{ ["--d" as string]: "160ms" }} className="mt-5 max-w-md text-lg text-hueso/80">{c.hero.sub}</p>
            <div data-reveal style={{ ["--d" as string]: "240ms" }} className="mt-8 flex flex-wrap gap-3">
              <a href="#pedido" className="flex h-14 items-center rounded-full bg-bractea px-7 font-semibold text-white transition-colors hover:bg-bractea-dark active:scale-[0.97]">{c.hero.cta}</a>
              <a href="#precios" className="flex h-14 items-center rounded-full border border-hueso/30 px-7 font-semibold text-hueso backdrop-blur-sm transition-colors hover:bg-hueso/10 active:scale-[0.97]">{c.hero.cta2}</a>
            </div>
            <p data-reveal style={{ ["--d" as string]: "320ms" }} className="mt-6 text-sm text-hueso/70"><span className="font-semibold text-brote">{tpl(c.heroPrice, <Money mxn={SIZES[0].prices![0]} lang={lang} />)}</span></p>
          </div>
        </section>

        {/* Trust ribbon */}
        <div className="relative overflow-hidden border-y border-hueso/10 bg-selva-2 py-4">
          <div className="flex w-max animate-[tila-marquee_32s_linear_infinite] gap-10 whitespace-nowrap text-sm font-medium text-hueso/80 motion-reduce:animate-none">
            {[...c.trust, ...c.trust].map((t, i) => (
              <span key={i} aria-hidden={i >= c.trust.length} className="flex items-center gap-3"><span className="h-2 w-2 rotate-45 bg-bractea" />{t}</span>
            ))}
          </div>
        </div>

        {/* Sizes: swipe on phones, grid on desktop */}
        <section id="tallas" className="scroll-mt-16 py-16 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8"><Head eyebrow={c.nav.sizes} title={c.sizesTitle} sub={c.sizesSub} /></div>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:px-8 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-4 lg:overflow-visible">
            {SIZES.map((z, i) => (
              <article key={z.key} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }} className="group w-[78%] flex-none snap-start sm:w-[46%] lg:w-auto">
                <div className="leaf relative aspect-[4/5] overflow-hidden bg-selva-2">
                  <Image src={z.image} alt={`${c.sizes[z.key].name}: ${c.sizes[z.key].examples}`} fill sizes="(min-width:1024px) 25vw, 78vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-selva/70 px-3 py-1 text-xs font-medium text-hueso backdrop-blur">{z.cm || c.quoteOnly}</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] text-hueso">{c.sizes[z.key].name}</h3>
                  <p className="mt-1 text-sm text-brote">{c.sizes[z.key].examples}</p>
                  <p className="mt-2 text-sm text-hueso/65">{c.sizes[z.key].use}</p>
                  {z.prices ? (
                    <p className="mt-3 text-sm text-hueso/60"><span className="font-display text-2xl font-semibold text-hueso">{<Money mxn={z.prices[0]} lang={lang} />}</span> {c.perPlant} · {tpl(c.dropsTo, <Money mxn={z.prices[2]} lang={lang} />)}</p>
                  ) : (
                    <p className="mt-3 text-sm text-hueso/60"><span className="font-display text-2xl font-semibold text-hueso">{c.quoteOnly}</span></p>
                  )}
                </div>
              </article>
            ))}
            <span className="w-1 flex-none lg:hidden" aria-hidden />
          </div>
        </section>

        {/* Prices */}
        <section id="precios" className="scroll-mt-16 bg-selva-2 px-5 py-16 sm:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Head eyebrow={c.nav.prices} title={c.priceTitle} sub={c.priceSub} />
            <ul className="mt-10 grid gap-3 md:hidden">
              {SIZES.map((z) => (
                <li key={z.key} data-reveal className="leaf-sm border border-hueso/10 bg-selva p-4">
                  <p className="font-semibold text-hueso">{c.sizes[z.key].name} <span className="text-sm font-normal text-hueso/50">{z.cm}</span></p>
                  {z.prices ? (
                    <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                      {TIERS.map((t, i) => (
                        <div key={t.min} className={`leaf-sm px-1 py-2.5 ${i === 2 ? "bg-bractea/15" : "bg-hueso/5"}`}>
                          <dt className="text-[11px] text-hueso/55">{c.priceHead.tier(t.min, t.max)}</dt>
                          <dd className={`mt-0.5 font-display text-xl font-semibold tabular-nums ${i === 2 ? "text-bractea-soft" : "text-hueso"}`}>{<Money mxn={z.prices![i]} lang={lang} />}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="mt-2 text-sm text-hueso/65"><span className="font-display text-xl font-semibold text-hueso">{c.quoteOnly}</span> · {c.specialNote}</p>
                  )}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-12 hidden overflow-hidden border border-hueso/10 md:block leaf">
              <table className="w-full text-left">
                <thead className="bg-selva-3 text-hueso">
                  <tr>
                    <th className="p-5 text-sm font-semibold">{c.priceHead.size}</th>
                    {TIERS.map((t) => <th key={t.min} className="p-5 text-right text-sm font-semibold">{c.priceHead.tier(t.min, t.max)}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-hueso/10 bg-selva">
                  {SIZES.map((z) => (
                    <tr key={z.key} className="transition-colors hover:bg-hueso/[0.03]">
                      <td className="p-5"><span className="font-semibold text-hueso">{c.sizes[z.key].name}</span> <span className="text-sm text-hueso/50">{z.cm}</span></td>
                      {z.prices ? z.prices.map((p, i) => <td key={i} className={`p-5 text-right font-display text-xl font-semibold tabular-nums ${i === 2 ? "text-bractea-soft" : "text-hueso"}`}>{<Money mxn={p} lang={lang} />}</td>) : <td colSpan={3} className="p-5 text-right text-sm text-hueso/65"><span className="font-display text-xl font-semibold text-hueso">{c.quoteOnly}</span> · {c.specialNote}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-hueso/70">{c.resale}</p>
            <p className="mt-1 text-sm text-hueso/50">{c.taxNote} <RateNote lang={lang} /></p>
          </div>
        </section>

        {/* How it works: a tendril connects the steps */}
        <section id="como" className="scroll-mt-16 px-5 py-16 sm:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Head eyebrow={c.nav.how} title={c.howTitle} />
            <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
              <Tendril className="pointer-events-none absolute -top-10 left-0 hidden w-full text-bractea/40 md:block" />
              {c.how.map((s, i) => (
                <li key={s.t} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="relative border-l border-hueso/15 pl-5 md:border-l-0 md:pl-0">
                  <span className="font-display text-6xl font-bold leading-none tracking-[-0.04em] text-bractea" style={{ fontVariationSettings: '"wdth" 75' }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-semibold text-hueso">{s.t}</h3>
                  <p className="mt-1 text-hueso/65">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who it's for: color taken from the plant */}
        <section id="para-quien" className="scroll-mt-16 px-5 pb-16 sm:px-8 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <Head eyebrow={c.nav.who} title={c.whoTitle} />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {c.who.map((w, i) => (
                <li key={w.t} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }} className={`leaf p-7 md:p-9 ${who[i % who.length]} ${i === 2 ? "" : "text-hueso"}`}>
                  <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.02em]">{w.t}</h3>
                  <p className="mt-2 opacity-80">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Origin */}
        <section className="overflow-hidden bg-selva-2 px-5 py-16 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <figure data-reveal>
              <div className="leaf relative aspect-[4/5] overflow-hidden">
                <Image src="/images/tila/bulbosa-cumulo.jpg" alt={c.originCaption} fill loading="eager" sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-xs text-hueso/50">{c.originCaption}</figcaption>
            </figure>
            <div>
              <Head title={c.originTitle} />
              {c.origin.map((p, i) => <p key={p} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className={`mt-5 text-lg ${i === c.origin.length - 1 ? "border-l-2 border-bractea pl-4 text-hueso" : "text-hueso/75"}`}>{p}</p>)}
              <Tendril className="mt-8 w-48 text-brote/60" />
            </div>
          </div>
        </section>

        {/* Order builder: the one light surface, so the working area reads as paper */}
        <section id="pedido" className="scroll-mt-16 bg-hueso px-5 py-16 text-selva sm:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Head eyebrow={c.nav.cta} title={c.builderTitle} sub={c.builderSub} light />
            <div data-reveal className="mt-10"><QuoteBuilder lang={lang} /></div>
          </div>
        </section>

        {/* Care */}
        <section className="px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Head title={c.careTitle} />
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {c.care.map((k, i) => (
                <li key={k.t} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="border-t-2 border-brote pt-4">
                  <h3 className="text-xl font-semibold text-hueso">{k.t}</h3>
                  <p className="mt-1 text-hueso/65">{k.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-16 bg-selva-2 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Head eyebrow={c.nav.faq} title={c.faqTitle} />
            <div className="mt-10 divide-y divide-hueso/10 border-y border-hueso/10">
              {c.faq.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-hueso">
                    {f.q}
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-hueso/10 text-xl text-bractea-soft transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">+</span>
                  </summary>
                  <p className="max-w-3xl pb-5 text-hueso/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-selva px-5 pb-28 pt-14 text-hueso/75 sm:px-8 md:pb-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-6xl font-bold tracking-[-0.05em] text-hueso">tila<span className="text-bractea">.</span></p>
          <p className="mt-3">{c.footer.tagline}</p>
          <p className="mt-1 text-sm text-hueso/55">{c.footer.contact}</p>
          {CREDITS.length > 0 && (
            <details className="mt-8 text-xs text-hueso/50">
              <summary className="cursor-pointer">{c.footer.credits}</summary>
              <p className="mt-2">{c.footer.creditsIntro}</p>
              <ul className="mt-2 space-y-1">
                {CREDITS.map((cr) => <li key={cr.file}><a href={cr.url} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">{cr.author}</a> · {cr.license}</li>)}
              </ul>
            </details>
          )}
          <p className="mt-8 text-xs text-hueso/40">{c.footer.rights}</p>
        </div>
      </footer>

      <MobileOrderBar label={c.nav.cta} sub={<span>{c.from} <Money mxn={SIZES[0].prices![0]} lang={lang} /></span>} />
    </>
  );
}
