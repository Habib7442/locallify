import type { IndustryPage } from "./types";
import { INDUSTRY_PRICES, formatUsd } from "./pricing";

const p = INDUSTRY_PRICES.dental;

export const dental: IndustryPage = {
  slug: "dental-website-design",
  niche: "Dentists",
  audience: "dental practice owners",
  keyword: "dental website design",
  audienceType: "Dental practices",
  serviceName: "Dental Website Design",
  seo: {
    title: "Dental Website Design & Patient Booking | Locallify",
    description:
      "Dental website design built to fill your schedule: 24/7 online booking, treatment pages that rank, local SEO and AI-search visibility. Free audit.",
  },
  card: {
    summary: "24/7 new-patient booking, fast mobile pages, and treatment pages that rank for implants, Invisalign and emergencies.",
  },

  banner: {
    src: "/industries/dental-website-design.webp",
    alt: "A dentist treating a young patient in a dental chair",
    credit: "Michal Jarmoluk / StockSnap (CC0)",
    creditUrl: "https://stocksnap.io/photo/dentist-orthodontist-6HV52GTPO3",
    position: "center 40%",
  },

  hero: {
    eyebrow: "For dental practices · US",
    headline: "Turn “dentist near me” searches into booked appointments.",
    subhead:
      "A fast, custom practice website with 24/7 online booking and treatment pages that rank — built so new patients find you and book without waiting on the phone.",
    bullets: [
      "Online booking for new-patient and emergency slots, day or night",
      "A dedicated page for every high-value treatment",
      "Local SEO and schema for every service and location",
      "Built to be understood by ChatGPT and Google AI answers",
    ],
    intro:
      "Dental website design is not about a prettier homepage. A new patient searching for a dentist near them decides in seconds whether to book, call, or go back to the results. Locallify builds dental practice websites around that moment: fast on a phone, clear about what you treat, and with a booking path that works at 10pm when nobody is at the front desk.",
  },

  atAGlance: [
    { label: "Built for", value: "General, cosmetic and multi-location dental practices" },
    { label: "Includes", value: "Online booking, treatment pages, local SEO, GEO + AEO" },
    { label: "Timeline", value: "2–3 weeks (Launch) · 4–6 weeks (Growth)" },
    { label: "Starts at", value: `${formatUsd(p.launch)}, fixed milestone pricing` },
    { label: "You own", value: "All code and content after the final milestone" },
  ],

  problems: {
    heading: "You’re already paying for new patients. Are they booking?",
    intro:
      "Most practices we talk to don’t have a traffic problem. They have leaks between the search and the chair — and most of them are on the website.",
    items: [
      {
        title: "The only way to book is a phone call",
        body: "Between 9 and 11am the front desk is checking people in. A new patient who can’t get through — or is searching at 10pm — goes to the practice whose website lets them pick a time.",
      },
      {
        title: "The site looks dated on a phone",
        body: "Patients can’t judge your clinical skill from a search result, so they judge the website. Tiny text, a slow carousel and a PDF new-patient form read as “this office is behind.”",
      },
      {
        title: "High-value treatments have no page",
        body: "Implants, Invisalign, veneers and emergency care each deserve their own page. When they’re a bullet on a “Services” list, Google has nothing to rank and patients looking for that treatment never see you.",
      },
      {
        title: "AI answers recommend someone else",
        body: "More patients now ask ChatGPT or Google’s AI Overview “who’s a good dentist near me for implants?” Those answers favour practices whose websites state clearly what they do, where, and for whom.",
      },
    ],
  },

  calculator: {
    heading: "How much are unbooked new patients costing you?",
    intro:
      "Enter your own numbers. The defaults are examples to show how the maths works, not dental industry averages.",
    model: "missed-leads",
    inputs: [
      { key: "missed", label: "New patients per month who called and didn’t get through, or couldn’t book", default: 30, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Share that would have booked", default: 40, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average first-year value of a new patient", default: 800, min: 0, max: 100000, step: 50, prefix: "$" },
    ],
    howItWorks:
      "Monthly revenue lost = unbooked new patients × share that would have booked × first-year patient value. Yearly = monthly × 12. First-year value should include the exam, cleaning, X-rays and any treatment a typical new patient accepts in year one.",
  },

  framework: {
    heading: "How we build a dental website that fills the schedule",
    intro:
      "Every build follows the same four stages. What changes for a dental practice is what goes inside each one.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Local SEO, a website that matches your Google Business Profile, and schema that tells search engines exactly what you treat and where.",
        example: "Separate implant, Invisalign and emergency-dentist pages, each marked up as a Dentist service with your address and hours.",
      },
      {
        key: "trusted",
        title: "Trusted",
        body: "The proof a nervous patient looks for before they commit to a chair.",
        example: "Doctor bios with credentials, your Google reviews, a smile gallery with consented photos, and insurance information that’s easy to find.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "The shortest path from “I need a dentist” to an appointment request, on any device, at any hour.",
        example: "New-patient booking and an emergency-slot request, plus click-to-call on every page for people who’d rather phone.",
      },
      {
        key: "measured",
        title: "Measured",
        body: "Search Console and analytics from day one, so you can see which pages bring bookings.",
        example: "Track which treatment pages get booking requests, and keep improving SEO, GEO and AEO through an optional retainer.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify dental website",
    items: [
      { title: "24/7 new-patient booking", body: "Your online-booking widget embedded on every page, or a booking-request form that goes straight to your front desk’s inbox." },
      { title: "Treatment pages that rank", body: "One page per high-value treatment, written in plain language, with pricing guidance where you’re comfortable sharing it." },
      { title: "Local SEO + schema", body: "Dentist and MedicalBusiness structured data, consistent name/address/phone, and location pages for each office." },
      { title: "GEO + AEO", body: "Answer-first content and entity markup so ChatGPT, Perplexity and Google AI Overviews can describe your practice accurately." },
      { title: "Trust, built in", body: "Doctor bios, credentials, reviews and a consented smile gallery — the things patients check before booking." },
      { title: "Fast on real phones", body: "Next.js with a Lighthouse 95+ target on mobile. Patients on a weak signal still see your booking button first." },
    ],
  },

  checklist: {
    heading: "What should a dental practice website include?",
    answer:
      "A dental practice website should let a new patient book in under a minute, show what you treat on dedicated pages, and prove you’re trustworthy with real reviews and doctor credentials — while loading fast on a phone.",
    items: [
      "Online booking for new patients, visible above the fold on mobile",
      "Click-to-call on every page",
      "A separate page for each high-value treatment (implants, Invisalign, emergency)",
      "Doctor and team bios with credentials and photos",
      "Insurance and payment options in plain language",
      "Real patient reviews, pulled from Google",
      "A smile gallery using consented patient photos",
      "Location pages with hours, parking and a map for each office",
      "Dentist / MedicalBusiness schema and a matching Google Business Profile",
      "An emergency-dentist path for same-day requests",
      "An FAQ that answers cost, pain and insurance questions directly",
      "Accessibility basics: readable text, contrast, and keyboard-friendly forms",
    ],
  },

  comparison: {
    heading: "Template dental site vs. a custom Locallify build",
    rows: [
      { aspect: "Mobile speed", template: "Heavy theme, often 4s+ on mobile", custom: "Lighthouse 95+ target on mobile" },
      { aspect: "Booking", template: "Phone number or contact form", custom: "New-patient + emergency booking, 24/7" },
      { aspect: "Treatment pages", template: "One “Services” page", custom: "A ranking page per high-value treatment" },
      { aspect: "Schema / AI search", template: "Usually none", custom: "Dentist + Service schema, answer-first content" },
      { aspect: "Ownership", template: "Locked to the platform or agency", custom: "You own the code and content" },
      { aspect: "Cost", template: "Low upfront, monthly platform fees", custom: `From ${formatUsd(p.launch)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: [
      "Booking only by phone, during office hours",
      "Generic template that looks dated on mobile",
      "No dedicated treatment pages",
      "Invisible in AI answers",
    ],
    after: [
      "24/7 online booking from any device",
      "Fast, custom site that reflects the care you give",
      "Implant, Invisalign and emergency pages that can rank",
      "Answer-first content that AI assistants can cite",
    ],
  },

  cost: {
    heading: "How much does a dental website cost?",
    answer: `A custom dental website from Locallify starts at ${formatUsd(p.launch)} for a 6–8 page practice site with online booking, ${formatUsd(p.growth)} with treatment pages and GEO/AEO content, and ${formatUsd(p.multi)}+ for multi-location groups. Prices are fixed per milestone.`,
    body: "What moves the price is scope, not hours: the number of treatment and location pages, and whether booking is an embedded widget or a custom request form. Ongoing hosting, updates and SEO/GEO/AEO work are covered by optional Care, Growth or Scale retainers.",
  },
  packages: [
    {
      name: "Practice Launch",
      idealFor: "Single-location practices replacing a dated site",
      priceFrom: p.launch,
      includes: ["6–8 pages", "Online booking + click-to-call", "Local SEO foundation + schema", "Google Business Profile alignment"],
      timeline: "2–3 weeks",
    },
    {
      name: "Practice Growth",
      idealFor: "Practices that want more implant, ortho and cosmetic cases",
      priceFrom: p.growth,
      includes: ["Everything in Launch", "Dedicated treatment pages", "Answer-first FAQ + GEO/AEO content", "Smile gallery + reviews section"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Groups with several offices",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Growth", "A page per location", "Per-location booking", "Location schema for every office"],
      timeline: "Scoped on the discovery call",
    },
  ],

  fit: {
    forYou: [
      "Established practices already spending on ads or directories",
      "Practices that want more implant, ortho and cosmetic cases",
      "Multi-chair or multi-location groups",
    ],
    notForYou: [
      "You want the cheapest template site available",
      "Nobody can answer booking requests within a business day",
      "You expect a website alone to fix front-desk process problems",
    ],
  },

  proof: {
    portfolioSlugs: ["oral-dental-care-clinic-silchar", "the-ent-clinic-silchar", "metro-city-diagnostics-silchar"],
    label: "Healthcare builds",
    note: "These are real clinics we built for in India — including a dental practice. The booking, schema and speed work is the same work we’d do for your practice.",
  },

  audit: {
    painOptions: [
      { value: "phone-only-booking", label: "Booking only by phone" },
      { value: "no-online-booking", label: "No online booking" },
      { value: "treatment-pages", label: "Treatment pages don’t rank" },
      { value: "invisible-in-ai", label: "Not showing up in AI answers" },
      { value: "dated-site", label: "Site looks dated on mobile" },
      { value: "slow-site", label: "Site is slow" },
    ],
  },

  faq: [
    {
      q: "Can online booking work with our scheduling software?",
      a: "If your scheduling software has an online-booking widget or link, we embed it on the site so patients book straight into your calendar. If it doesn’t, we build a booking-request form that goes to your front desk’s inbox for confirmation.",
    },
    {
      q: "Do you handle HIPAA compliance?",
      a: "No. We build the website, not compliance programmes, and we don’t give legal advice. Our forms are built to collect contact and appointment details only, not medical history; if you need patient health information online, use a HIPAA-compliant intake tool and we’ll link to it from the site.",
    },
    {
      q: "How long does a dental website take to build?",
      a: "Practice Launch sites take 2–3 weeks. Practice Growth builds, with treatment pages and GEO/AEO content, take 4–6 weeks. Multi-location timelines are set on the discovery call.",
    },
    {
      q: "Do we own the website?",
      a: "Yes. You own 100% of the code and content after the final milestone. We can maintain it on a retainer, but it isn’t locked to us.",
    },
    {
      q: "Do you run our Google Ads or social media?",
      a: "No. We build the website and handle its SEO, GEO and AEO. If you run ads, a fast site with clear booking makes every paid click worth more.",
    },
    {
      q: "Will a new website get us more new patients on its own?",
      a: "It removes the website leaks — no online booking, invisible treatments, a slow mobile site — but it can’t fix a front desk that doesn’t follow up. The best results come when the practice answers booking requests the same day.",
    },
    {
      q: "Can you move our existing content and keep our Google rankings?",
      a: "Yes. We map every existing URL to its new page with permanent redirects, keep what already ranks, and resubmit the sitemap to Google Search Console at launch.",
    },
    {
      q: "You’re based in India. How does that work for a US practice?",
      a: "You get a fixed milestone price in USD, weekly progress updates, and calls between 7 and 10am US Eastern. You own the code and can host it anywhere.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services"],
  updatedAt: "2026-09-27",
};
