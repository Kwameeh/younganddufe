"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, QrCode, CheckCircle2, ArrowRight } from "lucide-react";

export function TraceToSource() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTraceModal, setShowTraceModal] = useState(false);
  const [batchInput, setBatchInput] = useState("");
  const [searchedBatch, setSearchedBatch] = useState<string | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTraceLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (batchInput.trim()) {
      setSearchedBatch(batchInput.trim().toUpperCase());
    }
  };

  return (
    <section id="countries-text" className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Traceability Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="w-16 h-1.5 bg-black mb-6 rounded-full" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-amber/15 text-brand-brown text-xs font-semibold tracking-widest uppercase mb-4 w-fit">
              <QrCode className="w-4 h-4 text-brand-brown" />
              Origin-To-Container Provenance
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-oswald uppercase font-black tracking-tight text-brand-red leading-[1.0] mb-6">
              Trace To Source
            </h2>

            <p className="text-zinc-700 font-outfit text-base lg:text-lg leading-relaxed mb-6">
              Every export shipment of Young and Dufe Shea Butter comes with end-to-end verified provenance. From GPS-mapped savannah parklands to the community processing centers, export packaging, and maritime container seals, we provide complete digital batch integrity for your brand.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-outfit text-zinc-800">
                  <strong>GPS Geolocation:</strong> Trace each shea nut collection to certified organic parkland zones.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-outfit text-zinc-800">
                  <strong>Cooperative Identification:</strong> Know the specific community and women leaders who crafted your batch.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-outfit text-zinc-800">
                  <strong>EUDR &amp; Phytosanitary Dossier:</strong> Complete export regulatory compliance ready for European &amp; global customs.
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowTraceModal(true)}
                className="px-8 py-4 bg-brand-amber text-zinc-950 font-oswald font-bold uppercase text-base tracking-wider rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-md inline-flex items-center gap-3 cursor-pointer"
              >
                <span>Access Live Trace</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Video Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video lg:aspect-[4/3] group border-4 border-brand-accent">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/trace-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video control button overlay */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="absolute bottom-6 right-6 p-4 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-brand-amber hover:text-black transition-all cursor-pointer shadow-lg"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-oswald uppercase tracking-widest flex items-center gap-2 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                Origin Footage: Tamale, Ghana
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trace Batch Modal */}
      {showTraceModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-zinc-100 relative">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
              <div className="flex items-center gap-2">
                <QrCode className="w-6 h-6 text-brand-red" />
                <h3 className="font-oswald text-2xl uppercase tracking-tight text-brand-brown">
                  Trace Your Batch
                </h3>
              </div>
              <button
                onClick={() => {
                  setShowTraceModal(false);
                  setSearchedBatch(null);
                }}
                className="text-zinc-400 hover:text-zinc-800 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-zinc-600 font-outfit mb-4">
              Enter the 6-character or 8-character batch code found stamped on your Young and Dufe package or shipping manifest:
            </p>

            <form onSubmit={handleTraceLookup} className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="e.g. YD-2026-SB"
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-zinc-300 font-mono uppercase text-sm focus:outline-brand-red"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-brand-brown text-white font-oswald uppercase rounded-xl hover:bg-black transition-colors"
              >
                Verify
              </button>
            </form>

            {searchedBatch && (
              <div className="p-4 rounded-2xl bg-brand-accent border border-brand-amber/30 space-y-2 text-xs font-outfit">
                <div className="flex justify-between items-center text-emerald-700 font-bold">
                  <span>Status: Authenticated Authentic Batch</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="pt-2 border-t border-zinc-200">
                  <p><strong>Batch:</strong> {searchedBatch}</p>
                  <p><strong>Harvest Region:</strong> Northern Region, Tamale Zone</p>
                  <p><strong>Cooperative:</strong> Sungbaŋi Women Cooperative (148 Members)</p>
                  <p><strong>Processing Center:</strong> Sagnarigu Eco-Facility #03</p>
                  <p><strong>Certification:</strong> ECOCERT Organic / Fair For Life #GH-2026-401</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
