"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "../lib/utils";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [qty, setQty] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'd like to order Double Red Rose.\n\nName: ${name}\nCountry: ${country}\nQuantity: ${qty} box(es)\nPhone: ${phone}\n\nPlease share payment & delivery details.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="order"
      className="relative overflow-hidden bg-cream-deep py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-soft/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-4xl border border-rose/15 bg-ivory shadow-2xl shadow-rose/10"
        >
          <div className="bg-rose-gradient px-7 py-8 text-center text-ivory sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
              Order today
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Begin your wellness ritual.
            </h2>
            <p className="mt-3 text-base text-ivory/85">
              <span className="font-display text-3xl font-bold text-ivory">
                $65
              </span>{" "}
              per box · 15 sachets · ~2 weeks supply
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 px-7 py-8 sm:grid-cols-2 sm:px-10 sm:py-10"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-ink"
              >
                Full name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-rose/15 bg-cream px-4 text-ink outline-none transition-colors focus:border-rose focus:bg-ivory"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-ink"
              >
                Phone (WhatsApp)
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-rose/15 bg-cream px-4 text-ink outline-none transition-colors focus:border-rose focus:bg-ivory"
                placeholder="+233 24 000 0000"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-semibold text-ink"
              >
                Country
              </label>
              <input
                id="country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-2 h-12 w-full rounded-xl border border-rose/15 bg-cream px-4 text-ink outline-none transition-colors focus:border-rose focus:bg-ivory"
                placeholder="Ghana"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="qty"
                className="block text-sm font-semibold text-ink"
              >
                Quantity
              </label>
              <div className="relative mt-2">
                <select
                  id="qty"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-rose/15 bg-cream px-4 pr-10 text-ink outline-none transition-colors focus:border-rose focus:bg-ivory"
                >
                  <option value="1">1 box — $65</option>
                  <option value="2">2 boxes — $130</option>
                  <option value="3">3 boxes — $195</option>
                  <option value="6">6 boxes — $390</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  aria-hidden
                />
              </div>
            </div>

            <button
              type="submit"
              className="sm:col-span-2 mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-rose px-6 text-base font-semibold text-ivory shadow-lg shadow-rose/20 transition-all hover:bg-rose-deep hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Continue on WhatsApp
            </button>

            <p className="sm:col-span-2 text-center text-xs leading-relaxed text-muted">
              Submitting opens WhatsApp with your details so we can confirm
              payment and delivery. We respect your privacy.
            </p>
          </form>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Disclaimer: These statements have not been evaluated by the FDA. This
          product is not intended to diagnose, treat, cure or prevent any
          disease. Consult your physician before starting any supplement,
          especially if pregnant, nursing or on medication.
        </p>
      </div>
    </section>
  );
}
