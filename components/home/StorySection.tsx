"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StorySection() {
  return (
    <section
      id="story"
      className="relative w-full min-h-[580px] lg:min-h-[720px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/women.jpg"
        alt="African women hand-crafting shea butter"
        fill
        className="object-cover object-center scale-105"
        priority
      />

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 text-center max-w-4xl">
        <span className="text-brand-amber font-oswald uppercase text-xs lg:text-sm tracking-[0.3em] font-bold block mb-4">
          Eighteen Years of Direct Impact
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black text-white tracking-tighter leading-tight mb-8">
          The Story of <br />
          <span className="text-brand-amber">Generational Craft</span>
        </h2>

        <p className="text-white/85 font-outfit text-base lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          In 2006, Young and Dufe began with a singular premise: that African women
          who possess centuries of botanical processing knowledge should own their
          enterprises and capture the true value of their craft. Today, that vision
          powers an interconnected ecosystem of over 47,000 women.
        </p>

        <div>
          <Link
            href="/about/our-story"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-brand-caramel text-white font-oswald text-lg uppercase tracking-wider hover:bg-brand-amber hover:text-black transition-all duration-300 shadow-xl"
          >
            <span>Read Our Full Story</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
