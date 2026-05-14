# CLAUDE.md — Locallify's Million-Dollar Website Strategy & SEO Playbook

**For:** Claude / Claude Code and any AI assistant generating content, copy, or SEO work for locallify.in.
**Read order:** PRD.md → AGENTS.md → this file.
**Last updated:** May 2026
**Version:** 1.0

---

## 0. The mission, in one paragraph

Build the marketing site for Locallify into the **most authoritative local-business resource in tier-2 and tier-3 India** within 24 months. Authority comes from three things, in this order: (1) a brand that is unmistakably ours and stays consistent across every page, (2) a content engine that owns long-tail local-business queries other companies ignore, and (3) technical execution so clean that Google's algorithm rewards us without us begging. A million-dollar website is not a fancy design — it is a system where every page compounds with every other page over time.

---

## 1. Brand voice & tone

Every word on the site, in every blog post, in every email, in every WhatsApp message, in every Reel caption, sounds like the same human. Below is that human.

### 1.1 The voice

- **Direct.** "We make your shop findable on Google." Not "We help businesses unlock digital presence solutions."
- **Confident.** "Live in 48 hours." Not "Typically delivered in 2–7 working days, depending on scope."
- **Warm.** Indian-English, occasional Hinglish, never corporate. "Bas itna kafi hai." is on-brand.
- **Specific.** Numbers always beat adjectives. "₹1,499/month" beats "affordable." "Live in 48 hours" beats "quick."
- **Modest where it counts.** "We're a small team from Silchar building India's local-business stack." Not "We are India's leading digital transformation partner."
- **Quietly funny.** Dry humor, not memes. A 404 page that says "Yeh page kahin chala gaya." rather than three rows of corporate apologetics.

### 1.2 Words we use

- shop / shop owner / local legend / local business
- Google / WhatsApp / Instagram (named, not abstracted)
- ringing phone / walking customers / paying customers
- ₹ (always; never USD, never $)
- 48 hours / one week / month / quarter
- North East / Silchar / tier-2 India
- live / found / ringing / visible

### 1.3 Words we don't use

- "synergy," "leverage," "ecosystem," "stakeholder," "thought leadership"
- "solution," "offering," "platform" (we have **products**)
- "Indians" or "Indian businesses" generically — say *what kind* of Indian businesses
- "globally" — we're hyperlocal on purpose
- "AI-powered" as a standalone claim — say what it does
- "leading," "trusted," "best-in-class" — show, don't tell

### 1.4 Sentence rules

- Short sentences before long ones. Vary the rhythm.
- Active voice, almost always.
- Specific noun > abstract noun. "Salon owner in Imphal" beats "business owner."
- Cut every word that doesn't earn its place. If the sentence works without it, delete it.

---

## 2. The million-dollar website principles

A site is worth a million dollars when every page does five things:

1. **Earns trust in under 3 seconds.** Real photos, specific numbers, named customers, named team. No stock photography. No vague claims.
2. **Names exactly one next action.** Every page has one primary CTA. The hierarchy is obvious. "Click here" is everywhere a user could possibly want to click — and nowhere they wouldn't.
3. **Loads instantly.** Sub-2-second LCP on a mid-range Android, every page, every time. Performance is part of the brand.
4. **Sounds like a person.** Voice is consistent across the home page, a blog post, a 404, a form error. Sound like the founder. Always.
5. **Compounds with every other page.** Internal links are not garnish — they're the network. Every blog post links to three related posts and one service page. Every service page links to three case studies. Every case study links to the relevant industry template.

If a page doesn't do all five, it's not done.

---

## 3. SEO strategy

Three layers, in order of importance: technical, content, local.

### 3.1 Technical SEO — the foundation

These are non-negotiable. Every page passes every check.

| Item | Standard |
|---|---|
| Page title | Unique, 50–60 chars, includes target keyword in first 30 chars |
| Meta description | Unique, 150–160 chars, includes call-to-action |
| H1 | Exactly one per page, includes target keyword |
| Heading hierarchy | Logical (H1 → H2 → H3, no skips) |
| URL slug | Short, lowercase, hyphenated, no stop words, includes keyword |
| Canonical tag | Every page has one, points to the right URL |
| OG + Twitter Card | Both present, with custom OG image (1200×630) |
| Schema.org JSON-LD | Type-appropriate (Organization, LocalBusiness, Service, BlogPosting, FAQPage, BreadcrumbList) |
| robots.txt | Configured, doesn't block CSS/JS, includes sitemap reference |
| sitemap.xml | Auto-generated, submitted to Google + Bing |
| HTTPS | Everywhere; HSTS enabled |
| Mobile-friendliness | Passes Google's mobile-friendly test |
| Core Web Vitals | LCP <2.5s, FID <100ms, CLS <0.1 — all green |
| Image alt text | Every meaningful image has it; decorative images have `alt=""` |
| Internal linking | Every page links to 3+ related pages |
| Anchor text | Descriptive, never "click here" or "read more" |
| Hreflang | Add when we launch regional language versions |
| 404 pages | Branded, useful, link back to high-value pages |
| Redirects | 301 for permanent moves, never 302 except temporary |
| Crawl budget | Don't waste it on filter pages, calendar permutations, etc. — use `noindex` |

