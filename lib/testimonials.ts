import { Project, Review } from "./types";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  photo?: string;
  quote: string;
  rating: number;
  verified: boolean;
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
  }));
}

/** Case-study testimonials first (richer — name, company, photo), then standalone reviews, de-duped by author name. */
export function mergeTestimonials(projects: Project[], reviews: Review[]): TestimonialItem[] {
  const fromProjects = testimonialsFromProjects(projects);
  const seenNames = new Set(fromProjects.map((t) => t.name.toLowerCase()));
  const fromReviews = testimonialsFromReviews(reviews).filter((t) => !seenNames.has(t.name.toLowerCase()));
  return [...fromProjects, ...fromReviews];
}
