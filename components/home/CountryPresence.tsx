"use client";

import React from "react";

interface CountryData {
  id: string;
  name: string;
  localTitle: string;
  womenCount: string;
  keyProducts: string;
  ecosystem: string;
  svgPath: string;
}

const countries: CountryData[] = [
  {
    id: "ghana",
    name: "GHANA",
    localTitle: "Origin Hub & Headquarters",
    womenCount: "28,400+ Women",
    keyProducts: "Raw Unrefined Shea, Steam-Refined Shea, Shea Black Soap",
    ecosystem: "Mole Parkland & Ankasa-Tano Rainforest",
    svgPath:
      "M40 10 L60 12 L75 25 L80 50 L75 80 L65 95 L50 98 L35 92 L25 80 L20 60 L28 40 L32 20 Z",
  },
  {
    id: "ivory-coast",
    name: "IVORY COAST",
    localTitle: "Coastal Agroforestry Hub",
    womenCount: "8,600+ Women",
    keyProducts: "Certified Organic Wild-Harvested Shea",
    ecosystem: "Primate Corridors & Littoral Mangroves",
    svgPath:
      "M30 15 L70 18 L85 35 L80 75 L70 95 L40 92 L20 85 L15 50 L22 30 Z",
  },
  {
    id: "burkina-faso",
    name: "BURKINA FASO",
    localTitle: "Savannah Collection Zone",
    womenCount: "6,200+ Women",
    keyProducts: "Wild-Harvested Karité (Shea)",
    ecosystem: "Protected Sahelian Parkland Habitats",
    svgPath:
      "M20 30 L50 15 L85 25 L92 45 L80 75 L55 85 L35 70 L15 55 Z",
  },
  {
    id: "mali",
    name: "MALI",
    localTitle: "Dryland Resilience Initiative",
    womenCount: "4,354+ Women",
    keyProducts: "Ancient Parkland Shea Nuts",
    ecosystem: "Sahelian Green Wall Agroforestry",
    svgPath:
      "M35 10 L80 15 L95 40 L70 70 L85 95 L50 85 L30 65 L20 40 Z",
  },
];

export function CountryPresence() {
  return (
    <section id="countries" className="py-24 bg-[#1C1612] text-white border-y border-[#C98A2C]/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-amber font-oswald block mb-3">
            Trans-African Footprint
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight text-white mb-6">
            Four West African Nations. One Living Network.
          </h2>
          <p className="text-white/80 font-outfit text-base lg:text-lg">
            Our cooperative model spans the entire West African savannah belt,
            ensuring steady commercial purchasing power for women artisans across
            national borders.
          </p>
        </div>

        {/* 4 Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, idx) => (
            <div
              key={c.id}
              className="bg-black/20 backdrop-blur-sm border border-white/15 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:bg-black/35 hover:border-brand-amber/50 hover:-translate-y-1.5"
            >
              <div>
                {/* Header & Map Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-brand-amber font-bold">
                    0{idx + 1}
                  </span>

                  {/* Stylized vector map silhouette */}
                  <svg
                    viewBox="0 0 100 110"
                    className="w-16 h-16 fill-white/10 stroke-brand-amber/80 stroke-2 drop-shadow-sm"
                  >
                    <path d={c.svgPath} />
                  </svg>
                </div>

                <h3 className="text-3xl font-oswald uppercase font-bold tracking-tight mb-1 text-white">
                  {c.name}
                </h3>
                <p className="text-xs text-brand-amber font-oswald uppercase tracking-wider mb-6">
                  {c.localTitle}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-outfit">
                  <div>
                    <span className="text-xs text-white/60 block uppercase font-oswald tracking-wider">
                      Network Scope
                    </span>
                    <span className="text-lg font-bold text-white font-oswald">
                      {c.womenCount}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-white/60 block uppercase font-oswald tracking-wider">
                      Key Botanicals
                    </span>
                    <span className="text-white/90 text-xs">
                      {c.keyProducts}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-white/60 block uppercase font-oswald tracking-wider">
                      Conservation Landscape
                    </span>
                    <span className="text-white/90 text-xs">
                      {c.ecosystem}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-oswald uppercase tracking-wider">
                <span>Certified Fair For Life</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
