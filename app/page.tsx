import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/home/HeroVideo";
import { StatCardsGrid } from "@/components/home/StatCardsGrid";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TurnkeyExportProcess } from "@/components/home/TurnkeyExportProcess";
import { SustainabilityAccordion } from "@/components/home/SustainabilityAccordion";
import { ImpactBanner } from "@/components/home/ImpactBanner";
import { HighlightsBento } from "@/components/home/HighlightsBento";
import { CountryPresence } from "@/components/home/CountryPresence";
import { TraceToSource } from "@/components/home/TraceToSource";
import { StorySection } from "@/components/home/StorySection";
import { NewsGrid } from "@/components/home/NewsGrid";
import { SDGGrid } from "@/components/home/SDGGrid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-accent selection:bg-brand-red selection:text-white">
      {/* Floating Transparent Header for Homepage */}
      <Header variant="transparent" />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Fullscreen Video Hero */}
        <HeroVideo />

        {/* 2. Impact Statistics & Brand Narrative */}
        <StatCardsGrid />

        {/* 3. Partner Marquee */}
        <PartnerMarquee />

        {/* 4. Signature Product Showcase (4 Cards) */}
        <ProductShowcase />

        {/* 4.5 Turnkey Export Pipeline */}
        <TurnkeyExportProcess />

        {/* 5. Structural Principles of Sustainability Accordion */}
        <SustainabilityAccordion />

        {/* 6. Video Impact Banner ("Shea Gets Greener") */}
        <ImpactBanner />

        {/* 7. Highlights Bento Grid */}
        <HighlightsBento />

        {/* 8. West African Country Presence */}
        <CountryPresence />

        {/* 9. Trace To Source (Narrative + Video Player) */}
        <TraceToSource />

        {/* 10. The Story Photo Hero Section */}
        <StorySection />

        {/* 11. News & Dispatches */}
        <NewsGrid />

        {/* 12. UN Sustainable Development Goals */}
        <SDGGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
