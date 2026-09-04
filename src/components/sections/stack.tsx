"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/section-label";
import { stackGroups } from "@/lib/content";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-3xl px-6 py-28">
      <div className="mb-12">
        <SectionLabel>Stack</SectionLabel>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {stackGroups.map((group, i) => {
          const isBackend = group.label === "Backend";
          return (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-3 text-sm font-medium text-foreground/90">{group.label}</h3>
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-30px" }}
                className="flex flex-wrap gap-1.5"
              >
                {group.items.map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <Badge
                      variant="outline"
                      className={
                        isBackend
                          ? "border-brand/40 text-brand text-xs font-normal"
                          : "text-xs font-normal"
                      }
                    >
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
