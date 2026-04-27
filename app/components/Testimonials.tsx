"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "My child had been struggling for months with a condition no medicine could solve. Within weeks of starting Double Red Rose, we saw real, lasting improvement. I am so grateful.",
    author: "Mother",
    location: "Cameroon",
  },
  {
    quote:
      "I felt tired and run-down every day. After one box of Double Red Rose, my energy is back, my skin is glowing, and I feel like myself again.",
    author: "Customer",
    location: "Zimbabwe",
  },
  {
    quote:
      "I had tried so many supplements with no result. Double Red Rose is the only one that actually made a difference for my health condition.",
    author: "Patient",
    location: "Nigeria",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            Real stories
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Trusted across continents.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.figure
              key={s.author + s.location}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-rose/10 bg-cream p-7 shadow-sm"
            >
              <Quote
                className="h-8 w-8 text-rose-soft"
                aria-hidden
                strokeWidth={1.5}
              />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                “{s.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-rose/10 pt-4 text-sm">
                <p className="font-semibold text-ink">{s.author}</p>
                <p className="text-muted">{s.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
