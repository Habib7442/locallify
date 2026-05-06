'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-5xl mx-auto"
    >
      <span className="inline-block px-6 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-black uppercase tracking-[0.3em] animate-pulse">
        India's New Local Standard
      </span>
      <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter text-zinc-900">
        CLAIM YOUR <br />
        <span className="text-[#0066FF]">DIGITAL SPOTLIGHT</span>
      </h1>
      <p className="text-lg md:text-xl font-medium text-zinc-600 max-w-2xl mx-auto leading-relaxed">
        We build your <span className="text-[#0066FF] font-bold">One Page & Custom Websites</span>, manage your Google presence, and deliver leads to your WhatsApp. <span className="font-bold text-zinc-900 underline decoration-[#0066FF]/30">Starter plan (for single page) at ₹499, thereafter ₹999/month to remain active.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
        <a href="https://wa.me/919957882204?text=Hi%20Locallify!%20I%20want%20to%20claim%20my%20digital%20spotlight%20and%20get%20started%20with%20a%20One%20Page%20or%20Custom%20Website." target="_blank" className="w-full sm:w-auto bg-[#0066FF] text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg font-black shadow-[0_20px_40px_rgba(0,102,255,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
          GET STARTED NOW <ArrowRight className="w-5 h-5" />
        </a>
        <a href="https://wa.me/919957882204?text=Hi%20Locallify!%20I'd%20like%20to%20talk%20to%20an%20expert%20about%20my%20business%20presence." target="_blank" className="w-full sm:w-auto bg-white border-2 border-zinc-100 text-zinc-900 px-8 py-4 md:px-10 md:py-5 rounded-full text-lg font-black hover:bg-zinc-50 transition-all flex items-center justify-center gap-4 group shadow-sm">
          <div className="relative w-6 h-6 group-hover:scale-110 transition-transform">
            <Image src="/social-icons/whatsapp.png" alt="WhatsApp" fill sizes="24px" className="object-contain" />
          </div> 
          TALK TO US
        </a>
      </div>
    </motion.div>
  );
}
