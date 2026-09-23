# Tila - repository context (ICM router) / Contexto del repositorio

Owners: Mexico side = Ivette (agent: Alex); USA side = Bambú (agent: Instinct). Standing agent: Tila (TL-001). Routing of approvals: `icm/_config/entity-boundaries.md`.

## Layer model
- Layer 0: `EMERALD_TABLETS.md`, `AGENTS.md`.
- Layer 1: this router + `icm/_config/`.
- Layer 2: one active stage `icm/stages/<stage>/CONTEXT.md`.
- Layer 3: the `icm/memory/` ledgers that stage names.
- Layer 4: working files in the stage `output/` folder.

## Repository map
| Path | Responsibility |
|---|---|
| `src/`, `public/` | Next.js static site (ES at `/`, EN at `/en`). Copy lives in `src/content/copy.ts`. |
| `PRICING-BASIS.md` | Draft price ladder and how it was derived. |
| `docs/shipping/SHIPPING.md` | Researched shipping rules, carriers, packaging, costs, open questions. |
| `icm/_config/` | Business profile, entity boundaries + ownership (Mexico/USA), automation policy, secrets map (references only). |
| `icm/characters/TL-001-TILA/` | The standing Tila operator agent: persona, voice, standing orders. |
| `icm/stages/` | The six work stages (intake, listings, site, orders+shipping, buyer messages, learn). |
| `icm/memory/` | Append-only business memory: carriers tried, sales, buyer questions, price moves, decisions, lessons. |
| `icm/strategy/GTM-PLAN.md` | Standing go-to-market plan (organic only, zero spend). |
| `icm/docs/MEXICO-SIDE-ONBOARDING.es.md` | Onboarding pack for the Mexico side (Ivette / Alex), es-MX, no secrets or infra. |
| `icm/strategy/AVATARS.md` | 5 customer avatars (stages of awareness) for listing copy and pitch drafts. |
| `ops/hermes/` | Hermes Agent profile for the Tila operator (config, SOUL, knowledge index). |
| `ops/hermes/crons/` | Launch cron set - OFF until site final + social ready + owner go. Enable switch: `enable.sh`. |
| `tools/playwright/` | Browser automation: site smoke tests, ML public survey, ML seller-central session. |

## Work routing
| Request | Stage | Human gate |
|---|---|---|
| New request, unclear scope | `01_intake` | Route only once owner, channel and money impact are known |
| ML listing create / edit / photos / titles | `02_listings` | Ivette (Mexico side) approves before publish or price change |
| Site copy, images, build, deploy preview | `03_site` | Bambú approves DNS/infra; Mexico-facing copy also needs Ivette |
| Order received, packing, label, tracking | `04_orders-shipping` | Ivette approves new carrier, insurance spend, refunds (Mexico orders) |
| Buyer question or message | `05_buyer-messages` | Ivette approves outgoing text for Mexican buyers until she grants an auto-reply rule |
| Weekly review, what sold, what to change | `06_learn` | Proposals only; the owner of each side approves its changes |

## Definition of done
A stage is done when its output contract is met, evidence is linked (URL, screenshot, commit, receipt), the human gate is visible, and the relevant `icm/memory/` ledger has a new dated entry.

## Walk test
An agent with zero memory must be able to read `AGENTS.md` -> this file -> one stage and know what to do next. If it cannot, the change does not ship.

## ES-MX (resumen)
- **Modelo de capas:** capa 0 `EMERALD_TABLETS.md` y `AGENTS.md`; capa 1 este archivo e `icm/_config/`; capa 2 el `CONTEXT.md` de una sola etapa; capa 3 las bitácoras de `icm/memory/` que indique la etapa; capa 4 los archivos de trabajo en `output/`.
- **Mapa:** `src/` y `public/` = sitio (español en `/`, inglés en `/en`); `docs/shipping/` = investigación de envíos; `icm/_config/` = perfil del negocio, límites y responsables, política de automatización, mapa de secretos; `icm/characters/TL-001-TILA/` = el agente Tila; `icm/stages/` = seis etapas; `icm/memory/` = memoria del negocio; `icm/strategy/` = plan comercial y perfiles de cliente; `ops/hermes/` = perfil de Hermes y tareas programadas (apagadas); `tools/playwright/` = automatización de navegador.
- **Ruteo y aprobaciones:** publicaciones, precios, envíos, reembolsos y mensajes a compradores en México los aprueba Ivette; DNS, hosting, repositorio y lado EE. UU. los aprueba Bambú; lo compartido, ambos.
- **Criterio de terminado:** se cumple el entregable de la etapa, hay evidencia (URL, captura, commit, recibo), el control humano está visible y la bitácora correspondiente tiene una entrada con fecha.
- **Prueba en frío:** un agente sin memoria debe poder leer `AGENTS.md`, este archivo y una etapa, y saber qué sigue. Si no, el cambio no se libera.
