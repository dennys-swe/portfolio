export const profile = {
  name: "Dennys Alves",
  role: "Backend Developer",
  tagline:
    "Construo e mantenho sistemas em produção — sozinho, do zero ao deploy — para negócios reais e para os meus próprios projetos.",
  stackLine: "Python/FastAPI · Java/Spring Boot · TypeScript/React · PostgreSQL · MongoDB",
  proofLine:
    "4+ sistemas em produção para clientes reais · projetos pessoais com +350 testes automatizados no total · integração real com Open Finance e Mercado Pago",
  email: "dennysalvescontato@gmail.com",
  github: "https://github.com/dennys-swe",
  linkedin: "https://linkedin.com/in/dennysdev",
};

export const about = {
  paragraphs: [
    "Desenvolvedor backend (Python/FastAPI e Java/Spring Boot) com experiência full-stack em React/TypeScript, cursando Engenharia de Software. Construo APIs REST com modelagem de dados relacional, testes automatizados e arquitetura em camadas — sozinho, do requisito ao deploy.",
    "Além dos projetos pessoais, atendo negócios locais como desenvolvedor autônomo — levanto o problema, desenho e entrego o sistema, e dou suporte depois. Já entreguei sistemas em produção: controle de estoque, cardápio digital com pagamento online, gestão de pedidos e PDV com operação offline.",
  ],
};

export type PersonalProject = {
  slug: string;
  name: string;
  purpose: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  images?: string[];
  status?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    slug: "lifeos",
    name: "LifeOS",
    purpose: "SaaS multi-tenant de gestão financeira, com sincronização bancária real via Open Finance.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "SQLAlchemy"],
    highlights: [
      "Integração com Open Finance (Pluggy): reconstrói o ciclo de fatura em aberto a partir das transações quando o banco ainda não a publicou.",
      "Conciliação bancária com scoring de confiança calibrado sobre 91 casos reais.",
      "~255 testes automatizados (pytest) cobrindo autenticação, conciliação, faturas e recorrências.",
    ],
    github: "https://github.com/dennys-swe/LifeOS",
    live: "https://life-os-murex-psi.vercel.app",
    images: ["/projects/dashboard.png", "/projects/bills.png", "/projects/bank-sync.png"],
  },
  {
    slug: "agentos-core",
    name: "AgentOS",
    purpose: "Motor de orquestração de agentes de IA para atendimento via WhatsApp, multi-tenant.",
    stack: ["Python", "FastAPI", "MongoDB", "LangChain", "JWT"],
    highlights: [
      "Multi-tenant de verdade: uma instância só, cada empresa cliente com agente, credenciais e dados isolados por filtro de tenant.",
      "Transbordo humano com timeout de inatividade configurável, executado como tarefa assíncrona em background.",
      "Painel super-admin com auth JWT; webhook do WhatsApp (Meta API) coberto por testes pytest.",
    ],
    github: "https://github.com/dennys-swe/agentos-core",
    images: ["/projects/super-admin.png", "/projects/handoff-queue.png", "/projects/chat-simulator.png"],
  },
  {
    slug: "meet-assistant",
    name: "Meet Assistant",
    purpose: "Copilot de conversa ao vivo: captura áudio, transcreve localmente e responde com um LLM.",
    stack: ["Python", "Whisper", "PipeWire", "ONNX"],
    highlights: [
      "Reescrita da captura de corte por relógio fixo para segmentação por VAD (Silero), eliminando cortes no meio da fala.",
      "Medi e descartei transcrição em streaming do caminho crítico depois de comparar contra processamento em lote, com os números que sustentam a decisão.",
      "92 testes automatizados; validado ao vivo contra 10 minutos de áudio real (RTF 0,22).",
    ],
    github: "https://github.com/dennys-swe/meet-assistant",
  },
  {
    slug: "kio",
    name: "Kio",
    purpose: "Sistema de gestão para quiosque: venda offline-first, fechamento de caixa e previsão de preparo.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    highlights: [
      "Investiguei o Supabase Realtime a fundo (WAL, slot de replicação, canal confirmado pelo servidor) e mesmo assim não entregava eventos de forma confiável — troquei por polling de 5s como fonte real de convergência.",
      "Desenho de sincronização por log append-only entre aparelhos (cada toque é um evento, a conta é a soma), para evitar que 'o último a escrever vence' apague consumo em silêncio.",
    ],
    status: "Projeto pessoal em pré-lançamento — ainda não apresentado a clientes.",
  },
];

export type ClientCase = {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  challenge: string;
};

export const clientIntro =
  "Além dos projetos pessoais, atuo como desenvolvedor autônomo entregando sistemas sob medida para pequenos negócios — do requisito ao deploy e suporte. Sem citar nomes de clientes: o que importa aqui é o problema resolvido.";

export const clientCases: ClientCase[] = [
  {
    title: "PDV e controle de caixa para negócio de confeitaria",
    problem: "Duas lojas, controle de caixa e vendas ainda feito manualmente.",
    solution:
      "App offline-first: registra venda mesmo sem internet e sincroniza sozinho quando a rede volta.",
    stack: ["Next.js", "Supabase", "IndexedDB"],
    challenge:
      "Duas funcionárias abrindo caixa na mesma loja ao mesmo tempo, em aparelhos diferentes — resolvido com um índice único no banco, não com lógica de aplicação. O fechamento de caixa soma tudo que sincronizou de qualquer dispositivo, mas a tela de operação mostra só o que aquele aparelho específico registrou: decisão consciente de não cruzar dado local com servidor em tempo real, para manter a tela funcionando offline sem complexidade desproporcional ao caso de uso.",
  },
  {
    title: "Controle de estoque e vendas para revendedora",
    problem: "Todo o controle de vendas, pagamentos e estoque era feito em caderno.",
    solution: "Sistema web com cadastro de produtos, vendas, pagamentos e estoque em tempo real.",
    stack: ["Next.js", "Supabase"],
    challenge:
      "Tela de 'a receber' com filtro por atraso, para substituir o hábito de folhear o caderno atrás de quem ainda deve.",
  },
  {
    title: "Cardápio digital com checkout",
    problem: "Pedido por WhatsApp sem carrinho, sem controle de pagamento e sem baixa automática.",
    solution:
      "Cardápio online com carrinho e pagamento via Mercado Pago (PIX e cartão), entregue como produto white-label para 2 clientes diferentes.",
    stack: ["Next.js", "Supabase", "Mercado Pago"],
    challenge:
      "Baixa automática de pedido por webhook do Mercado Pago, com painel admin de produtos para o próprio dono editar cardápio sem depender de mim.",
  },
  {
    title: "Plataforma de gestão de negócio",
    problem: "Clientes, pedidos, financeiro e agenda controlados manualmente, sem visão centralizada.",
    solution: "Sistema web único centralizando os quatro fluxos, acessível de qualquer dispositivo.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    challenge:
      "Modelagem de dados para um negócio de prestação de serviço com pedidos recorrentes e pontuais no mesmo fluxo, sem duplicar lógica entre os dois casos.",
  },
];

export const stackGroups = [
  { label: "Backend", items: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js"] },
  { label: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
  { label: "Dados", items: ["PostgreSQL", "MongoDB", "Supabase", "SQLAlchemy"] },
  { label: "Infra", items: ["Docker", "Vercel", "Render", "Neon", "Git/GitHub", "CI/CD"] },
];
