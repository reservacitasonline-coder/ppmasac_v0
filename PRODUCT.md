# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Sitio público de PPMA SAC, en español de Perú (`es-PE`). Quien llega está evaluando a quién encargarle un proyecto de ingeniería, construcción o desarrollo inmobiliario y necesita decidir si PPMA es un proveedor serio y capaz antes de pedir una propuesta.

- **Prioritario — empresas corporativas** (retail, banca, salud, educación, hotelería) que necesitan construir, implementar, remodelar o mantener sus espacios: agencias bancarias, oficinas, locales en centros comerciales, clínicas, colegios.
- **Desarrolladores inmobiliarios e inversionistas** que buscan gestión integral: búsqueda y saneamiento de terreno, licencias, habilitación urbana, obra y estrategia comercial.
- **Entidades del sector público** (el Ministerio del Ambiente figura entre los clientes).
- **Propietarios particulares**: viviendas unifamiliares o multifamiliares y casas de campo o playa.

## Product Purpose

Presentar a PPMA SAC (Professional Project Manager Administration S.A.C.) como un socio capaz de llevar un proyecto completo, y convertir esa confianza en una solicitud de propuesta. El sitio tiene éxito cuando un cliente calificado envía el formulario "Solicita una propuesta" o escribe por WhatsApp con un requerimiento concreto.

## Positioning

- **Un solo equipo de principio a fin:** ingeniería, gestión y obra integradas, desde el análisis de factibilidad y el expediente técnico hasta la construcción, el equipamiento y la posventa. El cliente no coordina a varios proveedores.
- **Rigor técnico:** modelado y compatibilización de especialidades en 2D, 3D y Revit (BIM), con análisis de precios unitarios según costos reales de mercado.
- **Trayectoria:** 8 años operando ininterrumpidamente en el mercado peruano (desde 2018), un staff con más de 20 años en construcción, negocio inmobiliario y servicios generales, y una cartera de clientes reconocidos.

La consultoría comercial inmobiliaria (business plan, marketing, ventas, KPIs) es una capacidad real, pero no el diferencial principal.

## Operating Context

- El visitante compara proveedores y suele revisar el sitio en laptop o en el móvil. El cliente pidió explícitamente más tamaño de letra y más contraste para leer bien en ambos.
- Conversión por dos vías: formulario de contacto (servicio de interés, mensaje y consentimiento obligatorio) y botón flotante de WhatsApp (+51 981 248 447). Se promete respuesta en un máximo de 48 horas hábiles.
- Las solicitudes llegan por correo a `atencionalcliente@ppmasac.com`. Las revisa el equipo comercial y responde con una propuesta de alcance, plazos y presupuesto.
- El cliente revisa el sitio por rondas de observaciones escritas (ver `feedback/informe_observaciones.md`). Sus textos se incorporan de forma literal.

## Capabilities and Constraints

- **Rutas:** inicio (`/`), servicios (`/servicios`) y política de privacidad (`/privacidad`).
- **Seis líneas de servicio:** Proyectos y Gerenciamiento, Implementaciones, Obras, Habilitaciones urbanas, Asesoría y consultoría constructiva, y Consultoría comercial. El contenido detallado está en `content/site.ts`.
- **Cifras confirmadas:** 8 años en el mercado, más de 20 años de experiencia del equipo, 6 líneas de servicio y 5 especialidades de ingeniería (Arquitectura, Estructuras, IISS, IIEE, Mecánicas).
- **Terminología fija:** "posventa" (nunca "post venta"), BIM, Revit, IISS, IIEE, ACI, CCTV, INDECI, expediente técnico, habilitación urbana, saneamiento físico legal.
- **Técnica:** Next.js App Router con CSS Modules. Todo el texto vive en `content/site.ts`, así que cambiar un texto no requiere tocar componentes. Las páginas se prerenderizan de forma estática. El correo se envía con Resend (subdominio `send.ppmasac.com`) y el antispam es Cloudflare Turnstile.
- **Legal:** la Ley 29733 exige consentimiento previo, expreso e informado, por eso la casilla viene desmarcada y es obligatoria. El sitio no usa cookies de analítica ni de seguimiento. Si en el futuro se agrega medición, antes hay que pedir consentimiento y actualizar la política.
- **Pendiente del cliente:** la dirección registrada. Mientras no llegue, el schema se queda como `Organization` y no como negocio local, y la política de privacidad no muestra domicilio.
- **Código de plantilla sin usar:** las secciones Proceso, FAQ y Testimonio (`components/sections/`) y sus datos en `content/site.ts` están en inglés con contenido inventado de plantilla. No se renderizan y no deben publicarse así.

