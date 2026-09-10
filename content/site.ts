import { unsplash } from "@/lib/unsplash";
import type {
  CallToAction,
  Client,
  FaqItem,
  LegalSection,
  NavLink,
  Photo,
  Pillar,
  ProcessStep,
  ServiceGroup,
  Stat,
  Testimonial,
} from "./types";

export const site = {
  name: "PPMA SAC",
  url: "https://www.ppmasac.com",
  /** Wordmark shown in the header. Served from `public/logos`. */
  logo: {
    src: "/logos/ppmasac-transparent@2x.png",
    alt: "PPMA SAC",
    width: 1017,
    height: 210,
  },
  tagline: "Ingeniería, construcción y gestión de proyectos inmobiliarios",
  /** Floating chat button, shown on every route. */
  whatsapp: {
    /** International format, digits only, as `wa.me` expects. */
    number: "51981554660",
    label: "+51 981 554 660",
    message:
      "Hola, escribo desde la web de PPMA SAC. Me gustaría conversar sobre un proyecto.",
  },
  description:
    "Professional Project Manager Administration (PPMA SAC): asesorías, consultorías, construcción e inmobiliaria. Ocho años ejecutando proyectos en el mercado peruano.",
} as const;

/**
 * Copy written for search engines and social cards rather than for the page.
 *
 * Titles stay under ~60 characters and descriptions under ~160 so Google shows
 * them whole instead of truncating them, which is why they do not simply reuse
 * the headings above.
 */
export const seo = {
  /** Shown as the tab and result title of the home page. */
  title: "PPMA SAC · Ingeniería, construcción y gestión de proyectos",
  description:
    "Ingeniería, construcción, supervisión y gestión de proyectos inmobiliarios en el Perú. Expedientes técnicos, obras, implementaciones y habilitaciones urbanas.",
  keywords: [
    "constructora en Perú",
    "gerencia de proyectos de construcción",
    "supervisión de obra",
    "expedientes técnicos",
    "habilitaciones urbanas",
    "consultoría de construcción",
    "implementación de oficinas",
    "proyectos BIM",
  ],
  /** Registered details, used by the structured data in `lib/seo.ts`. */
  legalName: "Professional Project Manager Administration S.A.C.",
  ruc: "20601984564",
  /** Eight uninterrupted years in the market, per the About section. */
  foundedIn: "2018",
  /** What the company is an authority on, in schema.org terms. */
  expertise: [
    "Gerencia de proyectos de construcción",
    "Supervisión de obra",
    "Expedientes técnicos",
    "Habilitaciones urbanas",
    "Building Information Modeling",
    "Consultoría inmobiliaria",
  ],
  /** Pages the /servicios cover and its search result share. */
  services: {
    title: "Servicios de ingeniería y construcción",
    description:
      "Seis líneas de servicio: proyectos, implementaciones, obras, habilitaciones urbanas, asesoría constructiva y consultoría comercial inmobiliaria.",
  },
} as const;

/**
 * The header and footer render these on every route, so the home-page
 * anchors are absolute — a bare `#nosotros` would go nowhere from
 * `/servicios`.
 */
export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Clientes", href: "/#clientes" },
];

export const hero = {
  overline: "Professional Project Manager Administration SAC",
  /** One line per rendered row of the `h1`. */
  title: ["PPMA SAC"],
  /** Rendered as a dot-separated list under the rule. */
  disciplines: ["Asesorías", "Consultorías", "Construcción", "Inmobiliaria"],
  primary: {
    label: "Solicita una propuesta",
    href: "#contacto",
  } satisfies CallToAction,
  secondary: { label: "Ver servicios", href: "/servicios" } satisfies CallToAction,
  background: {
    src: unsplash("photo-1503387762-592deb58ef4e", 2000),
    alt: "Obra en construcción con la ciudad de fondo",
  } satisfies Photo,
};

export const statement =
  "Integramos ingeniería, gestión y obra en un solo equipo: del análisis de factibilidad y el expediente técnico a la construcción, el equipamiento y la posventa. Cuidamos alcances, costos, plazos, calidad y seguridad, en armonía con el entorno y con cada grupo de interés.";

