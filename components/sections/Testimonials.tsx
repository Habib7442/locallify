'use client';

import React, { useEffect, useRef } from 'react';
import { Review } from '@/lib/types';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialsProps {
  reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reviews.length === 0) return;

    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".testimonials-header", {
        scrollTrigger: {
          trigger: ".testimonials-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out"
      });

      // Reveal cards
      if (scrollRef.current) {
        gsap.fromTo(scrollRef.current.children, 
          { opacity: 0, x: 50 },
          {
            scrollTrigger: {
              trigger: scrollRef.current,
              start: "top 92%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: "power4.out"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reviews]);

  if (reviews.length === 0) return null;

  return (
    <section ref={containerRef} className="py-24 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="testimonials-header max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Client Success
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Voices of the <br />
            <span className="text-text-muted not-italic">Community.</span>
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <div 
            key={review.$id}
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
          </div>
        ))}
        
        {/* Extra spacing at end */}
        <div className="flex-shrink-0 w-6" />
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
