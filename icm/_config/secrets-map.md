# Secrets map - references only, never values

| Need | Where it lives | How the agent gets it |
|---|---|---|
| MercadoLibre login (jardinesindigo@gmail.com) | Infisical (fleet vault) - password entry for the ML account | Injected at runtime as `ML_EMAIL` / `ML_PASSWORD` env; never written to disk |
| ML 2FA / email codes | Owner's inbox for jardinesindigo@gmail.com | Ask the owner or read via an approved mail integration |
| GitHub push | PAT on prod-city-1 at `/root/.gh-pat` | Used by the host operator; never copied into repo |
| Model provider key for Hermes | Infisical | `ops/hermes/.env` on the host (gitignored) |
| ML session cookies | Created by `tools/playwright/ml/seller-login.ts` | Saved to `.auth/ml-seller.json` (gitignored), host-only |

TODO for the host operator: record the exact Infisical project/path names here once confirmed (names only).
