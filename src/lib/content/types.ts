export type ProjectKey = "lifeos" | "agentos" | "jalar" | "meet" | "kio";

export type ProjectCopy = {
  purpose: string;
  highlights: string[];
  status?: string;
};

export type ClientCaseCopy = {
  title: string;
  problem: string;
  solution: string;
  challenge: string;
};

export type SiteContent = {
  nav: { about: string; projects: string; clients: string; contact: string };
  labels: { about: string; projects: string; clients: string; stack: string };
  a11y: {
    openMenu: string;
    closeMenu: string;
    language: string;
    whatsapp: string;
    projectCode: string;
    projectLive: string;
    projectScreenshot: string;
  };
  hero: {
    available: string;
    role: string;
    tagline: string;
    statusLabel: string;
    statusValue: string;
    proofLine: string;
    ctaProjects: string;
    ctaEmail: string;
  };
  about: { paragraphs: string[] };
  projects: {
    intro: string;
    items: Record<ProjectKey, ProjectCopy>;
  };
  clients: {
    intro: string;
    problemLabel: string;
    solutionLabel: string;
    challengeLabel: string;
    items: ClientCaseCopy[];
  };
  stack: {
    groupLabels: string[];
    aiNote: string;
  };
  contact: {
    heading: string;
    subheading: string;
    emailLabel: string;
  };
};
