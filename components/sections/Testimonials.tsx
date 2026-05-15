'use client';

import React, { useEffect, useRef } from 'react';
import { Review } from '@/lib/types';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
interface TestimonialsProps {
  reviews: Review[];
}

import { motion } from 'motion/react';

export default function Testimonials({ reviews }: TestimonialsProps) {
  if (reviews.length === 0) return null;

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  if (reviews.length === 0) return null;

  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="testimonials-header max-w-2xl"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Client Success
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Voices of the <br />
            <span className="text-text-muted not-italic">Community.</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <motion.div 
            key={review.$id}
            variants={cardVariants}
            className="flex-shrink-0 w-[300px] md:w-[450px] bg-bg-surface border border-border-subtle rounded-[2rem] p-8 md:p-10 snap-center flex flex-col justify-between group hover:border-accent-primary/20 transition-all duration-500"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-accent-primary text-accent-primary' : 'text-text-muted'}`} 
                  />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-white/[0.03] mb-4" />
              
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-light mb-8 italic">
                &quot;{review.review}&quot;
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border-subtle pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted border border-border-subtle">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-text-primary text-sm uppercase tracking-wider">{review.name}</h4>
                  <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mt-1">Verified Client</p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-accent-primary opacity-40" />
            </div>
          </motion.div>
        ))}
        
        {/* Extra spacing at end */}
        <div className="flex-shrink-0 w-6" />
      </motion.div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