### 3.2 Content SEO — the engine

Authority is built by publishing the most useful answer to a question that real people ask. Three content types, in production-priority order:

#### Type A — The how-to (60% of content output)

Long-form, evergreen, answers a specific question with a specific solution. Every salon, gym, tuition center, and restaurant owner in India is searching some version of these:

- "How to get my shop on Google Maps"
- "How to claim my Google Business Profile"
- "Best Instagram posts for [industry]"
- "What does a business website cost in India"
- "How to reply to negative Google reviews"
- "How to set up WhatsApp Business catalog"

Target keyword volume: 100–1,000 monthly searches in India.
Target intent: informational, transitioning to commercial.
Target length: 1,500–2,500 words.
Format: numbered steps, screenshots, embedded video (Loom), pull quotes, FAQ at bottom.

#### Type B — The city-industry combo (25% of content output)

The long-tail goldmine. Each post combines one city with one industry and answers a hyper-specific question. Examples:

- "How a salon in Guwahati can show up on Google in 7 days"
- "Best digital marketing setup for a tuition center in Imphal"
- "Why dental clinics in Silchar are missing 60% of their customers"
- "Restaurant marketing in Shillong: what actually works"

These are easy to rank for (low competition, high relevance), they're what your actual customers search for, and they double as conversion content.

Target keyword volume: 10–100 monthly searches in India.
Target length: 800–1,500 words.
Format: location-specific examples, one named customer (with permission), specific local context.

#### Type C — The opinion (15% of content output)

Founder POV pieces. These don't rank as well but they get shared, build brand, and create the founder voice. Examples:

- "Why we built Locallify in Silchar, not Bangalore"
- "Tier-2 India doesn't need another SaaS dashboard"
- "What 100 local businesses taught us in 6 months"
- "Stop pricing your services like a metro consultancy"

Target: shareability + founder voice + recruiting.
Target length: 600–1,200 words.
Format: first-person, anecdote-driven, opinionated, takes a side.

### 3.3 Local SEO — the unfair advantage

This is the biggest opportunity for Locallify and where competitors are weakest. Three plays:

#### Play 1 — Build a city page for every priority city

Pattern: `/cities/[city]`. One page per city we serve. Each page contains:

- H1: "Get your [city] business on Google."
- Local landmark imagery (real photo, taken yourself).
- 3–5 named customer case studies in that city.
- City-specific pricing (same as global, but presented in city context).
- Embedded Google Map showing customer locations.
- LocalBusiness + Service + BreadcrumbList schema, scoped to the city.
- A FAQ section with city-specific questions.

This is the page that ranks for "[service] in [city]" queries.

#### Play 2 — Get Locallify's own GBP perfect

We sell GBP management. Our own GBP must be flawless:

- Verified, complete, with all categories.
- 30+ photos (office, team, customer storefronts).
- Weekly posts.
- All reviews replied to within 24 hours.
- Q&A populated proactively.
- Service area set to all priority cities.

#### Play 3 — Citation building

Get Locallify listed on every Indian directory that matters:

- Justdial, Sulekha, IndiaMart (high-priority).
- LinkedIn company page, Crunchbase, AngelList.
- Indie Hackers profile.
- Producthunt launch (when ready).
- Reddit r/India, r/startups (organic, never spammy).
- Indian-specific: NASSCOM, Startup India portal.

Consistency matters: NAP (name, address, phone) identical on every listing.

---

## 4. Content production guidelines

### 4.1 Cadence

- **Year 1:** 2 posts per week. 1 how-to + 1 city-industry combo or opinion piece.
- **Year 2:** 3–4 posts per week as the content engine matures.
- **Always:** monthly "state of local business in [city]" round-up post.

### 4.2 Process (every post)

1. Pick the target keyword from the keyword tracker (Sheet or Notion).
2. Search the keyword on Google. Read the top 10 results.
3. Write the post that is **better, clearer, and more useful** than every one of them.
4. Include: real customer example, screenshot, specific number, one strong opinion.
5. Add internal links to 3+ related posts + 1 service page + 1 city page (where applicable).
6. Write the FAQ section based on Google's "People also ask" + Quora questions.
7. Optimize meta title and description for click-through.
8. Generate the OG image (using the template).
9. Schedule, publish, share on WhatsApp Status + Instagram + Twitter.

