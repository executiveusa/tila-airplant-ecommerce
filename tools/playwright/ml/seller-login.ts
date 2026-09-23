// Creates a MercadoLibre seller-central session for the Tila account.
// Credentials come from env (injected from Infisical): ML_EMAIL, ML_PASSWORD. Never hardcode.
// 2FA / email code: the script pauses; the host operator or owner enters the code in the headed browser.
// Session is saved to .auth/ml-seller.json (gitignored). Read-only use unless the owner approved an action.
import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";

(async () => {
  const email = process.env.ML_EMAIL;
  const password = process.env.ML_PASSWORD;
  if (!email || !password) {
    console.error("Set ML_EMAIL and ML_PASSWORD from Infisical first.");
    process.exit(1);
  }
  const browser = await chromium.launch({ headless: false, channel: process.env.PW_CHANNEL || undefined });
  const context = await browser.newContext({ locale: "es-MX" });
  const page = await context.newPage();
  await page.goto("https://www.mercadolibre.com.mx/");
  console.log("Log in manually if the form differs; fill helpers below are best-effort.");
  // Selectors on ML's login change often; keep this script small and update from real runs.
  await page.pause(); // operator completes login + 2FA, then resumes
  mkdirSync(".auth", { recursive: true });
  await context.storageState({ path: ".auth/ml-seller.json" });
  console.log("Saved .auth/ml-seller.json (host-only, gitignored).");
  await browser.close();
})();
