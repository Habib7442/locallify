"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, ArrowRight, Zap, Sparkles } from "lucide-react";

const PORTFOLIO_ITEMS = [
  { id: 1, img: "/portfolio/saree/1.png", cat: "Saree & Fashion", title: "Royal Silk Boutique" },
  { id: 2, img: "/portfolio/restaurant/1.png", cat: "Restaurant", title: "Spicy Fusion Kitchen" },
  { id: 3, img: "/portfolio/salon/1.png", cat: "Salon", title: "Glow & Flow Studio" },
  { id: 4, img: "/portfolio/wedding%20cards/1.png", cat: "Wedding Cards", title: "Elite Invitations" },
  { id: 5, img: "/portfolio/saree/2.png", cat: "Saree & Fashion", title: "Modern Ethnic Wear" },
  { id: 6, img: "/portfolio/restaurant/2.png", cat: "Restaurant", title: "The Urban Grill" },
  { id: 7, img: "/portfolio/salon/2.png", cat: "Salon", title: "Style & Grace Nails" },
  { id: 8, img: "/portfolio/wedding%20cards/2.png", cat: "Wedding Cards", title: "Velvet Prints" },
  { id: 9, img: "/portfolio/saree/3.png", cat: "Saree & Fashion", title: "Banarasi Heritage" },
  { id: 10, img: "/portfolio/restaurant/3.png", cat: "Restaurant", title: "Organic Plates" },
];

const CATEGORIES = ["All", "Saree & Fashion", "Restaurant", "Salon", "Wedding Cards"];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.cat === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#D2E823] selection:text-black">
      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <header className="bg-[#203EAA] text-white py-24 px-6 border-b-8 border-black overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10">
            <Zap className="w-96 h-96 rotate-12" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-[#D2E823] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-7xl md:text-[150px] font-black leading-[0.8] tracking-[calc(-0.05em)] shadow-white uppercase mb-4 italic-none">
            Our <br /> <span className="text-[#D2E823]">Master</span>pieces.
          </h1>
          <p className="text-xl md:text-3xl font-black text-blue-200 uppercase tracking-tighter max-w-2xl leading-none pt-4">
             Cinematic digital engines built for businesses that demand growth.
          </p>
        </div>
      </header>

      {/* ─── FILTERS ─────────────────────────────────────────────── */}
      <section className="py-12 bg-white sticky top-0 z-40 border-b-4 border-black">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`flex-shrink-0 px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest border-4 border-black transition-all ${
                  activeTab === cat 
                  ? "bg-[#D2E823] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] translate-y-[-2px]" 
                  : "bg-white text-black hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F3F3F1]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                   <div className="bg-white border-4 border-black rounded-[60px] p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-[20px_20px_0_0_rgba(210,232,35,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
                      <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-black mb-8 bg-black">
                         <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                         />
                         <div className="absolute top-6 left-6">
                            <span className="bg-[#D2E823] text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border-2 border-black">
                              {item.cat}
                            </span>
                         </div>
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">Digital Experience 2026</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#7E0707] text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">WANT ONE <br /> FOR YOURSELF?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20saw%20your%20portfolio%20and%20want%20a%20similar%20site." target="_blank" rel="noopener noreferrer" 
                 className="w-full sm:w-auto bg-[#D2E823] text-black px-12 py-8 rounded-full text-2xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
                Book a Session
              </a>
              <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" 
                 className="w-full sm:w-auto bg-white text-black px-12 py-8 rounded-full text-2xl font-black flex items-center gap-4 hover:bg-zinc-100 shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
                <MessageCircle className="w-8 h-8" /> WhatsApp Us
              </a>
            </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-black text-white py-20">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 font-black uppercase tracking-[0.3em] text-[10px] opacity-40">
           <span>© 2026 LOCALLIFY.IN</span>
           <div className="flex gap-8">
             <Link href="/">Home</Link>
             <Link href="#pricing">Pricing</Link>
           </div>
         </div>
      </footer>
    </div>
  );
}
