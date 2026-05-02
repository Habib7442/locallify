import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { projectService } from "@/lib/appwrite-service";
import PortfolioClient from "@/components/PortfolioClient";
import { Project } from "@/lib/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export default async function PortfolioPage() {
  let projects: Project[] = [];
  try {
    projects = await projectService.getPublicProjects();
  } catch (error) {
    console.error("Failed to fetch projects on server:", error);
  }

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden">
      
      <Navbar />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-[#F0F7FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,102,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <span className="inline-block px-6 py-2 rounded-full bg-[#0066FF]/10 text-[#0066FF] text-xs font-black uppercase tracking-[0.3em]">
              Locallify Showreel 2026
            </span>
            <h1 className="text-4xl md:text-8xl font-black leading-[1.05] tracking-tighter text-zinc-900 uppercase italic">
              LOCAL <br /> <span className="text-[#0066FF] not-italic">MASTERPIECES.</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              A curated collection of India&apos;s most ambitious businesses, powered by <span className="text-zinc-900 font-bold">Locallify Pages.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CLIENT PORTFOLIO SECTION ────────────────────────────────── */}
      <PortfolioClient initialProjects={projects} />

      <CTA 
        title={<>READY TO BE <br /> OUR NEXT <br /> <span className="text-[#0066FF]">LEGEND?</span></>}
        subtitle="We don't just build pages. We build digital legacies. Join the elite businesses across India who are already winning the digital game."
      />
      <Footer />
    </div>
  );
}
