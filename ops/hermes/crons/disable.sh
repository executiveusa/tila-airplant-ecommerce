#!/usr/bin/env bash
# Kill switch: pause every Tila cron (or named ones). No approval needed to turn things OFF.
set -euo pipefail
: "${HERMES_HOME:?set HERMES_HOME=/opt/tila/.hermes}"
cd "$(dirname "$0")"
if [ $# -eq 0 ]; then set -- $(python3 -c 'import yaml;print(" ".join(j["name"] for j in yaml.safe_load(open("tila-launch-crons.yaml"))["jobs"]))'); fi
for n in "$@"; do hermes cron pause "$n" && echo "OFF: $n"; done
