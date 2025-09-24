"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ExpertHero from "@/components/ExpertHero";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Work() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />

        <main className="pb-20">
          {/* ===== ROBUST HERO (background image + separate seahorse image + text) ===== */}
          <section className="relative w-full">
            {/* Hero container with explicit min-height */}
            <div className="relative min-h-[360px] md:min-h-[480px] lg:min-h-[640px]">
              {/* Background image wrapper - FIXED z-index */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/work-hero.webp"
                  alt="Sea background"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-10" />

              {/* Content layer - HIGHER z-index */}
              <div className="relative z-20 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 h-full py-12 md:py-20">
                  {/* LEFT: heading + subtext */}
                  <div className="md:col-span-7 lg:col-span-6">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-[#000405] pt-10">
                      <span className="lg:whitespace-nowrap">Our Work, Radical ideas,</span>
                      <br className="hidden md:block" />real-world impact
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-[#000405] max-w-5xl">
                      Showcasing solutions that blend innovation, empathy, and impact across healthcare and finance
                    </p>
                  </div>

                  {/* RIGHT: seahorse image */}
                  <div className="md:col-span-5 lg:col-span-6 flex justify-end items-center">
                    <div className="relative w-[300px] md:w-[450px] lg:w-[600px] h-[380px] md:h-[480px] lg:h-[640px] -mt-6">
                      <Image
                        src="/seahorse.png"
                        alt="Seahorse"
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 600px"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* ===== Existing page content (starts where your previous header was) ===== */}
          <section className="relative z-30 -mt-20 md:-mt-30 lg:-mt-30">
            <div className="max-w-6xl mx-auto px-6">
              {/* Case card 1 */}
              <article className="bg-[#F2FEFF] rounded-2xl p-6 mb-10 md:p-10 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* LEFT: logo + description + screenshot */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/ovumlogo.png"
                        alt="Ovum logo"
                        width={120}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <p className="text-slate-700">
                      We helped Ovum Hospitals, a leading maternity and neonatal care provider, transform their digital and offline presence.
                      By combining modern design, empathetic communication, and clear information architecture, we made it easier for patients
                      and families to trust the brand and access the care they need.
                    </p>

                    {/* screenshot + phone mock */}
                    <div className="relative w-full max-w-full">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/ovumpresentation.png"
                          alt="Website screenshot"
                          width={1200}
                          height={700}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: tags/pills + highlights */}
                  <aside className="md:col-span-5">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        "Product",
                        "Marketing",
                        "Redesign of Websites",
                        "App Design",
                        "Maintenance",
                      ].map((pill) => (
                        <span
                          key={pill}
                          className="inline-block px-3 py-1.5 rounded-full bg-[#BEF2FC] text-slate-700 text-sm font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                      <ul className="list-disc ml-5 text-slate-700 space-y-2">
                        <li>Redesigned Ovum Hospitals' digital presence and patient communications.</li>
                        <li>Built a modern, patient-first experience with clear design and navigation.</li>
                        <li>Created consistent branding across website, brochures, and digital assets.</li>
                        <li>Managed marketing campaigns with growth of 1.8x in just 4 months.</li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </article>

              {/* Case card 2 */}
              <article className="bg-[linear-gradient(180deg,#446BAF_0%,#2A5090_100%)] rounded-2xl p-6 mb-10 md:p-10 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/drifelogo.png"
                        alt="Drife logo"
                        width={120}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <p className="text-white">
                      We helped Drife, a disruptive ride-hailing platform, strengthen its digital presence and brand experience. By combining modern design, transparent communication, and intuitive information architecture, we made it easier for drivers and riders to trust the platform and access reliable, user-first mobility services.
                    </p>

                    <div className="relative w-full max-w-full">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/drifepresentation.png"
                          alt="Website screenshot"
                          width={1200}
                          height={700}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <aside className="md:col-span-5">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        "Product",
                        "Marketing",
                        "Redesign of Websites",
                        "App Design",
                        "Maintenance",
                      ].map((pill) => (
                        <span
                          key={pill}
                          className="inline-block px-3 py-1.5 rounded-full bg-[#FFFFFF] text-slate-700 text-sm font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3 text-white">Key Highlights</h3>
                      <ul className="list-disc ml-5 text-white space-y-2">
                        <li><strong>World's First Decentralised Ride-Hailing Platform</strong> → Built on blockchain to disrupt traditional aggregator models.</li>
                        <li><strong>Driver-Centric Model</strong> → Fairer commissions and transparent earnings for thousands of drivers.</li>
                        <li><strong>Rider Trust & Safety</strong> → Enhanced safety features and transparent pricing to improve rider confidence.</li>
                        <li><strong>Global Reach</strong> → Expanding operations across multiple international markets.</li>
                        <li><strong>Scalable Mobility Ecosystem</strong> → Designed to support future services beyond ride-hailing</li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </article>

              {/* Case card 3 */}
              <article className="bg-[#CED8FF] rounded-2xl p-6 mb-10 md:p-10 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/doconlogo.png"
                        alt="Docon logo"
                        width={120}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <p className="text-slate-700">
                      We helped Docon Technologies strengthen its digital presence and customer experience. By combining modern design, clear communication, and intuitive information architecture, we enabled users to better understand, trust, and engage with Docon's innovative healthcare solutions.
                    </p>

                    <div className="relative w-full max-w-full">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src="/doconpresentation.png"
                          alt="Website screenshot"
                          width={1200}
                          height={700}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <div className="hidden sm:block absolute -right-6 bottom-0 w-36 md:w-44">
                        <Image
                          src="/doconmock.png"
                          alt="Mobile mock"
                          width={300}
                          height={600}
                          className="w-full h-auto drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>

                  <aside className="md:col-span-5">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        "Product",
                        "Marketing",
                        "Redesign of Websites",
                        "App Design",
                        "Maintenance",
                      ].map((pill) => (
                        <span
                          key={pill}
                          className="inline-block px-3 py-1.5 rounded-full bg-[#FFFFFF] text-slate-700 text-sm font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div className="rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                      <ul className="list-disc ml-5 text-slate-700 space-y-2">
                        <li><strong>4,500+ Active Doctors</strong> → Empowering practitioners with seamless digital workflows and clinic management.</li>
                        <li><strong>12M+ Happy Patients</strong> → Delivering accessible, patient-first digital healthcare experiences.</li>
                        <li><strong>25M+ Digital Prescriptions</strong> → Ensuring accuracy, compliance, and convenience at scale.</li>
                        <li><strong>100+ Cities Served</strong> → Strong nationwide presence with consistent, scalable solutions.</li>
                        <li><strong>20+ Specialities</strong> → Supporting diverse medical practices through adaptable design and technology.</li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </article>
            </div>
          </section>
        </main>

        {/* <footer className="border-t mt-12 py-10">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">© {new Date().getFullYear()} RadicalNow Labs</div>
        </footer> */}
      </div>

      <ContactSection />
    </>
  );
}
