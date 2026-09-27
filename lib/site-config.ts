/**
 * Single source of truth for brand, NAP, and contact data used across
 * metadata, JSON-LD, and page copy. Values verified against the Locallify
 * Google Business Profile — see locallify-seo-geo-fix-brief.md.
 */

export const SITE_URL = "https://www.locallifyagency.com";
export const SITE_NAME = "Locallify";
export const LEGAL_NAME = "Locallify Agency";

/**
 * GST registration number, shown in the footer, on /contact and in the terms
 * so Indian clients can check it on the GST portal and claim input tax
 * credit. Read from env so it lives in one place; renders nothing if unset.
 * Must also be set in the Vercel project env vars, since NEXT_PUBLIC_*
 * values are inlined at build time.
 * TODO(owner): if the GST portal lists a different legal name (for example
 * the proprietor's own name), show it next to "Locallify Agency" so the
 * two match when a visitor looks it up.
 */
export const GSTIN = process.env.NEXT_PUBLIC_GST_NUMBER?.trim() || "";

export const CONTACT = {
  email: "hello@locallifyagency.com",
  phone: "+916000163450",
  phoneDisplay: "+91 60001 63450",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916000163450",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916000163450"}`,
};

export const NAP = {
  streetAddress: "Fakirtilla, near NIT",
  addressLocality: "Silchar",
  addressRegion: "Assam",
  postalCode: "788010",
  addressCountry: "IN",
  full: "Fakirtilla, near NIT, P.S. NIT, Silchar, Cachar, Assam 788010, India",
  // Keyed to the street address (not the approximate geo pin below) so the
  // map and directions link land where the GBP listing does.
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent("Locallify, Fakirtilla, near NIT, Silchar, Assam 788010")}&output=embed`,
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Locallify, Fakirtilla, near NIT, Silchar, Assam 788010")}`,
  // TODO(owner): opening hours (matching the GBP) — shown on the page and
  // added to LocalBusiness JSON-LD as openingHoursSpecification once provided.
  // Approximate GBP pin — TODO(owner): verify against the exact Google Business Profile coordinates.
  geo: { latitude: 24.7564, longitude: 92.7985 },
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/locallifyagency/",
  facebook: "https://www.facebook.com/profile.php?id=61592029269964",
  instagram: "https://www.instagram.com/locallify.in/",
  twitter: "https://twitter.com/locallify",
  twitterHandle: "@locallify",
};

export const SAME_AS = [SOCIALS.linkedin, SOCIALS.facebook, SOCIALS.instagram, SOCIALS.twitter];

/**
 * Verified Google Business Profile rating. Only render this alongside
 * genuinely visible reviews — never as a bare number with no reviews on the
 * page (see brief §3b / §5).
 * TODO(owner): provide the direct GBP place URL to replace the Maps search
 * fallback below, and re-confirm the review count (it's shown on the page).
 */
export const GOOGLE_RATING = {
  value: 5.0,
  count: 27,
  profileUrl: "https://www.google.com/maps/search/?api=1&query=Locallify+Silchar",
};
