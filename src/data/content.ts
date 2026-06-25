export type Lang = "es" | "en";
export type RouteKey = "home" | "experience" | "projects" | "about" | "contact";

export const routes: Array<{ key: RouteKey; path: string }> = [
  { key: "home", path: "/" },
  { key: "experience", path: "/experiencia" },
  { key: "projects", path: "/proyectos" },
  { key: "about", path: "/sobre-mi" },
  { key: "contact", path: "/contacto" },
];

export const routePaths = routes.reduce(
  (acc, route) => ({ ...acc, [route.key]: route.path }),
  {} as Record<RouteKey, string>,
);

const sharedProfile = {
  name: "María Gatell",
  email: "mariagatellalv@gmail.com",
  phones: ["+353 (0)83 332 9809", "+34 679557429"],
  location: "Dublin / Iberia",
};

export const content = {
  es: {
    metaTitle: "María Gatell | ServiceNow Commerce",
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Hablemos",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    profile: {
      ...sharedProfile,
      role: "Senior Mid-Market Account Executive | Iberia",
      badge: "ServiceNow commerce",
      headline: "Pipeline, cuentas y conversaciones complejas convertidas en crecimiento medible.",
      intro:
        "Ocho años de experiencia combinando ventas consultivas, account management, marketing y data-driven insights en entornos SaaS multiculturales.",
      primaryAction: "Ver experiencia",
      secondaryAction: "Contactar",
    },
    home: {
      portraitAlt: "Placeholder visual para la futura foto de María Gatell",
      proof: [
        { value: "8", label: "años en ventas y marketing" },
        { value: "Iberia", label: "mercado SMB y Commercial" },
        { value: "3", label: "idiomas de trabajo" },
      ],
      strips: ["Value Selling", "Forecasting", "Stakeholder mapping", "Revenue growth"],
      lead:
        "María conecta equipos, necesidades y soluciones ServiceNow con un lenguaje comercial claro, ritmo de pipeline y foco en valor.",
      pageLinks: [
        { route: "experience" as RouteKey, label: "Trayectoria", copy: "ServiceNow, Google, Accenture y marketing." },
        { route: "about" as RouteKey, label: "Perfil", copy: "Cómo piensa, vende y comunica." },
        { route: "projects" as RouteKey, label: "Proyectos", copy: "Espacio reservado para casos reales." },
      ],
    },
    flow: {
      nodes: ["Lead", "Valor", "Demo", "Cierre", "Adopción"],
      centerTop: "Now",
      center: "Flow",
      eyebrow: "Pipeline",
      line: "claridad, ritmo y valor",
      aria: "Visual de flujo comercial",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "SaaS, Iberia y crecimiento medible.",
      intro:
        "Una trayectoria construida entre tecnología, cuentas estratégicas y ejecución comercial. El CV apunta a una profesional cómoda llevando oportunidades desde la prospección hasta la expansión.",
      highlights: [
        "Ciclo de venta end-to-end",
        "Account mapping y territorio",
        "Forecasting y negociación",
        "Relación con partners y equipos técnicos",
      ],
      metrics: [
        { value: "135.71%", label: "new business en Google" },
        { value: "128.10%", label: "revenue en Google" },
        { value: "~529%", label: "pipeline como Sr. BDR" },
      ],
      timeline: [
        {
          period: "Sep 2025 - Actual",
          company: "ServiceNow",
          role: "Senior Mid-Market Account Executive | Iberia",
          copy:
            "Gestión de cuentas SMB y Commercial, Value Selling, renovaciones, expansión, forecast y coordinación con Solution Consultants, Customer Service y partners.",
        },
        {
          period: "Abr 2024 - Ago 2025",
          company: "Google",
          role: "Senior Account Manager | Southern Europe",
          copy:
            "Adquisición de nuevo negocio, expansión de mercado, revenue generation y acuerdos de alto valor con stakeholders C-level e IT decision-makers.",
        },
        {
          period: "May 2023 - Feb 2024",
          company: "Google",
          role: "Sr. Business Development Representative | EMEA",
          copy:
            "Top performer 2023. Outreach, investigación de mercado, demostraciones de producto y negociación de oportunidades complejas.",
        },
        {
          period: "Jul 2022 - May 2023",
          company: "Google",
          role: "Business Development Representative | Southern Europe",
          copy:
            "Top performer 2022. Prospección, cualificación y estrategias de territorio para cuentas Corporate y Enterprise junto a Account Executives.",
        },
        {
          period: "2018 - 2022",
          company: "Accenture, Cenaútica y Guía Peñín",
          role: "Operaciones digitales, marketing y ventas",
          copy:
            "Base previa en operaciones, marketing, comunicación, campañas y gestión comercial antes del salto a roles SaaS en Google y ServiceNow.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Una sala preparada para casos reales.",
      intro:
        "La clienta todavía no ha compartido proyectos, así que esta página queda intencionadamente vacía: visual, premium y lista para recibir contenido sin parecer inacabada.",
      empty: "Pendiente de contenido",
      line: "Casos ServiceNow, ventas SaaS y growth stories se podrán añadir aquí.",
      slots: ["Caso 01", "Caso 02", "Caso 03"],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Mentalidad de plataforma.",
      intro:
        "María combina account management, insights de datos y narrativa comercial para acercar soluciones SaaS a perfiles de negocio y equipos técnicos.",
      operatingSystem: [
        { label: "Venta", value: "Value Selling, discovery, business case y negociación." },
        { label: "Cuentas", value: "SMB, Commercial, Corporate y Enterprise en mercados Southern Europe e Iberia." },
        { label: "Marketing", value: "Campañas, analítica, comunicación y performance comercial." },
        { label: "Idiomas", value: "Español nativo, inglés avanzado e italiano avanzado." },
      ],
      educationTitle: "Formación",
      education: [
        "Master in Economics and Business | Mercatorum University",
        "Honours Degree in Marketing | UNIR",
        "Honours Degree in Tourism | ESERP Business & Law School",
      ],
      certTitle: "Certificaciones",
      certifications: [
        "Google Certified Professional ChromeOS Administrator",
        "Microsoft Azure compute and networking services",
        "Email Marketing certificate",
        "Digital Marketing certificate",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Contáctame",
      intro:
        "Contacto directo para oportunidades comerciales, colaboraciones SaaS o conversaciones relacionadas con ServiceNow e Iberia.",
      emailLabel: "Email",
      phoneLabel: "Teléfonos",
      locationLabel: "Base",
      action: "Enviar email",
      availability: "Disponible para conversaciones en español, inglés e italiano.",
    },
    footer: {
      line: "Portfolio profesional para ServiceNow commerce.",
      contact: "Contacto",
    },
  },
  en: {
    metaTitle: "María Gatell | ServiceNow Commerce",
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      cta: "Let’s talk",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    profile: {
      ...sharedProfile,
      role: "Senior Mid-Market Account Executive | Iberia",
      badge: "ServiceNow commerce",
      headline: "Pipeline, accounts and complex conversations turned into measurable growth.",
      intro:
        "Eight years of experience across consultative sales, account management, marketing and data-driven insights in multicultural SaaS environments.",
      primaryAction: "View experience",
      secondaryAction: "Contact",
    },
    home: {
      portraitAlt: "Placeholder for Maria Gatell's future portrait",
      proof: [
        { value: "8", label: "years in sales and marketing" },
        { value: "Iberia", label: "SMB and Commercial market" },
        { value: "3", label: "working languages" },
      ],
      strips: ["Value Selling", "Forecasting", "Stakeholder mapping", "Revenue growth"],
      lead:
        "María connects teams, needs and ServiceNow solutions with clear commercial language, pipeline rhythm and a value-first mindset.",
      pageLinks: [
        { route: "experience" as RouteKey, label: "Track record", copy: "ServiceNow, Google, Accenture and marketing." },
        { route: "about" as RouteKey, label: "Profile", copy: "How she thinks, sells and communicates." },
        { route: "projects" as RouteKey, label: "Projects", copy: "Reserved space for real cases." },
      ],
    },
    flow: {
      nodes: ["Lead", "Value", "Demo", "Close", "Adoption"],
      centerTop: "Now",
      center: "Flow",
      eyebrow: "Pipeline",
      line: "clarity, rhythm and value",
      aria: "Commercial flow visual",
    },
    experience: {
      eyebrow: "Experience",
      title: "SaaS, Iberia and measurable growth.",
      intro:
        "A career built across technology, strategic accounts and commercial execution. Her CV shows a professional who can carry opportunities from prospecting to expansion.",
      highlights: [
        "End-to-end sales cycle",
        "Account mapping and territory planning",
        "Forecasting and negotiation",
        "Partner and technical team alignment",
      ],
      metrics: [
        { value: "135.71%", label: "new business at Google" },
        { value: "128.10%", label: "revenue at Google" },
        { value: "~529%", label: "pipeline as Sr. BDR" },
      ],
      timeline: [
        {
          period: "Sep 2025 - Present",
          company: "ServiceNow",
          role: "Senior Mid-Market Account Executive | Iberia",
          copy:
            "SMB and Commercial account management, Value Selling, renewals, expansion, forecasting and coordination with Solution Consultants, Customer Service and partners.",
        },
        {
          period: "Apr 2024 - Aug 2025",
          company: "Google",
          role: "Senior Account Manager | Southern Europe",
          copy:
            "New business acquisition, market expansion, revenue generation and high-value agreements with C-level stakeholders and IT decision-makers.",
        },
        {
          period: "May 2023 - Feb 2024",
          company: "Google",
          role: "Sr. Business Development Representative | EMEA",
          copy:
            "Top performer 2023. Outreach, market research, product demonstrations and negotiation across complex opportunities.",
        },
        {
          period: "Jul 2022 - May 2023",
          company: "Google",
          role: "Business Development Representative | Southern Europe",
          copy:
            "Top performer 2022. Prospecting, qualification and territory strategies for Corporate and Enterprise accounts with Account Executives.",
        },
        {
          period: "2018 - 2022",
          company: "Accenture, Cenaútica and Guía Peñín",
          role: "Digital operations, marketing and sales",
          copy:
            "Earlier foundation in operations, marketing, communications, campaigns and commercial management before moving into SaaS roles at Google and ServiceNow.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "A room prepared for real cases.",
      intro:
        "The client has not shared projects yet, so this page is intentionally empty: visual, premium and ready for future content without feeling unfinished.",
      empty: "Content pending",
      line: "ServiceNow cases, SaaS sales work and growth stories can be added here.",
      slots: ["Case 01", "Case 02", "Case 03"],
    },
    about: {
      eyebrow: "About",
      title: "Platform mindset.",
      intro:
        "María blends account management, data-driven insights and commercial storytelling to bring SaaS solutions closer to business profiles and technical teams.",
      operatingSystem: [
        { label: "Sales", value: "Value Selling, discovery, business case and negotiation." },
        { label: "Accounts", value: "SMB, Commercial, Corporate and Enterprise across Southern Europe and Iberia." },
        { label: "Marketing", value: "Campaigns, analytics, communication and commercial performance." },
        { label: "Languages", value: "Native Spanish, advanced English and advanced Italian." },
      ],
      educationTitle: "Education",
      education: [
        "Master in Economics and Business | Mercatorum University",
        "Honours Degree in Marketing | UNIR",
        "Honours Degree in Tourism | ESERP Business & Law School",
      ],
      certTitle: "Certifications",
      certifications: [
        "Google Certified Professional ChromeOS Administrator",
        "Microsoft Azure compute and networking services",
        "Email Marketing certificate",
        "Digital Marketing certificate",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact me",
      intro:
        "Direct contact for commercial opportunities, SaaS collaborations or conversations related to ServiceNow and Iberia.",
      emailLabel: "Email",
      phoneLabel: "Phones",
      locationLabel: "Base",
      action: "Send email",
      availability: "Available for conversations in Spanish, English and Italian.",
    },
    footer: {
      line: "Professional portfolio for ServiceNow commerce.",
      contact: "Contact",
    },
  },
} as const;

export type SiteCopy = (typeof content)[Lang];
