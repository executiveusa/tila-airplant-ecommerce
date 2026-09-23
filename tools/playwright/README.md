# Playwright tools

| Script | What | Login? | Side effects |
|---|---|---|---|
| `tests/site-smoke.spec.ts` | Site loads on / and /en at 390px + 1280px, all images load, noindex still on, no New World Kids text on the page | No | None |
| `ml/survey-listings.ts` | Top 20 public ML results for a query (title, price, URL) | No | None; max once a day |
| `ml/seller-login.ts` | Headed login to save a seller-central session | Yes (Infisical env) | Writes `.auth/ml-seller.json` (gitignored) |

Run:
```bash
npm run test:site                                   # against local build served on :8931
TILA_BASE_URL=https://tila.2.25.241.209.sslip.io npm run test:site
PW_CHANNEL=chrome npm run test:site                 # use system Chrome instead of downloaded Chromium
```
One browser job at a time on the host.

## ES-MX
- `tests/site-smoke.spec.ts`: verifica que `/` y `/en` carguen a 390 px y 1280 px, que todas las imágenes carguen, que siga activo noindex y que no aparezca texto de New World Kids. Sin inicio de sesión ni efectos.
- `ml/survey-listings.ts`: las 20 primeras publicaciones públicas de Mercado Libre para una búsqueda (título, precio, liga). Sin inicio de sesión; máximo una vez al día; se detiene ante un captcha.
- `ml/seller-login.ts`: inicio de sesión con navegador visible para guardar la sesión de vendedor; credenciales desde Infisical; el código de verificación lo captura una persona; la sesión se guarda en `.auth/` (fuera de git).
Un trabajo de navegador a la vez en el servidor.
