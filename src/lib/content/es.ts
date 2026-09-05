import type { SiteContent } from "./types";

export const es: SiteContent = {
  nav: { about: "Sobre mí", projects: "Proyectos", clients: "Clientes", contact: "Contacto" },
  labels: {
    about: "Sobre mí",
    projects: "Proyectos personales",
    clients: "Trabajo para clientes",
    stack: "Stack",
  },
  a11y: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    whatsapp: "WhatsApp",
    projectCode: "Código de",
    projectLive: "Sitio de",
    projectScreenshot: "Captura de",
  },
  hero: {
    available: "Disponible para nuevas oportunidades",
    role: "Desarrollador Full-Stack",
    tagline:
      "Construyo aplicaciones completas listas para producción, desde el modelado de datos y la API hasta la interfaz, con pruebas automatizadas y despliegue continuo, desde el primer commit hasta el soporte posventa. El backend es donde voy más a fondo.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 sistemas activos",
    proofLine:
      "4+ sistemas full-stack en producción para clientes reales · proyectos personales con +350 pruebas automatizadas · integraciones reales con Open Finance, Mercado Pago y colas Redis/BullMQ",
    ctaProjects: "Ver proyectos",
    ctaEmail: "Correo",
  },
  about: {
    paragraphs: [
      "Desarrollador full-stack con una base sólida en backend (Python/FastAPI, Java/Spring Boot) y producto React/TypeScript/Next.js en producción, cursando Ingeniería de Software. Construyo del esquema al componente: APIs REST con modelado relacional, arquitectura en capas, pruebas automatizadas y las interfaces que entran en producción junto con ellas. En equipo, lideré la migración de una API académica a Spring Boot 3 junto a otros 3 desarrolladores.",
      "Además de los proyectos personales, trabajo como desarrollador independiente entregando sistemas a medida para negocios locales: relevo el problema, diseño e implemento la solución, y sigo dando soporte después de la entrega. Ya puse en producción control de inventario, menú digital con pago en línea, gestión de pedidos y punto de venta con operación offline.",
    ],
  },
  projects: {
    intro:
      "En producción, en piloto o en desarrollo, cada uno con pruebas automatizadas y decisiones de arquitectura documentadas.",
    items: {
      lifeos: {
        purpose:
          "SaaS full-stack de finanzas personales multi-tenant: conecta a bancos reales vía Open Finance, concilia transacciones automáticamente y ofrece un control financiero completo.",
        highlights: [
          "Integración con Open Finance (Pluggy): reconstruye el ciclo de la factura abierta a partir de las transacciones cuando el banco todavía no publicó el valor oficial.",
          "Conciliación bancaria con scoring de confianza calibrado sobre 91 pagos reales; la tolerancia aproximada se descartó por generar falsos positivos.",
          "~255 pruebas automatizadas (pytest) corriendo contra SQLite en memoria, sin base de datos externa.",
          "Frontend React 19: PWA instalable con push nativo de vencimiento (VAPID) y dashboard Recharts con drill-down por categoría hasta la transacción.",
        ],
      },
      agentos: {
        purpose:
          "Motor multi-tenant de agentes de IA para atención vía WhatsApp: una instancia sirve a varias empresas, cada una con su prompt, credenciales y datos aislados.",
        highlights: [
          "Multi-tenant desde el inicio: tenant resuelto por el phone_number_id de Meta, sesión con clave phone + empresa_id, sin colisión de historial entre empresas.",
          "Cola durable con Redis + BullMQ: reintento con backoff, y consolidación de los mensajes fragmentados del cliente en una lista Redis antes de llamar al LLM.",
          "Derivación a un humano con retorno automático cuando la conversación con el agente se enfría, mediante una tarea asíncrona que recorre las sesiones.",
          "Dos motores del mismo producto: agentos-core (Python/FastAPI/MongoDB) y el motor de producción (Node/TypeScript).",
        ],
        status: "Motor propio de Mandit, en piloto con clientes.",
      },
      jalar: {
        purpose:
          "Asistente académico multiusuario sobre la API de Canvas LMS: consolida en un único panel lo que está en riesgo en todas las materias, entregas, faltas y notas.",
        highlights: [
          "Radar de entregas ordenado por riesgo (urgencia × peso en la nota × esfuerzo) sobre datos en vivo de la API; la fecha del plan de estudios en PDF no es confiable.",
          "Auth stateless hecha desde cero: JWT HS256, refresh token opaco de 256 bits con hash SHA-256 en la base, rate limit por IP y errores en RFC 7807.",
          "Cliente HTTP de Canvas con paginación por header Link y backoff; cada usuario conecta su propia instancia con token cifrado.",
          "Pruebas: JUnit 5 + Testcontainers (Postgres real) + WireMock (Canvas simulado) en el backend, Vitest en el front.",
        ],
        status: "En desarrollo, Fase 1 (auth, conexión Canvas y pantallas del PWA) completada.",
      },
      meet: {
        purpose:
          "Copiloto de conversación en vivo: captura audio, transcribe localmente y responde con un LLM.",
        highlights: [
          "Reescritura de la captura de corte por reloj fijo a segmentación por VAD (Silero), eliminando cortes en medio del habla.",
          "Medí y descarté la transcripción en streaming de la ruta crítica tras compararla con el procesamiento por lotes, con los números que sostienen la decisión.",
          "92 pruebas automatizadas; validado en vivo contra 10 minutos de audio real (RTF 0,22).",
        ],
      },
      kio: {
        purpose:
          "Sistema de gestión para quiosco: venta offline-first, cierre de caja y previsión de preparación.",
        highlights: [
          "Investigué Supabase Realtime a fondo (WAL, slot de replicación, canal confirmado por el servidor) y aun así no entregaba eventos de forma confiable: lo cambié por polling de 5s como fuente real de convergencia.",
          "Diseño de sincronización por log append-only entre dispositivos (cada toque es un evento, la cuenta es la suma), para evitar que 'el último en escribir gana' borre consumo en silencio.",
        ],
        status: "Proyecto personal en prelanzamiento, aún no presentado a clientes.",
      },
    },
  },
  clients: {
    intro:
      "Además de los proyectos personales, trabajo como desarrollador independiente entregando sistemas a medida para pequeños negocios. Cada uno es una app web completa, frontend, backend y base de datos, desde el requisito hasta el despliegue y el soporte. Sin nombrar clientes: lo que importa aquí es el problema resuelto.",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    challengeLabel: "Desafío técnico",
    items: [
      {
        title: "Punto de venta y control de caja para un negocio de repostería",
        problem: "Dos locales, con el control de caja y de ventas todavía hecho a mano.",
        solution:
          "App offline-first: registra la venta aunque no haya internet y sincroniza automáticamente cuando la red vuelve.",
        challenge:
          "Dos empleadas abriendo caja en el mismo local al mismo tiempo, en dispositivos distintos: resuelto con un índice único en la base de datos, no con lógica de aplicación. El cierre de caja suma todo lo que sincronizó desde cualquier dispositivo, pero la pantalla de operación muestra solo lo que ese dispositivo registró: decisión consciente de no cruzar dato local con el servidor en tiempo real, para mantener la pantalla funcionando offline sin una complejidad desproporcionada al caso de uso.",
      },
      {
        title: "Control de inventario y ventas para una revendedora",
        problem: "Todo el control de ventas, pagos e inventario se hacía en un cuaderno.",
        solution:
          "Sistema web con registro de productos, ventas, pagos e inventario en tiempo real.",
        challenge:
          "Pantalla de 'por cobrar' con filtro por atraso, para reemplazar el hábito de hojear el cuaderno buscando quién todavía debe.",
      },
      {
        title: "Menú digital con checkout",
        problem: "Pedidos por WhatsApp sin carrito, sin control de pago y sin baja automática.",
        solution:
          "Menú en línea con carrito y pago vía Mercado Pago (PIX y tarjeta), entregado como producto white-label a 2 clientes distintos.",
        challenge:
          "Baja automática del pedido por webhook de Mercado Pago, con un panel de administración de productos para que el propio dueño edite el menú sin depender de mí.",
      },
      {
        title: "Plataforma de gestión de negocio",
        problem: "Clientes, pedidos, finanzas y agenda controlados a mano, sin una vista centralizada.",
        solution:
          "Un único sistema web que centraliza los cuatro flujos, accesible desde cualquier dispositivo.",
        challenge:
          "Finanzas sin tabla de cuotas: cada pago es un registro con su propio estado, y el monto por cobrar de cada pedido es derivado (total menos pagos), nunca un campo guardado, así que no hay nada que se desincronice.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Datos", "Pruebas", "Infra", "Metodologías"],
    aiNote:
      "Uso Claude Code en el proceso de desarrollo: reviso, pruebo y asumo la responsabilidad de lo que entra en producción.",
  },
  contact: {
    heading: "Conversemos",
    subheading: "Abierto a vacantes remotas full-stack o backend, junior o semi-senior.",
    emailLabel: "Correo",
  },
};
