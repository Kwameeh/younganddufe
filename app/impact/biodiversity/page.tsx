"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Trees, ShieldCheck, HeartHandshake, ArrowUpRight } from "lucide-react";

export default function BiodiversityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Hero Statement */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#2D5016] text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-amber text-xs font-semibold tracking-widest uppercase mb-6">
              <Trees className="w-4 h-4 text-brand-amber" />
              Living Ecosystem Protection
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-white leading-tight mb-6">
              Biodiversity Conservation Through Living Value Chains
            </h1>

            <p className="text-white/85 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Keeping forests standing by making ecological conservation
              economically rational for the communities who live within them.
            </p>
          </div>
        </section>

        {/* 2. The CREMA Framework */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
              Community Governance
            </span>
            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown mb-6">
              The CREMA Framework: Aligning Wildlife & Prosperity
            </h2>
            <div className="space-y-6 text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed">
              <p>
                Community Resource Management Areas (CREMAs) are legally gazetted
                conservation structures recognized by the Ghanaian Government and
                Wildlife Division. Within a CREMA, local village committees have
                the legal authority to manage natural resources and establish
                binding bylaws prohibiting illegal logging, hunting, and mining.
              </p>
              <p>
                Young and Dufe ties commercial purchasing directly to these CREMA
                boundaries. Because our partner women cooperatives receive premium
                pricing only for wild nuts and coconuts collected within protected
                zones, the standing forest becomes the community&apos;s most valuable asset.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Species & Habitats Protected Grid */}
        <section className="py-24 bg-[#F8F2EC]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
                Endangered Wildlife Corridors
              </span>
              <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                Species Guarded By Our Sourcing Zones
              </h2>
              <p className="text-zinc-600 font-outfit text-base mt-4">
                Explore the key wildlife populations benefiting directly from
                our community conservation funds and ranger patrols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "/biodiversity/monkey.jpg",
                  name: "Roloway Monkey",
                  status: "Critically Endangered",
                  location: "Ankasa-Tano Rainforest Corridor",
                  desc: "One of the world's most endangered primates. Supported by virgin coconut conservation premiums.",
                },
                {
                  img: "/biodiversity/hippo.jpg",
                  name: "Wechiau River Hippos",
                  status: "Vulnerable Sanctuary Population",
                  location: "Black Volta River Parkland",
                  desc: "Protected riverbank buffer zones maintained by wild shea gatherer cooperatives.",
                },
                {
                  img: "/biodiversity/elephant.jpg",
                  name: "Savannah Elephants",
                  status: "Protected Migratory Herds",
                  location: "Mole National Park Landscape",
                  desc: "Continuous agroforestry parklands maintain migratory paths without human-wildlife conflict.",
                },
                {
                  img: "/biodiversity/deer.jpg",
                  name: "Roan Antelope & Bushbuck",
                  status: "Savannah Keystone Species",
                  location: "Upper West & Northern Parkland",
                  desc: "Halt in timber logging and charcoal burning preserves foraging grounds.",
                },
                {
                  img: "/biodiversity/monkey-side.jpg",
                  name: "White-Naped Mangabey",
                  status: "Endangered Canopy Primate",
                  location: "Tano Forest Buffer",
                  desc: "Monitored in joint scientific tracking with WAPCA field researchers.",
                },
                {
                  img: "/biodiversity/tree.jpg",
                  name: "Heritage Parkland Trees",
                  status: "Ancient Living Sanctuaries",
                  location: "Trans-Savannah Parkland Belt",
                  desc: "Centuries-old baobabs and karité trees that anchor the regional water table and topsoil.",
                },
              ].map((species, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-md border border-zinc-200/80 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] w-full bg-zinc-200 overflow-hidden">
                    <Image
                      src={species.img}
                      alt={species.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-xs text-brand-amber text-xs font-oswald uppercase tracking-wider">
                      {species.status}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-zinc-500 font-mono block mb-1">
                        📍 {species.location}
                      </span>
                      <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown tracking-tight mb-2">
                        {species.name}
                      </h3>
                      <p className="text-zinc-600 font-outfit text-sm leading-relaxed">
                        {species.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-outfit">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        CREMA Protected
                      </span>
                      <span className="font-mono text-zinc-400">#0{idx + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EUDR Deforestation Standard Callout */}
        <section className="py-20 bg-brand-brown text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <HeartHandshake className="w-12 h-12 text-brand-amber mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight mb-4">
              EUDR Deforestation-Free Verification
            </h2>
            <p className="text-white/85 font-outfit text-base leading-relaxed mb-8">
              All Young and Dufe product consignments are verified under the EU
              Deforestation Regulation (EUDR). We provide polygon geolocation
              coordinates and satellite baseline analysis confirming zero tree loss.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-amber text-black font-oswald uppercase tracking-wider font-bold text-base hover:bg-white transition-colors"
            >
              <span>Request EUDR Technical Dossier</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
