# Stage 07 - Wholesale buyers
**Read:** `icm/strategy/GTM-PLAN.md`, `icm/memory/sales-log.csv`, dashboard knowledge in `icm/characters/TL-001-TILA/PERSONA.md` (tila schema: companies / leads / opportunities on supabase-db, PostgREST tila profile, READ-ONLY for agents).
**Do:** develop wholesale buyers for Tila airplants (tillandsia, bulbosa first) through this pipeline: discover -> verify -> pitch -> follow-up -> order -> fulfil.
1. **Discover:** find candidate buyers (viveros, plant boutiques, garden centers, interior-design shops, event/floral studios, B2B marketplaces). Target cities: CDMX, Guadalajara, Monterrey, Querétaro, Oaxaca, Mérida, Tulum-Cancún, San Miguel de Allende. Puerto Vallarta is deprioritized per owner decision 2026-10-16 (airplants are common there). Record candidates in `output/candidates-YYYY-MM-DD.md` with source URL, city, and contact route. Mark every candidate UNVERIFIED until checked.
2. **Verify:** confirm they actually sell or buy live plants, note city, wholesale terms, and the right contact route. Facts only from sources; no guesses.
3. **Pitch:** draft the first message in `output/` (Spanish for Mexican buyers) using the Tila voice and current wholesale terms.
4. **Follow-up:** log every touch in `icm/memory/sales-log.csv`; never contact the same buyer more than twice without owner direction.
5. **Order:** a buyer's yes moves to stage 04 (orders + shipping); record expected volume and delivery city.
6. **Fulfil:** stage 04 owns it; 07 records the outcome and the lesson in `icm/memory/lessons.md`.
**Gate:** NOTHING is sent to any buyer without owner approval of the final message (Bambú reviews until Ivette's approval route is configured; record any standing grant in `icm/memory/decisions.md`). No discounts or price changes without an entry in `icm/memory/price-moves.csv` approved first.
**Memory:** verified facts -> candidates file; touches -> `sales-log.csv`; lessons -> `lessons.md`; owner decisions -> `decisions.md`.

## ES-MX
**Hacer:** desarrollar compradores mayoristas con el proceso: descubrir -> verificar -> presentar -> dar seguimiento -> pedido -> cumplir.
1. **Descubrir:** buscar compradores candidatos (viveros, boutiques de plantas, centros de jardín, tiendas de diseño de interiores, estudios de eventos y flores, marketplaces B2B). Ciudades objetivo: CDMX, Guadalajara, Monterrey, Querétaro, Oaxaca, Mérida, Tulum-Cancún, San Miguel de Allende. Puerto Vallarta queda en pausa por decisión del dueño (las tillandsias son muy comunes ahí). Registrar candidatos en `output/candidates-YYYY-MM-DD.md` con URL de origen, ciudad y ruta de contacto; marcar todos como SIN VERIFICAR hasta comprobarlos.
2. **Verificar:** confirmar que venden o compran plantas vivas, anotar ciudad, condiciones de mayoreo y la ruta de contacto correcta. Solo hechos de fuentes; nada de suposiciones.
3. **Presentar:** redactar el primer mensaje en `output/` (español para compradores mexicanos) con la voz de Tila y las condiciones de mayoreo vigentes.
4. **Seguimiento:** registrar cada contacto en `icm/memory/sales-log.csv`; nunca contactar al mismo comprador más de dos veces sin indicación del dueño.
5. **Pedido:** un sí del comprador pasa a la etapa 04 (pedidos + envíos); anotar volumen esperado y ciudad de entrega.
6. **Cumplir:** la etapa 04 lo ejecuta; la 07 registra el resultado y la lección en `icm/memory/lessons.md`.
**Control:** NADA se envía a ningún comprador sin la aprobación del dueño sobre el mensaje final (Bambú revisa hasta que la ruta de aprobación de Ivette esté configurada; cualquier autorización permanente se registra en `icm/memory/decisions.md`). Sin descuentos ni cambios de precio sin una entrada aprobada en `icm/memory/price-moves.csv`.
**Memoria:** hechos verificados -> archivo de candidatos; contactos -> `sales-log.csv`; lecciones -> `lessons.md`; decisiones del dueño -> `decisions.md`.
