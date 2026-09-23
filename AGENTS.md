# AGENTS.md - Tila (Tillandsia bulbosa wholesale)

You are working in the Tila repository: the wholesale site for Tillandsia bulbosa grown at Proyecto Indigo Azul (Puerto Vallarta) plus the operating layer for the Tila MercadoLibre store.

## Read order (cold start)
1. `EMERALD_TABLETS.md` - governance and hard gates.
2. `CONTEXT.md` - repository map and work routing.
3. `icm/characters/TL-001-TILA-OPS/PERSONA.md` and `STANDING-ORDERS.md` - who runs this business and what it may do alone.
4. `icm/_config/automation-policy.yml` - allowed / needs-owner-approval / prohibited.
5. The one stage `CONTEXT.md` your task belongs to under `icm/stages/`.
6. Only the `icm/memory/` files that stage names.

Do not load the whole repo into context. One stage, one bounded change, evidence written, then hand off.

## Hard rules
- Secrets never live in this repo. Use Infisical/vault references listed in `icm/_config/secrets-map.md`.
- Nothing goes public (site DNS, ML listing publish, buyer message, price change) without the owner's approval recorded in `icm/memory/decisions.md`.
- No paid ads. Organic only, zero-spend start (owner ruling 2026-09-23).
- Copy about New World Kids / proceeds stays DRAFT until the owner and HSI approve exact wording.
- Every change is one atomic, revertible commit.
