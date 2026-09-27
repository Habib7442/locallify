import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "@/components/Navbar";
import { blogService } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await blogService.getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/** Only trust a CMS canonical that points at our own www origin; anything else falls back to the post URL. */
function resolveCanonical(post: { canonicalUrl?: string; slug: string }) {
  return post.canonicalUrl?.startsWith(`${SITE_URL}/`) ? post.canonicalUrl : `${SITE_URL}/blog/${post.slug}`;
}

/** Team bylines ("Locallify Engineering") are the organization, not a person. */
function authorJsonLd(author?: string) {
  if (!author || author.startsWith("Locallify")) return { "@id": `${SITE_URL}/#organization` };
  return { "@type": "Person", name: author };
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return constructMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.ogImage || post.coverImage,
    keywords: post.metaKeywords?.length ? post.metaKeywords : undefined,
    alternates: {
      canonical: resolveCanonical(post),
    },
    noIndex: post.robotsRule ? post.robotsRule.includes("noindex") : false,
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: post.author ? [post.author] : undefined,
    },
  });
}

export const revalidate = 300;

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await blogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = resolveCanonical(post);
  const image = post.ogImage || post.coverImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        ...(image && { image }),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: authorJsonLd(post.author),
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content" className="pt-36 pb-24 px-4 sm:px-6">
        <article className="container mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles & Teardowns
          </Link>

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-10 bg-bg-surface">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-12 border-b border-border-default pb-10">
            {post.category && (
              <span className="text-xs font-mono uppercase tracking-wider text-accent-primary font-medium mb-4 block">
                {post.category}
              </span>
            )}

            <h1 className="font-sans font-bold text-3xl sm:text-5xl tracking-tight text-text-primary leading-[1.1] mb-6">
              {post.title}
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl font-light leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent-primary" />
                <span>{post.author}</span>
              </div>
              {post.publishedAt && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent-primary" />
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              )}
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-primary" />
                  <span>{post.readingTime} min read</span>
                </div>
              )}
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none prose-headings:font-sans prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:text-text-primary prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:text-text-primary prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-relaxed prose-p:font-light prose-p:text-base sm:prose-p:text-lg prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-li:text-text-secondary prose-strong:text-text-primary prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary prose-table:border-border-default prose-th:bg-bg-surface prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-border-subtle prose-code:bg-bg-surface prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-accent-primary prose-code:before:content-none prose-code:after:content-none prose-pre:bg-bg-surface prose-pre:border prose-pre:border-border-subtle font-sans">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border-subtle flex flex-wrap items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-subtle">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-3 py-1 bg-bg-surface border border-border-subtle text-text-muted rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>

      <FinalCTA />
    </div>
  );
}
