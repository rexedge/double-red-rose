"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-rose-radial pt-10 pb-20 sm:pt-16 sm:pb-28"
    >
      {/* decorative petals */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold-soft/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose/20 bg-ivory/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-rose-deep">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            CelGen12™ · 12-in-1 Red Superfruit Blend
          </div>

          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
            Elevate Your Morning.
            <br />
            <span className="bg-linear-to-r from-rose-deep via-rose to-rose-light bg-clip-text text-transparent">
              Fuel Your Success.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            <strong className="text-ink">CelGen12 Double Red Rose</strong> is a
            premium liquid Natural Immune Support Supplement — a Mixed Fruit
            Blend of Asia’s top botanicals and red superfruits, enhanced with{" "}
            <strong className="text-ink">N-Acetyl Cysteine (NAC)</strong> and{" "}
            <strong className="text-ink">Roselle</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(
                "Hello! I'd like to order CelGen12 Double Red Rose ($65). Please share payment & delivery details.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-rose px-7 text-base font-semibold text-ivory shadow-lg shadow-rose/20 transition-all hover:bg-rose-deep hover:shadow-xl hover:shadow-rose/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Order on WhatsApp — $65
            </a>
            <a
              href="#ingredients"
              className="inline-flex h-14 items-center justify-center rounded-full border border-ink/15 bg-ivory/60 px-7 text-base font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ivory"
            >
              See ingredients
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-rose" aria-hidden />
              GMP Certified · FDA-Registered Facility
            </div>
            <div className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" aria-hidden />
              Rated 4.8/5 on Amazon
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose" aria-hidden />
              15 sachets × 10ml
            </div>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-4xl border border-rose/15 bg-ivory shadow-2xl shadow-rose/10">
            <Image
              src="/images/product-images/front-view-pack.jpg"
              alt="CelGen12 Double Red Rose Natural Immune Support Supplement — front of pack with 15 sachets"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ivory/90 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    CelGen12™ · Mixed Fruit Blend
                  </p>
                  <p className="font-display text-lg font-semibold text-ink">
                    Double Red Rose
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Price
                  </p>
                  <p className="font-display text-2xl font-bold text-rose">
                    $65
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
