// Tila wholesale price list - Tillandsia bulbosa only (MXN per plant). PROPOSAL - pending owner approval.
// Basis: MercadoLibre Mexico retail listings read 2026-09-23 (see PRICING-BASIS.md).
// Rule: wholesale sits ~50-60% under the per-plant price of retail multi-packs,
// so a reseller can roughly double it and still land inside the MercadoLibre range.

export type SizeKey = "chica" | "mediana" | "grande" | "especial";

export type Tier = { min: number; max: number | null };

export const TIERS: Tier[] = [
  { min: 50, max: 199 },
  { min: 200, max: 499 },
  { min: 500, max: null },
];

export const MIN_ORDER = 50;

export type Size = {
  key: SizeKey;
  cm: string;
  prices: [number, number, number] | null; // per plant, by tier; null = quote only
  image: string;
};

export const SIZES: Size[] = [
  { key: "chica", cm: "8-12 cm", prices: [42, 36, 30], image: "/images/tila/bulbosa-chica.jpg" },
  { key: "mediana", cm: "13-18 cm", prices: [60, 52, 45], image: "/images/tila/bulbosa-mediana.jpg" },
  { key: "grande", cm: "19-25 cm", prices: [85, 74, 64], image: "/images/tila/bulbosa-grande.jpg" },
  { key: "especial", cm: "", prices: null, image: "/images/tila/bulbosa-cumulo.jpg" },
];

export function nextTier(total: number): { need: number; index: number } | null {
  const i = tierIndex(total);
  if (total < MIN_ORDER) return null;
  if (i >= TIERS.length - 1) return null;
  return { need: TIERS[i + 1].min - total, index: i + 1 };
}

export function tierIndex(total: number): number {
  if (total >= 500) return 2;
  if (total >= 200) return 1;
  return 0;
}

export const mxn = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

// All current photos are Tila's own (sent by the owner 2026-09-23), so no third-party credits.
export const CREDITS: { file: string; author: string; license: string; url: string }[] = [];
