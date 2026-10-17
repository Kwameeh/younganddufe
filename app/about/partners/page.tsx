"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Trees } from "lucide-react";

interface PartnerInfo {
  name: string;
  category: "Commercial" | "Conservation" | "Foundation";
  focus: string;
  cooperativeRegion: string;
  tenure: string;
  description: string;
}

const partnersList: PartnerInfo[] = [
  {
    name: "L'OCCITANE EN PROVENCE",
    category: "Commercial",
    focus: "Certified Organic Handcrafted Shea Butter",
    cooperativeRegion: "Wa & Northern Region, Ghana",
    tenure: "15+ Years",
    description:
      "A long-standing ethical partnership supporting women's cooperative literacy, health clinics, and multi-year supply contracts.",
  },
  {
    name: "THE BODY SHOP",
    category: "Commercial",
    focus: "Community Fair Trade Shea & Black Soap",
    cooperativeRegion: "Tamale, Northern Ghana",
    tenure: "18+ Years",
    description:
      "Pioneered our initial Community Trade purchasing framework, providing fair upfront prices and building cooperative civic centers.",
  },
  {
    name: "UNILEVER / PRESTIGE BEAUTY",
    category: "Commercial",
    focus: "Virgin Coconut Oil & Raw Shea Butter",
    cooperativeRegion: "Western Region & Côte d'Ivoire",
    tenure: "8+ Years",
    description:
      "Scaling certified ethical sourcing into high-performance global cosmetic formulas while supporting EUDR deforestation checks.",
  },
  {
    name: "NOË NATURAL COSMETICS",
    category: "Commercial",
    focus: "Cold-Pressed Baobab & Organic Shea",
    cooperativeRegion: "Upper East Region, Ghana",
    tenure: "6+ Years",
    description:
      "Collaborating on high-potency antioxidant serum ingredients sourced directly in partnership with the Widows and Orphans Movement.",
  },
  {
    name: "SOFI TUCKER FOUNDATION",
    category: "Foundation",
    focus: "Women's Economic Self-Governance & Micro-Grants",
    cooperativeRegion: "Trans-Savannah Belt",
    tenure: "12+ Years",
    description:
      "Funding cooperative-owned mechanized shellers, solar water boreholes, and enterprise management courses for rural women.",
  },
  {
    name: "SUNDIAL BRANDS",
    category: "Commercial",
    focus: "Ethical African Botanicals & Shea Sourcing",
    cooperativeRegion: "Ghana & Burkina Faso",
    tenure: "14+ Years",
    description:
      "Supporting regenerative supply lines and establishing clean eco-facilities across our West African cooperative network.",
  },
  {
    name: "WAPCA (West African Primate Action)",
    category: "Conservation",
    focus: "Canopy & Primate Corridor Conservation",
    cooperativeRegion: "Ankasa-Tano Rainforest, Ghana",
    tenure: "10+ Years",
    description:
      "Integrating virgin coconut farming with active ranger patrols to safeguard the critically endangered Roloway monkey and White-naped Mangabey.",
  },
  {
    name: "CREMA (Community Resource Mgmt Areas)",
    category: "Conservation",
    focus: "Community-Led Wildlife Stewardship",
    cooperativeRegion: "Mole & Wechiau Landscapes",
    tenure: "12+ Years",
    description:
      "Empowering local communities to legally demarcate wildlife conservation zones where harvesting of fallen wild shea nuts is strictly regenerative.",
  },
  {
    name: "GLOBAL SHEA ALLIANCE (GSA)",
    category: "Conservation",
    focus: "Industry Sustainability Guidelines & Standards",
    cooperativeRegion: "West Africa Regional",
    tenure: "Founding Member",
    description:
      "Setting continental standards for women's safety, seedling nurseries, parkland restoration, and clean cooking briquettes.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F8F2EC] border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown/10 text-brand-brown text-xs font-semibold tracking-widest uppercase mb-6">
              <HeartHandshake className="w-4 h-4 text-brand-brown" />
              Strategic & Ecological Alliances
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              Our Partners In Regenerative Impact
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              We align with global cosmetic innovators, biodiversity watchdogs,
              and community foundations to build dedicated, verifiable supply chains
              that uplift African women while defending ancient ecosystems.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersList.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F2EC]/50 rounded-3xl p-8 border border-zinc-200/80 hover:border-brand-brown hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-zinc-200 font-bold text-zinc-700">
                        {partner.category}
                      </span>
                      <span className="text-xs font-oswald uppercase text-brand-red font-bold">
                        {partner.tenure}
                      </span>
                    </div>

                    <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown tracking-tight mb-2">
                      {partner.name}
                    </h3>

                    <p className="text-xs font-oswald uppercase tracking-wider text-brand-caramel font-semibold mb-4">
                      {partner.focus}
                    </p>

                    <p className="text-zinc-600 font-outfit text-sm leading-relaxed mb-6">
                      {partner.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 text-xs font-outfit text-zinc-500 flex items-center justify-between">
                    <span>Region: {partner.cooperativeRegion}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Callout Section */}
        <section className="py-20 bg-brand-brown text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <Trees className="w-12 h-12 text-brand-amber mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight mb-4">
              Build a Dedicated Supply Chain for Your Brand
            </h2>
            <p className="text-white/80 font-outfit text-base leading-relaxed mb-8">
              Whether you are an established global cosmetic brand or a fast-growing
              clean beauty formulator, Young and Dufe can establish a fully traceable,
              custom-audited cooperative sourcing corridor tailored to your technical specs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-amber text-black font-oswald uppercase tracking-wider font-bold text-base hover:bg-white transition-colors"
            >
              <span>Initiate Partner Inquiry</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
