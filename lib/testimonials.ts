import { Project, Review } from "./types";
import { fallbackProjects } from "./data/case-studies";
import { fallbackReviews } from "./data/reviews";

// Fixed IDs baked into the static fallback files — used to tell "genuine
// CMS-sourced" testimonials apart from statically-shipped placeholder
// content, so structured data never claims a rating backed by fallback copy.
const FALLBACK_PROJECT_IDS = new Set(fallbackProjects.map((p) => p.$id));
const FALLBACK_REVIEW_IDS = new Set(fallbackReviews.map((r) => r.$id));

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  photo?: string;
  quote: string;
  rating: number;
  /** True only when the quote links to a public source (e.g. a Google review). */
  verified: boolean;
  sourceUrl?: string;
  /** 'sanity' = live CMS content; 'fallback' = static placeholder shipped with the site. */
  source: "sanity" | "fallback";
}

/** Real client testimonials pulled from finished case studies — name, logo/photo, and quote all come from the project record. */
export function testimonialsFromProjects(projects: Project[]): TestimonialItem[] {
  return projects
    .filter((p) => p.testimonial?.testimonial)
    .map((p) => ({
      id: p.$id || p.slug,
      name: p.testimonial!.clientName,
      role: [p.testimonial!.designation, p.testimonial!.company].filter(Boolean).join(" · "),
      photo: p.testimonial!.photo,
      quote: p.testimonial!.testimonial,
      rating: p.testimonial!.rating || 5,
      verified: Boolean(p.testimonial!.sourceUrl),
      sourceUrl: p.testimonial!.sourceUrl,
      source: p.$id && FALLBACK_PROJECT_IDS.has(p.$id) ? "fallback" : "sanity",
    }));
}

/** Reviews submitted directly via the /reviews page (Sanity `review` documents). */
export function testimonialsFromReviews(reviews: Review[]): TestimonialItem[] {
  return reviews.map((r) => ({
    id: r.$id || r.name,
    name: r.name,
    role: r.role || "",
    quote: r.review,
    rating: r.rating,
    verified: Boolean(r.sourceUrl),
    sourceUrl: r.sourceUrl,
    source: r.$id && FALLBACK_REVIEW_IDS.has(r.$id) ? "fallback" : "sanity",
  }));
}

const normalize = (text: string) => text.trim().toLowerCase().replace(/\s+/g, " ");

/**
 * Case-study testimonials first (richer — name, company, photo), then
 * standalone reviews, de-duped by author name and by quote text. A duplicate
 * never costs us a public source link:
 * - same quote: keep the earlier entry and take the later one's sourceUrl
 *   (the source backs that exact text);
 * - same author, different quote: if only the later entry is sourced, it
 *   replaces the earlier one (borrowing its photo/role), since a source URL
 *   must never be attached to words it doesn't contain.
 */
export function mergeTestimonials(projects: Project[], reviews: Review[]): TestimonialItem[] {
  const merged: TestimonialItem[] = [];
  const indexByName = new Map<string, number>();
  const indexByQuote = new Map<string, number>();

  const remember = (item: TestimonialItem, index: number) => {
    indexByName.set(normalize(item.name), index);
    indexByQuote.set(normalize(item.quote), index);
  };

  for (const item of [...testimonialsFromProjects(projects), ...testimonialsFromReviews(reviews)]) {
    const quoteIndex = indexByQuote.get(normalize(item.quote));
    const nameIndex = indexByName.get(normalize(item.name));

    if (quoteIndex !== undefined) {
      const existing = merged[quoteIndex];
      if (!existing.sourceUrl && item.sourceUrl) {
        merged[quoteIndex] = { ...existing, sourceUrl: item.sourceUrl, verified: true };
      }
      continue;
    }

    if (nameIndex !== undefined) {
      const existing = merged[nameIndex];
      if (!existing.sourceUrl && item.sourceUrl) {
        merged[nameIndex] = {
          ...item,
          name: existing.name,
          photo: item.photo || existing.photo,
          role: item.role || existing.role,
        };
        remember(merged[nameIndex], nameIndex);
      }
      continue;
    }

    merged.push(item);
    remember(item, merged.length - 1);
  }

  return merged;
}
