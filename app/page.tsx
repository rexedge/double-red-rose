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
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "./lib/utils";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  image: [`${SITE_URL}/images/product-snow.jpeg`],
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  manufacturer: {
    "@type": "Organization",
    name: "Affluence Global",
  },
  category: "Health & Wellness > Dietary Supplements",
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/#order`,
    priceCurrency: "USD",
    price: "65.00",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
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
    name: "Affluence Global",
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
