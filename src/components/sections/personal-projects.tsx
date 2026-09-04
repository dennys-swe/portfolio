"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/section-label";
import { personalProjects } from "@/lib/content";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function PersonalProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <div className="mb-2">
        <SectionLabel>Projetos pessoais</SectionLabel>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 max-w-2xl text-muted-foreground"
      >
        Em produção ou em pré-lançamento — construídos e mantidos sozinho.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2">
        {personalProjects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "var(--brand)" }}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors"
          >
            {project.images && project.images.length > 0 && (
              <div className="relative h-44 w-full border-b border-white/10 bg-black/40">
                <Image
                  src={project.images[0]}
                  alt={`Screenshot de ${project.name}`}
                  fill
                  className="object-cover object-top opacity-90"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold">{project.name}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Código de ${project.name}`}
                      className="text-muted-foreground transition-colors hover:text-brand"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Site de ${project.name}`}
                      className="text-muted-foreground transition-colors hover:text-brand"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">{project.purpose}</p>

              {project.status && (
                <p className="mb-4 text-xs font-medium text-amber-400/80">{project.status}</p>
              )}

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="mb-5 space-y-2 text-sm text-muted-foreground"
              >
                {project.highlights.map((h, idx) => (
                  <motion.li key={idx} variants={itemVariants} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="mt-auto flex flex-wrap gap-1.5"
              >
                {project.stack.map((tech) => (
                  <motion.div key={tech} variants={itemVariants}>
                    <Badge variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