## Brand Commitments

- **Nombre:** "PPMA SAC". La razón social "Professional Project Manager Administration SAC" se muestra completa, con la sigla SAC, en el hero y el footer, por pedido del cliente.
- **Tagline:** "Ingeniería, construcción y gestión de proyectos inmobiliarios".
- **Logos:** `public/logos/` (versión a color y versión blanca para fondos oscuros). Existe una segunda serie en `public/logos_v2/`.
- **Piezas corporativas existentes:** firmas de correo (`recursos_cliente/firmas/`, `public/firmas/`) y hojas membretadas (`recursos_cliente/hojas_membretadas/`).
- **Voz:** profesional y técnica, en español peruano. Los textos de servicios los escribió el cliente y van en "usted". Los llamados a la acción y el formulario usan "tú". Unificar el tratamiento es una decisión abierta.
- **Valores declarados:** Honestidad, Compromiso, Liderazgo, Diferenciación, Orientación al cliente, Calidad y Responsabilidad social.

## Evidence on Hand

- **Logos de clientes reales y autorizados** en `public/clients/`: Cencosud, Auna, Ministerio del Ambiente, USIL, UNALM, Markham College, Plaza Norte, El Pardo DoubleTree by Hilton, Clínica Renacer, Parque del Recuerdo y Gerpal.
- **Datos corporativos verificables:** RUC 20601984564, año de fundación 2018, correo y teléfono de atención.
- **Ausencias que no se deben suplir inventando:**
  - No hay fotos de obras propias. Las fotos actuales son de Unsplash y provisionales, así que no deben presentarse como proyectos de PPMA.
  - No hay casos de estudio ni proyectos documentados con datos (m², plazos, ubicación).
  - No hay testimonios reales. El testimonio de "Eleanor Achard" es de plantilla.
  - No hay premios, certificaciones ni métricas de desempeño confirmadas más allá de las cifras de arriba.

## Product Principles

1. **Confianza con lo verificable.** Cada afirmación se apoya en un dato real: clientes, años, especialidades, RUC. Donde falta evidencia se deja el espacio vacío, no se rellena.
2. **El ciclo completo como argumento.** El contenido debe mostrar que PPMA acompaña el proyecto de principio a fin, no una lista suelta de servicios.
3. **Precisión técnica sin jerga vacía.** Se usan los términos del oficio (BIM, expediente técnico, habilitación urbana) con exactitud, en lugar de frases genéricas de constructora.
4. **Un camino claro a la propuesta.** Desde cualquier página, el visitante calificado debe llegar sin fricción al formulario o a WhatsApp.
5. **El texto del cliente es fuente de verdad.** Sus observaciones se aplican de forma literal y la ortografía técnica se cuida ("posventa", "Building Information Modeling").

## Accessibility & Inclusion

- Legibilidad en laptop y móvil como requisito explícito del cliente: texto de cuerpo de al menos 16px y alto contraste sobre fondos claros y oscuros.
- Ya implementado y a conservar: enlace para saltar al contenido, landmarks con `aria-labelledby` por sección, foco visible con teclado y opción de reducir el movimiento (`prefers-reduced-motion`) en toda animación.
- Idioma declarado `es-PE`. Los errores del formulario deben coincidir entre la validación del navegador y la del servidor.
