# Tila ICM

The operating layer for the Tila business. The filesystem is the agent's memory: identity in `characters/`, rules in `_config/`, work in `stages/`, learning in `memory/`.

## Hierarchy
```
Ivette (Mexico side)            Bambú (USA side, repo/infra)
   | approves MX decisions          | approves US + infra decisions
Alex (Ivette's Instinct) <-i2i-> Instinct (Bambú's)
                  \              /
          Hermes (ops/hermes) runtime
                     |
        TL-001 Tila - standing operator
```

## Lifecycle of any task
1. INTAKE (stage 01) - what, which channel, money impact, owner gate.
2. WORK in one stage (02-05).
3. EVIDENCE - screenshot, URL, commit, receipt.
4. OWNER APPROVAL when the policy says so - from the owner of that side.
5. MEMORY UPDATE - dated line in the right ledger.
6. LEARN (stage 06, weekly) - propose changes from evidence.

## Non-learnable (self-learning may never rewrite)
- Owner authority, money authority, approval gates.
- Ownership and entity boundaries (Mexico side / USA side).
- For-profit status (New World Kids / proceeds logic removed).
- Secrets policy.
- Platform and carrier rules (only update from a cited source).

## Learnable (improve from evidence)
- Listing titles, photo order, description structure.
- Which lot sizes and grades sell.
- Buyer FAQ answers (drafts; still owner-approved when sent).
- Packing method details, carrier choice per region, transit results.
- Price proposals (owner approves any change).

## ES-MX
Capa operativa del negocio Tila. El sistema de archivos es la memoria del agente: identidad en `characters/`, reglas en `_config/`, trabajo en `stages/`, aprendizaje en `memory/`, estrategia en `strategy/`.

**Ciclo de cada tarea:** 1) ENTRADA (etapa 01): qué, canal, impacto económico y quién aprueba; 2) TRABAJO en una etapa (02-05); 3) EVIDENCIA; 4) APROBACIÓN de la persona responsable de ese lado cuando la política lo exija; 5) REGISTRO en la bitácora; 6) APRENDIZAJE semanal (etapa 06) con propuestas basadas en evidencia.

**No se puede modificar por aprendizaje automático:** autoridad de las personas responsables, autoridad sobre dinero y controles de aprobación; límites de entidades y responsables; negocio con fines de lucro (sin lógica de New World Kids); política de secretos; reglas de plataforma y paquetería (solo se actualizan con fuente citada).

**Se puede mejorar con evidencia:** títulos, orden de fotos, estructura de descripciones, lotes y tamaños que se venden, respuestas frecuentes (siempre aprobadas al enviarse), empaque, elección de paquetería por región y propuestas de precio (siempre aprobadas).
