# AGENTS.md - Tila (Tillandsia bulbosa, mayoreo / wholesale)

## EN
This is the Tila repository: the wholesale site for Tillandsia bulbosa grown at Proyecto Indigo Azul (Puerto Vallarta) and the operating layer for the Tila MercadoLibre store. The standing agent is **Tila** (TL-001). The business is co-managed: **Ivette** owns the Mexico side, **Bambú** owns the USA side; their assistants (Alex and Instinct) coordinate through the Instinct-to-Instinct lane.

### Read order (cold start)
1. `EMERALD_TABLETS.md` - governance and hard gates.
2. `CONTEXT.md` - repository map and work routing.
3. `icm/_config/entity-boundaries.md` - who decides what (Mexico side / USA side).
4. `icm/characters/TL-001-TILA/PERSONA.md` and `STANDING-ORDERS.md`.
5. `icm/_config/automation-policy.yml` - allowed / needs owner approval / prohibited.
6. The one stage `CONTEXT.md` your task belongs to under `icm/stages/`.
7. Only the `icm/memory/` and `icm/strategy/` files that stage names.

Do not load the whole repo into context. One stage, one bounded change, evidence written, then hand off.

### Hard rules
- Secrets never live in this repo. Use the references in `icm/_config/secrets-map.md`.
- Nothing goes public (site DNS, listing publish, buyer message, price change) without the right owner's approval recorded in `icm/memory/decisions.md` (Mexico side: Ivette; USA side: Bambú; shared: both).
- No paid ads. Organic only, zero-spend start (ruling 2026-09-23).
- Tila is a for-profit business. New World Kids / proceeds logic removed (ruling 2026-09-23 14:33).
- Every change is one atomic, revertible commit.
- Human-facing docs are bilingual: English and Mexican Spanish (Mexico City business register, usted).

## ES-MX
Este es el repositorio de Tila: el sitio de mayoreo de Tillandsia bulbosa cultivada en Proyecto Indigo Azul (Puerto Vallarta) y la capa operativa de la tienda de Tila en Mercado Libre. El agente permanente se llama **Tila** (TL-001). El negocio tiene gestión compartida: **Ivette** es responsable del lado México y **Bambú** del lado Estados Unidos; sus asistentes (Alex e Instinct) se coordinan por el canal Instinct-a-Instinct.

### Orden de lectura (inicio en frío)
1. `EMERALD_TABLETS.md` - reglas de gobierno y controles obligatorios.
2. `CONTEXT.md` - mapa del repositorio y ruteo del trabajo.
3. `icm/_config/entity-boundaries.md` - quién decide qué (lado México / lado EE. UU.).
4. `icm/characters/TL-001-TILA/PERSONA.md` y `STANDING-ORDERS.md`.
5. `icm/_config/automation-policy.yml` - permitido / requiere aprobación / prohibido.
6. El `CONTEXT.md` de la etapa que corresponde a la tarea, en `icm/stages/`.
7. Solo los archivos de `icm/memory/` e `icm/strategy/` que indique esa etapa.

No cargue todo el repositorio. Una etapa, un cambio acotado, evidencia registrada y entrega.

### Reglas obligatorias
- Ningún secreto se guarda en este repositorio; use las referencias de `icm/_config/secrets-map.md`.
- Nada se hace público (DNS del sitio, publicaciones, mensajes a compradores, cambios de precio) sin la aprobación de la persona responsable registrada en `icm/memory/decisions.md` (lado México: Ivette; lado EE. UU.: Bambú; asuntos compartidos: ambos).
- Sin anuncios pagados: solo crecimiento orgánico, arranque con inversión cero (acuerdo del 23-09-2026).
- Tila es un negocio con fines de lucro; se retiró la lógica de New World Kids y de destino de las ventas (acuerdo del 23-09-2026, 14:33).
- Cada cambio es un commit atómico y reversible.
- La documentación para personas es bilingüe: inglés y español de México (registro de negocios de la CDMX, en usted).
