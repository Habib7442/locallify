"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Search, MessageSquare, Monitor, ShieldCheck, ArrowRight, Zap, Trophy, BarChart3 } from "lucide-react";
import Link from "next/link";

import { motion, type Variants } from 'motion/react';

export default function ServicesPage() {
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const detailedServices = [
    {
      title: "Google Business Mastery",
      description: "We don't just 'list' you. We optimize your Google Business Profile to dominate local searches. From review automation to keyword-rich descriptions, we ensure you're the #1 choice in your neighborhood.",
      icon: Search,
      features: ["Profile Optimization", "Review Request Automation", "Local Keyword Strategy", "Photo & Update Management"],
      accent: "text-accent-primary"
    },
    {
      title: "WhatsApp Sales Engine",
      description: "Stop losing leads to dead-end websites. We build direct-to-WhatsApp commerce flows that turn casual inquiries into confirmed orders instantly.",
      icon: MessageSquare,
      features: ["Smart WhatsApp Links", "Automated Catalogs", "One-Click Ordering", "Lead Capture Forms"],
      accent: "text-accent-secondary"
    },
    {
      title: "Premium Shop Pages",
      description: "Magazine-grade digital storefronts designed for speed. We build mobile-first experiences that load in under 1 second and make your local shop look like a global luxury brand.",
      icon: Monitor,
      features: ["High-Speed Performance", "Voltage Design System", "Mobile-First UX", "Managed Hosting"],
      accent: "text-accent-primary"
    },
    {
      title: "Managed Growth Stack",
      description: "The digital world moves fast; we keep you ahead. We handle your monthly SEO, run your local FB/Insta ads, and provide a dedicated manager for zero-stress growth.",
      icon: ShieldCheck,
      features: ["FB/Insta Ad Management", "Monthly SEO Audit", "Dedicated Growth Manager", "Social Media Management"],
      accent: "text-accent-secondary"
    }
  ];

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Locallify Digital Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "Locallify"
            },
            "serviceType": ["Google Business Optimization", "WhatsApp Commerce", "Web Design", "Growth Management"],
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })
        }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl hero-content"
            >
              <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
                Capabilities
              </motion.span>
              <motion.h1 variants={itemVariants} className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
                Digital Domination. <br /> 
                <span className="text-text-muted not-italic">Local impact.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                We build the digital infrastructure that local legends use to <span className="text-text-primary font-medium">win their market.</span> Every tool, every pixel, optimized for growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── DETAILED SERVICES ────────────────────────────────────── */}
        <section className="py-24 px-6 space-y-32">
          {detailedServices.map((service, i) => (
            <motion.div 
              key={i} 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="container mx-auto"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="flex-1 space-y-8">
                  <div className={`p-4 w-16 h-16 rounded-2xl bg-bg-surface border border-border-subtle ${service.accent}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="font-display italic text-4xl md:text-6xl text-text-primary">{service.title}</h2>
                  <p className="text-text-secondary text-lg leading-relaxed">{service.description}</p>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent-primary hover:underline mt-4 text-sm font-medium">
                    See success stories <ArrowRight className="w-4 h-4" />
                  </Link>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-text-muted">
                        <Zap className="w-3 h-3 text-accent-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video bg-bg-surface border border-border-subtle rounded-[2rem] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-3/4 h-3/4 border border-border-subtle rounded-2xl bg-bg-primary flex flex-col p-6 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                        <div className="w-1/2 h-4 bg-bg-surface rounded-full mb-8" />
                        <div className="space-y-3">
                          <div className="w-full h-2 bg-bg-surface/50 rounded-full" />
                          <div className="w-full h-2 bg-bg-surface/50 rounded-full" />
                          <div className="w-3/4 h-2 bg-bg-surface/50 rounded-full" />
                        </div>
                        <div className="mt-auto flex justify-between">
                          <div className="w-12 h-12 rounded-xl bg-accent-primary/10" />
                          <div className="w-12 h-12 rounded-xl bg-bg-surface" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ─── THE METHOD ───────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-bg-surface border-y border-border-subtle">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <h2 className="font-display italic text-4xl md:text-7xl text-text-primary mb-6">The Locallify Method.</h2>
              <p className="text-text-secondary">Our proven process for taking your shop from invisible to indispensable in 48 hours.</p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
            >
               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
               
               {[
                 { step: "01", title: "Strategy & Audit", desc: "We analyze your local competitors and find the exact keywords they are missing.", icon: BarChart3 },
                 { step: "02", title: "Precision Build", desc: "Our engineers build your high-speed shop page and WhatsApp flow.", icon: Zap },
                 { step: "03", title: "Launch & Dominate", desc: "Your page goes live, indexing starts, and the leads begin flowing.", icon: Trophy }
               ].map((item, i) => (
                 <motion.div key={i} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-bg-primary border border-border-subtle flex items-center justify-center mb-8 shadow-xl">
                      <item.icon className="w-8 h-8 text-accent-primary" />
                    </div>
                    <span className="font-mono text-[10px] text-accent-primary uppercase tracking-[0.3em] mb-4">{item.step}</span>
                    <h3 className="font-sans font-bold text-xl text-text-primary mb-4">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs">{item.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────── */}
        <section className="py-24 bg-bg-primary text-center px-6">
          <div className="container mx-auto">
            <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/portfolio" className="text-accent-primary hover:underline font-medium">View Case Studies</Link>
              <span className="text-text-muted">·</span>
              <Link href="/pricing" className="text-accent-primary hover:underline font-medium">See Pricing</Link>
              <span className="text-text-muted">·</span>
              <Link href="/about" className="text-accent-primary hover:underline font-medium">About Locallify</Link>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display italic text-5xl md:text-8xl text-text-primary mb-12 leading-[0.9]"
            >
              Don't just exist. <br />
              <span className="text-accent-primary not-italic">Be the leader.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your services.")}`}
                className="inline-flex h-16 px-12 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent-hover transition-all group mb-8"
              >
                Claim your digital empire
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 border-t border-white/5 pt-12">
              <Link href="/portfolio" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                Explore Our Portfolio
              </Link>
              <Link href="/pricing" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                Our Pricing Plans
              </Link>
              <Link href="/about" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
