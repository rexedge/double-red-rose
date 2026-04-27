"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const conditions = [
  "Fatigue",
  "Low immunity",
  "Oxidative stress",
  "Inflammation",
  "Skin issues",
  "Liver burden",
  "Brain fog",
  "Poor circulation",
  "Slow recovery",
  "Aging",
  "Toxin overload",
  "Low energy",
];

export function Problem() {
  return (
    <section className="relative bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-4/3 overflow-hidden rounded-3xl border border-rose/10 shadow-xl shadow-rose/5"
        >
          <Image
            src="/images/health-issues.jpeg"
            alt="Common health concerns Double Red Rose helps address"
            fill
            sizes="(max-width: 1024px) 90vw, 580px"
            className="object-cover"
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-rose"
          >
            The modern wellness gap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl"
          >
            Your body is fighting battles you can&apos;t see.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-ink-soft"
          >
            Pollution, processed food, stress, and aging flood your cells with
            free radicals — depleting glutathione and leaving you vulnerable to
            chronic fatigue, weakened immunity and accelerated aging.
          </motion.p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {conditions.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-full border border-rose/15 bg-ivory px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                {c}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
