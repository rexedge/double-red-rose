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

const TITLE = `${SITE_NAME} — Nature's Reds. Science-Backed Wellness.`;
const OG_IMAGES = [
  {
    url: `${SITE_URL}/images/product-snow.jpeg`,
    width: 720,
    height: 478,
    alt: "Double Red Rose — premium liquid wellness supplement box and sachet",
  },
  {
    url: `${SITE_URL}/images/health-shield.jpeg`,
    width: 1280,
    height: 720,
    alt: "Double Red Rose — antioxidant defense for everyday wellness",
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
    "Double Red Rose",
    "NAC supplement",
    "N-Acetyl Cysteine",
    "glutathione",
    "red superfoods",
    "antioxidant supplement",
    "liquid supplement",
    "immune support",
    "natural wellness",
    "FDA certified supplement",
    "pomegranate supplement",
    "goji berry",
    "Korean red ginseng",
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
      "12 active red superfoods + NAC. The premium liquid antioxidant supplement — 15 sachets × 10ml. US FDA certified.",
    locale: "en_US",
    images: [...OG_IMAGES],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "12 active red superfoods + NAC. Premium liquid antioxidant supplement.",
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
