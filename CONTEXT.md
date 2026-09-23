# Tila - repository context (ICM router)

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
| `icm/_config/` | Business profile, entity boundaries, automation policy, secrets map (references only). |
| `icm/characters/TL-001-TILA-OPS/` | The standing Tila operator agent: persona, voice, standing orders. |
| `icm/stages/` | The six work stages (intake, listings, site, orders+shipping, buyer messages, learn). |
| `icm/memory/` | Append-only business memory: carriers tried, sales, buyer questions, price moves, decisions, lessons. |
| `icm/strategy/GTM-PLAN.md` | Standing go-to-market plan (organic only, zero spend). |
| `ops/hermes/` | Hermes Agent profile for the Tila operator (config, SOUL, knowledge index). |
| `ops/hermes/crons/` | Launch cron set - OFF until site final + social ready + owner go. Enable switch: `enable.sh`. |
| `tools/playwright/` | Browser automation: site smoke tests, ML public survey, ML seller-central session. |

## Work routing
| Request | Stage | Human gate |
|---|---|---|
| New request, unclear scope | `01_intake` | Route only once owner, channel and money impact are known |
| ML listing create / edit / photos / titles | `02_listings` | Owner approves before publish or price change |
| Site copy, images, build, deploy preview | `03_site` | Owner approves before public DNS or copy claims |
| Order received, packing, label, tracking | `04_orders-shipping` | Owner approves new carrier, insurance spend, refunds |
| Buyer question or message | `05_buyer-messages` | Owner approves outgoing text until an auto-reply grant exists |
| Weekly review, what sold, what to change | `06_learn` | Proposals only; owner approves changes |

## Definition of done
A stage is done when its output contract is met, evidence is linked (URL, screenshot, commit, receipt), the human gate is visible, and the relevant `icm/memory/` ledger has a new dated entry.

## Walk test
An agent with zero memory must be able to read `AGENTS.md` -> this file -> one stage and know what to do next. If it cannot, the change does not ship.