export const stats: Stat[] = [
  { value: "08", label: "Años en el mercado peruano" },
  { value: "20", suffix: "+", label: "Años de experiencia del equipo" },
  { value: "06", label: "Líneas de servicio" },
  { value: "05", label: "Especialidades de ingeniería" },
];

export const about = {
  eyebrow: "Nosotros",
  heading: ["Nuestra", "empresa"],
  lead: "Somos Professional Project Manager Administration (PPMA SAC), un sólido grupo empresarial con 8 años operando ininterrumpidamente en el mercado peruano. Contamos con un staff de profesionales con mas de 20 años laborando en la industria de la construcción, del negocio inmobiliario y servicios generales.",
  cta: { label: "Contacto", href: "#contacto" } satisfies CallToAction,
  gallery: [
    {
      src: unsplash("photo-1493397212122-2b85dda8106b", 1400),
      alt: "Fachada de concreto curva de un edificio moderno",
    },
    {
      src: unsplash("photo-1486406146926-c627a92ad1ab", 900),
      alt: "Torre de vidrio fotografiada desde abajo",
    },
  ] satisfies Photo[],
  subtitle: "Quiénes somos",
  columns: [
    "Nuestra experiencia prevalece en los alcances, costos, tiempo, calidad, seguridad y la preservación del medio ambiente en armonía con los stakeholders.",
    "Brindamos el servicio de asesoría, consultoría, supervisión, construcción e ingeniería en el rubro inmobiliario, mantenimiento, servicio de posventa, servicio comercial y de marketing, compra de terrenos, habilitaciones urbanas, análisis de factibilidad de proyectos, desarrollo de expedientes, entre otros.",
  ],
  pillars: [
    {
      title: "Misión",
      body: "Generar valor a nuestros grupos de interés de manera eficiente y contribuir con el desarrollo del país.",
    },
    {
      title: "Visión",
      body: "Posicionarnos como una empresa líder en el mercado nacional con proyección internacional en servicios de ingeniería, construcción, supervisión, mantenimiento y posventa; sustentada en el trabajo responsable, dedicado e innovador de sus directivos y colaboradores.",
    },
  ] satisfies Pillar[],
  valuesTitle: "Valores",
  values: [
    "Honestidad",
    "Compromiso",
    "Liderazgo",
    "Diferenciación",
    "Orientación al cliente",
    "Calidad",
    "Responsabilidad social",
  ],
};

