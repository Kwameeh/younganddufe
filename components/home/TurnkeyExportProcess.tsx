"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  CheckCircle2,
  PackageCheck,
  FlaskConical,
  Trees,
  ArrowRight,
  Globe2,
} from "lucide-react";

export function TurnkeyExportProcess() {
  const steps = [
    {
      num: "01",
      title: "Wild Harvest & Cooperative Sourcing",
      icon: <Trees className="w-6 h-6 text-emerald-600" />,
      desc: "Over 48,000 rural women gather fallen wild karité nuts in GPS-demarcated organic parklands across Northern Ghana. Zero intermediaries; 100% direct origin contracting.",
      badge: "Organic Wild Harvest",
    },
    {
      num: "02",
      title: "Custom Processing & Formulation",
      icon: <FlaskConical className="w-6 h-6 text-brand-amber" />,
      desc: "Crafted at community-owned eco-centers powered by circular shea-cake briquettes. We process unrefined Grade-A, physical steam-refined (deodorized), or custom-whipped butter tailored to your formulation's exact FFA, moisture, and melting curve.",
      badge: "Formulation to Spec",
    },
    {
      num: "03",
      title: "Testing & Export-Ready Packaging",
      icon: <PackageCheck className="w-6 h-6 text-brand-red" />,
      desc: "Every batch is tested in our Tamale laboratory for microbiological purity and stability. Packed into food-grade 25kg polyethylene-lined cartons, 190kg steel drums, or bulk container liners with tamper-evident seals.",
      badge: "Bulk Pails & Drums",
    },
    {
      num: "04",
      title: "Direct Global Maritime Export",
      icon: <Ship className="w-6 h-6 text-[#2D5016]" />,
      desc: "We manage the entire export journey for you: phytosanitary certification, export customs clearing at Port of Tema, EUDR compliance dossiers, Bills of Lading, and ocean freight directly to your port worldwide (FOB, CIF, or DDP Europe).",
      badge: "Worldwide Port Delivery",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">
            <Globe2 className="w-4 h-4 text-brand-red" />
            End-To-End Contract Manufacturing & Export
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald uppercase font-black tracking-tight text-brand-brown leading-tight mb-6">
            We Do Everything For You. <br />
            <span className="text-brand-red">And Export Directly To You.</span>
          </h2>

          <p className="text-zinc-600 font-outfit text-base lg:text-lg leading-relaxed">
            From the wild savannah trees of Northern Ghana to your cosmetic
            manufacturing facility worldwide. We handle origin gathering,
            eco-processing, lab certification, custom bulk packaging, and
            international freight logistics.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8F2EC] rounded-3xl p-8 border border-zinc-200/80 hover:border-brand-brown hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest px-2.5 py-1 rounded-md bg-white border border-zinc-200">
                    Step {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white shadow-xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-oswald uppercase font-bold text-zinc-900 tracking-tight mb-3 group-hover:text-brand-red transition-colors">
                  {step.title}
                </h3>

                <p className="text-zinc-600 font-outfit text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-300/60 flex items-center justify-between text-xs text-zinc-500 font-outfit">
                <span className="font-semibold text-brand-brown uppercase font-oswald tracking-wider">
                  {step.badge}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Export Callout Bar */}
        <div className="bg-[#8B3A2B] text-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-brand-amber font-oswald uppercase text-xs tracking-widest font-bold block mb-2">
              Ready For 2026 / 2027 Harvest Contracts
            </span>
            <h3 className="text-3xl lg:text-4xl font-oswald uppercase font-bold tracking-tight mb-3">
              Order Shea Butter Export Samples & Container Loads
            </h3>
            <p className="text-white/85 font-outfit text-sm lg:text-base leading-relaxed">
              Available in 25kg pails (dispatch from European hub in Halfweg, NL)
              or 20ft/40ft Full Container Loads (FCL direct export from Port of Tema, Ghana).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-brand-amber text-zinc-950 font-oswald uppercase tracking-wider text-base font-bold hover:bg-white transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Request Export Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products/shea-butter"
              className="px-8 py-4 rounded-xl border border-white/40 text-white font-oswald uppercase tracking-wider text-base font-medium hover:bg-white/10 transition-colors"
            >
              View Specifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
