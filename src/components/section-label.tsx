"use client";

import { motion } from "framer-motion";

export function SectionLabel({ children }: { children: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="font-mono text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl"
    >
      <span className="text-brand">// </span>
      {children.toLowerCase()}
    </motion.h2>
  );
}
