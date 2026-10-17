"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageSrc: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Commissioning 12 New Solar Water Boreholes in Northern Ghana",
    date: "October 2026",
    category: "Community Impact",
    excerpt:
      "Providing clean drinking water to over 8,500 cooperative members and their families across Tamale and Bolgatanga districts.",
    imageSrc: "/news/1.jpg",
    href: "/impact/sustainability",
  },
  {
    id: "news-2",
    title: "Expanding the Ankasa-Tano Rainforest Conservation Corridor",
    date: "September 2026",
    category: "Biodiversity",
    excerpt:
      "How our coconut agroforestry partnership with CREMA and WAPCA is securing vital habitats for the critically endangered Roloway monkey.",
    imageSrc: "/news/2.jpg",
    href: "/impact/biodiversity",
  },
  {
    id: "news-3",
    title: "2026 Life Cycle Assessment Confirms Net-Negative Carbon Impact",
    date: "August 2026",
    category: "Supply Chain",
    excerpt:
      "Independent audit affirms our shea-cake bio-briquettes have offset over 14,000 metric tons of CO2 equivalent this harvesting season.",
    imageSrc: "/news/3.jpg",
    href: "/impact/sustainability",
  },
];

export function NewsGrid() {
  return (
    <section id="news" className="py-24 bg-[#F8F2EC]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-red font-oswald block mb-2">
              Updates & Reports
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald uppercase font-black tracking-tight text-brand-red">
              News & Field Dispatches
            </h2>
          </div>
          <Link
            href="/impact/sustainability"
            className="inline-flex items-center gap-2 text-brand-brown font-oswald uppercase text-sm tracking-wider hover:text-brand-red transition-colors self-start md:self-end"
          >
            <span>View All Reports</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-200">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-xs font-oswald uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-zinc-400 font-mono block mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-oswald uppercase font-bold text-zinc-900 group-hover:text-brand-red transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 font-outfit text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-oswald uppercase tracking-wider text-brand-brown group-hover:text-brand-red font-bold"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
