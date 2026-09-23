// Tila wholesale price list (MXN per plant). PROPOSAL - pending owner approval.
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
  { key: "chica", cm: "5-10 cm", prices: [38, 33, 28], image: "/images/tila/ionantha-par.jpg" },
  { key: "mediana", cm: "12-19 cm", prices: [75, 65, 55], image: "/images/tila/mediana-streptophylla.jpg" },
  { key: "grande", cm: "20-35 cm", prices: [140, 120, 100], image: "/images/tila/grande-tectorum.jpg" },
  { key: "especial", cm: "Xerographica", prices: null, image: "/images/tila/especial-xerographica.jpg" },
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

export const CREDITS = [
  { file: "hero-vivero.jpg", author: "cultivar413", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:210820_005_SD_Botanic_Garden_-_Plant_Shop,_Tillandsia_%27Victoria%27,_Tillandsia_tectorum_var_globosa,_Tillandsia_%27Green_Star%27,_Tillandsia_paleacea_(Flaca),_Tillandsia_brachycaulos.jpg" },
  { file: "ionantha-par.jpg", author: "Agnes Monkelbaan", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_ionantha_(luchtplantje)._20-12-2020._(actm.)_01.jpg" },
  { file: "grande-tectorum.jpg", author: "Fen37", license: "CC0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_tectorum.jpg" },
  { file: "especial-xerographica.jpg", author: "Mokkie", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_xerographica_2.jpg" },
  { file: "ionantha-rubor.jpg", author: "Mokkie", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Blushing_Bride_Airplant_(Tillandsia_ionantha).jpg" },
  { file: "mediana-streptophylla.jpg", author: "salchu", license: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_streptophylla_(6140977688).jpg" },
  { file: "flor-stricta-unused.jpg", author: "Agnieszka Kwiecień, Nova", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_stricta_2021-09-03_01.jpg" },
  { file: "xerographica-estilo.jpg", author: "Cavabienmerci", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Tillandsia_Xerographica_as_a_houseplant.jpg" },
];
