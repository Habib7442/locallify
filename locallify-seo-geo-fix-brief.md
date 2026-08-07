# Locallify — SEO / GEO / Technical Fix Brief

**For:** Claude Code (agentic implementation)
**Repo:** the Next.js codebase powering `https://www.locallifyagency.com`
**Prepared from:** a full marketing + technical audit (score: 80/100 — strong build, weak off-site amplification)
**Goal:** close the on-site gaps that are code-fixable, with a strong focus on SEO, local SEO, GEO (Generative Engine Optimization), schema, and performance.

---

## 0. How to work through this brief

1. **Inspect before you change anything.** This brief is written from the outside (crawled pages), so do not trust my assumptions about file structure. Open the repo, map the App Router layout, find how metadata / schema / images are currently handled, and adapt. Where I say "likely `app/layout.tsx`," verify first.
2. **Do the tasks in the numbered order.** They're sequenced by impact-to-effort. Don't spread thin.
3. **One commit per task** with a clear message (e.g. `feat(seo): add LocalBusiness + AggregateRating JSON-LD`). Keep changes reviewable.
4. **Every task has an Acceptance Criteria block. Don't mark a task done until it passes.**
5. **Do NOT invent data.** Use only the verified values in the "Reference data" block below. If something isn't there, leave a clearly-marked `TODO(owner):` comment instead of guessing.
6. **Run the verification checklist in Section 12 before finishing.**

---

## 1. Reference data (verified — use these exact values)

| Field | Value |
|---|---|
| Canonical domain | `https://www.locallifyagency.com` |
| Legal / brand name | Locallify (Locallify Agency) |
| Google category | Software company |
| Google rating | 5.0 stars |
| Google review count | 27 |
| Address | Fakirtilla, near NIT, P.S. NIT, Silchar, Cachar, Assam 788010, India |
| Phone / WhatsApp | +91 6000163450 (`https://wa.me/916000163450`) |
| Email | hello@locallifyagency.com |
| LinkedIn | https://www.linkedin.com/company/locallifyagency/ |
| Facebook | https://www.facebook.com/profile.php?id=61592029269964 |
| Instagram | https://www.instagram.com/locallify.in/ |
| Twitter/X handle | @locallify |
| Secondary domain | `locallify.in` (must 301 → `locallifyagency.com`) |
| Theme color | `#0A0A0E` |
| Stack (from build notes) | Next.js 15 (App Router), Tailwind, some Sanity CMS on client builds |

> If any of these has changed, update this table and use the new value — but never fabricate a missing one.

---

## 2. Positioning / entity clarity  ⭐ high impact

**Problem:** The site says "global software studio, serving companies worldwide, priced in USD," but the Google Business Profile and the entire portfolio are Silchar-based local businesses. Search engines and AI answer engines read mixed signals (global vs. local) and rank/cite you for neither. You already dominate the "Silchar software company" entity (5.0 ★, 27 reviews) — that's the winnable position.

**Direction (recommended):** anchor the entity **locally** while keeping global-capable language. Not "we only serve Silchar" — rather "a software studio *based in Silchar, Assam*, serving clients across India and globally."

**Do:**
- [ ] Add a clear location signal to the homepage and footer: "Software studio based in Silchar, Assam — serving India & clients worldwide." (Footer currently says only "Founded in India · Serving companies globally.")
- [ ] Ensure the `LocalBusiness` schema (Section 4) carries the full Silchar NAP.
- [ ] Keep global/USD language on the pricing/services pages — do not remove global reach, just stop hiding the local anchor.
- [ ] Add one location-focused landing page (Section 6).
- [ ] `TODO(owner):` confirm you're happy anchoring the primary entity to Silchar before merging copy changes.

**Acceptance:** homepage HTML, footer, and JSON-LD all clearly state the business is based in Silchar, Assam, without removing global-reach messaging.

---

## 3. Structured data / JSON-LD  ⭐⭐ highest impact for SEO + GEO

You sell schema to clients — the audit couldn't verify it's fully live on your *own* pages. Make it exemplary. Use JSON-LD (`<script type="application/ld+json">`), one graph where sensible, injected via the App Router (a `JsonLd` component rendered in the relevant layout/page, or Next.js metadata route).

