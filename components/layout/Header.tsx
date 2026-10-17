"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ChevronDown, Menu, X } from "lucide-react";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant = "transparent" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [impactDropdown, setImpactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active visual state
  const isSolid = variant === "solid" || isScrolled;

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          isSolid
            ? "fixed top-0 left-0 bg-[#1A1512]/95 backdrop-blur-md text-white shadow-xl border-b border-[#C98A2C]/20 py-3.5"
            : "absolute top-0 left-0 bg-transparent text-white py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            {isSolid ? (
              /* Scrolled / Solid State: Single row with logo on left, nav on right */
              <div className="flex items-center justify-between">
                <BrandLogo variant="white" className="h-12 w-auto" />

                <nav>
                  <ul className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider font-outfit">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        Home
                      </Link>
                    </li>

                    {/* About Us Dropdown */}
                    <li
                      className="relative"
                      onMouseEnter={() => setAboutDropdown(true)}
                      onMouseLeave={() => setAboutDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>About Us</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {aboutDropdown && (
                        <div className="absolute top-full left-0 w-56 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/about/our-story"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Our Story
                          </Link>
                          <Link
                            href="/about/partners"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Partners
                          </Link>
                        </div>
                      )}
                    </li>

                    {/* Products Dropdown - Shea Butter Only */}
                    <li
                      className="relative"
                      onMouseEnter={() => setProductsDropdown(true)}
                      onMouseLeave={() => setProductsDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>Our Products</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {productsDropdown && (
                        <div className="absolute top-full left-0 w-60 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/products/shea-butter"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Shea Butter (Flagship)
                          </Link>
                          <Link
                            href="/products/shea-butter#export-specs"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Export Specifications
                          </Link>
                        </div>
                      )}
                    </li>

                    {/* Impact Dropdown */}
                    <li
                      className="relative"
                      onMouseEnter={() => setImpactDropdown(true)}
                      onMouseLeave={() => setImpactDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>Impact</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {impactDropdown && (
                        <div className="absolute top-full left-0 w-56 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/impact/sustainability"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Sustainability
                          </Link>
                          <Link
                            href="/impact/biodiversity"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Biodiversity
                          </Link>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link
                        href="/faq"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        FAQ
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : (
              /* Top / Unscrolled State: Centered logo on top, centered nav below */
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4">
                  <BrandLogo variant="white" className="h-20 sm:h-24 w-auto" />
                </div>

                <nav>
                  <ul className="flex items-center gap-10 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] font-outfit text-white">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        Home
                      </Link>
                    </li>

                    {/* About Us Dropdown */}
                    <li
                      className="relative"
                      onMouseEnter={() => setAboutDropdown(true)}
                      onMouseLeave={() => setAboutDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>About Us</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {aboutDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/about/our-story"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Our Story
                          </Link>
                          <Link
                            href="/about/partners"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Partners
                          </Link>
                        </div>
                      )}
                    </li>

                    {/* Products Dropdown - Shea Butter Only */}
                    <li
                      className="relative"
                      onMouseEnter={() => setProductsDropdown(true)}
                      onMouseLeave={() => setProductsDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>Our Products</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {productsDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/products/shea-butter"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Shea Butter (Flagship)
                          </Link>
                          <Link
                            href="/products/shea-butter#export-specs"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Export Specifications
                          </Link>
                        </div>
                      )}
                    </li>

                    {/* Impact Dropdown */}
                    <li
                      className="relative"
                      onMouseEnter={() => setImpactDropdown(true)}
                      onMouseLeave={() => setImpactDropdown(false)}
                    >
                      <button className="flex items-center gap-1.5 py-2 hover:text-brand-amber transition-colors uppercase cursor-pointer">
                        <span>Impact</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      {impactDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white text-zinc-800 shadow-2xl rounded-2xl py-3 z-50 border border-zinc-100 animate-in fade-in slide-in-from-top-1 duration-200">
                          <Link
                            href="/impact/sustainability"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Sustainability
                          </Link>
                          <Link
                            href="/impact/biodiversity"
                            className="block px-5 py-2.5 hover:bg-brand-accent hover:text-brand-red transition-colors text-xs font-medium uppercase tracking-wider"
                          >
                            Biodiversity
                          </Link>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link
                        href="/faq"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        FAQ
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-brand-amber transition-colors py-2 block"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>

          {/* Mobile Header: Always a single row */}
          <div className="lg:hidden flex items-center justify-between">
            <BrandLogo variant="white" className="h-12 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 text-white hover:text-brand-amber transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-red text-white flex flex-col p-6 overflow-y-auto animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-8">
            <BrandLogo variant="white" className="h-12 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation"
              className="p-2 text-white hover:text-brand-amber"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-6 text-2xl font-oswald uppercase tracking-tight">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-brand-amber"
                >
                  Home
                </Link>
              </li>

              {/* Mobile About */}
              <li className="border-b border-white/10 pb-4">
                <span className="text-white/60 text-xs block mb-2 font-sans tracking-widest uppercase">
                  About Us
                </span>
                <div className="flex flex-col gap-3 pl-4 text-xl">
                  <Link
                    href="/about/our-story"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber"
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about/partners"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber"
                  >
                    Partners
                  </Link>
                </div>
              </li>

              {/* Mobile Products - Shea Butter Only */}
              <li className="border-b border-white/10 pb-4">
                <span className="text-white/60 text-xs block mb-2 font-sans tracking-widest uppercase">
                  Our Products
                </span>
                <div className="flex flex-col gap-3 pl-4 text-xl">
                  <Link
                    href="/products/shea-butter"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber"
                  >
                    Shea Butter (Flagship)
                  </Link>
                  <Link
                    href="/products/shea-butter#export-specs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber text-base opacity-80"
                  >
                    Export Specifications
                  </Link>
                </div>
              </li>

              {/* Mobile Impact */}
              <li className="border-b border-white/10 pb-4">
                <span className="text-white/60 text-xs block mb-2 font-sans tracking-widest uppercase">
                  Impact
                </span>
                <div className="flex flex-col gap-3 pl-4 text-xl">
                  <Link
                    href="/impact/sustainability"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/impact/biodiversity"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-amber"
                  >
                    Biodiversity
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-brand-amber"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-brand-amber"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-8 pt-4 border-t border-white/20 text-xs font-sans text-white/80">
            <p className="font-bold">Young and Dufe Head Office</p>
            <p className="text-white/60">Tamale, Northern Region, Ghana</p>
          </div>
        </div>
      )}
    </>
  );
}
