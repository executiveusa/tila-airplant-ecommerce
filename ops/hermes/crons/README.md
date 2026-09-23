# Tila launch crons (OFF until launch) / Tareas programadas de lanzamiento (apagadas)

Owner agent: TL-001 Tila. District: Tila / Jardines Indigo. Launch approval: both owners (Ivette for the Mexico store jobs, Bambú for the host/infra). Runtime: Tila's own Hermes (`HERMES_HOME=/opt/tila/.hermes`).

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
Site final + social media ready + go from both owners (Ivette: Mexico store jobs; Bambú: host). Record each go in `icm/memory/decisions.md` with the owner's own words.

## Switches
```bash
export HERMES_HOME=/opt/tila/.hermes
./install.sh                     # registers all jobs, each immediately paused (safe before launch)
# LAUNCH: owner says go ->
#   1. set launch_switch: on  in tila-launch-crons.yaml (commit it)
#   2. add the approval line to icm/memory/decisions.md
LAUNCH_APPROVED_BY="Ivette <date> <source>; Bambú <date> <source>" ./enable.sh all      # or ./enable.sh tila-site-health
./disable.sh                     # kill switch: pauses everything, no approval needed
hermes cron list                 # see state
```
Commands follow the Hermes cron docs (`hermes cron create/pause/resume/list`); confirm against the installed version's `hermes cron --help` before first install.

## Not built yet (needed before the ML jobs can do real work)
- A working `.auth/ml-seller.json` session (run `tools/playwright/ml/seller-login.ts` once, with the owner for 2FA).
- ML seller-central read scripts (orders, questions, reputation). Today the jobs rely on the agent driving the browser with the saved session; turn them into scripts as the selectors settle.

## ES-MX
Todas las tareas pertenecen al agente Tila (TL-001), distrito Tila / Jardines Indigo, y corren en el Hermes propio de Tila. Todas son de solo lectura o solo borradores: ninguna publica, cambia precios, gasta, envía mensajes a compradores ni reembolsa.

| Tarea | Cuándo (hora de la CDMX) | Qué hace |
|---|---|---|
| tila-ml-inbox | cada 30 min | Pedidos, preguntas y reclamos nuevos: registro y borradores de respuesta (sin enviar) |
| tila-shipment-tracking | diario 12:30 | Actualiza envíos abiertos y marca retrasos |
| tila-reputation-check | diario 08:15 | Color de reputación y métricas; avisa si baja |
| tila-site-health | diario 07:10 | Prueba del sitio con Playwright |
| tila-competitor-watch | lunes 09:00 | Sondeo público de Mercado Libre y hasta 3 propuestas con evidencia |
| tila-weekly-review | domingo 18:00 | Revisión semanal (etapa 06) |
| tila-social-drafts | martes y viernes 10:00 | 2 borradores de publicaciones orgánicas (no se publican) |

**Condición de activación:** sitio terminado, redes sociales listas y visto bueno de ambas personas responsables (Ivette para las tareas de la tienda en México; Bambú para el servidor), registrado en `icm/memory/decisions.md`.

**Interruptores:** `./install.sh` registra y pausa todo (seguro antes del lanzamiento); para activar: poner `launch_switch: on`, registrar la aprobación y ejecutar `LAUNCH_APPROVED_BY="..." ./enable.sh all`; `./disable.sh` apaga todo sin necesidad de aprobación.
