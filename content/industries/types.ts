/**
 * Content model for /industries/<slug> landing pages. The page template is
 * shared; every string here must be niche-specific (see the spec's "no
 * near-duplicate pages" rule).
 */

export type CalculatorModelId = "missed-leads" | "repeat-visits" | "recurring-clients";

export interface CalculatorInput {
  key: string;
  label: string;
  /** Example value, not an industry statistic — the UI labels it as such. */
  default: number;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export interface IndustryPackage {
  name: string;
  idealFor: string;
  /** USD starting price. 🔒 Owner-confirm — set in content/industries/pricing.ts. */
  priceFrom: number;
  /** Shows "+" after the price for open-ended tiers. */
  openEnded?: boolean;
  includes: string[];
  timeline: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface IndustryPage {
  slug: string;
  /** Short name used in cards and the "Also serving" row, e.g. "Dentists". */
  niche: string;
  /** e.g. "dental practice owners" */
  audience: string;
  /** Primary keyword cluster, e.g. "dental website design". */
  keyword: string;
  /** schema.org BusinessAudience.audienceType */
  audienceType: string;
  serviceName: string;
  seo: { title: string; description: string };
  card: { summary: string };

  /** Banner photo that shows the niche at a glance. Stock (CC0), never presented as client work. */
  banner: {
    src: string;
    alt: string;
    credit: string;
    creditUrl: string;
    /** object-position for the crop, e.g. "center 30%". */
    position?: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    bullets: string[];
    /** First ~100 words: must contain the primary keyword. */
    intro: string;
  };
  atAGlance: { label: string; value: string }[];

  problems: { heading: string; intro: string; items: { title: string; body: string }[] };

  calculator: {
    heading: string;
    intro: string;
    model: CalculatorModelId;
    inputs: CalculatorInput[];
    /** Server-rendered explanation of how the number is worked out. */
    howItWorks: string;
  };

  framework: {
    heading: string;
    intro: string;
    steps: { key: "found" | "trusted" | "booked" | "measured"; title: string; body: string; example: string }[];
  };

  features: { heading: string; items: { title: string; body: string }[] };

  checklist: { heading: string; answer: string; items: string[] };

  comparison: {
    heading: string;
    rows: { aspect: string; template: string; custom: string }[];
  };

  beforeAfter: { before: string[]; after: string[] };

  cost: { heading: string; answer: string; body: string };
  packages: IndustryPackage[];

  fit: { forYou: string[]; notForYou: string[] };

  proof: {
    /** Real Locallify portfolio slugs. Empty → "Our standards" block. */
    portfolioSlugs: string[];
    label?: string;
    note?: string;
  };

  audit: {
    /** "Where are you losing the most jobs?" options, niche-specific. */
    painOptions: { value: string; label: string }[];
  };

  faq: FaqItem[];

  /** Services this niche page links to (slugs under /services). */
  relatedServices: string[];

  /** Last content review — shown on the page and used as dateModified. */
  updatedAt: string;
}
