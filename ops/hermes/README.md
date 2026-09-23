# Tila Hermes profile / Perfil de Hermes de Tila

Hermes Agent (NousResearch) is the runtime. This folder is the Tila operator's profile: config, persona (SOUL.md) and knowledge index. The Hermes code itself is installed on the host, not vendored here.

Upstream: https://github.com/nousresearch/hermes-agent - docs: https://hermes-agent.nousresearch.com/docs/getting-started/installation

## Host setup (prod-city-1, run by the host operator)
```bash
# 1. install Hermes once (upstream installer)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
# 2. give Tila its own Hermes home so it never shares memory with other fleet agents
export HERMES_HOME=/opt/tila/.hermes
mkdir -p "$HERMES_HOME"
cp ops/hermes/config.yaml "$HERMES_HOME/config.yaml"
cp ops/hermes/SOUL.md "$HERMES_HOME/SOUL.md"
# 3. secrets: write $HERMES_HOME/.env from Infisical (names in ops/hermes/.env.example); never commit it
```
Verify `HERMES_HOME` is honored by the installed version (`hermes --help` / docs); if not, run Tila under its own Unix user so `~/.hermes` is separate.

## What Tila's Hermes can reach
- The repo working copy at `/opt/tila/repo` (filesystem MCP limited to this path).
- Playwright scripts in `tools/playwright/` via the terminal tool.
- Nothing else by default. Add MCP servers only with owner approval.

## ES-MX
Hermes Agent (NousResearch) es el entorno de ejecución. Esta carpeta es el perfil del agente Tila: configuración, personalidad (`SOUL.md`) e índice de conocimiento. El código de Hermes se instala en el servidor, no se copia al repositorio.

**Instalación en el servidor (la hace quien opera prod-city-1):** 1) instalar Hermes con el instalador oficial; 2) usar un directorio propio `HERMES_HOME=/opt/tila/.hermes` para que Tila no comparta memoria con otros agentes; 3) copiar `config.yaml` y `SOUL.md`; 4) crear `$HERMES_HOME/.env` desde Infisical (nombres en `.env.example`), nunca en git.

**Alcance:** solo la copia del repositorio en `/opt/tila/repo`, los scripts de `tools/playwright/` y nada más sin aprobación. Tareas programadas: `crons/` (apagadas hasta el lanzamiento).
