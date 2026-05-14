'use client';

import React, { useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Scale",
    price: "2,999",
    description: "Perfect for local shops just starting their digital journey.",
    features: [
      "Digital Shop Page",
      "Google Business Profile",
      "WhatsApp Direct Button",
      "Managed Hosting",
      "Standard Support"
    ],
    isFeatured: false,
    cta: "Start Scaling"
  },
  {
    name: "Growth",
    price: "4,999",
    description: "The sweet spot for businesses ready to dominate their street.",
    features: [
      "Everything in Scale",
      "Google Review Setup",
      "Monthly SEO Support",
      "QR Code Catalog",
      "Priority WhatsApp Support"
    ],
    isFeatured: true,
    cta: "Accelerate Growth"
  },
  {
    name: "Dominate",
    price: "9,999",
    description: "For the local legends who want to own the entire city.",
    features: [
      "Everything in Growth",
      "Social Media Management",
      "FB/Insta Ads Management",
      "Growth Analytics",
      "24/7 Dedicated Manager"
    ],
    isFeatured: false,
    cta: "Dominate Market"
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".pricing-header", {
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out"
      });

      // Plans staggered reveal
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, 
          { 
            opacity: 0, 
            y: 40 
          },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="py-16 bg-bg-primary px-6">
      <div className="container mx-auto">
        
        {/* Header - Matched with Services Header */}
        <div className="pricing-header max-w-2xl mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Pricing Plans
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Investment for <br />
            <span className="text-text-muted not-italic">massive growth.</span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "relative p-8 rounded-3xl bg-bg-surface border transition-all duration-500 flex flex-col",
                plan.isFeatured 
                  ? "border-accent-secondary shadow-[0_0_40px_rgba(255,92,40,0.05)] scale-105 z-10" 
                  : "border-border-subtle hover:border-border-strong"
              )}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-secondary text-text-inverse font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-sans font-bold text-xl text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-text-muted text-lg">₹</span>
                  <span className="text-4xl md:text-5xl font-display font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-muted text-sm">/mo</span>
                </div>
                <p className="text-text-secondary text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-accent-primary/10 text-accent-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/916000163450?text=I'm interested in the ${plan.name} plan`}
                className={cn(
                  "w-full h-14 flex items-center justify-center gap-2 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all",
                  plan.isFeatured
                    ? "bg-accent-secondary text-text-inverse hover:bg-accent-secondary-hover"
                    : "bg-bg-primary text-text-primary border border-border-subtle hover:border-text-primary"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Subscription Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-[10px] uppercase tracking-widest leading-relaxed max-w-lg mx-auto">
            Note: All plans are billed monthly. If a subscription is not renewed, your digital shop page and services will be temporarily deactivated until payment is received.
          </p>
        </div>
      </div>
    </section>
  );
}
