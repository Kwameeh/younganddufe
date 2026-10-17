"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, ShieldCheck, Download, Flame } from "lucide-react";

export default function BlackSoapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Hero Banner */}
        <section className="relative w-full min-h-[500px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-black pt-20">
          <Image
            src="/products/blacksoap.jpg"
            alt="Handmade Traditional African Black Soap"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 text-center max-w-4xl text-white">
            <span className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-[0.25em] font-bold block mb-3">
              Traditional Herbal Saponification
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight leading-tight mb-6">
              The Story of <br />
              <span className="text-brand-amber">African Black Soap</span>
            </h1>

            <p className="text-white/85 font-outfit text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Kettle-crafted by artisan women in Tamale, Northern Ghana using only
              pure hand-crafted shea butter, coconut oil, and roasted agricultural
              cocoa pod ash.
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

        {/* 2. Circular Chemistry Metrics Bar */}
        <section className="py-12 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-red mb-1">
                  100% Circular
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Zero Synthetic Lye
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Naturally saponified with roasted agricultural cocoa pod and plantain peel ash.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-[#8BC832] mb-1">
                  Biodegradable
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Clean Chemistry
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Zero sulfates, parabens, synthetic fragrances, or artificial stabilizers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-amber mb-1">
                  Gentle & Clarifying
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Dermal Balance
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  High natural glycerin content soothes sensitive and blemish-prone skin.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F2EC] border border-zinc-200/60">
                <div className="text-2xl lg:text-3xl font-oswald font-bold text-brand-brown mb-1">
                  Tamale Cooperatives
                </div>
                <div className="text-xs font-oswald uppercase tracking-wider text-zinc-500 mb-2">
                  Centuries of Craft
                </div>
                <p className="text-xs font-outfit text-zinc-600">
                  Formulated by experienced women master soapmakers following authentic methods.
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
                  <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-1">
                    Ingredient Specification
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-oswald uppercase font-bold text-brand-brown">
                    African Black Soap (Alata Samina)
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-mono font-bold border border-red-200">
                    Artisan Formulated
                  </span>
                  <span className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 text-xs font-mono font-bold">
                    Zero Synthetics
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm font-outfit">
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">INCI Formula:</span>
                    <span className="font-semibold text-zinc-900 text-right">
                      Butyrospermum Parkii, Cocos Nucifera, Palm Kernel, Cocoa Ash, Aqua
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Alkaline Source:</span>
                    <span className="font-semibold text-zinc-900">
                      Roasted Theobroma Cacao Pod Husk Ash
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Physical Form:</span>
                    <span className="font-semibold text-zinc-900">
                      Solid Molded Block / Crumbled Bulk / Liquid Base
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Color:</span>
                    <span className="font-semibold text-zinc-900">
                      Rich Earth Brown to Deep Charcoal
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">pH Level:</span>
                    <span className="font-semibold text-zinc-900">
                      8.5 – 9.5 (Gentle Alkaline Cleanser)
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-100">
                    <span className="text-zinc-500">Glycerin Content:</span>
                    <span className="font-semibold text-zinc-900">
                      Naturally Retained (Superfatted)
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
                      Fair For Life, Cruelty-Free, Vegan
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-200 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Available in Bulk Pails, Custom Blocks, or Formulated Liquid Bases</span>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-brand-brown text-white font-oswald uppercase text-xs tracking-wider hover:bg-black transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Request Product Dossier</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Women-Led Soapmaking Cooperatives in Tamale */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Flame className="w-10 h-10 text-brand-red mx-auto mb-3" />
              <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                Traditional Kettle Saponification in Tamale
              </h2>
              <p className="text-zinc-600 font-outfit text-base mt-4">
                Watch how three dedicated Northern Ghanaian women cooperatives
                transform local botanical waste into the world&apos;s most revered
                cleansing bar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "/products/blacksoap/blacksoap-1.jpeg",
                  title: "Ash Leaching & Solution",
                  desc: "Cocoa husks are gently roasted and leached with clean rainwater to yield mineral-rich potash.",
                },
                {
                  img: "/products/blacksoap/blacksoap-2.jpeg",
                  title: "Slow Kettle Boiling",
                  desc: "Unrefined shea butter and coconut oil are blended with potash over controlled bio-briquette heat.",
                },
                {
                  img: "/products/blacksoap/blacksoap-3.jpeg",
                  title: "Artisan Hand-Stirring",
                  desc: "Master women stir the saponifying kettle for hours until natural foaming and thickening occur.",
                },
                {
                  img: "/products/blacksoap/blacksoap-4.jpeg",
                  title: "Sun-Curing & Molding",
                  desc: "The warm soap is scooped into molds and sun-cured for two weeks to achieve balanced hardness.",
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
