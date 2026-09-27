# Locallify — International Niche Landing Pages (Build Spec)

Goal: win international (primarily US) clients in specific high-value niches. Each niche gets one dedicated, genuinely distinct landing page, plus an `/industries` hub.

Stack: Next.js App Router + Sanity (preferred) or a typed config file. Style: reuse the existing Locallify design system and the homepage's calm, credible voice.

---

## Instructions for Claude Code

- **Never fabricate proof.** No invented clients, US case studies, testimonials, stats, logos, review counts, or "trusted by X businesses" claims.
  - Proof sections may only use real Locallify portfolio items (listed below) or items the owner adds later.
  - Where proof is missing, render the "Our standards" block instead (see §3.7).
  - Leave `TODO(owner):` markers for anything unverified.
- **Calculator defaults are examples, not industry statistics.** Label them "Example numbers — enter your own."
- **No near-duplicate pages.** Each niche page must have its own pain points, calculator model, framework examples, FAQ and disqualifiers, not a find-and-replace of one template's copy. The template is shared; the content is not.
- All prices are in **USD** and are **🔒 owner-confirm** placeholders. Make them easy to edit in one place.
- Run the build after each page and fix any errors. At the end, summarize the files changed and the open `TODO(owner):` items.

---

## 1. Information architecture

```
/industries                         → hub: grid of niche cards + short positioning
/industries/dental-website-design   → Dentists & dental clinics
/industries/med-spa-website-design  → Med spas, aesthetic & cosmetology clinics
/industries/roofing-website-design  → Roofing contractors
/industries/cleaning-website-design → Residential & commercial cleaning companies
```

- [ ] Add "Industries" to the main nav (between Work and Services) and to the footer "Studio" column.
- [ ] Add all 5 URLs to the dynamic sitemap.
- [ ] Each niche page links to the matching `/services/*` pages, and each relevant service page links back to the niche pages ("Built for: Dentists · Med spas · Roofers · Cleaners").
- [ ] Portfolio items get an optional `industry` reference, so niche pages can pull real matching work automatically.

## 2. Data model

A Sanity document type `industryPage`, or `content/industries/*.ts` if Sanity is too slow to set up:

```
slug, niche, audience (e.g. "dental practice owners"), region ("US" default)
seo: { title, description, ogImage }
hero: { eyebrow, headline, subhead, bullets[4], primaryCta, mockupImage }
problems: { heading, intro, items[{title, body}] }
calculator: { heading, inputs[{key,label,default,prefix,suffix}], formula (id), resultLabel, disclaimer }
framework: { name, steps[{letter/word, title, body, nicheExample}] }
features: [{title, body}]
beforeAfter: { before[], after[] }
packages: [{name, idealFor, priceFrom, includes[], support}]  // 3 tiers
fit: { forYou[], notForYou[] }
proof: { portfolioRefs[], standardsFallback: bool }
offer: { name, description, deliverables[] }
faq: [{q, a}]
```

## 3. Page template (section order)

Based on the landing-page structure: problem → quantify → solution → framework → before/after → qualify → form → FAQ.

1. **Minimal header.** Logo plus one sticky CTA ("Get my free audit"). The full nav is hidden on these pages; use a small "← locallifyagency.com" text link instead.
2. **Hero.** Eyebrow with niche and region, headline naming the audience and pain, 2-line subhead, 4 bullets, primary CTA, and on the right a device mockup of a *real* Locallify build (not a fake client).
3. **Problem.** "You're already paying for leads. Are they booking?" Four niche-specific pain cards.
4. **Revenue leak calculator.**
   - Interactive, client-side only.
   - Inputs are niche-specific (§5); the result is the estimated monthly and yearly revenue lost.
   - CTA "Calculate my lost revenue", then scroll to the form with the result prefilled into a hidden field.
   - Show the disclaimer: "Estimate only, based on the numbers you enter."
5. **Solution + framework.** The **Found → Trusted → Booked → Followed-up** system (§4) with a workflow diagram, using niche-specific examples in each step.
6. **What you get.** Feature grid (booking, SEO + GEO, automation, and so on) in niche language.
7. **Proof.** Real matching portfolio items if any exist. Otherwise an **"Our standards"** block:
   - Lighthouse 95+ target
   - Schema on every page
   - You own the code
   - Fixed milestone pricing
   - 1–2 week landing builds
   - Link to all case studies with the honest line "Our shipped work so far is mostly clinics and hospitality — here's how we build."
