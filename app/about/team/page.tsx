"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users2, Award, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  location: string;
  bio: string;
}

const teamList: TeamMember[] = [
  {
    name: "Raphael Gonzalez",
    role: "Managing Director & Co-Founder",
    department: "Executive Leadership",
    location: "Accra / Tamale, Ghana",
    bio: "Pioneered community-reinvested supply chains over two decades, architecting partnerships that connect West African rural gatherers directly to premier global cosmetic brands.",
  },
  {
    name: "Bart Botterman",
    role: "Director of Operations & Co-Founder",
    department: "Operations & Processing",
    location: "Tamale, Ghana",
    bio: "Specializes in eco-modern bio-energy facilities, circular shea-cake briquette manufacturing, and high-efficiency mechanical extraction systems.",
  },
  {
    name: "Joel Brenya Attey",
    role: "General Finance Manager",
    department: "Finance & Governance",
    location: "Accra, Ghana",
    bio: "Oversees financial audits, Fair Trade direct premium disbursements, mobile money infrastructure, and annual ESG accounting.",
  },
  {
    name: "Hubert Courreges",
    role: "Commercial & Supply Chain Director",
    department: "Global Sales & Logistics",
    location: "Europe / Ghana",
    bio: "Leads bulk wholesale contracts, EUDR regulatory compliance, international maritime freight logistics, and client sample pipelines.",
  },
  {
    name: "Linda Bado Zouabet",
    role: "Cooperative Liaison Officer",
    department: "Community Governance",
    location: "Upper West Region, Ghana",
    bio: "Facilitates democratic voting, cooperative assemblies, leadership training, and transparent price negotiations across 50+ women-led groups.",
  },
  {
    name: "Gladys A. Atanga",
    role: "Quality Assurance & Lab Manager",
    department: "Laboratory & Analytics",
    location: "Tamale Facility Lab",
    bio: "Directs internal analytical chemistry testing, fatty acid profiles, peroxide value monitoring, and ECOCERT organic compliance.",
  },
  {
    name: "Julien Koïkas",
    role: "European Distribution Manager",
    department: "EU Operations Hub",
    location: "Halfweg, Netherlands",
    bio: "Manages European customs clearance, cold-storage inventory, sample distribution, and localized delivery logistics across the EU & UK.",
  },
  {
    name: "Obed Rocky Dadzie",
    role: "Agronomist & Field Coordinator",
    department: "Agroforestry & Ecology",
    location: "Northern & Upper East",
    bio: "Leads GPS tree tagging, agroforestry boundary demarcation, wildfire buffer zones, and seedling nursery replanting projects.",
  },
  {
    name: "Alhassan Abu Safian",
    role: "Processing Center Operations",
    department: "Manufacturing",
    location: "Tamale Processing Hub",
    bio: "Supervises artisan milling, mechanical filtration, and environmental health & safety protocols across regional processing hubs.",
  },
  {
    name: "Janet Gariba",
    role: "Women's Cooperative Coordinator",
    department: "Field Community",
    location: "Wa District, Ghana",
    bio: "A native speaker and community organizer ensuring fair trade organic premiums are transparently distributed directly into individual accounts.",
  },
  {
    name: "Wilhemina Kamasa",
    role: "Sourcing & Traceability Lead",
    department: "Digital Traceability",
    location: "Northern Region, Ghana",
    bio: "Oversees digital barcode scanning, QR code batch documentation, and digital proof-of-origin systems for wholesale containers.",
  },
  {
    name: "Ruth A. Kwashie",
    role: "Administration & Compliance",
    department: "Corporate Affairs",
    location: "Accra Office, Ghana",
    bio: "Manages export documentation, phytosanitary certificates, international trade legal compliance, and human resource management.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      <Header variant="solid" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-brand-accent border-b border-zinc-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-semibold tracking-widest uppercase mb-6">
              <Users2 className="w-4 h-4 text-brand-red" />
              People & Operators
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-oswald uppercase tracking-tight text-brand-brown leading-tight mb-6">
              The Dedicated Team Behind Origin Quality
            </h1>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              From field agronomists mapping ancient parkland trees to analytical
              chemists in our Tamale lab, meet the experts ensuring verified
              quality and regenerative impact.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamList.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-brand-accent/60 rounded-3xl p-6 border border-zinc-200 hover:border-brand-brown hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-600 font-semibold">
                        {member.department}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-oswald uppercase font-bold text-zinc-900 tracking-tight mb-1">
                      {member.name}
                    </h3>

                    <p className="text-xs uppercase tracking-wider font-oswald text-brand-red font-semibold mb-3">
                      {member.role}
                    </p>

                    <p className="text-xs text-zinc-500 font-outfit mb-4">
                      📍 {member.location}
                    </p>

                    <p className="text-zinc-600 font-outfit text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500 font-outfit">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-brand-amber" />
                      Verified Leader
                    </span>
                    <span className="text-[11px] font-mono text-brand-brown font-semibold">
                      Young & Dufe
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cooperative Field Leadership Highlight */}
        <section className="py-20 bg-brand-brown text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-amber font-oswald block mb-3">
              Grassroots Leadership
            </span>
            <h2 className="text-3xl lg:text-5xl font-oswald uppercase tracking-tight mb-6">
              Honoring Our 50+ Women Cooperative Presidents
            </h2>
            <p className="text-white/85 font-outfit text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              True leadership starts in the communities. Every cooperative in
              our network is democratically governed by elected women presidents,
              treasurers, and organizers who determine local infrastructure
              priorities and oversee fair trade premiums.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white font-oswald uppercase tracking-wider text-sm border border-white/20">
              <span>Democratic Self-Governance Since 2006</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
