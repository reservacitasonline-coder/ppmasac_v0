import { unsplash } from "@/lib/unsplash";
import type {
  CallToAction,
  Client,
  CompanyValue,
  FaqItem,
  LegalSection,
  LifecycleStep,
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
    number: "51981248447",
    label: "+51 981 248 447",
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
    "Ingeniería, Construcción, Supervisión y Gestión de Proyectos Inmobiliarios en el Perú. Expedientes Técnicos, Obras, Implementaciones y Habilitaciones Urbanas.",
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
  /** Eight years in the market, per the "08" in the hero's proof row. */
  foundedIn: "2018",
  /** What the company is an authority on, in schema.org terms. */
  expertise: [
    "Gerencia de Proyectos de Construcción",
    "Supervisión de Obra",
    "Expedientes Técnicos",
    "Habilitaciones Urbanas",
    "Building Information Modeling",
    "Consultoría Inmobiliaria",
  ],
  /** Pages the /servicios cover and its search result share. */
  services: {
    title: "Servicios de Ingeniería y Construcción",
    description:
      "Seis líneas de servicio: Proyectos y Gerenciamiento, Implementaciones, Obras, Habilitaciones Urbanas, Asesoría Constructiva y Consultoría Comercial Inmobiliaria.",
  },
} as const;

/**
 * The header and footer render these on every route, so the home-page
 * anchors are absolute — a bare `#nosotros` would go nowhere from
 * `/servicios`.
 */
