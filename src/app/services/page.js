"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ExpertHero from "@/components/ExpertHero";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="pb-20">
          <section className="relative w-full">
            {/* Hero container with explicit min-height */}
            <div className="relative min-h-[360px] md:min-h-[480px] lg:min-h-[640px]">
              {/* Background image wrapper - FIXED z-index */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/rayfish.png"
                  alt="Sea background"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-10" />

              {/* Text content at bottom center */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center px-4">
                <h1
                  className="
                    text-3xl md:text-4xl lg:text-5xl     
                    font-bold text-white drop-shadow-lg
                    leading-tight tracking-tight         
                    w-[min(90vw,1200px)]                 
                    max-w-[1200px]               
                    mx-auto
                    break-normal
                  "
                >
                  We build future-ready digital ecosystems that power growth & scalability
                </h1>
              </div>

            </div>
          </section>
          <section
            aria-labelledby="hero-copy-heading"
            className="bg-white text-slate-900 px-6 md:px-8 lg:px-12 py-12 md:py-20"
          >
            <div className="mx-auto w-full max-w-[1400px]">
              {/* Container that controls line length so paragraphs wrap nicely */}
              <div className="mx-auto max-w-[1100px]">
                <p className="mb-8 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-[1.38] md:leading-[1.34] lg:leading-[1.28] font-medium tracking-tight">
                  Our expertise spans AI, blockchain, data science, and custom software, helping businesses unlock the full potential of emerging technologies. From Generative AI, AI agents, and NLP to smart contracts, DeFi platforms, and multi-chain integrations, we deliver secure, high-performance systems built for tomorrow.
                </p>

                <p className="mb-8 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-[1.38] md:leading-[1.34] lg:leading-[1.28] font-medium tracking-tight">
                  We go beyond code—offering mobile & enterprise apps, SaaS, IoT innovations, product management, branding, marketing, testing, and staff augmentation—to ensure your journey from idea to market is seamless.
                </p>

                <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-[1.38] md:leading-[1.34] lg:leading-[1.28] font-medium tracking-tight">
                  Partner with us to turn bold ideas into impactful solutions that inspire trust, deliver scale, and shape the future.
                </p>
              </div>
            </div>
          </section>
          <ServicesGrid />
        </main>
      </div>
      <ContactSection />
    </>
  );
}
