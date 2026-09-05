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
    role: "Full-Stack Developer",
    tagline:
      "I build complete, production-ready applications — from data modeling and the API to the interface — with automated tests and continuous deployment, from the first commit to post-delivery support. Backend is where I go deepest.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 systems live",
    proofLine:
      "4+ full-stack systems in production for real clients · personal projects with 350+ automated tests · real integrations with Open Finance, Mercado Pago and Redis/BullMQ queues",
    ctaProjects: "View projects",
    ctaEmail: "Email",
  },
  about: {
    paragraphs: [
      "Full-stack developer with a strong backend foundation (Python/FastAPI, Java/Spring Boot) and React/TypeScript/Next.js product in production, currently studying Software Engineering. I build from the schema to the component: REST APIs with relational modeling, layered architecture, automated tests, and the interfaces that ship alongside them. On a team, I led the migration of an academic API to Spring Boot 3 with 3 other developers.",
      "Beyond my personal projects, I work as a freelance developer delivering custom systems for local businesses: I scope the problem, design and implement the solution, and keep supporting it after delivery. I have shipped inventory control, a digital menu with online payment, order management and an offline-capable point of sale.",
    ],
  },
  projects: {
    intro:
      "In production, in pilot, or in development — each one with automated tests and documented architecture decisions.",
    items: {
      lifeos: {
        purpose:
          "Multi-tenant full-stack personal-finance SaaS: connects to real bank accounts via Open Finance, reconciles transactions automatically and provides complete financial control.",
        highlights: [
          "Open Finance integration (Pluggy): reconstructs the open billing cycle from transactions when the bank has not published the official value yet.",
          "Bank reconciliation with a confidence score calibrated against 91 real payments; the approximate tolerance was dropped because it produced false positives.",
          "~255 automated tests (pytest) running against in-memory SQLite, no external database.",
          "React 19 frontend: installable PWA with native due-date push (VAPID) and a Recharts dashboard that drills down by category to the individual transaction.",
        ],
      },
      agentos: {
        purpose:
          "Multi-tenant engine for AI agents handling customer support over WhatsApp: one instance serves many companies, each with its own prompt, credentials and isolated data.",
        highlights: [
          "Multi-tenant from the start: tenant resolved by Meta's phone_number_id, session keyed by phone + empresa_id, with no history collision between companies.",
          "Durable queue with Redis + BullMQ: retry with backoff, and consolidation of the customer's fragmented messages in a Redis list before calling the LLM.",
          "Human handoff with automatic return when the conversation with the agent goes cold, via an async task scanning the sessions.",
          "Two engines for the same product: agentos-core (Python/FastAPI/MongoDB) and the production engine (Node/TypeScript).",
        ],
        status: "In-house Mandit engine, in pilot with clients.",
      },
      jalar: {
        purpose:
          "Multi-user academic assistant on top of the Canvas LMS API: consolidates in a single dashboard what is at risk across every course — assignments, attendance and grades.",
        highlights: [
          "Assignment radar ranked by risk (urgency × grade weight × effort) on live API data; the due date in the syllabus PDF is never trustworthy.",
          "Stateless auth built from scratch: JWT HS256, 256-bit opaque refresh token SHA-256 hashed in the database, per-IP rate limiting and RFC 7807 errors.",
          "Canvas HTTP client with Link-header pagination and backoff; each user connects their own instance with an encrypted token.",
          "Tests: JUnit 5 + Testcontainers (real Postgres) + WireMock (fake Canvas) on the backend, Vitest on the front.",
        ],
        status: "In development — Phase 1 (auth, Canvas connection and PWA screens) complete.",
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
      "Beyond my personal projects, I work as a freelance developer delivering custom systems for small businesses. Each one is a complete web app — frontend, backend and database — from requirement to deploy and support. Without naming clients: what matters here is the problem solved.",
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
          "Finances with no installments table: each payment is a record with its own status, and the amount receivable per order is derived (total minus payments), never a stored field — so there is nothing to fall out of sync.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Data", "Testing", "Infra", "Methodologies"],
    aiNote:
      "I use Claude Code in my development process: I review, test and take responsibility for what goes to production.",
  },
  contact: {
    heading: "Let's talk",
    subheading: "Open to remote full-stack or backend roles, junior or mid-level.",
    emailLabel: "Email",
  },
};
