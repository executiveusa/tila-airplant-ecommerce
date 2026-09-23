import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { bricolage, figtree } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Tila · Tillandsia bulbosa al mayoreo desde Puerto Vallarta",
  description: "Tillandsia bulbosa al mayoreo desde Puerto Vallarta. Pedido mínimo 50 plantas, tres tallas y cúmulos, precio por planta publicado.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0E1A11" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${bricolage.variable} ${figtree.variable}`}>
      <body className="bg-selva font-body text-hueso antialiased">{children}</body>
    </html>
  );
}
