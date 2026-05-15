import React from "react";
import { Star, User, Quote } from "lucide-react";
import { Review } from "@/lib/types";

interface ReviewsMarqueeProps {
  reviews: Review[];
}

export default function ReviewsMarquee({ reviews }: ReviewsMarqueeProps) {
  if (!reviews || reviews.length === 0) return null;

  // For the infinite marquee to work smoothly, we duplicate the reviews.
  const marqueeReviews = reviews.length === 1 ? reviews : [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-accent-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-display italic tracking-tighter text-text-primary uppercase leading-none">
          Client <span className="text-accent-primary">Success Stories</span>
        </h2>
      </div>

      {reviews.length === 1 ? (
        <div className="container mx-auto px-6 flex justify-center">
          <ReviewCard item={reviews[0]} />
        </div>
      ) : (
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Fades for Marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

          <div
            className="flex gap-8 whitespace-nowrap py-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ 
              animationDuration: `${20 + reviews.length * 2}s`,
            }}
          >
            {marqueeReviews.map((item, idx) => (
              <ReviewCard key={`${item.$id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ReviewCard({ item }: { item: Review }) {
  return (
    <div className="inline-block w-[350px] md:w-[450px] p-8 md:p-10 bg-bg-surface border border-border-subtle shadow-xl shadow-accent-primary/[0.03] relative overflow-hidden group/card shrink-0 whitespace-normal transition-all hover:border-accent-primary/20">
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity">
        <Quote size={60} className="text-text-primary" />
      </div>
      
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < item.rating ? "fill-accent-primary text-accent-primary" : "text-border-strong"}`} 
          />
        ))}
      </div>

      <p className="text-lg text-text-secondary font-medium leading-relaxed italic mb-8 line-clamp-3 relative z-10">
        "{item.review}"
      </p>

      <div className="flex items-center gap-4 border-t border-border-subtle pt-6">
        <div className="w-12 h-12 bg-bg-surface border border-border-subtle flex items-center justify-center group-hover/card:bg-accent-primary group-hover/card:border-accent-primary transition-all duration-300">
          <User className="w-6 h-6 text-text-muted group-hover/card:text-bg-primary" />
        </div>
        <div>
          <h4 className="font-sans font-bold uppercase tracking-tight text-sm leading-none mb-1 text-text-primary">{item.name}</h4>
          <p className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.2em]">Verified Partner</p>
        </div>
      </div>
    </div>
  );
}
