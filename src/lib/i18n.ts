export const LOCALES = ["pt", "es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const localeMeta: Record<Locale, { label: string; htmlLang: string }> = {
  pt: { label: "Português (Brasil)", htmlLang: "pt-BR" },
  es: { label: "Español", htmlLang: "es" },
  en: { label: "English", htmlLang: "en" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * UI strings only. Long-form content (Sobre, projetos, cases) still comes from
 * `content.ts` in Portuguese for all locales — to be translated later.
 */
export const ui = {
  pt: {
    nav: { about: "Sobre", projects: "Projetos", clients: "Clientes", contact: "Contato" },
    whatsapp: "WhatsApp",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", clients: "Clientes", contact: "Contacto" },
    whatsapp: "WhatsApp",
    language: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  en: {
    nav: { about: "About", projects: "Projects", clients: "Clients", contact: "Contact" },
    whatsapp: "WhatsApp",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
} satisfies Record<Locale, unknown>;

const WHATSAPP_NUMBER = "5587991714659";

const whatsappMessage: Record<Locale, string> = {
  pt: "Oi Dennys, vi seu portfólio e queria conversar.",
  es: "Hola Dennys, vi tu portafolio y me gustaría conversar.",
  en: "Hi Dennys, I saw your portfolio and would like to talk.",
};

export function whatsappUrl(locale: Locale) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage[locale])}`;
}
