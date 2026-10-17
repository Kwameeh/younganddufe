"use client";

import React from "react";
import Image from "next/image";

export function SDGGrid() {
  const sdgs = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <section id="sdg" className="py-20 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
            Global Agenda Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald uppercase font-black tracking-tight text-brand-red">
            United Nations Sustainable Development Goals
          </h2>
          <p className="text-zinc-600 font-outfit text-sm mt-3">
            Our direct trade, regenerative agriculture, and community governance
            directly advance the UN 2030 Sustainable Development agenda.
          </p>
        </div>

        {/* 18 Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-4 items-center justify-items-center">
          {sdgs.map((num) => (
            <div
              key={num}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:scale-105 transition-all duration-300 border border-zinc-100"
            >
              <Image
                src={`/sdg/${num}.png`}
                alt={`UN Sustainable Development Goal ${num}`}
                fill
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
