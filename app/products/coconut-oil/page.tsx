"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Trees, ShieldCheck, Download } from "lucide-react";

export default function CoconutOilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Hero Banner */}
        <section className="relative w-full min-h-[500px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-black pt-20">
          <Image
            src="/products/coconut-oil.jpg"
            alt="Coastal Coconut Groves"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 text-center max-w-4xl text-white">
            <span className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-[0.25em] font-bold block mb-3">
              Wet-Milled Extra Virgin Botanical
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight leading-tight mb-6">
              The Story of <br />
              <span className="text-[#8BC832]">Organic Virgin Coconut Oil</span>
            </h1>

            <p className="text-white/85 font-outfit text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Cold centrifuged from freshly harvested coastal nuts within 48 hours,
              protecting the critically endangered Roloway monkey habitat along
              the Ankasa-Tano conservation corridor.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-brand-amber text-zinc-950 font-oswald uppercase tracking-wider font-bold hover:bg-white transition-colors"
              >
                Request Bulk Sample
              </Link>
              <a
                href="#specs"
                className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-oswald uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                View Specifications
              </a>
            </div>
          </div>
        </section>

        {/* 2. Primate Habitat & Ecosystem Bar */}
        <section className="py-12 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-[#2D5016] mb-1">
                  Roloway Monkey
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Critically Endangered
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Every metric ton produced funds community patrols safeguarding Ghana&apos;s rarest primate.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-brown mb-1">
                  Ankasa-Tano
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  CREMA Conservation
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Cooperative harvesting linked directly to legal canopy protection agreements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-[#8BC832] mb-1">
                  &lt; 48 Hours
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Freshness Guarantee
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Wet-milled without drying or chemical bleaching, preserving natural monolaurin.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-amber mb-1">
                  Zero Clearcut
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Agroforestry Harmony
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Harvested exclusively from existing smallholder coastal tree systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Specifications Table */}
        <section id="specs" className="py-20 bg-[#F8F2EC]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-zinc-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-zinc-200 mb-8 gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#2D5016] font-oswald block mb-1">
                    Cosmetic Technical Sheet
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-oswald uppercase font-bold text-brand-brown">
                    Virgin Coconut Oil Specifications
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold border border-emerald-200">
                    Cold Centrifuged
                  </span>
                  <span className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-mono font-bold">
                    100% Unrefined
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm font-outfit">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">INCI Name:</span>
                    <span className="font-semibold text-zinc-900">
                      Cocos Nucifera (Coconut) Oil
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">CAS Number:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      8001-31-8
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Lauric Acid Content:</span>
                    <span className="font-semibold text-zinc-900">
                      48% – 53% (High MCFA)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Extraction:</span>
                    <span className="font-semibold text-zinc-900">
                      Wet-Milling & Centrifugal Separation
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Appearance:</span>
                    <span className="font-semibold text-zinc-900">
                      Water-Clear Liquid (&gt;24°C) / Pure White Solid
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Aroma:</span>
                    <span className="font-semibold text-zinc-900">
                      Subtle Fresh Coconut (Zero Toasted Odor)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Shelf Life:</span>
                    <span className="font-semibold text-zinc-900">
                      24 Months
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Certifications:</span>
                    <span className="font-semibold text-zinc-900 text-right">
                      ECOCERT Organic, Fair For Life, Kosher
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Microbiologically Tested & Allergen-Free</span>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-brand-brown text-white font-oswald uppercase text-xs tracking-wider hover:bg-black transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Full Specification Dossier</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Conservation-Based Value Chain (Gallery) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Trees className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
              <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                Linking Coconut Income to Primate Corridor Protection
              </h2>
              <p className="text-zinc-600 font-outfit text-base mt-4">
                In partnership with WAPCA and local CREMA committees, our coastal
                sourcing provides sustainable livelihood incentives that keep
                rainforest canopies standing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  img: "/products/coconutoil/coconut-1.jpeg",
                  title: "Coastal Smallholder Harvesting",
                  desc: "Local families harvest wild coastal palms without chemical pesticides or clearing adjacent forest cover.",
                },
                {
                  img: "/products/coconutoil/coconut-2.jpeg",
                  title: "Immediate Cold Wet-Milling",
                  desc: "Within 48 hours of harvest, the fresh coconut meat is cold pressed to yield exceptional clarity and purity.",
                },
                {
                  img: "/products/coconutoil/coconut-3.jpeg",
                  title: "Conservation Premium Reinvestment",
                  desc: "Direct revenue shares fund local wildlife patrol rangers guarding critical primate nesting sites.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F2EC] rounded-3xl overflow-hidden shadow-sm border border-zinc-200/80 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-oswald uppercase font-bold text-zinc-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 font-outfit text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
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
