# Architecture

The Locallify marketing site is built for speed, SEO, and premium visual choreography. It uses a modern, edge-ready stack to ensure fast delivery in tier-2/3 Indian cities.

## Tech Stack
| Layer | Technology | Role |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Core engine, SSR/SSG for SEO, Image optimization |
| **Styling** | Tailwind CSS v4 | Design system, utility-first styling with CSS variables |
| **Motion** | Framer Motion + GSAP | Component animations and scroll-triggered choreography |
| **Smooth Scroll** | Lenis | Premium scroll feel (where performance allows) |
| **CMS** | Sanity / MDX | Content management for Blog and Case Studies |
| **Analytics** | Plausible / Vercel | Privacy-first performance and conversion tracking |
| **Deployment** | Vercel | Global Edge hosting |

## System Boundaries
- `app/`: Core routing and page layouts.
- `components/ui/`: Atomic design components (Buttons, Inputs, etc.).
- `components/marketing/`: High-level marketing sections (Hero, Bento, Pricing).
- `lib/`: Shared utilities, SEO helpers, and API clients.
- `content/`: MDX files or Sanity schemas for dynamic data.

## Storage & Data Model
- **Static Assets:** Hosted on Vercel/Cloudinary with aggressive optimization.
- **Content:** Blog posts and case studies stored in Sanity (or MDX for local-first).
- **Meta:** SEO metadata managed via `next-seo` or Next.js metadata API.

## Invariants (Rules to Never Violate)
1. **Performance First:** Never ship render-blocking third-party scripts.
2. **Mobile Optimized:** Every design decision must prioritize the mid-range Android experience.
3. **SEO Native:** Every page must have unique metadata and valid Schema.org JSON-LD.
4. **Token Consistency:** No hardcoded hex values; always use CSS variables/Tailwind tokens from `ui-context.md`.
5. **Interactive Safety:** All animations must respect `prefers-reduced-motion`.

## Auth & Access
- No public user authentication required (marketing site).
- Admin access for Sanity CMS restricted to the founding team.
