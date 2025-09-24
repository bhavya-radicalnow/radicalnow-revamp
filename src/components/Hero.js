"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero({
  bgSrc = "/background.png",
  turtleDesktop = "/turtle.png",
  turtleTablet = "/turtle.png",
  turtleMobile = "/turtlemobile.png",
  amplitude = 10,
  period = 8000,
}) {
  const turtleRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    let start = performance.now();

    function step(now) {
      const t = (now - start) % period;
      const norm = Math.sin((t / period) * Math.PI * 2);
      const y = norm * amplitude;

      if (turtleRef.current) {
        turtleRef.current.style.transform = `translate(-50%, -50%) translateY(${y}px)`;
      }

      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [amplitude, period]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-end justify-center text-center text-white overflow-hidden"
    >
      {/* Background */}
      <picture className="absolute inset-0 w-full h-full block">
        <source media="(min-width:1024px)" srcSet={bgSrc} />
        <source media="(min-width:768px)" srcSet={bgSrc} />
        <img src={bgSrc} alt="Hero background" className="object-cover w-full h-full" />
      </picture>

      {/* overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl px-4 pb-20 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-lg md:text-2xl font-semibold mb-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We enable the bold to accomplish the
        </motion.h2>

        <motion.h1
          className="text-5xl md:text-9xl font-extrabold tracking-tight leading-tight"
          style={{ textShadow: "2px 4px 6px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          EXTRAORDINARY
        </motion.h1>
      </div>

      {/* Floating turtle */}
      <div
        ref={turtleRef}
        className="absolute pointer-events-none transform-gpu w-[450px] h-[450px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px]"
        style={{
          left: "50%",
          top: "48%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative w-full h-full origin-center animate-body-subtle" style={{ willChange: "transform" }}>
          <picture>
            {/* desktop first */}
            <source media="(min-width:1024px)" srcSet={turtleDesktop} />
            {/* tablet */}
            <source media="(min-width:768px)" srcSet={turtleTablet} />
            {/* mobile fallback */}
            <img
              src={turtleMobile}
              alt="floating turtle"
              className="w-full h-full object-contain block drop-shadow-md"
              style={{ userSelect: "none", pointerEvents: "none" }}
            />
          </picture>
        </div>
      </div>

      <style jsx>{`
        @keyframes body-subtle {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-1.5px) scale(0.999,1.005); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-body-subtle { animation: body-subtle 2200ms ease-in-out infinite; }
        .drop-shadow-md { filter: drop-shadow(0px 8px 10px rgba(0,0,0,0.18)); }
      `}</style>
    </section>
  );
}
