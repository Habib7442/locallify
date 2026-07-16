'use client';

import { Review } from '@/lib/types';
import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface TestimonialsProps {
  reviews?: Review[];
}

const fallbackReviews = [
  {
    id: 'founder',
    name: 'SaaS founder',
    role: 'Illustrative Feedback (United States)',
    is_verified: false,
    review: 'Locallify understood the product, not just the page. The build came with the technical SEO pieces we usually have to chase later.',
    rating: 5,
  },
  {
    id: 'operator',
    name: 'Operations lead',
    role: 'Illustrative Feedback (United Kingdom)',
    is_verified: false,
    review: 'They turned a messy manual workflow into a clean internal tool and gave our team a launch plan we could actually follow.',
    rating: 5,
  },
  {
    id: 'clinic',
    name: 'Clinic owner',
    role: 'Illustrative Feedback (Gulf region)',
    is_verified: false,
    review: 'The AI intake flow gave us faster responses without losing the human handoff. Clear thinking, clean product, calm process.',
    rating: 5,
  },
];

export default function Testimonials({ reviews = [] }: TestimonialsProps) {
  const reduceMotion = useReducedMotion();
  const visibleReviews = reviews.length > 0
    ? reviews.slice(0, 3).map((review) => ({
        id: review.$id,
        name: review.name,
        role: review.role || 'Client Partner',
        is_verified: review.is_verified ?? true,
        review: review.review,
        rating: review.rating,
      }))
    : fallbackReviews;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="bg-bg-primary px-6 py-16 border-t border-border-subtle">
      <div className="container mx-auto">
        <div className="mb-16 max-w-4xl text-left">
          <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
            Testimonials
          </span>
          <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
            Serious clients need a <span className="font-display italic font-light text-accent-primary">serious build partner</span>.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {visibleReviews.map((review) => (
            <motion.article 
              key={review.id} 
              variants={itemVariants} 
              className="group p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-subtle rounded-2xl transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_0_20px_rgba(208,255,20,0.04)] flex flex-col"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={index < review.rating ? 'h-4 w-4 fill-accent-primary text-accent-primary' : 'h-4 w-4 text-text-subtle'}
                    />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-border-strong group-hover:text-accent-primary group-hover:scale-110 transition-all duration-500" />
              </div>
              <p className="flex-grow text-base leading-relaxed text-text-secondary text-left font-light">&quot;{review.review}&quot;</p>
              <div className="mt-8 border-t border-border-subtle pt-6 flex items-center justify-between">
                <div>
                  <p className="font-sans font-semibold text-text-primary">{review.name}</p>
                  <p className="mt-1 text-xs text-text-muted font-mono uppercase tracking-wider">{review.role}</p>
                </div>
                {review.is_verified && (
                  <span className="text-[9px] bg-accent-primary/10 border border-accent-primary/20 rounded-full px-2 py-0.5 text-accent-primary font-mono font-medium flex items-center gap-1 select-none">
                    ✓ Verified
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
