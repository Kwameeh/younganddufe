"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HighlightsBento() {
  return (
    <section id="highlights" className="py-24 bg-[#F8F2EC]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            Regenerative Infrastructure
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald uppercase font-black tracking-tight text-brand-red leading-tight">
            Ecological Highlights & Breakthroughs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Large Featured Card (2x2 / 8 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[440px] lg:min-h-[540px] group shadow-lg flex flex-col justify-end p-8">
            <Image
              src="/forest.jpg"
              alt="Protecting 16 Million Women and 8 Million Trees"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 text-white max-w-xl">
              <span className="px-3 py-1 rounded-full bg-brand-amber text-black text-xs font-bold uppercase tracking-wider font-oswald inline-block mb-3">
                $15M Global Partnership
              </span>
              <h3 className="text-2xl lg:text-4xl font-oswald uppercase font-bold tracking-tight leading-tight mb-4">
                Building A Blueprint That Protects 16 Million Women & 8 Million Trees
              </h3>
              <p className="text-white/80 font-outfit text-sm lg:text-base leading-relaxed mb-6">
                Our multi-stakeholder savannah restoration model protects continuous wildlife corridors while expanding certified organic collection zones.
              </p>
              <Link
                href="/impact/sustainability"
                className="inline-flex items-center gap-2 text-white font-oswald uppercase text-sm tracking-wider hover:text-brand-amber transition-colors"
              >
                <span>Read Full Blueprint</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Stacked Column: 2 Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Card 2: Net Zero Water */}
            <div className="relative rounded-3xl overflow-hidden min-h-[250px] group shadow-lg flex flex-col justify-end p-6 flex-1">
              <Image
                src="/net-zero-water.jpg"
                alt="Net Zero Fresh Water Footprint"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white">
                <span className="text-xs uppercase tracking-widest text-[#8BC832] font-bold font-oswald block mb-1">
                  Water Stewardship
                </span>
                <h4 className="text-xl lg:text-2xl font-oswald uppercase font-bold tracking-tight mb-2">
                  Net Zero Fresh Water Footprint
                </h4>
                <p className="text-white/80 font-outfit text-xs leading-relaxed">
                  Closed-loop solar rainwater recycling systems installed across 30 processing centers.
                </p>
              </div>
            </div>

            {/* Card 3: Clean Energy Made From Shea Waste */}
            <div className="relative rounded-3xl overflow-hidden min-h-[250px] group shadow-lg flex flex-col justify-end p-6 flex-1">
              <Image
                src="/shea-waste.jpg"
                alt="Clean Energy Made From Shea Waste"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white">
                <span className="text-xs uppercase tracking-widest text-brand-amber font-bold font-oswald block mb-1">
                  Circular Chemistry
                </span>
                <h4 className="text-xl lg:text-2xl font-oswald uppercase font-bold tracking-tight mb-2">
                  Clean Energy Made From Shea Waste
                </h4>
                <p className="text-white/80 font-outfit text-xs leading-relaxed">
                  Compressing byproduct cake into smokeless fuel briquettes that halt savannah deforestation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
