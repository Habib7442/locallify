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
      "Dental website design built to fill your schedule: online booking, missed-call text-back, local SEO and AI-search visibility. Free lead-leak audit.",
  },
  card: {
    summary: "New-patient booking, missed-call text-back, and treatment pages that rank for implants, Invisalign and emergencies.",
  },

  hero: {
    eyebrow: "For dental practices · US",
    headline: "Turn “dentist near me” searches into booked appointments.",
    subhead:
      "A fast, custom practice website with online booking, missed-call text-back and local SEO — built so new patients find you and actually book.",
    bullets: [
      "Online booking for new-patient and emergency slots",
      "Automatic text-back when the front desk misses a call",
      "Local SEO and schema for every service and location",
      "Built to be understood by ChatGPT and Google AI answers",
    ],
    intro:
      "Dental website design is not about a prettier homepage. A new patient searching for a dentist near them decides in seconds whether to call, book, or go back to the results. Locallify builds dental practice websites around that moment: fast on a phone, clear about what you treat, and with a booking path that works when the front desk can’t pick up.",
  },

  atAGlance: [
    { label: "Built for", value: "General, cosmetic and multi-location dental practices" },
    { label: "Includes", value: "Booking, click-to-call, treatment pages, local SEO + schema" },
    { label: "Timeline", value: "2–3 weeks (Launch) · 4–6 weeks (Growth)" },
    { label: "Starts at", value: `${formatUsd(p.launch)}, fixed milestone pricing` },
    { label: "You own", value: "All code and content after the final milestone" },
  ],

  problems: {
    heading: "You’re already paying for new patients. Are they booking?",
    intro:
      "Most practices we talk to don’t have a traffic problem. They have leaks between the search and the chair.",
    items: [
      {
        title: "New-patient calls go to voicemail",
        body: "Between 9 and 11am the front desk is checking people in and answering insurance questions. A new patient who hits voicemail rarely leaves a message — they call the next practice on the map.",
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
        title: "Recall and reminders are manual",
        body: "Hygiene recall lives in a spreadsheet or a front-desk memory. No-shows and patients who drift away for two years add up quietly, and nobody sees the number.",
      },
    ],
  },

  calculator: {
    heading: "How much are missed new-patient calls costing you?",
    intro:
      "Enter your own numbers. The defaults are examples to show how the maths works, not dental industry averages.",
    model: "missed-leads",
    inputs: [
      { key: "missed", label: "Missed or unanswered new-patient calls per month", default: 30, min: 0, max: 1000, step: 1 },
      { key: "rate", label: "Share that would have booked", default: 40, min: 0, max: 100, step: 1, suffix: "%" },
      { key: "value", label: "Average first-year value of a new patient", default: 800, min: 0, max: 100000, step: 50, prefix: "$" },
    ],
    howItWorks:
      "Monthly revenue lost = missed calls × share that would have booked × first-year patient value. Yearly = monthly × 12. First-year value should include the exam, cleaning, X-rays and any treatment a typical new patient accepts in year one.",
  },

  framework: {
    heading: "How we build a dental website that fills the schedule",
    intro:
      "Every build follows the same four stages. What changes for a dental practice is what goes inside each one.",
    steps: [
      {
        key: "found",
        title: "Found",
        body: "Local SEO, a Google Business Profile that matches the site, and schema that tells search engines exactly what you treat and where.",
        example: "Separate implant, Invisalign and emergency-dentist pages, each marked up as a Dentist service with your address and hours.",
      },
      {
        key: "trusted",
        title: "Trusted",
        body: "The proof a nervous patient looks for before they commit to a chair.",
        example: "Doctor bios with credentials, real reviews, a smile gallery with consented photos, and insurance information that’s easy to find.",
      },
      {
        key: "booked",
        title: "Booked",
        body: "The shortest path from “I need a dentist” to an appointment request.",
        example: "New-patient booking and an emergency-slot request form, with click-to-call and an automatic text-back when a call is missed.",
      },
      {
        key: "followed-up",
        title: "Followed-up",
        body: "Automation for the work the front desk never has time for.",
        example: "Appointment reminders, hygiene recall, and a review request after each visit.",
      },
    ],
  },

  features: {
    heading: "What you get with a Locallify dental website",
    items: [
      { title: "New-patient booking", body: "A booking flow for new patients and emergencies, embedded from your scheduling tool or built as a secure request form." },
      { title: "Missed-call text-back", body: "When a call isn’t answered, the caller gets a text with a booking link within a minute, so the conversation doesn’t end at voicemail." },
      { title: "Treatment pages that rank", body: "One page per high-value treatment, written in plain language, with pricing guidance where you’re comfortable sharing it." },
      { title: "Local SEO + schema", body: "Dentist and MedicalBusiness structured data, consistent name/address/phone, and location pages for each office." },
      { title: "AI-search visibility", body: "Clear, answer-first content and entity markup so ChatGPT, Perplexity and Google AI Overviews can describe your practice accurately." },
      { title: "Fast on real phones", body: "Next.js with a Lighthouse 95+ target on mobile. Patients on a weak signal still see your booking button first." },
    ],
  },

  checklist: {
    heading: "What should a dental practice website include?",
    answer:
      "A dental practice website should let a new patient book in under a minute, show what you treat on dedicated pages, and prove you’re trustworthy with real reviews and doctor credentials — while loading fast on a phone.",
    items: [
      "Online booking for new patients, visible above the fold on mobile",
      "Click-to-call and a text-back for missed calls",
      "A separate page for each high-value treatment (implants, Invisalign, emergency)",
      "Doctor and team bios with credentials and photos",
      "Insurance and payment options in plain language",
      "Real patient reviews, pulled from Google",
      "A smile gallery using consented patient photos",
      "Location pages with hours, parking and a map for each office",
      "Dentist / MedicalBusiness schema and a matching Google Business Profile",
      "An emergency-dentist path for same-day requests",
      "Accessibility basics: readable text, contrast, and keyboard-friendly forms",
    ],
  },

  comparison: {
    heading: "Template dental site vs. a custom Locallify build",
    rows: [
      { aspect: "Mobile speed", template: "Heavy theme, often 4s+ on mobile", custom: "Lighthouse 95+ target on mobile" },
      { aspect: "Booking", template: "Contact form or phone number only", custom: "New-patient + emergency booking, text-back on missed calls" },
      { aspect: "Treatment pages", template: "One “Services” page", custom: "A ranking page per high-value treatment" },
      { aspect: "Schema / AI search", template: "Usually none", custom: "Dentist + Service schema, answer-first content" },
      { aspect: "Ownership", template: "Locked to the platform or agency", custom: "You own the code and content" },
      { aspect: "Cost", template: "Low upfront, monthly platform fees", custom: `From ${formatUsd(p.launch)} fixed, optional retainer` },
    ],
  },

  beforeAfter: {
    before: [
      "New-patient calls go to voicemail at peak hours",
      "Generic template that looks dated on mobile",
      "No dedicated treatment pages",
      "Reminders and recall handled manually",
    ],
    after: [
      "24/7 booking and an automatic text-back on missed calls",
      "Fast, custom site that reflects the care you give",
      "Implant, Invisalign and emergency pages that can rank",
      "Automated reminders, recall and review requests",
    ],
  },

  cost: {
    heading: "How much does a dental website cost?",
    answer: `A custom dental website from Locallify starts at ${formatUsd(p.launch)} for a 6–8 page practice site with booking, ${formatUsd(p.growth)} with treatment pages and automation, and ${formatUsd(p.multi)}+ for multi-location groups. Prices are fixed per milestone.`,
    body: "What moves the price is scope, not hours: the number of treatment and location pages, whether booking is embedded or custom-built, and whether we integrate with your practice management software. Ongoing hosting, updates and SEO are covered by optional Care, Growth or Scale retainers.",
  },
  packages: [
    {
      name: "Practice Launch",
      idealFor: "Single-location practices replacing a dated site",
      priceFrom: p.launch,
      includes: ["6–8 pages", "Booking link + click-to-call", "Local SEO foundation + schema", "Google Business Profile alignment"],
      timeline: "2–3 weeks",
    },
    {
      name: "Practice Growth",
      idealFor: "Practices that want more implant, ortho and cosmetic cases",
      priceFrom: p.growth,
      includes: ["Everything in Launch", "Dedicated treatment pages", "Missed-call text-back", "Review-request automation"],
      timeline: "4–6 weeks",
    },
    {
      name: "Multi-location",
      idealFor: "Groups with several offices or chairs",
      priceFrom: p.multi,
      openEnded: true,
      includes: ["Everything in Growth", "A page per location", "Custom booking flow", "CRM / PMS integration where APIs allow"],
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
      { value: "missed-calls", label: "Missed calls / voicemail" },
      { value: "no-online-booking", label: "No online booking" },
      { value: "treatment-pages", label: "Treatment pages don’t rank" },
      { value: "no-shows-recall", label: "No-shows and recall" },
      { value: "dated-site", label: "Site looks dated on mobile" },
      { value: "reviews", label: "Not enough reviews" },
    ],
  },

  faq: [
    {
      q: "Can you connect to our practice management software?",
      a: "Where your software offers an API or a booking integration, yes. Otherwise we use a secure booking-request flow that your front desk confirms. We check your specific system on the discovery call before quoting.",
    },
    {
      // TODO(owner): 🔒 confirm this HIPAA wording with counsel before INDUSTRIES_LIVE.
      q: "Are the website forms HIPAA-compliant?",
      a: "Our forms collect contact and appointment details only, not medical history. If you need patient health information collected online, we scope a HIPAA-compliant vendor for that part rather than building it into the website.",
    },
    {
      q: "How long does a dental website take to build?",
      a: "Practice Launch sites take 2–3 weeks. Practice Growth builds, with treatment pages and automation, take 4–6 weeks. Multi-location timelines are set on the discovery call.",
    },
    {
      q: "Do we own the website?",
      a: "Yes. You own 100% of the code and content after the final milestone. We can maintain it on a retainer, but it isn’t locked to us.",
    },
    {
      q: "Will a new website get us more new patients on its own?",
      a: "It removes the leaks — missed calls, no booking path, invisible treatments — but it can’t fix a front desk that doesn’t follow up. The best results come when the practice answers booking requests the same day.",
    },
    {
      q: "Can you move our existing content and keep our Google rankings?",
      a: "Yes. We map every existing URL to its new page with permanent redirects, keep what already ranks, and resubmit the sitemap to Google Search Console at launch.",
    },
    {
      // TODO(owner): 🔒 confirm the overlap hours you'll commit to.
      q: "You’re based in India. How does that work for a US practice?",
      a: "You get a fixed milestone price in USD, weekly progress updates, and calls scheduled in your morning. You own the code and can host it anywhere.",
    },
  ],

  relatedServices: ["web-app-development", "seo-geo-services", "workflow-automation"],
  updatedAt: "2026-09-27",
};
