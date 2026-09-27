// Kept in its own module so client components (the Navbar) can import the
// flag without bundling every industry page's content.

/**
 * Launch switch for the /industries section.
 *
 * false (now): the pages build and are reachable at their URLs for review,
 * but they're `noindex`, left out of the sitemap, the main nav, the footer
 * and the service-page cross-links.
 *
 * TODO(owner): set to true once every 🔒 item is confirmed — package prices
 * (pricing.ts), US overlap hours (FAQs), and the free-audit
 * format/turnaround. Scope is website + its SEO/GEO/AEO only: no ads, legal
 * or compliance work, telephony, CRM or follow-up automation.
 */
export const INDUSTRIES_LIVE = false;
