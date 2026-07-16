"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Search, MessageSquare, Monitor, ShieldCheck, ArrowRight, Zap, Trophy, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from 'motion/react';

// ─── Service Graphic Components ───────────────────────────────────────────────

function SoftwareSaaSGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-xs space-y-2 text-[10px]">
        {/* Table header */}
        <div className="bg-bg-elevated border border-border-default rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-accent-primary/10 border-b border-border-default">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            <span className="text-accent-primary tracking-wider uppercase">tbl_users</span>
          </div>
          {[["id","uuid","PK"],["name","varchar(80)",""],["email","text","UNIQUE"],["role_id","uuid","FK"]].map(([col, type, tag]) => (
            <div key={col} className="flex items-center justify-between px-3 py-1.5 border-b border-border-default/40 last:border-0">
              <span className="text-text-secondary">{col}</span>
              <span className="text-text-muted">{type}</span>
              {tag && <span className="text-[8px] bg-accent-primary/15 text-accent-primary rounded px-1.5 py-0.5">{tag}</span>}
            </div>
          ))}
        </div>
        {/* Relation line */}
        <div className="flex justify-center">
          <div className="w-px h-4 bg-border-default" />
        </div>
        <div className="bg-bg-elevated border border-border-default rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-cyan-400/10 border-b border-border-default">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 tracking-wider uppercase">tbl_roles</span>
          </div>
          {[["id","uuid","PK"],["name","varchar(40)",""],["permissions","jsonb",""]].map(([col, type, tag]) => (
            <div key={col} className="flex items-center justify-between px-3 py-1.5 border-b border-border-default/40 last:border-0">
              <span className="text-text-secondary">{col}</span>
              <span className="text-text-muted">{type}</span>
              {tag && <span className="text-[8px] bg-cyan-400/15 text-cyan-400 rounded px-1.5 py-0.5">{tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebAppsGraphic() {
  const bars = [38, 55, 42, 70, 62, 88, 76, 95];
  return (
    <div className="w-full h-full flex flex-col justify-center p-5 font-mono gap-4">
      {/* Top metrics row */}
      <div className="grid grid-cols-3 gap-2">
        {[["14ms","Latency"],["99.8%","Uptime"],["98","Perf"]].map(([val, label]) => (
          <div key={label} className="bg-bg-elevated border border-border-default rounded-xl p-2.5 text-center">
            <div className="text-accent-primary font-sans font-bold text-base leading-none mb-1">{val}</div>
            <div className="text-text-muted text-[9px] uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="text-[9px] text-text-muted uppercase tracking-wider mb-3">Weekly Traffic</div>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className="w-full rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === bars.length - 1
                    ? 'var(--accent-primary)'
                    : 'rgba(208,255,20,0.2)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Stack badge */}
      <div className="flex gap-2">
        <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">Next.js 15</span>
        <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">React 19</span>
        <span className="text-[9px] bg-bg-elevated border border-border-default rounded-full px-2.5 py-1 text-text-muted">Edge Runtime</span>
      </div>
    </div>
  );
}

function MobileAppsGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      {/* Phone silhouette */}
      <div className="relative w-44 h-full max-h-72 bg-bg-elevated border-2 border-border-default rounded-[28px] overflow-hidden shadow-2xl flex flex-col">
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-16 h-1.5 bg-bg-surface rounded-full" />
        </div>
        {/* Profile card */}
        <div className="px-3 pt-1 flex-1 overflow-hidden space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-border-default/40">
            <div className="w-7 h-7 rounded-full bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center">
              <span className="text-accent-primary text-[8px] font-bold">AB</span>
            </div>
            <div>
              <div className="text-[9px] text-text-primary font-medium">Arjun Mehta</div>
              <div className="text-[8px] text-text-muted">@arjun.m</div>
            </div>
          </div>
          {/* Feed items */}
          {[
            { w: "w-full", h: "h-16", color: "bg-purple-400/15 border-purple-400/20" },
            { w: "w-11/12", h: "h-12", color: "bg-accent-primary/10 border-accent-primary/20" },
          ].map((item, i) => (
            <div key={i} className={`${item.w} ${item.h} rounded-xl border ${item.color} p-2 flex flex-col justify-between`}>
              <div className="w-3/4 h-1.5 bg-bg-surface rounded-full" />
              <div className="flex gap-1.5">
                <div className="w-8 h-1 bg-bg-surface/60 rounded-full" />
                <div className="w-6 h-1 bg-bg-surface/60 rounded-full" />
              </div>
            </div>
          ))}
          {/* Action tags */}
          <div className="flex gap-1 flex-wrap pt-1">
            {["Like","Share","Save"].map(tag => (
              <span key={tag} className="text-[8px] bg-bg-surface border border-border-default/60 rounded-full px-2 py-0.5 text-text-muted">{tag}</span>
            ))}
          </div>
        </div>
        {/* Bottom tab bar */}
        <div className="flex justify-around items-center py-2.5 border-t border-border-default bg-bg-surface">
          {["⌂","◎","✦","◷"].map((icon, i) => (
            <span key={i} className={`text-sm ${i === 0 ? "text-accent-primary" : "text-text-muted"}`}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SEOGraphic() {
  // Exponential-ish SVG path
  const points = [0,5,8,14,20,32,52,80,100];
  const svgW = 200, svgH = 80;
  const pathD = points.map((v, i) => {
    const x = (i / (points.length - 1)) * svgW;
    const y = svgH - (v / 100) * svgH;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");

  return (
    <div className="w-full h-full flex flex-col justify-center p-5 gap-4 font-mono">
      {/* GSC-style header */}
      <div className="bg-bg-elevated border border-border-default rounded-xl p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] text-text-muted uppercase tracking-wider">Search Performance</span>
          <span className="text-[8px] text-semantic-good bg-semantic-good/10 rounded-full px-2 py-0.5">▲ 312%</span>
        </div>
        <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={pathD + ` L${svgW},${svgH} L0,${svgH} Z`} fill="url(#seoGrad)" />
          <path d={pathD} fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      {/* Lighthouse scores */}
      <div className="grid grid-cols-4 gap-1.5">
        {[["100","Perf"],["100","SEO"],["99","A11y"],["100","BP"]].map(([score, label]) => (
          <div key={label} className="bg-bg-elevated border border-border-default rounded-lg p-2 text-center">
            <div className="text-semantic-good font-sans font-bold text-xs leading-none mb-1">{score}</div>
            <div className="text-[8px] text-text-muted">{label}</div>
          </div>
        ))}
      </div>
      {/* AI snippet badge */}
      <div className="bg-accent-secondary/10 border border-accent-secondary/25 rounded-xl px-3 py-2 text-[9px] text-accent-secondary">
        ✦ Featured in AI Overview · locallifyagency.com
      </div>
    </div>
  );
}

function AutomationGraphic() {
  const nodes = [
    { label: "Webhook Trigger", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/30" },
    { label: "n8n Splitter", color: "text-accent-primary", bg: "bg-accent-primary/10 border-accent-primary/30" },
    { label: "Email Notify", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-2 font-mono">
      <div className="text-[9px] text-text-muted uppercase tracking-widest mb-2">Automation Flow</div>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <div className={`flex items-center gap-2 border ${node.bg} rounded-xl px-4 py-3 w-full max-w-xs`}>
            <span className={`w-2 h-2 rounded-full ${node.color} bg-current animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }} />
            <span className={`text-[10px] ${node.color} font-medium tracking-wide`}>{node.label}</span>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex flex-col items-center gap-0.5">
              {[0,1,2].map(d => (
                <div key={d} className="w-px h-1.5 bg-border-default" />
              ))}
              <div className="w-1.5 h-1.5 border-r border-b border-border-default rotate-45 -mt-0.5" />
            </div>
          )}
        </React.Fragment>
      ))}
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 w-full mt-3">
        {[["4.2k","Runs/day"],["99.7%","Success"],["0","Errors"]].map(([v, l]) => (
          <div key={l} className="bg-bg-elevated border border-border-default rounded-lg p-2 text-center">
            <div className="text-text-primary font-sans font-bold text-xs">{v}</div>
            <div className="text-[8px] text-text-muted mt-0.5">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const serviceGraphics = [
  SoftwareSaaSGraphic,
  WebAppsGraphic,
  MobileAppsGraphic,
  SEOGraphic,
  AutomationGraphic,
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const detailedServices = [
    {
      title: "Custom Software & SaaS",
      description: "Internal tools, admin portals, reporting dashboards, and workflow systems designed around how your company actually works. Built to scale securely.",
      icon: Monitor,
      features: ["Custom Web Portals", "Admin & Role Management", "Database Architecture", "Third-Party APIs"],
      accent: "text-accent-primary",
      borderColor: "group-hover:border-accent-primary/30",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(208,255,20,0.04)]"
    },
    {
      title: "Web Apps & Products",
      description: "High-performance web applications built on Next.js/React. We combine stunning interactive designs with robust backend databases for smooth user journeys.",
      icon: Zap,
      features: ["Next.js & React Frontend", "Interactive Dashboards", "State & Cache Tuning", "Secure Auth Systems"],
      accent: "text-cyan-400",
      borderColor: "group-hover:border-cyan-400/30",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(34,211,238,0.04)]"
    },
    {
      title: "Mobile Applications",
      description: "Refined cross-platform iOS and Android apps using React Native. We manage everything from UI architecture to publishing in the App Store & Google Play.",
      icon: ShieldCheck,
      features: ["iOS & Android Builds", "React Native Architecture", "Offline-First Support", "Store Submission Management"],
      accent: "text-purple-400",
      borderColor: "group-hover:border-purple-400/30",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(192,132,252,0.04)]"
    },
    {
      title: "SEO & GEO Systems",
      description: "Structured schema markup, optimal Web Vitals, entity relationships, and answer-ready indexing so your software ranks on Google and gets referenced in AI searches.",
      icon: Search,
      features: ["Structured Schema Markup", "Core Web Vitals Optimization", "Generative Engine Prep", "Entity-Clarity Mapping"],
      accent: "text-accent-secondary",
      borderColor: "group-hover:border-accent-secondary/30",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(255,92,40,0.04)]"
    },
    {
      title: "n8n & Automations",
      description: "Automate manual tasks and connect your apps with webhook-triggered pipelines. We build self-healing operations logic that links tools and pipes data automatically.",
      icon: MessageSquare,
      features: ["n8n Workflow Design", "Webhook & API Sync", "Automated CRM Handoffs", "AI Pipeline Integrations"],
      accent: "text-emerald-400",
      borderColor: "group-hover:border-emerald-400/30",
      glowColor: "group-hover:shadow-[0_0_25px_rgba(52,211,153,0.04)]"
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
            "name": "Locallify Custom Software & SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "Locallify",
              "url": "https://locallifyagency.com"
            },
            "serviceType": ["Custom Software Development", "Web Application Development", "Mobile App Development", "SEO & GEO Optimization", "n8n Workflow Automation"],
            "areaServed": "Worldwide"
          })
        }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full hero-content"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
                <div className="max-w-3xl flex-1 text-left">
                  <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
                    Capabilities
                  </motion.span>
                  <motion.h1 variants={itemVariants} className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
                    Digital Domination. <br /> 
                    <span className="text-text-muted not-italic">Global footprint.</span>
                  </motion.h1>
                  <motion.p variants={itemVariants} className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                    We build premium custom software, web applications, and mobile products engineered with SEO + GEO systems so they get found on Google and in AI searches.
                  </motion.p>
                </div>
                
                {/* Premium illustrated services graphic */}
                <motion.div 
                  variants={itemVariants} 
                  className="flex-1 w-full max-w-md aspect-square relative rounded-3xl overflow-hidden border border-border-default bg-bg-surface/30 p-2 shadow-2xl shadow-accent-primary/5 self-center"
                >
                  <Image 
                    src="/services_illustration.png" 
                    alt="Locallify tech capabilities illustration" 
                    fill 
                    priority
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover rounded-2xl opacity-90"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── DETAILED SERVICES ────────────────────────────────────── */}
        <section className="py-20 px-6 space-y-24 border-t border-border-default bg-bg-surface/10">
          {detailedServices.map((service, i) => (
            <motion.div 
              key={i} 
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="container mx-auto"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-bg-surface border border-border-default ${service.accent}`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Capability 0{i + 1}</span>
                  </div>
                  <h2 className="font-display italic text-4xl md:text-5xl text-text-primary tracking-tight">{service.title}</h2>
                  <p className="text-text-secondary leading-relaxed font-light text-base text-justify">{service.description}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-text-muted">
                        <Zap className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Link href="/portfolio" className="group inline-flex items-center gap-1.5 text-accent-primary hover:underline text-sm font-medium">
                      See case studies 
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Unique per-service graphic */}
                {(() => {
                  const Graphic = serviceGraphics[i];
                  return (
                    <div className={`flex-1 w-full aspect-video bg-bg-surface/40 border border-border-default rounded-2xl relative overflow-hidden transition-all duration-500 ${service.borderColor} ${service.glowColor}`}>
                      <Graphic />
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </section>

        {/* ─── THE METHOD ───────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-bg-surface border-y border-border-default">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left max-w-2xl mb-20"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
                Workflow
              </span>
              <h2 className="font-display italic text-4xl md:text-6xl text-text-primary mb-6">The Locallify Method.</h2>
              <p className="text-text-secondary leading-relaxed font-light">Our proven design, engineering, and indexing sprint lifecycle taking you from concept to live product.</p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            >
               {/* Connector Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
               
               {[
                 { step: "01", title: "Discovery & Architecture", desc: "We structure database schemas, Figma designs, and build target search entity maps.", icon: BarChart3 },
                 { step: "02", title: "Engineering & Automation", desc: "Our engineers build the clean web app frontend, API hook systems, and n8n scripts.", icon: Zap },
                 { step: "03", title: "SEO, GEO & Launch", desc: "Your system goes live with structured metadata, indexing starts, and search discovery tracks.", icon: Trophy }
               ].map((item, i) => (
                 <motion.div key={i} variants={itemVariants} className="relative z-10 flex flex-col items-start text-left bg-bg-primary/40 border border-border-default rounded-2xl p-6 hover:border-accent-primary/20 hover:bg-bg-surface/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-bg-surface border border-border-default flex items-center justify-center mb-6 shadow-md">
                      <item.icon className="w-6 h-6 text-accent-primary" />
                    </div>
                    <span className="font-mono text-[9px] text-accent-primary uppercase tracking-[0.3em] mb-3">{item.step}</span>
                    <h3 className="font-sans font-semibold text-lg text-text-primary mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-light">{item.desc}</p>
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display italic text-5xl md:text-8xl text-text-primary mb-12 leading-[0.9]"
            >
              Don't just exist. <br />
              <span className="text-accent-primary not-italic">Be the leader.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I saw your tech capabilities and I'd like to discuss a software project.")}`}
                className="inline-flex h-16 px-12 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-all group mb-8"
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
