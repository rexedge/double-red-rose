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

export default function Home() {
  return (
    <>
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