8. **Before / After.** Two columns.
9. **Packages.** Three tiers (§5), "from $X", plus "Care/Growth/Scale retainers available" linking to /pricing.
10. **Who this is for / not for.**
11. **Offer + form.** The free audit (§4.1). Form fields:
    - Name, email, business name, website URL (optional), country
    - Niche (hidden, auto-set)
    - "Where are you losing the most jobs?" (multi-select, niche-specific options)
    - Monthly marketing spend (ranges)
    - Calculator result (hidden)
    - Submit to the existing contact pipeline, tagged `source=industry:<slug>` and `pain=<values>`.
12. **FAQ.** Accordion with `FAQPage` JSON-LD.
13. **Footer.** Standard footer, plus an "Also serving:" row linking the other niches.

**Mobile:** sticky bottom CTA bar and a WhatsApp button. WhatsApp is less common for US prospects, so make the email/form the primary CTA and WhatsApp secondary.

## 4. Shared positioning

**Framework: Found → Trusted → Booked → Followed-up**
- **Found:** local SEO, Google Business Profile alignment, schema, GEO (showing up in ChatGPT and AI Overviews answers).
- **Trusted:** reviews surfaced, before/after galleries, credentials, fast mobile pages.
- **Booked:** online booking or instant quote, click-to-call, missed-call text-back.
- **Followed-up:** automated reminders, estimate follow-ups, review requests (n8n / AI voice).

### 4.1 Lead magnet (all niches)
**Free Website & Lead Leak Audit.** A personalised video walkthrough (about 10 minutes) of the prospect's current site and Google presence, covering:
- Speed and mobile issues
- Missing schema
- How they appear on Google and in AI answers
- Booking and quote friction
- Top 5 fixes

Delivered within 48 hours. 🔒 Owner to confirm the turnaround and format.

## 5. Niche content drafts

Draft copy is below. Polish it, but keep the facts. US English. Prices are 🔒 owner-confirm.

---

### 5.1 Dental — `/industries/dental-website-design`

- **SEO title:** Dental Website Design & Patient Booking Systems | Locallify
- **Meta:** Custom dental websites built to fill your schedule: online booking, missed-call text-back, local SEO, and AI-search visibility. Free lead-leak audit.
- **Eyebrow:** For dental practices · US
- **Headline:** Turn "dentist near me" searches into booked appointments.
- **Subhead:** A fast, custom practice website with online booking, missed-call text-back, and local SEO, built so new patients find you and actually book.
- **Bullets:**
  - Online booking for new-patient and emergency slots
  - Automatic text-back when the front desk misses a call
  - Local SEO + schema for every service and location
  - Show up when patients ask ChatGPT or Google AI for a dentist
- **Problems:**
  1. New-patient calls hit voicemail during busy hours, and those patients book with the next practice.
  2. The site looks dated on mobile, and patients judge your care by it.
  3. Service pages (implants, Invisalign, emergency) don't rank, so high-value treatments get no enquiries.
  4. Reminders and recall are manual, so no-shows and lapsed patients add up.
- **Calculator inputs** (example defaults):
  - Missed/unanswered new-patient calls per month: 30
  - % that would have booked: 40
  - Average first-year value of a new patient ($): 800
  - Formula: calls × % × value = monthly lost; ×12 = yearly lost.
- **Framework examples:**
  - Found = implant/Invisalign service pages with schema
  - Trusted = doctor bios, reviews, smile gallery
  - Booked = new-patient booking + emergency slot request
  - Followed-up = reminders, recall, review requests
- **Before/After:**
  - Before: voicemail, generic template, no treatment pages, manual reminders.
  - After: 24/7 booking, text-back, ranking treatment pages, automated recall.
- **Packages** (from, USD 🔒):
  - **Practice Launch** $1,800: 6–8 pages, booking link, click-to-call, local SEO foundation.
  - **Practice Growth** $3,500: plus treatment pages, missed-call text-back, review automation.
  - **Multi-location** $6,000+: plus location pages, custom booking flow, CRM/PMS integration where APIs allow.
- **For you:**
  - Established practices already spending on ads or directories.
  - Practices that want more implant, ortho and cosmetic cases.
  - Multi-chair or multi-location groups.
