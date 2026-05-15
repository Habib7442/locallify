import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Refund Policy | Locallify - Digital Infrastructure for Indian Businesses",
  description: "Review Locallify's Refund Policy. Understand our service guarantees, onboarding fee terms, and subscription refund conditions.",
  openGraph: {
    title: "Refund Policy | Locallify",
    description: "Review Locallify's Refund Policy. Understand our service guarantees, onboarding fee terms, and subscription refund conditions.",
    url: "https://locallify.in/refund-policy",
  },
};

export default function RefundPolicy() {
  const lastUpdated = "May 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy | Locallify",
    "description": "Financial transparency and refund conditions for Locallify services.",
    "publisher": {
      "@type": "Organization",
      "name": "Locallify",
      "logo": {
        "@type": "ImageObject",
        "url": "https://locallify.in/logo.png"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:rounded-full focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-accent-primary"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-40 pb-24 px-6">
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
                The one-time onboarding fee for the <Link href="/pricing" className="text-accent-primary hover:underline">Scale plan</Link> is non-refundable once the project setup has commenced. This fee covers our manual engineering work and initial SEO configuration.
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
                If we fail to deliver a live <Link href="/services" className="text-accent-primary hover:underline">storefront</Link> within the guaranteed 48-hour window (assuming all client details were provided), you are entitled to a full refund of that month&apos;s subscription fee.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Request a Refund</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                To initiate a refund request based on our Service Guarantee, please <Link href="/contact" className="text-accent-primary hover:underline font-medium">contact us</Link> or email <span className="text-accent-primary font-medium">locallify26@gmail.com</span> with your business name and onboarding date.
              </p>
              <p className="text-text-muted text-sm mt-8 border-t border-border-subtle pt-8">
                For complete terms and conditions, see our <Link href="/terms" className="text-accent-primary hover:underline">Terms of Service</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