### 4.3 Post-publish

- Submit URL to Google Search Console manually for first 50 posts (faster indexing).
- Add internal links FROM existing posts TO the new one (not just the other way).
- Update the cluster index if applicable.

### 4.4 What ChatGPT-style AI content gets wrong (avoid these)

- ❌ Generic openings ("In today's digital landscape...").
- ❌ Numbered lists of obvious things ("Why GBP matters: 1. Visibility. 2. Trust. 3. SEO.").
- ❌ No specific examples — just abstractions.
- ❌ Hedging language ("can help," "might want to consider").
- ❌ Fake authority ("studies show," without citing the study).
- ❌ AI-detector buzzwords ("delve," "tapestry," "intricate," "robust").
- ❌ "In conclusion" / "In summary" sign-offs.

If a draft sounds like a 2023 GPT-3.5 article, rewrite it.

---

## 5. Page-by-page SEO checklist

### 5.1 Home page (`/`)

- Title: `Locallify · Get your shop on Google · Made in the North East` (60 chars)
- Description: `India's local-business stack: a fast page, managed Google profile, and WhatsApp leads. Live in 48 hours. From ₹1,499/month.` (149 chars)
- H1: "We make your shop *findable*."
- Schema: `Organization` + `LocalBusiness` + `Service` (one per primary product).
- Target keyword: "local business website India" or "Google business profile management India."
- Internal links: to pricing, work, blog, about, every service page.
- Image alts: descriptive ("Customer Locallify page for Silchar salon Bobby's").
- OG image: hero crop with overlaid headline.

### 5.2 Pricing page (`/pricing`)

- Title: `Pricing · Locallify · Starts at ₹1,499/month`
- Description: Includes all three tiers in one sentence with one-line value prop.
- H1: "Pricing for local legends."
- Schema: `Product` + `Offer` (one per tier).
- FAQ section with `FAQPage` schema.
- Target keyword: "[service] pricing India."
- Internal links: to every service page, every case study, FAQ.

### 5.3 Case study (`/work/[slug]`)

- Title: `[Business name] · [Location] · How Locallify [outcome]`
- Description: One-line outcome with numbers.
- H1: The business name + the outcome.
- Schema: `Article` + `BreadcrumbList`. Also `LocalBusiness` for the featured customer.
- Target keyword: "[industry] in [city]" or "[outcome] for [industry]."
- Internal links: 3 related case studies, the matching service, the matching template, the matching city page.

### 5.4 Service page (`/services/[service]`)

- Title: `[Service name] · Locallify · [Outcome in 4 words]`
- Description: Specific number + outcome + price anchor.
- H1: The service name as a sentence.
- Schema: `Service` + `BreadcrumbList`.
- Target keyword: "[service] India" + "[service] tier 2 India."
- Internal links: matching case studies, pricing, related services.

### 5.5 Blog post (`/blog/[slug]`)

- Title: `[Question or how-to] · Locallify`
- Description: Promise the answer in one sentence.
- H1: Same as title, minus the brand suffix.
- Schema: `BlogPosting` + `BreadcrumbList` + (if FAQ section) `FAQPage`.
- Target keyword: the post's primary keyword.
- Internal links: 3 related posts + 1 service page (minimum).

### 5.6 City page (`/cities/[city]`)

- Title: `[Service] in [City] · Locallify`
- Description: Includes city name + service + price anchor.
- H1: "Get your [city] business on Google."
- Schema: `LocalBusiness` (Locallify itself, scoped to the city) + `BreadcrumbList`.
- Target keyword: "[service] in [city]" — the highest-converting keyword shape.
- Internal links: case studies from this city, the home page, pricing.

### 5.7 Template page (`/templates/[industry]`)

- Title: `[Industry] website template · Locallify`
- Description: Industry-specific value prop.
- H1: "Websites for [industry]."
- Schema: `Product` (the template) + `Offer` (the price).
- Target keyword: "website for [industry] India."
- Internal links: case studies from this industry, the service page, the city pages.

---

## 6. Performance & Core Web Vitals

Performance is part of the brand. Slow sites do not look like million-dollar sites.

### 6.1 Hard targets

| Metric | Target | Acceptable | Failure |
|---|---|---|---|
| LCP | <1.8s | <2.5s | ≥2.5s |
| FID / INP | <100ms / <200ms | <200ms / <500ms | ≥200ms / ≥500ms |
| CLS | <0.05 | <0.1 | ≥0.1 |
| TTFB | <500ms | <800ms | ≥800ms |
| TTI | <3s | <4s | ≥4s |
| Lighthouse Performance | 95+ | 90+ | <90 |

