"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "This product is so good. This is my 3rd time of purchase. It works wonders.",
    author: "Stephanie Perkins",
    location: "Verified Amazon Review",
  },
  {
    quote: "I really love CelGen12. You feel good and energetic.",
    author: "Sheila Nchangue",
    location: "Verified Amazon Review",
  },
  {
    quote:
      "I was having pain and heaviness in my knee, but after taking this supplement alongside my medication I feel better.",
    author: "Verified Customer",
    location: "Amazon Review",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            Real reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Rated 4.8/5 by verified Amazon customers.
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
