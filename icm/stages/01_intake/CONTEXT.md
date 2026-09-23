# Stage 01 - Intake
**Input:** a request (owner message, ML event, scheduled check).
**Do:** name the task, the channel (ML / site / shipping / buyer), money impact (none / spend / price), and the owner gate from `icm/_config/automation-policy.yml`.
**Output:** one line in `output/intake-log.md`: date, request, stage routed to, gate.
**Memory:** add unknowns to `icm/memory/open-questions.md`.
