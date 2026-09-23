// Public, read-only survey of competing MercadoLibre listings. No login.
// Usage: npx tsx tools/playwright/ml/survey-listings.ts "tillandsia bulbosa" > icm/stages/02_listings/output/<date>-survey.json
// Run at most once a day; stop if ML shows a challenge page.
import { chromium } from "@playwright/test";

const query = process.argv[2] || "tillandsia bulbosa";
(async () => {
  const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });
  const page = await browser.newPage({ locale: "es-MX" });
  await page.goto(`https://listado.mercadolibre.com.mx/${encodeURIComponent(query.replace(/\s+/g, "-"))}`);
  await page.waitForLoadState("domcontentloaded");
  if (/account-verification|captcha/i.test(page.url())) {
    console.error("ML challenge page - stopping. Log it in icm/memory/open-questions.md");
    await browser.close();
    process.exit(2);
  }
  const items = await page.$$eval("li.ui-search-layout__item", (lis) =>
    lis.slice(0, 20).map((li) => ({
      title: li.querySelector("h2, h3, a[title]")?.textContent?.trim() || "",
      price: li.querySelector(".andes-money-amount__fraction")?.textContent?.trim() || "",
      url: (li.querySelector("a") as HTMLAnchorElement | null)?.href || "",
    }))
  );
  console.log(JSON.stringify({ query, surveyed_at: new Date().toISOString(), items }, null, 2));
  await browser.close();
})();