export const services = {
  eyebrow: "Servicios",
  heading: ["Lo que", "hacemos"],
  lead: "Seis líneas de servicio que cubren el ciclo completo de un proyecto: del diseño y las licencias a la obra, el equipamiento y la venta.",
  cta: { label: "Ver todos los servicios", href: "/servicios" } satisfies CallToAction,
  /** Backdrop of the summary section on the home page. */
  background: {
    src: unsplash("photo-1541888946425-d81bb19240f5", 2000),
    alt: "Cuadrilla de obra sobre una losa con acero de refuerzo",
  } satisfies Photo,
  /** Cover band of the /servicios page. */
  page: {
    heading: ["Ingeniería, construcción", "y gestión integral"],
    lead: "Acompañamos el proyecto de principio a fin, con un staff de profesionales con más de 20 años en la industria de la construcción.",
    background: {
      src: unsplash("photo-1493397212122-2b85dda8106b", 2000),
      alt: "Fachada de concreto curva de un edificio moderno",
    } satisfies Photo,
    indexTitle: "Líneas de servicio",
    closing: {
      title: "¿Tienes un proyecto en mente?",
      body: "Cuéntanos el alcance y te proponemos plazos y presupuesto.",
      cta: { label: "Contacto", href: "/#contacto" } satisfies CallToAction,
    },
  },
  /** Shared by the summary on the home page and the detail page. */
  groups: [
    {
      index: "01",
      slug: "proyectos",
      title: "Proyectos",
      summary:
        "Diseño y gestión de ingeniería en 2D, 3D, Revit (Builiding Information Modeling - BIM) con todas las especializaciones debidamente compatibilizadas. Obteniendo la mejor optimización de tu proyecto considerando los mejores precios del mercado.",
      photo: {
        src: unsplash("photo-1487958449943-2429e8be8625", 1200),
        alt: "Edificio contemporáneo de geometría angular",
      },
      items: [
        "Diseño de viviendas unifamiliares, casas de playa y campo; viviendas multifamiliares, edificios de usos mixtos, multideportivos, colegios, habilitaciones urbanas, clínicas y hospitales.",
        "Diseño vial y urbanístico.",
        "Gerenciamiento integral, diseño y gestión de ingeniería, desarrollo y compatibilización integral del proyecto en 2D, 3D y Revit (BIM), con análisis de precios unitarios según costos del mercado.",
        "Especialidades: Diseño en arquitectura, Indeci, Estructuras, Instalaciones Sanitarias (IISS), Instalaciones Eléctricas (IIEE) e Instalaciones Mecánicas.",
      ],
    },
    {
      index: "02",
      slug: "implementaciones",
      title: "Implementaciones",
      summary:
        "Acondicionamiento y equipamiento de agencias bancarias, oficinas, retail y salas de venta, con todos sus sistemas especializados.",
      photo: {
        src: unsplash("photo-1431576901776-e539bd916ba2", 1200),
        alt: "Torres de oficinas de vidrio vistas desde la calle",
      },
      items: [
        "Construcción, acondicionamiento, remodelación y equipamiento de agencias bancarias.",
        "Construcción de salas de ventas y pilotos.",
        "Implementación y remodelación de oficinas.",
        "Implementación de centros comerciales y locatarios de retail.",
        "Mantenimiento y servicios generales en centros comerciales.",
        "Implementación de todo tipo de acabados para casas, departamentos, cocinas, baños, zonas de parrilla y jardines.",
        "Sistema de Circuito Cerrado de Televisión (CCTV), Agua Contra Incendio (ACI), cableado estructurado, voz y data, instalaciones eléctricas y sanitarias, aire acondicionado, bandejas eléctricas y subestaciones.",
        "Sistema integral de iluminación de polideportivos, gimnasios y terrazas.",
      ],
    },
    {
      index: "03",
      slug: "obras",
      title: "Obras",
      summary:
        "Edificación, infraestructura hospitalaria y educativa,\npavimentación, estructuras metálicas y acabados de principio a\u00a0fin.",
      photo: {
        src: unsplash("photo-1541888946425-d81bb19240f5", 1200),
        alt: "Cuadrilla de obra sobre una losa con acero de refuerzo",
      },
      items: [
        "Construcción de infraestructura hospitalaria: clínicas, centros de salud, centros médicos y consultorios.",
        "Pavimentación de vías urbanas y carreteras en pavimento asfáltico, de concreto y adoquinado.",
        "Construcción de losas de concreto, losas polideportivas, estacionamientos, patios de maniobras, cercos perimétricos y centrales de lavado para camiones o autos.",
        "Obras de arte en infraestructura vial: veredas, sardineles, calzadas, cunetas y pontones.",
        "Obras de saneamiento de redes de agua, desagüe y alumbrado público.",
        "Tendido de redes de media y baja tensión, y subestaciones eléctricas.",
        "Demoliciones y movimiento de tierras.",
        "Construcción integral de colegios, institutos, aulas, laboratorios y centros penitenciarios de menores.",
        "Construcción integral de edificios multifamiliares, residenciales, institucionales y de oficinas.",
        "Construcción de almacenes, naves industriales, hangares y grifos de líquidos y gas.",
        "Fabricación y montaje de estructuras metálicas: sistema aporticado metálico, losas colaborantes, naves industriales, canopy, tijerales y letreros publicitarios.",
        "Construcción de parques y jardines.",
        "Construcción de cercos perimétricos de albañilería tradicional, concreto, metálico y prefabricado de concreto.",
        "Instalaciones de Agua Contra Incendio (ACI), Circuito Cerrado de Televisión (CCTV), cámaras de seguridad y aire acondicionado.",
        "Implementación e iluminación de losas polideportivas de vóley, fútbol y básquet, con sistema de luces led, tableros electrónicos y control de mandos.",
        "Construcción en drywall en general.",
        "Acabados en general: mármol, cuarzo, granito, porcelanatos, cerámicos, piedra laja e instalación de vidrios.",
        "Muebles de melamina según diseño del cliente.",
      ],
    },
    {
      index: "04",
      slug: "habilitaciones-urbanas",
      title: "Habilitaciones urbanas",
      summary:
        "Saneamiento legal, topografía, movimiento de tierras, factibilidades y diseño urbanístico de predios de gran extensión.",
      photo: {
        src: unsplash("photo-1471039497385-b6d6ba609f9c", 1200),
        alt: "Vista de la ciudad al atardecer",
      },
      items: [
        "Saneamiento físico y legal de la propiedad.",
        "Localización de terrenos, levantamientos topográficos y geodésicos.",
        "Búsqueda de terrenos.",
        "Movimiento de tierras, cortes y nivelaciones.",
        "Gestión de factibilidades de servicios: Agua y desagua, energía eléctrica, gas e internet.",
        "Diseño urbanístico de predios de gran extensión, paisajismo, jardinería y piletas.",
        "Gestión y saneamiento de licencias y permisos municipales distritales y metropolitanos.",
        "Desarrollo de cabidas para la evaluación de terrenos.",
        "Habilitaciones urbanas: pistas y veredas, jardines, pórticos de ingreso, pérgolas, piletas, zona de capillas, cercos perimétricos y estacionamientos.",
        "Oficinas de trabajo en estructuras metálicas, cámaras de sarcófagos y estructuras para la zona de hornos crematorios.",
      ],
    },
    {
      index: "05",
      slug: "asesoria-y-consultoria",
      title: "Asesoría y consultoría\nconstructiva",
      summary:
        "Licencias, expedientes técnicos, presupuestos, gerenciamiento de proyectos y supervisión de obra.",
      photo: {
        src: unsplash("photo-1504307651254-35680f356dfd", 1200),
        alt: "Equipo de obra revisando el avance en campo",
      },
      items: [
        "Gestión y seguimiento de licencias y trámites municipales distritales y provinciales para licencias de edificación, uso de vías y conformidad de obra.",
        "Desarrollo y formulación de expedientes técnicos de aprobación municipal.",
        "Desarrollo y elaboración de perfiles de inversión pública y privada.",
        "Desarrollo de proyectos BIM (Building Information Modeling).",
        "Desarrollo de cabidas para la compra de terrenos.",
        "Desarrollo de presupuestos.",
        "Gerenciamiento de proyectos.",
        "Gerenciamiento integral de la optimización de ingenierías y la constructibilidad, para mejorar la rentabilidad del proyecto.",
        "Gestión de posventa.",
        "Supervisión de obras.",
      ],
    },
    {
      index: "06",
      slug: "consultoria-comercial",
      title: "Consultoría comercial",
      summary:
        "Estudios de mercado, viabilidad comercial, business plan inmobiliario y gestión de venta y posventa.",
      photo: {
        src: unsplash("photo-1449157291145-7efd050a4d0e", 1200),
        alt: "Rascacielos vistos desde abajo",
      },
      items: [
        "Elaboración y evaluación del estudio de mercado de cada proyecto según su ejecución.",
        "Análisis y viabilidad comercial del proyecto, definición del producto o servicio y análisis comercial.",
        "Elaboración de Business Plan Inmobiliario",
        "Análisis de marketing global o por proyecto",
        "Análisis de los puntos críticos de la gestión de venta y posventa.",
        "Organización y gestión de ferias y eventos del sector inmobiliario.",
        "Análisis de los Key Performance Indicators (KPI) del sector inmobiliario.",
      ],
    },
  ] satisfies ServiceGroup[],
};

