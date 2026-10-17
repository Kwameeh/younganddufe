"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-[#F8F2EC]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">
            Flagship Botanical Export
          </div>
          <h2 className="text-4xl sm:text-5xl font-oswald uppercase font-black tracking-tight text-brand-brown leading-tight mb-4">
            Direct Origin Shea Butter & Companion Botanicals
          </h2>
          <p className="text-zinc-600 font-outfit text-base lg:text-lg leading-relaxed">
            Specialized in turnkey Shea Butter processing and bulk export for global cosmetic and personal care brands. We handle the entire journey from rural wild harvest to containerized maritime freight.
          </p>
        </div>

        {/* 4 Signature Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Shea Butter (Black) - Flagship */}
          <Link
            href="/products/shea-butter"
            className="group bg-[#000000] text-white rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-xl relative overflow-hidden border-2 border-brand-amber/40"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-brand-amber text-zinc-950 font-mono text-[11px] font-bold tracking-wider uppercase">
                  Flagship Export Line
                </span>
                <span className="text-[11px] font-mono text-white/70 uppercase">
                  Bulk Pails & Drums
                </span>
              </div>

              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5">
                <Image
                  src="/products/sheabutter.jpg"
                  alt="Raw Handcrafted Shea Butter for Bulk Export"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3">
                SHEA BUTTER
              </h3>

              <div className="space-y-1.5 text-sm font-outfit text-white/90">
                <p className="font-semibold text-brand-amber">Turnkey Sourcing & Export</p>
                <p>100% Unrefined & Steam-Refined</p>
                <p>Grade-A Cosmetic & Food Specs</p>
                <p className="text-xs text-white/70 pt-1">
                  Exported in 25kg pails, 190kg steel drums &amp; 20ft/40ft containers directly from Ghana.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/20 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-amber font-semibold">
                Explore Shea Butter Export
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Baobab Oil (Amber / Yellow) */}
          <Link
            href="/products/baobab-oil"
            className="group bg-[#E4A836] text-zinc-950 rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-white font-mono text-[11px] font-bold tracking-wider uppercase">
                  Consolidated Export
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-zinc-950">
                BAOBAB OIL
              </h3>

              <div className="space-y-1 text-sm font-outfit text-zinc-900 font-medium">
                <p>Intense Hydration &amp; Cosmetic Active</p>
                <p>Non Comedogenic (Rating 0)</p>
                <p>Cold-Pressed at Origin in Ghana</p>
                <p className="text-xs text-zinc-800 pt-2 opacity-90">
                  Available for consolidated export containers alongside Shea Butter shipments.
                </p>
              </div>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/2.png"
                alt="Cold Pressed Baobab Oil"
                width={240}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-black/15 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-zinc-950 font-bold">
                Explore Baobab Oil
              </span>
              <ArrowUpRight className="w-5 h-5 text-zinc-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Coconut Oil (Off-White / Cream) */}
          <Link
            href="/products/coconut-oil"
            className="group bg-[#F7F6F4] text-zinc-900 rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden border border-zinc-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-brand-brown text-white font-mono text-[11px] font-bold tracking-wider uppercase">
                  Consolidated Export
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-zinc-950">
                COCONUT OIL
              </h3>

              <div className="space-y-2 text-xs sm:text-sm font-outfit text-zinc-700 leading-relaxed">
                <p className="text-xs text-zinc-500 font-medium">
                  Made by coastal women cooperatives,
                </p>
                <p className="font-bold text-zinc-900 uppercase font-oswald tracking-wide">
                  100% EXTRA VIRGIN COLD-PRESSED BOTANICAL OIL.
                </p>
                <p className="text-xs text-zinc-600">
                  Ready for consolidated maritime freight directly to European and North American ports.
                </p>
              </div>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/3.png"
                alt="Virgin Coconut Oil"
                width={240}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-zinc-200 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-brown font-bold">
                Explore Coconut Oil
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-brown group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Black Soap (Terracotta Red) */}
          <Link
            href="/products/black-soap"
            className="group bg-[#8B3A2B] text-white rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white text-brand-red font-mono text-[11px] font-bold tracking-wider uppercase">
                  Export Ready
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-white">
                BLACK SOAP
              </h3>

              <p className="text-sm font-outfit text-white/90 leading-relaxed">
                Traditional African black soap formulated from organic shea butter and plant ashes. Available in bulk raw blocks or private label bars.
              </p>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/4.png"
                alt="Traditional African Black Soap"
                width={250}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/20 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-amber font-bold">
                Explore Black Soap
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
