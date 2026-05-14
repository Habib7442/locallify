# Locallify Website v2 — Product Requirements Document

**Document:** PRD.md
**Version:** 1.0
**Date:** May 2026
**Owner:** Locallify founding team
**Status:** Ready for build

---

## 0. TL;DR

Rebuild locallify.in into a $50,000-caliber marketing site that looks like it was made by a top Indian indie studio (Obys-tier, Active Theory-tier, Linear-tier) — not a Wix template. The design language is **"Voltage"**: deep midnight base, electric lime accent, magazine-grade variable typography, scroll-triggered motion, bento grids, and unapologetic Gen-Z confidence under a professional skin.

The site must communicate three things in under three seconds:

1. **What you do** — get local shops found on Google and ringing on WhatsApp.
2. **Who you are** — Made in the North East, building India's local-business stack.
3. **Why it matters** — outcomes (more customers), not features (a website).

---

## 1. Brand Vision

### 1.1 Positioning sentence

> Locallify is the digital storefront for India's local legends. We get your shop found on Google and turn searches into WhatsApp messages — for the price of one Zomato ad.

### 1.2 Brand personality

| Trait | What it means in design and copy |
|---|---|
| **Audacious** | Big type, sharp angles, no apologies. Pricing on the home page, not behind a contact form. |
| **Earned** | Numbers, case studies, real customer faces. Every claim has receipts. |
| **Local** | "Made in the North East" treated as a banner, not a footnote. Bilingual touches (Hindi, Assamese, Manipuri scripts) used as design elements. |
| **Modern** | Variable fonts, scroll motion, gradient meshes, bento grids — current state-of-the-art web craft. |
| **Useful** | Every interaction earns its place. No animation for animation's sake. |

### 1.3 What this is NOT

