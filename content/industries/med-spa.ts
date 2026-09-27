import type { IndustryPage } from "./types";
import { INDUSTRY_PRICES, formatUsd } from "./pricing";

const p = INDUSTRY_PRICES.medSpa;

export const medSpa: IndustryPage = {
  slug: "med-spa-website-design",
  niche: "Med spas",
  audience: "med spa and aesthetic clinic owners",
  keyword: "med spa website design",
  audienceType: "Med spas, aesthetic and cosmetology clinics",
  serviceName: "Med Spa Website Design",
  seo: {
    title: "Med Spa & Aesthetic Clinic Website Design | Locallify",
    description:
      "Med spa website design with online booking and deposits, treatment pages that rank, consent-friendly before/after galleries and AI-search visibility.",
  },
  card: {
    summary: "Online booking with deposits, a page for every treatment, and galleries that show real, consented results.",
  },

  banner: {
    src: "/industries/med-spa-website-design.webp",
    alt: "Skincare serum being applied with a dropper",
    credit: "Authentic Stock / StockSnap (CC0)",
    creditUrl: "https://stocksnap.io/photo/beauty-skincare-LRSAT4NCLS",
    position: "center 35%",
  },

  hero: {
    eyebrow: "For med spas, aesthetic & cosmetology clinics",
    headline: "A website as premium as your treatments — that books clients while you work.",
    subhead:
      "Treatment pages that rank, before/after galleries that convert, and online booking with deposits that works at any hour.",
    bullets: [
      "Online booking and deposits for every treatment",
      "Ranking pages for Botox, fillers, laser, facials and more",
      "Before/after galleries with consent-friendly management",
      "Answer-first content that AI search can cite",
    ],
    intro:
      "Med spa website design has two jobs that pull in different directions: look as considered as the treatment room, and turn an Instagram-curious visitor into a booked, deposit-paid appointment. Locallify builds aesthetic clinic websites that do both — a calm, premium front end, with online booking and deposits built in.",
  },

  atAGlance: [
    { label: "Built for", value: "Med spas, aesthetic, cosmetology and laser clinics" },
    { label: "Includes", value: "Booking + deposits, treatment pages, galleries, GEO + AEO" },
    { label: "Timeline", value: "2–3 weeks (Studio) · 4–6 weeks (Signature)" },
    { label: "Starts at", value: `${formatUsd(p.studio)}, fixed milestone pricing` },
    { label: "You own", value: "All code and content after the final milestone" },
  ],

  problems: {
    heading: "Your Instagram brings interest. Does your website book it?",
    intro: "Aesthetic clinics rarely lack attention. The leaks are in what happens after someone decides they’re curious.",
    items: [
      {
        title: "The booking path is DMs and phone tag",
        body: "A client asks about lip filler in a DM on Sunday night. By the time someone replies on Tuesday, she has booked with the clinic whose website let her pick a slot and pay a deposit.",
      },
      {
        title: "Treatment pages are thin",
        body: "A single “Injectables” page can’t rank for Botox, dermal fillers, lip flip and jawline contouring. Google and AI answers send those searches to competitors who explain each treatment properly.",
      },
      {
        title: "Nothing answers the questions clients actually ask",
        body: "How long does it last? Does it hurt? What’s the downtime? When the website doesn’t answer, clients ask ChatGPT — and it quotes a competitor’s page that did.",
      },
      {
        title: "A template site undercuts your prices",
        body: "A $900 treatment sold from a site that looks like a $30 theme creates doubt. Premium pricing needs a premium first impression.",
      },
    ],
  },

  calculator: {
    heading: "What are lost enquiries worth over a year?",
    intro:
      "Aesthetic clients come back, so one lost enquiry is worth several visits. The defaults below are examples — replace them with your own numbers.",
    model: "repeat-visits",
    inputs: [
      { key: "missed", label: "Booking enquiries lost per month (unanswered DMs, calls, forms)", default: 25, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Share that would have booked", default: 50, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average treatment value", default: 350, min: 0, max: 20000, step: 25, prefix: "$" },
      { key: "visits", label: "Visits per client per year", default: 3, min: 1, max: 24, step: 1 },
    ],
    howItWorks:
      "Yearly value lost = lost enquiries per month × 12 × share that would have booked × average treatment value × visits per year. Monthly = yearly ÷ 12. This counts only the first year of each client, not their full lifetime.",
  },

  framework: {
    heading: "How we build a med spa website that books clients",
    intro: "Four stages, the same on every build. For an aesthetic clinic, each one looks like this.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Pages and markup that let Google and AI answers match you to specific treatment searches in your area.",
        example: "A page for each treatment and each location, marked up with the service, price range where you’re comfortable, and your address.",
      },
      {
        key: "trusted",
        title: "Trusted",
        body: "The reassurance someone needs before letting a stranger inject their face.",
        example: "Injector credentials and training, consented before/after galleries, Google reviews, and plain answers about downtime and aftercare.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "A booking path that works at 11pm from a phone, with commitment built in.",
        example: "Online booking with deposits through your booking platform or Stripe, so slots are protected and no-shows cost less.",
      },
      {
        key: "measured",
        title: "Measured",
        body: "Search Console and analytics from launch, so you can see which treatments bring bookings.",
        example: "See which treatment pages get booked, and keep improving SEO, GEO and AEO through an optional retainer.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify med spa website",
    items: [
      { title: "Booking with deposits", body: "Clients choose a treatment, a practitioner and a slot, and pay a deposit — through your booking platform embedded on the site, or Stripe." },
      { title: "Treatment pages that rank", body: "Dedicated pages for Botox, fillers, laser, microneedling, facials and whatever else you offer, written in a calm, non-promissory voice." },
      { title: "Before/after galleries", body: "Galleries organised by treatment, built to use only images you’ve supplied with client consent. We never use stock photos as results." },
      { title: "GEO + AEO", body: "Answer-first treatment content and schema, so AI assistants can describe your clinic and what you offer accurately." },
      { title: "Premium, fast design", body: "A considered visual identity that still loads fast on a phone. Lighthouse 95+ target on mobile." },
      { title: "Memberships & packages", body: "Clear pages for memberships, packages and gift cards, if you offer them, linked from every relevant treatment." },
    ],
  },

  checklist: {
    heading: "What should a med spa website include?",
    answer:
      "A med spa website should let clients book and pay a deposit online, explain each treatment on its own page, show consented before/after results, and answer the questions clients ask before booking — in a design that matches your pricing.",
    items: [
      "Online booking with deposits, usable on a phone",
      "A separate page for each treatment you offer",
      "Before/after galleries using consented client photos only",
      "Practitioner and injector credentials",
      "Pricing guidance or “from” prices where you’re comfortable",
      "Downtime, aftercare and contraindication information",
      "Real reviews from Google",
      "Membership or package information, if you offer them",
      "An FAQ answering how long, how painful and how much",
      "Location pages with hours and parking",
      "MedicalBusiness / service schema and a matching Google Business Profile",
      "Calm, non-promissory treatment copy",
    ],
  },

  comparison: {
    heading: "Template med spa site vs. a custom Locallify build",
    rows: [
      { aspect: "First impression", template: "Recognisable theme, stock imagery", custom: "Custom design that matches your pricing" },
      { aspect: "Booking", template: "Contact form or DM link", custom: "Online booking with deposits" },
      { aspect: "Treatment pages", template: "One “Treatments” page", custom: "A page per treatment that can rank" },
      { aspect: "AI search", template: "Rarely mentioned", custom: "Answer-first content + treatment schema" },
      { aspect: "Ownership", template: "Locked to the platform", custom: "You own the code and content" },
      { aspect: "Cost", template: "Low upfront, monthly fees", custom: `From ${formatUsd(p.studio)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: ["Bookings happen in DMs and phone tag", "No deposits, so no-shows hurt", "Thin treatment pages that don’t rank", "Client questions go unanswered"],
    after: ["Instant online booking at any hour", "Deposits taken at booking", "Treatment pages that can rank locally", "Answer-first pages that AI search can cite"],
  },

  cost: {
    heading: "How much does a med spa website cost?",
    answer: `A custom med spa website from Locallify starts at ${formatUsd(p.studio)} for a Studio site with booking and core treatment pages, ${formatUsd(p.signature)} for Signature with galleries, deposits and a full treatment library, and ${formatUsd(p.multi)}+ for multi-location clinics.`,
    body: "The main cost drivers are the number of treatment pages, custom design work, and how booking and deposits are set up with your existing booking platform. Hosting, updates and ongoing SEO/GEO/AEO are covered by optional retainers.",
  },
  packages: [
    {
      name: "Studio",
      idealFor: "Single-location clinics moving off a template",
      priceFrom: p.studio,
      includes: ["Custom design", "Core treatment pages", "Online booking", "Local SEO + schema"],
      timeline: "2–3 weeks",
    },
    {
      name: "Signature",
      idealFor: "Established clinics with active social and ad spend",
      priceFrom: p.signature,
      includes: ["Everything in Studio", "Full treatment library", "Before/after galleries", "Deposits + GEO/AEO content"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Clinic groups and franchises",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Signature", "Location pages", "Per-location booking", "Location schema for every clinic"],
      timeline: "Scoped on the discovery call",
    },
  ],

  fit: {
    forYou: [
      "Established clinics with active social media and ad spend",
      "Clinics positioned at the premium end of the market",
      "Owners who want bookings to happen on the website, not in DMs",
    ],
    notForYou: [
      "You want a quick template site",
      "You can’t provide real before/after photos with client consent",
      "You’d rather keep booking through DMs",
    ],
  },

  proof: {
    portfolioSlugs: ["junaid-home-interiors", "the-ent-clinic-silchar"],
    label: "Related builds",
    // TODO(owner): a clearly labelled "Concept" med spa demo build is recommended.
    note: "We haven’t built for a med spa yet. These show the premium design and clinic booking work we’d bring to yours: a high-end interiors studio and a specialist medical clinic.",
  },

  audit: {
    painOptions: [
      { value: "dm-booking", label: "Bookings stuck in DMs" },
      { value: "no-deposits", label: "No-shows / no deposits" },
      { value: "treatment-pages", label: "Treatment pages don’t rank" },
      { value: "invisible-in-ai", label: "Not showing up in AI answers" },
      { value: "looks-cheap", label: "Site doesn’t look premium" },
      { value: "slow-site", label: "Site is slow" },
    ],
  },

  faq: [
    { q: "Can clients pay deposits online?", a: "Yes. Deposits are taken at booking through your booking platform or Stripe, set up on the website. The amount and refund rules are yours to set." },
    { q: "Can we keep our existing booking software?", a: "Yes. We embed the booking tool you already use, so your team’s workflow doesn’t change. If it has no embeddable widget, we’ll talk through options on the discovery call." },
    { q: "How do you handle before/after photos?", a: "We build the gallery; you supply images you have client consent to publish. We never use stock photos presented as results." },
    { q: "Do you check our treatment claims against advertising rules?", a: "No — we don’t provide legal or regulatory review. We write calm, non-promissory copy that avoids guaranteed outcomes, and every treatment claim is approved by you (or your advisor) before it goes live." },
    { q: "Do you run our ads or social media?", a: "No. We build the website and handle its SEO, GEO and AEO. Your Instagram and ads send people to the site; the site’s job is to book them." },
    { q: "How long does a med spa website take?", a: "Studio sites take 2–3 weeks and Signature builds 4–6 weeks, depending on the number of treatments and how quickly photos and approvals come through." },
    { q: "Do we own the website?", a: "Yes. You own 100% of the code and content after the final milestone. A retainer is optional, not required." },
    {
      q: "You’re based in India. How does that work?",
      a: "You get a fixed milestone price in USD, weekly progress updates, and calls between 7 and 10am US Eastern. You own the code and can host it anywhere.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services"],
  updatedAt: "2026-09-27",
};
