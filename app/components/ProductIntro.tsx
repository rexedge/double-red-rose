"use client";

import { motion } from "framer-motion";
import { Droplet, Calendar, FlaskConical } from "lucide-react";

const stats = [
  { icon: Droplet, label: "Volume per sachet", value: "10 ml" },
  { icon: Calendar, label: "Sachets per box", value: "15" },
  { icon: FlaskConical, label: "Active ingredients", value: "12 + NAC" },
];

export function ProductIntro() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-rose"
        >
          Meet Double Red Rose
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl"
        >
          A liquid wellness ritual — distilled from{" "}
          <span className="text-rose">12 red superfoods</span> and powered by
          NAC.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft"
        >
          Each box delivers 15 individually-sealed sachets of pure liquid
          extract. Take one sachet daily — chilled or at room temperature —
          straight from the pouch. Designed for absorption, formulated for
          results.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-rose/10 bg-ivory p-6 text-left shadow-sm"
            >
              <s.icon className="h-7 w-7 text-rose" aria-hidden />
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
                {s.label}
              </p>
              <p className="mt-1 font-display text-3xl font-semibold text-ink">
                {s.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
