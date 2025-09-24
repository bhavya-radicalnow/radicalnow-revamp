"use client";
import React from "react";
import Image from "next/image";

export default function HeroServicesImagesOnly() {
  const imgs = [
    "/business.png",
    "/technology.png",
    "/design.png",
    "/change.png",
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-2 px-4 md:px-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Taking your business<br />to the next level
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              We partner with businesses to reimagine possibilities, build scalable solutions, and accelerate digital growth.
            </p>
          </div>

          <div>
            <button
              type="button"
              className="inline-block rounded-full px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {imgs.map((src, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden transform-gpu transition duration-400 hover:scale-[1.02] aspect-[4/3]"
            >
              <Image
                src={src}
                alt={`Service ${idx + 1}`}
                fill
                className="object-contain w-full h-full p-4"
                priority={idx < 2} // prioritize first two images
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}