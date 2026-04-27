import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Double Red Rose — Nature's Reds. Science-Backed Wellness.",
  description:
    "Double Red Rose is a premium liquid supplement combining 12 active red superfoods with N-Acetyl Cysteine (NAC) — the precursor to glutathione, the body's master antioxidant. US FDA certified. 15 sachets × 10ml.",
  keywords: [
    "Double Red Rose",
    "NAC supplement",
    "glutathione",
    "red superfoods",
    "antioxidant",
    "wellness",
    "natural supplement",
  ],
  openGraph: {
    title: "Double Red Rose — Nature's Reds. Science-Backed Wellness.",
    description:
      "12 active red superfoods + NAC. The premium liquid antioxidant supplement.",
    type: "website",
  },
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
