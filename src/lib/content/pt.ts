import type { SiteContent } from "./types";

export const pt: SiteContent = {
  nav: { about: "Sobre", projects: "Projetos", clients: "Clientes", contact: "Contato" },
  labels: {
    about: "Sobre",
    projects: "Projetos pessoais",
    clients: "Trabalho para clientes",
    stack: "Stack",
  },
  a11y: {
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    whatsapp: "WhatsApp",
    projectCode: "Código de",
    projectLive: "Site de",
    projectScreenshot: "Screenshot de",
  },
  hero: {
    available: "Disponível para novas oportunidades",
    role: "Desenvolvedor Backend",
    tagline:
      "Construo APIs e sistemas backend prontos para produção: modelagem de dados, testes automatizados e deploy contínuo, do primeiro commit ao suporte pós-entrega.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 sistemas ativos",
    proofLine:
      "4+ sistemas em produção para clientes reais · projetos pessoais com +350 testes automatizados no total · integração real com Open Finance e Mercado Pago",
    ctaProjects: "Ver projetos",
    ctaEmail: "E-mail",
  },
  about: {
    paragraphs: [
      "Desenvolvedor backend (Python/FastAPI e Java/Spring Boot) com experiência full-stack em React/TypeScript, cursando Engenharia de Software. Construo APIs REST com modelagem de dados relacional, testes automatizados e arquitetura em camadas, do requisito ao deploy. Em equipe, liderei a migração de uma API acadêmica para Spring Boot 3 com outros 3 desenvolvedores.",
      "Além dos projetos pessoais, atuo como desenvolvedor autônomo entregando sistemas sob medida para negócios locais: levanto o problema, desenho e implemento a solução, e sigo dando suporte depois da entrega. Já coloquei em produção controle de estoque, cardápio digital com pagamento online, gestão de pedidos e PDV com operação offline.",
    ],
  },
  projects: {
    intro:
      "Em produção ou em pré-lançamento, cada um com testes automatizados e decisões de arquitetura documentadas.",
    items: {
      lifeos: {
        purpose:
          "SaaS multi-tenant de gestão financeira, com sincronização bancária real via Open Finance.",
        highlights: [
          "Integração com Open Finance (Pluggy): reconstrói o ciclo de fatura em aberto a partir das transações quando o banco ainda não a publicou.",
          "Conciliação bancária com scoring de confiança calibrado sobre 91 casos reais.",
          "~255 testes automatizados (pytest) cobrindo autenticação, conciliação, faturas e recorrências.",
        ],
      },
      agentos: {
        purpose:
          "Motor de orquestração de agentes de IA para atendimento via WhatsApp, multi-tenant.",
        highlights: [
          "Multi-tenant de verdade: uma instância só, cada empresa cliente com agente, credenciais e dados isolados por filtro de tenant.",
          "Transbordo humano com timeout de inatividade configurável, executado como tarefa assíncrona em background.",
          "Painel super-admin com auth JWT; webhook do WhatsApp (Meta API) coberto por testes pytest.",
        ],
      },
      meet: {
        purpose:
          "Copilot de conversa ao vivo: captura áudio, transcreve localmente e responde com um LLM.",
        highlights: [
          "Reescrita da captura de corte por relógio fixo para segmentação por VAD (Silero), eliminando cortes no meio da fala.",
          "Medi e descartei transcrição em streaming do caminho crítico depois de comparar contra processamento em lote, com os números que sustentam a decisão.",
          "92 testes automatizados; validado ao vivo contra 10 minutos de áudio real (RTF 0,22).",
        ],
      },
      kio: {
        purpose:
          "Sistema de gestão para quiosque: venda offline-first, fechamento de caixa e previsão de preparo.",
        highlights: [
          "Investiguei o Supabase Realtime a fundo (WAL, slot de replicação, canal confirmado pelo servidor) e mesmo assim não entregava eventos de forma confiável: troquei por polling de 5s como fonte real de convergência.",
          "Desenho de sincronização por log append-only entre aparelhos (cada toque é um evento, a conta é a soma), para evitar que 'o último a escrever vence' apague consumo em silêncio.",
        ],
        status: "Projeto pessoal em pré-lançamento, ainda não apresentado a clientes.",
      },
    },
  },
  clients: {
    intro:
      "Além dos projetos pessoais, atuo como desenvolvedor autônomo entregando sistemas sob medida para pequenos negócios, do requisito ao deploy e suporte. Sem citar nomes de clientes: o que importa aqui é o problema resolvido.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    challengeLabel: "Desafio técnico",
    items: [
      {
        title: "PDV e controle de caixa para negócio de confeitaria",
        problem: "Duas lojas, controle de caixa e vendas ainda feito manualmente.",
        solution:
          "App offline-first: registra venda mesmo sem internet e sincroniza automaticamente quando a rede volta.",
        challenge:
          "Duas funcionárias abrindo caixa na mesma loja ao mesmo tempo, em aparelhos diferentes: resolvido com um índice único no banco, não com lógica de aplicação. O fechamento de caixa soma tudo que sincronizou de qualquer dispositivo, mas a tela de operação mostra só o que aquele aparelho específico registrou: decisão consciente de não cruzar dado local com servidor em tempo real, para manter a tela funcionando offline sem complexidade desproporcional ao caso de uso.",
      },
      {
        title: "Controle de estoque e vendas para revendedora",
        problem: "Todo o controle de vendas, pagamentos e estoque era feito em caderno.",
        solution:
          "Sistema web com cadastro de produtos, vendas, pagamentos e estoque em tempo real.",
        challenge:
          "Tela de 'a receber' com filtro por atraso, para substituir o hábito de folhear o caderno atrás de quem ainda deve.",
      },
      {
        title: "Cardápio digital com checkout",
        problem: "Pedido por WhatsApp sem carrinho, sem controle de pagamento e sem baixa automática.",
        solution:
          "Cardápio online com carrinho e pagamento via Mercado Pago (PIX e cartão), entregue como produto white-label para 2 clientes diferentes.",
        challenge:
          "Baixa automática de pedido por webhook do Mercado Pago, com painel admin de produtos para o próprio dono editar cardápio sem depender de mim.",
      },
      {
        title: "Plataforma de gestão de negócio",
        problem: "Clientes, pedidos, financeiro e agenda controlados manualmente, sem visão centralizada.",
        solution:
          "Sistema web único centralizando os quatro fluxos, acessível de qualquer dispositivo.",
        challenge:
          "Modelagem de dados para um negócio de prestação de serviço com pedidos recorrentes e pontuais no mesmo fluxo, sem duplicar lógica entre os dois casos.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Dados", "Infra", "Metodologias"],
    aiNote:
      "Uso Claude Code no processo de desenvolvimento: reviso, testo e assumo a responsabilidade pelo que entra em produção.",
  },
  contact: {
    heading: "Vamos conversar",
    subheading: "Aberto a vagas remotas de desenvolvedor backend, júnior ou pleno.",
    emailLabel: "E-mail",
  },
};
