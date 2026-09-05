"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { DEFAULT_LOCALE, isLocale, type Locale, localeMeta } from "@/lib/i18n";
import { content, type SiteContent } from "@/lib/content";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate persisted locale on mount
      if (isLocale(stored)) setLocaleState(stored);
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

export function useContent(): SiteContent {
  const { locale } = useLocale();
  return content[locale];
}
