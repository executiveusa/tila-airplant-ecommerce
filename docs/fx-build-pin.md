# Draft FX fallback pin

The checked-in build fallback is pinned at 18.331861 MXN per USD, dated October 10, 2026. Prebuild does not refresh it while `pinned` is `true`.

To unpin, set `pinned: false` in `src/content/rate.json`, then run the build. This refreshes the fallback rate through `scripts/fetch-rate.mjs`. An FX-driven displayed price change needs the owner's approval before deploying the resulting build. Review both ES and EN prices, not only MXN.

The browser still refreshes its rate daily. The existing English rate note says "updated daily" and remains unchanged. The pin controls build-time fallback only, not browser refresh. Any change to that displayed note or browser refresh needs a separate review.