export const navLinks: NavLink[] = [
  { label: "Clientes", href: "/#clientes" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/#nosotros" },
];

/** Label shared by every button that leads to the proposal form. */
const proposalLabel = "Solicitar propuesta";

export const hero = {
  /** One line per rendered row of the `h1`, which wraps further on phones. */
  title: ["Ingeniería, Construcción", "y Gestión Integral"],
  /** The registered name, kept prominent at the client's request. */
  legalName: "Professional Project Manager Administration SAC",
  lead: "Transformamos sus Proyectos desde el Análisis de Factibilidad y Expediente Técnico hasta la Ejecución y Posventa, garantizando cumplimiento en costos, plazos, calidad y seguridad.",
  /** Verifiable facts only. Leading zeros are kept, also while counting up. */
  proof: [
    { value: "08", label: ["Años en el", "mercado peruano"] },
    { value: "20", suffix: "+", label: ["Años de experiencia", "del equipo"] },
    { value: "06", label: ["Líneas de", "servicio"] },
    { value: "05", label: ["Especialidades", "de ingeniería"] },
  ] satisfies Stat[],
  primary: { label: proposalLabel, href: "#contacto" } satisfies CallToAction,
  secondary: { label: "Ver servicios", href: "#servicios" } satisfies CallToAction,
  background: {
    src: unsplash("photo-1541888946425-d81bb19240f5", 2000),
    alt: "Equipo de obra con cascos y chalecos sobre una losa, junto a una zona con acero de refuerzo",
  } satisfies Photo,
};

export const about = {
  heading: ["Nuestra", "Empresa"],
  lead: [
    "En Professional Project Manager Administration (PPMA SAC) transformamos visiones en realidades rentables y sostenibles. Somos un grupo empresarial líder en el mercado peruano, respaldado por un equipo con más de 20 años de experiencia en los sectores de construcción, inmobiliario y servicios generales.",
    "Asumimos la dirección completa de cada proyecto, desde la factibilidad y adquisición de terrenos hasta la ingeniería, construcción y soporte posventa. Bajo un firme compromiso con la seguridad y la sostenibilidad, garantizamos el éxito de su inversión optimizando costos, plazos y calidad.",
  ],
  /** Not shown on the page; names the "about" node in the structured data. */
  subtitle: "Quiénes somos",
  /** Set in brand blue inside the `lead` paragraphs; skipped where it does not appear verbatim. */
  leadName: "Professional Project Manager Administration (PPMA SAC)",
  pillars: [
    {
      title: "Misión",
      body: "Brindar soluciones eficientes en ingeniería y construcción que generen valor para nuestros aliados, contribuyendo activamente al progreso y desarrollo sostenible del país.",
    },
    {
      title: "Visión",
      body: "Consolidar nuestro liderazgo en el mercado nacional y expandir nuestra presencia internacional en servicios integrales de infraestructura, respaldados por la innovación, dedicación y excelencia de nuestro equipo.",
    },
  ] satisfies Pillar[],
  valuesTitle: "Valores Corporativos",
  values: [
    {
      title: "Honestidad",
      description: "Transparencia e Integridad Ética.",
      icon: "handshake",
    },
    {
      title: "Compromiso",
      description: "Entregas en Tiempo, Costo y Calidad pactados.",
      icon: "clipboard",
    },
    {
      title: "Liderazgo",
      description: "Visión Constructiva y Determinación Técnica.",
      icon: "compass",
    },
    {
      title: "Diferenciación",
      description: "Valor único a través de la Innovación.",
      icon: "lightbulb",
    },
    {
      title: "Orientación al cliente",
      description: "Superar Expectativas y Necesidades.",
      icon: "user",
    },
    {
      title: "Calidad",
      description: "Excelencia técnica y Rigor Constructivo.",
      icon: "award",
    },
    {
      title: "Responsabilidad social",
      description: "Construcción sostenible para la comunidad.",
      icon: "sprout",
    },
  ] satisfies CompanyValue[],
};

export const services = {
  eyebrow: "Servicios",
  heading: ["Gestión Integral", "en Cada Etapa de su Proyecto"],
  lead: "Seis líneas de servicio que cubren el ciclo completo de un proyecto: Del Terreno y Licencias, a la Obra, el Equipamiento y la Venta.",
  cta: { label: "Ver el detalle de cada servicio", href: "/servicios" } satisfies CallToAction,
  /**
   * Two deliverables per line for the home page. Keyed by `groups[].slug`;
   * the order comes from `groups`.
   */
  lifecycle: [
    {
      slug: "habilitaciones-urbanas",
      deliverables: ["Saneamiento físico y legal", "Topografía y estudios de cabida"],
    },
    {
      slug: "asesoria-y-consultoria",
      deliverables: [
        "Expedientes técnicos para aprobación municipal",
        "Licencias y conformidad de obra",
      ],
    },
    {
      slug: "proyectos",
      deliverables: [
        "Especialidades compatibilizadas en BIM (Revit)",
        "Presupuesto con precios reales de mercado",
      ],
    },
    {
      slug: "obras",
      deliverables: [
        "Edificaciones, obras viales y estructuras",
        "Control de calidad de principio a fin",
      ],
    },
    {
      slug: "implementaciones",
      deliverables: [
        "Agencias bancarias, oficinas y locales comerciales",
        "ACI, CCTV, instalaciones eléctricas y climatización",
      ],
    },
    {
      slug: "consultoria-comercial",
      deliverables: ["Estudios de mercado y Business Plan", "Gestión de ventas y posventa"],
    },
  ] satisfies LifecycleStep[],
  /** Cover band of the /servicios page. */
  page: {
    heading: ["Ingeniería, Gestión y Construcción", "Integradas en un solo equipo"],
    lead: "Acompañamos el proyecto de principio a fin, con un staff de profesionales con más de 20 años en la industria de la construcción.",
    background: {
      src: unsplash("photo-1493397212122-2b85dda8106b", 2000),
      alt: "Fachada de concreto curva de un edificio moderno",
    } satisfies Photo,
    indexTitle: "Líneas de servicio",
    closing: {
      title: "¿Tiene un proyecto en mente?",
      body: "Cuéntenos el alcance y le proponemos plazos y presupuesto.",
      cta: { label: proposalLabel, href: "/#contacto" } satisfies CallToAction,
    },
  },
  /** Shared by the summary on the home page and the detail page. */
  groups: [
    {
      index: "01",
      slug: "proyectos",
      title: "Proyectos y Gerenciamiento",
      summary:
        "Transformamos sus ideas en proyectos viables, eficientes y listos para construir. Nuestro servicio abarca desde el diseño de infraestructura urbana, comercial y de salud, hasta la gestión técnica avanzada y el análisis de costos reales del mercado para asegurar el éxito de su inversión.",
      teaser:
        "Transformamos sus ideas en proyectos viables, eficientes y listos para construir.",
      photo: {
        src: unsplash("photo-1487958449943-2429e8be8625", 1200),
        alt: "Edificio contemporáneo de geometría angular",
      },
      layout: "tiles",
      items: [
        "Diseño Arquitectónico Integral: Desarrollamos proyectos residenciales (unifamiliares, multifamiliares, campo y playa), así como complejos comerciales, de usos mixtos, educativos, deportivos y de salud (clínicas y hospitales).",
        "Planificación Vial y Urbanística: Diseñamos entornos urbanos e infraestructura vial eficientes, optimizando el uso del suelo y la conectividad.",
        "Gerenciamiento y Optimización Técnica: Dirección integral del proyecto mediante modelado y compatibilización avanzada en 2D, 3D y tecnología Revit (Building Information Modeling - BIM), respaldada por un riguroso análisis de precios unitarios según los costos reales del mercado.\nGestionamos de manera integral y supervisamos cada etapa del proyecto, asegurando calidad, productividad y cumplimiento de plazos. Optimizamos procesos, costos y recursos para generar ahorros y maximizar la rentabilidad de su inversión.",
        "Ingenierías y Especialidades: Cobertura total en diseño de Arquitectura, Estructuras, Instalaciones Sanitarias (IISS), Eléctricas (IIEE), Mecánicas y asesoría especializada en seguridad para normativas INDECI.",
      ],
    },
    {
      index: "02",
      slug: "implementaciones",
      title: "Implementaciones",
      summary:
        "Desarrollamos proyectos integrales de construcción, remodelación e ingeniería, desde el acondicionamiento comercial y corporativo hasta acabados residenciales. Ofrecemos soluciones a medida que incluyen equipamiento, mantenimiento y sistemas especializados para cada espacio.",
      teaser:
        "Desarrollamos proyectos integrales de construcción, remodelación e ingeniería, desde el acondicionamiento comercial y corporativo hasta acabados residenciales.",
      photo: {
        src: unsplash("photo-1431576901776-e539bd916ba2", 1200),
        alt: "Torres de oficinas de vidrio vistas desde la calle",
      },
      layout: "tiles",
      items: [
        "Agencias bancarias: Construcción, acondicionamiento y equipamiento integral de agencias bancarias.",
        "Salas de ventas y pilotos: Construcción y habilitación de salas de ventas y departamentos piloto.",
        "Oficinas corporativas: Diseño, implementación y remodelación de oficinas corporativas.",
        "Locales comerciales y retail: Implementación comercial para centros comerciales y locatarios de retail.",
        "Mantenimiento y servicios generales: Mantenimiento integral y servicios generales para centros comerciales.",
        "Acabados de alta calidad: Instalación de acabados de alta calidad para residencias, departamentos y áreas comunes (cocinas, baños, terrazas, parrillas y jardines).",
        "Instalaciones especializadas: Ingeniería e instalaciones tales como Circuito Cerrado de Televisión (CCTV), Agua Contra Incendio (ACI), cableado estructurado, voz y datos, sistemas eléctricos, sanitarios, aire acondicionado y subestaciones.",
        "Iluminación integral: Sistemas de iluminación para polideportivos, gimnasios y terrazas.",
      ],
    },
    {
      index: "03",
      slug: "obras",
      title: "Obras",
      summary:
        "Transformamos grandes ideas en infraestructuras sólidas, modernas y de alta eficiencia. Abarcamos todas las especialidades de la construcción, desde edificaciones comerciales, corporativas y residenciales, hasta centros educativos, hospitalarios e industriales. Garantizamos un control riguroso de calidad de principio a fin, protegiendo y potenciando el valor de su inversión.",
      teaser:
        "Transformamos grandes ideas en infraestructuras sólidas, modernas y de alta eficiencia.",
      photo: {
        src: unsplash("photo-1541888946425-d81bb19240f5", 1200),
        alt: "Cuadrilla de obra sobre una losa con acero de refuerzo",
      },
      categories: [
        {
          title: "Construcción y Edificación",
          items: [
            "Edificaciones integrales: Viviendas, oficinas, hospitales, colegios y almacenes industriales.",
            "Obras viales y urbanismo: Pavimentación de carreteras, veredas, parques y jardines.",
            "Movimiento de tierras y saneamiento: Demoliciones, excavaciones y redes de agua o desagüe.",
          ],
        },
        {
          title: "Ingeniería y Estructuras",
          items: [
            "Estructuras metálicas y de concreto: Naves industriales, losas de cimentación y cercos perimétricos.",
            "Instalaciones eléctricas: Redes de media o baja tensión y subestaciones.",
            "Sistemas de seguridad y climatización: Redes contra incendio, aire acondicionado y cámaras CCTV.",
          ],
        },
        {
          title: "Acabados y Equipamiento",
          items: [
            "Acabados arquitectónicos: Revestimientos en mármol, porcelanato, cristalería y drywall general.",
            "Mobiliario a medida: Diseño y fabricación de muebles en melamina.",
            "Infraestructura deportiva: Losas polideportivas equipadas con iluminación LED inteligente.",
          ],
        },
      ],
    },
    {
      index: "04",
      slug: "habilitaciones-urbanas",
      title: "Habilitaciones Urbanas",
      summary:
        "Acompañamos el desarrollo de sus proyectos desde la identificación del terreno hasta la ejecución de infraestructura especializada. Nos encargamos de la búsqueda, saneamiento legal, topografía y gestión de licencias, asegurando la habilitación urbana integral y la construcción de obras civiles con altos estándares de calidad.",
      teaser:
        "Acompañamos el desarrollo de sus proyectos desde la identificación del terreno hasta la ejecución de infraestructura especializada.",
      photo: {
        src: unsplash("photo-1471039497385-b6d6ba609f9c", 1200),
        alt: "Vista de la ciudad al atardecer",
      },
      layout: "tiles",
      items: [
        "Saneamiento físico y legal: Regularización legal e inscripción formal de la propiedad.",
        "Localización y topografía: Búsqueda estratégica de terrenos mediante levantamientos topográficos y geodésicos.",
        "Estudios de cabida: Evaluación técnica y arquitectónica para determinar el máximo potencial de los terrenos.",
        "Gestión de licencias y permisos: Tramitación y saneamiento de autorizaciones ante municipalidades distritales y metropolitanas.",
        "Movimiento de tierras: Ejecución de cortes, nivelaciones y acondicionamiento del terreno.",
        "Factibilidad de servicios: Gestión de accesos a redes de agua, desagüe, energía eléctrica, gas e internet.",
        "Diseño urbanístico y paisajismo: Planificación de predios de gran extensión, áreas verdes, jardinería y piletas.",
        "Habilitaciones urbanas: Construcción de pistas, veredas, pórticos de ingreso, pérgolas, cercos perimétricos y estacionamientos.",
        "Estructuras metálicas: Fabricación y montaje de módulos y oficinas de trabajo de alta resistencia.",
        "Infraestructura especializada: Construcción de capillas, cámaras de sarcófagos y zonas para hornos crematorios.",
      ],
    },
    {
      index: "05",
      slug: "asesoria-y-consultoria",
      title: "Asesoría y Consultoría Constructiva",
      summary:
        "Gestionamos de manera integral el ciclo de vida técnico y legal de sus proyectos de ingeniería y construcción. Integramos la gestión de licencias, la ingeniería de detalle (expedientes técnicos), la estimación de costos y presupuestos, el gerenciamiento integral y la supervisión de obra, garantizando viabilidad técnica, cumplimiento normativo y eficiencia económica. Desglosamos nuestras capacidades en las siguientes áreas de especialización:",
      teaser:
        "Gestionamos de manera integral el ciclo de vida técnico y legal de sus proyectos de ingeniería y construcción.",
      photo: {
        src: unsplash("photo-1504307651254-35680f356dfd", 1200),
        alt: "Equipo de obra revisando el avance en campo",
      },
      layout: "panel",
      columns: 2,
      items: [
        "Gestión normativa: Tramitación y seguimiento de licencias municipales (distritales y provinciales), conformidad de obra y uso de vías.",
        "Ingeniería y diseño: Desarrollo de expedientes técnicos para aprobación municipal, modelado de proyectos BIM y perfiles de inversión pública o privada.",
        "Evaluación comercial: Estudios de cabida para la compra de terrenos y elaboración de presupuestos detallados.",
        "Dirección y control: Gerenciamiento integral orientado a la optimización de ingenierías y constructibilidad para maximizar la rentabilidad.",
        "Acompañamiento final: Supervisión rigurosa de las obras y gestión de posventa.",
      ],
    },
    {
      index: "06",
      slug: "consultoria-comercial",
      title: "Consultoría Comercial",
      summary:
        "Ofrecemos un servicio integral de consultoría comercial diseñado para maximizar la rentabilidad y asegurar el éxito de cada proyecto inmobiliario. Acompañamos a nuestros clientes en todo el ciclo comercial, desde el análisis estratégico de mercado y la viabilidad financiera, hasta la ejecución de estrategias de marketing, la gestión de eventos sectoriales, el control de ventas y el servicio posventa.",
      teaser:
        "Ofrecemos un servicio integral de consultoría comercial diseñado para maximizar la rentabilidad y asegurar el éxito de cada proyecto inmobiliario.",
      photo: {
        src: unsplash("photo-1449157291145-7efd050a4d0e", 1200),
        alt: "Rascacielos vistos desde abajo",
      },
      layout: "panel",
      columns: 2,
      itemsLabel: "Nuestras soluciones especializadas incluyen:",
      items: [
        "Estudios de mercado: Evaluación situacional de cada proyecto según su fase de ejecución.",
        "Viabilidad y producto: Diagnóstico comercial y definición estratégica del producto o servicio final.",
        "Planificación financiera: Estructuración del Business Plan integral adaptado al sector inmobiliario.",
        "Estrategia de marketing: Planes globales o focalizados por proyecto.",
        "Optimización comercial: Auditoría de puntos críticos en ventas y posventa para elevar la conversión y satisfacción.",
        "Promoción sectorial: Gestión de ferias y eventos comerciales dentro del sector inmobiliario.",
        "Control de gestión: Monitoreo continuo de los Indicadores Clave de Rendimiento (*KPIs*) del negocio.",
      ],
    },
  ] satisfies ServiceGroup[],
};

export const clients = {
  heading: ["Empresas que", "confían en nosotros"],
  /** Follows the bold client count, e.g. "11 empresas e instituciones". */
  countLabel: "empresas e instituciones",
  lead: "de retail, salud, educación, hotelería y el sector público han confiado en nosotros para sus proyectos.",
  /** Fills the last tile of the logo wall. */
  cta: {
    title: "Su proyecto puede ser el siguiente",
    label: proposalLabel,
    href: "#contacto",
  },
  /** Logos live in `public/clients`; the name is used as alt text. */
  items: [
    { name: "Cencosud", logo: "/clients/Cencosud-2014.svg", width: 600, height: 328 },
    { name: "Auna", logo: "/clients/logotipo_AUNA-01.svg", width: 361, height: 81 },
    {
      name: "Ministerio del Ambiente del Perú",
      logo: "/clients/PCM-Ambiente.webp",
      width: 1000,
      height: 209,
    },
    {
      name: "Universidad San Ignacio de Loyola",
      logo: "/clients/Usil.jpg",
      width: 930,
      height: 927,
      scale: 0.9,
    },
    {
      name: "Universidad Nacional Agraria La Molina",
      logo: "/clients/UNALM-Texto-1024x296.png",
      width: 1024,
      height: 296,
    },
    {
      name: "Markham College",
      logo: "/clients/weblogo80sAsset-5@3x.png",
      width: 937,
      height: 185,
    },
    {
      name: "Plaza Norte",
      logo: "/clients/plaza-norte-seeklogo.png",
      width: 1179,
      height: 2000,
    },
    {
      name: "El Pardo DoubleTree by Hilton",
      logo: "/clients/El_pardo.jpg",
      width: 400,
      height: 400,
      scale: 0.9,
    },
    {
      name: "Clínica Renacer",
      logo: "/clients/clinica-renacer-transparente.png",
      width: 255,
      height: 146,
      scale: 1.45,
    },
    {
      name: "Parque del Recuerdo",
      logo: "/clients/parque-recuerdo-trim.png",
      width: 285,
      height: 150,
      scale: 1.3,
    },
    {
      name: "Gerpal",
      logo: "/clients/gerpal_sac_logo.jpeg",
      width: 200,
      height: 200,
      scale: 0.9,
    },
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
  cta: { label: proposalLabel, href: "/#contacto" } satisfies CallToAction,
  heading: ["Conversemos", "de su proyecto"],
  lead: "Cuéntenos qué necesita y un especialista revisará su requerimiento para proponerle el alcance, los plazos y el presupuesto.",
  /** What happens after sending, in order. */
  nextSteps: [
    "Un especialista revisa su requerimiento.",
    "Le respondemos en un plazo máximo de 48 horas hábiles.",
    "Le proponemos el alcance, los plazos y el presupuesto.",
  ],
  nextStepsTitle: "Qué pasa después",
  directTitle: "¿Prefiere escribirnos directamente?",
  form: {
    title: "Solicitud de propuesta",
    requiredNote: "Los campos marcados con * son obligatorios.",
    labels: {
      name: "Nombre y apellido *",
      company: "Empresa",
      email: "Correo electrónico *",
      phone: "Teléfono",
      service: "Servicio de interés",
      servicePlaceholder: "Seleccione una opción",
      message: "Cuéntenos sobre el proyecto *",
    },
    /** Options for the "servicio de interés" select: the six service lines. */
    services: [
      ...services.groups.map((group) => group.title.replace(/\n/g, " ")),
      "Otro",
    ],
    submit: "Enviar solicitud",
    submitting: "Enviando solicitud…",
    /**
     * Read twice: the browser shows them in its own validation bubble while
     * the visitor types, and the server action returns them under the field
     * when the form is posted anyway. Both have to say the same thing.
     */
    errors: {
      name: "Indíquenos su nombre.",
      email: "Indíquenos su correo.",
      emailInvalid: "Revise el correo: debe tener la forma nombre@empresa.com.",
      phoneInvalid: "Use solo números y los signos + ( ) -, con al menos 6 dígitos.",
      message: "Indíquenos su mensaje.",
      messageShort: "Cuéntenos un poco más sobre el proyecto (al menos 15 caracteres).",
      consent: "Necesitamos su autorización para tratar estos datos.",
      turnstile: `No pudimos verificar que no es un robot. Recargue la casilla e inténtelo de nuevo, o escríbanos a atencionalcliente@ppmasac.com o por WhatsApp al ${site.whatsapp.label}.`,
      summary: "Revise los campos marcados para poder enviar su solicitud.",
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
  lead: "Cómo trata PPMA SAC los datos personales que usted nos deja en este sitio web, para qué los usamos y cómo puede controlarlos en cualquier momento.",
  sections: [
    {
      index: "01",
      slug: "responsable",
      title: "Quién trata sus datos",
      body: [
        "El responsable del tratamiento es Professional Project Manager Administration S.A.C. (PPMA SAC), con RUC 20601984564, empresa domiciliada en el Perú. Puede escribirnos por cualquier asunto relacionado con sus datos personales a:",
      ],
      items: ["Correo: atencionalcliente@ppmasac.com", "Teléfono: +51 981 248 447"],
    },
    {
      index: "02",
      slug: "datos",
      title: "Qué datos recogemos",
      body: [
        "Solo los que usted escribe en el formulario de contacto. No pedimos ni tratamos datos sensibles, y tampoco compramos bases de datos de terceros.",
      ],
      items: [
        "Nombre y apellido.",
        "Empresa, si decide indicarla.",
        "Correo electrónico.",
        "Teléfono, si decide indicarlo.",
        "Servicio de interés y el contenido de su mensaje.",
      ],
    },
    {
      index: "03",
      slug: "finalidad",
      title: "Para qué los usamos",
      body: [
        "Usamos sus datos únicamente para atender su solicitud: entender el requerimiento, comunicarnos con usted, preparar una propuesta de alcance, plazos y presupuesto, y hacer el seguimiento de esa conversación.",
        "No los usamos para enviarle publicidad ni los cedemos con fines comerciales. Si en el futuro quisiéramos hacerlo, le pediríamos una autorización aparte.",
      ],
    },
    {
      index: "04",
      slug: "consentimiento",
      title: "Con qué autorización",
      body: [
        "La base del tratamiento es su consentimiento, que usted otorga al marcar la casilla del formulario antes de enviarlo. Es libre, previo, expreso e informado, como exige la Ley 29733 de Protección de Datos Personales y su reglamento.",
        "Puede retirarlo cuando quiera escribiéndonos al correo indicado, sin que ello afecte la validez del tratamiento realizado hasta ese momento.",
      ],
    },
    {
      index: "05",
      slug: "conservacion",
      title: "Cuánto tiempo los conservamos",
      body: [
        "Guardamos su solicitud mientras dure la conversación comercial y hasta dos años después del último contacto, plazo en el que podría retomarse el proyecto. Cumplido ese periodo los eliminamos, salvo que una norma nos obligue a conservarlos por más tiempo, como ocurre con la documentación contractual y tributaria.",
      ],
    },
    {
      index: "06",
      slug: "destinatarios",
      title: "Quién más los ve",
      body: [
        "Su solicitud llega al equipo comercial de PPMA SAC y a nadie más. Los proveedores que hacen posible el servicio —alojamiento del sitio, correo corporativo y la verificación antispam de Cloudflare Turnstile— actúan como encargados de tratamiento, solo procesan los datos por encargo nuestro y están sujetos a deberes de confidencialidad.",
        "Estos proveedores pueden almacenar la información en servidores ubicados fuera del Perú, lo que constituye un flujo transfronterizo de datos amparado en su consentimiento y sujeto a las garantías que exige la normativa.",
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
      title: "Sus derechos",
      body: [
        "En cualquier momento puede ejercer sus derechos de información, acceso, actualización, rectificación, inclusión, supresión, oposición y tratamiento objetivo de sus datos personales.",
        "Para hacerlo, escríbanos a atencionalcliente@ppmasac.com indicando su solicitud y adjuntando un documento que acredite su identidad. Responderemos dentro de los plazos que fija la ley. Si considera que no atendimos su pedido, puede reclamar ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.",
      ],
    },
    {
      index: "09",
      slug: "cookies",
      title: "Cookies",
      body: [
        "Este sitio no utiliza cookies de analítica, publicidad ni seguimiento de terceros: solo las estrictamente necesarias para que las páginas funcionen. Si más adelante incorporamos herramientas de medición, lo anunciaremos aquí y solicitaremos su consentimiento antes de activarlas.",
      ],
    },
    {
      index: "10",
      slug: "cambios",
      title: "Cambios en esta política",
      body: [
        "Podemos actualizar esta política si cambian nuestros servicios o la normativa aplicable. La versión vigente es siempre la publicada en esta página, así que le recomendamos revisarla cada cierto tiempo.",
      ],
    },
  ] satisfies LegalSection[],
};

export const footer = {
  /** Same full-colour mark as the header, set on a white plate by the footer CSS. */
  logo: {
    src: "/logos/ppmasac-transparent@2x.png",
    alt: "PPMA SAC",
    width: 1017,
    height: 210,
  },
  brandName: "Professional Project Manager Administration SAC",
  brandLine: "Ingeniería, Construcción y Gestión de Proyectos Inmobiliarios en el Perú.",
  company: {
    title: "Empresa",
    /** The header menu, in page order, plus the proposal form that closes it. */
    links: [...navLinks, { label: proposalLabel, href: "/#contacto" }] satisfies NavLink[],
  },
  /** The service links are derived from `services.groups`. */
  servicesTitle: "Servicios",
  contact: {
    title: "Contacto",
    email: "atencionalcliente@ppmasac.com",
    phone: { label: "+51 981 248 447", href: "tel:+51981248447" },
  },
  legal: `© ${new Date().getFullYear()} PPMA SAC. Todos los derechos reservados.`,
  /** The only legal document the site publishes, required by the form. */
  links: [{ label: "Política de privacidad", href: "/privacidad" }] satisfies NavLink[],
};
