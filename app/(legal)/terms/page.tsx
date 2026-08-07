import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Locallify - Custom Software, Web & Mobile Apps" },
  description: "Review Locallify's Terms of Service. Understand project engagement milestones, support retainers, and compliance conditions for our custom software solutions.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Locallify",
    description: "Review Locallify's Terms of Service. Understand project engagement milestones, support retainers, and compliance conditions.",
    type: "website",
    images: [{ url: "/og-terms.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Locallify",
    description: "Review Locallify's Terms of Service for custom software development.",
  },
};

export default function TermsOfService() {
  const lastUpdated = "July 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Locallify Terms of Service for custom software development and retainers.",
    "publisher": {
      "@type": "Organization",
      "name": "Locallify"
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      >
        Skip to content
      </a>

      <Navbar />
      
      <main id="main-content" className="pt-40 pb-24 px-6">
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
                By entering into a project agreement or subscribing to any retainer plan with <Link href="/" className="underline decoration-accent-primary underline-offset-4 hover:text-accent-primary transition-colors">Locallify</Link>, you agree to these Terms of Service. Our platforms are designed to deliver custom software development, high-performance web products, mobile applications, and automated operations.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Project Engagements & Retainers</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Locallify offers custom fixed-price projects and monthly ongoing support retainers (Care, Growth, and Scale plans). Flat-rate custom projects are billed on milestone schedules. Retainers are billed monthly in advance. To maintain active monitoring, security configurations, and API integrations, retainer payments must be settled on time.
              </p>
              <div className="p-6 bg-bg-surface border-l-2 border-accent-primary rounded-r-2xl italic text-text-primary">
                Important: If a monthly retainer is cancelled or default in payment occurs, Locallify reserves the right to suspend support hours, database hosting maintenance, or active API routing after notice.
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. Deliverables & Scope</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Each custom software deliverable, technical SLA, and development timeline is exclusively governed by the specific Statement of Work (SOW) signed before project commencement. Timely delivery is subject to the client providing all necessary content, API keys, database access parameters, and reviews.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">4. Usage Restrictions</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                You may not use Locallify services, custom systems, or intellectual property to build platforms for illegal operations, distribute malicious codes, or engage in fraudulent activities. 
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Legal Jurisdiction</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                These terms are governed by the laws of India. Any disputes arising out of our development agreements or digital services will be subject to the exclusive jurisdiction of the competent courts in Assam, India.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl mt-6">
                For more information, review our <Link href="/privacy-policy" className="underline decoration-accent-primary underline-offset-4 hover:text-accent-primary transition-colors">Privacy Policy</Link> or <Link href="/contact" className="underline decoration-accent-primary underline-offset-4 hover:text-accent-primary transition-colors">contact us</Link> with questions.
              </p>
            </section>

            {/* Internal Links for SEO */}
            <section className="pt-20 border-t border-border-subtle">
              <div className="flex flex-wrap gap-8 text-sm font-mono uppercase tracking-widest text-text-muted">
                <Link href="/pricing" className="hover:text-accent-primary transition-colors">Pricing Plans</Link>
                <Link href="/portfolio" className="hover:text-accent-primary transition-colors">Our Portfolio</Link>
                <Link href="/about" className="hover:text-accent-primary transition-colors">About Us</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
