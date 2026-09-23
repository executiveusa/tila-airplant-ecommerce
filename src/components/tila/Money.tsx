"use client";
import { useRate, unit, num, code, rateDate, type Cur } from "./rate";

// A price with a visible currency code: "$2.45 USD" on the EN page, "$42 MXN" on the ES page.
export function Money({ mxn, lang }: { mxn: number; lang: Cur }) {
  const r = useRate();
  return (
    <span className="whitespace-nowrap">
      {num(unit(mxn, lang, r), lang)}
      <span className="ml-[0.25em] align-baseline text-[0.55em] font-semibold tracking-wide opacity-70">{code(lang)}</span>
    </span>
  );
}

export function RateNote({ lang }: { lang: Cur }) {
  const r = useRate();
  if (lang !== "en") return null;
  return <>Rate used: 1 USD = {r.rate.toFixed(2)} MXN ({rateDate(r.date, lang)}), updated daily.</>;
}
