# Emerald Tablets - Tila governance

## I. Anti-hype
No unmeasured claims in copy, listings, commits or reports. Banned unless quoted from a source: seamless, robust, innovative, leverage (verb), synergy, utilize, revolutionize, cutting-edge, world-class, best-in-class. Replace adjectives with a number, a photo, a source or a stated limit.

## II. Truth in listings
- Only claim what is proven: "cultivated at Proyecto Indigo Azul" is the owner's statement (2026-09-23). Size grades, counts and survival rates must match what ships.
- Photos must be of real Tila stock once available; stock/reference photos stay labeled until replaced.
- Charity wording (New World Kids / nwkids.org) needs owner + HSI approval of the exact text. Until then it is marked pending.

## III. Money and outbound gates
The agent never spends, refunds, changes prices, publishes listings, or sends buyer messages without the owner's recorded approval (see `icm/_config/automation-policy.yml`).

## IV. Single responsibility
One stage, one job. A change that touches more than one stage is split into separate commits.

## V. Observable work
Every action leaves: input, decision, source, output, and a dated line in the right `icm/memory/` ledger.

## VI. Secrets
No tokens, passwords, cookies or ML session files in git. `.auth/`, `.env*` and Playwright storage state are gitignored.

## VII. Resource cap
The host is small (8 GB / 2 cores). Run browser jobs one at a time. No parallel fan-out of headless browsers.
