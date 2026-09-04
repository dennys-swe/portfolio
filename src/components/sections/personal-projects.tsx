"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { Badge } from "@/components/ui/badge";
import { personalProjects } from "@/lib/content";

export function PersonalProjects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        Projetos pessoais
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-12 max-w-2xl text-muted-foreground"
      >
        Código aberto, em produção ou em pré-lançamento — construídos e mantidos sozinho.
      </motion.p>

      <div className="grid gap-6 sm:grid-cols-2">
        {personalProjects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
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
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Código de ${project.name}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
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
                      className="text-muted-foreground transition-colors hover:text-foreground"
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

              <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
