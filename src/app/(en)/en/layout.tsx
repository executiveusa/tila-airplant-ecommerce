import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi, fraunces } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Tila · Wholesale air plants from Puerto Vallarta",
  description: "Wholesale tillandsia air plants from Puerto Vallarta. 50-plant minimum, four sizes, per-plant prices.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#23351f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${fraunces.variable}`}>
      <body className="bg-cream font-satoshi text-ink antialiased">{children}</body>
    </html>
  );
}