export const clients = {
  eyebrow: "Clientes",
  heading: ["Empresas que", "confían en nosotros"],
  /** Logos live in `public/clients`; the name is used as alt text. */
  items: [
    { name: "Cencosud", logo: "/clients/Cencosud-2014.svg" },
    { name: "Auna", logo: "/clients/logotipo_AUNA-01.svg" },
    { name: "Ministerio del Ambiente del Perú", logo: "/clients/PCM-Ambiente.webp" },
    { name: "Universidad San Ignacio de Loyola", logo: "/clients/Usil.jpg" },
    {
      name: "Universidad Nacional Agraria La Molina",
      logo: "/clients/UNALM-Texto-1024x296.png",
    },
    { name: "Markham College", logo: "/clients/weblogo80sAsset-5@3x.png" },
    {
      name: "Plaza Norte",
      logo: "/clients/plaza-norte-seeklogo.png",
    },
    {
      name: "El Pardo DoubleTree by Hilton",
      logo: "/clients/El_pardo.jpg",
    },
    { name: "Clínica Renacer", logo: "/clients/clinica-renacer-transparente.png" },
    {
      name: "Parque del Recuerdo",
      logo: "/clients/parque-recuerdo-trim.png",
      scale: 1.15,
    },
    { name: "Gerpal", logo: "/clients/gerpal_sac_logo.jpeg" },
  ] satisfies Client[],
};

