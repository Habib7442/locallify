import React from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import { HelpCircle, Zap, Shield, Clock } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
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
      <Pricing />

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
            <a 
              href="https://wa.me/916000163450" 
              className="inline-flex h-16 px-12 items-center justify-center bg-accent-secondary text-text-inverse font-sans font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent-secondary-hover transition-all scale-110"
            >
              Start growing now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
