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

export const SITE_DESCRIPTION =
  "Double Red Rose is a premium liquid wellness supplement combining 12 active red superfoods with N-Acetyl Cysteine (NAC) — the precursor to glutathione, the body's master antioxidant. US FDA certified. 15 sachets × 10ml.";
