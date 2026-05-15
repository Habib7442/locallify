# Architecture

The Locallify marketing site is built for speed, SEO, and premium visual choreography. It uses a modern, edge-ready stack to ensure fast delivery in tier-2/3 Indian cities.

## Tech Stack
| Layer | Technology | Role |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Core engine, SSR/SSG for SEO, Image optimization |
| **Styling** | Tailwind CSS v4 | Design system, utility-first styling with CSS variables |
| **Motion** | GSAP + CSS Animations | High-performance dynamic choreography & zero-JS marquee |
| **Smooth Scroll** | Lenis | Premium scroll feel (where performance allows) |
| **CMS** | Sanity / MDX | Content management for Blog and Case Studies |
| **Analytics** | Plausible / Vercel | Privacy-first performance and conversion tracking |
| **Backend** | Appwrite | Managed database and storage for dynamic content |
| **Deployment** | Vercel | Global Edge hosting |

## System Boundaries
- `app/`: Core routing and page layouts.
- `components/ui/`: Atomic design components (Buttons, Inputs, etc.).
- `components/sections/`: High-level marketing sections (Hero, Services, Pricing).
- `lib/`: Shared utilities, SEO helpers, and API clients.
- `content/`: MDX files or Sanity schemas for dynamic data.

## Storage & Data Model
- **Static Assets:** Hosted on Vercel with native Image Optimization.
- **Dynamic Assets:** Stored in Appwrite Buckets (project thumbnails, customer photos).
- **Content:** Blog posts and case studies stored in Sanity (or MDX for local-first).
- **Meta:** SEO metadata managed strictly via the native Next.js Metadata API.

## Invariants (Rules to Never Violate)
1. **Performance First:** Never ship render-blocking third-party scripts.
2. **Performance Budgets (hard limits):** JS bundle <120 KB, CSS <25 KB, fonts <120 KB, hero image <60 KB, total page weight <500 KB (all gzipped/optimized).
3. **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1 — all metrics must be green.
4. **Lighthouse Scores:** Performance ≥95, Accessibility ≥95, Best Practices ≥100, SEO ≥100. CI runs Lighthouse on every PR; failing scores block merge.
5. **Mobile Optimized:** Every design decision must prioritize the mid-range Android experience (95% of traffic is sub-₹20,000 Android phones on 4G).
6. **SEO Native:** Every page must have unique metadata and valid Schema.org JSON-LD.
7. **Token Consistency:** No hardcoded hex values; always use CSS variables/Tailwind tokens from `ui-context.md`.
8. **Interactive Safety:** All animations must respect `prefers-reduced-motion`.
9. **Security:** HTTPS and HSTS must be enabled everywhere.

## Auth & Access
- No public user authentication required (marketing site).
- Admin access for Sanity CMS restricted to the founding team.
