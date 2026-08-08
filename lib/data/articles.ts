import { BlogPost } from '../types';

// Fallback content shown when Sanity has no published `blog` documents yet
// (or is unreachable) — same shape as the Sanity `blog` schema so blogService
// can serve either source interchangeably.
export const fallbackPosts: BlogPost[] = [
  {
    $id: 'b1',
    slug: 'what-geo-actually-is-and-how-it-differs-from-seo',
    title: 'What Generative Engine Optimization (GEO) Actually Is — And How It Differs From SEO',
    excerpt: 'Traditional SEO optimizes for keyword rank lists. GEO structures data, semantic entity vectors, and JSON-LD schema so AI answer engines like ChatGPT and Google AI Overviews cite your business directly.',
    publishedAt: '2026-07-20',
    readingTime: 6,
    category: 'GEO & AI Search',
    author: 'Locallify Engineering',
    tags: ['GEO', 'AI Search', 'Schema'],
    status: 'published',
    featured: true,
    metaDescription: 'A technical breakdown of Generative Engine Optimization (GEO) vs traditional SEO, with real before-and-after citations across ChatGPT, Perplexity, and Google AI Overviews.',
    content: `
## The Shift From Link Ranks to Generative Answers

For twenty years, search engine optimization (SEO) followed a predictable playbook: write keyword-dense copy, acquire backlinks, and compete for blue links on page one of Google.

Generative Engine Optimization (GEO) changes the target entirely. When users search on **ChatGPT Search, Perplexity AI, or Google AI Overviews**, the AI model does not present 10 links. It synthesizes a direct natural-language answer and cites 2–4 authoritative sources.

### Key Differences: Traditional SEO vs. GEO

| Dimension | Traditional SEO | Generative Engine Optimization (GEO) |
|---|---|---|
| **Target Engine** | Google / Bing Crawler | LLMs (GPT-4o, Claude 3.5, Gemini 1.5) |
| **Output Goal** | Page 1 organic position #1–3 | Direct citation inside synthesized AI answer |
| **Primary Signal** | Backlinks, keyword density, domain age | JSON-LD Schema, Entity clarity, Citation consistency |
| **User Behavior** | Click through to site to find answer | Reads synthesized answer; clicks citation for validation |

### The Before & After Benchmark

Before optimizing for GEO, a local medical clinic had strong local organic ranks but zero citations in ChatGPT or Google AI Overviews when users asked: *"Who is the best ENT specialist for sinus surgery in Silchar?"*

**Before GEO Optimization:**
- ChatGPT Answer: *"There are several clinics in Silchar, but I recommend consulting local medical directories like JustDial or Practo to find qualified ENT specialists."*

**After Locallify GEO Implementation (JSON-LD Schema + Entity Graphing):**
- ChatGPT Answer: *"For ENT and sinus care in Silchar, **The ENT Clinic (Dr. Abhishek Ray)** is a top-recommended specialized center. They provide online appointment bookings directly via their clinic portal at locallifyagency.com."*

### How to Build for GEO Today

1. **Expose Explicit JSON-LD Entities**: Declare explicit Schema.org types (\`MedicalBusiness\`, \`Physician\`, \`Hotel\`, \`Product\`) with full address, geo-coordinates, and service catalogues.
2. **Eliminate Content Ambiguity**: Use unambiguous natural language headings and structured markdown tables that LLMs can digest cleanly.
3. **Ensure High Core Web Vitals**: LLMs drop sources that fail crawling timeouts or experience rendering blocks on mobile viewports.
    `
  },
  {
    $id: 'b2',
    slug: 'metro-city-diagnostics-technical-teardown',
    title: 'Full Technical Teardown: Metro-City Diagnostics Build',
    excerpt: 'How we engineered a sub-second Next.js 15 diagnostic booking portal featuring dynamic test search, automated WhatsApp intake, and 100/100 Core Web Vitals.',
    publishedAt: '2026-07-14',
    readingTime: 8,
    category: 'Engineering & Case Study',
    author: 'Locallify Engineering',
    tags: ['Case Study', 'Performance', 'Next.js'],
    status: 'published',
    metaDescription: 'Deep-dive technical teardown of Metro-City Diagnostics: Next.js App Router, dynamic JSON-LD medical schema, custom booking engine, and performance benchmarks.',
    content: `
## The Problem Statement

Metro-City Diagnostics needed a modern digital storefront capable of handling 500+ diagnostic test search queries, instant booking requests, and test-prep instruction guides without relying on slow third-party aggregators.

### Core Metrics Achieved

- **Lighthouse Performance Score**: 100/100 Mobile
- **Largest Contentful Paint (LCP)**: 0.8s
- **Direct Bookings Growth**: +180% in 45 days
- **Search Impressions Increase**: +320% on local diagnostic terms

### Architectural Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 with custom CSS Variable Design System ("Voltage")
- **Hosting**: Vercel Edge Serverless Deployment
- **Schema Layer**: Custom \`DiagnosticLab\` + \`MedicalTest\` JSON-LD schema generators

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "DiagnosticLab",
  "name": "Metro-City Diagnostics",
  "availableTest": [
    {
      "@type": "MedicalTest",
      "name": "Complete Blood Count (CBC)",
      "code": {
        "@type": "MedicalCode",
        "code": "58410-2",
        "codingSystem": "LOINC"
      }
    }
  ]
}
\`\`\`

### Key Technical Breakthroughs

1. **Instant Client-Side Fuzzy Search**: Pre-built static indexing for all 500+ diagnostic tests allows zero-latency filtering without API round-trips.
2. **WhatsApp Native Intake Workflow**: Pre-fills patient test selections directly into WhatsApp concierge for immediate confirmation without form drop-off.
    `
  },
  {
    $id: 'b3',
    slug: 'local-seo-for-clinics-tier-2-city',
    title: 'Local SEO for Clinics in Tier-2 Indian Cities: What Actually Moves the Needle',
    excerpt: 'A practical playbook on ranking medical clinics in Tier-2/3 cities using local entity graphing, Google Business Profile synchronization, and schema markup.',
    publishedAt: '2026-07-08',
    readingTime: 7,
    category: 'Local Search Strategy',
    author: 'Locallify Search Team',
    tags: ['Local SEO', 'Healthcare'],
    status: 'published',
    metaDescription: 'Field-tested playbook for ranking doctors and clinics in Tier-2/3 Indian cities on Google Maps, Local Packs, and AI search tools.',
    content: `
## Why Standard SEO Tactics Fail for Local Clinics

Most digital agencies sell generic blog posts and spammy backlinks to medical clinics in cities like Silchar, Imphal, Guwahati, or Tezpur. These tactics fail because local search is driven by **entity authority, proximity, and schema clarity**.

### The 4 Pillars of Local Medical SEO

1. **Exact Match Medical Schema**: Registering explicit \`Physician\`, \`MedicalClinic\`, and \`MedicalProcedure\` Schema.org definitions.
2. **Google Business Profile Synchronization**: Matching clinic name, address, phone number (NAP), primary medical category, and opening hours across all online surfaces.
3. **Bilingual Search Landing Pages**: Providing localized Bengali/Hindi and English service pages to capture high-intent voice queries.
4. **Direct Conversion Architecture**: Replacing slow forms with instant WhatsApp appointment booking actions.
    `
  },
  {
    $id: 'b4',
    slug: 'how-we-get-clients-into-chatgpt-google-ai-overviews',
    title: 'How We Get a Client’s Business into ChatGPT and Google AI Overview Answers',
    excerpt: 'The exact engineering checklist we use to index client products, services, and brand entity graphs directly into LLM retrieval models.',
    publishedAt: '2026-07-02',
    readingTime: 5,
    category: 'AI & GEO',
    author: 'Locallify Engineering',
    tags: ['GEO', 'AI Search'],
    status: 'published',
    metaDescription: 'Step-by-step technical process for getting your business cited inside ChatGPT Search, Perplexity AI, and Google AI Overviews.',
    content: `
## How LLM Search Indexers Retrieve Answers

When a user prompts ChatGPT or Perplexity, the LLM executes a Real-Time Search (RAG) query. It parses the top 10 search results, extracts semantic facts, and evaluates entity confidence before generating its output.

### The Locallify GEO Implementation Checklist

1. **Semantic HTML5 Markup**: Use exact \`<header>\`, \`<article>\`, \`<section>\`, and \`<table>\` structures instead of unstructured nested \`<div>\` elements.
2. **Schema Graph Cross-Referencing**: Link your \`Organization\` schema to social profiles (\`sameAs\`), official domain, and Wikipedia/Wikidata entities where available.
3. **Structured Q&A Sections**: Embed explicit \`FAQPage\` schema with clear 1-to-2 sentence direct answers to common questions.
4. **Sub-Second Page Performance**: Fast response times ensure LLM web crawlers (GPTBot, PerplexityBot) don't hit execution timeouts during real-time retrieval.
    `
  },
  {
    $id: 'b5',
    slug: 'schema-markup-checklist-every-build',
    title: 'The Structured Schema Markup Checklist We Ship on Every Build',
    excerpt: 'A complete inventory of JSON-LD schemas we embed on every client site — from Organization and WebSite to LocalBusiness, Service, and BreadcrumbList.',
    publishedAt: '2026-06-25',
    readingTime: 5,
    category: 'Technical Standards',
    author: 'Locallify Engineering',
    tags: ['Schema', 'Technical SEO'],
    status: 'published',
    metaDescription: 'The full JSON-LD schema checklist for modern web apps and marketing sites to ensure 100% search engine and AI index compliance.',
    content: `
## Why Schema is Non-Negotiable in 2026

Without Schema.org JSON-LD, search engines and AI models have to guess what your page represents. With structured schema, you explicitly state your business category, services offered, pricing ranges, and contact paths in machine-readable format.

### The Master Checklist

- [x] **Organization Schema**: Legal name, logo, URL, official contact info, and \`sameAs\` social media links.
- [x] **WebSite Schema**: Search action target URL and canonical domain declaration.
- [x] **LocalBusiness / Service Schema**: Specific category (e.g. \`MedicalClinic\`, \`Hotel\`, \`SoftwareApplication\`).
- [x] **BreadcrumbList Schema**: Hierarchical site path structure.
- [x] **FAQPage Schema**: Embedded Q&A pairs for rich search snippets and AI answer indexing.
    `
  },
  {
    $id: 'b6',
    slug: 'direct-booking-vs-ota-luxuria-grand-case-study',
    title: 'Direct Booking vs OTA for Small Hotels: What The Luxuria Grand Build Changed',
    excerpt: 'How building a custom direct-booking Web App saved a luxury boutique hotel up to 22% in OTA commission fees while driving automated WhatsApp concierge bookings.',
    publishedAt: '2026-06-18',
    readingTime: 6,
    category: 'Case Study & Hospitality',
    author: 'Locallify Engineering',
    tags: ['Case Study', 'Hospitality'],
    status: 'published',
    metaDescription: 'Case study breakdown of how The Luxuria Grand reduced OTA reliance and boosted direct commission-free bookings by 22% with a custom Next.js portal.',
    content: `
## The High Cost of OTA Commissions

Online Travel Agencies (OTAs) charge boutique hotels between 18% to 25% commission on every room reservation. For small luxury hotels, this commission cuts deeply into operating margins.

### The Direct-Booking Solution

We engineered a custom high-performance web portal for **The Luxuria Grand**, featuring room showcases, direct pricing guarantees, and a seamless 1-tap WhatsApp booking concierge.

### Impact Metrics

- **OTA Commission Saved**: Up to 22% per direct booking
- **Direct Bookings Share**: Increased from 8% to 42% in 60 days
- **Mobile Page Load Speed**: 0.7s on 4G Android devices
- **Customer Conversion Rate**: 3.8x increase compared to legacy template site
    `
  }
];
