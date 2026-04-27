"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Zap,
  Brain,
  Smile,
  Activity,
  Moon,
  Eye,
  Flame,
  Sparkles,
} from "lucide-react";

const benefits = [
  { icon: Shield, title: "Stronger immunity" },
  { icon: Zap, title: "Lasting energy" },
  { icon: Heart, title: "Heart & circulation" },
  { icon: Brain, title: "Mental clarity" },
  { icon: Sparkles, title: "Glowing skin" },
  { icon: Activity, title: "Faster recovery" },
  { icon: Moon, title: "Better sleep" },
  { icon: Flame, title: "Anti-inflammatory" },
  { icon: Eye, title: "Eye health" },
  { icon: Smile, title: "Mood & balance" },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            What you&apos;ll feel
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Ten benefits, one daily sachet.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex flex-col items-center rounded-2xl border border-rose/10 bg-ivory p-5 text-center transition-all hover:-translate-y-0.5 hover:border-rose/25 hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-rose-soft text-rose-deep">
                <b.icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{b.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
