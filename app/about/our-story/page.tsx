"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, CheckCircle2, ShieldCheck, QrCode } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      {/* Solid Tan Header for Inner Pages */}
      <Header variant="solid" />

      <main className="flex-1">
        {/* 1. Hero Blueprint Banner */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F8F2EC] border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              Origin-First Philosophy
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-oswald uppercase tracking-tight text-brand-brown leading-[1.02] mb-10">
              Building A Blueprint That Protects{" "}
              <span className="text-brand-red">16 Million Women</span> &{" "}
              <span className="text-[#2D5016]">8 Million Trees</span>
            </h1>

            {/* Floating Stats Bar */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-200/80 shadow-xs flex items-center gap-3">
                <span className="text-3xl font-oswald font-bold text-brand-red">
                  $8M+
                </span>
                <span className="text-xs uppercase font-oswald tracking-wider text-zinc-600 text-left">
                  Annual Community <br />
                  Value Added
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-200/80 shadow-xs flex items-center gap-3">
                <span className="text-3xl font-oswald font-bold text-[#F1BA40]">
                  48,000+
                </span>
                <span className="text-xs uppercase font-oswald tracking-wider text-zinc-600 text-left">
                  Rural Women <br />
                  Direct Partners
                </span>
              </div>
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-200/80 shadow-xs flex items-center gap-3">
                <span className="text-3xl font-oswald font-bold text-[#8BC832]">
                  10%
                </span>
                <span className="text-xs uppercase font-oswald tracking-wider text-zinc-600 text-left">
                  Net Profit <br />
                  Reinvestment
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Founding Philosophy Narrative */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-oswald uppercase tracking-tight text-brand-brown mb-6">
              From an Idealistic Proposal to a Continental Standard
            </h2>
            <div className="space-y-6 text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed">
              <p>
                In 2006, the conventional cosmetic supply chain in West Africa was
                predatory. Rural women gathered wild shea nuts and sold them to
                unregulated middlemen for pennies, while industrialized processing
                plants overseas captured all the refining margin.
              </p>
              <p>
                Young and Dufe was founded to invert this paradigm. We asked a
                fundamental question: <em>What if the women who hold centuries of
                botanical knowledge owned the processing centers themselves?</em>
              </p>
              <p>
                Eighteen years later, our ecosystem has proven that regenerative
                ethics and commercial scale are mutually reinforcing. By keeping
                the entire processing cycle—from wild nut selection to clean solar-powered
                extraction—within autonomous women-owned cooperatives in Tamale and Wa,
                we produce the purest cosmetic botanicals in the world while
                regenerating the surrounding savannah ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Leadership & Governance Board */}
        <section className="py-20 bg-[#F8F2EC] border-y border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
                  Governance
                </span>
                <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown">
                  Our Board & Advisory Council
                </h2>
              </div>
              <Link
                href="/about/team"
                className="inline-flex items-center gap-2 text-brand-red font-oswald uppercase text-sm font-bold tracking-wider hover:text-black transition-colors"
              >
                <span>Meet Our Full Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Raphael Gonzalez",
                  role: "Co-Founder & Managing Director",
                  bio: "20+ years in African ethical trade and community-owned value chains.",
                },
                {
                  name: "Bart Botterman",
                  role: "Co-Founder & Operations Lead",
                  bio: "Agronomist specializing in clean processing engineering and organic certifications.",
                },
                {
                  name: "Richelieu Dennis",
                  role: "Strategic Board Member",
                  bio: "Founder of Sundial Brands and champion of grassroots women empowerment.",
                },
                {
                  name: "Sofi Tucker Foundation",
                  role: "Institutional Partner",
                  bio: "Dedicated to social entrepreneurship and capital access for African women.",
                },
              ].map((board, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-brown/10 text-brand-brown flex items-center justify-center font-oswald text-xl font-bold mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-oswald uppercase font-bold text-zinc-900 mb-1">
                      {board.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-oswald text-brand-red mb-3">
                      {board.role}
                    </p>
                    <p className="text-xs text-zinc-600 font-outfit leading-relaxed">
                      {board.bio}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-500 font-outfit">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Fiduciary & Impact Trustee</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The Mission Statement (Deep Forest Green Banner) */}
        <section className="py-24 bg-[#2D5016] text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-amber text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-amber"></span>
              Our Core Mission
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-oswald uppercase tracking-tight leading-tight text-white mb-8">
              &ldquo;To build regenerative business models that ensure that
              well-intentioned consumption of sustainable ingredients does not
              disrupt the living ecosystems that have sustained them for
              centuries.&rdquo;
            </h2>

            <p className="text-white/80 font-outfit text-base lg:text-lg max-w-2xl mx-auto">
              We operate at the convergence of traditional African wisdom,
              fair-trade economics, and biodiversity stewardship.
            </p>
          </div>
        </section>

        {/* 5. 18 Years of Impact Journey */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Narrative & Stats */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block">
                  Generational Legacy
                </span>

                <h2 className="text-4xl lg:text-5xl font-oswald uppercase tracking-tight text-brand-brown leading-tight">
                  Working Directly With 4th-Generation Rural Artisans
                </h2>

                <p className="text-zinc-700 font-outfit text-base leading-relaxed">
                  The art of handcrafting unrefined shea butter is an oral
                  tradition passed through mothers to daughters across centuries.
                  Our partnership respects this heritage by safeguarding the
                  sacred parklands and investing in community-managed infrastructure.
                </p>

                {/* 3 Color Stat Boxes */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-[#AA8DC2]/15 border border-[#AA8DC2]/30 text-center">
                    <span className="text-2xl lg:text-4xl font-oswald font-bold text-[#6D428E] block">
                      48K+
                    </span>
                    <span className="text-[11px] font-oswald uppercase tracking-wider text-zinc-700">
                      Women Gatherers
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F28900]/15 border border-[#F28900]/30 text-center">
                    <span className="text-2xl lg:text-4xl font-oswald font-bold text-[#C75A00] block">
                      50+
                    </span>
                    <span className="text-[11px] font-oswald uppercase tracking-wider text-zinc-700">
                      Autonomous Co-ops
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#80171A]/15 border border-[#80171A]/30 text-center">
                    <span className="text-2xl lg:text-4xl font-oswald font-bold text-[#80171A] block">
                      5
                    </span>
                    <span className="text-[11px] font-oswald uppercase tracking-wider text-zinc-700">
                      Nations Covered
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Photo */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-[#F8F2EC]">
                  <Image
                    src="/about/about-story.jpg"
                    alt="Women cooperative assembly in Northern Ghana"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Blockchain Traceability CTA */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <QrCode className="w-6 h-6 text-brand-amber" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight text-white mb-4">
              Blockchain-Based Digital Traceability
            </h2>

            <p className="text-white/80 font-outfit text-base leading-relaxed mb-8">
              Building confidence beyond commercial claims. Trace every batch of
              organic shea butter, virgin coconut oil, and baobab oil from the
              GPS tree coordinate to your final cosmetic formulation.
            </p>

            <Link
              href="/#countries-text"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-amber text-black font-oswald uppercase tracking-wider text-base font-bold hover:bg-white transition-colors"
            >
              <span>Explore Live Traceability</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
