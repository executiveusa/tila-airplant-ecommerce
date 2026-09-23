import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi, fraunces } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Tila · Tillandsia bulbosa al mayoreo desde Puerto Vallarta",
  description: "Tillandsia bulbosa al mayoreo desde Puerto Vallarta. Pedido mínimo 50 plantas, tres tallas y cúmulos, precio por planta publicado.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#23351f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${satoshi.variable} ${fraunces.variable}`}>
      <body className="bg-cream font-satoshi text-ink antialiased">{children}</body>
    </html>
  );
}
