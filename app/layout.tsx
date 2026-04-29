import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = `CelGen12 ${SITE_NAME} — Natural Immune Support · 12-in-1 Red Superfruit Blend`;
const OG_IMAGES = [
  {
    url: `${SITE_URL}/images/product-images/pack-in-graphic-design.jpg`,
    width: 640,
    height: 640,
    alt: "CelGen12 Double Red Rose — The Antioxidant Powerhouse, 15 sachets × 10ml",
  },
  {
    url: `${SITE_URL}/images/product-images/front-view-pack.jpg`,
    width: 1354,
    height: 1500,
    alt: "CelGen12 Double Red Rose Natural Immune Support Supplement — front of pack",
  },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Affluence Global" }],
  creator: "Affluence Global",
  publisher: "Affluence Global",
  category: "Health & Wellness",
  keywords: [
    "CelGen12",
    "CelGen12 Double Red Rose",
    "Double Red Rose",
    "Affluence Global",
    "natural immune support supplement",
    "mixed fruit blend",
    "15 sachets 10ml",
    "NAC supplement",
    "N-Acetyl Cysteine",
    "Roselle",
    "Hibiscus sabdariffa",
    "glutathione",
    "red superfoods",
    "red superfruit blend",
    "antioxidant supplement",
    "liquid supplement",
    "pomegranate supplement",
    "goji berry",
    "acerola cherry",
    "jujube",
    "wellness Africa",
    "wellness Ghana",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description:
      "CelGen12™ Double Red Rose — a 12-in-1 liquid red superfruit blend enhanced with NAC and Roselle. 15 sachets × 10ml. Made in a GMP-certified, FDA-registered facility.",
    locale: "en_US",
    images: [...OG_IMAGES],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "CelGen12™ Double Red Rose — 12-in-1 red superfruit blend with NAC + Roselle. 15 × 10ml sachets.",
    images: OG_IMAGES.map((i) => i.url),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6f0" },
    { media: "(prefers-color-scheme: dark)", color: "#b0152a" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
