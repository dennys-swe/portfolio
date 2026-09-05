// Slugs válidos em cdn.simpleicons.org — só entram aqui os que eu confirmei que existem.
export const techIconSlug: Record<string, string> = {
  Python: "python",
  FastAPI: "fastapi",
  Java: "openjdk",
  "Spring Boot": "spring",
  "Node.js": "nodedotjs",
  React: "react",
  TypeScript: "typescript",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  MySQL: "mysql",
  Supabase: "supabase",
  Docker: "docker",
  Vercel: "vercel",
  Render: "render",
  Neon: "neon",
  "Git/GitHub": "git",
  "Mercado Pago": "mercadopago",
  Prisma: "prisma",
  SQLAlchemy: "sqlalchemy",
  ONNX: "onnx",
  LangChain: "langchain",
  JWT: "jsonwebtokens",
  Redis: "redis",
  Vite: "vite",
  pytest: "pytest",
  "JUnit 5": "junit5",
  Vitest: "vitest",
};

export function iconUrl(tech: string) {
  const slug = techIconSlug[tech];
  // Ícones monocromáticos em branco — consistentes com o texto ao redor,
  // sem misturar as cores de marca de cada tecnologia com a paleta do site.
  return slug ? `https://cdn.simpleicons.org/${slug}/ffffff` : null;
}