**3a. Sitewide (root layout) — `Organization` + `WebSite`:**
- [ ] `Organization`: name, url, logo, description, `sameAs` (all social URLs from Section 1), `contactPoint` (WhatsApp/phone, email, `contactType: "customer support"`, `areaServed: ["IN","Worldwide"]`).
- [ ] `WebSite`: name, url, `publisher` (ref to Organization). Add `potentialAction` → `SearchAction` only if an on-site search exists; otherwise skip.

**3b. `LocalBusiness` (subtype `ProfessionalService` or `Organization`+`address`) — with AggregateRating:**
- [ ] Full `PostalAddress` (Section 1 NAP), `geo` (lat/lng ~ 24.7564, 92.7985 — verify against the real GBP pin), `telephone`, `openingHours`, `priceRange`, `url`, `image`.
- [ ] `aggregateRating`: `ratingValue: "5.0"`, `reviewCount: "27"`.

  ⚠️ **Google guideline:** self-serving `aggregateRating` on your own Organization can be ignored or flagged **unless the reviews are actually visible on the page that carries the markup.** So pair this with Task 5 (show real reviews on `/reviews` and a homepage strip). Put the `AggregateRating` markup on the page where the reviews are visibly rendered. Do not mark up a rating that isn't shown to users.

**3c. `Service` schema on the services page:** one `Service` node per capability (Custom software, Web apps/SaaS, Mobile apps, AI/voice agents, Automation, SEO+GEO, Product systems), each with `provider` (ref Organization) and `areaServed`.

**3d. `BreadcrumbList`** on every nested page (`/portfolio/[slug]`, `/blog/[slug]`, service pages).

**3e. `Article` / `BlogPosting`** on each blog post: `headline`, `description`, `author` (Organization or a Person), `datePublished`, `dateModified`, `image`, `mainEntityOfPage`. Critical for GEO — this is what makes AI engines cite the post.

**3f. `CreativeWork` / `CaseStudy`-style markup** on each portfolio item (use `CreativeWork` or `WebSite` about the client, with `about`, `datePublished`, outcomes as text). Optional but strengthens topical authority.

**3g. `FAQPage`** on any page with a real Q&A section (the homepage already has "Who owns the code and IP?" and "How long does a project take?" — mark those up). Add an FAQ block to the services page and mark it up too. FAQ schema is high-value for both rich results and AI answer extraction.

**Acceptance:**
- [ ] Every page type validates in Google's Rich Results Test with **zero errors**.
- [ ] `Organization`, `WebSite`, `LocalBusiness` (with `aggregateRating` where reviews are shown), `Service`, `BreadcrumbList`, `Article`, and `FAQPage` are all present on their correct page types.
- [ ] No `aggregateRating` markup on any page that doesn't visibly render reviews.

---

## 4. Per-page metadata & canonicals  ⭐ high impact

**Problem:** The homepage metadata is strong, but confirm every route has *unique* title/description/OG/canonical (App Router `generateMetadata` or per-route `metadata`). Templated or duplicated meta hurts.

**Do:**
- [ ] Every route exports unique `title` + `description`. Use a title template in root layout (e.g. `%s | Locallify`) and set page-specific titles.
- [ ] Every route sets a self-referencing `canonical` (`alternates.canonical`) on `https://www.locallifyagency.com/...`.
- [ ] Per-page OG image where it adds value (portfolio items and blog posts should get their own OG image, not the generic `og_image.jpg`). Consider dynamic OG images via `next/og` (`opengraph-image.tsx`) using the project/post title.
- [ ] Ensure `metadataBase` is set to the canonical domain so relative OG URLs resolve.
- [ ] Titles for commercial pages should name the service + "Silchar" / "India" where natural (e.g. Services page: "Custom Software, Web & Mobile App Development in Silchar, India | Locallify").

**Acceptance:** crawl every route; each has a unique title, unique description, a correct self-canonical, and a resolving OG image. No two routes share a title.

---

## 5. Surface the reviews on-site  ⭐ high impact

**Problem:** 27 real 5.0★ reviews live only inside Google. They're invisible on your own site, so they build zero on-page trust and can't back your `aggregateRating` schema.

**Do:**
- [ ] Homepage: add a compact trust strip above/near the primary CTA — "5.0 ★ · 27 Google reviews" linking to the GBP, plus 2–3 named client quotes.
- [ ] `/reviews` page: render real reviews. Two options —
  - **Preferred:** pull live via **Google Places API** (`Place Details` → `reviews`, `rating`, `user_ratings_total`). Requires an API key (`TODO(owner):` provide `GOOGLE_PLACES_API_KEY`) and the Place ID. The maps URL exposes a hex ID (`0x6c204921c4c62521:0x7816ef088d4b0f88`); resolve the API `place_id` (`ChIJ…`) via Place Search, then cache results server-side (ISR / revalidate daily) — do **not** call the API on every request.
  - **Fallback (if no API key yet):** statically embed the real review text/author/rating the owner pastes in, behind a typed data file, so it's easy to update. Mark clearly as `TODO(owner): replace with live API when key is available`.
