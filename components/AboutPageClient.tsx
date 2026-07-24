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
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto relative z-10 about-hero"
          >
            <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              The Mission
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display italic text-6xl md:text-9xl leading-[0.85] tracking-tight text-text-primary mb-12">
              Modernizing <br /> 
              <span className="text-text-muted not-italic">the street.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed font-light">
              We started with a simple observation: India&apos;s local legends are being left behind by the digital gold rush. We&apos;re here to fix that.
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
            className="py-24 px-6"
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">Uncompromising Quality</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Local doesn&apos;t mean low-end. We bring Vercel-grade design and engineering to the neighborhood salon, the local hardware store, and the family restaurant.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">Radical Simplicity</h3>
                  <p className="text-text-secondary leading-relaxed">
                    No complex dashboards. No tech-jargon. We build sales engines that deliver results directly to the tool you already use: WhatsApp.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold">Frictionless Scale</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Digital presence is a utility, like electricity. It should always work, always be fast, and always be affordable.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── STATS SECTION ──────────────────────────────────────── */}
          <motion.section 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 px-6 bg-bg-surface/30"
          >
            <div className="container mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Hours to Launch", value: "48" },
                  { label: "Active Partners", value: "250+" },
                  { label: "Lead Conversion", value: "12x" },
                  { label: "Designers", value: "Elite" }
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <span className="block text-4xl md:text-6xl font-sans font-black text-text-primary mb-2">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ─── PHILOSOPHY ─────────────────────────────────────────── */}
          <motion.section 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-32 px-6"
          >
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display italic text-5xl md:text-8xl leading-none tracking-tight text-text-primary mb-12">
                  Building for the <br /> 
                  <span className="text-accent-primary not-italic">95%.</span>
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed mb-12">
                  95% of your customers are on sub-₹20,000 Android phones on 4G networks. We don&apos;t build websites that only look good on a $2,000 MacBook. We build for the reality of the Indian street.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-6 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    Mobile-First
                  </span>
                  <span className="px-6 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    WhatsApp Native
                  </span>
                  <span className="px-6 py-2 rounded-full border border-border-subtle bg-bg-surface text-text-primary text-xs font-mono uppercase tracking-widest">
                    Zero-Maintenance
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ─── FINAL CTA ──────────────────────────────────────────── */}
          <CTA />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border-subtle bg-bg-primary">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-sm">
              <Link href="/" className="inline-block mb-6">
                <Image src="/locallify_dark.svg" alt="Locallify Logo" width={160} height={45} className="h-8 w-auto" />
              </Link>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                The street is going digital. Don&apos;t get left behind. We empower local legends with elite digital presence.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-accent-primary">Privacy</Link>
                <Link href="/terms" className="text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-accent-primary">Terms</Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-6">Platform</h4>
                <ul className="space-y-4">
                  <li><Link href="/portfolio" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Portfolio</Link></li>
                  <li><Link href="/services" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Services</Link></li>
                  <li><Link href="/pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-primary mb-6">Connect</h4>
                <ul className="space-y-4">
                  <li><a href="https://www.linkedin.com/company/locallifyagency/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"><Image src="/social-icons/linkedin.png" alt="LinkedIn" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-70" /> LinkedIn</a></li>
                  <li><a href="https://instagram.com/locallify.in" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"><Image src="/social-icons/instagram.png" alt="Instagram" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-70" /> Instagram</a></li>
                  <li><a href="https://www.facebook.com/profile.php?id=61592029269964" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"><Image src="/social-icons/facebook.png" alt="Facebook" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-70" /> Facebook</a></li>
                  <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"><Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={14} height={14} className="h-3.5 w-3.5 object-contain opacity-70" /> WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-20 mt-20 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
              © {new Date().getFullYear()} Locallify. Build for the elite.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
              Made with <span className="text-accent-primary">⚡</span> in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
