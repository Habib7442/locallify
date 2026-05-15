import React from "react";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/appwrite-service";
import PortfolioClient from "@/components/PortfolioClient";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Portfolio | Locallify",
  description: "A showcase of India's most ambitious local businesses, powered by high-performance digital storefronts.",
});

export const revalidate = 3600; // Revalidate every hour

export default async function PortfolioPage() {
  let projects: Project[] = [];
  try {
    projects = await projectService.getPublicProjects();
  } catch (error) {
    console.error("Failed to fetch projects on server:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Locallify Portfolio",
    "description": "A showcase of high-performance digital storefronts for local businesses in India.",
    "url": "https://locallify.in/portfolio",
    "mainEntity": {
      "@type": "CreativeWorkSeries",
      "name": "Locallify Digital Storefronts"
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
              Showreel 2026
            </span>
            <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Local <br /> 
              <span className="text-text-muted not-italic">masterpieces.</span>
            </h1>
            <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
              A curated collection of India&apos;s most ambitious businesses, powered by <span className="text-text-primary font-medium">Locallify Pages.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLIENT PORTFOLIO SECTION ────────────────────────────────── */}
      <PortfolioClient initialProjects={projects} />

      {/* Footer-like CTA Section */}
      <section className="py-24 bg-bg-surface border-t border-border-subtle text-center px-6">
        <div className="container mx-auto">
          <h2 className="font-display italic text-5xl md:text-7xl text-text-primary mb-8">
            Ready to be our <br />
            <span className="text-accent-primary not-italic">next legend?</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-12">
            We don't just build pages. We build digital legacies for elite businesses across India.
          </p>
          <Link 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I saw your portfolio and I'd like to claim my page.")}`}
            className="inline-flex h-14 px-10 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors mb-8"
          >
            Claim your page
          </Link>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4 border-t border-white/5 pt-12">
            <Link href="/services" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
              Our Capabilities
            </Link>
            <Link href="/pricing" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
              Pricing & Plans
            </Link>
            <Link href="/about" className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors">
              The Mission
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
