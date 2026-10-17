"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, ShieldCheck, Download, HeartHandshake } from "lucide-react";

export default function BaobabOilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Hero Banner */}
        <section className="relative w-full min-h-[500px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-black pt-20">
          <Image
            src="/products/baobab-oil.jpg"
            alt="Baobab Superfruit in Upper East Ghana"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 text-center max-w-4xl text-white">
            <span className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-[0.25em] font-bold block mb-3">
              Savannah Superfruit Seed Botanical
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight leading-tight mb-6">
              The Story of <br />
              <span className="text-brand-amber">Cold-Pressed Baobab Oil</span>
            </h1>

            <p className="text-white/85 font-outfit text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Pure, golden, cold-pressed seed oil harvested from the ancient Tree
              of Life in Northern Ghana in direct partnership with the Widows and
              Orphans Movement.
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

        {/* 2. Superfruit Metrics Bar */}
        <section className="py-12 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-amber mb-1">
                  6x Vitamin C
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Potent Bio-Actives
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Six times more vitamin C density than oranges, driving intense dermal cellular rejuvenation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-[#8BC832] mb-1">
                  Rating 0
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Non-Comedogenic
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Ultra-light dry oil feel that penetrates immediately without clogging pores.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-red mb-1">
                  WOM Partnership
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Social Resilience
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Empowering vulnerable widows in the Upper East Region through guaranteed harvest wages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-brown mb-1">
                  1,000+ Years
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Tree of Life
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Harvested from ancient protected dryland trees that provide food security in drought.
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
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-amber font-oswald block mb-1">
                    Analytical Profile
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-oswald uppercase font-bold text-brand-brown">
                    Baobab Seed Oil Specifications
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-mono font-bold border border-amber-200">
                    Cold Pressed
                  </span>
                  <span className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-mono font-bold">
                    Pure Virgin
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm font-outfit">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">INCI Name:</span>
                    <span className="font-semibold text-zinc-900">
                      Adansonia Digitata Seed Oil
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">CAS Number:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      91745-12-9
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">EINECS Number:</span>
                    <span className="font-mono font-semibold text-zinc-900">
                      294-680-8
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Fatty Acid Balance:</span>
                    <span className="font-semibold text-zinc-900">
                      Balanced Omega 3, 6, 9 (Oleic & Linoleic)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Color & Scent:</span>
                    <span className="font-semibold text-zinc-900">
                      Golden Yellow / Light Nutty Aroma
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Comedogenic Rating:</span>
                    <span className="font-semibold text-zinc-900">
                      0 (Does Not Clog Pores)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Shelf Life:</span>
                    <span className="font-semibold text-zinc-900">
                      36 Months (Naturally Stable Antioxidants)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Certifications:</span>
                    <span className="font-semibold text-zinc-900 text-right">
                      ECOCERT Organic, Fair For Life
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Unrefined, Cold-Mechanical Extraction</span>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-brand-brown text-white font-oswald uppercase text-xs tracking-wider hover:bg-black transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Technical Data Sheet</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Widows and Orphans Movement Partnership (Gallery) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <HeartHandshake className="w-10 h-10 text-brand-red mx-auto mb-3" />
              <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                Partner-Led Sourcing with the Widows & Orphans Movement
              </h2>
              <p className="text-zinc-600 font-outfit text-base mt-4">
                In Bolgatanga and across the Upper East Region, baobab seed
                collection transforms marginalized women into self-sufficient
                economic leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "/products/baobaboil/baobab-1.jpeg",
                  title: "Wild Pod Gathering",
                  desc: "Women gather fallen woody pods from centuries-old heritage trees.",
                },
                {
                  img: "/products/baobaboil/baobab-2.jpeg",
                  title: "Pulp & Seed Separation",
                  desc: "Pulp is utilized for local food nutrition; seeds are retained for cosmetic pressing.",
                },
                {
                  img: "/products/baobaboil/baobab-3.jpeg",
                  title: "Cold Screw Pressing",
                  desc: "Mechanical pressing under strict temperature controls yields rich golden oil.",
                },
                {
                  img: "/products/baobaboil/baobab-4.jpeg",
                  title: "Community Value Sharing",
                  desc: "Direct premium disbursements ensure school fees and community healthcare are funded.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F2EC] rounded-3xl overflow-hidden shadow-xs border border-zinc-200/80 flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-oswald uppercase font-bold text-zinc-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-zinc-600 font-outfit text-xs leading-relaxed">
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