- **Not for you:**
  - You want the cheapest template site.
  - You won't answer booking requests within a business day.
  - You expect a website alone to fix the front-desk process.
- **Proof:** real refs `oral-dental-care-clinic-silchar`, `the-ent-clinic-silchar`, `metro-city-diagnostics-silchar`. Label them "Healthcare builds."
- **FAQ:**
  - Can you connect to our practice management software? Where the software offers an API or booking integration, yes; otherwise we use a secure booking request flow. We confirm on the discovery call.
  - Are the forms HIPAA-compliant? Our forms collect contact and appointment details only, not medical history. If you need PHI collected online, we'll scope a compliant vendor. 🔒 Owner: confirm this wording with counsel before publishing.
  - How long does a build take? Launch sites take 2–3 weeks; Growth builds take 4–6 weeks.
  - Do we own the site? Yes, 100% code and content ownership after the final milestone.
  - You're based in India. How does that work? You get a fixed milestone price, weekly updates, overlap calls in your mornings, and payment in USD.

---

### 5.2 Med spa & cosmetology — `/industries/med-spa-website-design`

- **SEO title:** Med Spa & Aesthetic Clinic Website Design | Locallify
- **Meta:** Luxury med spa and cosmetology websites with online booking, treatment pages that rank, before/after galleries, and automated rebooking. Free audit.
- **Eyebrow:** For med spas, aesthetic & cosmetology clinics
- **Headline:** A website as premium as your treatments, that books clients while you work.
- **Subhead:** Treatment pages that rank, before/after galleries that convert, and booking plus rebooking that runs itself.
- **Bullets:**
  - Online booking and deposits for every treatment
  - Ranking pages for Botox, fillers, laser, facials and more
  - Before/after galleries with consent-friendly management
  - Automated rebooking reminders at the right interval
- **Problems:**
  1. Instagram brings interest, but the booking path is DMs and phone tag.
  2. Treatment pages are thin, so Google and AI answers send clients to competitors.
  3. Clients don't rebook on time because nothing reminds them.
  4. A template site undercuts premium pricing.
- **Calculator inputs:**
  - Booking enquiries lost per month (unanswered DMs, calls, forms): 25
  - % that would have booked: 50
  - Average treatment value ($): 350
  - Visits per client per year: 3
  - Formula: enquiries × % × value × visits = yearly value lost; ÷12 for monthly.
- **Framework examples:**
  - Found = treatment and location pages
  - Trusted = injector credentials, galleries, reviews
  - Booked = booking with deposits
  - Followed-up = rebooking intervals, review requests
- **Before/After:**
  - Before: DMs, no deposits, thin pages, no rebooking.
  - After: instant booking, deposits, ranking treatments, automated rebooking.
- **Packages** (🔒): **Studio** $2,000 · **Signature** $4,000 · **Multi-location** $7,000+
- **For you:** established clinics with active social media and ad spend; premium positioning.
- **Not for you:** you want a quick template; you can't provide real before/after photos with client consent.
- **Proof:** no direct match. Use `junaid-home-interiors` as a premium-design reference, plus healthcare builds and the standards block. `TODO(owner)`: a demo build is recommended, clearly labeled "Concept."
- **FAQ:**
  - Can clients pay deposits online? Yes, via Stripe or your booking platform.
  - Can we use our existing booking software? Yes, we embed or integrate it.
  - How do you handle before/after photos? We build the gallery; you supply consented images, and we never use stock photos as results.
  - Treatment claims and regulations? We write compliant, non-promissory copy; final medical claims need your approval.
  - Ownership and timeline: same as the other niches.

---

### 5.3 Roofing — `/industries/roofing-website-design`

- **SEO title:** Roofing Contractor Website Design & Lead Generation | Locallify
- **Meta:** Roofing websites built for exclusive leads, not shared ones: instant quote forms, service-area pages, missed-call text-back, and local SEO. Free audit.
- **Eyebrow:** For roofing contractors · US
- **Headline:** Stop buying shared roofing leads. Own the ones that search for you.
- **Subhead:** A fast roofing website with instant-estimate forms, service-area pages, and automatic follow-up, so replacement jobs come to you directly.
- **Bullets:**
  - Instant estimate request with photo upload
  - Service-area pages for every city you cover
  - Missed-call text-back while crews are on roofs
  - Storm and insurance claim landing pages
