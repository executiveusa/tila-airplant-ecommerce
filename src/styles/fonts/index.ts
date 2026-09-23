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
