import React from "react";
import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  const lastUpdated = "May 2026";

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              Terms & Conditions
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Terms of <br /> 
              <span className="text-text-muted not-italic">Service.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                By subscribing to Locallify, you agree to these terms. Our service is designed to provide professional digital infrastructure for local businesses in India.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Subscription & Continuity</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Locallify operates on a monthly subscription model. To keep your digital shop and services active, payments must be settled on time. 
              </p>
              <div className="p-6 bg-bg-surface border-l-2 border-accent-primary rounded-r-2xl italic text-text-primary">
                Important: If a subscription is not renewed, your shop page and related services will be temporarily deactivated until the subscription is resumed.
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. Service Delivery</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                We guarantee a live storefront within 48 hours of receiving all necessary business details. This timeline is subject to client cooperation and prompt feedback.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">4. Usage Restrictions</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                You may not use Locallify services to sell illegal items, spread misinformation, or engage in fraudulent business practices as per Indian Law.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Legal Jurisdiction</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Assam.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
