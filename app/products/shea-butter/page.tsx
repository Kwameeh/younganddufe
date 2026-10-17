"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";

export default function SheaButterPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const sourcingStages = [
    {
      step: "01",
      title: "Reserved Collection Areas",
      image: "/data/forest.jpg",
      description:
        "Harvesting occurs solely from wild-grown parkland shea trees across protected savannah landscapes. Trees are GPS-mapped to guarantee zero clearcutting, organic wild-collection certification, and EUDR compliance.",
    },
    {
      step: "02",
      title: "Autonomous Women Cooperatives",
      image: "/data/women.jpeg",
      description:
        "Over 47,000 rural women gather the fallen mature nuts. The cooperatives operate with self-governance, managing inventory and receiving direct organic price premiums upfront before processing.",
    },
    {
      step: "03",
      title: "Eco-Friendly Processing Hubs",
      image: "/data/process.jpeg",
      description:
        "Nuts are traditionally parboiled and sun-dried before mechanical grinding and gentle hand-kneading. The processing centers run entirely on clean bio-briquettes made from recycled shea-cake waste, cutting firewood use by 89%.",
    },
    {
      step: "04",
      title: "Maritime Export & Global Hub Delivery",
      image: "/data/euhub.jpg",
      description:
        "We execute turnkey export shipping: 20ft & 40ft full container loads (FCL) dispatched directly from Port of Tema (Ghana) with phytosanitary and EUDR compliance dossiers, alongside rapid pallet and drum distribution from our European logistics hub in Halfweg, Netherlands.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Product Hero Banner */}
        <section className="relative w-full min-h-[500px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-black pt-20">
          <Image
            src="/products/sheabutter.jpg"
            alt="Handcrafted Shea Butter Production & Export"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 text-center max-w-4xl text-white">
            <span className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-[0.25em] font-bold block mb-3">
              Grade A Cosmetic Botanical · Turnkey Export
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight leading-tight mb-6">
              Turnkey Processing &amp; <br />
              <span className="text-brand-amber">Shea Butter Export</span>
            </h1>

            <p className="text-white/85 font-outfit text-base lg:text-lg max-w-2xl mx-auto mb-8">
              We manage the entire supply chain for you: wild savannah nut collection, eco-friendly processing, lab certification, bulk packing, and container export directly to your destination port worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-brand-amber text-zinc-950 font-oswald uppercase tracking-wider font-bold hover:bg-white transition-colors"
              >
                Request Export Quote &amp; Samples
              </Link>
              <a
                href="#export-specs"
                className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-oswald uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Export Specs &amp; Logistics
              </a>
            </div>
          </div>
        </section>

        {/* 2. Pillars of Sourcing Bar */}
        <section className="py-12 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-brand-accent border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-red mb-1">
                  16 Million
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Livelihood Backbone
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Rural women whose livelihoods depend directly on wild shea gathering.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-accent border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-brown mb-1">
                  Cooperative
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Community Ownership
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Processing centers are legally owned and democratically governed by local women.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-accent border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-green mb-1">
                  100% Wild
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Parkland Integrity
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Zero monoculture plantations; wild collection preserves ancient savannah biodiversity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-accent border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-[#F1BA40] mb-1">
                  -89% Firewood
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Circular Fuel
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Recycling shea-cake byproduct into smokeless briquettes that replace tree cutting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Specifications Table */}
        <section id="export-specs" className="py-20 bg-brand-accent">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-zinc-200 mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 mb-8 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-1">
                    Technical Specifications
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-oswald uppercase font-bold text-brand-brown">
                    Shea Butter Specification Sheet
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                    Grade A Cosmetic
                  </span>
                  <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-mono font-bold border border-amber-200">
                    ECOCERT
                  </span>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm font-outfit">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">INCI Name:</span>
                    <span className="font-semibold text-zinc-900">
                      Butyrospermum Parkii Butter
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">CAS Number:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      91080-23-8
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">EINECS Number:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      293-515-7
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Extraction Method:</span>
                    <span className="font-semibold text-zinc-900">
                      Traditional Handcrafted / Cold Mechanical Press
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Appearance / Color:</span>
                    <span className="font-semibold text-zinc-900">
                      Ivory Cream (Unrefined) / White (Steam-Refined)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Melting Point:</span>
                    <span className="font-semibold text-zinc-900">
                      31°C – 38°C
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Shelf Life:</span>
                    <span className="font-semibold text-zinc-900">
                      24 Months (Cool, Dark Storage)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Certifications:</span>
                    <span className="font-semibold text-zinc-900 text-right">
                      ECOCERT Organic, Fair For Life, Kosher, Halal
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Full Technical Dossier (COA, MSDS, Allergen Statement) Available</span>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-brand-brown text-white font-oswald uppercase text-xs tracking-wider hover:bg-black transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Request TDS &amp; COA</span>
                </Link>
              </div>
            </div>

            {/* Export Packaging & Logistics Specifications */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Packaging */}
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block mb-2">
                    Bulk Packaging Formats
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Pails, Drums &amp; FCL
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-outfit text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-2" />
                      <span><strong>25kg Export Pails:</strong> Food-grade polyethylene liners with hermetic seals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-2" />
                      <span><strong>190kg Steel Drums:</strong> Internal food-grade lacquer coating.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-2" />
                      <span><strong>20ft / 40ft Containers:</strong> 18.5 – 24.5 MT bulk or palletized.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-6 border-t border-zinc-100 text-[11px] font-mono text-zinc-500 uppercase">
                  Tamper-Evident Export Seals
                </div>
              </div>

              {/* Incoterms */}
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block mb-2">
                    Maritime Logistics
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Incoterms &amp; Freight
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-outfit text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0 mt-2" />
                      <span><strong>FOB Port of Tema:</strong> Direct maritime loading from Ghana with swift clearance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0 mt-2" />
                      <span><strong>CIF Worldwide:</strong> Delivered to Rotterdam, Hamburg, Antwerp, Newark, Long Beach, etc.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0 mt-2" />
                      <span><strong>DDP Europe:</strong> Dispatched from Halfweg logistics warehouse.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-6 border-t border-zinc-100 text-[11px] font-mono text-zinc-500 uppercase">
                  Direct Maritime Transit
                </div>
              </div>

              {/* Compliance */}
              <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider block mb-2">
                    Export Dossier
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Customs Compliance
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-outfit text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                      <span><strong>Phytosanitary Certificate:</strong> Issued by Ghana Ministry of Food &amp; Agriculture.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                      <span><strong>EUDR Shapefiles:</strong> Verified zero-deforestation parkland polygons.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                      <span><strong>ECOCERT Organic TC:</strong> Transaction certificates attached to Bill of Lading.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-6 border-t border-zinc-100 text-[11px] font-mono text-zinc-500 uppercase">
                  100% Import Ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Direct Sourcing Model Breakdown (Tabs) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
                Origin Architecture
              </span>
              <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                Direct Sourcing Pipeline
              </h2>
              <p className="text-zinc-600 font-outfit text-base mt-4">
                Explore the four interconnected stages that make Young and Dufe
                shea butter the gold standard in traceability and social impact.
              </p>
            </div>

            {/* Stages Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {sourcingStages.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3 rounded-xl font-oswald uppercase text-sm tracking-wider transition-all cursor-pointer ${
                    activeTab === idx
                      ? "bg-brand-brown text-white shadow-md"
                      : "bg-brand-accent text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  <span className="opacity-60 mr-2 font-mono">{stage.step}</span>
                  {stage.title}
                </button>
              ))}
            </div>

            {/* Active Stage Card */}
            <div className="max-w-4xl mx-auto bg-brand-accent rounded-3xl overflow-hidden shadow-lg border border-zinc-200 grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto min-h-[300px]">
                <Image
                  src={sourcingStages[activeTab].image}
                  alt={sourcingStages[activeTab].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest block mb-2">
                    Stage {sourcingStages[activeTab].step}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    {sourcingStages[activeTab].title}
                  </h3>
                  <p className="text-zinc-700 font-outfit text-sm lg:text-base leading-relaxed">
                    {sourcingStages[activeTab].description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-300/60 flex items-center justify-between text-xs text-zinc-600 font-outfit">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Verified Traceable
                  </span>
                  <span className="font-mono font-semibold">
                    100% Community Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
