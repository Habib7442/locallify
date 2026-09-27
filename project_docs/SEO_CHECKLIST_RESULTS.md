# Industry pages — SEO checklist results

Built 27 Sep 2026 from `project_docs/Locallify niche pages spec.md`, then re-scoped to what Locallify delivers: the website and its SEO, GEO and AEO. No ads, legal or compliance work, telephony, CRM integrations or follow-up automation; the framework's fourth step is "Measured" rather than "Followed-up". Measured on a local production build (`next build` + `next start`, Lighthouse 12, mobile). The pages are currently **hidden** (`INDUSTRIES_LIVE = false`), so they're `noindex` and Lighthouse SEO reads 69 for that reason alone. It becomes 100 when launched.

| Page | Title (chars) | Meta description (chars) | H1 | Words (visible, incl. FAQ) | JSON-LD @types | Proof |
|---|---|---|---|---|---|---|
| `/industries` | 49 | 136 | 1 | 165 | CollectionPage (+ItemList), BreadcrumbList | — |
| `/industries/dental-website-design` | 51 | 146 | 1 | 1,858 | WebPage, Service (3 Offers), FAQPage, BreadcrumbList | 3 real healthcare builds |
| `/industries/med-spa-website-design` | 53 | 149 | 1 | 1,697 | WebPage, Service (3 Offers), FAQPage, BreadcrumbList | 2 related real builds |
| `/industries/roofing-website-design` | 52 | 155 | 1 | 1,680 | WebPage, Service (3 Offers), FAQPage, BreadcrumbList | "Our standards" |
| `/industries/cleaning-website-design` | 59 | 147 | 1 | 1,679 | WebPage, Service (3 Offers), FAQPage, BreadcrumbList | "Our standards" |

All pages also inherit the sitewide `Organization` + `WebSite` graph. All JSON-LD parses as valid JSON. Offer prices come from `content/industries/pricing.ts`, the same source as the visible prices.

**Lighthouse mobile (local):**
- Roofing: Performance 84, Accessibility 100
- Dental: Performance 80, Best Practices 100
- Cleaning: Performance 81, Best Practices 100

Re-run on production after launch; local numbers are noisy.

**Checked:**
- All copy, FAQ answers, prices and the calculator explanation are in the server HTML. Only the calculator interaction and the form run client-side.
- Self-referencing `www` canonicals.
- Unique `next/og` OG and Twitter image per niche page.
- Visible breadcrumbs match `BreadcrumbList`.
- Descriptive image alt text on real builds.
- Launch mode tested: with the flag on, the pages leave `noindex`, and appear in the sitemap, nav, footer and service-page "Built for" rows.

**Still to do (owner / post-launch):**
- [ ] Validate each page in Google's Rich Results Test and the Schema.org validator after deploy.
- [ ] Hub OG image is the generic site image (niche pages have their own).
- [ ] Submit to Google Search Console and Bing Webmaster Tools. IndexNow isn't implemented yet.
- [ ] Add the industry pages to `public/llms.txt` at launch.
- [ ] Link the homepage to the niches (the nav covers it once live).
- [ ] 8 supporting blog posts (§7.6): not drafted yet.
- [ ] Analytics: events are wired (`calculator_used`, `cta_click`, `form_submit`) but no analytics tool is installed.
- [ ] "Reviewed by [founder]" line and `reviewedBy` schema: needs founder name, role and LinkedIn.
