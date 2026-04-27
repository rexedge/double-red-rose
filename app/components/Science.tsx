"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Free radicals",
    body: "Daily exposure to pollution, UV, stress and processed food generates unstable molecules that damage cells.",
  },
  {
    title: "Glutathione depletion",
    body: "Your body neutralises radicals using glutathione — but production drops with age and toxic load.",
  },
  {
    title: "NAC + reds restore",
    body: "NAC supplies cysteine, the rate-limiting precursor to glutathione. Red polyphenols amplify protection.",
  },
  {
    title: "Cellular resilience",
    body: "Restored antioxidant defence supports immunity, energy, recovery, skin, liver and longevity.",
  },
];

export function Science() {
  return (
    <section id="science" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-rose/10 shadow-xl shadow-rose/5"
          >
            <Image
              src="/images/nac-benefits.jpeg"
              alt="Diagram showing the benefits of N-Acetyl Cysteine (NAC) for glutathione synthesis"
              fill
              sizes="(max-width: 1024px) 90vw, 580px"
              className="object-cover"
            />
          </motion.div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              The science
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
              How NAC + red polyphenols rebuild your antioxidant defence.
            </h2>

            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-rose-gradient text-sm font-semibold text-ivory">
                      {i + 1}
                    </span>
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden
                        className="mt-2 h-full w-px flex-1 bg-rose/15"
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <a
              href="#order"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose-deep hover:text-rose"
            >
              Try Double Red Rose
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