- [ ] Only after reviews are visibly rendered, attach the `AggregateRating` markup (Section 3b) to that page.

**Acceptance:** `/reviews` shows real reviews (live or owner-supplied), homepage shows the rating strip, and the rating schema sits on a page that visibly displays the reviews.

---

## 6. On-page local SEO  ⭐ high impact

**Problem:** You're invisible in organic results for high-intent commercial queries like "web development company Silchar" (competitors rank; you don't). The GBP wins the map pack, but there's no organic landing page targeting these terms.

**Do:**
- [ ] Create a location + service landing page, e.g. `/web-development-company-silchar` (or a `/locations/silchar` hub). Real, useful content — not doorway spam: who you serve, the local businesses you've built (link the portfolio), the areas covered (Silchar, Cachar, Barak Valley, and "India + global"), an FAQ, and a CTA. Target the natural phrases: "web development company in Silchar," "software company in Silchar," "app development Silchar."
- [ ] Add city/region mentions naturally to the About and Services pages.
- [ ] Strengthen internal linking: homepage and services → the Silchar landing page; portfolio items → services; blog posts → relevant service/portfolio pages. Descriptive anchor text, not "click here."
- [ ] Ensure every portfolio item names the client's city and links out to the live site (good for topical/local relevance).

**Acceptance:** a genuinely useful Silchar-targeted landing page exists, is internally linked, is in the sitemap, and validates its schema (`Service` + `FAQPage` + `BreadcrumbList`).

---

## 7. Sitemap, robots, and GEO discovery files

- [ ] `app/sitemap.ts` — dynamic sitemap covering **all** routes: static pages, every `/portfolio/[slug]`, every `/blog/[slug]`, the new location page. Correct `lastModified`. No noindex/404 URLs in it.
- [ ] `app/robots.ts` — allow crawling, reference the sitemap, **do not block** AI crawlers you *want* citing you (GPTBot, PerplexityBot, Google-Extended, ClaudeBot, CCBot) since GEO is your value prop. `TODO(owner):` confirm you're comfortable allowing AI crawlers — recommended given the GEO positioning.
- [ ] Add an **`/llms.txt`** (and/or `/llms-full.txt`) file at the site root: a concise, plain-text description of who Locallify is, core services, location, key pages, and contact. This is an emerging GEO convention that helps LLMs summarize you accurately. Keep it factual and current.
- [ ] Confirm no stray `noindex` on important routes and no accidental `Disallow: /` in production.

**Acceptance:** sitemap lists every indexable route and is reachable at `/sitemap.xml`; robots allows the right crawlers and points to the sitemap; `/llms.txt` exists and is accurate.

---

## 8. Performance / Core Web Vitals  ⭐ (you sell this — must be flawless)

**Problem/flag:** the hero loads `hero_bg.png` at up to 3840px wide — a common LCP killer. Verify and fix.

**Do:**
- [ ] Audit the hero: serve it via `next/image` with `priority`, correct `sizes`, and modern formats (AVIF/WebP). If it's a decorative background, consider a smaller/optimized asset or CSS gradient + lighter image. Target LCP < 2.0s on mobile.
- [ ] Confirm all portfolio/blog images use `next/image` with explicit dimensions (no layout shift) and lazy-load below the fold.
- [ ] Check font loading (`next/font`, `display: swap`, subset) — no render-blocking or FOIT.
- [ ] Verify no large client-side JS where a Server Component would do; check bundle for accidental heavy client imports.
- [ ] Run Lighthouse (mobile) on `/`, `/services`, `/portfolio`, a `/portfolio/[slug]`, and a `/blog/[slug]`.

**Acceptance:** Lighthouse mobile ≥ 90 on Performance, and 100 on SEO + Best Practices, across the pages above. LCP < 2.0s, CLS < 0.1 on the homepage.

---

## 9. Domain consolidation (`locallify.in` → `locallifyagency.com`)

**Status:** `locallify.in` already 301-redirects to `locallifyagency.com` (verified). Finish the job so Google fully consolidates.

