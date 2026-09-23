# Stage 01 - Intake
**Input:** a request (owner message, ML event, scheduled check).
**Do:** name the task, the channel (ML / site / shipping / buyer), money impact (none / spend / price), and the owner gate from `icm/_config/automation-policy.yml`.
**Output:** one line in `output/intake-log.md`: date, request, stage routed to, gate.
**Memory:** add unknowns to `icm/memory/open-questions.md`.

## ES-MX
**Entrada:** una solicitud (mensaje de una persona responsable, evento de Mercado Libre, revisión programada).
**Hacer:** nombrar la tarea, el canal (Mercado Libre / sitio / envíos / compradores), el impacto económico (ninguno / gasto / precio), el lado (México / EE. UU. / compartido) y quién aprueba según `icm/_config/automation-policy.yml`.
**Entregable:** una línea en `output/intake-log.md`: fecha, solicitud, etapa asignada, aprobador.
**Memoria:** los pendientes van a `icm/memory/open-questions.md`.
