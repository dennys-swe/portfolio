import type { SiteContent } from "./types";

export const en: SiteContent = {
  nav: { about: "About", projects: "Projects", clients: "Clients", contact: "Contact" },
  labels: {
    about: "About",
    projects: "Personal projects",
    clients: "Client work",
    stack: "Stack",
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    whatsapp: "WhatsApp",
    projectCode: "Code for",
    projectLive: "Live site for",
    projectScreenshot: "Screenshot of",
  },
  hero: {
    available: "Available for new opportunities",
    role: "Backend Developer",
    tagline:
      "I build production-ready APIs and backend systems: data modeling, automated tests and continuous deployment, from the first commit to post-delivery support.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 systems live",
    proofLine:
      "4+ systems in production for real clients · personal projects with 350+ automated tests in total · real integration with Open Finance and Mercado Pago",
    ctaProjects: "View projects",
    ctaEmail: "Email",
  },
  about: {
    paragraphs: [
      "Backend developer (Python/FastAPI and Java/Spring Boot) with full-stack experience in React/TypeScript, currently studying Software Engineering. I build REST APIs with relational data modeling, automated tests and layered architecture, from requirement to deploy. On a team, I led the migration of an academic API to Spring Boot 3 alongside 3 other developers.",
      "Beyond my personal projects, I work as a freelance developer delivering custom systems for local businesses: I scope the problem, design and implement the solution, and keep supporting it after delivery. I have shipped inventory control, a digital menu with online payment, order management and an offline-capable point of sale.",
    ],
  },
  projects: {
    intro:
      "In production or pre-launch, each one with automated tests and documented architecture decisions.",
    items: {
      lifeos: {
        purpose:
          "Multi-tenant financial-management SaaS, with real bank synchronization via Open Finance.",
        highlights: [
          "Open Finance integration (Pluggy): reconstructs the open billing cycle from transactions when the bank has not published it yet.",
          "Bank reconciliation with a confidence score calibrated against 91 real cases.",
          "~255 automated tests (pytest) covering authentication, reconciliation, invoices and recurring entries.",
        ],
      },
      agentos: {
        purpose:
          "Orchestration engine for AI agents handling customer support over WhatsApp, multi-tenant.",
        highlights: [
          "True multi-tenancy: a single instance, each client company with its own agent, credentials and data isolated by a tenant filter.",
          "Human handoff with a configurable inactivity timeout, run as an async background task.",
          "Super-admin panel with JWT auth; WhatsApp webhook (Meta API) covered by pytest tests.",
        ],
      },
      meet: {
        purpose:
          "Live-conversation copilot: captures audio, transcribes it locally and answers with an LLM.",
        highlights: [
          "Rewrote fixed-clock capture into VAD-based segmentation (Silero), eliminating cuts in the middle of speech.",
          "Measured and dropped streaming transcription from the critical path after comparing it against batch processing, with the numbers backing the decision.",
          "92 automated tests; validated live against 10 minutes of real audio (RTF 0.22).",
        ],
      },
      kio: {
        purpose:
          "Management system for a kiosk: offline-first sales, cash closing and prep forecasting.",
        highlights: [
          "Investigated Supabase Realtime in depth (WAL, replication slot, server-confirmed channel) and it still would not deliver events reliably: switched to 5s polling as the real source of convergence.",
          "Append-only log sync design across devices (each tap is an event, the bill is the sum), to keep 'last write wins' from silently erasing consumption.",
        ],
        status: "Personal project in pre-launch, not yet presented to clients.",
      },
    },
  },
  clients: {
    intro:
      "Beyond my personal projects, I work as a freelance developer delivering custom systems for small businesses, from requirement to deploy and support. Without naming clients: what matters here is the problem solved.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    challengeLabel: "Technical challenge",
    items: [
      {
        title: "Point of sale and cash control for a bakery business",
        problem: "Two stores, with cash and sales control still done by hand.",
        solution:
          "Offline-first app: records a sale even with no internet and syncs automatically once the network is back.",
        challenge:
          "Two employees opening the register in the same store at the same time, on different devices: solved with a unique index in the database, not with application logic. Cash closing sums everything that synced from any device, but the operation screen shows only what that specific device recorded: a deliberate decision not to cross local data with the server in real time, to keep the screen working offline without complexity disproportionate to the use case.",
      },
      {
        title: "Inventory and sales control for a reseller",
        problem: "All sales, payment and inventory control was done in a paper notebook.",
        solution:
          "Web system with product registration, sales, payments and inventory in real time.",
        challenge:
          "A 'receivables' screen with an overdue filter, to replace the habit of flipping through the notebook looking for who still owes.",
      },
      {
        title: "Digital menu with checkout",
        problem: "WhatsApp ordering with no cart, no payment tracking and no automatic fulfillment.",
        solution:
          "Online menu with a cart and payment via Mercado Pago (PIX and card), delivered as a white-label product to 2 different clients.",
        challenge:
          "Automatic order fulfillment via Mercado Pago webhook, with a product admin panel so the owner can edit the menu without depending on me.",
      },
      {
        title: "Business management platform",
        problem: "Clients, orders, finances and schedule managed by hand, with no centralized view.",
        solution:
          "A single web system centralizing all four flows, accessible from any device.",
        challenge:
          "Data modeling for a service business with recurring and one-off orders in the same flow, without duplicating logic between the two cases.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Data", "Infra", "Methodologies"],
    aiNote:
      "I use Claude Code in my development process: I review, test and take responsibility for what goes to production.",
  },
  contact: {
    heading: "Let's talk",
    subheading: "Open to remote backend developer roles, junior or mid-level.",
    emailLabel: "Email",
  },
};
