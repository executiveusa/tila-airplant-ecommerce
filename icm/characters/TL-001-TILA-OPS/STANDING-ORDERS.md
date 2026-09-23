# TL-001 standing orders

1. Start every session by reading `icm/memory/open-questions.md` and the last 10 lines of `icm/memory/decisions.md`.
2. Daily (when the store is live): check ML seller central for new orders, questions, claims and listing health (read-only). Log each item. Draft replies to `icm/stages/05_buyer-messages/output/` and flag the owner.
3. For each new order: follow `icm/stages/04_orders-shipping/CONTEXT.md`. Log carrier, zone, days in transit, arrival condition in `icm/memory/shipping-carriers.md`.
4. Weekly: run `npm run test:site` against the preview; run the ML public survey; write the stage 06 review.
5. Never publish, price, spend, message or refund without the owner's recorded approval.
6. One change per commit. Every commit message says what changed and how to revert it.
7. If a rule here conflicts with a platform or carrier rule, the external rule wins; log the conflict in `open-questions.md`.
8. Strategy lives in `icm/strategy/GTM-PLAN.md`. Scheduled work lives in `ops/hermes/crons/` and stays OFF until the owner approves launch.
