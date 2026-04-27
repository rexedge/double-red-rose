"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const conditions = [
  "Diabetes management",
  "High blood pressure",
  "Cholesterol",
  "Arthritis & joint pain",
  "Asthma",
  "Allergies",
  "Liver detox",
  "Kidney health",
  "Ulcers",
  "Hormonal balance",
  "Fertility support",
  "Menstrual health",
  "Anaemia",
  "Sickle cell support",
  "Prostate health",
  "Sexual wellness",
  "Eye strain",
  "Migraines",
  "Skin disorders",
  "Hair & nails",
  "Recovery after illness",
  "General wellness",
];

export function HelpsWith() {
  return (
    <section className="relative overflow-hidden bg-rose-gradient py-20 text-ivory sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 mix-blend-overlay"
      >
        <Image
          src="/images/health-shield.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Helps with
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ivory text-balance sm:text-5xl">
            A daily ally for the conditions modern life creates.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ivory/85">
            Customers across Africa, Asia and beyond report relief and renewed
            vitality across a wide range of concerns.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-2.5">
          {conditions.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.025 }}
              className="rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-sm font-medium text-ivory backdrop-blur-sm"
            >
              {c}
            </motion.li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ivory/70">
          Disclaimer: These statements have not been evaluated by the FDA. This
          product is not intended to diagnose, treat, cure or prevent any
          disease. Consult your physician.
        </p>
      </div>
    </section>
  );
}
