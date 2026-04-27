"use client";

import { motion } from "framer-motion";
import {
  Cherry,
  Grape,
  Apple,
  Leaf,
  Flower2,
  Flower,
  Citrus,
  Sprout,
  Bean,
  Droplets,
  Sparkles,
  CircleDot,
} from "lucide-react";

const ingredients = [
  {
    name: "Pomegranate",
    icon: Sparkles,
    note: "Punicalagins for cardiovascular support",
  },
  {
    name: "Red Grapes",
    icon: Grape,
    note: "Resveratrol & polyphenols",
  },
  {
    name: "Peach",
    icon: Apple,
    note: "Vitamin C & gentle digestive aid",
  },
  {
    name: "Jujube",
    icon: CircleDot,
    note: "Calming adaptogen, sleep support",
  },
  {
    name: "Roselle (Hibiscus)",
    icon: Flower,
    note: "Healthy blood pressure",
  },
  {
    name: "Acerola Cherry",
    icon: Cherry,
    note: "Highest natural vitamin C",
  },
  {
    name: "Double Red Rose Petal",
    icon: Flower2,
    note: "Signature antioxidant blend",
  },
  {
    name: "Goji Berry",
    icon: CircleDot,
    note: "Eye health & immune resilience",
  },
  {
    name: "Lemon",
    icon: Citrus,
    note: "Alkalising & detox-supportive",
  },
  {
    name: "Korean Red Ginseng",
    icon: Sprout,
    note: "Energy, stamina, focus",
  },
  {
    name: "Carob",
    icon: Bean,
    note: "Mineral-rich, gentle on stomach",
  },
  {
    name: "Locust Honey",
    icon: Droplets,
    note: "Natural sweetener with enzymes",
  },
];

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            12 active ingredients
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Every red, the way nature intended.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Twelve botanicals, each chosen for a specific role — and unified by
            the deep red pigments that signal powerful antioxidant compounds.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.05 + Math.floor(i / 3) * 0.04,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl border border-rose/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:border-rose/30 hover:shadow-lg hover:shadow-rose/10"
            >
              <Leaf
                aria-hidden
                className="pointer-events-none absolute -top-4 -right-4 h-20 w-20 text-rose-soft/40 transition-transform group-hover:rotate-12"
              />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-rose-gradient text-ivory shadow-sm">
                  <ing.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {ing.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {ing.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
