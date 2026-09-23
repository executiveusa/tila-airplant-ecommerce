import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { bricolage, figtree } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Tila · Wholesale Tillandsia bulbosa from Puerto Vallarta",
  description: "Wholesale Tillandsia bulbosa air plants from Puerto Vallarta. 50-plant minimum, three sizes plus clusters, per-plant prices.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0E1A11" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="bg-selva font-body text-hueso antialiased">{children}</body>
    </html>
  );
}
