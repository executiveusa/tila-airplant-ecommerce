# Stage 02 - MercadoLibre listings
**Read:** `icm/_config/business-profile.md`, `icm/memory/price-moves.csv`, `icm/memory/buyer-questions.md`, latest survey in `output/`.
**Do:** draft or improve a listing: keyword title (Spanish, max ML length), 8+ real photos in a fixed order (lot overview, single plant with ruler, size comparison, packing, origin/nursery, care), description with size chart, count, care guide, shipping method, link to the Tila site.
**Tools:** `tools/playwright/ml/survey-listings.ts` (public competitor survey), `tools/playwright/ml/seller-login.ts` (session for seller central).
**Gate:** owner approves before publish, unpause, or any price/lot change. Record approval in `icm/memory/decisions.md`.
**Output:** `output/<date>-<lot>-listing.md` + screenshots.
**Memory:** price changes -> `price-moves.csv`; listing lessons -> `lessons.md`.
