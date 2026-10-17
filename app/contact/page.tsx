"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, CheckCircle2, Send, Building2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    products: [] as string[],
    volume: "1-5 Tons",
    message: "",
  });

  const handleProductToggle = (prod: string) => {
    setFormData((prev) => {
      const exists = prev.products.includes(prod);
      return {
        ...prev,
        products: exists
          ? prev.products.filter((p) => p !== prod)
          : [...prev.products, prod],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#F8F2EC] border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-6">
              <Mail className="w-4 h-4 text-brand-red" />
              Turnkey Shea Butter Export &amp; Wholesale Contracts
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              We Do Everything For You. <br />
              <span className="text-brand-red">And Export Directly To You.</span>
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Request cosmetic grade Shea butter samples, Certificates of Analysis (COA), or contract 20ft/40ft container loads dispatched directly from Port of Tema (Ghana) or rapid pails from our Netherlands distribution center.
            </p>
          </div>
        </section>

        {/* Global Office Directory */}
        <section className="py-20 bg-white border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Office 1: Tamale */}
              <div className="bg-[#F8F2EC] rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 flex items-center justify-center text-brand-brown mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block mb-1">
                    Origin Operations Hub
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Tamale Head Office
                  </h3>
                  <div className="space-y-3 text-sm font-outfit text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                      <span>
                        P.O. Box TL 20, Tamale <br />
                        Northern Region, Ghana
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-red shrink-0" />
                      <span>+233 302737709</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200 text-xs text-zinc-500 font-mono">
                  GMT +00:00 (Processing & Labs)
                </div>
              </div>

              {/* Office 2: Accra */}
              <div className="bg-[#F8F2EC] rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block mb-1">
                    Commercial & Regional
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    Accra Office
                  </h3>
                  <div className="space-y-3 text-sm font-outfit text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                      <span>
                        F276/5A Fourth Dade Walk – Labone <br />
                        Accra, Greater Accra, Ghana
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-red shrink-0" />
                      <span>+233 302737709</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200 text-xs text-zinc-500 font-mono">
                  GMT +00:00 (Regional Commercial)
                </div>
              </div>

              {/* Office 3: Netherlands */}
              <div className="bg-[#F8F2EC] rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-amber/15 flex items-center justify-center text-brand-brown mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-red font-bold block mb-1">
                    European Logistics Hub
                  </span>
                  <h3 className="text-2xl font-oswald uppercase font-bold text-brand-brown mb-4">
                    European Distribution
                  </h3>
                  <div className="space-y-3 text-sm font-outfit text-zinc-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                      <span>
                        Haarlemmerstraatweg 79 <br />
                        1165MK Halfweg, The Netherlands
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-red shrink-0" />
                      <span>+31 (0) 20 894 3300</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200 text-xs text-zinc-500 font-mono">
                  CET +01:00 (EU Warehousing & Pails)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wholesale Inquiry Form */}
        <section className="py-24 bg-[#F8F2EC]">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-zinc-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-oswald uppercase font-bold text-brand-brown mb-2">
                  Wholesale & Sample Inquiry
                </h2>
                <p className="text-zinc-600 font-outfit text-sm">
                  Complete the form below and an account director will respond within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-oswald uppercase font-bold text-emerald-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm font-outfit text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out to Young and Dufe. Our technical
                    sales team will review your specifications and dispatch sample
                    documentation shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-emerald-700 text-white font-oswald uppercase text-xs tracking-wider font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Company / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Organic Beauty Labs"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red"
                      />
                    </div>
                  </div>

                  {/* Products Selection */}
                  <div>
                    <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                      Shea Butter Grades of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "Raw Unrefined Shea",
                        "Steam-Refined Shea",
                        "Liquid Shea Oil",
                        "Shea Black Soap",
                      ].map((prod) => {
                        const isChecked = formData.products.includes(prod);
                        return (
                          <button
                            type="button"
                            key={prod}
                            onClick={() => handleProductToggle(prod)}
                            className={`p-3 rounded-xl border text-xs font-oswald uppercase tracking-wider text-center transition-all cursor-pointer ${
                              isChecked
                                ? "bg-brand-brown text-white border-brand-brown shadow-sm"
                                : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400"
                            }`}
                          >
                            {prod}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Volume Selection & Incoterms */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Estimated Volume Needs
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) =>
                          setFormData({ ...formData, volume: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red bg-white"
                      >
                        <option value="Sample Kit Only">Sample Kit Only (&lt; 5kg)</option>
                        <option value="25kg Pails (500kg - 2 MT)">25kg Pails (500kg - 2 MT via EU Hub)</option>
                        <option value="190kg Steel Drums (2 - 10 MT)">190kg Steel Drums (2 - 10 MT)</option>
                        <option value="20ft Container (~19.5 MT FCL)">20ft Full Container Load (~19.5 MT FCL)</option>
                        <option value="40ft Container (~24.5 MT FCL)">40ft Full Container Load (~24.5 MT FCL)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                        Preferred Incoterm / Freight
                      </label>
                      <select
                        defaultValue="FOB Tema (Ghana Container Port)"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red bg-white"
                      >
                        <option value="FOB Tema (Ghana Container Port)">FOB Tema Port, Ghana (Direct Ocean)</option>
                        <option value="CIF Europe (Rotterdam / Hamburg)">CIF Europe (Rotterdam, Hamburg, Antwerp)</option>
                        <option value="CIF North America (New York / Long Beach)">CIF North America (New York, Long Beach)</option>
                        <option value="DDP Europe (Halfweg Distribution)">DDP Europe (Direct from Netherlands Hub)</option>
                        <option value="CIF Asia / Latin America / Other">CIF Other Destination Port</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-oswald tracking-wider text-zinc-700 mb-2 font-bold">
                      Inquiry Details &amp; Destination Port
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify destination port, unrefined vs steam-deodorized preferences, required lab parameters (FFA, peroxide value), or custom packing requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 font-outfit text-sm focus:outline-brand-red"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-red text-white font-oswald uppercase tracking-wider text-base font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Submit Shea Butter Export Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
