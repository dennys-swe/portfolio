"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { stackGroups } from "@/lib/content";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-3xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground"
      >
        Stack
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {stackGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <h3 className="mb-3 text-sm font-medium text-foreground/90">{group.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="outline" className="text-xs font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
