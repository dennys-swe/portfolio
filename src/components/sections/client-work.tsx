"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { clientCases, clientIntro } from "@/lib/content";

export function ClientWork() {
  return (
    <section id="clients" className="mx-auto max-w-5xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        Trabalho para clientes
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-12 max-w-2xl text-muted-foreground"
      >
        {clientIntro}
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2">
        {clientCases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="mb-3 text-lg font-semibold">{c.title}</h3>

            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Problema
            </p>
            <p className="mb-3 text-sm text-muted-foreground">{c.problem}</p>

            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Solução
            </p>
            <p className="mb-3 text-sm text-muted-foreground">{c.solution}</p>

            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Desafio técnico
            </p>
            <p className="mb-5 text-sm text-muted-foreground">{c.challenge}</p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {c.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
