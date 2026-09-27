import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import { blogService } from "@/lib/cms";
import { BlogPost } from "@/lib/types";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = constructMetadata({
  title: "Engineering & GEO Insights | Locallify",
  description: "Technical teardowns, Generative Engine Optimization (GEO) playbooks, structured schema guides, and software case studies by Locallify.",
  alternates: {
    canonical: "/blog",
  }
});

export const revalidate = 300;

export default async function BlogIndexPage() {
  let posts: BlogPost[] = [];
  try {
    posts = await blogService.getPublishedPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts on server:", error);
  }

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

      <main id="main-content" className="pt-36 pb-24 px-4 sm:px-6">
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
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between bg-bg-surface/50 border border-border-default rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent-primary/50 hover:bg-bg-surface/80 hover:shadow-[0_0_30px_rgba(208,255,20,0.08)]"
                >
                  {post.coverImage && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elevated">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent-primary font-medium">
                          {post.category}
                        </span>
                        {post.readingTime && (
                          <span className="text-[11px] font-mono text-text-muted flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime} min read
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors tracking-tight mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-text-secondary text-sm font-light leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono uppercase tracking-wider text-text-muted group-hover:text-accent-primary transition-colors">
                      <span>Read Breakdown</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-24 text-center border border-border-subtle bg-bg-surface/30 rounded-3xl">
              <BookOpen className="w-8 h-8 text-text-muted" />
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted">No articles published yet.</p>
            </div>
          )}
        </div>
      </main>

      <FinalCTA />
    </div>
  );
}
