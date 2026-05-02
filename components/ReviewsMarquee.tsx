"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, User, Quote } from "lucide-react";
import { Review } from "@/lib/types";

interface ReviewsMarqueeProps {
  reviews: Review[];
}

export default function ReviewsMarquee({ reviews }: ReviewsMarqueeProps) {
  if (!reviews || reviews.length === 0) return null;

  // For the infinite marquee to work smoothly, we duplicate the reviews.
  // If there's only one review, we'll just show it statically and centered.
  const isSingle = reviews.length === 1;
  const marqueeReviews = isSingle ? reviews : [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 blur-[100px] -z-10 rounded-full" />
      
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[#0066FF] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase leading-none">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-400">Success Stories</span>
        </h2>
      </div>

      {isSingle ? (
        <div className="container mx-auto px-6 flex justify-center">
          <ReviewCard item={reviews[0]} />
        </div>
      ) : (
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Fades for Marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            animate={{
              x: [0, -100 * reviews.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20 + reviews.length * 2,
                ease: "linear",
              },
            }}
            className="flex gap-8 whitespace-nowrap py-4"
          >
            {marqueeReviews.map((item, idx) => (
              <ReviewCard key={`${item.$id}-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}

function ReviewCard({ item }: { item: Review }) {
  return (
    <div className="inline-block w-[350px] md:w-[450px] p-8 md:p-10 bg-white border border-zinc-100 shadow-xl shadow-blue-500/[0.03] relative overflow-hidden group/card shrink-0 whitespace-normal transition-all hover:border-[#0066FF]/20">
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity">
        <Quote size={60} className="text-black" />
      </div>
      
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < item.rating ? "fill-[#FFD700] text-[#FFD700]" : "text-zinc-200"}`} 
          />
        ))}
      </div>

      <p className="text-lg text-zinc-600 font-medium leading-relaxed italic mb-8 line-clamp-3 relative z-10">
        "{item.review}"
      </p>

      <div className="flex items-center gap-4 border-t border-zinc-50 pt-6">
        <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover/card:bg-[#0066FF] group-hover/card:border-[#0066FF] transition-all duration-300">
          <User className="w-6 h-6 text-zinc-300 group-hover/card:text-white" />
        </div>
        <div>
          <h4 className="font-black uppercase tracking-tight text-sm leading-none mb-1 text-zinc-900">{item.name}</h4>
          <p className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.2em]">Verified Partner</p>
        </div>
      </div>
    </div>
  );
}
