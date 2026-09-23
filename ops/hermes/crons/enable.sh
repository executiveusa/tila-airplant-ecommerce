#!/usr/bin/env bash
# THE ENABLE SWITCH. Usage: ./enable.sh all | ./enable.sh <job-name> ...
# Refuses unless launch_switch is 'on' in tila-launch-crons.yaml AND LAUNCH_APPROVED_BY is set
# (both owners' approval - Ivette for the Mexico store jobs, Bambú for the host - also recorded in icm/memory/decisions.md).
set -euo pipefail
: "${HERMES_HOME:?set HERMES_HOME=/opt/tila/.hermes}"
cd "$(dirname "$0")"
grep -Eq '^launch_switch:[[:space:]]*on' tila-launch-crons.yaml || { echo "launch_switch is off - owners have not approved launch / falta la aprobación del lanzamiento"; exit 1; }
: "${LAUNCH_APPROVED_BY:?set LAUNCH_APPROVED_BY='Ivette <date> <source>; Bambú <date> <source>'}"
if [ "${1:-}" = "all" ]; then
  set -- $(python3 -c 'import yaml;print(" ".join(j["name"] for j in yaml.safe_load(open("tila-launch-crons.yaml"))["jobs"]))')
fi
for n in "$@"; do hermes cron resume "$n"; echo "ON: $n (approved by $LAUNCH_APPROVED_BY)"; done
echo "Remember: add the approval line to icm/memory/decisions.md"
