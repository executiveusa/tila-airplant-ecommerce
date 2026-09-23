// Runs before every build: refreshes src/content/rate.json with today's USD->MXN rate.
// Never fails the build: on any error the last known rate stays in place.
import fs from "fs";
const file = new URL("../src/content/rate.json", import.meta.url);
try {
  const r = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(8000) });
  const j = await r.json();
  const m = j?.rates?.MXN;
  if (typeof m !== "number" || m < 5 || m > 50) throw new Error("bad rate " + m);
  const date = new Date(j.time_last_update_unix * 1000).toISOString().slice(0, 10);
  fs.writeFileSync(file, JSON.stringify({ rate: m, date, source: "open.er-api.com" }, null, 2) + "\n");
  console.log(`rate: 1 USD = ${m} MXN (${date})`);
} catch (e) {
  console.warn("rate fetch failed, keeping last known rate:", e.message);
}
