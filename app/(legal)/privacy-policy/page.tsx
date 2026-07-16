import React from "react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2026";

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              Legal Framework
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Privacy <br /> 
              <span className="text-text-muted not-italic">Policy.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">1. Data Sovereignty</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                At Locallify, your business data is yours. We collect only what is essential to provide elite digital services. This policy outlines how we handle information across our storefronts, WhatsApp integrations, and management tools.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Information Collection</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg mb-6">
                We collect information directly provided by you during onboarding and through your customers&apos; interactions with your shop:
              </p>
              <ul className="space-y-4">
                {[
                  "Business details (Name, Address, Category)",
                  "Contact information for WhatsApp lead routing",
                  "Operational data for Google Business Profile optimization",
                  "Anonymized usage metrics to improve storefront performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-text-muted">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. WhatsApp & Leads</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Our platform routes leads directly to your WhatsApp. Locallify does not store your customer conversations. We provide the bridge; you own the relationship.
              </p>
            </section>

             <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">4. Security & Data Processors</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                We protect your business data using industry-standard encryption and secure cloud database infrastructure (Sanity CMS). To deliver our scheduling and notification systems, we route contact details and bookings through trusted third-party services including Resend (email notification), Cal.com (meeting booking), and Google Workspace (calendar scheduling). Access to stored databases is strictly limited to authorized engineering personnel and system administrators who maintain the platform.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Questions?</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                If you have concerns about your data or wish to request deletion, contact our compliance team at <span className="text-accent-primary font-medium">hello@locallifyagency.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
