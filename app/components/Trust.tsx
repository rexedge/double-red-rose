"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe2, Building2 } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "GMP Certified · FDA-Registered",
    body: "Manufactured in a GMP-certified, FDA-registered facility and third-party tested for purity.",
  },
  {
    icon: Award,
    title: "4.8/5 on Amazon",
    body: "Verified customer reviews praise the energy, focus, and wellness benefits of CelGen12™.",
  },
  {
    icon: Building2,
    title: "By Affluence Global",
    body: "CelGen12™ Double Red Rose is produced in China to international quality and safety standards.",
  },
  {
    icon: Globe2,
    title: "Clean Formula",
    body: "No fillers, no sugar added, low-glycemic, no artificial colors, no animal testing.",
  },
];

export function Trust() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            Trust & credentials
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Backed by certifications. Built for trust.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-rose/10 bg-ivory p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-rose-soft text-rose-deep">
                <it.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
