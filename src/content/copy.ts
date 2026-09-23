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
      eyebrow: "Tillandsia bulbosa · Mayoreo · Puerto Vallarta",
      title: "Tillandsia bulbosa al mayoreo, desde Puerto Vallarta.",
      sub: "Una sola especie, bien cuidada. Pedido mínimo de 50 plantas, tres tallas más cúmulos, y precio por planta a la vista.",
      cta: "Arma tu pedido",
      cta2: "Ver precios",
      photoAlt: "Tillandsia bulbosa en flor, con brácteas rojas y flores moradas",
    },
    trust: ["Mínimo 50 plantas", "Solo Tillandsia bulbosa", "Mezcla tallas libremente", "Cultivadas en Proyecto Indigo Azul"],
    sizesTitle: "Bulbosa en tres tallas y en cúmulo",
    sizesSub: "Todas se pueden combinar en el mismo pedido. La floración depende de la temporada. [Medidas por talla: propuesta, por confirmar].",
    from: "desde",
    perPlant: "por planta",
    refPhoto: "Foto de referencia",
    quoteOnly: "Cotizar",
    specialNote: "Varias plantas unidas en una sola pieza. Precio según tamaño del cúmulo.",
    dropsTo: (p) => `baja a ${p} en 500+`,
    heroPrice: (p) => `${p} por planta en pedidos de 50 a 199`,
    sizes: {
      chica: { name: "Chica", examples: "Planta joven, bulbo pequeño", use: "Recuerdos de boda, detalles de mesa, kits de regalo." },
      mediana: { name: "Mediana", examples: "Hojas rizadas bien formadas", use: "Escritorios, recepciones, terrarios y centros de mesa." },
      grande: { name: "Grande", examples: "Planta adulta, lista para florecer", use: "Aparadores, lobbies, arreglos y exhibición." },
      especial: { name: "Cúmulo", examples: "Varias bulbosas unidas", use: "Pieza protagonista para muros verdes, troncos y decoración de hotel. Precio por cotización." },
    },
    priceTitle: "Precios de mayoreo",
    priceSub: "El precio baja según el total de plantas del pedido, sin importar la mezcla de tallas.",
    priceHead: { size: "Talla", tier: (min, max) => (max ? `${min}-${max} plantas` : `${min}+ plantas`) },
    resale: "Precios por debajo del menudeo de Tillandsia bulbosa en MercadoLibre México (septiembre 2026).",
    taxNote: "Precios en pesos mexicanos (MXN). [IVA, factura y costo de envío: por confirmar].",
    howTitle: "Cómo funciona",
    how: [
      { t: "Arma tu pedido", d: "Elige cuántas plantas quieres de cada talla. Mínimo 50 en total." },
      { t: "Envíanos la solicitud", d: "Genera un resumen y mándalo por WhatsApp o correo." },
      { t: "Confirmamos", d: "Revisamos disponibilidad por talla, fecha de entrega y envío a tu ciudad." },
      { t: "Pagas y enviamos", d: "Empacamos a mano cada planta para que llegue en buen estado." },
    ],
    whoTitle: "Para quién es",
    who: [
      { t: "Hoteles y restaurantes", d: "Decoración viva que no necesita tierra ni macetas." },
      { t: "Bodas y eventos", d: "Recuerdos para invitados y centros de mesa en volumen." },
      { t: "Regalos corporativos", d: "Un detalle vivo, fácil de cuidar, para clientes y equipos." },
      { t: "Tiendas y floristerías", d: "Producto de rotación con buen margen para reventa." },
    ],
    originTitle: "Nativa de México, cultivada por nosotros",
    origin: [
      "La Tillandsia bulbosa crece de forma natural en el sur de México, Centroamérica y el Caribe. Su base en forma de bulbo y sus hojas rizadas la hacen fácil de reconocer, y cuando florece se pinta de rojo y morado.",
      "Nosotros mismos las cultivamos en Proyecto Indigo Azul, en Puerto Vallarta. Son plantas cultivadas, no extraídas del monte.",
    ],
    originCaption: "Cúmulo de Tillandsia bulbosa en flor",
    builderTitle: "Arma tu pedido",
    builderSub: "Ajusta cantidades y mira tu precio al momento. No se cobra nada aquí: solo preparas la solicitud.",
    builder: {
      qty: "Cantidad", total: "Total de plantas", plants: "plantas", tierLabel: "Nivel de precio", subtotal: "Subtotal estimado",
      under: (m) => `Te faltan ${m} plantas para el mínimo de 50.`,
      ok: "Listo para enviar.",
      next: (n, p) => `Te faltan ${n} plantas para bajar a ${p} por planta en talla Chica.`,
      best: "Ya tienes el mejor precio por volumen.",
      specialLine: "Cúmulos: se cotizan aparte.",
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
      { t: "Agua", d: "Remójalas 20 a 30 minutos una vez por semana. La bulbosa agradece algo más de humedad que otras tillandsias." },
      { t: "Secado", d: "Sécalas boca abajo, con aire, para que no quede agua dentro del bulbo." },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Puedo mezclar tallas?", a: "Sí. El mínimo de 50 es por el total del pedido, no por talla." },
      { q: "¿Venden otras especies?", a: "No. Nos especializamos en Tillandsia bulbosa. Al recibir tu solicitud te confirmamos disponibilidad por talla y si hay plantas en flor." },
      { q: "¿Cuentan con registro de vivero o UMA?", a: "[Registro ante SEMARNAT: por confirmar]." },
      { q: "¿Hacen envíos a todo México?", a: "[Cobertura, paquetería y tiempos de envío: por confirmar]." },
      { q: "¿Emiten factura?", a: "[Por confirmar]." },
      { q: "¿Qué pasa si una planta llega dañada?", a: "[Política de garantía: por confirmar]." },
    ],
    footer: {
      tagline: "Tillandsia bulbosa al mayoreo desde Puerto Vallarta.",
      contact: "Contacto: [WhatsApp y correo por confirmar]",
      credits: "Créditos de fotos",
      creditsIntro: "Fotos de referencia de Wikimedia Commons, usadas bajo su licencia.",
      rights: "Tila · Proyecto Indigo Azul",
    },
  },
  en: {
    draftBanner: "DRAFT - copy and prices pending approval",
    nav: { sizes: "Sizes", prices: "Prices", how: "How it works", who: "Who it's for", faq: "FAQ", cta: "Build your order", other: "ES", otherHref: "/" },
    hero: {
      eyebrow: "Tillandsia bulbosa · Wholesale · Puerto Vallarta",
      title: "Wholesale Tillandsia bulbosa from Puerto Vallarta.",
      sub: "One species, well cared for. 50-plant minimum, three sizes plus clusters, per-plant prices in plain sight.",
      cta: "Build your order",
      cta2: "See prices",
      photoAlt: "Tillandsia bulbosa in bloom, with red bracts and purple flowers",
    },
    trust: ["50-plant minimum", "Tillandsia bulbosa only", "Mix sizes freely", "Grown at Proyecto Indigo Azul"],
    sizesTitle: "Bulbosa in three sizes and in clusters",
    sizesSub: "Mix them all in one order. Blooming depends on the season. [Size ranges: proposal, to be confirmed].",
    from: "from",
    perPlant: "per plant",
    refPhoto: "Reference photo",
    quoteOnly: "Quote",
    specialNote: "Several plants grown together as one piece. Priced by cluster size.",
    dropsTo: (p) => `drops to ${p} at 500+`,
    heroPrice: (p) => `${p} per plant on orders of 50 to 199`,
    sizes: {
      chica: { name: "Small", examples: "Young plant, small bulb", use: "Wedding favors, table details, gift kits." },
      mediana: { name: "Medium", examples: "Full, curly leaves", use: "Desks, reception areas, terrariums, centerpieces." },
      grande: { name: "Large", examples: "Mature plant, ready to bloom", use: "Shop windows, lobbies, arrangements, displays." },
      especial: { name: "Cluster", examples: "Several bulbosas grown together", use: "A statement piece for living walls, driftwood mounts and hotel decor. Priced on request." },
    },
    priceTitle: "Wholesale prices",
    priceSub: "The price drops with the total number of plants in your order, however you mix the sizes.",
    priceHead: { size: "Size", tier: (min, max) => (max ? `${min}-${max} plants` : `${min}+ plants`) },
    resale: "Priced below retail Tillandsia bulbosa listings on MercadoLibre Mexico (September 2026).",
    taxNote: "Prices in US dollars (USD), converted from our peso prices and rounded up. [VAT, invoicing and shipping cost: to be confirmed].",
    howTitle: "How it works",
    how: [
      { t: "Build your order", d: "Pick how many plants you want in each size. 50 minimum in total." },
      { t: "Send the request", d: "Generate a summary and send it by WhatsApp or email." },
      { t: "We confirm", d: "We check availability by size, delivery date and shipping to your city." },
      { t: "Pay and we ship", d: "Every plant is packed by hand so it arrives healthy." },
    ],
    whoTitle: "Who it's for",
    who: [
      { t: "Hotels and restaurants", d: "Living decor with no soil and no pots." },
      { t: "Weddings and events", d: "Guest favors and centerpieces in volume." },
      { t: "Corporate gifts", d: "A living, easy-care gift for clients and teams." },
      { t: "Shops and florists", d: "A fast-moving product with good resale margin." },
    ],
    originTitle: "Native to Mexico, grown by us",
    origin: [
      "Tillandsia bulbosa grows wild in southern Mexico, Central America and the Caribbean. Its bulb-shaped base and curly leaves make it easy to spot, and when it blooms it turns red and purple.",
      "We grow them ourselves at Proyecto Indigo Azul in Puerto Vallarta. They are cultivated, not taken from the wild.",
    ],
    originCaption: "A cluster of Tillandsia bulbosa in bloom",
    builderTitle: "Build your order",
    builderSub: "Set quantities and see your price right away. Nothing is charged here: you are only preparing a request.",
    builder: {
      qty: "Quantity", total: "Total plants", plants: "plants", tierLabel: "Price tier", subtotal: "Estimated subtotal",
      under: (m) => `${m} more plants to reach the 50 minimum.`,
      ok: "Ready to send.",
      next: (n, p) => `${n} more plants to drop Small to ${p} per plant.`,
      best: "You have the best volume price.",
      specialLine: "Clusters: quoted separately.",
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
      { t: "Water", d: "Soak for 20 to 30 minutes once a week. Bulbosa likes a bit more moisture than most air plants." },
      { t: "Drying", d: "Dry upside down with airflow so no water sits inside the bulb." },
    ],
    faqTitle: "Questions",
    faq: [
      { q: "Can I mix sizes?", a: "Yes. The 50 minimum is for the whole order, not per size." },
      { q: "Do you sell other species?", a: "No. We specialize in Tillandsia bulbosa. When we get your request we confirm availability by size and whether plants are in bloom." },
      { q: "Are you registered as a nursery or UMA?", a: "[SEMARNAT registration: to be confirmed]." },
      { q: "Do you ship across Mexico?", a: "[Coverage, carrier and delivery times: to be confirmed]." },
      { q: "Do you issue invoices (factura)?", a: "[To be confirmed]." },
      { q: "What if a plant arrives damaged?", a: "[Guarantee policy: to be confirmed]." },
    ],
    footer: {
      tagline: "Wholesale Tillandsia bulbosa from Puerto Vallarta.",
      contact: "Contact: [WhatsApp and email to be confirmed]",
      credits: "Photo credits",
      creditsIntro: "Reference photos from Wikimedia Commons, used under their licenses.",
      rights: "Tila · Proyecto Indigo Azul",
    },
  },
};

// Set when the owner provides it, digits only with country code, e.g. "52322XXXXXXX".
export const WHATSAPP_NUMBER = "";