- **Problems:**
  1. Shared lead platforms sell the same homeowner to several roofers.
  2. Calls are missed while you're on a job, and homeowners call the next number.
  3. Estimates go out and nobody follows up, so jobs go cold.
  4. The site doesn't rank outside your home city.
- **Calculator inputs:**
  - Missed calls/forms per month: 20
  - Close rate on quoted jobs (%): 25
  - Average job value ($): 9,000
  - Formula: missed × close % × value.
- **Framework examples:**
  - Found = city service-area pages + GBP
  - Trusted = project galleries, warranties, licences, reviews
  - Booked = instant estimate form + text-back
  - Followed-up = automated estimate follow-up sequence
- **Before/After:**
  - Before: shared leads, voicemail, estimates go cold.
  - After: exclusive inbound leads, instant response, automated follow-up.
- **Packages** (🔒): **Local Roofer** $1,800 · **Growth** $3,500 · **Multi-location** $6,000+
- **For you:** established roofers doing replacements, with some marketing spend.
- **Not for you:** handyman or occasional repairs only; you won't call leads back the same day.
- **Proof:** no direct match. Use the standards block. `TODO(owner)`: a demo build labeled "Concept."
- **FAQ:**
  - Will I get exclusive leads? Leads from your own website and Google profile are yours alone. We don't resell leads.
  - Do you run ads? We build the site and SEO; ads can be added through the Growth retainer. 🔒 Owner: confirm whether you manage Google Ads.
  - Can it integrate with my CRM (JobNimbus, AccuLynx, etc.)? Where APIs allow, via n8n.
  - Storm season pages? Yes, fast-launch landing pages for storm and insurance jobs.
  - Offshore team concerns? Fixed milestone price, you own the code, weekly progress, US-hours calls.

---

### 5.4 Cleaning — `/industries/cleaning-website-design`

- **SEO title:** Cleaning Company Website Design with Instant Quotes | Locallify
- **Meta:** Websites for residential and commercial cleaning companies: instant online quotes, recurring-client booking, local SEO, and automated follow-up. Free audit.
- **Eyebrow:** For cleaning companies
- **Headline:** Instant quotes, booked cleans, recurring clients, on autopilot.
- **Subhead:** A cleaning company website that quotes and books in under a minute, and turns one-off cleans into recurring clients.
- **Bullets:**
  - Instant price quote by bedrooms or square footage
  - Online booking and recurring schedule sign-up
  - Local pages for every neighborhood you serve
  - Automated follow-up that converts one-off cleans to recurring
- **Problems:**
  1. Quotes need a phone call, and people who want a price now leave.
  2. One-off cleans never turn into recurring contracts.
  3. You compete on price because the site doesn't show trust (insured, vetted staff, guarantees).
  4. Commercial enquiries have no dedicated path.
- **Calculator inputs:**
  - Quote requests lost per month: 30
  - % that would book: 35
  - Average clean value ($): 180
  - % that become recurring (monthly): 30
  - Formula: first-clean value lost + recurring value lost over 12 months. Show the breakdown.
- **Framework examples:**
  - Found = neighborhood pages
  - Trusted = insured and vetted badges (only if true), reviews, guarantee
  - Booked = instant quote + booking
  - Followed-up = recurring offer after the first clean, review requests
- **Packages** (🔒): **Starter** $1,500 · **Growth** $3,000 · **Commercial** $5,000+
- **For you:** companies with a team (not solo), doing recurring residential or commercial work.
- **Not for you:** you're price-shopping for the cheapest site; you can't handle more bookings.
- **Proof:** standards block. `TODO(owner)`: a demo build labeled "Concept."
- **FAQ:**
  - Can the quote calculator use my pricing? Yes, it's configured to your rates and add-ons.
  - Can it integrate with Jobber / ZenMaid / Launch27? Where they allow embedding or APIs.
  - Recurring billing? Via your booking platform or Stripe subscriptions.
  - Ownership and timeline: as above.

---

## 6. `/industries` hub

