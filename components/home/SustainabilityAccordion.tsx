"use client";

import React, { useState } from "react";
import { ChevronDown, Leaf, Users, Briefcase } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface AccordionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
}

const items: AccordionItem[] = [
  {
    id: "environmental",
    title: "ENVIRONMENTAL SUSTAINABILITY",
    icon: <Leaf className="w-5 h-5 text-emerald-600" />,
    summary:
      "Regenerative parkland conservation, zero deforestation, and circular energy.",
    details: [
      "GPS boundary demarcation and protection of ancient shea agroforestry parklands.",
      "100% conversion of shea processing waste into high-density clean bio-briquettes, replacing firewood.",
      "Active wildlife corridor conservation protecting endangered Roloway monkeys, hippos, and savannah elephants in partnership with CREMA and WAPCA.",
      "Zero clearcutting or soil disruption — harvesting is strictly wild collection and restorative cultivation.",
    ],
  },
  {
    id: "social",
    title: "SOCIAL SUSTAINABILITY",
    icon: <Users className="w-5 h-5 text-brand-red" />,
    summary:
      "Democratic women's cooperatives, self-governance, and living income guarantees.",
    details: [
      "Direct commercial contracts with 47,554+ women gatherers across 50+ autonomous cooperatives.",
      "Fair Trade organic premium payments paid upfront directly to women's mobile money or cooperative accounts.",
      "Democratic election of women leadership, treasurers, and processing facility managers.",
      "Community infrastructure investments: clean solar-powered water boreholes, maternal health, and early education.",
    ],
  },
  {
    id: "business",
    title: "BUSINESS SUSTAINABILITY",
    icon: <Briefcase className="w-5 h-5 text-brand-amber" />,
    summary:
      "Origin value retention, European warehousing, and full digital traceability.",
    details: [
      "Community-owned processing facilities ensuring value addition stays in rural West Africa rather than raw export.",
      "Direct logistics pipeline from Tamale, Ghana to our European distribution hub in Halfweg, Netherlands.",
      "Multi-year purchase volume agreements that protect rural producers from global market commodity volatility.",
      "Complete batch-level QR traceability ensuring ingredient purity, ECOCERT compliance, and ESG reporting accuracy.",
    ],
  },
];

export function SustainabilityAccordion() {
  const [openId, setOpenId] = useState<string>("environmental");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Yellow bar + Brand Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="w-20 h-2 bg-brand-amber mb-6 rounded-full" />
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald uppercase font-black tracking-tight text-brand-red leading-[1.05] mb-6">
              Our Structural Principles of Sustainability
            </h2>

            <p className="text-zinc-600 font-outfit text-base lg:text-lg leading-relaxed mb-8">
              At Young and Dufe, sustainability is not an afterthought or marketing
              narrative. It is the structural operating engine of our company,
              integrating ecological balance, female economic sovereignty, and commercial viability.
            </p>

            <div className="p-6 rounded-2xl bg-brand-accent border border-brand-amber/30 flex items-center gap-5">
              <BrandLogo variant="color" className="h-16 w-auto shrink-0" />
              <div>
                <h4 className="font-oswald uppercase text-base text-brand-brown font-bold tracking-tight">
                  Regenerative Value Chain
                </h4>
                <p className="text-xs text-zinc-600 font-outfit mt-1">
                  Verified by ECOCERT, Fair For Life, and the Global Shea Alliance standard.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                    isOpen
                      ? "border-brand-brown bg-brand-accent/60 shadow-md"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-white shadow-xs border border-zinc-100">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-oswald uppercase text-xl font-bold tracking-tight text-brand-brown">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-outfit mt-0.5">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-500 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-brand-red" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-200/60 animate-in fade-in duration-200">
                      <ul className="space-y-3 font-outfit text-sm text-zinc-700">
                        {item.details.map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
