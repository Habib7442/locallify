// Kept in its own module so client components (the Navbar) can import the
// flag without bundling every industry page's content.

/**
 * Launch switch for the /industries section.
 *
 * false (now): the pages build and are reachable at their URLs for review,
 * but they're `noindex`, left out of the sitemap, the main nav, the footer
 * and the service-page cross-links.
 *
 * TODO(owner): set to true once package prices are confirmed (pricing.ts).
 * Confirmed 27 Sep 2026: calls 7–10am US Eastern; free audit is a ~10-minute
 * video delivered within 48 hours. Scope is website + its SEO/GEO/AEO only: no ads, legal
 * or compliance work, telephony, CRM or follow-up automation.
 */
export const INDUSTRIES_LIVE = false;
