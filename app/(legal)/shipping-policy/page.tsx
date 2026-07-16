import React from "react";
import Navbar from "@/components/Navbar";

export default function ShippingPolicy() {
  const lastUpdated = "July 2026";

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Header */}
          <div className="mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              Legal Framework
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Delivery <br /> 
              <span className="text-text-muted not-italic">Policy.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">1. Digital Delivery</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Locallify designs, engineers, and hosts digital deliverables including custom software, web applications, mobile builds, and automation pipelines. We do not package or ship physical goods. All source codes, staging deployments, and administrative credentials are delivered digitally.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">2. Project Timelines & Milestones</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                Because we build premium bespoke systems, delivery timelines are customized per client and governed by the specific Statement of Work (SOW) signed before setup. The schedule depends on project complexity and timely provision of system assets, APIs, copy, or database specifications by the client.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">3. Verification & Handover</h2>
              <p className="text-text-secondary leading-relaxed font-light text-lg">
                A milestone or complete project is officially delivered once it is deployed to the production environment, published to the app stores (Google Play / Apple App Store), or when admin ownership access is transferred to the client.
              </p>
            </section>

            <section className="space-y-8 pt-12 border-t border-border-subtle">
              <h2 className="font-display italic text-4xl text-text-primary">Questions?</h2>
              <p className="text-text-secondary leading-relaxed text-lg max-w-xl">
                If you have questions regarding project delivery milestones, please contact your project manager or email our support desk at <span className="text-accent-primary font-medium">hello@locallifyagency.com</span>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
