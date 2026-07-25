import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { articles } from "@/lib/data/articles";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import CTA from "@/components/CTA";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return constructMetadata({
    title: article.title,
    description: article.seoDescription,
    alternates: {
      canonical: `https://locallifyagency.com/blog/${article.slug}`,
    },
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Locallify",
      url: "https://locallifyagency.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Locallify",
      logo: {
        "@type": "ImageObject",
        url: "https://locallifyagency.com/locallify_dark.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://locallifyagency.com/blog/${article.slug}`,
    },
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-36 pb-24 px-4 sm:px-6">
        <article className="container mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles & Teardowns
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b border-border-default pb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-primary font-medium mb-4 block">
              {article.category}
            </span>

            <h1 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-text-primary leading-[1.1] mb-6">
              {article.title}
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl font-light leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent-primary" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-primary" />
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-primary" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none prose-headings:font-sans prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:text-text-primary prose-h2:mt-10 prose-h2:mb-4 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:font-light prose-p:text-base sm:prose-p:text-lg prose-li:text-text-secondary prose-strong:text-text-primary prose-table:border-border-default prose-th:bg-bg-surface prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-border-subtle prose-code:bg-bg-surface prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-accent-primary font-sans">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-sans font-bold text-text-primary mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2 my-4 list-disc list-inside text-text-secondary">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^(?:\d+\.|\-)\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
        </article>
      </main>

      <CTA />
    </div>
  );
}
