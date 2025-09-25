"use client";
import React from "react";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Radical ideas, real-world impact
          </h2>
          <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
            Showcasing Solutions That Blend Innovation, Empathy, And Impact Across Healthcare And Finance
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ovum */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] transform-gpu transition duration-400 hover:scale-[1.02]">
              <Image
                src="/ovum.png"
                alt="Ovum Case Study"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Drife */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] transform-gpu transition duration-400 hover:scale-[1.02]">
              <Image
                src="/drife.png"
                alt="Drife Case Study"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Docon */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] transform-gpu transition duration-400 hover:scale-[1.02]">
              <Image
                src="/docon.png"
                alt="Docon Case Study"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
