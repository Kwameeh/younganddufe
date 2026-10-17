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
            Shea Butter Export Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-oswald uppercase font-black tracking-tight text-brand-brown leading-tight mb-4">
            Our Hand-Crafted Shea Butter Grades
          </h2>
          <p className="text-zinc-600 font-outfit text-base lg:text-lg leading-relaxed">
            Specialized exclusively in turnkey Shea Butter processing and maritime export. We offer tailored physical refining, fractionation, and traditional formulations to meet your brand&apos;s exact cosmetic specifications.
          </p>
        </div>

        {/* 4 Signature Shea Butter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Unrefined Shea Butter (Black) */}
          <Link
            href="/products/shea-butter"
            className="group bg-[#000000] text-white rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-xl relative overflow-hidden border-2 border-brand-amber/40"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-brand-amber text-zinc-950 font-mono text-[11px] font-bold tracking-wider uppercase">
                  Flagship Grade A
                </span>
                <span className="text-[11px] font-mono text-white/70 uppercase">
                  Raw &amp; Unrefined
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
                UNREFINED SHEA
              </h3>

              <div className="space-y-1.5 text-sm font-outfit text-white/90">
                <p className="font-semibold text-brand-amber">Grade A Cosmetic &amp; Food Grade</p>
                <p>100% Raw Wild-Harvested Karité</p>
                <p>Rich in Natural Vitamins A, E &amp; F</p>
                <p className="text-xs text-white/70 pt-1">
                  Exported in 25kg pails, 190kg steel drums &amp; 20ft/40ft containers directly from Port of Tema.
                </p>
              </div>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/20 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-amber font-semibold">
                Explore Unrefined Shea
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Shea Butter Olein / Liquid Shea Oil (Amber / Yellow) */}
          <Link
            href="/products/shea-butter#export-specs"
            className="group bg-[#E4A836] text-zinc-950 rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-zinc-950 text-white font-mono text-[11px] font-bold tracking-wider uppercase">
                  Liquid Fraction
                </span>
                <span className="text-[11px] font-mono text-zinc-900/80 uppercase font-semibold">
                  Cosmetic Active
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-zinc-950">
                LIQUID SHEA OIL
              </h3>

              <div className="space-y-1 text-sm font-outfit text-zinc-900 font-medium">
                <p className="font-bold">Shea Olein Botanical Oil</p>
                <p>Non-Comedogenic (Fast Dermal Absorption)</p>
                <p>High Concentration of Phytosterols</p>
                <p className="text-xs text-zinc-800 pt-2 opacity-90">
                  Ideal for premium facial serums, hair oils, and luxury lotions. Exported in drums and IBC totes.
                </p>
              </div>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/2.png"
                alt="Liquid Shea Butter Olein"
                width={240}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-black/15 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-zinc-950 font-bold">
                Explore Liquid Shea Oil
              </span>
              <ArrowUpRight className="w-5 h-5 text-zinc-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Refined & Deodorized Shea Butter (Off-White / Cream) */}
          <Link
            href="/products/shea-butter#export-specs"
            className="group bg-[#F7F6F4] text-zinc-900 rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden border border-zinc-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-brand-brown text-white font-mono text-[11px] font-bold tracking-wider uppercase">
                  Steam Deodorized
                </span>
                <span className="text-[11px] font-mono text-zinc-600 uppercase font-semibold">
                  Pure White Grade
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-zinc-950">
                REFINED SHEA
              </h3>

              <div className="space-y-2 text-xs sm:text-sm font-outfit text-zinc-700 leading-relaxed">
                <p className="text-xs text-zinc-500 font-medium">
                  Physical Steam Refined (Zero Solvents),
                </p>
                <p className="font-bold text-zinc-900 uppercase font-oswald tracking-wide">
                  NEUTRAL SCENT AND CONSISTENT COLOR FOR SENSITIVE FORMULATIONS.
                </p>
                <p className="text-xs text-zinc-600">
                  Ready for export in 25kg vacuum-sealed cartons and 190kg steel drums with full COA parameters.
                </p>
              </div>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/3.png"
                alt="Steam Refined Deodorized Shea Butter"
                width={240}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-zinc-200 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-brown font-bold">
                Explore Refined Shea
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-brown group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Shea-Enriched African Black Soap (Terracotta Red) */}
          <Link
            href="/products/shea-butter#export-specs"
            className="group bg-[#8B3A2B] text-white rounded-3xl p-7 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between transition-all duration-300 hover:scale-[0.98] shadow-lg relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white text-brand-red font-mono text-[11px] font-bold tracking-wider uppercase">
                  Shea Formulation
                </span>
                <span className="text-[11px] font-mono text-white/80 uppercase">
                  Export Ready
                </span>
              </div>

              <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-3 text-white">
                SHEA BLACK SOAP
              </h3>

              <p className="text-sm font-outfit text-white/90 leading-relaxed">
                Traditional African black soap handcrafted with a 50%+ pure organic shea butter base and plantain / cocoa pod ash. Available in bulk blocks and extruded bars.
              </p>
            </div>

            {/* Packaging Image */}
            <div className="my-auto py-4 relative flex items-center justify-center">
              <Image
                src="/cards/4.png"
                alt="Traditional African Shea Black Soap"
                width={250}
                height={280}
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between border-t border-white/20 mt-4">
              <span className="text-xs uppercase font-oswald tracking-widest text-brand-amber font-bold">
                Explore Shea Black Soap
              </span>
              <ArrowUpRight className="w-5 h-5 text-brand-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