- H1: "Websites and booking systems built for your industry."
- Intro: Locallify builds for service businesses where one missed call is a lost job. Each industry page shows the problems we solve, the numbers, and how we build.
- A card grid of the 4 niches, plus a "Don't see your industry?" card linking to /contact.
- Title: `Industry Website Design — Dental, Med Spa, Roofing, Cleaning | Locallify`

## 7. SEO + GEO + AEO requirements

Definitions used in this spec:
- **SEO:** ranking in classic Google/Bing results.
- **AEO (Answer Engine Optimization):** being the direct answer in featured snippets, "People also ask," and voice assistants.
- **GEO (Generative Engine Optimization):** being cited or recommended by ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews.

All three reward the same foundation: crawlable pages, clear entities, direct answers, and verifiable facts. Build that foundation once, properly.

> Honesty rule: no tactic here guarantees rankings or AI citations. Don't write copy that promises "#1 on Google" or "guaranteed ChatGPT placement."

### 7.1 Technical SEO (every niche page + hub)

- [ ] **Server-render all content.** Every heading, paragraph, FAQ answer, package and the calculator's explanatory text must be in the initial HTML. Only the calculator *interaction* is client-side. AI crawlers mostly don't run JavaScript, so check with `curl` that the full text is present.
- [ ] Unique `<title>` (≤60 chars) and meta description (≤155 chars) with the primary keyword near the front.
- [ ] One H1 per page, then a logical H2/H3 hierarchy with no skipped levels.
- [ ] Self-referencing canonical on `https://www.`.
- [ ] Add each page to the sitemap with real `lastmod`.
- [ ] Unique OG and Twitter image per page via `next/og`. Use `og:type` `website`.
- [ ] Core Web Vitals target on mobile: LCP < 2.5s, INP < 200ms, CLS < 0.1.
  - Mockup images: AVIF/WebP, correct `sizes`, `priority` only on the hero image.
  - Lazy-load the calculator and diagram code.
  - No layout shift from fonts (`next/font`).
