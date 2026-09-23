import Image from "next/image";
import Link from "next/link";
import QuoteBuilder from "./QuoteBuilder";
import { COPY, type Lang } from "@/content/copy";
import { SIZES, TIERS, mxn, CREDITS } from "@/content/pricing";

function Section({ id, title, sub, children, className = "" }: { id?: string; title: string; sub?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-16 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-base text-ink/70 md:text-lg">{sub}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <>
      <div className="bg-clay px-4 py-1.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white">{c.draftBanner}</div>
      <header className="sticky top-0 z-30 border-b border-moss/10 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href={lang === "es" ? "/" : "/en"} className="font-display text-2xl tracking-tight text-moss">tila<span className="text-clay">.</span></Link>
          <ul className="hidden items-center gap-7 text-sm text-ink/75 md:flex">
            <li><a href="#tallas" className="hover:text-moss">{c.nav.sizes}</a></li>
            <li><a href="#precios" className="hover:text-moss">{c.nav.prices}</a></li>
            <li><a href="#como" className="hover:text-moss">{c.nav.how}</a></li>
            <li><a href="#faq" className="hover:text-moss">{c.nav.faq}</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <Link href={c.nav.otherHref} className="flex h-10 min-w-10 items-center justify-center rounded-full border border-moss/20 px-3 text-xs font-medium text-moss">{c.nav.other}</Link>
            <a href="#pedido" className="flex h-10 items-center rounded-full bg-moss px-4 text-sm font-medium text-cream hover:bg-moss-dark">{c.nav.cta}</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="px-5 pb-12 pt-10 sm:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-clay">{c.hero.eyebrow}</p>
              <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl">{c.hero.title}</h1>
              <p className="mt-5 max-w-lg text-lg text-ink/70">{c.hero.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#pedido" className="flex h-12 items-center rounded-full bg-moss px-6 font-medium text-cream hover:bg-moss-dark">{c.hero.cta}</a>
                <a href="#precios" className="flex h-12 items-center rounded-full border border-moss/30 px-6 font-medium text-moss hover:bg-white">{c.hero.cta2}</a>
              </div>
              <p className="mt-6 text-sm text-ink/60">{c.from} <span className="font-medium text-ink">{mxn(SIZES[0].prices[2])}</span> {c.perPlant}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] md:aspect-[4/5]">
              <Image src="/images/tila/hero-vivero.jpg" alt={c.hero.photoAlt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <div className="border-y border-moss/10 bg-white/60 px-5 py-5 sm:px-8">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink/80 md:grid-cols-4">
            {c.trust.map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 flex-none rounded-full bg-clay" />{t}</li>
            ))}
          </ul>
        </div>

        <Section id="tallas" title={c.sizesTitle} sub={c.sizesSub}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SIZES.map((z) => (
              <article key={z.key} className="group overflow-hidden rounded-3xl border border-moss/10 bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={z.image} alt={`${c.sizes[z.key].name}: ${c.sizes[z.key].examples}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl text-ink">{c.sizes[z.key].name}</h3>
                    <span className="text-sm text-ink/55">{z.cm}</span>
                  </div>
                  <p className="mt-1 text-sm italic text-ink/60">{c.sizes[z.key].examples}</p>
                  <p className="mt-3 text-sm text-ink/75">{c.sizes[z.key].use}</p>
                  <p className="mt-4 text-sm text-ink/60">{c.from} <span className="font-display text-xl text-moss">{mxn(z.prices[2])}</span></p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="precios" title={c.priceTitle} sub={c.priceSub} className="bg-sand">
          <ul className="grid gap-3 sm:hidden">
            {SIZES.map((z) => (
              <li key={z.key} className="rounded-2xl bg-white p-4">
                <p className="font-medium text-ink">{c.sizes[z.key].name} <span className="text-sm font-normal text-ink/55">{z.cm}</span></p>
                <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                  {TIERS.map((t, i) => (
                    <div key={t.min} className="rounded-xl bg-sand/60 px-1 py-2">
                      <dt className="text-[11px] text-ink/60">{c.priceHead.tier(t.min, t.max)}</dt>
                      <dd className="mt-0.5 font-display text-lg tabular-nums text-moss">{mxn(z.prices[i])}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          <div className="hidden sm:block">
            <table className="w-full overflow-hidden rounded-2xl bg-white text-left">
              <thead className="bg-moss text-cream">
                <tr>
                  <th className="p-4 text-sm font-medium">{c.priceHead.size}</th>
                  {TIERS.map((t) => <th key={t.min} className="p-4 text-right text-sm font-medium">{c.priceHead.tier(t.min, t.max)}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-moss/10">
                {SIZES.map((z) => (
                  <tr key={z.key}>
                    <td className="p-4"><span className="font-medium text-ink">{c.sizes[z.key].name}</span> <span className="text-sm text-ink/55">{z.cm}</span></td>
                    {z.prices.map((p, i) => <td key={i} className="p-4 text-right tabular-nums text-ink">{mxn(p)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-ink/70">{c.resale}</p>
          <p className="mt-1 text-sm text-ink/55">{c.taxNote}</p>
        </Section>

        <Section id="como" title={c.howTitle}>
          <ol className="grid gap-5 md:grid-cols-4">
            {c.how.map((s, i) => (
              <li key={s.t} className="rounded-3xl border border-moss/10 bg-white p-6">
                <span className="font-display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-medium text-ink">{s.t}</h3>
                <p className="mt-1 text-sm text-ink/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="para-quien" title={c.whoTitle} className="bg-moss [&_h2]:text-cream">
          <ul className="grid gap-px overflow-hidden rounded-3xl bg-cream/15 sm:grid-cols-2">
            {c.who.map((w) => (
              <li key={w.t} className="bg-moss p-6 md:p-8">
                <h3 className="font-display text-2xl text-cream">{w.t}</h3>
                <p className="mt-2 text-cream/75">{w.d}</p>
              </li>
            ))}
          </ul>
        </Section>

        <section className="px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image src="/images/tila/ionantha-rubor.jpg" alt={c.originCaption} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-xs text-ink/50">{c.originCaption}</figcaption>
            </figure>
            <div>
              <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">{c.originTitle}</h2>
              {c.origin.map((p) => <p key={p} className="mt-5 text-lg text-ink/75">{p}</p>)}
            </div>
          </div>
        </section>

        <Section id="pedido" title={c.builderTitle} sub={c.builderSub} className="bg-sand">
          <QuoteBuilder lang={lang} />
        </Section>

        <Section title={c.careTitle}>
          <ul className="grid gap-5 md:grid-cols-3">
            {c.care.map((k) => (
              <li key={k.t} className="border-t-2 border-clay pt-4">
                <h3 className="text-lg font-medium text-ink">{k.t}</h3>
                <p className="mt-1 text-ink/70">{k.d}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="faq" title={c.faqTitle} className="bg-white/60">
          <div className="divide-y divide-moss/15 border-y border-moss/15">
            {c.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink">
                  {f.q}
                  <span className="text-2xl text-clay transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-ink px-5 py-12 text-cream/80 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-3xl text-cream">tila<span className="text-clay">.</span></p>
          <p className="mt-2">{c.footer.tagline}</p>
          <p className="mt-1 text-sm text-cream/60">{c.footer.contact}</p>
          <details className="mt-8 text-xs text-cream/55">
            <summary className="cursor-pointer">{c.footer.credits}</summary>
            <p className="mt-2">{c.footer.creditsIntro}</p>
            <ul className="mt-2 space-y-1">
              {CREDITS.map((cr) => <li key={cr.file}><a href={cr.url} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">{cr.author}</a> · {cr.license}</li>)}
            </ul>
          </details>
          <p className="mt-8 text-xs text-cream/40">{c.footer.rights}</p>
        </div>
      </footer>
    </>
  );
}