export const process = {
  heading: ["From concept to completion, we", "master every square foot."],
  background: {
    src: unsplash("photo-1487958449943-2429e8be8625", 2000),
    alt: "Concrete high-rise seen from street level",
  } satisfies Photo,
  steps: [
    {
      index: "01",
      title: "Initial planning",
      description:
        "We map programme, site constraints and budget into a single, testable brief.",
    },
    {
      index: "02",
      title: "Architectural phase",
      description:
        "Drawings developed with the trades in the room, so details survive the field.",
    },
    {
      index: "03",
      title: "Space complexity",
      description: "Systems, envelope and finishes coordinated in one federated model.",
    },
    {
      index: "04",
      title: "Materials selection",
      description:
        "Specifications balanced for lifecycle cost, lead time and long-term durability.",
    },
  ] satisfies ProcessStep[],
};

export const faq = {
  eyebrow: "Questions",
  heading: ["Frequently", "asked questions"],
  thumbnails: [
    {
      src: unsplash("photo-1541888946425-d81bb19240f5", 700),
      alt: "Modern residential building",
    },
    {
      src: unsplash("photo-1431576901776-e539bd916ba2", 700),
      alt: "Glass atrium ceiling",
    },
  ] satisfies Photo[],
  items: [
    {
      question: "What types of commercial projects do you handle?",
      answer:
        "Office, retail, light industrial, hospitality and mixed-use, typically between 5,000 and 250,000 square feet. Ground-up and adaptive reuse alike.",
    },
    {
      question: "How long does a typical commercial construction project take?",
      answer:
        "A tenant improvement usually runs 10 to 16 weeks. Ground-up construction averages 9 to 18 months depending on permitting and long-lead equipment.",
    },
    {
      question: "Do you offer design-build services?",
      answer:
        "Yes. Design-build is our default delivery method: a single contract keeps the drawings, the budget and the schedule aligned from day one.",
    },
    {
      question: "How do you keep projects on budget?",
      answer:
        "We price during design rather than after it, then report cost against the model every week so decisions happen while they are still cheap.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "We carry general liability, builder's risk and workers' compensation coverage, and hold active licences in every state where we operate.",
    },
    {
      question: "Can building materials be shipped to remote locations?",
      answer:
        "They can. We plan logistics, staging and storage during pre-construction so remote sites never wait on a delivery truck.",
    },
  ] satisfies FaqItem[],
};

export const testimonial: Testimonial = {
  quote:
    "Outstanding service and remarkable attention to detail. Highly recommended for anyone seeking premium real estate solutions.",
  author: {
    name: "Eleanor Achard",
    role: "Director, Meridian Holdings",
    avatar: {
      src: unsplash("photo-1507003211169-0a1dd7228f2d", 200),
      alt: "Portrait of Eleanor Achard",
      width: 88,
      height: 88,
    },
  },
};

