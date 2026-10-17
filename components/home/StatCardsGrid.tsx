"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  bgColor: string;
  description: string;
}

const stats: StatItem[] = [
  {
    target: 48000,
    suffix: "+",
    label: "Rural Women",
    bgColor: "bg-[#E4A836]",
    description:
      "Directly engaged through autonomous women-led cooperatives with democratic self-governance across West Africa.",
  },
  {
    target: 4,
    suffix: "",
    label: "Regenerative Value Chains",
    bgColor: "bg-[#8B3A2B]",
    description:
      "Hand-crafted Shea Butter, Virgin Coconut Oil, Baobab Oil, and African Black Soap protecting ancient agroforestry.",
  },
  {
    target: 10,
    suffix: "%",
    label: "Profit Reinvestment",
    bgColor: "bg-[#94C84E]",
    description:
      "Dedicated directly to community conservation funds, solar clean water boreholes, and kindergarten schools.",
  },
  {
    target: 90,
    suffix: "%",
    label: "Cut In Firewood Use",
    bgColor: "bg-[#B79C79]",
    description:
      "Replacing traditional timber fuel with clean energy bio-briquettes compressed from circular shea-waste.",
  },
];

export function StatCardsGrid() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          stats.forEach((stat, index) => {
            const duration = 1800; // 1.8 seconds
            const steps = 60;
            const stepValue = stat.target / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += stepValue;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#F8F2EC] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Giant Bold Condensed Poster Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-oswald font-black uppercase text-brand-red leading-[0.88] tracking-tight">
              A SUPPLY <br />
              CHAIN <br />
              THAT&apos;S 100% <br />
              TRACEABLE
            </h2>
          </div>

          {/* Right Column: 2x2 Grid of Stat Cards with Bold White Numbers */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {stats.map((stat, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`${stat.bgColor} rounded-3xl p-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-center text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-[1.02] cursor-pointer relative overflow-hidden`}
                >
                  {!isHovered ? (
                    <div className="animate-in fade-in duration-200">
                      <div className="text-6xl sm:text-7xl lg:text-8xl font-oswald font-bold text-white tracking-tight leading-none mb-3">
                        {counts[idx]}
                        {stat.suffix}
                      </div>
                      <div className="text-base sm:text-lg font-outfit text-white/95 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ) : (
                    <div className="animate-in fade-in duration-200 text-white flex flex-col justify-center h-full">
                      <div className="text-xs uppercase tracking-widest font-oswald font-bold text-white/80 mb-2">
                        {stat.label}
                      </div>
                      <p className="text-sm font-outfit leading-relaxed text-white/95">
                        {stat.description}
                      </p>
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
