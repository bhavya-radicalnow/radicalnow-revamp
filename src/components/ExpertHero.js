"use client";
import React from "react";
import Image from "next/image";

export default function ExpertHero() {
  return (
    <section
      aria-labelledby="expert-hero-title"
      className="
        relative w-full 
        min-h-[60vh]    /* smaller default height for mobile */
        sm:min-h-[70vh] /* tablet */
        md:min-h-screen /* full height only from md breakpoint up */
        flex items-end overflow-hidden
      "
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/sea.png"
          alt="Ocean background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
      </div>

      {/* Shark image */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/sharksole.png"
          alt="Shark"
          width={1200}
          height={600}
          className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto object-contain"
        />
      </div>

      {/* Text content */}
      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-10 md:pb-14 lg:pb-20">
        <h1
          id="expert-hero-title"
          className="text-white font-extrabold leading-tight
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
        >
          Our Experts Are The Finest
        </h1>

        <p
          className="mt-4 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl"
        >
          We blend bold strategies with deep collaboration to achieve exceptional results.
          We challenge conventional thinking and foster open communication. Our synergistic
          approach, combining innovative solutions with diverse expertise, drives
          transformative outcomes and delivers lasting impact.
        </p>
      </div>
    </section>
  );
}
