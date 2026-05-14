import { reviewService } from "@/lib/appwrite-service";
import ReviewPageClient from "@/components/ReviewPageClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Client Reviews | Locallify",
  description: "Real feedback from the local legends we serve. Read what our clients say about working with Locallify.",
});

export const revalidate = 3600; // Revalidate every hour

export default async function ReviewsPage() {
  const initialReviews = await reviewService.getPublishedReviews();

  return <ReviewPageClient initialReviews={initialReviews} />;
}
