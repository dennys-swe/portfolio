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
    role: "Desenvolvedor Full-Stack",
    tagline:
      "Construo aplicações completas prontas para produção, da modelagem de dados e API à interface, com testes automatizados e deploy contínuo, do primeiro commit ao suporte pós-entrega. Backend é onde eu vou mais fundo.",
    statusLabel: "$ status --production",
    statusValue: "→ 4 sistemas ativos",
    proofLine:
      "4+ sistemas full-stack em produção para clientes reais · projetos pessoais com +350 testes automatizados · integrações reais com Open Finance, Mercado Pago e filas Redis/BullMQ",
    ctaProjects: "Ver projetos",
    ctaEmail: "E-mail",
  },
  about: {
    paragraphs: [
      "Desenvolvedor full-stack com base forte em backend (Python/FastAPI, Java/Spring Boot) e produto React/TypeScript/Next.js em produção, cursando Engenharia de Software. Construo do schema ao componente: APIs REST com modelagem relacional, arquitetura em camadas, testes automatizados e as interfaces que entram em produção junto. Em equipe, liderei a migração de uma API acadêmica para Spring Boot 3 com outros 3 desenvolvedores.",
      "Além dos projetos pessoais, atuo como desenvolvedor autônomo entregando sistemas sob medida para negócios locais: levanto o problema, desenho e implemento a solução, e sigo dando suporte depois da entrega. Já coloquei em produção controle de estoque, cardápio digital com pagamento online, gestão de pedidos e PDV com operação offline.",
    ],
  },
  projects: {
    intro:
      "Em produção, em piloto ou em desenvolvimento, cada um com testes automatizados e decisões de arquitetura documentadas.",
    items: {
      lifeos: {
        purpose:
          "SaaS full-stack de finanças pessoais multi-tenant: conecta a bancos reais via Open Finance, concilia transações automaticamente e fornece um controle financeiro completo.",
        highlights: [
          "Integração com Open Finance (Pluggy): reconstrói o ciclo de fatura em aberto a partir das transações quando o banco ainda não publicou o valor oficial.",
          "Conciliação bancária com scoring de confiança calibrado sobre 91 pagamentos reais; a tolerância aproximada foi descartada por gerar falso positivo.",
          "~255 testes automatizados (pytest) rodando contra SQLite em memória, sem banco externo.",
          "Frontend React 19: PWA instalável com push nativo de vencimento (VAPID) e dashboard Recharts com drill-down por categoria até a transação.",
        ],
      },
      agentos: {
        purpose:
          "Motor multi-tenant de agentes de IA para atendimento via WhatsApp: uma instância serve várias empresas, cada uma com prompt, credenciais e dados isolados.",
        highlights: [
          "Multi-tenant desde o início: tenant resolvido pelo phone_number_id da Meta, sessão com chave phone + empresa_id, sem colisão de histórico entre empresas.",
          "Fila durável com Redis + BullMQ: retry com backoff, e consolidação das mensagens picadas do cliente por lista Redis antes de chamar o LLM.",
          "Transbordo humano com retorno automático quando a conversa com o atendente esfria, via task assíncrona varrendo as sessões.",
          "Dois motores do mesmo produto: agentos-core (Python/FastAPI/MongoDB) e o motor de produção (Node/TypeScript).",
        ],
        status: "Motor próprio da Mandit, em piloto com clientes.",
      },
      jalar: {
        purpose:
          "Assistente acadêmico multiusuário sobre a API do Canvas LMS: consolida num painel único o que está em risco em todas as matérias, entregas, faltas e notas.",
        highlights: [
          "Radar de entregas ordenado por risco (urgência × peso na nota × esforço) sobre dados ao vivo da API; a data do plano de ensino em PDF não é confiável.",
          "Auth stateless feita do zero: JWT HS256, refresh token opaco de 256 bits com hash SHA-256 no banco, rate limit por IP e erros em RFC 7807.",
          "Cliente HTTP do Canvas com paginação por header Link e backoff; cada usuário conecta sua própria instância com token criptografado.",
          "Testes: JUnit 5 + Testcontainers (Postgres real) + WireMock (Canvas fake) no backend, Vitest no front.",
        ],
        status: "Em desenvolvimento, Fase 1 (auth, conexão Canvas e telas do PWA) concluída.",
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
      "Além dos projetos pessoais, atuo como desenvolvedor autônomo entregando sistemas sob medida para pequenos negócios. Cada um é um app web completo, frontend, backend e banco, do requisito ao deploy e suporte. Sem citar nomes de clientes: o que importa aqui é o problema resolvido.",
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
          "Financeiro sem tabela de parcelas: cada pagamento é um registro com status próprio, e o valor a receber de cada pedido é derivado (total menos pagos), nunca um campo guardado, então não tem o que dessincronizar.",
      },
    ],
  },
  stack: {
    groupLabels: ["Backend", "Frontend", "Dados", "Testes", "Infra", "Metodologias"],
    aiNote:
      "Uso Claude Code no processo de desenvolvimento: reviso, testo e assumo a responsabilidade pelo que entra em produção.",
  },
  contact: {
    heading: "Vamos conversar",
    subheading: "Aberto a vagas remotas full-stack ou backend, júnior ou pleno.",
    emailLabel: "E-mail",
  },
};
