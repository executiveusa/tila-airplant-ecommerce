import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    { path: "./Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-satoshi",
});

const fraunces = localFont({
  src: [{ path: "./Fraunces-var.woff2", weight: "400 600", style: "normal" }],
  fallback: ["Georgia", "serif"],
  variable: "--font-fraunces",
});

export { satoshi, fraunces };

import { Bricolage_Grotesque, Figtree } from "next/font/google";

// Tila visual world: display = Bricolage Grotesque (ink-trap swells echo the bulbosa's bulb and curling leaves),
// body = Figtree (warm, open, very legible on phones). Chosen per the design law: derived from the project, not a default.
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", axes: ["opsz", "wdth"], display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export { bricolage, figtree };
