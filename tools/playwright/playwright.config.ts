import { defineConfig } from "@playwright/test";

// One worker: the host has 8 GB / 2 cores (EMERALD_TABLETS VII).
export default defineConfig({
  testDir: "./tests",
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.TILA_BASE_URL || "http://127.0.0.1:8931",
    // Use system Chrome if present (no browser download needed on the host).
    channel: process.env.PW_CHANNEL || undefined,
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "mobile-390", use: { viewport: { width: 390, height: 844 } } },
    { name: "desktop-1280", use: { viewport: { width: 1280, height: 800 } } },
  ],
});
