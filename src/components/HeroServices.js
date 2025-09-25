"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroServicesImagesOnly() {
  const imgs = [
    "/business.png",
    "/technology.png",
    "/design.png",
    "/change.png",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6 md:gap-12 px-4 md:px-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Taking your business<br />to the next level
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              We partner with businesses to reimagine possibilities, build scalable solutions, and accelerate digital growth.
            </p>
          </div>

          <div>
            <Link
              href="/#contact"
              className="
                inline-block rounded-full
                px-6 sm:px-8 md:px-10
                py-3
                bg-gradient-to-r from-sky-500 to-indigo-600
                text-white font-semibold shadow-md
                hover:opacity-90 transition
                whitespace-nowrap  /* prevent text wrap */
                text-sm sm:text-base md:text-lg /* responsive font size */
              "
            >
              Get In Touch
            </Link>
          </div>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 gap-x-4">
          {imgs.map((src, idx) => (
            <div
              key={idx}
              className="
        relative 
        aspect-[4/3] md:aspect-[4/2]  /* taller on mobile */
        flex items-center justify-center 
        rounded-3xl overflow-hidden 
        transform-gpu transition duration-400 hover:scale-[1.02]
      "
            >
              <Image
                src={src}
                alt={`Service ${idx + 1}`}
                fill
                className="object-contain"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
