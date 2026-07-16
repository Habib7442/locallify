'use client';

import React from "react";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { reviewService } from "@/lib/cms";
import { Review } from "@/lib/types";

export default function ReviewsContainer() {
  const [reviews, setReviews] = React.useState<Review[]>([]);

  React.useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviewService.getPublishedReviews(10);
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return <ReviewsMarquee reviews={reviews} />;
}
