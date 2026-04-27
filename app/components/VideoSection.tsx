"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { src: "/videos/testimonial-1.mp4", label: "Customer story #1" },
  { src: "/videos/testimonial-2.mp4", label: "Customer story #2" },
  { src: "/videos/testimonial-3.mp4", label: "Customer story #3" },
  { src: "/videos/testimonial-4.mp4", label: "Customer story #4" },
  { src: "/videos/testimonial-5.mp4", label: "Customer story #5" },
];

function VideoCard({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-rose/10 bg-ink shadow-lg shadow-rose/5 ${className}`}
    >
      <video
        src={src}
        controls={playing}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          type="button"
          aria-label={`Play ${label}`}
          onClick={(e) => {
            const v = e.currentTarget.previousSibling as HTMLVideoElement;
            if (v) {
              v.controls = true;
              v.play();
              setPlaying(true);
            }
          }}
          className="absolute inset-0 grid place-items-center bg-ink/30 transition-colors hover:bg-ink/45"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ivory/95 text-rose shadow-xl transition-transform group-hover:scale-105">
            <Play className="h-7 w-7 fill-current" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoSection() {
  return (
    <section id="videos" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">
            See it in action
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Hear from people whose lives have changed.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <VideoCard
            src="/videos/product-knowledge.mp4"
            label="Product knowledge video"
            className="aspect-video"
          />
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <VideoCard src={t.src} label={t.label} className="aspect-9/16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
