"use client";

import { WhatsappIcon } from "@/components/brand-icons";
import { useContent, useLocale } from "@/components/locale-provider";
import { whatsappUrl } from "@/lib/i18n";

export function WhatsappFab() {
  const { locale } = useLocale();
  const t = useContent();

  return (
    <a
      href={whatsappUrl(locale)}
      target="_blank"
      rel="noreferrer"
      aria-label={t.a11y.whatsapp}
      className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95 sm:hidden"
    >
      <WhatsappIcon className="size-6" />
    </a>
  );
}
