---
target: /servicios
total_score: 15
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/optik/Documents/Code/ppmasac/ppmasac_v0/app/servicios/page.tsx"
target_fingerprint: "sha256:b5846c1458d9e9514592a3283159524dcd6108bf7ff18f9eb67be60264d18d03"
target_path: /Users/optik/Documents/Code/ppmasac/ppmasac_v0/app/servicios/page.tsx
timestamp: 2026-09-26T23-12-35Z
slug: app-servicios-page-tsx
---
Method: dual-agent (A: db344ac4-bb95-4c4e-834e-200e2e07b4ee · B: a1543884-941b-4e44-adf0-1e80c1ccbb44)

# Crítica: /servicios (app/servicios/page.tsx)

## Design Health Score

| # | Heurística | Nota | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 2 | "Servicios" no se marca como actual en el header; página de ~15 pantallas sin indicador de sección |
| 2 | Coincidencia con el mundo real | 2 | Vocabulario técnico exacto, pero el orden no sigue la vida de un proyecto |
| 3 | Control y libertad | 2 | Sin vuelta al índice; en móvil el menú desaparece al hacer scroll |
| 4 | Consistencia y estándares | 1 | "1 · Terreno" en la home aterriza en "04 Habilitaciones urbanas"; seis tipos de contenedor; foto de Obras = hero de la home |
| 5 | Prevención de errores | 2 | Alcances solapados (licencias en 3 líneas); el CTA no lleva el servicio |
| 6 | Reconocer antes que recordar | 2 | Índice solo arriba |
| 7 | Flexibilidad | n/a | Superficie de marketing |
| 8 | Estética y minimalismo | 2 | Rótulo, números 01–06, halos, zoom en fotos no clicables, 6 fotos de stock, copy repetido |
| 9 | Recuperación de errores | 2 | Hash obsoleto cae arriba sin aviso; conversión solo fuera de la página |
| 10 | Ayuda | n/a | Superficie de marketing |
| **Total** | | **15/32** | **Pobre (47 %)** |

## Veredicto de especificidad
Contenido auténtico del cliente (IISS, IIEE, INDECI, expediente técnico, infraestructura funeraria) con piel de plantilla: portada azul con rótulo, bandas numeradas, rascacielos de stock, tarjetas con sombra. Desfasada frente a la home nueva (sin rótulo, ordenada por ciclo de vida).

Detector CLI: 0 hallazgos. Detector en navegador: 4 — all-caps-body en `.indexLink` (ServicesCover.module.css:80-89), `.panelLabel` (ServiceGroups.module.css:287) y `.brandName` del footer (SiteFooter.module.css:39-49); overused-font (Inter 75 % del texto). El detector no marcó el rótulo "Servicios" sobre el h1 (ServicesCover.tsx:27), que el craft floor prohíbe.

## Problemas prioritarios
1. [P1] Orden y numeración 01–06 contradicen el ciclo de vida de la home (site.ts:232-363 vs lifecycle 170-213). Fix: ordenar por lifecycle, quitar números, fase como dato. shape → layout.
2. [P1] Colisión en la portada móvil: el menú del header (137 px sin scroll) pisa el rótulo porque `--header-offset` móvil es 84 px (globals.css:85; ServicesCover.module.css:41). Regresión de la ronda anterior; afecta también /privacidad. Fix: separar offset de anclas y padding de portada; quitar el rótulo. adapt.
3. [P1] Cero evidencia y cero tranquilidad en la página de decisión: sin logos, RUC, "desde 2018"; cierre sin 48 h, pasos ni WhatsApp; CTA a /#contacto sin servicio preseleccionado. clarify + onboard.
4. [P2] Seis tipos de contenedor y ornamento contrario al tono sobrio (halos ServiceGroups.module.css:249/325/384, zoom en fotos no clicables :90-93, panelLabel en mayúsculas :286-293). Un solo sistema de lista; agrupar Habilitaciones (10 ítems) como Obras (3×3). distill → quieter.
5. [P2] Fotos de stock dominan (~40 % de cada banda) y no encajan; Obras duplica el hero de la home (site.ts:114 y :284). distill + layout.

## Señales por persona
- Jordan: clic en "Terreno" → ve "04"; no sabe si "remodelar mi agencia" es Implementaciones, Obras o Proyectos.
- Riley: hash inválido cae arriba; números escritos a mano pueden desincronizarse; fotos con zoom parecen clicables; lector de pantalla lee "01 …" dos veces.
- Casey: colisión de portada; 12.539 px (~15 pantallas); sin menú tras scroll; 10 tarjetas apiladas; enlaces del footer de 19 px.
- Gerente de compras: sin datos legales, alcances solapados, sin cobertura geográfica ni ficha descargable.

## Observaciones menores
- Contraste: números del índice mist 12 px sobre azul ~3,8:1; índice de categoría mist sobre blanco ~2,3:1.
- Cierre sin id/aria-labelledby (ServiceGroups.tsx:226).
- Consultoría comercial: "Acompañamos a nuestros clientes" en tercera persona.
- Mayúsculas iniciales inconsistentes en títulos (texto del cliente).
- Asesoría dibujada como línea de tiempo aunque son especialidades.
- Nombres de región en mayúsculas por text-transform.
- Inter en 75 % del texto: decisión de marca, no prioritaria.

## Preguntas
- ¿No debería /servicios ser el mismo ciclo de la home, ampliado?
- Si el cliente confirma qué cliente corresponde a cada línea, ¿una frase atribuida no vale más que seis fotos de stock?
- ¿Qué se pierde, aparte de altura, quitando las fotos hasta tener propias?
- ¿Necesita el comprador corporativo una ficha descargable más que otro CTA genérico?
