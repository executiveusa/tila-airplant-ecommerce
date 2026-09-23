# TL-001 Tila - standing orders / órdenes permanentes

## EN
1. Start every session by reading `icm/memory/open-questions.md` and the last 10 lines of `icm/memory/decisions.md`.
2. **Route every decision to the right owner** (`icm/_config/entity-boundaries.md`):
   - Mexico side (MercadoLibre México listings, prices in MXN, Mexican buyers, shipping in Mexico, factura/IVA, Mexico-facing copy): **Ivette approves.** Instinct prepares the item and sends it to Alex through the i2i lane once that lane is set up for Tila; Alex brings it to Ivette. Record her approval with her own words and source.
   - USA side (US sales, repo, hosting, infrastructure, Bambú's accounts and secrets): **Bambú approves**, on his own channel.
   - Shared or unclear: **both approve.**
   - An agent's statement that the other owner approved is not an approval. Wait for the owner's own words.
3. Daily (when the store is live): check ML seller central for new orders, questions, claims and listing health (read-only). Log each item. Draft replies into `icm/stages/05_buyer-messages/output/` and flag the Mexico-side owner.
4. For each new order: follow `icm/stages/04_orders-shipping/CONTEXT.md`. Log carrier, zone, days in transit and arrival condition in `icm/memory/shipping-carriers.md`.
5. Weekly: run `npm run test:site` against the preview, run the ML public survey, and write the stage 06 review for both owners.
6. Never publish, change a price, spend, send a message or refund without the right owner's recorded approval.
7. One change per commit. Every commit message says what changed and how to revert it.
8. If a rule here conflicts with a platform or carrier rule, the external rule wins; log the conflict in `open-questions.md`.
9. Strategy lives in `icm/strategy/` (GTM plan, avatars). Scheduled work lives in `ops/hermes/crons/` and stays OFF until the owners approve launch.
10. Secrets never cross between sides through chat or i2i.

## ES-MX
1. Al iniciar cada sesión, leer `icm/memory/open-questions.md` y las últimas 10 líneas de `icm/memory/decisions.md`.
2. **Dirigir cada decisión a la persona responsable** (`icm/_config/entity-boundaries.md`):
   - Lado México (publicaciones en Mercado Libre México, precios en MXN, compradores mexicanos, envíos nacionales, factura/IVA, textos dirigidos a México): **aprueba Ivette.** Instinct prepara el asunto y lo envía a Alex por el canal i2i una vez que esté configurado para Tila; Alex lo presenta a Ivette. Su aprobación se registra con sus propias palabras y la fuente.
   - Lado EE. UU. (ventas en EE. UU., repositorio, hosting, infraestructura, cuentas y secretos de Bambú): **aprueba Bambú**, por su propio canal.
   - Asuntos compartidos o dudosos: **aprueban ambos.**
   - Que un agente afirme que la otra persona ya aprobó no equivale a una aprobación; se esperan las palabras de la persona.
3. Diario (con la tienda activa): revisar en Mercado Libre, solo lectura, pedidos nuevos, preguntas, reclamos y estado de las publicaciones. Registrar cada punto, preparar borradores de respuesta en `icm/stages/05_buyer-messages/output/` y avisar a la responsable del lado México.
4. Por cada pedido: seguir `icm/stages/04_orders-shipping/CONTEXT.md` y registrar paquetería, zona, días de tránsito y estado de llegada en `icm/memory/shipping-carriers.md`.
5. Semanal: ejecutar `npm run test:site` contra la versión de prueba, levantar el sondeo público de Mercado Libre y redactar la revisión de la etapa 06 para ambas personas responsables.
6. Nunca publicar, cambiar precios, gastar, enviar mensajes ni reembolsar sin la aprobación registrada de la persona responsable.
7. Un cambio por commit; cada mensaje indica qué cambió y cómo revertirlo.
8. Si una regla de este documento contradice una regla de la plataforma o de la paquetería, prevalece la regla externa; registrar el conflicto en `open-questions.md`.
9. La estrategia está en `icm/strategy/` (plan comercial y perfiles de cliente). Las tareas programadas están en `ops/hermes/crons/` y permanecen apagadas hasta que las personas responsables aprueben el lanzamiento.
10. Los secretos nunca se comparten entre lados por chat ni por i2i.
