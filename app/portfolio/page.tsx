import React from "react";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/appwrite-service";
import PortfolioClient from "@/components/PortfolioClient";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";

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

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      
      <Navbar />

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
          <a 
            href="https://wa.me/916000163450" 
            className="inline-flex h-14 px-10 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
          >
            Claim your page
          </a>
        </div>
      </section>
    </div>
  );
}
