import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-white py-12 lg:py-20 border-t border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row flex-wrap gap-12 lg:gap-20 justify-between">
          {/* Brand info & address */}
          <div className="flex flex-col gap-6 max-w-sm">
            <BrandLogo variant="color" className="h-24 w-auto self-start" />
            <div className="space-y-4 text-sm text-zinc-700 font-outfit">
              <div>
                <p className="uppercase font-bold tracking-tight text-xs text-brand-brown">
                  Phone
                </p>
                <p className="text-base font-medium text-zinc-900">
                  +233 302737709
                </p>
              </div>
              <div>
                <p className="uppercase font-bold tracking-tight text-xs text-brand-brown">
                  Head Office
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Head Office Tamale, P.O. Box TL 20, Tamale <br />
                  Northern Region, Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl">
              Internal Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-zinc-700 text-sm font-outfit">
              <li>
                <Link
                  href="/about/our-story"
                  className="hover:text-brand-red transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about/partners"
                  className="hover:text-brand-red transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/impact/sustainability"
                  className="hover:text-brand-red transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/impact/biodiversity"
                  className="hover:text-brand-red transition-colors"
                >
                  Biodiversity
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-brand-red transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-red transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products - Shea Butter Only */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl">
              Our Products
            </h3>
            <ul className="flex flex-col gap-2.5 text-zinc-700 text-sm font-outfit">
              <li>
                <Link
                  href="/products/shea-butter"
                  className="hover:text-brand-red transition-colors"
                >
                  Handcrafted Unrefined Shea (Grade A)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/shea-butter#export-specs"
                  className="hover:text-brand-red transition-colors"
                >
                  Steam-Refined &amp; Deodorized Shea
                </Link>
              </li>
              <li>
                <Link
                  href="/products/shea-butter#export-specs"
                  className="hover:text-brand-red transition-colors"
                >
                  Bulk Drums &amp; Containers (FCL)
                </Link>
              </li>
              <li>
                <Link
                  href="/#countries-text"
                  className="hover:text-brand-red transition-colors"
                >
                  Origin Provenance &amp; Traceability
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Socials */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl mb-4">
                Legal
              </h3>
              <ul className="flex flex-col gap-2 text-zinc-700 text-sm font-outfit">
                <li>
                  <Link href="/faq" className="hover:text-brand-red transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-brand-red transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold tracking-tight uppercase font-oswald text-brand-brown text-2xl mb-3">
                Socials
              </h3>
              <div className="flex items-center gap-5 text-zinc-900">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M15.12 5.32H17V2.14A26 26 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                    <path d="M3.44 4.89c.8 0 1.44-.65 1.44-1.44s-.65-1.44-1.44-1.44S2 2.66 2 3.45s.65 1.44 1.44 1.44m2.81 1.09V14h2.48v-3.96c0-1.05.2-2.06 1.49-2.06s1.29 1.2 1.29 2.12V14H14V9.6c0-2.16-.46-3.82-2.98-3.82c-1.21 0-2.02.66-2.35 1.29h-.03v-1.1H6.26Zm-4.05 0h2.49V14H2.2z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9.935 14.628v-5.62l5.403 2.82zM21.8 8.035s-.195-1.379-.795-1.986c-.76-.796-1.613-.8-2.004-.847C16.203 5 12.004 5 12.004 5h-.008s-4.198 0-6.997.202c-.391.047-1.243.05-2.004.847c-.6.607-.795 1.986-.795 1.986S2 9.653 2 11.272v1.517c0 1.618.2 3.237.2 3.237s.195 1.378.795 1.985c.76.797 1.76.771 2.205.855c1.6.153 6.8.2 6.8.2s4.203-.006 7.001-.208c.391-.047 1.244-.05 2.004-.847c.6-.607.795-1.985.795-1.985s.2-1.619.2-3.237v-1.517c0-1.619-.2-3.237-.2-3.237" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© 2026 Young and Dufe Company. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Handcrafted Ethical African Ingredients</p>
        </div>
      </div>
    </footer>
  );
}
