import { projectService, reviewService } from "@/lib/cms";
import ReviewPageClient from "@/components/ReviewPageClient";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/structured-data";
import { hasVerifiedTestimonials, mergeTestimonials } from "@/lib/testimonials";

export const metadata = constructMetadata({
  title: "Client Reviews | Locallify",
  description: "Real feedback from clients we've built for. Read verified testimonials and see how Locallify helps businesses launch and get found.",
  alternates: { canonical: "/reviews" },
});

export const revalidate = 3600; // Revalidate every hour

export default async function ReviewsPage() {
  let initialReviews: Awaited<ReturnType<typeof reviewService.getPublishedReviews>> = [];
  let projects: Awaited<ReturnType<typeof projectService.getPublicProjects>> = [];

  const [reviewsResult, projectsResult] = await Promise.allSettled([
    reviewService.getPublishedReviews(),
    projectService.getPublicProjects('completed'),
  ]);
  if (reviewsResult.status === 'fulfilled') initialReviews = reviewsResult.value;
  if (projectsResult.status === 'fulfilled') projects = projectsResult.value;

  const testimonials = mergeTestimonials(projects, initialReviews);

  // AggregateRating is only valid when at least one testimonial is
  // genuinely CMS-sourced (not static fallback copy) — see brief §3b and
  // Google's guidance against self-serving ratings with no real reviews.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Locallify Client Reviews",
        "description": "Feedback and testimonials from clients working with Locallify.",
        "url": `${SITE_URL}/reviews`,
        "publisher": { "@id": `${SITE_URL}/#organization` },
      },
      localBusinessJsonLd({ includeAggregateRating: hasVerifiedTestimonials(testimonials) }),
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Reviews", path: "/reviews" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReviewPageClient testimonials={testimonials} />
    </>
  );
}
