# Playwright tools

| Script | What | Login? | Side effects |
|---|---|---|---|
| `tests/site-smoke.spec.ts` | Site loads on / and /en at 390px + 1280px, all images load, noindex still on, charity line still tagged pending | No | None |
| `ml/survey-listings.ts` | Top 20 public ML results for a query (title, price, URL) | No | None; max once a day |
| `ml/seller-login.ts` | Headed login to save a seller-central session | Yes (Infisical env) | Writes `.auth/ml-seller.json` (gitignored) |

Run:
```bash
npm run test:site                                   # against local build served on :8931
TILA_BASE_URL=https://tila.2.25.241.209.sslip.io npm run test:site
PW_CHANNEL=chrome npm run test:site                 # use system Chrome instead of downloaded Chromium
```
One browser job at a time on the host.
