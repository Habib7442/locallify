import type { IndustryPage } from "./types";
import { INDUSTRY_PRICES, formatUsd } from "./pricing";

const p = INDUSTRY_PRICES.roofing;

export const roofing: IndustryPage = {
  slug: "roofing-website-design",
  niche: "Roofers",
  audience: "roofing contractors",
  keyword: "roofing website design",
  audienceType: "Roofing contractors",
  serviceName: "Roofing Website Design",
  seo: {
    title: "Roofing Website Design & Lead Generation | Locallify",
    description:
      "Roofing website design for exclusive leads, not shared ones: 24/7 estimate forms with photo upload, service-area pages, local SEO and AI-search visibility.",
  },
  card: {
    summary: "24/7 estimate requests with photo upload, service-area pages for every town you cover, and a site homeowners trust.",
  },

  banner: {
    src: "/industries/roofing-website-design.webp",
    alt: "Two roofers working on a tiled roof beside a brick chimney",
    credit: "rawpixel (CC0)",
    creditUrl: "https://www.rawpixel.com/image/5925457/photo-image-public-domain-house-person",
    position: "center 45%",
  },

  hero: {
    eyebrow: "For roofing contractors · US",
    headline: "Stop buying shared roofing leads. Own the ones that search for you.",
    subhead:
      "A fast roofing website with 24/7 estimate requests, service-area pages and the trust signals homeowners look for — so replacement jobs come to you directly.",
    bullets: [
      "Estimate requests with photo upload, day or night",
      "Service-area pages for every town you cover",
      "Licences, insurance, warranties and reviews up front",
      "Storm and insurance-claim landing pages",
    ],
    intro:
      "Roofing website design should do one thing above all: turn a homeowner who just noticed a leak into an estimate request that goes to you alone. Locallify builds roofing contractor websites that rank in the towns you actually work in, let homeowners request an estimate while you’re on a roof, and show why you’re the safe choice.",
  },

  atAGlance: [
    { label: "Built for", value: "Residential and commercial roofing contractors" },
    { label: "Includes", value: "Estimate forms, service-area pages, local SEO, GEO + AEO" },
    { label: "Timeline", value: "2–3 weeks (Local Roofer) · 4–6 weeks (Growth)" },
    { label: "Starts at", value: `${formatUsd(p.local)}, fixed milestone pricing` },
    { label: "You own", value: "All code, content and every lead the site generates" },
  ],

  problems: {
    heading: "You’re paying for leads. How many actually become jobs?",
    intro: "Roofers don’t lose work because nobody needs a roof. They lose it between the first search and the first inspection.",
    items: [
      {
        title: "Shared leads mean a bidding war",
        body: "Lead platforms sell the same homeowner to three or four roofers. Whoever calls first wins, and the price gets squeezed before you’ve even seen the roof.",
      },
      {
        title: "The only way in is a phone call you can’t answer",
        body: "You can’t take calls from a ladder. When the website has no way to request an estimate, the homeowner calls the next number on Google instead.",
      },
      {
        title: "Homeowners can’t tell you apart from storm chasers",
        body: "After a storm, every roofer looks the same in the search results. A site without licences, insurance, warranties, real project photos and reviews gives them no reason to pick you.",
      },
      {
        title: "You don’t rank outside your home town",
        body: "You work in twelve towns but the website only mentions one. Homeowners searching in the other eleven never find you.",
      },
    ],
  },

  calculator: {
    heading: "What are missed roofing leads worth to you?",
    intro: "One replacement job can pay for a website. Enter your own numbers — the defaults are examples, not industry figures.",
    model: "missed-leads",
    inputs: [
      { key: "missed", label: "Homeowners per month who couldn’t reach you or request an estimate", default: 20, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Your close rate on quoted jobs", default: 25, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average job value", default: 9000, min: 0, max: 500000, step: 500, prefix: "$" },
    ],
    howItWorks:
      "Monthly revenue lost = missed homeowners × your close rate × average job value. Yearly = monthly × 12. Use your real close rate on jobs you actually quoted, not on every enquiry.",
  },

  framework: {
    heading: "How we build a roofing website that brings in your own leads",
    intro: "Four stages on every build. For a roofing contractor, they look like this.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Rank in every town you serve, not just the one on your business card.",
        example: "A genuinely useful service-area page for each town you cover, plus a website that matches your Google Business Profile.",
      },
      {
        key: "trusted",
        title: "Trusted",
        body: "Homeowners are wary of roofers. Show them why they don’t need to be.",
        example: "Project galleries with real before/after photos, warranty details, licence and insurance information, and Google reviews.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "Make it easy to ask for an estimate, even from the driveway.",
        example: "An estimate request with photo upload that lands in your inbox, plus click-to-call on every page.",
      },
      {
        key: "measured",
        title: "Measured",
        body: "Search Console and analytics from launch, so you know which towns and services bring requests.",
        example: "See which service-area pages bring estimate requests, and keep improving SEO, GEO and AEO through an optional retainer.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify roofing website",
    items: [
      { title: "24/7 estimate form", body: "Homeowners describe the problem and upload photos from their phone, so you can triage before you drive out." },
      { title: "Service-area pages", body: "One page per town you actually serve, each with local projects and details — not copy-pasted city names." },
      { title: "Trust section", body: "Licences, insurance, warranties, manufacturer certifications and Google reviews, shown where homeowners look for them." },
      { title: "Storm and insurance pages", body: "Landing pages for storm damage and insurance claims that can go live fast when the season hits." },
      { title: "GEO + AEO", body: "Answer-first content and RoofingContractor schema so AI assistants can recommend you for the towns you serve." },
      { title: "Fast on a phone", body: "Built with Next.js and a Lighthouse 95+ mobile target, because most homeowners search from their phone." },
    ],
  },

  checklist: {
    heading: "What should a roofing contractor website include?",
    answer:
      "A roofing contractor website should let homeowners request an estimate in under a minute, show real project photos, list every town you serve on its own page, and prove you’re licensed, insured and reviewed.",
    items: [
      "Click-to-call and an estimate request above the fold on mobile",
      "Photo upload on the estimate form",
      "A page for each town or county you actually serve",
      "Separate pages for replacement, repair, storm damage and inspections",
      "Project galleries with real before/after photos",
      "Licence, insurance and warranty details",
      "Google reviews shown on the site",
      "Financing information, if you offer it",
      "An insurance-claim help page",
      "An FAQ answering cost, timeline and material questions",
      "RoofingContractor schema and a matching Google Business Profile",
    ],
  },

  comparison: {
    heading: "Shared leads and template sites vs. a Locallify build",
    rows: [
      { aspect: "Lead ownership", template: "Shared leads sold to several roofers", custom: "Leads from your site go only to you" },
      { aspect: "Estimate requests", template: "Phone only", custom: "24/7 form with photo upload" },
      { aspect: "Service areas", template: "One city mentioned", custom: "A useful page per town you serve" },
      { aspect: "AI search", template: "Rarely cited", custom: "Answer-first content + RoofingContractor schema" },
      { aspect: "Ownership", template: "Platform or agency owns it", custom: "You own the code and content" },
      { aspect: "Cost", template: "Per-lead fees every month", custom: `From ${formatUsd(p.local)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: ["Paying for shared leads", "Phone is the only way to reach you", "Nothing shows why you’re trustworthy", "Invisible outside your home town"],
    after: ["Exclusive inbound leads from your own site", "24/7 estimate requests with photos", "Licences, warranties and reviews up front", "Pages that can rank in every town you serve"],
  },

  cost: {
    heading: "How much does a roofing website cost?",
    answer: `A custom roofing website from Locallify starts at ${formatUsd(p.local)} for a Local Roofer site with estimate forms and local SEO, ${formatUsd(p.growth)} for Growth with service-area pages and GEO/AEO content, and ${formatUsd(p.multi)}+ for multi-location contractors.`,
    body: "Price depends mostly on how many service areas you cover and whether you want storm and insurance landing pages. Unlike pay-per-lead platforms, there’s no fee per enquiry: the leads are yours.",
  },
  packages: [
    {
      name: "Local Roofer",
      idealFor: "Contractors replacing a basic or outdated site",
      priceFrom: p.local,
      includes: ["Core service pages", "Estimate form with photo upload", "Click-to-call", "Local SEO + schema"],
      timeline: "2–3 weeks",
    },
    {
      name: "Growth",
      idealFor: "Established roofers covering several towns",
      priceFrom: p.growth,
      includes: ["Everything in Local Roofer", "Service-area pages", "Project gallery + trust section", "Answer-first FAQ + GEO/AEO content"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Contractors with several branches",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Growth", "Branch pages", "Storm/insurance landing pages", "Location schema for every branch"],
      timeline: "Scoped on the discovery call",
    },
  ],

  fit: {
    forYou: [
      "Established roofers doing replacements, not just patch jobs",
      "Contractors already spending on leads or ads",
      "Teams who can call a lead back the same day",
    ],
    notForYou: [
      "You only do handyman work or occasional repairs",
      "Nobody can return an estimate request the same day",
      "You want the cheapest possible site",
    ],
  },

  proof: {
    portfolioSlugs: [],
    // TODO(owner): a clearly labelled "Concept" roofing demo build is recommended.
  },

  audit: {
    painOptions: [
      { value: "shared-leads", label: "Paying for shared leads" },
      { value: "phone-only", label: "Phone is the only way in" },
      { value: "trust", label: "Site doesn’t build trust" },
      { value: "service-areas", label: "Not ranking outside home town" },
      { value: "invisible-in-ai", label: "Not showing up in AI answers" },
      { value: "slow-site", label: "Site is slow or dated" },
    ],
  },

  faq: [
    { q: "Will I get exclusive leads?", a: "Yes. Estimate requests from your own website come only to you. We don’t sell or share leads with anyone." },
    { q: "Do you run Google Ads?", a: "No. We build the website and handle its SEO, GEO and AEO. If you run ads, a fast site with a clear estimate form makes every paid click worth more." },
    { q: "Where do estimate requests go?", a: "Straight to your email, with the homeowner’s details and photos attached. Most CRMs can take leads from email; we don’t build custom CRM integrations." },
    { q: "Can you build storm-season pages quickly?", a: "Yes. Storm and insurance-claim landing pages are built on the same system, so they can go live in days when the season hits." },
    { q: "Do service-area pages count as spam?", a: "Not when they’re genuinely useful. Each page covers real work, details and projects in that town. We don’t publish copy-pasted pages with the city name swapped." },
    { q: "How long does a roofing website take?", a: "Local Roofer sites take 2–3 weeks and Growth builds 4–6 weeks. Multi-location timelines are set on the discovery call." },
    {
      q: "You’re an offshore team. Why should I trust that?",
      a: "You get a fixed milestone price in USD, weekly progress updates, calls between 7 and 10am US Eastern, and full ownership of the code. The scope and price are agreed in writing before any work starts.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services"],
  updatedAt: "2026-09-27",
};
