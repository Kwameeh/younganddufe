"use client";

import React from "react";

export function PartnerMarquee() {
  const dummyPartners = [
    {
      name: "Aura Botanica",
      type: "Clean Formulation Labs",
      render: (
        <div className="flex flex-col items-center">
          <span className="font-serif font-bold text-2xl tracking-[0.25em] text-zinc-900 uppercase">
            Aura Botanica
          </span>
          <span className="text-[9px] font-mono tracking-[0.35em] text-brand-amber uppercase -mt-0.5">
            Formulation Labs
          </span>
        </div>
      ),
    },
    {
      name: "Verdant Organics",
      type: "Nordic Skincare Co.",
      render: (
        <div className="flex items-center gap-2">
          <span className="text-2xl text-brand-green font-serif font-black">✦</span>
          <div className="text-left font-outfit">
            <span className="font-bold text-lg text-zinc-900 tracking-tight leading-none block">
              VERDANT
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase block">
              Organics Co.
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "Lumina Labs",
      type: "Cosmetic Active Research",
      render: (
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full border-2 border-brand-amber flex items-center justify-center">
            <span className="text-xs font-serif font-bold text-brand-amber">L</span>
          </div>
          <span className="font-oswald font-black text-2xl tracking-widest text-zinc-900 uppercase">
            LUMINA <span className="text-brand-red">LABS</span>
          </span>
        </div>
      ),
    },
    {
      name: "Terra Derma",
      type: "Botanical Biology",
      render: (
        <div className="text-center font-outfit">
          <span className="font-extrabold text-xl tracking-[0.3em] text-zinc-800 uppercase block">
            TERRA·DERMA
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase block">
            Phyto Care
          </span>
        </div>
      ),
    },
    {
      name: "Sol Botanicals",
      type: "Luxury Body Formulations",
      render: (
        <div className="flex items-center gap-2">
          <span className="text-2xl text-amber-500">☼</span>
          <span className="font-serif italic font-bold text-2xl text-zinc-900 tracking-wide">
            Sol Botanicals
          </span>
        </div>
      ),
    },
    {
      name: "Nectar Dermatology",
      type: "Clinical Botanical Care",
      render: (
        <div className="flex items-baseline gap-1 font-outfit">
          <span className="text-2xl font-black tracking-tight text-zinc-900">
            NECTAR
          </span>
          <span className="text-xs font-mono text-brand-green uppercase tracking-wider font-semibold">
            [DERMA]
          </span>
        </div>
      ),
    },
    {
      name: "Savannah Atelier",
      type: "Artisanal Formulation House",
      render: (
        <div className="text-center">
          <span className="font-oswald uppercase font-black text-2xl tracking-[0.2em] text-zinc-900 block">
            SAVANNAH ATELIER
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase block">
            Amsterdam · Paris
          </span>
        </div>
      ),
    },
    {
      name: "Flora Ethica",
      type: "Pure Plant Chemistry",
      render: (
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green inline-block" />
          <span className="font-serif font-semibold text-xl tracking-[0.2em] text-zinc-900 uppercase">
            FLORA ETHICA
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-14 bg-white border-y border-zinc-200/80 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase block mb-1">
          Illustrative Brand Network
        </span>
        <h3 className="text-xs uppercase font-bold tracking-[0.25em] text-zinc-600 font-oswald">
          Commercial Formulators & Clean Beauty Archetypes
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 lg:gap-24 whitespace-nowrap">
          {dummyPartners.concat(dummyPartners).map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-16 lg:gap-24 opacity-80 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
              title={`${partner.name} - ${partner.type}`}
            >
              <div>{partner.render}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
