import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { ProductIntro } from "./components/ProductIntro";
import { Ingredients } from "./components/Ingredients";
import { Science } from "./components/Science";
import { Benefits } from "./components/Benefits";
import { HelpsWith } from "./components/HelpsWith";
import { VideoSection } from "./components/VideoSection";
import { Testimonials } from "./components/Testimonials";
import { Trust } from "./components/Trust";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";
import {
  AMAZON_URL,
  BRAND_NAME,
  PRODUCT_FULL_NAME,
  PRODUCT_RATING,
  PRODUCT_REVIEW_COUNT,
  PRODUCT_SKU,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "./lib/utils";

const productImages = [
  `${SITE_URL}/images/product-images/pack-in-graphic-design.jpg`,
  `${SITE_URL}/images/product-images/front-view-pack.jpg`,
  `${SITE_URL}/images/product-images/four-packs.jpg`,
  `${SITE_URL}/images/product-images/pack-in-another-graphic-design.jpg`,
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT_FULL_NAME,
  description: SITE_DESCRIPTION,
  image: productImages,
  sku: PRODUCT_SKU,
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  manufacturer: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  countryOfOrigin: "CN",
  category: "Health & Wellness > Dietary Supplements",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: PRODUCT_RATING.toString(),
    reviewCount: PRODUCT_REVIEW_COUNT.toString(),
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Stephanie Perkins" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "This product is so good. This is my 3rd time of purchase. It works wonders.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sheila Nchangue" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I really love CelGen12. You feel good and energetic.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Verified Customer" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I was having pain and heaviness in my knee but after taking this supplement alongside my medication I feel better.",
    },
  ],
  offers: {
    "@type": "Offer",
    url: AMAZON_URL,
    priceCurrency: "USD",
    price: "65.00",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
  },
  sameAs: [AMAZON_URL],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMBER}`,
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  parentOrganization: {
    "@type": "Organization",
    name: BRAND_NAME,
  },
  areaServed: ["US", "GH", "NG", "ZW", "CM", "KE", "ZA"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <ProductIntro />
        <Ingredients />
        <Science />
        <Benefits />
        <HelpsWith />
        <VideoSection />
        <Testimonials />
        <Trust />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
