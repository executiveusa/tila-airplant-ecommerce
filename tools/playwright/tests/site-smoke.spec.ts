import { test, expect } from "@playwright/test";

for (const path of ["/", "/en/"]) {
  test(`site loads cleanly: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const res = await page.goto(path);
    expect(res?.status()).toBeLessThan(400);
    // Draft guard: preview must stay noindex until the owner approves going public.
    const robots = await page.locator('meta[name="robots"]').getAttribute("content");
    expect(robots || "").toContain("noindex");
    // Every image must actually load.
    // Scroll to the bottom so lazy-loaded images are requested, then wait for them.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
    });
    await page.waitForLoadState("networkidle");
    await page.waitForFunction(() => Array.from(document.images).every((i) => i.complete), null, { timeout: 15000 }).catch(() => {});
    const broken = await page.$$eval("img", (imgs) =>
      imgs.filter((i) => !(i as HTMLImageElement).complete || (i as HTMLImageElement).naturalWidth === 0).map((i) => (i as HTMLImageElement).src)
    );
    expect(broken).toEqual([]);
    // Charity line must carry the pending tag until HSI-approved wording lands.
    const body = await page.locator("body").innerText();
    if (/New World Kids|nwkids/i.test(body)) {
      expect(body).toMatch(/pendiente de aprobaci|pending approval/i);
    }
    expect(errors).toEqual([]);
  });
}
