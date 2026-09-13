"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { ArrowRight, ArrowUpRight, Trophy, BarChart3, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { servicesFaqs } from "@/lib/data/services-faqs";
import { services } from "@/lib/data/services";

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

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
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
                    We&apos;re a software studio based in Silchar, Assam, building premium custom software, web applications, and mobile products for clients across the Barak Valley, India, and worldwide &mdash; engineered with SEO + GEO so they get found on Google and in AI searches.
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

        {/* ─── SERVICE DIRECTORY ────────────────────────────────────── */}
        <section className="py-20 px-6 border-t border-border-default bg-bg-surface/10">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
                Explore each capability
              </span>
              <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Seven ways we help you ship.</h2>
            </div>

            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {services.map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.04 }}
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 hover:bg-bg-surface/30 transition-colors px-2 -mx-2 rounded-xl"
                  >
                    <div className="flex items-center gap-4 md:w-72 shrink-0">
                      <div className={`rounded-xl p-3 transition-transform duration-500 group-hover:scale-110 ${service.theme.bg}`}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-sans font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                          {service.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{service.badge}</span>
                      </div>
                    </div>
                    <p className="flex-1 text-sm text-text-secondary leading-relaxed font-light">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-muted group-hover:text-accent-primary transition-colors shrink-0">
                      Learn more
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THE METHOD ───────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-bg-surface border-y border-border-default">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6 }}
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

        {/* ─── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-bg-surface border-y border-border-default">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
                Questions
              </span>
              <h2 className="font-display italic text-4xl md:text-6xl text-text-primary">Common questions.</h2>
            </div>
            <div className="space-y-6">
              {servicesFaqs.map((faq) => (
                <div key={faq.question} className="p-8 bg-bg-primary/40 border border-border-default rounded-2xl">
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-4">{faq.question}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light text-justify">{faq.answer}</p>
                </div>
              ))}
            </div>
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
              <span className="text-text-muted">·</span>
              <Link href="/web-development-company-silchar" className="text-accent-primary hover:underline font-medium">Web Development in Silchar</Link>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6 }}
              viewport={{ once: true }}
              className="font-display italic text-5xl md:text-8xl text-text-primary mb-12 leading-[0.9]"
            >
              Don&apos;t just exist. <br />
              <span className="text-accent-primary not-italic">Be the leader.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.4 }}
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
