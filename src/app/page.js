import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroServices from "@/components/HeroServices";
import CaseStudies from "@/components/CaseStudies";
import ExpertHero from "@/components/ExpertHero";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <HeroServices />
      <CaseStudies />
      <ExpertHero />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
