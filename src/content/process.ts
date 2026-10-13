// PENDING OWNER REVIEW. Owner WhatsApp 2026-10-10 10:59:51 is the only cultivation source.
// Media stays empty until owner footage, rights, tree names and bilingual copy are signed off.
export type FilmSlot = "trees" | "growing" | "soil";
export type OwnedFilm = {
  src: string;
  source: string;
  rights: string;
  filmedOn: string;
  treeSpecies: string;
  alt: { es: string; en: string };
  caption: { es: string; en: string };
  isActualTilaStock: true;
};
export type ProcessConfig = {
  publication: "pending" | "approved";
  copyApproval: { es: boolean; en: boolean };
  films: Record<FilmSlot, OwnedFilm | null>;
};

export const PROCESS: ProcessConfig = {
  publication: "pending",
  copyApproval: { es: false, en: false },
  films: { trees: null, growing: null, soil: null },
};
export const PROCESS_ROUTES = { es: "/proceso", en: "/en/process" } as const;

export function processReady(config: ProcessConfig): boolean {
  return config.publication === "approved" && config.copyApproval.es && config.copyApproval.en &&
    Object.values(config.films).every((film) => !!film && !!film.src && film.src.startsWith("/media/tila/") &&
      !!film.source && !!film.rights && !!film.filmedOn && !!film.treeSpecies &&
      !!film.alt.es && !!film.alt.en && !!film.caption.es && !!film.caption.en && film.isActualTilaStock === true);
}

export const PROCESS_PROPOSAL = {
  es: {
    eyebrow: "BORRADOR · Pendiente de aprobación",
    title: "Cómo cultivamos nuestras plantas",
    intro: "Las cultivamos en los árboles. Nunca tocan el suelo.",
    slots: ["Los árboles", "El cultivo", "Sin contacto con el suelo"],
    missing: "Video y nombre del árbol pendientes.",
  },
  en: {
    eyebrow: "DRAFT · Pending approval",
    title: "How we grow our plants",
    intro: "We grow them in trees. They never touch the soil.",
    slots: ["The trees", "Growing", "No soil contact"],
    missing: "Video and tree name pending.",
  },
} as const;
