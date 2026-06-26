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
      title: "Proyectos.",
      intro: "Casos recibidos, resumidos en alcance, canales y entregables.",
      selectorLabel: "Selecciona",
      mapLabel: "Mapa de alcance",
      noteLabel: "Nota",
      sourceLabel: "Documento base",
      caseLabel: "Caso",
      axis: ["Instagram", "Google Maps", "Web", "Fotos", "Reseñas", "Vídeo"],
      cases: [
        {
          eyebrow: "Social growth",
          title: "La Coleta | Gestión de redes sociales",
          source: "Gestión de Redes Sociales para La Coleta",
          stats: [
            { value: "4k", label: "objetivo desde 2k" },
            { value: "8", label: "posts feed al mes" },
            { value: "60", label: "stories al mes" },
            { value: "2", label: "vídeos al mes" },
          ],
          summary:
            "Plan para duplicar la comunidad de Instagram, pasando de 2.000 a 4.000 seguidores mediante contenido dinámico, interacción constante y uso activo de herramientas de la plataforma.",
          goal: "Duplicar la comunidad en Instagram en un plazo medio aproximado de 6-8 meses.",
          deliverablesTitle: "Contenido mensual",
          deliverables: [
            "8 publicaciones en feed: 2 publicaciones por semana.",
            "Mínimo 2 stories diarias, alrededor de 60 stories al mes.",
            "2 vídeos, Reels o IGTV al mes.",
            "Platos estrella, novedades, promociones especiales, eventos, menús del día, catering y sorteos.",
            "Detrás de cámaras: cocina, chefs, equipo de sala y preparación de pedidos.",
            "Contenido interactivo: preguntas, encuestas, preferencias culinarias y curiosidades.",
            "UGC: republicar fotos de clientes disfrutando en La Coleta y dar crédito.",
            "Recordatorios de reservas, últimos días de promociones, anuncios rápidos y llamadas a la acción.",
            "Recetas cortas, preparación de platos icónicos, entrevistas breves y montajes con música.",
            "Resúmenes de eventos o actividades especiales para promoción.",
          ],
          operationsTitle: "Google Maps y operación",
          operations: [
            "Optimización del perfil: dirección, teléfono, horarios y sitio web precisos y actualizados.",
            "Selección de categorías correctas para aparecer en búsquedas relevantes.",
            "Creación y mantenimiento del menú en Google Maps con fotos y descripciones.",
            "Publicación de fotos de alta calidad del interior, exterior y platos.",
            "Respuesta a reseñas positivas y negativas con foco en atención al cliente.",
            "Seguimiento de estadísticas: vistas, clics en web, solicitudes de indicaciones y ajustes de estrategia.",
            "Ejemplo de propuesta / Google Maps: https://g.co/kgs/bULQ9Yq",
          ],
          note:
            "Incluye una galería de fotos centralizada para que Community Manager y empleados aporten imágenes de marca; propuesta pensada para activarse durante julio y septiembre.",
          coverage: [
            "Instagram",
            "Google Maps",
            "Post",
            "Stories",
            "Vídeos",
            "Reseñas",
            "Optimización visual",
            "Contenido",
            "Creación del menú",
            "Optimización de fotos",
          ],
        },
        {
          eyebrow: "Community & local presence",
          title: "La Coleta | Propuesta community y presencia local",
          source: "Community Manager",
          stats: [
            { value: "9", label: "acciones de alcance" },
            { value: "4", label: "trabajos previos" },
            { value: "2", label: "proyectos en proceso" },
            { value: "4", label: "canales base" },
          ],
          summary:
            "Propuesta de optimización de Google Maps, web, RRSS, feed, plantillas corporativas e infografías para La Coleta.",
          goal: "Ordenar la presencia digital de La Coleta y generar crecimiento, engagement y coherencia visual.",
          deliverablesTitle: "Alcance propuesto",
          deliverables: [
            "Optimización de Google Maps: menú, fotos y nombres.",
            "Actualización diaria del menú en la web.",
            "Mantenimiento de la web.",
            "Optimización de RRSS.",
            "Creación de una plantilla corporativa para publicaciones diversas, con Cenáutica como referencia.",
            "Crecimiento de la red de seguidores.",
            "Creación de engagement con seguidores.",
            "Armonización del feed.",
            "Infografías para cambio de menú, flyers y otras piezas.",
          ],
          operationsTitle: "Trabajos anteriores incluidos",
          operations: [
            "Guía Peñín: web guiapenin.wine/portada e Instagram @guiapenin.",
            "Escuela de Cata Guía Peñín: web guiapenin.wine/formacion e Instagram @escuelacataguiapenin.",
            "Cenáutica: web cenautica.com, Instagram @cenautica, creación de infografías, diseño de merchandising y gestión como Marketing Manager.",
            "El Rincón de Su: web en Wix por petición del cliente y bajo presupuesto, Instagram @el_rincondesu, Google Maps y diseño de menú.",
          ],
          note:
            "En proceso: Ionela Mihaela - Nails Designer con Google Maps, RRSS e infografías; GHS Servicios Integrales con página web, Google Maps y Facebook. Contacto de envío indicado: seislacoletapizzerias@gmail.com.",
          coverage: ["Google Maps", "Web", "RRSS", "Feed", "Plantillas", "Infografías", "Flyers", "Merchandising"],
        },
        {
          eyebrow: "Marketing multinegocio",
          title: "Miguel | Propuesta marketing digital",
          source: "Propuesta Miguel",
          stats: [
            { value: "4", label: "negocios incluidos" },
            { value: "5", label: "canales digitales" },
            { value: "3", label: "objetivos comerciales" },
            { value: "4", label: "planes sectoriales" },
          ],
          summary:
            "PowerPoint de propuesta inicial de marketing digital para cuatro negocios: Restaurante El Llerja, Veterinaria La Dehesa, Magic Padel Club y Law & Business Abogados y Asesores.",
          goal: "Aumentar facturación, captar clientes y generar más reservas específicas con planes adaptados por sector.",
          deliverablesTitle: "Negocios y canales",
          deliverables: [
            "Restaurante El Llerja: Instagram, Facebook, sitio web, Google Maps y TripAdvisor.",
            "Veterinaria La Dehesa: Instagram, Facebook, sitio web y Google Maps.",
            "Magic Padel Club: Instagram, Facebook, sitio web y Google Maps.",
            "Law & Business Abogados y Asesores: LinkedIn, Facebook, Instagram, sitio web y Google Maps.",
            "Creación de contenido: vídeos, fotos y stories.",
            "Creación de infografías: menús, flyers y piezas informativas.",
            "Gestión de la web para afinar SEO.",
            "Gestión de reputación en Google Maps.",
          ],
          operationsTitle: "Planes de acción",
          operations: [
            "El Llerja: promocionar eventos como caza y setas, torneos de mus o tarde de Reyes; atraer público de 25-40 años y aumentar reservas de fin de semana.",
            "Veterinaria La Dehesa: fidelización con email marketing y tarjetas, promoción de servicios y mayor visibilidad de la clínica.",
            "Magic Padel Club: promoción de clases y eventos por horario, nivel y edad; torneos, open doors, reservas de mañana y clases.",
            "Law & Business: fidelización con email marketing, promoción de servicios y dar a conocer la firma.",
            "Necesidades comunes: acceso a canales digitales y galería fotográfica.",
            "Necesidades específicas: agenda de eventos con mes y medio de antelación para El Llerja y Magic Padel; información de clases para Magic Padel.",
            "Law & Business requiere más información de empresa y modelo de negocio para cerrar un plan completo.",
          ],
          note:
            "La presentación incluye introducción de María Gatell, objetivos, propuesta por negocio, precios y contacto; está planteada como propuesta inicial abierta a ajustes.",
          coverage: [
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Web",
            "Google Maps",
            "TripAdvisor",
            "SEO",
            "Reputación",
            "Email marketing",
            "Eventos",
          ],
        },
      ],
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
      title: "Projects.",
      intro: "Received cases, summarized by scope, channels and deliverables.",
      selectorLabel: "Select",
      mapLabel: "Scope map",
      noteLabel: "Note",
      sourceLabel: "Source document",
      caseLabel: "Case",
      axis: ["Instagram", "Google Maps", "Web", "Photos", "Reviews", "Video"],
      cases: [
        {
          eyebrow: "Social growth",
          title: "La Coleta | Social media management",
          source: "Gestión de Redes Sociales para La Coleta",
          stats: [
            { value: "4k", label: "target from 2k" },
            { value: "8", label: "feed posts/month" },
            { value: "60", label: "stories/month" },
            { value: "2", label: "videos/month" },
          ],
          summary:
            "Plan to double the Instagram community from 2,000 to 4,000 followers through dynamic content, constant interaction and active use of platform tools.",
          goal: "Double the Instagram community within an approximate 6-8 month window.",
          deliverablesTitle: "Monthly content",
          deliverables: [
            "8 feed posts: 2 posts per week.",
            "At least 2 daily stories, around 60 stories per month.",
            "2 videos, Reels or IGTV pieces per month.",
            "Signature dishes, new items, special promotions, events, daily menus, catering and giveaways.",
            "Behind the scenes: kitchen, chefs, floor team and order preparation.",
            "Interactive content: questions, polls, culinary preferences and curiosities.",
            "UGC: repost customer photos enjoying La Coleta and give credit.",
            "Booking reminders, last days of promotions, quick announcements and calls to action.",
            "Short recipes, preparation of iconic dishes, short interviews and music-led edits.",
            "Event or special activity recaps for promotion.",
          ],
          operationsTitle: "Google Maps and operations",
          operations: [
            "Profile optimization: accurate and updated address, phone, opening hours and website.",
            "Selection of the right categories to appear in relevant searches.",
            "Creation and maintenance of the Google Maps menu with photos and descriptions.",
            "Publishing high-quality photos of the interior, exterior and dishes.",
            "Response to positive and negative reviews with a customer-care focus.",
            "Performance tracking: views, website clicks, direction requests and strategy adjustments.",
            "Proposal / Google Maps example: https://g.co/kgs/bULQ9Yq",
          ],
          note:
            "Includes a centralized photo gallery so the Community Manager and employees can add brand images; proposed activation during July and September.",
          coverage: [
            "Instagram",
            "Google Maps",
            "Posts",
            "Stories",
            "Videos",
            "Reviews",
            "Visual optimization",
            "Content",
            "Menu creation",
            "Photo optimization",
          ],
        },
        {
          eyebrow: "Community & local presence",
          title: "La Coleta | Community and local presence proposal",
          source: "Community Manager",
          stats: [
            { value: "9", label: "scope actions" },
            { value: "4", label: "previous works" },
            { value: "2", label: "in-progress cases" },
            { value: "4", label: "core channels" },
          ],
          summary:
            "Proposal covering Google Maps, web, social media, feed consistency, corporate templates and infographics for La Coleta.",
          goal: "Organize La Coleta's digital presence and generate growth, engagement and visual consistency.",
          deliverablesTitle: "Proposed scope",
          deliverables: [
            "Google Maps optimization: menu, photos and names.",
            "Daily menu updates on the website.",
            "Website maintenance.",
            "Social media optimization.",
            "Creation of a corporate template for different post types, using Cenáutica as a reference.",
            "Follower growth.",
            "Engagement creation with followers.",
            "Feed harmonization.",
            "Infographics for menu changes, flyers and other pieces.",
          ],
          operationsTitle: "Previous work included",
          operations: [
            "Guía Peñín: guiapenin.wine/portada and Instagram @guiapenin.",
            "Escuela de Cata Guía Peñín: guiapenin.wine/formacion and Instagram @escuelacataguiapenin.",
            "Cenáutica: cenautica.com, Instagram @cenautica, infographics, merchandising design and Marketing Manager work.",
            "El Rincón de Su: Wix website requested by the client for a low budget, Instagram @el_rincondesu, Google Maps and menu design.",
          ],
          note:
            "In progress: Ionela Mihaela - Nails Designer with Google Maps, social media and infographics; GHS Servicios Integrales with website, Google Maps and Facebook. Delivery contact listed: seislacoletapizzerias@gmail.com.",
          coverage: ["Google Maps", "Web", "Social media", "Feed", "Templates", "Infographics", "Flyers", "Merchandising"],
        },
        {
          eyebrow: "Multi-business marketing",
          title: "Miguel | Digital marketing proposal",
          source: "Propuesta Miguel",
          stats: [
            { value: "4", label: "businesses included" },
            { value: "5", label: "digital channels" },
            { value: "3", label: "commercial goals" },
            { value: "4", label: "sector plans" },
          ],
          summary:
            "PowerPoint-style initial digital marketing proposal for four businesses: Restaurante El Llerja, Veterinaria La Dehesa, Magic Padel Club and Law & Business Abogados y Asesores.",
          goal: "Increase revenue, acquire customers and generate more specific bookings through sector-tailored plans.",
          deliverablesTitle: "Businesses and channels",
          deliverables: [
            "Restaurante El Llerja: Instagram, Facebook, website, Google Maps and TripAdvisor.",
            "Veterinaria La Dehesa: Instagram, Facebook, website and Google Maps.",
            "Magic Padel Club: Instagram, Facebook, website and Google Maps.",
            "Law & Business Abogados y Asesores: LinkedIn, Facebook, Instagram, website and Google Maps.",
            "Content creation: videos, photos and stories.",
            "Infographic creation: menus, flyers and informational pieces.",
            "Website management to improve SEO.",
            "Reputation management on Google Maps.",
          ],
          operationsTitle: "Action plans",
          operations: [
            "El Llerja: promote events such as hunting and mushroom menus, mus tournaments or Three Kings afternoon; attract a 25-40 audience and increase weekend reservations.",
            "Veterinaria La Dehesa: loyalty through email marketing and loyalty cards, service promotion and clinic awareness.",
            "Magic Padel Club: promote classes and events by schedule, level and age; tournaments, open doors, morning bookings and classes.",
            "Law & Business: loyalty through email marketing, service promotion and visibility for the firm.",
            "Common needs: access to digital channels and a photo gallery.",
            "Specific needs: event calendar with one and a half months of notice for El Llerja and Magic Padel; class information for Magic Padel.",
            "Law & Business needs more company and business-model information to close a complete plan.",
          ],
          note:
            "The deck includes Maria Gatell's introduction, goals, business-by-business proposal, prices and contact; it is framed as an initial proposal open to adjustments.",
          coverage: [
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Web",
            "Google Maps",
            "TripAdvisor",
            "SEO",
            "Reputation",
            "Email marketing",
            "Events",
          ],
        },
      ],
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
