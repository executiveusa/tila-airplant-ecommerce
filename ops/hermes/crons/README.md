# Tila launch crons (OFF until launch)

Owner: TL-001-TILA-OPS. District: Tila / Jardines Indigo. Runtime: Tila's own Hermes (`HERMES_HOME=/opt/tila/.hermes`).

| Job | When (host local, America/Mexico_City) | What | Browser |
|---|---|---|---|
| tila-ml-inbox | every 30 min | New orders / questions / claims -> log + draft replies (no sending) | yes |
| tila-shipment-tracking | daily 12:30 | Update open shipments, flag late ones | yes |
| tila-reputation-check | daily 08:15 | Reputation color + metrics, flag drops | yes |
| tila-site-health | daily 07:10 | Playwright smoke test on the live site | yes |
| tila-competitor-watch | Mondays 09:00 | Public ML survey, up to 3 evidence-backed proposals | yes |
| tila-weekly-review | Sundays 18:00 | Stage 06 review from the memory ledgers | no |
| tila-social-drafts | Tue + Fri 10:00 | 2 organic social post drafts (not posted) | no |

Browser jobs are staggered so only one runs at a time (8 GB host). Every job is read-only or draft-only.

## Activation condition
Site final + social media ready + the owner says go.

## Switches
```bash
export HERMES_HOME=/opt/tila/.hermes
./install.sh                     # registers all jobs, each immediately paused (safe before launch)
# LAUNCH: owner says go ->
#   1. set launch_switch: on  in tila-launch-crons.yaml (commit it)
#   2. add the approval line to icm/memory/decisions.md
LAUNCH_APPROVED_BY="Bambú 2026-10-xx WhatsApp" ./enable.sh all      # or ./enable.sh tila-site-health
./disable.sh                     # kill switch: pauses everything, no approval needed
hermes cron list                 # see state
```
Commands follow the Hermes cron docs (`hermes cron create/pause/resume/list`); confirm against the installed version's `hermes cron --help` before first install.

## Not built yet (needed before the ML jobs can do real work)
- A working `.auth/ml-seller.json` session (run `tools/playwright/ml/seller-login.ts` once, with the owner for 2FA).
- ML seller-central read scripts (orders, questions, reputation). Today the jobs rely on the agent driving the browser with the saved session; turn them into scripts as the selectors settle.
