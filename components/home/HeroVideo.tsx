"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export function HeroVideo() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("stats");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
      >
        <source src="/sfc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Subtle Vignette & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60 pointer-events-none" />


      {/* Bottom Center Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToContent}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all group cursor-pointer"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] font-outfit text-white/70 group-hover:text-white">
            Discover
          </span>
          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors bg-black/20 backdrop-blur-xs">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
