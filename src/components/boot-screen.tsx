"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n";

const SESSION_KEY = "booted";

/** Terminal-style output; language-neutral by design. */
const BUILD_LINES: { text: string; prompt?: boolean }[] = [
  { prompt: true, text: "./build --target=web" },
  { text: "resolving dependencies" },
  { text: "compiling backend modules" },
  { text: "compiling ui components" },
  { text: "running test suite" },
  { text: "optimizing bundle" },
] as const;

const t: Record<Locale, { user: string; ready: string; welcome: string; skip: string }> = {
  pt: { user: "dennys@portfolio:~$", ready: "build pronto", welcome: "Bem-vindo.", skip: "clique para pular" },
  es: { user: "dennys@portfolio:~$", ready: "build listo", welcome: "Bienvenido.", skip: "clic para saltar" },
  en: { user: "dennys@portfolio:~$", ready: "build ready", welcome: "Welcome.", skip: "click to skip" },
};

const STEP_MS = 260;

export function BootScreen() {
  const { locale } = useLocale();
  const l = t[locale];

  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setActive(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    document.documentElement.style.removeProperty("overflow");
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* ignore */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- start boot sequence on mount
    setActive(true);
    document.documentElement.style.overflow = "hidden";

    const total = BUILD_LINES.length + 1; // + ready line
    for (let i = 1; i <= total; i++) {
      timers.current.push(setTimeout(() => setStep(i), STEP_MS * i));
    }
    timers.current.push(setTimeout(finish, STEP_MS * total + 900));

    return () => {
      timers.current.forEach(clearTimeout);
      document.documentElement.style.removeProperty("overflow");
    };
  }, [finish]);

  useEffect(() => {
    if (!active) return;
    const onKey = () => finish();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, finish]);

  const done = step >= BUILD_LINES.length + 1;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          role="presentation"
          onClick={finish}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background px-6"
        >
          <div className="w-full max-w-md font-mono text-sm leading-relaxed">
            {BUILD_LINES.map((line, i) => {
              if (step < i + 1) return null;
              const settled = step > i + 1 || done;
              return (
                <div key={i} className="flex items-baseline gap-2 text-muted-foreground">
                  {line.prompt ? (
                    <>
                      <span className="text-brand">{l.user}</span>
                      <span className="text-foreground">{line.text}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-brand">{settled ? "✓" : "▸"}</span>
                      <span>{line.text}</span>
                      <span className="flex-1 border-b border-dotted border-white/15" />
                      {settled && <span className="text-brand/80">ok</span>}
                    </>
                  )}
                </div>
              );
            })}

            {done && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 flex items-baseline gap-2"
              >
                <span className="text-brand">✓</span>
                <span className="text-foreground">{l.ready}</span>
                <span className="text-muted-foreground/70">·</span>
                <span className="font-heading italic text-foreground">{l.welcome}</span>
              </motion.div>
            )}
          </div>

          <span className="pointer-events-none absolute bottom-6 left-0 right-0 text-center font-mono text-[11px] text-muted-foreground/50">
            {l.skip}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
