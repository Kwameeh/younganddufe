"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Leaf,
  ShieldCheck,
  Recycle,
  Users2,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Core Philosophy Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-brand-accent border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-6">
              <Leaf className="w-4 h-4 text-brand-red" />
              Structural Architecture
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              This Is Where The Business Model Matters
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Regenerative value chains cannot simply be added onto an extractive
              trading structure. They must be built from the soil up as living
              systems where economic value circulates directly back into community
              resilience and ecological protection.
            </p>
          </div>
        </section>

        {/* 2. The 4-Pillar Regenerative Architecture */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="p-8 lg:p-10 rounded-3xl bg-brand-accent border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest">
                      Pillar 01
                    </span>
                    <Users2 className="w-6 h-6 text-brand-brown" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Direct Origin Sourcing (Since 2006)
                  </h3>
                  <p className="text-zinc-700 font-outfit text-sm lg:text-base leading-relaxed mb-6">
                    We completely eliminated predatory middlemen who historically
                    bought shea nuts at rock-bottom distress prices. By contracting
                    directly with organized women gatherers, 100% of the initial
                    purchase price and organic premiums go straight to the producers.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-outfit flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Fair Trade Fair For Life Certified Sourcing</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 lg:p-10 rounded-3xl bg-brand-accent border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
                      Pillar 02
                    </span>
                    <ShieldCheck className="w-6 h-6 text-[#2D5016]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Democratic Cooperative Ownership
                  </h3>
                  <p className="text-zinc-700 font-outfit text-sm lg:text-base leading-relaxed mb-6">
                    Our 50+ women-led cooperatives are not subsidiaries; they are
                    autonomous legal entities with commercial bank accounts, elected
                    executive boards, and full governance over community fund allocations.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-outfit flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>47,554+ Self-Governed Women Members</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 lg:p-10 rounded-3xl bg-brand-accent border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-brand-amber uppercase tracking-widest">
                      Pillar 03
                    </span>
                    <Recycle className="w-6 h-6 text-brand-amber" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Eco-Modern Processing Infrastructure
                  </h3>
                  <p className="text-zinc-700 font-outfit text-sm lg:text-base leading-relaxed mb-6">
                    Our processing centers run on clean energy. Instead of burning
                    savannah trees for heat, we compress byproduct shea-cake into
                    smokeless bio-briquettes, achieving an 89% reduction in firewood use
                    and closed-loop zero-waste processing.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-outfit flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Circular Shea Waste Bio-Energy</span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-8 lg:p-10 rounded-3xl bg-brand-accent border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-brand-brown uppercase tracking-widest">
                      Pillar 04
                    </span>
                    <FileCheck2 className="w-6 h-6 text-brand-red" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Digital Provenance & EUDR Traceability
                  </h3>
                  <p className="text-zinc-700 font-outfit text-sm lg:text-base leading-relaxed mb-6">
                    Every batch has an immutable digital trail. From the GPS
                    coordinates of the wild collection parklands to laboratory
                    analysis in Tamale and maritime delivery in Halfweg, Netherlands,
                    transparency is absolute.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200 text-xs text-zinc-500 font-outfit flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>EU Deforestation Regulation (EUDR) Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Independent Impact Audits & Reports */}
        <section className="py-20 bg-brand-accent border-t border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
              Transparency In Action
            </span>
            <h2 className="text-3xl lg:text-4xl font-oswald uppercase tracking-tight text-brand-brown mb-8">
              Download Independent Audits & Lifecycle Reports
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "2026 Life Cycle Assessment (LCA)",
                  sub: "Carbon Footprint & Bio-Briquette Carbon Savings",
                  auditor: "Bio-Diversity Watch & EcoInvent",
                },
                {
                  title: "Fair For Life Social Audit",
                  sub: "Living Income Benchmarks & Gender Governance",
                  auditor: "ECOCERT Greenlife FFL",
                },
                {
                  title: "EUDR Deforestation Compliance Dossier",
                  sub: "GPS Geolocation Polygons & Satellite Verification",
                  auditor: "Global Shea Alliance Verification",
                },
              ].map((report, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block mb-2">
                      Audited by {report.auditor}
                    </span>
                    <h4 className="font-oswald text-lg font-bold text-zinc-900 mb-2 uppercase">
                      {report.title}
                    </h4>
                    <p className="text-xs text-zinc-600 font-outfit">
                      {report.sub}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-100">
                    <Link
                      href="/contact"
                      className="text-xs font-oswald uppercase tracking-wider text-brand-brown hover:text-brand-red font-bold inline-flex items-center gap-1.5"
                    >
                      <span>Request Full PDF</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
