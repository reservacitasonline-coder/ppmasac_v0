# Informe de Revisión de Observaciones del Cliente - PPMA SAC

**Fecha de revisión:** 13 de Septiembre de 2026  
**Documento de Origen:** `feedback/Pagina Web.docx`  
**Estado General:** **100% de las observaciones del cliente fueron levantadas en el repositorio.**

---

## 1. Resumen de Cambios Realizados (`Lo que se hizo`)

### 1.1 Razón Social y Presencia de Marca
* **Razón Social:** Se actualizó la denominación legal a **Professional Project Manager Administration SAC** (agregando la sigla "SAC") en la sección Hero (`hero.overline`) y en el Footer (`footer.brandName`).
* **Logo:** Se reemplazó el logo del footer por el recurso de alta resolución `/logos/ppmasac-white@2x.png` para asegurar legibilidad sobre fondo oscuro.
* **Número de Contacto y WhatsApp:** Se actualizó el número oficial de atención y enlace flotante de WhatsApp a **+51 981 248 447** (`51981248447`).

### 1.2 Tipografía, Tamaños y Contraste (Legibilidad en Laptop/Móvil)
* **Tipografías Unificadas:** Se homogeneizó el sitio completo usando **Oswald** para titulares y **Inter** para textos descriptivos y de navegación.
* **Aumento de Tamaños y Contraste de Texto:**
  * `.bodyOnDark`: Aumentó de `15px` a escala fluida `clamp(16px, 1.25vw, 18px)` y mayor opacidad (`rgba(255, 255, 255, 0.9)`).
  * `.bodyOnLight`: Pasó a azul marino oscuro de alto contraste (`#112752`) con tamaño `clamp(16px, 1.25vw, 18px)`.
  * **Titulares de Sección:** Aumentaron a `clamp(40px, 5.8vw, 72px)`.
  * **Subtítulos y Etiquetas:** Se ampliaron para evitar pérdida de legibilidad en pantallas de menor resolución o laptops.

### 1.3 Correcciones de Contenido por Sección de Servicios

#### A. Proyectos (Ingeniería)
* **Resumen:** Se incluyó el texto exacto solicitado:
  > *"Diseño y gestión de ingeniería en 2D, 3D, Revit (Building Information Modeling - BIM) con todas las especializaciones debidamente compatibilizadas. Obteniendo la mejor optimización de tu proyecto considerando los mejores precios del mercado."*
* **Viñetas actualizadas:**
  * Se ajustó el ítem de gerenciamiento integral especificando 2D, 3D, Revit (BIM) y análisis de precios unitarios.
  * Se detallaron las especialidades: *"Diseño en arquitectura, Indeci, Estructuras, Instalaciones Sanitarias (IISS), Instalaciones Eléctricas (IIEE) e Instalaciones Mecánicas."*

#### B. Sección Nosotros (Staff)
* Se integró la mención de experiencia en el equipo:
  > *"...contamos con un staff de profesionales con mas de 20 años laborando en la industria de la construcción, del negocio inmobiliario y servicios generales."*

#### C. Corrección Ortográfica General ("post venta" ➔ "posventa")
* Se corrigió la palabra **"post venta"** por **"posventa"** en la totalidad de la plataforma:
  * Declaración institucional (`statement`)
  * Pilares de la empresa (`about.pillars`)
  * Servicios de Asesoría y Consultoría (`services.asesoria-y-consultoria`)
  * Servicios de Consultoría Comercial (`services.consultoria-comercial`)
  * Categorías del Formulario de Contacto (`contact.services`)

#### D. Implementaciones / Mantenimiento y Servicios Generales
* Se alinearon las viñetas y columnas en las plantillas `Services.module.css` y `ServiceGroups.module.css`.
* Se actualizó la descripción de equipamiento:
  > *"Sistema de Circuito Cerrado de Televisión (CCTV), Agua Contra Incendio (ACI), cableado estructurado, voz y data, instalaciones eléctricas y sanitarias, aire acondicionado, bandejas eléctricas y subestaciones."*

#### E. Obras
* Viñetas precisadas con los requerimientos exactos del cliente:
  * *"Construcción de cercos perimétricos de albañilería tradicional, concreto, metálico y prefabricado de concreto."*
  * *"Instalaciones de Agua Contra Incendio (ACI), Circuito Cerrado de Televisión (CCTV), cámaras de seguridad y aire acondicionado."*

#### F. Inmobiliaria y Habilitación Urbana
* Alineación de contenido e inclusión explícita de:
  > *"Gestión de factibilidades de servicios: Agua y desagua, energía eléctrica, gas e internet."*

#### G. Consultoría Comercial
* Se simplificaron y ajustaron los textos a:
  * *"Elaboración de Business Plan Inmobiliario"*
  * *"Análisis de marketing global o por proyecto"*
  * *"Análisis de los puntos críticos de la gestión de venta y posventa."*
  * **Nuevo ítem añadido:** *"Análisis de los Key Performance Indicators (KPI) del sector inmobiliario."*

---

## 2. Estado de Verificación Térmica y Compilación

* **Prueba de Compilación Next.js:** Se ejecutó `npx next build` exitosamente (código de salida `0`). Todas las páginas estáticas y dinámicas compilan sin errores sintácticos ni de importación.

---

## 3. Pendientes y Sugerencias de Mejora (`Lo que falta hacer`)

### 3.1 Pendientes Directos del Cliente
* **Ninguno.** Todas las observaciones documentadas en `Pagina Web.docx` han sido satisfechas e integradas en el código fuente.

### 3.2 Sugerencias Menores de Pulido Ortográfico (Opcional)
1. **Fe de erratas ortográfica en "Building":** En el resumen del servicio de Proyectos, el texto enviado por el cliente incluía el tipeo *"Builiding Information Modeling"*. Se sugiere corregir a *"Building Information Modeling"* si se prefiere una ortografía formal impecable en inglés.
2. **Fe de erratas en "Desagüe":** En el servicio Inmobiliario, el texto incluye *"Agua y desagua"*. Se sugiere corregir a *"Agua y desagüe"*.

---

## 4. Matriz de Cumplimiento

| # | Observación del Cliente | Estado | Ubicación en Código |
|---|-------------------------|--------|---------------------|
| 1 | Agrandar razón social ("SAC") | **Levantado** | `content/site.ts`, `Hero.module.css`, `SiteFooter.tsx` |
| 2 | Mejorar contraste y tamaño de letra | **Levantado** | `styles/typography.module.css`, `globals.css` |
| 3 | Precisar textos y 2D/3D/Revit en Proyectos | **Levantado** | `content/site.ts` (`services.proyectos`) |
| 4 | Añadir staff de 20 años en Nosotros | **Levantado** | `content/site.ts` (`about.lead`) |
| 5 | Cambiar "post venta" a "posventa" | **Levantado** | Todo `content/site.ts` |
| 6 | Alinear guiones y viñetas en Implementaciones | **Levantado** | `content/site.ts`, `Services.module.css` |
| 7 | Detallar cercos e instalaciones en Obras | **Levantado** | `content/site.ts` (`services.obras`) |
| 8 | Detallar factibilidades en Inmobiliaria | **Levantado** | `content/site.ts` (`services.inmobiliaria`) |
| 9 | Añadir KPIs y ajustar Business Plan en Consultoría | **Levantado** | `content/site.ts` (`services.consultoria-comercial`) |