export const contact = {
  /** Rendered as the header button, which exists on every route. */
  cta: { label: "Contacto", href: "/#contacto" } satisfies CallToAction,
  eyebrow: "Contacto",
  heading: ["Conversemos", "de tu proyecto"],
  lead: "Cuéntanos qué necesitas y un especialista revisará tu requerimiento para proponerte el alcance, los plazos y el presupuesto.",
  form: {
    title: "Solicita una propuesta",
    /** Options for the "servicio de interés" select. */
    services: [
      "Construcción",
      "Supervisión de obra",
      "Consultoría y asesoría",
      "Mantenimiento y posventa",
      "Inmobiliario y habilitación urbana",
      "Otro",
    ],
    submit: "Enviar solicitud",
    submitting: "Enviando…",
    note: "Respondemos en un plazo máximo de 48 horas hábiles.",
    /**
     * Read twice: the browser shows them in its own validation bubble while
     * the visitor types, and the server action returns them under the field
     * when the form is posted anyway. Both have to say the same thing.
     */
    errors: {
      name: "Indícanos tu nombre.",
      email: "Indícanos tu correo.",
      emailInvalid: "Revisa el correo, no parece una dirección válida.",
      phoneInvalid: "Usa solo números y los signos + ( ) -, con al menos 6 dígitos.",
      message: "Indícanos tu mensaje.",
      messageShort: "Cuéntanos un poco más sobre el proyecto.",
      consent: "Necesitamos tu autorización para tratar estos datos.",
      summary: "Revisa los campos marcados para poder enviar tu solicitud.",
    },
    /**
     * Ley 29733 asks for consent that is prior, express and informed, so the
     * box ships unticked and the form refuses to send without it.
     */
    consent: {
      before: "He leído y acepto la ",
      link: { label: "política de privacidad", href: "/privacidad" },
      after: " y autorizo el tratamiento de mis datos para responder esta solicitud.",
    },
  },
};

/**
 * Privacy notice required by Ley 29733 and its regulation, since the contact
 * form collects personal data. Pending from the client: the registered
 * address, which belongs in the first clause.
 */
