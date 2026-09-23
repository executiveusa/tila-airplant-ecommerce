#!/usr/bin/env bash
# Registers the Tila launch crons in Tila's own Hermes home, then PAUSES every one (OFF by default).
# Safe to run before launch. Requires: hermes CLI, python3 + PyYAML, HERMES_HOME=/opt/tila/.hermes.
set -euo pipefail
: "${HERMES_HOME:?set HERMES_HOME=/opt/tila/.hermes (Tila must not share the fleet Hermes)}"
cd "$(dirname "$0")"
python3 - <<'PY' | while IFS=$'\t' read -r name schedule workdir prompt; do
import yaml
c = yaml.safe_load(open("tila-launch-crons.yaml"))
for j in c["jobs"]:
    print("\t".join([j["name"], j["schedule"], c["workdir"], " ".join(j["prompt"].split())]))
PY
  if hermes cron list 2>/dev/null | grep -q -- "$name"; then echo "exists: $name (left as is)"; continue; fi
  hermes cron create "$schedule" "$prompt" --workdir "$workdir" --name "$name"
  hermes cron pause "$name"
  echo "registered + paused: $name"
done
hermes cron list
