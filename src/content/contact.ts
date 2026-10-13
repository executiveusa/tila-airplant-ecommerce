import { SITE_FACTS, verifiedValue } from "./site-facts";

export type ContactConfig = { whatsapp: string | null; email: string | null };
export const CONTACT: ContactConfig = {
  whatsapp: verifiedValue(SITE_FACTS.contactWhatsApp),
  email: verifiedValue(SITE_FACTS.contactEmail),
};

// The new email label needs copy approval. WhatsApp uses existing approved builder.send copy
// once the owner supplies and verifies a number; the empty config keeps both links off.
export const CONTACT_PROPOSAL = {
  es: { email: "Enviar por correo", pending: "Contacto pendiente de confirmación." },
  en: { email: "Send by email", pending: "Contact pending confirmation." },
} as const;
export const CONTACT_COPY_APPROVED: boolean = false;

export function validInternationalDigits(value: string | null): value is string {
  return typeof value === "string" && /^[1-9][0-9]{8,14}$/.test(value);
}

export function validEmail(value: string | null): value is string {
  return typeof value === "string" && /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/.test(value);
}

export function contactLinks(config: ContactConfig, summary: string) {
  return {
    whatsapp: validInternationalDigits(config.whatsapp) ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(summary)}` : null,
    email: validEmail(config.email) ? `mailto:${config.email}?subject=${encodeURIComponent("Tila")}&body=${encodeURIComponent(summary)}` : null,
  };
}
