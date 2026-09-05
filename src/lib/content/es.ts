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
    role: "Desarrollador Backend",
    tagline:
      "Construyo APIs y sistemas backend listos para producción: modelado de datos, pruebas automatizadas y despliegue continuo, desde el primer commit hasta el soporte posventa.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 sistemas activos",
    proofLine:
      "4+ sistemas en producción para clientes reales · proyectos personales con +350 pruebas automatizadas en total · integración real con Open Finance y Mercado Pago",
    ctaProjects: "Ver proyectos",
    ctaEmail: "Correo",
  },
  about: {
    paragraphs: [
      "Desarrollador backend (Python/FastAPI y Java/Spring Boot) con experiencia full-stack en React/TypeScript, cursando Ingeniería de Software. Construyo APIs REST con modelado de datos relacional, pruebas automatizadas y arquitectura en capas, desde el requisito hasta el despliegue. En equipo, lideré la migración de una API académica a Spring Boot 3 junto a otros 3 desarrolladores.",
      "Además de los proyectos personales, trabajo como desarrollador independiente entregando sistemas a medida para negocios locales: relevo el problema, diseño e implemento la solución, y sigo dando soporte después de la entrega. Ya puse en producción control de inventario, menú digital con pago en línea, gestión de pedidos y punto de venta con operación offline.",
    ],
  },
  projects: {
    intro:
      "En producción o en prelanzamiento, cada uno con pruebas automatizadas y decisiones de arquitectura documentadas.",
    items: {
      lifeos: {
        purpose:
          "SaaS multi-tenant de gestión financiera, con sincronización bancaria real vía Open Finance.",
        highlights: [
          "Integración con Open Finance (Pluggy): reconstruye el ciclo de la factura abierta a partir de las transacciones cuando el banco todavía no la publicó.",
          "Conciliación bancaria con scoring de confianza calibrado sobre 91 casos reales.",
          "~255 pruebas automatizadas (pytest) que cubren autenticación, conciliación, facturas y recurrencias.",
        ],
      },
      agentos: {
        purpose:
          "Motor de orquestación de agentes de IA para atención vía WhatsApp, multi-tenant.",
        highlights: [
          "Multi-tenant de verdad: una sola instancia, cada empresa cliente con su agente, credenciales y datos aislados por filtro de tenant.",
          "Derivación a un humano con timeout de inactividad configurable, ejecutada como tarea asíncrona en segundo plano.",
          "Panel super-admin con autenticación JWT; webhook de WhatsApp (Meta API) cubierto por pruebas pytest.",
        ],
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
      "Además de los proyectos personales, trabajo como desarrollador independiente entregando sistemas a medida para pequeños negocios, desde el requisito hasta el despliegue y el soporte. Sin nombrar clientes: lo que importa aquí es el problema resuelto.",
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
          "Modelado de datos para un negocio de prestación de servicios con pedidos recurrentes y puntuales en el mismo flujo, sin duplicar lógica entre ambos casos.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Datos", "Infra", "Metodologías"],
    aiNote:
      "Uso Claude Code en el proceso de desarrollo: reviso, pruebo y asumo la responsabilidad de lo que entra en producción.",
  },
  contact: {
    heading: "Conversemos",
    subheading: "Abierto a vacantes remotas de desarrollador backend, junior o semi-senior.",
    emailLabel: "Correo",
  },
};
