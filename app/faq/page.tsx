"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HelpCircle, ChevronDown, ArrowUpRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "Products" | "Wholesale & Logistics" | "Impact & Traceability";
}

const faqs: FAQItem[] = [
  {
    category: "Products",
    q: "What is the difference between handcrafted (community processed) and industrial shea butter?",
    a: "Industrial shea extraction uses chemical hexane solvents and high temperatures (up to 200°C) to leach out oils from dried nuts, stripping natural unsaponifiables, phytosterols, and vitamins. In contrast, our handcrafted shea butter is physically cold-milled and gently hand-kneaded with clean water by rural women artisans. This preserves the natural bioactive vitamins A & E, gives a richer texture, and ensures 100% of the handcrafting margin remains with the women.",
  },
  {
    category: "Products",
    q: "What is the difference between unrefined and steam-refined shea butter?",
    a: "Unrefined shea butter retains its natural warm ivory to creamy-yellow tint and a signature earthy, nutty scent. It contains the maximum concentration of botanical actives. Our steam-refined shea butter undergoes a gentle physical filtration with food-grade steam (no harsh bleach or chemical solvents) to neutralize color and aroma, making it optimal for sensitive fragrance formulation in white lotions and creams.",
  },
  {
    category: "Products",
    q: "What makes your African Black Soap completely circular and natural?",
    a: "Traditional commercial soaps use synthetic sodium hydroxide (lye) derived from industrial chemical manufacturing. Our authentic African Black Soap is saponified exclusively using potassium hydroxide leached from the roasted ashes of agricultural cocoa pod husks and plantain skins. Blended with raw unrefined shea butter and coconut oil, it is 100% biodegradable and contains zero synthetic additives.",
  },
  {
    category: "Wholesale & Logistics",
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "We cater to formulators at all scales. For indie beauty formulators and pilot batch testing, our European warehouse in Halfweg, Netherlands stocks 25kg sealed pails with fast express pallet delivery. For mid-tier and multinational cosmetic manufacturers, we ship 190kg steel drums and 20ft/40ft Full Container Loads (FCL) directly from the Port of Tema, Ghana.",
  },
  {
    category: "Wholesale & Logistics",
    q: "Can we request pre-shipment lab samples with Certificate of Analysis (COA)?",
    a: "Yes. Every harvest consignment is analyzed in our Tamale lab for free fatty acid (FFA) values, peroxide value, moisture content, saponification value, and microbiological safety. We dispatch sample kits with batch-matched COAs worldwide via DHL Express.",
  },
  {
    category: "Impact & Traceability",
    q: "Can we establish a bespoke or dedicated supply chain for our brand?",
    a: "Yes, this is our core specialty. We partner with ethical beauty houses to adopt dedicated women's cooperatives in Ghana or Côte d'Ivoire. Your brand directly sponsors cooperative infrastructure (e.g. clean solar boreholes, kindergarten centers), and receives dedicated batch-level traceability for all consumer marketing campaigns.",
  },
  {
    category: "Impact & Traceability",
    q: "How does buying from Young and Dufe contribute to wildlife and biodiversity conservation?",
    a: "Our sourcing is tied to Community Resource Management Areas (CREMAs). We pay a conservation premium on all wild collection nuts that directly funds community ranger patrols guarding endangered habitats—including the Roloway monkey in the Ankasa-Tano rainforest and savannah elephants around Mole National Park.",
  },
  {
    category: "Impact & Traceability",
    q: "Is your supply chain compliant with the new EU Deforestation Regulation (EUDR)?",
    a: "Yes. All our wild collection parklands and agroforestry groves are GPS-mapped with satellite baseline polygons confirming zero tree felling or land degradation after the December 2020 cutoff date. Full geolocation JSON data is provided with each commercial shipment.",
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Products", "Wholesale & Logistics", "Impact & Traceability"];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F8F2EC] border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-brown/10 text-brand-brown text-xs font-semibold tracking-widest uppercase mb-6">
              <HelpCircle className="w-4 h-4 text-brand-brown" />
              Frequently Asked Questions
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              Answers & Technical Clarifications
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our certified organic sourcing,
              custom processing, wholesale freight, and formulation guidance.
            </p>
          </div>
        </section>

        {/* Filter & Accordion Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-oswald uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-brand-brown text-white shadow-xs"
                      : "bg-[#F8F2EC] text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-brand-brown bg-[#F8F2EC]/50 shadow-sm"
                        : "border-zinc-200 bg-white hover:border-zinc-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="font-oswald uppercase text-lg lg:text-xl font-bold tracking-tight text-brand-brown">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 mt-1 ${
                          isOpen ? "rotate-180 text-brand-red" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-200/60 font-outfit text-zinc-700 text-sm lg:text-base leading-relaxed animate-in fade-in duration-200">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-16 p-8 rounded-3xl bg-[#F8F2EC] border border-zinc-200 text-center">
              <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-2">
                Have a Custom Formulation or Sourcing Question?
              </h3>
              <p className="text-zinc-600 font-outfit text-sm mb-6 max-w-lg mx-auto">
                Our technical sales team and agronomists can answer any specialized
                inquiries regarding cosmetic stability, export paperwork, or bulk packaging.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red text-white font-oswald uppercase text-xs tracking-wider font-bold hover:bg-black transition-colors"
              >
                <span>Contact Technical Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FAQPage;
