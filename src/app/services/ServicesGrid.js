"use client";
import React from "react";

const cards = {
  technology: [
    {
      title: "Mobile Apps, Websites & IoT Development",
      body:
        "We create high-performance mobile apps for iOS, Android, and cross-platform solutions, along with IoT applications that enable smart connectivity. Our solutions enhance user experiences, improve automation, and drive digital innovation.",
      bg: "bg-[#EEFCFF]",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      body:
        "We build AI-driven solutions, including Generative AI, AI agents, machine learning models, chatbots, and NLP technologies, to enhance automation and decision-making. Our expertise enables businesses to streamline operations, improve customer experiences, and unlock new growth opportunities.",
      bg: "bg-[#EEFCFF]",
    },
    {
      title: "Custom Software & Enterprise Solutions",
      body:
        "We design and develop scalable enterprise software, SaaS solutions, ERP, and CRM systems tailored to business needs. Our expertise ensures seamless integration, enhanced productivity, and future-ready digital transformation.",
      bg: "bg-[#EEFCFF]",
    },
    {
      title: "Blockchain & Web3 Solutions",
      body:
        "We develop secure and scalable blockchain solutions, including smart contracts, DeFi platforms, NFT marketplaces, and multi-chain integrations. Our expertise helps businesses harness decentralisation, enhance security, and drive innovation in the Web3 ecosystem.",
      bg: "bg-[#EEFCFF]",
      },
  ],
  product: [
    {
      title: "Product Strategy & Business Planning",
      body:
        "Define product roadmap, market positioning, go-to-market strategy, and growth planning to ensure product success.",
      bg: "bg-[#FFEFE5]",
    },
    {
      title: "Staff Augmentation & Scalable Teams",
      body:
        "Extend your capabilities with dedicated offshore or in-house teams to fast-track development and maintain flexibility",
      bg: "bg-[#FFEFE5]",
    },
  ],
  design: [
    {
      title: "App and Website Design",
      body:
        "Crafting apps and websites that are simple, scalable, and delightful—built to meet business goals while engaging users",
      bg: "bg-[#F4F2FF]",
    },
    {
      title: "Brand and Logo Design",
      body:
        "From strategy to visual identity, we design brands and logos that inspire trust, recognition, and lasting impact",
      bg: "bg-[#F4F2FF]",
    },
    {
      title: "Usability Research Heuristic Evaluation",
      body:
        "By combining user insights with proven UX principles, we identify pain points and deliver actionable improvements",
      bg: "bg-[#F4F2FF]",
    },    
    {
      title: "Marketing & Print Design",
      body:
        "From brochures to campaigns, our designs blend creativity and clarity to communicate your message effectively",
      bg: "bg-[#F4F2FF]",
    },
  ],
};

function ServiceCard({ title, body, bg }) {
  return (
    <article
      className={`w-full ${bg} rounded-[28px] p-6 md:p-8 shadow-sm ring-1 ring-black/6 flex flex-col h-full`}
      aria-label={title}
    >
      <h3 className="text-[16px] md:text-[18px] font-semibold mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm md:text-[14px] leading-relaxed text-slate-700 mt-2">
        {body}
      </p>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white text-slate-900 px-6 md:px-10 lg:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-[1000px]">
        {/* Grid with 3 rows so left headings align exactly to each group */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-y-10 md:gap-y-16">
          {/* ROW 1: Technology */}
          <div className="flex items-start">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Technology
              <br />
              Services
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {cards.technology.map((c, i) => (
                <ServiceCard key={`tech-${i}`} {...c} />
              ))}
            </div>
          </div>

          {/* ROW 2: Product */}
          <div className="flex items-start">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Product
              <br />
              Services
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {cards.product.map((c, i) => (
                <ServiceCard key={`prod-${i}`} {...c} />
              ))}
            </div>
          </div>

          {/* ROW 3: Design */}
          <div className="flex items-start">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Design
              <br />
              Services
            </h2>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {cards.design.map((c, i) => (
                <ServiceCard key={`design-${i}`} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}