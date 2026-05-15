import React from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import { HelpCircle, Zap, Shield, Clock } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Pricing & Plans | Locallify",
  description: "Simple, transparent pricing for India's local legends. Choose a plan that fuels your business growth without hidden fees.",
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
            "name": "Locallify Digital Presence",
            "description": "Professional local business digital presence services including one-page websites, Google Business optimization, and managed storefronts.",
            "provider": {
              "@type": "Organization",
              "name": "Locallify",
              "url": "https://locallify.in"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Service Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Scale Plan"
                  },
                  "price": "499",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Growth Plan"
                  },
                  "price": "999",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dominate Plan"
                  },
                  "price": "2499",
                  "priceCurrency": "INR"
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
              Simple, transparent, and built for local impact. No hidden fees. Just <span className="text-text-primary font-medium">high-voltage growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRICING COMPONENT ────────────────────────────────────── */}
      <Pricing showHeader={false} />

      {/* ─── TRUST PILLARS ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: "Fast Setup", desc: "Live in 48 hours." },
              { icon: Shield, title: "Secure", desc: "Managed hosting included." },
              { icon: Clock, title: "No Lock-in", desc: "Cancel any time." },
              { icon: HelpCircle, title: "Expert Support", desc: "Direct WhatsApp help." },
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
              { q: "How long does it take to get live?", a: "Once you claim your page and provide basic business details, we guarantee a live storefront within 48 hours." },
              { q: "Is there a setup fee?", a: "Our pricing is simple. We have a one-time onboarding fee of ₹999 for the Scale plan, which is waived for Growth and Dominate plans." },
              { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
              { q: "Do I need my own domain?", a: "We provide a custom locallify.in/[business] slug by default. If you want a custom .com or .in domain, we can manage that for an additional annual fee." },
              { q: "What happens if I miss a payment?", a: "To keep your shop running, subscriptions must be renewed monthly. If a payment is missed, your page and services will be temporarily deactivated until the subscription is resumed." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-bg-surface border border-border-subtle rounded-3xl">
                <h4 className="font-sans font-bold text-xl text-text-primary mb-4">{faq.q}</h4>
                <p className="text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-bg-primary text-center px-6">
        <div className="container mx-auto border border-border-subtle rounded-[3rem] p-16 md:p-24 relative overflow-hidden bg-bg-surface">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px]" />
          <div className="relative z-10">
            <h2 className="font-display italic text-5xl md:text-8xl text-text-primary mb-8 leading-[0.9]">
              Ready to claim <br />
              <span className="text-accent-secondary not-italic">your market?</span>
            </h2>
            <Link 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm ready to claim my market.")}`}
              className="inline-flex h-16 px-12 items-center justify-center bg-accent-secondary text-bg-primary font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent-secondary-hover transition-all scale-110 mb-12"
            >
              Start growing now
            </Link>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 border-t border-white/5 pt-12">
              <Link href="/portfolio" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-secondary transition-colors">
                See Our Portfolio
              </Link>
              <Link href="/services" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-secondary transition-colors">
                What We Build
              </Link>
              <Link href="/about" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-secondary transition-colors">
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
