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
 * (pricing.ts), HIPAA wording (dental FAQ), Google Ads answer (roofing FAQ),
 * US overlap hours (FAQs), and the free-audit format/turnaround.
 */
export const INDUSTRIES_LIVE = false;