### 6.2 How we hit them

- Static-generate every public page (SSG with ISR for content that changes).
- Edge runtime for dynamic routes (Vercel Edge).
- AVIF images with WebP fallback. Hero image preloaded.
- Variable fonts only. Two font files total: Instrument Serif + Geist. Subset to Latin.
- Critical CSS inlined.
- JS deferred. Component-level code splitting.
- No third-party scripts in critical path. Analytics deferred.
- DNS-prefetch + preconnect for any external origin used in hero.

### 6.3 Run Lighthouse on every PR

CI enforces. Below 90 = blocked merge.

---

## 7. Schema / structured data

### 7.1 Required schema types per page type

| Page | Schema |
|---|---|
| Home | `Organization` + `LocalBusiness` + `WebSite` (with `SearchAction`) |
| Pricing | `Product` (one per tier) + `Offer` + `FAQPage` |
| Service detail | `Service` + `BreadcrumbList` + `Organization` |
| Case study | `Article` + `BreadcrumbList` + `LocalBusiness` (the featured customer) |
| Blog post | `BlogPosting` + `BreadcrumbList` + (`FAQPage` if FAQ exists) |
| City page | `LocalBusiness` (city-scoped) + `BreadcrumbList` |
| Template page | `Product` + `BreadcrumbList` |
| Help / FAQ article | `FAQPage` + `BreadcrumbList` |

### 7.2 Validation

- Run every page through Google's Rich Results Test before launch.
- Run schema.org validator monthly.
- Monitor Search Console for any structured-data errors.

---

## 8. Link building (white-hat, slow burn)

In year 1 we don't outreach for links. Links come from publishing useful content. In year 2 we add three plays:

1. **Founder bylines.** Founder writes guest posts for Indian small-business publications (YourStory, Inc42, Entrepreneur India). One per quarter.
2. **Indie Hackers / Twitter case studies.** Public progress sharing earns links from the IH community and Indian-startup Twitter.
3. **Customer features.** When a customer hits a milestone, write it up. They often share on their social, sometimes their press.

We never:

- Buy links.
- Submit to link directories.
- Exchange links.
- Use private blog networks.

Authority compounds. Shortcuts unwind.

---

## 9. Measurement & reporting

### 9.1 Weekly review (founder, 30 minutes)

- New visitors and source breakdown.
- WhatsApp CTA clicks.
- New customers from the site.
- Top 5 ranking pages and top 5 declining pages.
- Posts published this week and their early indexing status.

### 9.2 Monthly review (founder + team, 90 minutes)

- All KPIs vs. targets from PRD §3.2.
- Top 20 ranking pages.
- Top 20 search queries we rank for.
- Top 5 underperforming pages — decision: improve, redirect, or kill.
- Content backlog review and reprioritization.
- One competitor SEO audit (rotating).

### 9.3 Quarterly review

- Full site audit (Screaming Frog or similar).
- Core Web Vitals trend.
- Backlink growth.
- Brand search volume ("Locallify") month-over-month.
- Update this CLAUDE.md if anything has changed in our approach.

---

## 10. What "done" looks like

A blog post is done when:

- [ ] Title and meta description optimized for click-through.
- [ ] One H1, clean hierarchy below.
- [ ] 3+ internal links to related content.
- [ ] At least one image with descriptive alt.
- [ ] Custom OG image.
- [ ] Schema markup validated.
- [ ] Real example or named customer (with permission).
- [ ] FAQ section if 3+ "people also ask" questions exist.
- [ ] Reading time + word count visible.
- [ ] Published, submitted to GSC, shared on Status/IG.

A page is done when:

- [ ] All items in §5 for that page type are completed.
- [ ] Lighthouse 95+.
- [ ] Mobile-tested on real device.
- [ ] Schema validated.
- [ ] Internal links flow both ways (from related pages too).
- [ ] Tracked in analytics with a clear conversion event.

---

## 11. The non-negotiables

If you remember nothing else from this document:

1. **Never publish a page without a real-world example.** Every page must reference a real customer, a real number, a real outcome. No exceptions.
2. **Never publish without internal links.** A page without internal links is wasted budget. Three minimum.
3. **Never let a post hit publish without a strong, specific title.** "Tips for local businesses" is not a title. "How a Silchar salon went from 0 to 14 calls a week" is.
4. **Never sacrifice Core Web Vitals for design.** If an animation drops Lighthouse below 95, cut the animation.
5. **Never stop publishing.** Two posts a week, every week, for two years. Authority is a function of consistency, not bursts.

The million-dollar website is not built in a sprint. It's built by doing this list, for two years, without stopping.

---

*If anything in this file goes stale, update it in the same PR that proves it stale. This is a living document. It outlives any one of us working on the site.*
