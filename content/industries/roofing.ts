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
      "Roofing website design for exclusive leads, not shared ones: instant estimate forms, service-area pages, missed-call text-back and local SEO.",
  },
  card: {
    summary: "Instant estimate requests, service-area pages for every city you cover, and follow-up that keeps quotes warm.",
  },

  hero: {
    eyebrow: "For roofing contractors · US",
    headline: "Stop buying shared roofing leads. Own the ones that search for you.",
    subhead:
      "A fast roofing website with instant-estimate forms, service-area pages and automatic follow-up — so replacement jobs come to you directly.",
    bullets: [
      "Instant estimate request with photo upload",
      "Service-area pages for every city you cover",
      "Missed-call text-back while crews are on roofs",
      "Storm and insurance-claim landing pages",
    ],
    intro:
      "Roofing website design should do one thing above all: turn a homeowner who just noticed a leak into a call or an estimate request that goes to you alone. Locallify builds roofing contractor websites that rank in the towns you actually work in, answer the phone when you can’t, and follow up on every quote so good jobs don’t go cold.",
  },

  atAGlance: [
    { label: "Built for", value: "Residential and commercial roofing contractors" },
    { label: "Includes", value: "Estimate forms, service-area pages, text-back, follow-up" },
    { label: "Timeline", value: "2–3 weeks (Local Roofer) · 4–6 weeks (Growth)" },
    { label: "Starts at", value: `${formatUsd(p.local)}, fixed milestone pricing` },
    { label: "You own", value: "All code, content and every lead the site generates" },
  ],

  problems: {
    heading: "You’re paying for leads. How many actually become jobs?",
    intro: "Roofers don’t lose work because nobody needs a roof. They lose it between the first search and the signed contract.",
    items: [
      {
        title: "Shared leads mean a bidding war",
        body: "Lead platforms sell the same homeowner to three or four roofers. Whoever calls first wins, and the price gets squeezed before you’ve even seen the roof.",
      },
      {
        title: "Calls are missed while you’re on a job",
        body: "You can’t answer from a ladder. The homeowner who reaches voicemail calls the next number on Google, and that roofer gets the inspection.",
      },
      {
        title: "Estimates go out and nobody follows up",
        body: "A $9,000 replacement quote sits in a homeowner’s inbox. Without a follow-up in the first week, it goes cold — or to a competitor who called back.",
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
      { key: "missed", label: "Missed calls or unanswered forms per month", default: 20, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Your close rate on quoted jobs", default: 25, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average job value", default: 9000, min: 0, max: 500000, step: 500, prefix: "$" },
    ],
    howItWorks:
      "Monthly revenue lost = missed calls or forms × your close rate × average job value. Yearly = monthly × 12. Use your real close rate on jobs you actually quoted, not on every enquiry.",
  },

  framework: {
    heading: "How we build a roofing website that brings in your own leads",
    intro: "Four stages on every build. For a roofing contractor, they look like this.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Rank in every town you serve, not just the one on your business card.",
        example: "A genuinely useful service-area page for each city you cover, plus a Google Business Profile that matches the website.",
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
        example: "An instant estimate request with photo upload, click-to-call, and an automatic text-back when a call is missed.",
      },
      {
        key: "followed-up",
        title: "Followed-up",
        body: "Keep every quote warm without adding office hours.",
        example: "An automated estimate follow-up sequence, and a review request after each finished job.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify roofing website",
    items: [
      { title: "Instant estimate form", body: "Homeowners describe the problem and upload photos from their phone, so you can triage before you drive out." },
      { title: "Service-area pages", body: "One page per town you actually serve, each with local projects and details — not copy-pasted city names." },
      { title: "Missed-call text-back", body: "Callers you can’t answer get a text within a minute with a link to request an estimate." },
      { title: "Storm and insurance pages", body: "Fast-launch landing pages for storm damage and insurance claims when the season hits." },
      { title: "Estimate follow-up", body: "Automatic reminders on open quotes, connected to your CRM through n8n where it has an API." },
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
      "Missed-call text-back",
      "RoofingContractor schema and a matching Google Business Profile",
    ],
  },

  comparison: {
    heading: "Shared leads and template sites vs. a Locallify build",
    rows: [
      { aspect: "Lead ownership", template: "Shared leads sold to several roofers", custom: "Leads from your site go only to you" },
      { aspect: "Missed calls", template: "Voicemail", custom: "Automatic text-back with an estimate link" },
      { aspect: "Service areas", template: "One city mentioned", custom: "A useful page per town you serve" },
      { aspect: "Follow-up", template: "Manual, when there’s time", custom: "Automated estimate follow-up" },
      { aspect: "Ownership", template: "Platform or agency owns it", custom: "You own the code and content" },
      { aspect: "Cost", template: "Per-lead fees every month", custom: `From ${formatUsd(p.local)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: ["Paying for shared leads", "Missed calls go to voicemail", "Estimates go cold without follow-up", "Invisible outside your home town"],
    after: ["Exclusive inbound leads from your own site", "Instant text-back on every missed call", "Automated follow-up on open quotes", "Pages that can rank in every town you serve"],
  },

  cost: {
    heading: "How much does a roofing website cost?",
    answer: `A custom roofing website from Locallify starts at ${formatUsd(p.local)} for a Local Roofer site with estimate forms and local SEO, ${formatUsd(p.growth)} for Growth with service-area pages and automation, and ${formatUsd(p.multi)}+ for multi-location contractors.`,
    body: "Price depends mostly on how many service areas you cover, whether you want storm and insurance landing pages, and which CRM we connect to. Unlike pay-per-lead platforms, there’s no fee per enquiry: the leads are yours.",
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
      includes: ["Everything in Local Roofer", "Service-area pages", "Missed-call text-back", "Estimate follow-up automation"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Contractors with several branches",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Growth", "Branch pages", "Storm/insurance landing pages", "CRM integration where APIs allow"],
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
      "Nobody can return a call the same day",
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
      { value: "missed-calls", label: "Missed calls on jobs" },
      { value: "cold-estimates", label: "Estimates go cold" },
      { value: "service-areas", label: "Not ranking outside home town" },
      { value: "storm-season", label: "Storm season spikes" },
      { value: "reviews", label: "Not enough reviews" },
    ],
  },

  faq: [
    { q: "Will I get exclusive leads?", a: "Yes. Leads from your own website and Google Business Profile come only to you. We don’t sell or share leads with anyone." },
    {
      // TODO(owner): 🔒 confirm whether you manage Google Ads before INDUSTRIES_LIVE.
      q: "Do you run Google Ads?",
      a: "We build the website and the local SEO. Ads can be added through a Growth retainer once the site is converting, so you’re not paying to send clicks to a page that leaks.",
    },
    { q: "Can it connect to my CRM, like JobNimbus or AccuLynx?", a: "Where your CRM has an API, yes — we connect it through n8n so estimate requests land in your pipeline automatically. We confirm what’s possible with your system on the discovery call." },
    { q: "Can you build storm-season pages quickly?", a: "Yes. Storm and insurance-claim landing pages are built on the same system, so they can go live in days when the season hits." },
    { q: "Do service-area pages count as spam?", a: "Not when they’re genuinely useful. Each page covers real work, details and projects in that town. We don’t publish copy-pasted pages with the city name swapped." },
    { q: "How long does a roofing website take?", a: "Local Roofer sites take 2–3 weeks and Growth builds 4–6 weeks. Multi-location timelines are set on the discovery call." },
    {
      // TODO(owner): 🔒 confirm the overlap hours you'll commit to.
      q: "You’re an offshore team. Why should I trust that?",
      a: "You get a fixed milestone price in USD, weekly progress updates, calls in your morning, and full ownership of the code. The scope and price are agreed in writing before any work starts.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services", "workflow-automation"],
  updatedAt: "2026-09-27",
};
