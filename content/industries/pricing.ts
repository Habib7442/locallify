/**
 * All industry-page prices live here so they can be changed in one place.
 * Values come from the niche spec's drafts.
 *
 * TODO(owner): 🔒 confirm every name and USD price before INDUSTRIES_LIVE is
 * switched on (content/industries/index.ts). These are shown on the page and
 * repeated in the Service/Offer JSON-LD, so both always match.
 */
export const INDUSTRY_PRICES = {
  dental: { launch: 1800, growth: 3500, multi: 6000 },
  medSpa: { studio: 2000, signature: 4000, multi: 7000 },
  roofing: { local: 1800, growth: 3500, multi: 6000 },
  cleaning: { starter: 1500, growth: 3000, commercial: 5000 },
} as const;

export function formatUsd(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}