- Not corporate-cream editorial (you have that already, it's beige).
- Not cyberpunk-neon (cliché, off-brand for local businesses).
- Not Wix-templated SaaS landing (everyone has that).
- Not over-animated (no full-screen WebGL on hero — performance kills you in tier-2 India on 4G).

---

## 2. Target Audience

### 2.1 Primary visitor — the local-business owner

- Age 28–55, owns a salon/gym/dental clinic/tuition center/restaurant in a tier-2 or tier-3 Indian city.
- Mobile-first (95%+ of traffic from Android, average device a sub-₹20,000 phone).
- Decision time: minutes, not weeks. If the site is slow or confusing, they leave.
- Comfort with English: medium. Copy must be plain English, Hinglish-friendly, never jargon.

### 2.2 Secondary visitor — collaborator / partner / hire

- Looking at the site to decide if Locallify is "the real deal."
- Will judge the company by the website's design quality alone.
- This is why we are investing in a $50K-caliber design.

### 2.3 Tertiary visitor — Indian small-business Twitter / Indie Hackers

- A press-worthy site gets shared. The "show HN/Twitter" moment is real demand-gen.
- Design has to be screenshot-worthy.

---

## 3. Goals & KPIs

### 3.1 Site goals (in priority order)

1. **Convert visitors to WhatsApp inquiries** — primary CTA on every page.
2. **Establish credibility** — case studies, live examples, founder presence.
3. **Rank for local-business SEO terms** — long-tail tier-2 city queries.
4. **Be share-worthy** — a site indie founders screenshot and post.

### 3.2 Measurable KPIs

| KPI | 30-day target | 90-day target | 12-month target |
|---|---|---|---|
| Unique monthly visitors | 1,000 | 5,000 | 50,000 |
| WhatsApp CTA clicks | 80 | 500 | 8,000 |
| Paid customers from site | 5 | 50 | 800 |
| Lighthouse performance score | 95+ | 95+ | 95+ |
| Core Web Vitals — LCP | <2.5s | <2.0s | <1.5s |
| Bounce rate | <55% | <45% | <35% |
| Avg. session duration | 45s | 75s | 110s |
| Organic search traffic share | 15% | 35% | 60% |

---

## 4. Information Architecture

### 4.1 Sitemap

```
/                         Home (the showcase)
/work                     Customer gallery (live examples)
/work/[slug]              Individual case study
/pricing                  Detailed pricing + comparison
/services                 What we do, in depth
/services/websites        The Page
/services/google          The Presence
/services/social          The Lead Engine
/about                    Made in the North East story
/blog                     SEO content engine (long-form articles)
/blog/[slug]              Individual blog post
/blog/category/[slug]     Industry or city category page
/templates                Industry-vertical template gallery
/templates/[industry]     E.g. /templates/salon
/cities/[city]            City landing pages for local SEO
/help                     FAQ + support
/help/[slug]              Individual help article
/privacy                  Privacy policy
/terms                    Terms & conditions
/refund                   Refund policy
/contact                  Contact (mostly redirects to WhatsApp)
```

### 4.2 Primary navigation (header)

`Work · Services · Pricing · About · [WhatsApp button]`

### 4.3 Footer navigation

Three columns: Product · Company · Legal. Plus newsletter signup, social icons, "Made in the North East" badge.

---

## 5. Design System

### 5.1 Color tokens

```css
:root {
  /* Base — midnight, never pure black */
  --bg-primary:     #0A0A0E;
  --bg-surface:     #14141A;
  --bg-elevated:    #1C1C24;
  --bg-inverse:     #EFEFF2;

  /* Borders & dividers */
  --border-subtle:  #1F1F28;
  --border-default: #2A2A36;
  --border-strong:  #3A3A48;

  /* Accent — voltage lime is the signature */
  --accent-primary:  #D0FF14;
  --accent-hover:    #B8E600;
  --accent-soft:     #2E3A0A;

  /* Secondary — burn orange for heat */
  --accent-secondary:  #FF5C28;
  --accent-secondary-hover: #E04A1C;

  /* Text */
  --text-primary:   #EFEFF2;
  --text-secondary: #B4B4BE;
  --text-muted:     #7F7F8A;
  --text-subtle:    #5A5A66;
  --text-inverse:   #0A0A0E;

  /* Semantic */
  --semantic-good:  #5BE49B;
  --semantic-warn:  #FFB454;
  --semantic-bad:   #FF6B7A;

  /* Glass / gradient */
  --gradient-mesh-1: radial-gradient(at 20% 30%, rgba(208,255,20,0.10), transparent 50%);
  --gradient-mesh-2: radial-gradient(at 80% 70%, rgba(255,92,40,0.08), transparent 50%);
}
```

**Rules:**
- Lime is for emphasis, not decoration. One lime element per viewport.
- Orange is for heat (CTAs, "live" status, hot moments).
- Body text on dark is `#EFEFF2`, NOT pure white (causes eye strain on OLED).
- No cream, beige, warm white, sand, ivory.

### 5.2 Typography

| Role | Family | Weights | Use |
|---|---|---|---|
| **Display** | Instrument Serif (Variable) | 400 + italic | Hero headlines, section openers, pull quotes |
| **Sans (UI)** | Geist (Variable) | 300 / 400 / 500 / 600 / 700 | Body, navigation, buttons, all UI |
| **Mono** | Geist Mono | 400 / 500 | Labels, numbers, code, micro-meta |

All three are free Google Fonts. Variable fonts only (so we ship one file per family, not eight).

**Type scale** (1.250 perfect-fourth, fluid via `clamp()`):

```css
--text-xs:   clamp(0.75rem, 0.7rem + 0.2vw, 0.8125rem);
--text-sm:   clamp(0.875rem, 0.83rem + 0.2vw, 0.9375rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
--text-lg:   clamp(1.125rem, 1.05rem + 0.4vw, 1.25rem);
--text-xl:   clamp(1.375rem, 1.25rem + 0.6vw, 1.5rem);
--text-2xl:  clamp(1.75rem, 1.5rem + 1.2vw, 2.125rem);
--text-3xl:  clamp(2.25rem, 1.8rem + 2.2vw, 3rem);
--text-4xl:  clamp(3rem, 2.2rem + 4vw, 4.5rem);
--text-5xl:  clamp(4rem, 2.6rem + 7vw, 7rem);
--text-6xl:  clamp(5rem, 3rem + 10vw, 10rem);
```

**Display rules:**
- Hero uses `Instrument Serif` Italic. Always.
- Display text always negative letter-spacing (`-0.025em` to `-0.04em`).
- Line height for display: 0.95–1.05. Tight.
- Body line height: 1.55.
- Never set body type below 16px on mobile.

### 5.3 Spacing scale

8-point grid (rems for accessibility):

```
--space-0:  0;
--space-1:  0.25rem;  /* 4 */
--space-2:  0.5rem;   /* 8 */
--space-3:  0.75rem;  /* 12 */
--space-4:  1rem;     /* 16 */
--space-5:  1.5rem;   /* 24 */
--space-6:  2rem;     /* 32 */
--space-7:  3rem;     /* 48 */
--space-8:  4rem;     /* 64 */
--space-9:  6rem;     /* 96 */
--space-10: 8rem;     /* 128 */
--space-11: 12rem;    /* 192 */
```

### 5.4 Radius

```
--radius-sm:   4px;
--radius-md:   8px;
--radius-lg:   16px;
--radius-xl:   24px;
--radius-pill: 999px;
```

Cards: `--radius-lg`. Buttons: `--radius-pill` or `--radius-md` (consistent within the site).

### 5.5 Elevation / shadow

Dark themes don't use heavy shadows — they use **light glow** instead.

```
--glow-subtle:  0 0 0 1px var(--border-default);
--glow-accent:  0 0 24px rgba(208, 255, 20, 0.15);
--glow-warm:    0 0 24px rgba(255, 92, 40, 0.15);
```

### 5.6 Grid system

12-column, 24px gutters, max content width 1280px (with 1440px breakout for full-bleed sections). Bento grid uses CSS `grid-template-areas`.

### 5.7 Iconography

- Lucide icons (open source, free, consistent stroke weight).
- Stroke width 1.5px.
- Same size as adjacent text.
- Never colored — always `currentColor`.

### 5.8 Imagery direction

- Real customer photography only. No stock.
- High-grain, slightly desaturated, warm-on-cool color grading.
- Hand-shot phone photography acceptable and on-brand (this is local India).
- Avoid: AI-generated faces, generic SaaS illustrations, glowing-particles "AI" art.

---

## 6. Page-by-Page Specifications

### 6.1 Home (`/`)

The most important page. Every section must earn its viewport.

**Sections in order:**

1. **Hero**
   - Full-bleed midnight background with subtle gradient mesh (lime + orange, very low opacity, animated slowly via SVG filter).
   - Top-left: word mark `Locallify` in Geist 600.
   - Top-right: nav links + a primary WhatsApp button (lime fill, midnight text).
   - Center-left: **Hero headline** in Instrument Serif Italic — "We make your shop *findable*."
   - Beneath, in Geist 400: subhead — "On Google. On WhatsApp. In 48 hours. Starts at ₹1,499/month."
   - CTA row: lime "Claim your page" button + ghost "See live examples" link.
   - Right side: a "live device" — phone mockup running an actual customer's Locallify page, with a subtle scroll loop showing GBP → site → WhatsApp.
   - Below the fold: a horizontal **marquee** strip in mono — "MADE IN THE NORTH EAST · 1,000+ LOCAL LEGENDS · LIVE IN 48 HOURS · BUILT IN SILCHAR · ..."

2. **Stats strip**
   - Four large numbers in Instrument Serif, on dark surface card.
   - "48 hours · live page" / "₹1,499/mo · starts at" / "100% · WhatsApp-first" / "5 cities · NE India."
   - Numbers reveal on scroll (counter animation, brief).

3. **Problem → Solution**
   - Two-column. Left: "Most local businesses are invisible on Google." Right: a sketchy, lo-fi list of pain points — "no website, GBP unclaimed, customers can't find you, leads die in DMs."
   - Beneath: large pull quote — "We fix all of that. In a week."

4. **What we do — bento grid**
   - 6-card asymmetric bento layout.
   - Big card (2x2): "The Page" — visual showing a phone with a salon page.
   - Two stacked: "The Presence" (GBP grid) and "The Lead Engine" (WhatsApp / social posts).
   - Small cards: "Live status badge" / "QR visiting card" / "AI-drafted reviews."
   - Each card has a subtle hover (slight lift + lime border glow).

5. **Live examples — work gallery**
   - "Real shops. Real pages. Click any." — horizontal scroll carousel of 12 customer page thumbnails.
   - Each thumbnail = phone mockup with the page screenshot.
   - Hover reveals customer name + city.
   - Clicking opens a side drawer with the full case study, or links to `/work/[slug]`.

6. **Pricing teaser**
   - Three pricing cards (Starter / Growth / Dominate).
   - Growth is the featured center card with lime border and lime "Most picked" pill.
   - Prices in Instrument Serif huge. Features in compact Geist.
   - "See full pricing →" link below.

7. **Testimonials**
   - Three customer cards with real photo + quote + name + city + business.
   - Photos must be real (you have the rights, use them).

8. **Founder note**
   - Single paragraph from the founder, displayed like a handwritten note.
   - Photo of founder + signature.
   - "Why I built this from Silchar, not Bangalore."

9. **CTA closer**
   - Full-bleed lime section (rare — only here).
   - Massive type: "Your customers are already searching for you."
   - WhatsApp button + secondary "Talk to a human" link.

10. **Footer**
    - Three columns + newsletter + socials.
    - Bottom strip in mono: "Made in the North East · Silchar, Assam · © 2026 Locallify."

### 6.2 Work (`/work`)

- Grid gallery of all customer pages.
- Filterable by industry and city.
- Each card: thumbnail + business name + city + small "View page →" link to live customer page.
- Lazy-loaded with skeleton states.
- 60 customers visible by month 12 — this page is the proof.

### 6.3 Case study (`/work/[slug]`)

Long-form template:
- Cover image (the customer's storefront).
- One-line summary ("How a Silchar salon went from 0 to 14 Google calls a week").
- "The shop" — who they are, photo.
- "The challenge" — what wasn't working.
- "What we built" — page screenshot + GBP screenshot + social post screenshots.
- "The results" — three big numbers in Instrument Serif.
- "In their words" — pull quote.
- Related case studies.
- CTA.

### 6.4 Pricing (`/pricing`)

- Detailed three-tier table with every feature.
- Comparison table at bottom (Locallify vs. "doing it yourself" vs. "hiring an agency").
- FAQ section.
- Trust strip — refund policy, no lock-in, real human support.

### 6.5 Services (`/services` + sub-pages)

Each service gets its own page:
- The Page — what we build, examples, who it's for, pricing.
- The Presence — GBP work, sample reports, before/after.
- The Lead Engine — sample posts, sample Reels, content workflow.

### 6.6 About (`/about`)

The founder story, the team, why North East, the long-term plan. No corporate boilerplate.

### 6.7 Blog (`/blog`)

SEO engine. Each post follows a content template (see CLAUDE.md). Categories by city and industry.

### 6.8 Templates (`/templates/[industry]`)

Industry-specific landing pages with industry-specific examples. Critical for both SEO and conversion. One per major vertical (salon, gym, dental, tuition, restaurant, boutique, hardware, real estate).

### 6.9 City pages (`/cities/[city]`)

City-specific landing pages. "Get your Silchar business on Google." Critical for local SEO. One per priority city.

---

## 7. Component Library

Components to build (in order of priority):

1. **Button** — `primary` (lime fill), `secondary` (orange fill), `ghost` (outline), `link`.
2. **Nav header** — scroll-blur background, transforms on scroll.
3. **Hero device mockup** — animated phone with looped customer page scroll.
4. **Marquee** — infinite horizontal scroll of text, GPU-accelerated.
5. **Bento card** — variable spans, hover state.
6. **Pricing card** — three states (default, featured, hovered).
7. **Testimonial card** — photo + quote + meta.
8. **Case study card** — thumbnail + meta.
9. **FAQ accordion** — single-open behavior.
10. **Footer** — three-col grid + newsletter form.
11. **Cursor** — magnetic cursor (desktop only, prefers-reduced-motion respected).
12. **Scroll progress bar** — thin lime line at top of viewport on long pages.
13. **WhatsApp floating button** — visible after 100vh scroll.
14. **Section header** — number + label + display title (consistent across the site).

---

## 8. Animation & Motion Design

### 8.1 Motion principles

- **Motion has purpose.** It guides the eye, communicates state, rewards attention. Never decorative.
- **Performance over flair.** 60fps mandatory. If an animation can't hold 60fps on a mid-range Android, cut it.
- **Prefers-reduced-motion is honored.** Every animation has a no-motion fallback.
- **Easing is custom.** Default `cubic-bezier(0.16, 1, 0.3, 1)` (smooth out) and `cubic-bezier(0.7, 0, 0.84, 0)` (smooth in).

### 8.2 Specific animations to implement

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Hero headline | Word-by-word fade-up on mount | 600ms stagger 80ms | smooth out |
| Section headlines | Mask reveal on scroll into view | 700ms | smooth out |
| Stats counters | Count up from 0 when in view | 1200ms | linear |
| Marquee | Infinite horizontal scroll | 30s linear loop | linear |
| Bento card hover | Lift 4px + lime border glow | 200ms | smooth out |
| Button hover | Background swap + arrow translate | 180ms | smooth out |
| Page transitions | Fade + slight scale | 300ms | smooth out |
| Cursor (desktop) | Magnetic pull on links, scale on hover | 150ms | smooth |
| Image reveal | Mask + grain overlay fades in | 600ms | smooth out |
| Pricing card | Tilt 5deg on hover (desktop only) | 200ms | smooth out |

### 8.3 Libraries

- **GSAP** + ScrollTrigger — for scroll-triggered choreography.
- **Lenis** — smooth scroll (optional, with proper reduced-motion handling).
- **Framer Motion** — if using React (preferred for component-level motion).
- No three.js / WebGL on landing pages — too heavy for the audience.

### 8.4 What NOT to animate

- Loading spinners that block content.
- Page-load splash screens (Gen-Z hates them, performance kills them).
- Particle backgrounds.
- Confetti.
- Anything autoplaying with sound.

---

## 9. Content Strategy

### 9.1 Voice & tone

- **Direct.** "We get your shop on Google." Not "We help businesses unlock digital presence solutions."
- **Confident.** Pricing on the home page. Capacity stated. Promises specific.
- **Warm.** Indian-English, occasional Hinglish micro-copy ("Bas itna kafi hai.").
- **Modest where it counts.** "We're a small team from Silchar."
- **Numerical.** Specific numbers, not vague claims. "Live in 48 hours" not "Quick turnaround."

### 9.2 Headline writing rules

- Always one verb at the start ("We build," "We get," "We turn").
- Always one specific outcome.
- Always one number where possible.
- Italicize one word per headline using Instrument Serif italic — that's the visual hook.

### 9.3 Microcopy

Specific phrases to use throughout:

- WhatsApp CTAs: "Send 'PAGE' on WhatsApp" not "Get started."
- Footer signoff: "Built with chai, in Silchar."
- 404 page: "Yeh page kahin chala gaya."
- Empty states: "Nothing here yet. Soon though."
- Form errors: human ("That phone number doesn't look right.").

---

## 10. SEO Requirements

(Detailed in CLAUDE.md — summary here.)

- Every page must have a unique `<title>` (50–60 chars) and `<meta description>` (150–160 chars).
- All pages use semantic HTML (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`).
- One `<h1>` per page; clean hierarchy beneath.
- Open Graph + Twitter Card meta on every page.
- Schema.org JSON-LD: `Organization`, `LocalBusiness`, `Service`, `BlogPosting`, `FAQPage`, `BreadcrumbList`.
- Sitemap.xml auto-generated.
- robots.txt configured.
- All images have `alt`. All decorative images: `alt=""`.
- Internal linking strategy enforced (every blog post links to 3+ related posts and 1+ service page).

---

## 11. Performance Requirements

| Metric | Target | Hard limit |
|---|---|---|
| LCP (Largest Contentful Paint) | <1.8s | <2.5s |
| FID (First Input Delay) | <100ms | <200ms |
| CLS (Cumulative Layout Shift) | <0.05 | <0.1 |
| TTI (Time to Interactive) | <3s | <4s |
| Total page weight (mobile) | <500KB | <1MB |
| Total HTTP requests | <30 | <50 |
| Lighthouse performance | 95+ | 90+ |

**Practices:**
- Variable fonts (one file per family).
- All images served as AVIF with WebP fallback.
- Lazy-load all below-fold images.
- Preload hero image and critical fonts.
- Critical CSS inlined.
- JS deferred or async.
- No render-blocking third-party scripts.
- Use Cloudflare or Vercel edge.

---

## 12. Accessibility Requirements

- **WCAG 2.2 AA minimum.**
- Color contrast: 4.5:1 for body, 3:1 for large text. Lime on dark passes.
- All interactive elements keyboard-navigable.
- Focus styles visible (custom, on-brand).
- `prefers-reduced-motion` respected — all animations have static fallbacks.
- All form fields have labels (visible or `aria-label`).
- Skip-to-content link.
- Image alt text on all meaningful images.
- ARIA landmarks correct.

---

## 13. Tech Stack Recommendation

| Layer | Recommendation | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSR/SSG for SEO, image optimization, edge runtime |
| **Styling** | Tailwind CSS v4 + CSS variables | Fast, design-system-friendly |
| **Motion** | Framer Motion + GSAP (selective) | Component motion + scroll choreography |
| **Smooth scroll** | Lenis (optional) | Premium feel without performance cost |
| **CMS** | Sanity OR MDX in repo | Sanity for non-tech team editing, MDX if founder-only |
| **Forms** | Resend (email) + WhatsApp API | Direct to WhatsApp where possible |
| **Analytics** | Plausible OR Vercel Analytics | Privacy-first, lightweight |
| **Hosting** | Vercel (edge) OR Cloudflare Pages | Global CDN, free tier ample |
| **Image hosting** | Cloudinary OR `next/image` + Vercel | Auto AVIF/WebP, srcset |
| **SEO** | next-sitemap + next-seo | Automated sitemap, structured data |
| **Error monitoring** | Sentry (free tier) | Catch production issues |

---

## 14. Implementation Phases

### Phase 1 — Foundation (Weeks 1–2)
- Set up Next.js + Tailwind + design tokens.
- Build the component library (buttons, nav, footer, cards).
- Build the home page in skeleton form.
- Wire WhatsApp CTA + analytics.

### Phase 2 — Content pages (Weeks 3–4)
- Build Pricing, About, Services pages.
- Set up Sanity (or MDX) for blog.
- Migrate any existing content.
- Implement the case-study template.

### Phase 3 — Motion & polish (Week 5)
- Add scroll choreography (GSAP).
- Add hover/cursor effects.
- Magnetic cursor on desktop.
- Marquee.
- Bento hover states.

### Phase 4 — SEO & performance (Week 6)
- Structured data on every page.
- Sitemap, robots, meta tags audit.
- Image optimization pass.
- Lighthouse run, hit 95+.
- Set up Search Console + Bing Webmaster.

### Phase 5 — Launch + iteration (Week 7+)
- Soft-launch to existing customers and Indie Hackers India.
- Capture feedback for one week.
- Public launch.
- Begin blog cadence (2 posts/week, see CLAUDE.md).

---

## 15. Open Questions / Decisions Needed

1. **Domain strategy** — does each customer page live at `yourname.locallify.in` or `locallify.in/yourname`? Recommendation: subdomain (better SEO, perceived separateness).
2. **Hindi/regional language UI** — full localization or English-only with regional script flourishes in design? Recommendation: English UI, regional script as decoration, full localization in Phase 6.
3. **Brand mark** — current word mark needs sharpening or a dedicated logotype designed. Recommendation: commission an indie type designer for a custom wordmark (₹15–30K spend, worth it).
4. **Founder photography** — needs professional shoot. Recommendation: one half-day shoot, ₹10–15K, gives you 6 months of brand imagery.

---

## 16. Definition of Done

The website ships when:

- [ ] All 14 page templates built and live.
- [ ] Lighthouse 95+ on home, pricing, and three case studies.
- [ ] All forms route to WhatsApp or a working endpoint.
- [ ] Structured data validates without errors in Google Rich Results.
- [ ] Site is mobile-perfect (tested on 3 real devices).
- [ ] All animations respect `prefers-reduced-motion`.
- [ ] Founder has signed off on copy, voice, brand mark.
- [ ] Three real customer case studies live on `/work`.
- [ ] First 10 blog posts published.
- [ ] Analytics dashboard live and tracking the 8 KPIs in Section 3.2.

---

*End of PRD.*