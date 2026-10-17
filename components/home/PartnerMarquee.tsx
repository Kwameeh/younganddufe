"use client";

import React from "react";

export function PartnerMarquee() {
  const partners = [
    {
      name: "NOË",
      render: (
        <span className="font-oswald font-black text-3xl tracking-tight text-[#E04B26]">
          NOË
        </span>
      ),
    },
    {
      name: "Sofi Tucker Foundation",
      render: (
        <div className="flex items-center gap-2">
          <span className="text-3xl text-[#2F93C6] font-serif font-bold">§</span>
          <span className="font-outfit font-bold text-xl text-[#396985] tracking-tight leading-tight text-left">
            Sofi Tucker <br />
            <span className="text-xs font-normal tracking-widest uppercase text-zinc-500">
              Foundation
            </span>
          </span>
        </div>
      ),
    },
    {
      name: "L'OCCITANE EN PROVENCE",
      render: (
        <div className="text-center">
          <span className="font-serif font-black text-2xl tracking-[0.2em] text-zinc-900 block">
            L&apos;OCCITANE
          </span>
          <span className="font-serif text-[10px] tracking-[0.3em] text-zinc-600 uppercase block -mt-1">
            EN PROVENCE
          </span>
        </div>
      ),
    },
    {
      name: "Unilever",
      render: (
        <div className="flex flex-col items-center">
          <svg className="w-10 h-10 fill-[#1F36C7]" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
          </svg>
          <span className="text-[11px] font-sans font-bold text-[#1F36C7] tracking-wider mt-0.5">
            Unilever
          </span>
        </div>
      ),
    },
    {
      name: "A Rocha Ghana",
      render: (
        <div className="flex items-center gap-2">
          <span className="text-2xl text-[#1E96D3]">🐘</span>
          <span className="font-sans font-bold text-sm text-[#1E96D3] tracking-wider uppercase leading-tight text-left">
            GHANA <br />
            <span className="text-lg text-zinc-800">ROCHA</span>
          </span>
        </div>
      ),
    },
    {
      name: "Forestry Commission",
      render: (
        <div className="flex items-center gap-2">
          <span className="text-3xl text-emerald-700 font-bold">🌲</span>
          <div className="text-left font-sans">
            <span className="font-bold text-sm text-emerald-800 uppercase block tracking-wider leading-none">
              Forestry Commission
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Ghana Wildlife Division
            </span>
          </div>
        </div>
      ),
    },
    {
      name: "ESTĒE LAUDER",
      render: (
        <span className="font-serif font-light text-2xl tracking-[0.3em] text-zinc-800">
          ESTĒE LAUDER
        </span>
      ),
    },
  ];

  return (
    <section className="py-14 bg-white border-y border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald">
          Our Partners
        </h3>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 lg:gap-24 whitespace-nowrap">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-16 lg:gap-24 opacity-85 hover:opacity-100 transition-opacity cursor-pointer shrink-0"
            >
              <div>{partner.render}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
