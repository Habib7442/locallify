"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Zap, Heart, Target, ArrowRight, Globe, Users, ZapIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".about-hero > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });

      // Section reveals
      if (contentRef.current) {
        gsap.utils.toArray(".reveal-section").forEach((section: any) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power4.out"
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden about-hero">
        <div className="container mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
            Our Mission
          </span>
          <h1 className="font-display italic text-5xl md:text-9xl leading-[0.9] tracking-tight text-text-primary mb-8 max-w-5xl">
            Modernizing <br /> 
            <span className="text-text-muted not-italic">the street.</span>
          </h1>
          <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
            Locallify was born out of a simple observation: India&apos;s local businesses deserve better than generic templates. We&apos;re here to bring <span className="text-text-primary font-medium">elite digital presence</span> to every corner of India.
          </p>
        </div>
        
        {/* Decorative Grid Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 opacity-10">
           <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(208,255,20,0.1),transparent_70%)]" />
        </div>
      </section>

      {/* ─── THE MANIFESTO ────────────────────────────────────────── */}
      <section ref={contentRef} className="py-24 px-6 reveal-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-display italic text-4xl md:text-6xl text-text-primary">Closing the <br /> Digital Divide.</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                In Tier-2 and Tier-3 India, business is moving at the speed of light, but digital tools are stuck in 2010. We saw incredible local shops—legends in their own streets—struggling with clunky websites and invisible search profiles.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                We decided to change that. No more Wix templates. No more slow-loading pages. We brought the engineering standards of $50,000 agencies and democratized them for the local hero.
              </p>
            </div>
            <div className="relative aspect-square bg-bg-surface border border-border-subtle rounded-[3rem] overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
               <div className="w-32 h-32 border border-accent-primary/30 rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-12 h-12 text-accent-primary" />
               </div>
               <div className="absolute bottom-12 left-12 right-12">
                  <div className="p-6 bg-bg-primary/80 backdrop-blur-md rounded-2xl border border-border-subtle">
                     <span className="font-mono text-[10px] text-accent-primary uppercase tracking-widest block mb-2">Since 2024</span>
                     <h4 className="font-sans font-bold text-xl">Built for Bharat.</h4>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-surface border-y border-border-subtle reveal-section">
        <div className="container mx-auto">
          <div className="text-center mb-20">
             <span className="font-mono text-[10px] text-accent-primary uppercase tracking-[0.4em] mb-4 block">Our DNA</span>
             <h2 className="font-display italic text-4xl md:text-7xl text-text-primary">What we stand for.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Speed is a Feature", desc: "We deliver in 48 hours. In the digital economy, being late is being last." },
              { icon: Heart, title: "Aesthetics Matter", desc: "Design isn't luxury; it's trust. We make your business look like the leader it is." },
              { icon: Target, title: "Radical Impact", desc: "We measure success by the WhatsApp chats and footfall we drive to your door." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-bg-primary border border-border-subtle rounded-3xl hover:border-accent-primary/20 transition-all group">
                <value.icon className="w-10 h-10 text-accent-primary mb-8 transition-transform group-hover:scale-110" />
                <h4 className="font-sans font-bold text-2xl text-text-primary mb-4">{value.title}</h4>
                <p className="text-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-32 bg-bg-primary text-center px-6 reveal-section">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display italic text-5xl md:text-8xl text-text-primary mb-12 leading-[0.9]">
            Let&apos;s build your <br />
            <span className="text-accent-primary not-italic">digital legacy.</span>
          </h2>
          <Link 
            href="https://wa.me/916000163450" 
            className="inline-flex h-16 px-12 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent-hover transition-all group"
          >
            Start the conversation
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
