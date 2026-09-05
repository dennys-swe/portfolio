import type { ProjectKey } from "./types";

/** Non-translatable data: links, asset paths, tech names, ordering. */

export const profile = {
  name: "Dennys Alves",
  email: "dennysalvescontato@gmail.com",
  github: "https://github.com/dennys-swe",
  linkedin: "https://linkedin.com/in/dennysdev",
  stackLine: "Python/FastAPI · Java/Spring Boot · TypeScript/React · PostgreSQL · MongoDB",
};

export const projectOrder: ProjectKey[] = ["lifeos", "agentos", "jalar", "meet", "kio"];

export const projectMeta: Record<
  ProjectKey,
  { slug: string; name: string; stack: string[]; github?: string; live?: string; images?: string[] }
> = {
  lifeos: {
    slug: "lifeos",
    name: "LifeOS",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/dennys-swe/LifeOS",
    live: "https://life-os-murex-psi.vercel.app",
    images: ["/projects/dashboard.png", "/projects/bills.png", "/projects/bank-sync.png"],
  },
  agentos: {
    slug: "agentos-core",
    name: "AgentOS",
    stack: ["Python", "FastAPI", "MongoDB", "TypeScript", "Redis", "BullMQ", "LangChain"],
    github: "https://github.com/dennys-swe/agentos-core",
    images: ["/projects/super-admin.png", "/projects/handoff-queue.png", "/projects/chat-simulator.png"],
  },
  jalar: {
    slug: "jalar",
    name: "jalar",
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker"],
  },
  meet: {
    slug: "meet-assistant",
    name: "Meet Assistant",
    stack: ["Python", "Whisper", "PipeWire", "ONNX"],
    github: "https://github.com/dennys-swe/meet-assistant",
  },
  kio: {
    slug: "kio",
    name: "Kio",
    stack: ["Next.js", "Supabase", "TypeScript"],
  },
};

export const clientCaseStacks: string[][] = [
  ["Next.js", "Supabase", "IndexedDB"],
  ["Next.js", "Supabase"],
  ["Next.js", "Supabase", "Mercado Pago"],
  ["Next.js", "Prisma", "PostgreSQL"],
];

export const stackGroupItems: string[][] = [
  ["Python", "FastAPI", "Java", "Spring Boot", "Node.js"],
  ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  ["PostgreSQL", "MongoDB", "Redis", "Supabase", "SQLAlchemy"],
  ["pytest", "JUnit 5", "Testcontainers", "WireMock", "Vitest"],
  ["Docker", "Vercel", "Render", "Neon", "Git/GitHub", "CI/CD"],
  ["Scrum", "Kanban", "Git Flow", "Code Review"],
];
