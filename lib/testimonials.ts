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
  verified: boolean;
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
      verified: true,
      source: p.$id && FALLBACK_PROJECT_IDS.has(p.$id) ? "fallback" : "sanity",
    }));
}

/** Reviews submitted directly via the /reviews page (Sanity `review` documents). */
export function testimonialsFromReviews(reviews: Review[]): TestimonialItem[] {
  return reviews.map((r) => ({
    id: r.$id || r.name,
    name: r.name,
    role: r.role || "Verified client",
    quote: r.review,
    rating: r.rating,
    verified: r.is_verified ?? true,
    source: r.$id && FALLBACK_REVIEW_IDS.has(r.$id) ? "fallback" : "sanity",
  }));
}

/** Case-study testimonials first (richer — name, company, photo), then standalone reviews, de-duped by author name across the whole combined list. */
export function mergeTestimonials(projects: Project[], reviews: Review[]): TestimonialItem[] {
  const seenNames = new Set<string>();

  return [...testimonialsFromProjects(projects), ...testimonialsFromReviews(reviews)].filter((testimonial) => {
    const name = testimonial.name.trim().toLowerCase();
    if (seenNames.has(name)) return false;
    seenNames.add(name);
    return true;
  });
}

/** True when at least one testimonial is genuinely CMS-sourced — the only case AggregateRating markup is valid (see brief §3b). */
export function hasVerifiedTestimonials(testimonials: TestimonialItem[]): boolean {
  return testimonials.some((t) => t.source !== "fallback");
}
