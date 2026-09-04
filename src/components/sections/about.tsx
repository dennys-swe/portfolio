"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        Sobre
      </motion.h2>
      <div className="space-y-5">
        {about.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
