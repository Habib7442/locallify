'use client';

import React, { useEffect, useRef } from 'react';
import { Search, MessageSquare, Monitor, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Search Dominance",
    description: "Own your neighborhood. We optimize your local SEO so you're #1 when it matters most to your customers.",
    icon: Search,
    className: "md:col-span-2",
    tag: "Local SEO"
  },
  {
    title: "WhatsApp Engine",
    description: "No complex dashboards. Every lead is a direct WhatsApp chat.",
    icon: MessageSquare,
    className: "md:col-span-1",
    tag: "Conversion"
  },
  {
    title: "Cinematic Presence",
    description: "A mobile-first storefront that makes your local shop look like a global leader.",
    icon: Monitor,
    className: "md:col-span-1",
    tag: "Design"
  },
  {
    title: "Managed for You",
    description: "Zero tech stress. We build, we host, we update. You focus on running your business while we handle the digital stack.",
    icon: ShieldCheck,
    className: "md:col-span-2",
    tag: "Full-Service"
  }
];

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out"
      });

      // Cards staggered reveal
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children, 
          { 
            opacity: 0, 
            y: 40 
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
            onComplete: () => ScrollTrigger.refresh()
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-16 px-6 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="services-header max-w-2xl mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Core Capabilities
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Everything you need to <br />
            <span className="text-text-muted not-italic">rule the local market.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "group relative p-8 rounded-3xl bg-bg-surface border border-border-subtle transition-all duration-500 hover:border-accent-primary/30 hover:bg-bg-elevated overflow-hidden",
                service.className
              )}
            >
              {/* Card Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 rounded-2xl bg-bg-primary border border-border-subtle text-accent-primary group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-subtle group-hover:text-accent-primary transition-colors">
                    {service.tag}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-text-secondary leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>
    </section>
  );
}
