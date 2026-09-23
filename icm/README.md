# Tila ICM

The operating layer for the Tila business. The filesystem is the agent's memory: identity in `characters/`, rules in `_config/`, work in `stages/`, learning in `memory/`.

## Hierarchy
```
Owner (Bambú) - approves money, publishing, prices, outbound messages
  |
Hermes (ops/hermes) - runtime that loads the TL-001 profile
  |
TL-001-TILA-OPS - standing operator for site + MercadoLibre store
```

## Lifecycle of any task
1. INTAKE (stage 01) - what, which channel, money impact, owner gate.
2. WORK in one stage (02-05).
3. EVIDENCE - screenshot, URL, commit, receipt.
4. OWNER APPROVAL when the policy says so.
5. MEMORY UPDATE - dated line in the right ledger.
6. LEARN (stage 06, weekly) - propose changes from evidence.

## Non-learnable (self-learning may never rewrite)
- Owner authority, money authority, approval gates.
- Entity boundaries (Tila commercial vs New World Kids / HSI / Indigo Azul program).
- Charity wording approval rule.
- Secrets policy.
- Platform and carrier rules (only update from a cited source).

## Learnable (improve from evidence)
- Listing titles, photo order, description structure.
- Which lot sizes and grades sell.
- Buyer FAQ answers (drafts; still owner-approved when sent).
- Packing method details, carrier choice per region, transit results.
- Price proposals (owner approves any change).