- [ ] Descriptive alt text on every image. Mockups get alt text like "Locallify dental practice website shown on mobile and desktop," not "mockup."
- [ ] Clean slugs (already defined), with breadcrumbs visible on the page *and* in schema.
- [ ] robots.txt already allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended. Keep it that way, and also allow `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `Perplexity-User` and `Bingbot`. 🔒 Owner: confirm that allowing AI training crawlers is intended.
- [ ] Submit to **Google Search Console and Bing Webmaster Tools**. Several AI answer engines draw on the Bing index. Implement **IndexNow** so new or updated pages are pinged to Bing on publish.
- [ ] Update `/llms.txt` (create it if missing): a plain Markdown summary of Locallify with links to the hub, the niche pages, services, pricing and case studies. It's not an official standard and costs almost nothing, so treat it as optional and don't rely on it.

### 7.2 On-page SEO (keyword mapping)

Each page targets **one primary keyword cluster**. Don't target the same cluster on two pages. 🔒 Owner: validate volumes in Google Keyword Planner or Ahrefs/Semrush before finalizing.

| Page | Primary | Secondary (use naturally in H2s/body) |
|---|---|---|
| Dental | dental website design | dentist website design, dental practice website, dental clinic website, online booking for dentists |
| Med spa | med spa website design | aesthetic clinic website, medical spa web design, cosmetology clinic website, med spa booking system |
| Roofing | roofing website design | roofing contractor website, roofer website design, roofing lead generation website |
| Cleaning | cleaning company website design | cleaning business website, maid service website, cleaning website with instant quote |
| Hub | website design for service businesses | industry website design, niche web design agency |

- [ ] Primary keyword in the title, H1 (or a close variant), first 100 words, one H2, the URL, and the OG title. Write naturally; no keyword stuffing.
- [ ] Minimum **1,200–1,800 words** of genuinely niche-specific content per page (visible text including FAQ). Thin pages won't rank or get cited.
- [ ] Internal links with descriptive anchor text (not "click here"):
  - hub → each niche
  - each niche → hub, 2 relevant `/services/*` pages, relevant case studies, the related blog post (§7.6)
  - `/services/*` and homepage → the relevant niches

### 7.3 AEO — answer-first content blocks

Answer engines lift short, self-contained answers. Structure content so each block can be quoted on its own.

- [ ] **Question-shaped H2s** where natural, e.g. "How much does a dental website cost?", "What should a roofing website include?", "How do med spas get more online bookings?"
- [ ] **Answer in the first 40–60 words** directly under each question H2, as one complete sentence-level answer, then expand below.
- [ ] Add an **"At a glance" summary box** near the top of each page (3–5 bullets: who it's for, what's included, timeline, starting price, what you own). Keep it factual and consistent with the packages.
- [ ] Add a **comparison table** per page, e.g. "Template site vs. custom Locallify build" (speed, booking, SEO, ownership, cost). Tables are frequently extracted by snippets and AI answers.
- [ ] Add a **"What does a [niche] website cost?"** section with the real price ranges from the packages. Cost questions are high-volume answer-engine queries.
- [ ] Add a **"What should a [niche] website include?"** checklist section (8–12 items). Checklists win list snippets.
- [ ] FAQ: 6–10 questions per page, each answered in **2–3 sentences, first sentence answers directly**. Mark it up as `FAQPage`. Google shows FAQ rich results only for a narrow set of sites now, but the markup and format still help answer engines parse the content.
- [ ] Use plain, definitive language. Avoid vague hedging in answers, and avoid hype.

### 7.4 GEO — entity clarity & citation-worthiness

AI systems recommend businesses they can clearly identify and verify across sources.

- [ ] **Consistent entity facts everywhere** (site, JSON-LD, Google Business Profile, LinkedIn, Facebook, Instagram, Clutch/GoodFirms if listed): identical legal/trade name, description, location (Silchar, Assam, India), service list, email and phone. 🔒 Owner: provide the canonical versions.
- [ ] **Sitewide `Organization` JSON-LD** in the root layout, referenced by `@id` from every page:
  - `@id` `https://www.locallifyagency.com/#organization`, `name`, `legalName` (🔒), `url`, `logo`, `description`
  - `address` (🔒 once the owner provides it), `areaServed` ["India", "Worldwide"]
  - `founder` → `Person` (🔒 name, `sameAs` LinkedIn)
  - `sameAs`: LinkedIn, Facebook, Instagram, GBP URL (🔒), plus any directory profiles
  - `knowsAbout`: ["web development", "Next.js", "local SEO", "generative engine optimization", "booking systems", "workflow automation", "AI voice agents"]
- [ ] **A consistent one-sentence entity definition** reused verbatim on the homepage, About, the hub and in JSON-LD `description`, e.g. "Locallify is a software studio in Silchar, India that builds websites, booking systems and automation for service businesses, engineered for SEO and AI-search visibility." 🔒 Owner approves the final wording.
- [ ] **Citation-worthy specifics:**
  - Concrete numbers only from real work (Lighthouse scores, build timelines, redirect counts from the actual case studies).
  - Name the tools and standards used (Next.js, Schema.org, Core Web Vitals).
  - AI systems prefer specific, verifiable statements over marketing adjectives.
- [ ] **Author and expertise signals:**
  - A visible "Reviewed by [founder name], [role]" line on each niche page with a link to an author bio (🔒).
  - Visible "Last updated: [date]" driven by the CMS `_updatedAt`, plus `dateModified` in schema.
- [ ] **Original data hook (recommended):** a small section per niche with Locallify's own observations, e.g. "What we see in dental site audits: common issues." Only publish once there are real audits to draw from. `TODO(owner)`.
- [ ] **Off-site signals (owner tasks, not code):**
  - Complete the Google Business Profile.
  - Get listed on Clutch, GoodFirms and DesignRush.
  - Get real client reviews on GBP and Clutch.
  - Guest posts or podcast mentions in niche communities.
  - LinkedIn posts linking to the niche pages.
  - These third-party mentions are a major input to which companies AI engines recommend.

### 7.5 Structured data per page (JSON-LD, one `@graph`)

- [ ] `WebPage` with `@id`, `name`, `description`, `url`, `dateModified`, `isPartOf` pointing to the WebSite `@id`, `about` pointing to the Service `@id`, `breadcrumb` pointing to the BreadcrumbList `@id`, and `reviewedBy` pointing to the founder `Person` (🔒).
- [ ] `Service`:
  - `@id` `…/industries/<slug>#service`
  - `name` (e.g. "Dental Website Design")
  - `serviceType`
  - `provider` pointing to the Organization `@id`
  - `areaServed` `{"@type":"Country","name":"United States"}` (plus "Worldwide" if the owner wants)
  - `audience` `{"@type":"BusinessAudience","audienceType":"Dental practices"}`
  - `offers` as an array of `Offer`, one per package, with `name`, `price` (starting price), `priceCurrency` "USD" and `priceSpecification` noting "starting at". These must match the visible prices exactly.
- [ ] `FAQPage`: only questions visible on the page, with text identical to the visible text.
- [ ] `BreadcrumbList`: Home › Industries › Niche.
- [ ] Hub page: `CollectionPage` + `ItemList` of the 4 niche pages.
- [ ] **Never** add `AggregateRating` or `Review` for Locallify itself. Never mark up content that isn't visible on the page.
- [ ] Validate every page with the Google Rich Results Test and the Schema.org validator, and fix all errors. Add a CI or unit test that parses each page's JSON-LD and checks it's valid JSON with the required `@type`s.

### 7.6 Topical authority — supporting blog content

A single page ranks and gets cited far better when it's surrounded by related content. For each niche, create **2 supporting posts** that link to the niche page. Content is written by the owner or drafted for owner review; don't publish invented case results.

| Niche | Post 1 | Post 2 |
|---|---|---|
| Dental | How much does a dental website cost in 2026? | 12 things every dental practice website needs |
| Med spa | Med spa website checklist: pages that drive bookings | How med spas can get recommended by ChatGPT & AI search |
| Roofing | Shared roofing leads vs. your own website: the real cost | What a roofing contractor website should include |
| Cleaning | How to add instant quotes to a cleaning business website | Turning one-off cleans into recurring clients online |

- [ ] Each post: answer-first intro, question H2s, a table or checklist, `BlogPosting` schema with author `Person` and dates, and a link to the niche page with a descriptive anchor.
- [ ] Create these as Sanity drafts, marked `TODO(owner): review before publish`.

### 7.7 Scope guardrails (avoid spam signals)

- [ ] **Don't create city-level duplicates** (e.g. "roofing websites in Dallas / Houston / …") or swapped-keyword copies. Google's doorway-page and scaled-content policies target these.
- [ ] Add `hreflang` only if the owner later creates genuinely localized UK/AU versions.
- [ ] No AI-generated filler: every paragraph must say something niche-specific that a practice owner would recognize as true.

### 7.8 Measurement

- [ ] Search Console + Bing Webmaster Tools: track impressions, clicks and queries per niche URL.
- [ ] Analytics: segment referral traffic from AI sources (`chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`) into an "AI referrals" channel.
- [ ] Add a monthly **AI visibility check** to the owner's routine:
  - Ask ChatGPT, Perplexity, Gemini and Google (AI Overviews) about 5 fixed prompts per niche, e.g. "best dental website design agency," "who builds websites for med spas with online booking," "roofing website design company."
  - Log whether Locallify is mentioned or cited.
  - Store the results in a simple table so trends are visible.
- [ ] Deliver a short `SEO_CHECKLIST_RESULTS.md` at the end listing each page's title and meta lengths, word count, schema validation result, and Lighthouse mobile scores.

## 8. Tracking

- [ ] Fire analytics events: `calculator_used` (with niche and result bucket), `cta_click` (with section), `form_submit` (with niche and pain tags).
- [ ] UTM passthrough into hidden form fields.

## 9. Owner input needed

| Item | Needed for |
|------|-----------|
| Confirm the 4 niches and US-first targeting | all |
| Confirm package names and prices (USD) | §5 packages |
| Audit offer: format and turnaround | §4.1 |
| Do you manage Google Ads? | Roofing FAQ |
| HIPAA wording legal check | Dental FAQ |
| Approve "Concept" demo builds for med spa / roofing / cleaning | proof sections |
| Timezone overlap hours you'll commit to (e.g. 7–10am US Eastern) | offshore FAQ |
| Payment methods for international clients (Stripe, Wise, PayPal) | FAQ / pricing |
| Canonical business facts: legal name, address, phone, one-line description | §7.4 entity consistency |
| Founder name, role, photo, LinkedIn (author/reviewer signals) | §7.4, §7.5 |
| GBP URL + directory profiles (Clutch, GoodFirms, etc.) for `sameAs` | §7.4 |
| Confirm AI training crawlers should be allowed | §7.1 |
| Validate keyword volumes | §7.2 |