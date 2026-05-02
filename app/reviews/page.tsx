import { reviewService } from "@/lib/appwrite-service";
import ReviewPageClient from "@/components/ReviewPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Locallify",
  description: "Read what our clients say about working with Locallify and share your own experience.",
};

export default async function ReviewsPage() {
  const initialReviews = await reviewService.getPublishedReviews();

  return <ReviewPageClient initialReviews={initialReviews} />;
}