export const privacy = {
  eyebrow: "Legal",
  heading: ["Política", "de privacidad"],
  lead: "Cómo trata PPMA SAC los datos personales que nos dejas en este sitio web, para qué los usamos y cómo puedes controlarlos en cualquier momento.",
  sections: [
    {
      index: "01",
      slug: "responsable",
      title: "Quién trata tus datos",
      body: [
        "El responsable del tratamiento es Professional Project Manager Administration S.A.C. (PPMA SAC), con RUC 20601984564, empresa domiciliada en el Perú. Puedes escribirnos por cualquier asunto relacionado con tus datos personales a:",
      ],
      items: ["Correo: atencionalcliente@ppmasac.com", "Teléfono: +51 981 554 660"],
    },
    {
      index: "02",
      slug: "datos",
      title: "Qué datos recogemos",
      body: [
        "Solo los que escribes en el formulario de contacto. No pedimos ni tratamos datos sensibles, y tampoco compramos bases de datos de terceros.",
      ],
      items: [
        "Nombre y apellido.",
        "Empresa, si decides indicarla.",
        "Correo electrónico.",
        "Teléfono, si decides indicarlo.",
        "Servicio de interés y el contenido de tu mensaje.",
      ],
    },
    {
      index: "03",
      slug: "finalidad",
      title: "Para qué los usamos",
      body: [
        "Usamos tus datos únicamente para atender tu solicitud: entender el requerimiento, contactarte, preparar una propuesta de alcance, plazos y presupuesto, y hacer el seguimiento de esa conversación.",
        "No los usamos para enviarte publicidad ni los cedemos con fines comerciales. Si en el futuro quisiéramos hacerlo, te pediríamos una autorización aparte.",
      ],
    },
    {
      index: "04",
      slug: "consentimiento",
      title: "Con qué autorización",
      body: [
        "La base del tratamiento es tu consentimiento, que otorgas al marcar la casilla del formulario antes de enviarlo. Es libre, previo, expreso e informado, como exige la Ley 29733 de Protección de Datos Personales y su reglamento.",
        "Puedes retirarlo cuando quieras escribiéndonos al correo indicado, sin que ello afecte la validez del tratamiento realizado hasta ese momento.",
      ],
    },
    {
      index: "05",
      slug: "conservacion",
      title: "Cuánto tiempo los conservamos",
      body: [
        "Guardamos tu solicitud mientras dure la conversación comercial y hasta dos años después del último contacto, plazo en el que podría retomarse el proyecto. Cumplido ese periodo los eliminamos, salvo que una norma nos obligue a conservarlos por más tiempo, como ocurre con la documentación contractual y tributaria.",
      ],
    },
    {
      index: "06",
      slug: "destinatarios",
      title: "Quién más los ve",
      body: [
        "Tu solicitud llega al equipo comercial de PPMA SAC y a nadie más. Los proveedores que hacen posible el servicio —alojamiento del sitio y correo corporativo— actúan como encargados de tratamiento, solo procesan los datos por encargo nuestro y están sujetos a deberes de confidencialidad.",
        "Estos proveedores pueden almacenar la información en servidores ubicados fuera del Perú, lo que constituye un flujo transfronterizo de datos amparado en tu consentimiento y sujeto a las garantías que exige la normativa.",
      ],
    },
    {
      index: "07",
      slug: "seguridad",
      title: "Cómo los protegemos",
      body: [
        "La información viaja cifrada mediante HTTPS y se almacena en el banco de datos de contactos comerciales de PPMA SAC, con acceso restringido al personal que necesita conocerla. Aplicamos las medidas técnicas, organizativas y legales que exige la normativa peruana de protección de datos personales.",
      ],
    },
    {
      index: "08",
      slug: "derechos",
      title: "Tus derechos",
      body: [
        "En cualquier momento puedes ejercer tus derechos de información, acceso, actualización, rectificación, inclusión, supresión, oposición y tratamiento objetivo de tus datos personales.",
        "Para hacerlo, escríbenos a atencionalcliente@ppmasac.com indicando tu solicitud y adjuntando un documento que acredite tu identidad. Responderemos dentro de los plazos que fija la ley. Si consideras que no atendimos tu pedido, puedes reclamar ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.",
      ],
    },
    {
      index: "09",
      slug: "cookies",
      title: "Cookies",
      body: [
        "Este sitio no utiliza cookies de analítica, publicidad ni seguimiento de terceros: solo las estrictamente necesarias para que las páginas funcionen. Si más adelante incorporamos herramientas de medición, lo anunciaremos aquí y solicitaremos tu consentimiento antes de activarlas.",
      ],
    },
    {
      index: "10",
      slug: "cambios",
      title: "Cambios en esta política",
      body: [
        "Podemos actualizar esta política si cambian nuestros servicios o la normativa aplicable. La versión vigente es siempre la publicada en esta página, así que te recomendamos revisarla cada cierto tiempo.",
      ],
    },
  ] satisfies LegalSection[],
};

export const footer = {
  /** Wordmark for the dark footer band. Served from `public/logos`. */
  logo: {
    src: "/logos/ppmasac-white@2x.png",
    alt: "PPMA SAC",
    width: 1017,
    height: 210,
  },
  brandName: "Professional Project Manager Administration SAC",
  brandLine: "Ingeniería, construcción y gestión de proyectos inmobiliarios en el Perú.",
  company: {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Servicios", href: "/servicios" },
      { label: "Clientes", href: "/#clientes" },
      { label: "Contacto", href: "/#contacto" },
    ] satisfies NavLink[],
  },
  /** The service links are derived from `services.groups`. */
  servicesTitle: "Servicios",
  contact: {
    title: "Contacto",
    email: "atencionalcliente@ppmasac.com",
    phone: { label: "+51 981 554 660", href: "tel:+51981554660" },
  },
  legal: `© ${new Date().getFullYear()} PPMA SAC. Todos los derechos reservados.`,
  /** The only legal document the site publishes, required by the form. */
  links: [{ label: "Política de privacidad", href: "/privacidad" }] satisfies NavLink[],
};
