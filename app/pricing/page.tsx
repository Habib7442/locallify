import React from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import { HelpCircle, Zap, Shield, Clock } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Pricing & Plans | Locallify",
  description: "Simple, transparent pricing for custom software, web apps, and mobile app builds. Choose a flat-rate package or request a custom milestone-based quote.",
});

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Locallify Custom Software Development",
            "description": "High-performance custom software, web app, mobile app, and SEO + GEO development packages.",
            "provider": {
              "@type": "Organization",
              "name": "Locallify",
              "url": "https://locallifyagency.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Development Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landing / Marketing Website"
                  },
                  "price": "299",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website (Multi-page)"
                  },
                  "price": "799",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web App / MVP"
                  },
                  "price": "2499",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App (iOS + Android)"
                  },
                  "price": "3999",
                  "priceCurrency": "USD"
                }
              ]
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
      <section className="relative pt-32 pb-6 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-secondary mb-6 block">
              Investment & Value
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Pricing that <br /> 
              <span className="text-text-muted not-italic">pays for itself.</span>
            </h1>
            <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
              Simple, transparent, and built for performance. No hidden fees. Just <span className="text-text-primary font-medium">high-voltage code.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING COMPONENT ────────────────────────────────────── */}
      <Pricing showHeader={false} />

      {/* ─── TRUST PILLARS ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-bg-surface/50 border-y border-border-default">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: "Product Sprints", desc: "Focused, rapid builds." },
              { icon: Shield, title: "Clean Code", desc: "High-performance foundations." },
              { icon: Clock, title: "IP Ownership", desc: "You own 100% of the code." },
              { icon: HelpCircle, title: "Retainer Care", desc: "Dedicated support contracts." },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
                <pillar.icon className="w-8 h-8 text-accent-primary mb-4" />
                <h4 className="font-sans font-bold text-lg text-text-primary mb-1">{pillar.title}</h4>
                <p className="text-text-secondary text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
             <h2 className="font-display italic text-4xl md:text-6xl text-text-primary">Common questions.</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does a standard build take?", a: "Marketing landing pages launch in 1 to 2 weeks. Custom web portals, database-driven MVPs, and mobile applications take between 4 to 8 weeks depending on features." },
              { q: "Are there setup fees or hidden costs?", a: "No. We quote fixed package prices or custom milestone-based quotes for larger custom systems. What we agree upon in the project brief is exactly what you pay." },
              { q: "Do we get full ownership of the source code?", a: "Yes. Once the final milestone payment is completed, 100% intellectual property (IP) and source code ownership is transferred to you." },
              { q: "Can we support the software after launch?", a: "Yes. We offer monthly Care, Growth, and Scale retainers starting at $49/mo to handle security updates, content updates, hosting monitoring, and continuous SEO/GEO tuning." },
              { q: "Do you design and write everything custom?", a: "Yes. Every storefront, application, and interface is custom designed in Figma and coded natively in Next.js/React. We do not use generic templates or page builders." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-bg-surface/50 border border-border-default rounded-2xl">
                <h4 className="font-sans font-bold text-lg text-text-primary mb-4">{faq.q}</h4>
                <p className="text-text-secondary leading-relaxed text-sm font-light text-justify">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-bg-primary text-center px-6">
        <div className="container mx-auto border border-border-default rounded-[3rem] p-16 md:p-24 relative overflow-hidden bg-bg-surface">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display italic text-5xl md:text-8xl text-text-primary mb-8 leading-[0.9]">
              Ready to build <br />
              <span className="text-accent-primary not-italic">something serious?</span>
            </h2>
            <Link 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I saw your pricing packages and I'd like to discuss a software project.")}`}
              className="inline-flex h-16 px-12 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-all scale-110 mb-12"
            >
              Start a project
            </Link>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 border-t border-white/5 pt-12">
              <Link href="/portfolio" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                See Our Portfolio
              </Link>
              <Link href="/services" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                What We Build
              </Link>
              <Link href="/about" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
                The Locallify Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
