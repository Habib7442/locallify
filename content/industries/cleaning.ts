import type { IndustryPage } from "./types";
import { INDUSTRY_PRICES, formatUsd } from "./pricing";

const p = INDUSTRY_PRICES.cleaning;

export const cleaning: IndustryPage = {
  slug: "cleaning-website-design",
  niche: "Cleaning companies",
  audience: "cleaning company owners",
  keyword: "cleaning company website design",
  audienceType: "Residential and commercial cleaning companies",
  serviceName: "Cleaning Company Website Design",
  seo: {
    title: "Cleaning Company Website Design, Instant Quotes | Locallify",
    description:
      "Cleaning company website design with instant online quotes, recurring-client booking, neighborhood pages and automated follow-up. Free lead-leak audit.",
  },
  card: {
    summary: "Instant quotes by bedrooms or square footage, online booking, and follow-up that turns one-off cleans into recurring clients.",
  },

  hero: {
    eyebrow: "For residential & commercial cleaning companies",
    headline: "Instant quotes, booked cleans, recurring clients — on autopilot.",
    subhead:
      "A cleaning company website that quotes and books in under a minute, and turns one-off cleans into recurring clients.",
    bullets: [
      "Instant price quote by bedrooms or square footage",
      "Online booking and recurring-schedule sign-up",
      "Local pages for every neighborhood you serve",
      "Automated follow-up that converts one-off cleans to recurring",
    ],
    intro:
      "Cleaning company website design lives or dies on one question: how fast can someone see a price? People searching for a house cleaner want a number now, not a callback tomorrow. Locallify builds cleaning business websites with instant quotes, online booking and a recurring-schedule offer, so a first clean has a real chance of becoming a monthly client.",
  },

  atAGlance: [
    { label: "Built for", value: "Residential, move-out and commercial cleaning companies" },
    { label: "Includes", value: "Instant quotes, booking, neighborhood pages, follow-up" },
    { label: "Timeline", value: "2–3 weeks (Starter) · 4–6 weeks (Growth)" },
    { label: "Starts at", value: `${formatUsd(p.starter)}, fixed milestone pricing` },
    { label: "You own", value: "All code and content after the final milestone" },
  ],

  problems: {
    heading: "People want a price now. Does your website give them one?",
    intro: "Cleaning is a high-intent, low-patience search. The leaks are small and they add up fast.",
    items: [
      {
        title: "Quotes need a phone call",
        body: "Someone wants a deep clean before guests arrive on Saturday. Your site says “call for a quote.” The company down the road shows a price in thirty seconds and gets the booking.",
      },
      {
        title: "One-off cleans stay one-off",
        body: "The first clean goes well, but nobody offers a recurring schedule at the right moment. The client meant to book again and never did.",
      },
      {
        title: "You end up competing on price",
        body: "When the site doesn’t show that your team is insured, vetted and backed by a guarantee, the only thing left to compare is the hourly rate.",
      },
      {
        title: "Commercial enquiries have no path",
        body: "An office manager looking for a nightly contract lands on a page about bathrooms and ovens, and leaves to find a “commercial cleaning” site.",
      },
    ],
  },

  calculator: {
    heading: "What is a missed quote really worth?",
    intro:
      "A lost first clean is small. A lost recurring client isn’t. The defaults are examples — enter your own numbers to see both parts.",
    model: "recurring-clients",
    inputs: [
      { key: "missed", label: "Quote requests lost per month", default: 30, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Share that would have booked", default: 35, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average clean value", default: 180, min: 0, max: 10000, step: 10, prefix: "$" },
      { key: "recurring", label: "Share of new clients who go recurring (monthly)", default: 30, min: 0, max: 100, step: 1, suffix: "%" },
    ],
    howItWorks:
      "For one month of lost quotes: first cleans lost = quotes × share that would book × clean value. Recurring value lost = the clients who’d have gone monthly × clean value × 12 months. The total is both added together; the yearly figure repeats that for 12 months of lost quotes.",
  },

  framework: {
    heading: "How we build a cleaning website that fills the calendar",
    intro: "Four stages on every build. For a cleaning company, each one looks like this.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Show up for “house cleaning near me” in every neighborhood you cover.",
        example: "A useful page for each neighborhood or suburb you serve, plus separate pages for deep, move-out and commercial cleaning.",
      },
      {
        key: "trusted",
        title: "Trusted",
        body: "Let people feel safe letting your team into their home.",
        example: "Insured and background-checked badges (only if true), your satisfaction guarantee, team photos and Google reviews.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "A price and a booking in under a minute.",
        example: "An instant quote by bedrooms, bathrooms or square footage, with add-ons, that flows straight into booking.",
      },
      {
        key: "followed-up",
        title: "Followed-up",
        body: "Turn first cleans into regular clients without chasing.",
        example: "A recurring-schedule offer after the first clean, reminders before each visit, and a review request afterwards.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify cleaning website",
    items: [
      { title: "Instant quote calculator", body: "Configured to your real rates, room counts, square footage and add-ons, so the price shown is the price you charge." },
      { title: "Online booking", body: "Clients pick a date and time and book, through your scheduling tool or a custom flow." },
      { title: "Recurring sign-up", body: "Weekly, fortnightly or monthly schedules offered at checkout and again after the first clean." },
      { title: "Neighborhood pages", body: "Pages for the areas you serve, written with local detail rather than swapped city names." },
      { title: "Commercial path", body: "A separate route for offices and property managers, with a request-a-walkthrough form." },
      { title: "Follow-up automation", body: "Visit reminders, recurring offers and review requests that run without anyone remembering to send them." },
    ],
  },

  checklist: {
    heading: "What should a cleaning business website include?",
    answer:
      "A cleaning business website should show an instant price, let customers book online, offer a recurring schedule, and prove your team is trustworthy — with a separate path for commercial clients.",
    items: [
      "An instant quote by bedrooms, bathrooms or square footage",
      "Online booking with date and time selection",
      "Weekly, fortnightly and monthly recurring options",
      "Separate pages for standard, deep, move-in/out and commercial cleaning",
      "A page for each neighborhood or area you serve",
      "Insurance, background-check and guarantee details (only if true)",
      "Real Google reviews",
      "Team photos, not stock images",
      "A commercial enquiry form for offices and property managers",
      "Reminder and review-request automation",
      "LocalBusiness / HouseCleaning schema and a matching Google Business Profile",
    ],
  },

  comparison: {
    heading: "Template cleaning site vs. a custom Locallify build",
    rows: [
      { aspect: "Pricing", template: "“Call for a quote”", custom: "Instant quote configured to your rates" },
      { aspect: "Booking", template: "Contact form", custom: "Online booking with recurring options" },
      { aspect: "Repeat business", template: "Relies on memory", custom: "Automated recurring offer after the first clean" },
      { aspect: "Commercial clients", template: "Same page as residential", custom: "Dedicated commercial path" },
      { aspect: "Ownership", template: "Locked to the platform", custom: "You own the code and content" },
      { aspect: "Cost", template: "Low upfront, monthly fees", custom: `From ${formatUsd(p.starter)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: ["Quotes need a phone call", "One-off cleans never come back", "Competing on price alone", "No path for commercial enquiries"],
    after: ["A price in under a minute", "Recurring offers sent automatically", "Trust signals that justify your rates", "A dedicated commercial enquiry route"],
  },

  cost: {
    heading: "How much does a cleaning company website cost?",
    answer: `A custom cleaning company website from Locallify starts at ${formatUsd(p.starter)} for a Starter site with instant quotes and booking, ${formatUsd(p.growth)} for Growth with recurring automation and neighborhood pages, and ${formatUsd(p.commercial)}+ for commercial-focused builds.`,
    body: "Cost depends on how complex your pricing is, how many areas you serve, and whether we connect to booking software like Jobber, ZenMaid or Launch27. Hosting and ongoing SEO are covered by optional retainers.",
  },
  packages: [
    {
      name: "Starter",
      idealFor: "Growing residential cleaning teams",
      priceFrom: p.starter,
      includes: ["Instant quote calculator", "Online booking", "Core service pages", "Local SEO + schema"],
      timeline: "2–3 weeks",
    },
    {
      name: "Growth",
      idealFor: "Companies building a recurring client base",
      priceFrom: p.growth,
      includes: ["Everything in Starter", "Recurring sign-up + follow-up", "Neighborhood pages", "Review automation"],
      timeline: "4–6 weeks",
    },
    {
      name: "Commercial",
      idealFor: "Companies winning office and property contracts",
      priceFrom: p.commercial,
      openEnded: true,
      includes: ["Everything in Growth", "Commercial landing pages", "Walkthrough request flow", "CRM integration where APIs allow"],
      timeline: "Scoped on the discovery call",
    },
  ],

  fit: {
    forYou: [
      "Companies with a team, not a solo cleaner",
      "Businesses doing recurring residential or commercial work",
      "Owners ready to take more bookings",
    ],
    notForYou: [
      "You’re shopping for the cheapest possible site",
      "You can’t take on more bookings right now",
      "You don’t want to show prices online in any form",
    ],
  },

  proof: {
    portfolioSlugs: [],
    // TODO(owner): a clearly labelled "Concept" cleaning demo build is recommended.
  },

  audit: {
    painOptions: [
      { value: "no-instant-quote", label: "Quotes need a phone call" },
      { value: "no-recurring", label: "One-off cleans don’t repeat" },
      { value: "price-competition", label: "Competing on price" },
      { value: "commercial", label: "No commercial enquiries" },
      { value: "booking", label: "Booking is manual" },
      { value: "reviews", label: "Not enough reviews" },
    ],
  },

  faq: [
    { q: "Can the quote calculator use my own pricing?", a: "Yes. It’s configured to your rates, room counts, square footage and add-ons, so the price a customer sees is the price you charge." },
    { q: "Can it work with Jobber, ZenMaid or Launch27?", a: "Where those tools allow embedding or have an API, yes. We confirm what’s possible with your account on the discovery call before quoting." },
    { q: "Can customers pay for recurring cleans online?", a: "Yes, through your booking platform’s billing or Stripe subscriptions, depending on what you already use." },
    { q: "Should a cleaning company show prices online?", a: "For residential work, usually yes: people searching for a cleaner want a number fast. Commercial work is better handled with a walkthrough request, which we build as a separate path." },
    { q: "How long does a cleaning website take?", a: "Starter sites take 2–3 weeks and Growth builds 4–6 weeks. Commercial builds are scoped on the discovery call." },
    { q: "Do we own the website?", a: "Yes. You own 100% of the code and content after the final milestone. A retainer is optional." },
  ],

  relatedServices: ["web-app-development", "workflow-automation", "seo-geo-services"],
  updatedAt: "2026-09-27",
};
