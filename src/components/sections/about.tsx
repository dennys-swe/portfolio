"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <div className="mb-8">
        <SectionLabel>Sobre</SectionLabel>
      </div>
      <div className="space-y-5">
        {about.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
