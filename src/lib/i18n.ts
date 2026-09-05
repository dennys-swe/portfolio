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
 * Picks the best supported locale from an ordered list of BCP-47 language tags
 * (e.g. `navigator.languages`). Matches on the primary subtag, so "es-419" and
 * "en-GB" resolve to "es" and "en". Falls back to DEFAULT_LOCALE.
 */
export function matchLocale(languages: readonly string[]): Locale {
  for (const tag of languages) {
    const primary = tag.toLowerCase().split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return DEFAULT_LOCALE;
}

const WHATSAPP_NUMBER = "5587991714659";

const whatsappMessage: Record<Locale, string> = {
  pt: "Oi Dennys, vi seu portfólio e queria conversar.",
  es: "Hola Dennys, vi tu portafolio y me gustaría conversar.",
  en: "Hi Dennys, I saw your portfolio and would like to talk.",
};

export function whatsappUrl(locale: Locale) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage[locale])}`;
}
