import React from "react";
import Navbar from "@/components/Navbar";

export default function RefundPolicy() {
  const lastUpdated = "May 2026";

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              Financial Transparency
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Refund <br /> 
              <span className="text-text-muted not-italic">Policy.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">1. Onboarding Fees</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                The one-time onboarding fee for the Scale plan is non-refundable once the project setup has commenced. This fee covers our manual engineering work and initial SEO configuration.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Subscription Refunds</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Monthly subscription fees are non-refundable. You may cancel your subscription at any time, and your services will remain active until the end of the current billing cycle.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. Service Guarantee</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                If we fail to deliver a live storefront within the guaranteed 48-hour window (assuming all client details were provided), you are entitled to a full refund of that month&apos;s subscription fee.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Request a Refund</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                To initiate a refund request based on our Service Guarantee, please email <span className="text-accent-primary font-medium">locallify26@gmail.com</span> with your business name and onboarding date.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
