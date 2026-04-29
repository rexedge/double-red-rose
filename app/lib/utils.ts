import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "18035670753";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://double-red-rose.vercel.app";

export const SITE_NAME = "Double Red Rose";
export const BRAND_NAME = "Affluence Global";
export const PRODUCT_NAME = "CelGen12 Double Red Rose";
export const PRODUCT_FULL_NAME =
  "CelGen12 Double Red Rose Natural Immune Support Supplement, Mixed Fruit Blend, 15 Sachets, 10ml";
export const PRODUCT_TAGLINE =
  "Elevate Your Morning, Fuel Your Success & Live Your Dream";
export const PRODUCT_SKU = "B0FMT64WV8";
export const PRODUCT_RATING = 4.8;
export const PRODUCT_REVIEW_COUNT = 12;
export const AMAZON_URL =
  "https://www.amazon.com/Affluence-Global-CelGen12-Natural-Supplement/dp/B0FMT64WV8";
export const LEGAL_DISCLAIMER =
  "Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.";

export const SITE_DESCRIPTION =
  "CelGen12™ Double Red Rose by Affluence Global — a 12-in-1 liquid red superfruit blend enhanced with N-Acetyl Cysteine (NAC) and Roselle. 15 sachets × 10ml. Made in a GMP-certified, FDA-registered facility.";
