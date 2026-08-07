import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Refund Policy | Locallify - Custom Software, Web & Mobile Apps" },
  description: "Review Locallify's Refund Policy. Understand our project milestone terms, retainer cancellations, and service conditions.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Locallify",
    description: "Review Locallify's Refund Policy. Understand our project milestone terms, retainer cancellations, and service conditions.",
    url: "https://www.locallifyagency.com/refund-policy",
  },
};

export default function RefundPolicy() {
  const lastUpdated = "July 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund Policy | Locallify",
    "description": "Financial transparency and refund conditions for Locallify custom software services and retainers.",
    "publisher": {
      "@type": "Organization",
      "name": "Locallify",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/locallify_dark.svg`
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
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
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">1. Project Deposits & Fees</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Custom software, web application, and mobile app developments are structured with upfront deposits (typically 50%) or milestone payments. Once project scoping, architecture design, or active development has commenced, deposits and completed milestone payments are non-refundable.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Support & Maintenance Retainers</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Monthly Care, Growth, and Scale retainers are billed in advance and are non-refundable. You may cancel your retainer subscription at any time via your client portal or by contacting your account manager. Services and support will remain active until the end of your current billing cycle.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. Service Level Agreements (SLAs)</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                All custom software project timelines and deliverables are governed by the specific Statement of Work (SOW) agreed upon by both parties. If Locallify fails to meet critical SOW milestones due to factors solely within our control, terms for remedy or refund will follow the specific terms outlined in your project agreement.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Questions?</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                To ask questions or discuss billing terms, please <Link href="/contact" className="text-accent-primary hover:underline font-medium">contact us</Link> or email our finance team directly at <span className="text-accent-primary font-medium">hello@locallifyagency.com</span>.
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
