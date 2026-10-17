"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Trees, Sparkles, Building2, CheckCircle2 } from "lucide-react";

interface PartnerInfo {
  name: string;
  category: "Commercial Archetype" | "Certification Framework" | "Ecosystem Stewardship";
  focus: string;
  cooperativeRegion: string;
  status: string;
  description: string;
}

const dummyPartnersList: PartnerInfo[] = [
  {
    name: "AURA BOTANICA FORMULATIONS",
    category: "Commercial Archetype",
    focus: "Certified Organic Handcrafted Shea Butter",
    cooperativeRegion: "Wa & Northern Region, Ghana",
    status: "Pilot Corridor",
    description:
      "Illustrative European skincare archetype testing small-batch Grade-A raw unrefined karité butter with full GC-MS fatty acid documentation.",
  },
  {
    name: "VERDANT NORDIC SKINCARE",
    category: "Commercial Archetype",
    focus: "Virgin Coconut Oil & Liquid Shea Olein",
    cooperativeRegion: "Western Region & Northern Belt",
    status: "Prospective Client",
    description:
      "Illustrative clean beauty archetype integrating liquid shea fractions and ethical cold-pressed coconut oil into sensitive-skin formulations.",
  },
  {
    name: "LUMINA ACTIVE DERMACEUTICALS",
    category: "Commercial Archetype",
    focus: "High-Triterpene Karité Extract & Phytoactives",
    cooperativeRegion: "Upper East Savannah Belt",
    status: "Research Pilot",
    description:
      "Illustrative clinical skincare archetype sourcing premium wild shea nuts with elevated unsaponifiables for anti-inflammatory cosmetic lines.",
  },
  {
    name: "TERRA DERMA PHYTOLABS",
    category: "Commercial Archetype",
    focus: "Shea-Enriched African Black Soap",
    cooperativeRegion: "Upper East Region, Ghana",
    status: "Contract Pilot",
    description:
      "Illustrative artisanal brand archetype piloting direct procurement of traditional plant-ash soap bases hand-crafted by cooperative women.",
  },
  {
    name: "SOL BOTANICALS COLLECTIVE",
    category: "Commercial Archetype",
    focus: "Fair-Trade Cold-Pressed Botanicals",
    cooperativeRegion: "Mole Ecological Corridor",
    status: "Prospective Brand",
    description:
      "Illustrative North American body-care brand developing ethical origin-traced body butter formulas directly from northern Ghanaian villages.",
  },
  {
    name: "SAVANNAH ATELIER AMSTERDAM",
    category: "Commercial Archetype",
    focus: "Steam-Deodorized Cosmetic Grade Shea",
    cooperativeRegion: "Tamale Processing Center",
    status: "European Hub Pilot",
    description:
      "Illustrative luxury fragrance & cosmetics archetype utilizing steam-deodorized, chemical-free shea dispatched through our European logistics pipeline.",
  },
  {
    name: "GEPA EXPORT COMPLIANCE",
    category: "Certification Framework",
    focus: "Phytosanitary & Export Quality Assurance",
    cooperativeRegion: "National Export Corridors",
    status: "Trade Standard",
    description:
      "Structured alignment with Ghana Export Promotion Authority frameworks ensuring full phytosanitary clearance, COA certification, and container-load trace integrity.",
  },
  {
    name: "ECOCERT REGENERATIVE STANDARD",
    category: "Certification Framework",
    focus: "Wild-Harvested Organic Certification",
    cooperativeRegion: "Savannah Parkland Zones",
    status: "Audit Blueprint",
    description:
      "Auditing architecture aligning women's harvesting zones with strict pesticide-free, wild-collection criteria and regenerative soil stewardship protocols.",
  },
  {
    name: "SAVANNAH BIODIVERSITY ACCORD",
    category: "Ecosystem Stewardship",
    focus: "Parkland Protection & Anti-Deforestation",
    cooperativeRegion: "Mole & Wechiau Reserves",
    status: "Conservation Model",
    description:
      "Community-led resource stewardship model protecting ancient shea parklands from charcoal logging while creating economic incentives for wildlife conservation.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#FAF6F0] border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-amber/15 text-brand-brown text-xs font-semibold tracking-widest uppercase mb-6 border border-brand-amber/30">
              <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
              <span>Commercial Network & Sourcing Corridors</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              Partnership & Brand Supply Corridors
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              We design dedicated, fully traceable ethical supply corridors for cosmetic formulators,
              clean beauty innovators, and commercial distributors seeking unadulterated West African botanicals.
            </p>

            {/* Illustrative Notice */}
            <div className="inline-block bg-white/80 backdrop-blur-sm border border-zinc-200/80 rounded-2xl px-6 py-3 text-xs font-mono text-zinc-600 max-w-xl mx-auto">
              <span className="text-brand-red font-bold uppercase tracking-wider block mb-0.5">
                ● Prospective Client Archetypes & Pilot Frameworks
              </span>
              The profiles below illustrate our target commercial partner typologies and quality control frameworks as we open founding brand agreements.
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dummyPartnersList.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF6F0]/60 rounded-3xl p-8 border border-zinc-200/80 hover:border-brand-amber hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-zinc-700">
                        {partner.category}
                      </span>
                      <span className="text-xs font-mono uppercase text-brand-amber font-bold">
                        {partner.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown tracking-tight mb-2 group-hover:text-brand-amber transition-colors">
                      {partner.name}
                    </h3>

                    <p className="text-xs font-oswald uppercase tracking-wider text-brand-caramel font-semibold mb-4">
                      {partner.focus}
                    </p>

                    <p className="text-zinc-600 font-outfit text-sm leading-relaxed mb-6">
                      {partner.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200/80 text-xs font-outfit text-zinc-500 flex items-center justify-between">
                    <span>Scope: {partner.cooperativeRegion}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Sourcing Partnership Works */}
        <section className="py-20 bg-[#FAF6F0] border-t border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-brand-red block mb-2">
                Turnkey Corridor Model
              </span>
              <h2 className="text-3xl lg:text-5xl font-oswald uppercase font-bold text-brand-brown tracking-tight mb-4">
                How We Build Your Dedicated Supply Line
              </h2>
              <p className="text-zinc-600 font-outfit text-sm lg:text-base">
                From initial lab sample testing to 20ft container logistics, we manage the complete cooperative procurement journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                <span className="text-2xl font-oswald font-black text-brand-amber block mb-4">01</span>
                <h4 className="font-oswald uppercase font-bold text-xl text-brand-brown mb-2">
                  Sample & Spec Formulation
                </h4>
                <p className="text-zinc-600 text-sm font-outfit leading-relaxed">
                  Request Grade-A raw, deodorized, or liquid shea samples dispatched from our European hub with Certificate of Analysis (COA) and microbiological test reports.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                <span className="text-2xl font-oswald font-black text-brand-amber block mb-4">02</span>
                <h4 className="font-oswald uppercase font-bold text-xl text-brand-brown mb-2">
                  Cooperative Allocation
                </h4>
                <p className="text-zinc-600 text-sm font-outfit leading-relaxed">
                  Lock in seasonal harvest contracts directly connected to democratic women&apos;s cooperatives in northern Ghana, guaranteeing fair living prices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                <span className="text-2xl font-oswald font-black text-brand-amber block mb-4">03</span>
                <h4 className="font-oswald uppercase font-bold text-xl text-brand-brown mb-2">
                  Freight & Documentation
                </h4>
                <p className="text-zinc-600 text-sm font-outfit leading-relaxed">
                  Full export container clearance from Port of Tema or rapid pallet fulfillment across Europe and North America with complete phytosanitary compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Section */}
        <section className="py-24 bg-brand-brown text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-brand-amber/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl relative z-10">
            <Trees className="w-12 h-12 text-brand-amber mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight mb-4 text-white">
              Become A Founding Brand Partner
            </h2>
            <p className="text-white/80 font-outfit text-base leading-relaxed mb-8">
              Whether you are an established international cosmetic brand or an emerging clean formulation studio,
              Young and Dufe can establish a verified, traceable cooperative sourcing corridor tailored precisely to your chemical and physical specifications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-amber text-zinc-950 font-oswald uppercase tracking-wider font-bold text-base hover:bg-white transition-colors shadow-lg"
              >
                <span>Initiate Partner Inquiry</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products/shea-butter"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-oswald uppercase tracking-wider font-bold text-base hover:bg-white/10 transition-colors"
              >
                <span>Explore Technical Specs</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