**Do (code side):**
- [ ] Confirm the redirect is a **301 (permanent)**, path-preserving, for **every** `.in` route (not just the homepage). Implement in `next.config` `redirects()` or at the host/CDN if `.in` is served from the same app.
- [ ] Confirm `www` vs non-`www` is also normalized to a single host (pick `www.locallifyagency.com` and 301 the bare domain to it, or vice versa — just be consistent with the canonical tags).
- [ ] Ensure every internal link, canonical, OG URL, and sitemap entry uses the single canonical host. (Some crawled pages mixed `locallifyagency.com` and `www.locallifyagency.com` — pick one.)

**Do (manual — leave as `TODO(owner)`):**
- [ ] Google Search Console: submit a **Change of Address** from `locallify.in` to `locallifyagency.com`.
- [ ] Update any external citations/social links still pointing at `.in`.

**Acceptance:** every `.in` URL 301s to the matching `.com` path; one canonical host is used everywhere (links, canonicals, OG, sitemap); no mixed www/non-www.

---

## 10. Conversion / lead capture (light, code-side)

- [ ] Contact form: add a success confirmation state and, ideally, an auto-response (email via your provider, or an immediate on-screen "we'll reply within X hours"). This is the on-site half of "speed-to-lead."
- [ ] Ensure the phone/WhatsApp is a real tap target on mobile (it is via `wa.me` — confirm it's above the fold on mobile too).
- [ ] `TODO(owner):` WhatsApp Business auto-reply is a WhatsApp-app config, not code — note it for the owner.

**Acceptance:** submitting the contact form gives clear feedback; WhatsApp CTA is reachable above the fold on mobile.

---

## 11. Accessibility & trust hygiene (quick wins)

- [ ] All images have meaningful `alt` text (you advertise 100/100 accessibility to clients — hold your own site to it).
- [ ] Single `<h1>` per page; logical heading order.
- [ ] Color contrast on the dark theme meets WCAG AA (verify the teal/accent on `#0A0A0E`).
- [ ] Footer legal links resolve (privacy, terms, refund, delivery).

**Acceptance:** Lighthouse Accessibility = 100 on the key pages; axe DevTools shows no critical violations.

---

## 12. Final verification checklist (run before finishing)

- [ ] `next build` passes with no errors and no new type errors.
- [ ] Rich Results Test: `/`, `/services`, `/reviews`, `/portfolio/[slug]`, `/blog/[slug]`, the new Silchar page — **zero schema errors**.
- [ ] `/sitemap.xml` and `/robots.txt` reachable and correct; `/llms.txt` present.
- [ ] Every route: unique title, unique description, self-canonical, resolving OG image.
- [ ] Lighthouse mobile: Perf ≥ 90, SEO 100, Best Practices 100, Accessibility 100 on the key pages.
- [ ] All `.in` and bare-domain URLs 301 to the single canonical host.
- [ ] `aggregateRating` (5.0 / 27) only on pages that visibly show reviews.
- [ ] Grep the repo for leftover `TODO(owner):` markers and list them in the final summary so the owner knows what's left for them.

---

## 13. Explicitly OUT OF SCOPE for code (owner does these manually)

Do **not** attempt these in code — just remind the owner in your final summary:
- Google Business Profile: add 20+ real photos, post weekly, seed Q&A, keep replying to reviews.
- Off-page citations: Justdial, Sulekha, Clutch, GoodFirms, DesignRush, and "best web agency in Silchar" listicle submissions. (This is the real driver of both organic local ranking *and* GEO corroboration — AI engines cite you when independent sites mention you.)
- Ongoing review requests to past/new clients to keep the count climbing.
- WhatsApp Business auto-reply configuration.
- Google Search Console Change of Address (Section 9).

---

## 14. Priority summary (if time is limited, do in this order)

1. Structured data / JSON-LD (Section 3) — biggest SEO + GEO lever.
2. Surface reviews on-site + AggregateRating (Section 5).
3. Per-page metadata & canonicals (Section 4).
4. Silchar local landing page + internal linking (Section 6).
5. Sitemap / robots / llms.txt (Section 7).
6. Performance / hero image (Section 8).
7. Domain consolidation code side (Section 9).
8. Positioning copy (Section 2), conversion (10), a11y (11).

**Definition of done:** all Section 12 checks pass, and the final summary lists every remaining `TODO(owner):` item.
