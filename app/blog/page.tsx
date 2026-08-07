import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { articles } from "@/lib/data/articles";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata = constructMetadata({
  title: "Engineering & GEO Insights",
  description: "Technical teardowns, Generative Engine Optimization (GEO) playbooks, structured schema guides, and software case studies by Locallify.",
  alternates: {
    canonical: "/blog",
  }
});

export default function BlogIndexPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-36 pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
              Engineering & GEO Insights
            </span>
            <h1 className="font-display italic text-5xl sm:text-7xl font-normal leading-[0.9] text-text-primary mb-6">
              Technical playbooks & <span className="text-accent-primary not-italic font-sans font-bold">search teardowns.</span>
            </h1>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              Deep dives on Generative Engine Optimization (GEO), structured Schema.org graphs, Next.js performance architecture, and real case study breakdowns.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col justify-between p-6 bg-bg-surface/50 border border-border-default rounded-2xl transition-all duration-300 hover:border-accent-primary/50 hover:bg-bg-surface/80 hover:shadow-[0_0_30px_rgba(208,255,20,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent-primary font-medium">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors tracking-tight mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-text-secondary text-sm font-light leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono uppercase tracking-wider text-text-muted group-hover:text-accent-primary transition-colors">
                  <span>Read Breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <CTA />
    </div>
  );
}
