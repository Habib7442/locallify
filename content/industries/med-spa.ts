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
      "Med spa website design with online booking and deposits, treatment pages that rank, consent-friendly before/after galleries and automated rebooking.",
  },
  card: {
    summary: "Booking with deposits, ranking treatment pages, and rebooking reminders timed to each treatment.",
  },

  hero: {
    eyebrow: "For med spas, aesthetic & cosmetology clinics",
    headline: "A website as premium as your treatments — that books clients while you work.",
    subhead:
      "Treatment pages that rank, before/after galleries that convert, and booking plus rebooking that runs itself.",
    bullets: [
      "Online booking and deposits for every treatment",
      "Ranking pages for Botox, fillers, laser, facials and more",
      "Before/after galleries with consent-friendly management",
      "Automated rebooking reminders at the right interval",
    ],
    intro:
      "Med spa website design has two jobs that pull in different directions: look as considered as the treatment room, and turn an Instagram-curious visitor into a booked, deposit-paid appointment. Locallify builds aesthetic clinic websites that do both — a calm, premium front end, with booking, deposits and rebooking wired in behind it.",
  },

  atAGlance: [
    { label: "Built for", value: "Med spas, aesthetic, cosmetology and laser clinics" },
    { label: "Includes", value: "Booking + deposits, treatment pages, galleries, rebooking" },
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
        title: "Clients don’t rebook on time",
        body: "Botox wears off in three to four months. If nothing reminds the client at week eleven, she drifts — to another clinic, or to nobody at all.",
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
    heading: "How we build a med spa website that books and rebooks",
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
        example: "Injector credentials and training, consented before/after galleries, real reviews, and plain answers about downtime and aftercare.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "A booking path that works at 11pm from a phone, with commitment built in.",
        example: "Online booking with deposits through Stripe or your booking platform, so no-shows cost less and slots are protected.",
      },
      {
        key: "followed-up",
        title: "Followed-up",
        body: "Rebooking and reviews on autopilot, timed to each treatment.",
        example: "A rebooking reminder at the right interval for each treatment, and a review request a few days after the visit.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify med spa website",
    items: [
      { title: "Booking with deposits", body: "Clients choose a treatment, a practitioner and a slot, and pay a deposit — through your existing platform or Stripe." },
      { title: "Treatment pages that rank", body: "Dedicated pages for Botox, fillers, laser, microneedling, facials and whatever else you offer, written in a calm, non-promissory voice." },
      { title: "Before/after galleries", body: "Galleries organised by treatment, built to use only images you’ve supplied with client consent. We never use stock photos as results." },
      { title: "Rebooking automation", body: "Reminders timed per treatment, so clients hear from you before results fade — not after they’ve gone elsewhere." },
      { title: "Premium, fast design", body: "A considered visual identity that still loads fast on a phone. Lighthouse 95+ target on mobile." },
      { title: "AI-search visibility", body: "Answer-first treatment content and schema, so AI assistants can describe your clinic and what you offer accurately." },
    ],
  },

  checklist: {
    heading: "What should a med spa website include?",
    answer:
      "A med spa website should let clients book and pay a deposit online, explain each treatment on its own page, show consented before/after results, and remind clients to rebook — all in a design that matches your pricing.",
    items: [
      "Online booking with deposits, usable on a phone",
      "A separate page for each treatment you offer",
      "Before/after galleries using consented client photos only",
      "Practitioner and injector credentials",
      "Pricing guidance or “from” prices where you’re comfortable",
      "Downtime, aftercare and contraindication information",
      "Real reviews from Google",
      "Membership or package information, if you offer them",
      "Rebooking reminders timed to each treatment",
      "Location pages with hours and parking",
      "MedicalBusiness / service schema and a matching Google Business Profile",
      "Compliant, non-promissory treatment copy",
    ],
  },

  comparison: {
    heading: "Template med spa site vs. a custom Locallify build",
    rows: [
      { aspect: "First impression", template: "Recognisable theme, stock imagery", custom: "Custom design that matches your pricing" },
      { aspect: "Booking", template: "Contact form or DM link", custom: "Online booking with deposits" },
      { aspect: "Treatment pages", template: "One “Treatments” page", custom: "A page per treatment that can rank" },
      { aspect: "Rebooking", template: "Manual, if at all", custom: "Automated, timed per treatment" },
      { aspect: "Ownership", template: "Locked to the platform", custom: "You own the code and content" },
      { aspect: "Cost", template: "Low upfront, monthly fees", custom: `From ${formatUsd(p.studio)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: ["Bookings happen in DMs and phone tag", "No deposits, so no-shows hurt", "Thin treatment pages that don’t rank", "No rebooking reminders"],
    after: ["Instant online booking at any hour", "Deposits taken at booking", "Treatment pages that can rank locally", "Automated rebooking at the right interval"],
  },

  cost: {
    heading: "How much does a med spa website cost?",
    answer: `A custom med spa website from Locallify starts at ${formatUsd(p.studio)} for a Studio site with booking and core treatment pages, ${formatUsd(p.signature)} for Signature with galleries, deposits and rebooking automation, and ${formatUsd(p.multi)}+ for multi-location clinics.`,
    body: "The main cost drivers are the number of treatment pages, custom design work, and how deeply booking and deposits integrate with your existing software. Hosting, updates and ongoing SEO are covered by optional retainers.",
  },
  packages: [
    {
      name: "Studio",
      idealFor: "Single-location clinics moving off a template",
      priceFrom: p.studio,
      includes: ["Custom design", "Core treatment pages", "Booking integration", "Local SEO + schema"],
      timeline: "2–3 weeks",
    },
    {
      name: "Signature",
      idealFor: "Established clinics with active social and ad spend",
      priceFrom: p.signature,
      includes: ["Everything in Studio", "Full treatment library", "Before/after galleries", "Deposits + rebooking automation"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Clinic groups and franchises",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Signature", "Location pages", "Per-location booking", "CRM integration where APIs allow"],
      timeline: "Scoped on the discovery call",
    },
  ],

  fit: {
    forYou: [
      "Established clinics with active social media and ad spend",
      "Clinics positioned at the premium end of the market",
      "Owners who want booking and rebooking to run without DMs",
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
      { value: "rebooking", label: "Clients don’t rebook" },
      { value: "looks-cheap", label: "Site doesn’t look premium" },
      { value: "reviews", label: "Not enough reviews" },
    ],
  },

  faq: [
    { q: "Can clients pay deposits online?", a: "Yes. Deposits are taken at booking through Stripe or your existing booking platform. The amount and refund rules are yours to set." },
    { q: "Can we keep our existing booking software?", a: "Yes. We embed or integrate the booking tool you already use, so your team’s workflow doesn’t change. If it has no embed or API, we’ll recommend options on the discovery call." },
    { q: "How do you handle before/after photos?", a: "We build the gallery; you supply images you have client consent to publish. We never use stock photos presented as results." },
    { q: "Do you write treatment copy that meets advertising rules?", a: "We write calm, non-promissory copy that avoids guaranteed outcomes. Final medical and treatment claims always need your approval before anything goes live." },
    { q: "How long does a med spa website take?", a: "Studio sites take 2–3 weeks and Signature builds 4–6 weeks, depending on the number of treatments and how quickly photos and approvals come through." },
    { q: "Do we own the website?", a: "Yes. You own 100% of the code and content after the final milestone. A retainer is optional, not required." },
    {
      // TODO(owner): 🔒 confirm the overlap hours you'll commit to.
      q: "You’re based in India. How does that work?",
      a: "You get a fixed milestone price in USD, weekly progress updates, and calls scheduled in your morning. You own the code and can host it anywhere.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services", "workflow-automation"],
  updatedAt: "2026-09-27",
};
