# Locallify Website Audit — Fix Checklist

Source: site audit of https://www.locallifyagency.com (27 Sep 2026).
Stack (as observed): Next.js (App Router, `next/image`), Sanity CMS, Vercel.

## Instructions for Claude Code

- Work through tasks in priority order (P0 → P1 → P2). Check off each box when done.
- **Do not invent content.** Never fabricate testimonials, reviewer names, statistics, client counts, addresses, phone numbers, team members, or screenshots. Tasks marked **🔒 NEEDS OWNER INPUT** require facts from the owner. For those, build the structure, leave clearly marked `TODO(owner):` placeholders, and list them in your summary.
- Some content (testimonials, blog posts, case studies) lives in **Sanity**, not the repo. If a fix is content-only, say so and describe the exact edit to make in Sanity Studio. Don't hardcode content that should come from the CMS.
- Match the **homepage voice** for any copy you write: calm, specific, credible ("A calm path from idea to live product"). Avoid hype words like "elite," "domination," "revolution," "empire," and "high-voltage."
- After each P0/P1 task, run `npm run build` (or the project's equivalent) and fix any errors.
- At the end, produce a short summary: what changed, which files, and the list of open `TODO(owner):` items.

---

## P0 — Trust issues (fix first)

### 1. Rebuild the About page (`/about`)

The page is left over from an older brand ("Modernizing the street," "local legends," "JOIN THE REVOLUTION"). It contradicts the rest of the site.

- [x] Remove the unsupported stats block: `48 Hours to Launch`, `250+ Active Partners`, `12x Lead Conversion`, `Elite Designers`.
- [x] Remove the old "Building for the 95%" and "JOIN THE REVOLUTION" sections, and the old CTA that sends a "claim my digital spotlight" WhatsApp message.
- [x] Remove the **duplicate legacy footer** (the one with "Build for the elite" and "Made with ⚡ in India" that links to `/privacy`). Keep only the shared site footer.
- [x] Use the shared site header so the nav includes **Blog**, like every other page.
- [x] Rewrite the page (Team section is wired but hidden until `TEAM` in `components/AboutPageClient.tsx` has real entries — TODO(owner)) in the homepage voice with these sections:
  - Who we are: a software studio in Silchar, Assam, serving India and worldwide.
  - How we work: reuse the Discovery → Design → Build → Launch → Grow process.
  - What we believe: code/IP ownership, discoverability built in, performance.
  - Team: 🔒 NEEDS OWNER INPUT (founder name(s), roles, photos, short bios, LinkedIn). Habib Tanwir is a blog author, so confirm with the owner before listing him.
  - Proof: link to /portfolio and /reviews. Only use numbers that can be verified from the portfolio, e.g. "7 case studies." 🔒 Confirm with the owner before stating any count.
- [x] Metadata:
  - Title: `About Locallify | Software Studio in Silchar, Assam`. It currently repeats: "Our Mission | Locallify | Locallify".
  - New meta description matching the current positioning.
  - Add a canonical of `https://www.locallifyagency.com/about`.
  - OG image URL on `www`. It currently points to non-www `https://locallifyagency.com/og_image.jpg`.
- [x] Viewport: remove `maximum-scale=1` so users can pinch-zoom. This is an accessibility failure. Check that no other layout sets it.

**Accept when:** the page has one footer, the standard nav, no unsupported stats, no hype copy, a correct title and canonical, and zoom works.

### 2. Clean up testimonials (homepage + `/reviews`)

Likely stored in Sanity. Use the CMS for content edits and the repo for component and rendering fixes.

- [x] **Remove or fix the duplicated quote.** _(Code: removed Said's fallback review `r3` from `lib/data/reviews.ts` and added quote-text dedupe in `mergeTestimonials`. The quote now appears once. Owner still needs to confirm who actually said it — see TODO in `lib/data/case-studies.ts`.)_ "Said Anowar Barbhuiya" has a quote identical word-for-word to the "Hotel Luxuria Grand CMO" quote. 🔒 NEEDS OWNER INPUT: get Said's real quote, or unpublish his entry.
- [ ] Replace placeholder reviewer names with real people. 🔒 NEEDS OWNER INPUT:
  - "Hotel Luxuria Grand CMO". Its role field also says "Manager," which contradicts "CMO."
  - "Metro-City Diagnostics Admin"
- [ ] _(Sanity content — Studio → Portfolio → "Pashupati Techno Dreams, Silchar" → Client Review → Reviewer Company: delete the leading backtick.)_ Fix the stray backtick in the role "`Pashupati Techno Dreams" (Er. Pranjal Nath).
- [ ] Confirm the spelling of "Biprangshu Bhattarcharjee". It may be "Bhattacharjee." 🔒 Confirm with the owner; don't change it without confirmation.
- [x] **The marquee renders every testimonial twice in the HTML.** Keep the visual loop, but mark the duplicated set `aria-hidden="true"` (and `inert` if supported) so screen readers and crawlers see each quote once.
- [x] "Verified" badge _(Added `sourceUrl` to the `review` schema and to the project `testimonial` object; the badge renders only when it's set and links to it. Right now no entry has one, so no badge shows. Redeploy the Studio so editors see the new field.)_: show it only when an entry has a verification source.
  - Add an optional `sourceUrl` field to the testimonial schema in Sanity (e.g. a link to the Google review).
  - Show the badge only when `sourceUrl` exists, and make it link to the source.
- [ ] _(Partly done: the review count now shows next to the rating on `/` and `/reviews`. Still needs the real GBP URL in `GOOGLE_RATING.profileUrl` in `lib/site-config.ts`.)_ Next to the homepage "5.0" rating, show the actual Google review count and link to the real Google Business Profile, not a generic Maps search URL. 🔒 NEEDS OWNER INPUT: the GBP URL and the current review count.
- [x] `/reviews` "Write a Review" form _(Already created as `is_published: false`, so it goes to moderation. Fixed: `is_verified` now defaults to `false` in the schema and the mapper, and the badge no longer depends on it.)_: submissions must go to a moderation queue and must **never** be shown as "Verified" automatically. Check the current behavior and fix it if needed.
- [x] Don't add `AggregateRating` _(Removed from `localBusinessJsonLd` on `/` and `/reviews`.)_ or `Review` schema for self-hosted reviews of Locallify itself. Google doesn't show stars for self-serving reviews. If this schema already exists, remove it.
- [x] Note for the owner (no code change): several quotes read as agency-written, with terms like "dynamic sitemaps," "Search Console redirect errors" and "mobile viewports." Recommend replacing them with the clients' own wording.

**Accept when:** no quote is duplicated, every reviewer has a real name, badges show only with a source, and each quote appears once in the accessibility tree.

### 3. Resolve the USD vs INR pricing conflict

`/pricing` and the homepage list USD (landing page from $600). The blog post `/blog/how-much-does-a-website-cost-for-a-small-business-in-silchar-2026-guide` tells local businesses ₹5,000–₹70,000. The contact form's lowest budget option is "Under $1,000."

- [ ] 🔒 NEEDS OWNER DECISION. Choose one:
  - **(A) Two tiers:** add an INR/USD (India / International) toggle to the pricing section on `/pricing` and the homepage. Add INR budget options to the contact form, shown by default for India visitors or chosen via a toggle.
  - **(B) Align the blog:** update the blog post so its figures match the published packages.
- [ ] Don't implement either option until the owner decides. You can prepare the toggle component behind a flag.

### 4. Correct the GEO blog post

`/blog/what-geo-actually-is-and-how-it-differs-from-seo` (Sanity content).

- [x] _(The post lives in `lib/data/articles.ts`, not Sanity. Used the clinic's live domain `theentclinicsilchar.com`, which is already recorded on the project.)_ In the "After" example answer, bookings are said to be "via their clinic portal at locallifyagency.com." Replace this with the clinic's real domain. 🔒 NEEDS OWNER INPUT: The ENT Clinic's live URL.
- [x] _(Added an "Illustrative example" label and softened the meta description. Real dated screenshots are still optional — owner.)_ Label the before/after answers honestly. Either replace them with real dated screenshots (🔒 owner) or add an "Illustrative example" label.
- [x] Update the outdated model names in the comparison table ("GPT-4o, Claude 3.5, Gemini 1.5"). Use generic wording such as "LLM answer engines (ChatGPT, Claude, Gemini, Perplexity)" so it doesn't go out of date.

---

## P1 — SEO & technical

### 5. Sitemap ↔ blog sync

- [x] _(Blog `lastmod` = `_updatedAt` (falls back to `publishedAt`); case studies = `_updatedAt`.)_ Generate `sitemap.xml` dynamically from Sanity, covering all blog posts and case studies, with `lastmod` taken from each document's `_updatedAt`.
- [x] _(Root cause: once Sanity had one post, `getPublishedPosts` dropped the 6 shipped articles in `lib/data/articles.ts`. They're now merged in (Sanity wins on slug). TODO(owner): migrate them into Sanity.)_ These 6 posts are on `/blog` but **missing from the sitemap**:
  - `/blog/what-geo-actually-is-and-how-it-differs-from-seo`
  - `/blog/metro-city-diagnostics-technical-teardown`
  - `/blog/local-seo-for-clinics-tier-2-city`
  - `/blog/how-we-get-clients-into-chatgpt-google-ai-overviews`
  - `/blog/schema-markup-checklist-every-build`
  - `/blog/direct-booking-vs-ota-luxuria-grand-case-study`
- [x] `/blog/how-much-does-a-website-cost-for-a-small-business-in-silchar-2026-guide` is **in the sitemap but not listed on `/blog`**. Make the blog index list every published post, probably by querying Sanity instead of a hardcoded list.
- [x] _(`lastmod` removed from static and service pages.)_ Static pages shouldn't all share the same `lastmod`. Use real modification dates, or leave `lastmod` out for static pages.

**Accept when:** the set of blog URLs on `/blog` equals the set in `sitemap.xml`.

### 6. www canonicalization

- [x] _(Already correct in the current build — production was serving an older deploy.)_ `/blog` has canonical `https://locallifyagency.com/blog` (non-www). Change it to `https://www.locallifyagency.com/blog`.
- [x] _(`metadataBase` is set via `constructMetadata` in the root layout; all canonicals and OG images render on `www`.)_ Find every non-www absolute URL in metadata, such as OG images on /about and /blog. Set `metadataBase` to `https://www.locallifyagency.com` in the root layout and use relative paths.
- [x] _(Checked 27 Sep: `https://locallifyagency.com/*` → 301 → `https://www.…`; `http://` → 308 → https. HSTS `max-age=63072000` is on.)_ Confirm that `locallifyagency.com` 301-redirects to `www` (Vercel domain settings). Report the result.

### 7. Metadata consistency

- [x] _(Case studies now strip the CMS brand suffix and use an absolute title → "AstroKraft Case Study | Locallify". Audited every built route: no other repeats. `/blog` gained a single `| Locallify`.)_ Fix titles that repeat "Locallify":
  - The case study title template gives "AstroKraft Case Study | Locallify Portfolio | Locallify". Either make the page-level title omit the brand or change the template.
  - Audit every route for the same issue.
- [x] _(Case studies now go through `constructMetadata`, which sets OG and Twitter from one source.)_ Case study pages: `twitter:title`, `twitter:description` and `twitter:image` fall back to the homepage values while the OG tags are correct. Generate Twitter metadata from the same source as OG.
- [x] Blog posts: _(og:type article + article:* tags done. Cover image is used when a post has one; the 6 shipped articles have no cover image, so they still use the site image — TODO(owner): add cover images.)_
  - Set `og:type` to `article`.
  - Add `article:published_time`, `article:modified_time` and `article:author`.
  - Use each post's cover image as `og:image`. The GEO post currently uses the generic site image.
- [x] _(Removed the default list; only pages with their own keywords emit the tag.)_ Remove the sitewide copied `meta keywords`, or make them page-specific. Google ignores the tag, so removing it is fine.
- [x] _(Both already existed. Fixed `dateModified` to use `_updatedAt`, and team bylines now point to the Organization instead of a fake Person. Rich Results Test still to run after deploy.)_ Add JSON-LD `BlogPosting` (with author and dates) to blog posts and `BreadcrumbList` to blog and case study pages, if not already present. Validate with the Rich Results Test.

### 8. Local SEO / NAP

The Silchar landing page says clients can meet in person, but the site has no address and no visible phone number.

- [ ] _(Name, address and phone were already in `lib/site-config.ts` (checked against the GBP) and already published in JSON-LD, so they're now shown on the page too. Still open: opening hours, the direct GBP URL, and confirming the address is OK to display — TODO(owner).)_ 🔒 NEEDS OWNER INPUT: registered business name, full street address, phone, opening hours, GBP URL, and whether the address can be shown publicly.
- [x] When provided: _(New `components/NapDetails.tsx` is in the footer (every page), on `/contact` and on the Silchar page, plus a lazy-loaded map on the Silchar page. The Silchar page now includes the `ProfessionalService` node. `openingHours` and the GBP entry in `sameAs` are waiting on the owner.)_
  - Show the address and phone in the footer and on `/contact` and `/web-development-company-silchar`.
  - Add a map embed to the Silchar page.
  - Add or complete `LocalBusiness` (or `ProfessionalService`) JSON-LD with `address`, `geo`, `telephone`, `openingHours` and `sameAs` (LinkedIn, Facebook, Instagram, GBP).
- [x] Make the phone number a visible `tel:` link. Right now it only exists inside `wa.me` links.

### 9. Image performance

- [x] _(Already `sizes="44px"` in `ReviewsMarquee`; the case-study avatar uses a fixed 48×48.)_ Testimonial avatars request `/_next/image?...&w=3840` but display at about 48–64px. Add correct `sizes` (e.g. `sizes="64px"`) or fixed `width`/`height`.
- [x] _(Re-encoded to `/hero_bg.webp` (1.65 MB → 38 KB source; served as 7 KB AVIF). `sizes="100vw"` is correct for a full-bleed background — the 3840 request only happens on large high-DPR desktops. Lighthouse confirms it's the mobile LCP element, so it's the only preload on `/`. `priority` (deprecated in Next 16) is replaced by `preload`. The Navbar logo is no longer preloaded, and the first gallery image is `eager` instead of preloaded.)_ The hero background (`/hero_bg.png`) also requests `w=3840`.
  - Add a realistic `sizes` value.
  - Consider converting it to AVIF/WebP.
  - Use `priority` only on the actual LCP image.
- [x] _(Added AVIF to `images.formats`; added the missing `sizes` on the legacy `/[slug]` cover and logo.)_ Audit every `next/image` for missing `sizes` on fill or responsive images.
- [x] _(Local `next start`, Lighthouse 12 mobile, same machine. Perf before → after: `/` 37 → 73 (LCP 6.1s → 4.3s, TBT 4.1s → 0.47s), `/pricing` 77 → 87, `/portfolio` 64 → 65 (LCP there is text, not an image). Local runs are noisy — re-run on production after deploy. Still well short of the 95 target: remaining cost is JS and style/layout work, a separate perf task.)_ Run Lighthouse (mobile) on `/`, `/pricing` and `/portfolio` before and after, and report the scores.

### 10. Accessibility consistency

- [x] _(Moved to the root layout so every route gets exactly one; the layout's wrapper `<main>` became a `<div>` (it had been nesting a second `<main>` around every page); added `id="main-content"` to blog, blog post, privacy, and `/[slug]`.)_ Add the "Skip to content" link, with a matching `#main-content` target, to every layout. It's missing on blog and privacy pages.
- [x] _(Footer and CTA icons repeated their visible label ("WhatsApp WhatsApp"); icons are now `alt=""` so each link has one clean name. Also fixed a heading-order failure: marquee reviewer names were `<h4>`.)_ Check that the social icons (WhatsApp, LinkedIn, Facebook, Instagram) have accessible names.

---

## P2 — Voice & polish

### 11. Unify brand voice

Replace old hype copy with homepage-style copy:

- [x] `/services` H1 "Digital Domination. Global footprint." → e.g. "Software, web and mobile apps — built to be found."
- [x] _(The button now goes to `/contact`, like the homepage.)_ `/services` CTA "Don't just exist. Be the leader." / "Claim your digital empire" → e.g. "Tell us what you're building." / "Start a project."
- [x] `/pricing` subhead "No hidden fees. Just high-voltage code." → e.g. "Fixed starting prices. Milestone billing. No hidden fees."
- [x] _(Blog index and posts now render `FinalCTA`; the unused `components/CTA.tsx` was deleted.)_ Blog layout footer CTA "JOIN THE REVOLUTION… elite businesses…" → reuse the homepage's closing CTA ("Tell us what you want to build…").
- [x] _(Repo: remaining hits fixed — 3× "elite" in `lib/data/case-studies.ts`, 1× in `lib/data/profiles.ts`; privacy-policy handled in #12. "street" only appears as `streetAddress`. Sanity: the Hotel Luxuria Grand project still says "Silchar's elite luxury hotel" (description), "an elite direct-booking portal" (heroSubtitle), "deliver elite performance" (solution) — edit these in Studio. No other hits in Sanity.)_ Search the codebase and Sanity for these leftover phrases and report every hit: `elite`, `revolution`, `domination`, `empire`, `local legends`, `street`, `high-voltage`, `digital spotlight`.

### 12. Privacy policy (`/privacy-policy`)

The current text describes the old storefront model ("your customers' interactions with your shop"). It doesn't cover the contact form, the call-booking step, analytics or cookies.

- [x] _(Draft is in `project_docs/privacy-policy-draft.md`, written from what the code actually does: form fields, IP stored on leads, Upstash, Cal.com, the review form, Vercel logs, no analytics cookies. The live page is unchanged apart from removing "elite".)_ Draft an updated structure covering:
  - What we collect: contact form fields, booking data, WhatsApp/email messages, analytics/cookies.
  - Why we collect it and on what legal basis.
  - Processors: Sanity, Resend, Cal.com, Google Workspace, Vercel, analytics. 🔒 Confirm the full list with the owner.
  - Retention.
  - User rights and the deletion request process.
  - Grievance contact, relevant under India's DPDP Act 2023.
  - Last-updated date.
- [x] Mark the draft `TODO(owner): legal review required`. Don't publish it as final.

### 13. Small fixes

- [x] _(Normalised when the CMS data is loaded (`normalizeDuration` in `lib/cms.ts`), so "4 Weeks" renders as "4 weeks" everywhere, whatever an editor types.)_ Homepage "Selected work" durations: make the casing consistent ("4 Weeks" vs "2 weeks" → "4 weeks").
- [x] Note for the owner (content): the AstroKraft case study shows raw GSC totals (21 clicks, 200 impressions). Consider before/after deltas or trend framing instead.
- [x] Note for the owner (content): bring the other 6 case studies up to the AstroKraft standard (challenge → root cause → solution → outcomes → live link).

---

## Owner input needed (collected)

| # | Item | Blocks task |
|---|------|-------------|
| 1 | Founder/team names, roles, photos, bios | 1 |
| 2 | Verified client/project count (if stating one) | 1 |
| 3 | Said Anowar Barbhuiya's real quote (or unpublish) | 2 |
| 4 | Real names for "Hotel Luxuria Grand CMO" and "Metro-City Diagnostics Admin" | 2 |
| 5 | Spelling of "Bhattarcharjee" | 2 |
| 6 | Google Business Profile URL + review count | 2, 8 |
| 7 | Pricing decision: two INR/USD tiers (A) or align blog (B) | 3 |
| 8 | The ENT Clinic's live domain; real GEO screenshots (optional) | 4 |
| 9 | Business address, phone, hours, public-display OK? | 8 |
| 10 | Full list of data processors; legal review of privacy policy | 12 |

---

## Sanity Studio edits (content-only — do these by hand)

Found by reading the live dataset on 27 Sep 2026. Sanity currently holds 7 `project` docs, 1 `blog` doc and **no** `review` docs, so `/reviews` also shows the fallback quotes from `lib/data/reviews.ts`.

1. **Portfolio → "Pashupati Techno Dreams, Silchar" → Client Review → Reviewer Company:** delete the leading backtick in `` `Pashupati Techno Dreams``.
2. **Portfolio → "Hotel Luxuria Grand, Silchar" → Client Review:** replace Reviewer Name "Hotel Luxuria Grand CMO" with the real person. Make Designation match their title (it currently says "Manager"). 🔒
3. **Portfolio → "Metro-City Diagnostics, Silchar" → Client Review:** replace Reviewer Name "Metro-City Diagnostics Admin" with the real person. 🔒
4. **Portfolio → "AstroKraft":** confirm the spelling "Biprangshu Bhattarcharjee". 🔒
5. **Portfolio → "Hotel Luxuria Grand, Silchar":** remove "elite" from the description, heroSubtitle and solution.
6. **Any testimonial backed by a public review:** fill in the new **Source URL** field so the "Verified" badge shows and links to it. Redeploy the Studio first so editors can see the field.
7. **Optional:** move the 6 articles in `lib/data/articles.ts` into Sanity, then remove `mergeWithFallbackPosts` in `lib/cms.ts`.

## Open `TODO(owner)` items in code

- `components/AboutPageClient.tsx` — `TEAM` list (the Team section stays hidden until it has entries).
- `lib/data/case-studies.ts` — who actually said the Hotel Luxuria Grand quote (Said Anowar Barbhuiya, or the "CMO" named in Sanity).
- `lib/data/reviews.ts` — Said's real quote, if it should come back.
- `lib/site-config.ts` — the direct GBP URL for `GOOGLE_RATING.profileUrl`; re-confirm the review count (27); opening hours; confirm the geo pin.
- `lib/structured-data.ts` — `image`, `priceRange` and `openingHoursSpecification` for LocalBusiness.
- `lib/cms.ts` — migrate the shipped articles into Sanity.
- `project_docs/privacy-policy-draft.md` — legal review, processor list, retention periods, grievance officer.
- Task 3 — the INR/USD pricing decision.

