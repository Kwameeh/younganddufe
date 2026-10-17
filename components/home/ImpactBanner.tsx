"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ImpactBanner() {
  return (
    <section
      id="impact-report"
      className="relative w-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none opacity-60"
      >
        <source src="/impact-report.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 flex flex-col justify-between h-full min-h-[460px]">
        {/* Top Tag */}
        <div className="self-end max-w-sm text-right">
          <p className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-widest font-semibold border-b border-brand-amber/40 pb-2 inline-block">
            A $4 Million Multi-Country Investment in Women-Owned Green Centers
          </p>
        </div>

        {/* Center/Bottom Headline & CTA */}
        <div className="my-auto max-w-3xl">
          <span className="text-white/70 font-oswald text-sm uppercase tracking-widest block mb-2">
            Independent Sustainability Lifecycle Report
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-oswald uppercase font-black text-white tracking-tighter leading-[0.95] mb-8">
            Shea Gets <br />
            <span className="text-emerald-400">Greener</span>
          </h2>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/impact/sustainability"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white font-oswald text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span>Read Impact Report</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <span className="text-white/60 font-outfit text-sm">
              Audited by ECOCERT & Bio-Diversity Watch
            </span>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20 text-white">
          <div>
            <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-amber">
              -89%
            </div>
            <div className="text-xs text-white/70 font-outfit">
              Firewood Consumption
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-oswald font-bold text-emerald-400">
              100%
            </div>
            <div className="text-xs text-white/70 font-outfit">
              Shea Waste Repurposed
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-amber">
              50+
            </div>
            <div className="text-xs text-white/70 font-outfit">
              Eco-Modern Facilities
            </div>
          </div>
          <div>
            <div className="text-2xl lg:text-3xl font-oswald font-bold text-emerald-400">
              Net Zero
            </div>
            <div className="text-xs text-white/70 font-outfit">
              Freshwater Target 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
