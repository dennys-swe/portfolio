"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/section-label";
import { clientCases, clientIntro } from "@/lib/content";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function ClientWork() {
  return (
    <section id="clients" className="mx-auto max-w-5xl px-6 py-28">
      <div className="mb-2">
        <SectionLabel>Trabalho para clientes</SectionLabel>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
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
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "var(--brand)" }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors"
          >
            <h3 className="mb-3 font-heading text-lg font-semibold">{c.title}</h3>

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

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-30px" }}
              className="mt-auto flex flex-wrap gap-1.5"
            >
              {c.stack.map((tech) => (
                <motion.div key={tech} variants={itemVariants}>
                  <Badge variant="secondary" className="text-xs font-normal">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
