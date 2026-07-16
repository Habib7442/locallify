import { reviewService } from "@/lib/cms";
import ReviewPageClient from "@/components/ReviewPageClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Client Reviews | Locallify",
  description: "Real feedback from the local legends we serve. Read authentic client testimonials and see how Locallify helps businesses dominate local search and attract more customers.",
});

export const revalidate = 3600; // Revalidate every hour

export default async function ReviewsPage() {
  const initialReviews = await reviewService.getPublishedReviews();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Locallify Client Reviews",
    "description": "Feedback and testimonials from local business owners working with Locallify.",
    "publisher": {
      "@type": "Organization",
      "name": "Locallify"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReviewPageClient initialReviews={initialReviews} />
    </>
  );
}
