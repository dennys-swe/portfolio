"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(62,207,160,0.14),transparent)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          Disponível para novas oportunidades
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        {profile.role}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl font-heading text-5xl font-semibold italic tracking-tight sm:text-7xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
      >
        {profile.tagline}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-mono text-sm text-muted-foreground/80"
      >
        {profile.stackLine}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60"
      >
        <span>$ status --production</span>
        <span className="text-brand">→ 4 sistemas ativos</span>
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="text-brand"
        >
          ▍
        </motion.span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#projects"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          Ver projetos
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-white/5"
        >
          <GithubIcon className="size-4" /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-white/5"
        >
          <LinkedinIcon className="size-4" /> LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand/40 hover:bg-white/5"
        >
          <Mail className="size-4" /> E-mail
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-14 max-w-2xl text-balance text-xs text-muted-foreground/70"
      >
        {profile.proofLine}
      </motion.p>
    </section>
  );
}
