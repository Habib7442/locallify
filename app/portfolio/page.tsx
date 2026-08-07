import React from "react";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/cms";
import PortfolioClient from "@/components/PortfolioClient";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Portfolio | Custom Software & Web Projects | Locallify",
  description: "Case studies from Locallify: custom software, web apps, and mobile products built for clients in Silchar and worldwide, with real outcomes and performance data.",
  alternates: { canonical: "/portfolio" },
});

export const revalidate = 60; // Revalidate every minute

export default async function PortfolioPage() {
  let projects: Project[] = [];
  try {
    projects = await projectService.getPublicProjects();
  } catch (error) {
    console.error("Failed to fetch projects on server:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Locallify Portfolio",
        "description": "Case studies from Locallify: custom software, web apps, and mobile products built for real clients.",
        "url": `${SITE_URL}/portfolio`,
        "mainEntity": {
          "@type": "CreativeWorkSeries",
          "name": "Locallify Case Studies",
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Portfolio", path: "/portfolio" },
      ]),
    ],
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
              Case studies <br />
              <span className="text-text-muted not-italic">with real outcomes.</span>
            </h1>
            <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
              Custom software, web apps, and mobile products, built for real clients in Silchar and beyond &mdash; with <span className="text-text-primary font-medium">performance data to prove it.</span>
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
            Ready to build <br />
            <span className="text-accent-primary not-italic">something serious?</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-12">
            We don&apos;t just ship screens. We build software that works, scales, and gets found.
          </p>
          <Link 
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I saw your work and I'd like to discuss a software project.")}`}
            className="inline-flex h-14 px-10 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors mb-8"
          >
            Start a project
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
