// ALL COPY IS DRAFT (BORRADOR) - written by the agent for owner review.
// Nothing here is approved. Items in [corchetes] are facts we still need from the owner.
import type { SizeKey } from "./pricing";

export type Lang = "es" | "en";

type SizeCopy = { name: string; examples: string; use: string };

export type Copy = {
  draftBanner: string;
  nav: { sizes: string; prices: string; how: string; who: string; faq: string; cta: string; other: string; otherHref: string };
  hero: { eyebrow: string; title: string; sub: string; cta: string; cta2: string; photoAlt: string };
  trust: string[];
  sizesTitle: string;
  sizesSub: string;
  from: string;
  perPlant: string;
  refPhoto: string;
  quoteOnly: string;
  specialNote: string;
  dropsTo: (price: string) => string;
  heroPrice: (price: string) => string;
  sizes: Record<SizeKey, SizeCopy>;
  priceTitle: string;
  priceSub: string;
  priceHead: { size: string; tier: (min: number, max: number | null) => string };
  resale: string;
  taxNote: string;
  howTitle: string;
  how: { t: string; d: string }[];
  whoTitle: string;
  who: { t: string; d: string }[];
  originTitle: string;
  origin: string[];
  originCaption: string;
  builderTitle: string;
  builderSub: string;
  builder: {
    qty: string; total: string; plants: string; tierLabel: string; subtotal: string;
    under: (missing: number) => string; ok: string; next: (need: number, price: string) => string; best: string; specialLine: string; send: string; copy: string; copied: string;
    pending: string; messageIntro: string; messageOutro: string; reset: string;
  };
  careTitle: string;
  care: { t: string; d: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  footer: { tagline: string; contact: string; credits: string; creditsIntro: string; rights: string };
};

export const COPY: Record<Lang, Copy> = {
  es: {
    draftBanner: "BORRADOR - textos y precios pendientes de aprobación",
    nav: { sizes: "Tallas", prices: "Precios", how: "Cómo funciona", who: "Para quién", faq: "Preguntas", cta: "Arma tu pedido", other: "EN", otherHref: "/en" },
    hero: {
      eyebrow: "Mayoreo · Puerto Vallarta, Jalisco",
      title: "Tillandsias al mayoreo, cultivadas en Puerto Vallarta.",
      sub: "Pedido mínimo de 50 plantas. Cuatro tallas, mezcla libre y precio por planta a la vista.",
      cta: "Arma tu pedido",
      cta2: "Ver precios",
      photoAlt: "Mesa de vivero con decenas de tillandsias de distintas especies",
    },
    trust: ["Mínimo 50 plantas", "Mezcla tallas y especies", "Precio por planta publicado", "[Cultivadas por Proyecto Indigo Azul: por confirmar]"],
    sizesTitle: "Cuatro tallas para cada proyecto",
    sizesSub: "Todas las tallas se pueden combinar en el mismo pedido. La disponibilidad por especie cambia con la temporada.",
    from: "desde",
    perPlant: "por planta",
    refPhoto: "Foto de referencia",
    quoteOnly: "Cotizar",
    specialNote: "Precio por cotización. La venta comercial de especies nativas requiere confirmar registro de vivero/UMA. [Por confirmar].",
    dropsTo: (p) => `baja a ${p} en 500+`,
    heroPrice: (p) => `${p} por planta en pedidos de 50 a 199`,
    sizes: {
      chica: { name: "Chica", examples: "Ionantha, bulbosa, fuchsii, schubertii", use: "Recuerdos de boda, detalles de mesa, kits de regalo." },
      mediana: { name: "Mediana", examples: "Caput-medusae, juncea, streptophylla", use: "Escritorios, recepciones, terrarios y centros de mesa." },
      grande: { name: "Grande", examples: "Caput-medusae grande, tectorum, utriculata", use: "Muros verdes, aparadores, lobbies y exhibición." },
      especial: { name: "Especial", examples: "Pieza grande, 15-40 cm", use: "Pieza protagonista para regalo corporativo o decoración premium. Precio por cotización." },
    },
    priceTitle: "Precios de mayoreo",
    priceSub: "El precio baja según el total de plantas del pedido, sin importar la mezcla de tallas.",
    priceHead: { size: "Talla", tier: (min, max) => (max ? `${min}-${max} plantas` : `${min}+ plantas`) },
    resale: "Precios por debajo del menudeo de tillandsias en MercadoLibre México (septiembre 2026).",
    taxNote: "Precios en pesos mexicanos. [IVA, factura y costo de envío: por confirmar].",
    howTitle: "Cómo funciona",
    how: [
      { t: "Arma tu pedido", d: "Elige cuántas plantas quieres de cada talla. Mínimo 50 en total." },
      { t: "Envíanos la solicitud", d: "Genera un resumen y mándalo por WhatsApp o correo." },
      { t: "Confirmamos", d: "Revisamos especies disponibles, fecha de entrega y envío a tu ciudad." },
      { t: "Pagas y enviamos", d: "Empacamos a mano cada planta para que llegue en buen estado." },
    ],
    whoTitle: "Para quién es",
    who: [
      { t: "Hoteles y restaurantes", d: "Decoración viva que no necesita tierra ni macetas." },
      { t: "Bodas y eventos", d: "Recuerdos para invitados y centros de mesa en volumen." },
      { t: "Regalos corporativos", d: "Un detalle vivo, fácil de cuidar, para clientes y equipos." },
      { t: "Tiendas y floristerías", d: "Producto de rotación con buen margen para reventa." },
    ],
    originTitle: "De nuestro vivero en Puerto Vallarta",
    origin: [
      "Las plantas de Tila crecen en Proyecto Indigo Azul, en Puerto Vallarta. [Descripción del proyecto (bosque comestible, número de variedades): por confirmar].",
      "Cada pedido de mayoreo apoya ese trabajo. [Detalle del impacto: por confirmar].",
    ],
    originCaption: "Tillandsia ionantha en floración",
    builderTitle: "Arma tu pedido",
    builderSub: "Ajusta cantidades y mira tu precio al momento. No se cobra nada aquí: solo preparas la solicitud.",
    builder: {
      qty: "Cantidad", total: "Total de plantas", plants: "plantas", tierLabel: "Nivel de precio", subtotal: "Subtotal estimado",
      under: (m) => `Te faltan ${m} plantas para el mínimo de 50.`,
      ok: "Listo para enviar.",
      next: (n, p) => `Te faltan ${n} plantas para bajar a ${p} por planta en Chica.`,
      best: "Ya tienes el mejor precio por volumen.",
      specialLine: "Xerographica: se cotiza aparte.",
      send: "Enviar por WhatsApp",
      copy: "Copiar resumen",
      copied: "Copiado",
      pending: "[Número de WhatsApp pendiente]",
      messageIntro: "Hola Tila, quiero cotizar un pedido de mayoreo:",
      messageOutro: "¿Me confirman disponibilidad y costo de envío? Gracias.",
      reset: "Reiniciar",
    },
    careTitle: "Cuidado básico",
    care: [
      { t: "Luz", d: "Mucha luz indirecta. Evita el sol directo del mediodía." },
      { t: "Agua", d: "Remójalas 20 a 30 minutos una vez por semana." },
      { t: "Secado", d: "Déjalas boca abajo hasta que sequen, en un lugar con aire." },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo mezclar tallas y especies?", a: "Sí. El mínimo de 50 es por el total del pedido, no por talla." },
      { q: "¿Qué especies hay disponibles?", a: "Depende de la temporada. Al recibir tu solicitud te confirmamos las especies de cada talla." },
      { q: "¿Hacen envíos a todo México?", a: "[Cobertura, paquetería y tiempos de envío: por confirmar]." },
      { q: "¿Emiten factura?", a: "[Por confirmar]." },
      { q: "¿Qué pasa si una planta llega dañada?", a: "[Política de garantía: por confirmar]." },
    ],
    footer: {
      tagline: "Tillandsias al mayoreo desde Puerto Vallarta.",
      contact: "Contacto: [WhatsApp y correo por confirmar]",
      credits: "Créditos de fotos",
      creditsIntro: "Fotos de referencia de Wikimedia Commons, usadas bajo su licencia. Se reemplazarán por fotos propias del vivero.",
      rights: "Tila · Proyecto Indigo Azul",
    },
  },
  en: {
    draftBanner: "DRAFT - copy and prices pending approval",
    nav: { sizes: "Sizes", prices: "Prices", how: "How it works", who: "Who it's for", faq: "FAQ", cta: "Build your order", other: "ES", otherHref: "/" },
    hero: {
      eyebrow: "Wholesale · Puerto Vallarta, Mexico",
      title: "Wholesale air plants, grown in Puerto Vallarta.",
      sub: "50-plant minimum. Four sizes, mix freely, per-plant prices in plain sight.",
      cta: "Build your order",
      cta2: "See prices",
      photoAlt: "Nursery table with dozens of air plants of different species",
    },
    trust: ["50-plant minimum", "Mix sizes and species", "Per-plant prices published", "[Grown by Proyecto Indigo Azul: to be confirmed]"],
    sizesTitle: "Four sizes for every project",
    sizesSub: "Every size can go in the same order. Species availability changes with the season.",
    from: "from",
    perPlant: "per plant",
    refPhoto: "Reference photo",
    quoteOnly: "Quote",
    specialNote: "Priced on request. Commercial sale of native species needs nursery/UMA registration confirmed. [To be confirmed].",
    dropsTo: (p) => `drops to ${p} at 500+`,
    heroPrice: (p) => `${p} per plant on orders of 50 to 199`,
    sizes: {
      chica: { name: "Small", examples: "Ionantha, bulbosa, fuchsii, schubertii", use: "Wedding favors, table details, gift kits." },
      mediana: { name: "Medium", examples: "Caput-medusae, juncea, streptophylla", use: "Desks, reception areas, terrariums, centerpieces." },
      grande: { name: "Large", examples: "Large caput-medusae, tectorum, utriculata", use: "Living walls, shop windows, lobbies, displays." },
      especial: { name: "Special", examples: "Large piece, 15-40 cm", use: "A statement piece for corporate gifts or premium decor. Priced on request." },
    },
    priceTitle: "Wholesale prices",
    priceSub: "The price drops with the total number of plants in your order, however you mix the sizes.",
    priceHead: { size: "Size", tier: (min, max) => (max ? `${min}-${max} plants` : `${min}+ plants`) },
    resale: "Priced below retail air plant listings on MercadoLibre Mexico (September 2026).",
    taxNote: "Prices in Mexican pesos. [VAT, invoicing and shipping cost: to be confirmed].",
    howTitle: "How it works",
    how: [
      { t: "Build your order", d: "Pick how many plants you want in each size. 50 minimum in total." },
      { t: "Send the request", d: "Generate a summary and send it by WhatsApp or email." },
      { t: "We confirm", d: "We check available species, delivery date and shipping to your city." },
      { t: "Pay and we ship", d: "Every plant is packed by hand so it arrives healthy." },
    ],
    whoTitle: "Who it's for",
    who: [
      { t: "Hotels and restaurants", d: "Living decor with no soil and no pots." },
      { t: "Weddings and events", d: "Guest favors and centerpieces in volume." },
      { t: "Corporate gifts", d: "A living, easy-care gift for clients and teams." },
      { t: "Shops and florists", d: "A fast-moving product with good resale margin." },
    ],
    originTitle: "From our nursery in Puerto Vallarta",
    origin: [
      "Tila plants grow at Proyecto Indigo Azul in Puerto Vallarta. [Project description (food forest, number of varieties): to be confirmed].",
      "Every wholesale order supports that work. [Impact details: to be confirmed].",
    ],
    originCaption: "Tillandsia ionantha in bloom",
    builderTitle: "Build your order",
    builderSub: "Set quantities and see your price right away. Nothing is charged here: you are only preparing a request.",
    builder: {
      qty: "Quantity", total: "Total plants", plants: "plants", tierLabel: "Price tier", subtotal: "Estimated subtotal",
      under: (m) => `${m} more plants to reach the 50 minimum.`,
      ok: "Ready to send.",
      next: (n, p) => `${n} more plants to drop Small to ${p} per plant.`,
      best: "You have the best volume price.",
      specialLine: "Xerographica: quoted separately.",
      send: "Send on WhatsApp",
      copy: "Copy summary",
      copied: "Copied",
      pending: "[WhatsApp number pending]",
      messageIntro: "Hi Tila, I'd like a quote for a wholesale order:",
      messageOutro: "Can you confirm availability and shipping cost? Thanks.",
      reset: "Reset",
    },
    careTitle: "Basic care",
    care: [
      { t: "Light", d: "Plenty of bright, indirect light. Avoid harsh midday sun." },
      { t: "Water", d: "Soak for 20 to 30 minutes once a week." },
      { t: "Drying", d: "Let them dry upside down somewhere with airflow." },
    ],
    faqTitle: "Questions",
    faq: [
      { q: "Can I mix sizes and species?", a: "Yes. The 50 minimum is for the whole order, not per size." },
      { q: "Which species are available?", a: "It depends on the season. We confirm species for each size when we get your request." },
      { q: "Do you ship across Mexico?", a: "[Coverage, carrier and delivery times: to be confirmed]." },
      { q: "Do you issue invoices (factura)?", a: "[To be confirmed]." },
      { q: "What if a plant arrives damaged?", a: "[Guarantee policy: to be confirmed]." },
    ],
    footer: {
      tagline: "Wholesale air plants from Puerto Vallarta.",
      contact: "Contact: [WhatsApp and email to be confirmed]",
      credits: "Photo credits",
      creditsIntro: "Reference photos from Wikimedia Commons, used under their licenses. To be replaced with our own nursery photos.",
      rights: "Tila · Proyecto Indigo Azul",
    },
  },
};

// Set when the owner provides it, digits only with country code, e.g. "52322XXXXXXX".
export const WHATSAPP_NUMBER = "";
