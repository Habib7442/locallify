import React from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import { HelpCircle, Zap, Shield, Clock } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/structured-data";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Pricing & Plans | Locallify",
  description: "Simple, transparent pricing for custom software, web apps, and mobile app builds. Choose a flat-rate package or request a custom milestone-based quote.",
  alternates: { canonical: "/pricing" },
});

const pricingFaqs = [
  { question: "How long does a standard build take?", answer: "Marketing landing pages launch in 1 to 2 weeks. Custom web portals, database-driven MVPs, and mobile applications take between 4 to 8 weeks depending on features." },
  { question: "Are there setup fees or hidden costs?", answer: "No. We quote fixed package prices or custom milestone-based quotes for larger custom systems. What we agree upon in the project brief is exactly what you pay." },
  { question: "Do we get full ownership of the source code?", answer: "Yes. Once the final milestone payment is completed, 100% intellectual property (IP) and source code ownership is transferred to you." },
  { question: "Can we support the software after launch?", answer: "Yes. We offer monthly Care, Growth, and Scale retainers starting at $99/mo to handle security updates, content updates, hosting monitoring, and continuous SEO/GEO tuning." },
  { question: "Do you design and write everything custom?", answer: "Yes. Every storefront, application, and interface is custom designed in Figma and coded natively in Next.js/React. We do not use generic templates or page builders." },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Locallify Custom Software Development",
        "description": "High-performance custom software, web app, mobile app, and SEO + GEO development packages.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Packages",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing / Marketing Website" }, "price": "600", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website (Multi-page)" }, "price": "1800", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web App / MVP" }, "price": "6000", "priceCurrency": "USD" },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App (iOS + Android)" }, "price": "9000", "priceCurrency": "USD" }
          ]
        }
      },
      faqPageJsonLd(pricingFaqs),
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Pricing", path: "/pricing" },
      ]),
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
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
              Fixed starting prices. Milestone billing. <span className="text-text-primary font-medium">No hidden fees.</span>
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
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="p-8 bg-bg-surface/50 border border-border-default rounded-2xl">
                <h4 className="font-sans font-bold text-lg text-text-primary mb-4">{faq.question}</h4>
                <p className="text-text-secondary leading-relaxed text-sm font-light text-justify">{faq.answer}</p>
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
              href="/contact"
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
