"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Zap, Heart, Target, ArrowRight, Globe, Users, ZapIcon } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";
import { motion, type Variants } from 'motion/react';

export default function AboutPageClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto relative z-10 about-hero"
          >
            <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              The Studio
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display italic text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight text-text-primary mb-12">
              Software engineered for <br /> 
              <span className="text-accent-primary not-italic font-sans font-bold">discoverability.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed font-light">
              Locallify is a modern software studio based in Silchar, Assam. We design and build custom web applications, mobile apps, and business portals for clients across the Barak Valley, India, and worldwide &mdash; engineered for speed, clean architecture, and instant discoverability across Google Search and AI answer engines.
            </motion.p>
          </motion.div>
          
          {/* Decorative Grid Line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
        </section>

        <div>
          {/* ─── VALUES SECTION ─────────────────────────────────────── */}
          <motion.section 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 px-4 sm:px-6"
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">Vercel-Grade Engineering</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We build using Next.js App Router, TypeScript, and modern design systems. Lightweight code, sub-second load times, and fluid motion default on every screen.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">SEO + GEO Infrastructure</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Every product is structured with custom JSON-LD schema, open-graph metadata, and semantic architecture so AI answer engines and search indexes understand your business immediately.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">100% Code Ownership</h3>
                  <p className="text-text-secondary leading-relaxed">
                    No proprietary lock-ins or closed platforms. You own 100% of your source code, IP, and repository upon launch with zero tech debt.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── PHILOSOPHY ─────────────────────────────────────────── */}
          <motion.section 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-32 px-4 sm:px-6 bg-bg-surface/30 border-y border-border-subtle"
          >
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display italic text-4xl sm:text-6xl md:text-8xl leading-none tracking-tight text-text-primary mb-12">
                  Built for speed, <br /> 
                  <span className="text-accent-primary not-italic font-sans font-bold">relevance & scale.</span>
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-12 font-light">
                  Whether building a high-converting web portal, an AI intake workflow, or a custom internal dashboard, we build software that converts visitors into customers and scales cleanly with your business.
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <span className="px-5 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    Next.js App Router
                  </span>
                  <span className="px-5 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    Structured Schema
                  </span>
                  <span className="px-5 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    100% IP Ownership
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── FINAL CTA ──────────────────────────────────────────── */}
          <CTA />
        </div>
      </main>

    </div>
  );
}
