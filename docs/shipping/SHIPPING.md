# Shipping Tila bulbosa lots inside Mexico

Researched 2026-09-23. Every rule below has a source. Re-check sources older than 30 days before relying on a price.

## 1. The big finding: most parcel carriers list live plants as prohibited
| Carrier | Live plants? | Source |
|---|---|---|
| Estafeta | **Prohibited** - "Plantas, vegetales, semillas y animales vivos o muertos" | https://www.estafeta.com/documents/32464/91510/ArticulosRestringidos.pdf/31d4b685-f1b7-addf-c76a-7f60e6d80947?t=1723642704240 ; packing manual https://www.estafeta.com/documents/d/guest/manualempaque-pdf |
| 99minutos | **Prohibited** - "Plantas y material vegetal" (also on their ML Flex plugin page) | https://developers.99minutos.com/page/meli-flex ; https://developers.99minutos.com/page/shopify |
| Paquetexpress | **Accepted with conditions** as "Mercancías perecederas (origen animal o vegetal)": no temperature control, ocurre (branch pickup) only, packaging must prevent crushing, no dry ice, **no insurance**, freight prepaid at origin | https://www.paquetexpress.com.mx/politica-de-aceptacion-de-mercancia/ |
| DHL Express MX | Not confirmed. T&C lists unacceptable shipments; plants not found in the text we could read; rate guide says to ask your account executive for the prohibited list | https://mydhl.express.dhl/content/dam/downloads/mx/es/t-c/terms_conditions_of_carriage_mx_es-2021.pdf.coredownload.pdf ; https://mydhl.express.dhl/content/dam/downloads/mx/es/rate-guide/service_and_rate_guide_mx_es_2025.pdf.coredownload.pdf |
| FedEx MX | Not confirmed - FedEx pages blocked our fetch | https://www.fedex.com/es-mx/shipping/prohibited-items.html |
| Redpack | Not confirmed from Redpack itself; a trade article lists "Plantas vivas o muertas" among typical parcel prohibitions | https://www.redpack.com.mx/es/articulos-prohibidos/ ; https://transporte.mx/estan-prohibidos-estos-son-60-articulos-que-no-se-pueden-enviar-por-paqueteria/ |
| Correos de México | Law bars perishables and live animals; plants not confirmed | https://todosloshechos.es/que-permite-enviar-correos-de-mexico (secondary) |

Practical meaning: plant sellers on MercadoLibre and on their own sites do ship bulbosa across Mexico (e.g. https://suculentasdzitya.com/productos/tillandsia-bulbosa/ offers free shipping in Mexico), but carrier rules on paper are strict. The honest path is to confirm in ML seller central whether the plant category is allowed on Mercado Envíos before the first listing, and keep a named, compliant backup (Paquetexpress perishable service).

## 2. How MercadoLibre shipping works (Mercado Envíos)
- **Colecta / Agencias (drop-off) / Full** share one cost table by weight and price. From 299 MXN the buyer gets free shipping and the seller pays. Source: https://snowprofit.com/blog/costos-envio-mercadolibre (verified by them against ML's official table, 2026-09-08); official page https://www.mercadolibre.com.mx/ayuda/costos-envios-gratis_3287
- **Seller cost for a listing priced 999 MXN or more, green reputation (50% discount applied):** 0.5-1 kg 74.50 | 1-2 kg 84.50 | 2-3 kg 95 | 3-4 kg 103 | 4-5 kg 110 MXN. Same source.
- **New account (no reputation):** pays the full rate, about double (e.g. 104.80 vs 52.40 for a small parcel). Same source.
- **Flex** = seller delivers with own vehicle or a Flex courier, tracked in the Flex app. Requires yellow or green reputation, so not available on day one. Source: https://envios.mercadolibre.com.mx/envios-flex
- **Full** = ML stores and ships your stock. Not a fit for live plants that need light and care.
- "Own-label" shipping outside ML (seller buys a guide from Paquetexpress etc.) is only possible if the listing is not forced onto Mercado Envíos; verify in seller central for the category.

## 3. Packaging a 50-plant bulbosa lot (no soil)
Grower guidance (air plants absorb water through leaves):
- Water 24 h before packing, then let them dry fully; never pack wet - wet plants rot in the box. Sources: https://izzyplants.com/blogs/the-complete-guide-to-shipping-plants/do-you-water-plants-before-shipping ; https://www.airplantstips.com/post/304.html
- Wrap in dry paper (newspaper or kraft), bundle by size, no plastic bags.
- Rigid cardboard box with a few ventilation holes; paper or shredded paper void fill so plants cannot shift.
- Ship early in the week so the box does not sit in a warehouse over the weekend. Source: https://shippinglabel.co/how-to-ship/plants
- Label "PLANTAS VIVAS - NO APLASTAR - ESTE LADO ARRIBA".
- Photo of the open packed box and the sealed box for every order (evidence for claims).
- Include a small care card (ES) + link to the Tila site care page.

## 4. Cost per 50-plant lot (estimate - weigh a real lot to confirm)
We do not yet know the packed weight. If one lot packs at 1-2 kg, ML charges the seller about 84.50 MXN at green reputation and roughly double while the account is new. Against a 2,100-4,250 MXN lot this is 2-8% of the sale. Mercado Envíos pricing is national (same table regardless of destination state).

## 5. Delivery time and insurance
- Mercado Envíos: ML shows the promised date per buyer; transit depends on carrier and zone. Not measured yet - log every shipment in `icm/memory/shipping-carriers.md`.
- Paquetexpress perishable service: **no insurance** available.
- Bulbosa tolerates several days in a dark box if packed dry (grower guidance above); exact tolerance for our stock to be measured.

## 6. Legal / plant-status notes
- CITES Appendix II covers only a short list of Tillandsia species (harrisii, kammii, kautskyi, mauryana, sprengeliana, sucrei, xerographica); bulbosa is not one of them, and sales are domestic anyway. Source: https://journals.flvc.org/selbyana/article/view/120999 ; current appendices https://cites.org/eng/app/appendices.php
- NOM-059-SEMARNAT-2010 (Mexican species-at-risk list): bulbosa status **not verified** - check before claiming anything. https://www.gob.mx/profepa/documentos/norma-oficial-mexicana-nom-059-semarnat-2010
- Commercial nurseries handling native wild species may need a SEMARNAT registration (UMA / PIMVS). Status for Proyecto Indigo Azul: open question. https://vida---diaria.blogspot.com/2021/04/que-es-y-como-tramitar-una-pimvs.html (secondary)
- MercadoLibre works with PROFEPA and WCS to take down listings of protected species, so accurate "cultivated" proof matters. https://www.mercadolibre.com.mx/institucional/comunicamos/noticias/alianza-con-wcs-proteger-vida-silvestre

## 7. Owner decisions needed
1. Weigh and measure one packed 50-lot.
2. Approve checking the plant category / Mercado Envíos rules inside seller central (read-only).
3. Pick the backup method if ML's carriers refuse plants: Paquetexpress perishable (ocurre, no insurance), local pickup in PV, or a Flex courier once reputation is yellow.
4. Guarantee policy for damaged arrivals.
