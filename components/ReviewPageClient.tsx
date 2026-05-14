"use client";

import React, { useEffect, useState, useRef } from "react";
import { Star, Send, CheckCircle, User, MessageSquare, Quote, ArrowRight } from "lucide-react";
import { Review } from "@/lib/types";
import { reviewService } from "@/lib/appwrite-service";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ReviewPageClientProps {
  initialReviews: Review[];
}

export default function ReviewPageClient({ initialReviews }: ReviewPageClientProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      });

      // Reviews staggered reveal
      if (gridRef.current) {
        gsap.fromTo(gridRef.current.children, 
          { opacity: 0, x: 30 },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 92%",
              toggleActions: "play none none none"
            },
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await reviewService.submitReview(formData);
      setIsSubmitted(true);
      setFormData({ name: "", review: "", rating: 5 });
      toast.success("Review submitted! It will appear after admin approval.");
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl hero-content">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">Testimonials</span>
            <h1 className="font-display italic text-6xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
              Community <br /> 
              <span className="text-text-muted not-italic">Voices.</span>
            </h1>
            <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
              Real feedback from the local legends we serve. Share your journey with <span className="text-text-primary font-medium">Locallify</span> and help us grow.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        {/* ─── REVIEW FORM ───────────────────────────────────────── */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="bg-bg-surface p-8 md:p-10 border border-border-subtle rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent-primary" />
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-bg-primary border border-border-subtle flex items-center justify-center rounded-xl">
                      <MessageSquare className="text-accent-primary" size={18} />
                    </div>
                    <h2 className="font-sans font-bold text-2xl text-text-primary uppercase tracking-tight">Write a Review</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Your Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-primary border border-border-subtle p-4 text-sm text-text-primary rounded-xl focus:outline-none focus:border-accent-primary/50 transition-all"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: num })}
                            className="transition-transform active:scale-90"
                          >
                            <Star 
                              className={`w-6 h-6 ${num <= formData.rating ? "fill-accent-primary text-accent-primary" : "text-border-strong"}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Your Feedback</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-bg-primary border border-border-subtle p-4 text-sm text-text-primary rounded-xl focus:outline-none focus:border-accent-primary/50 transition-all resize-none"
                        placeholder="Tell us about your experience..."
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-primary text-bg-primary font-sans font-bold py-5 px-8 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-accent-hover disabled:opacity-50 transition-all active:scale-[0.98] rounded-xl"
                  >
                    {isSubmitting ? "Submitting..." : <>Submit Review <Send size={16} /></>}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-primary">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-display italic text-3xl mb-4 text-text-primary">Thank You!</h3>
                  <p className="text-text-secondary font-light mb-8 leading-relaxed">
                    Your feedback is invaluable. It will be live as soon as our team reviews it.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-mono text-[10px] uppercase tracking-widest text-accent-primary hover:underline"
                  >
                    Submit another review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── REVIEWS LIST ──────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-bg-surface border border-border-subtle flex items-center justify-center rounded-2xl">
                <Quote className="text-accent-primary" size={20} />
              </div>
              <h2 className="font-sans font-bold text-3xl uppercase tracking-tight text-text-primary">
                Latest Feedback
              </h2>
            </div>

            {reviews.length > 0 ? (
              <div ref={gridRef} className="space-y-8">
                {reviews.map((item) => (
                  <div key={item.$id} className="bg-bg-surface p-8 rounded-3xl border border-border-subtle relative overflow-hidden group hover:border-accent-primary/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                      <Quote size={80} className="text-text-primary" />
                    </div>
                    
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < item.rating ? "fill-accent-primary text-accent-primary" : "text-border-strong"}`} 
                        />
                      ))}
                    </div>

                    <p className="text-xl text-text-primary font-light leading-relaxed italic mb-8 relative z-10">
                      &quot;{item.review}&quot;
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-bg-primary rounded-full border border-border-subtle flex items-center justify-center">
                          <User className="w-5 h-5 text-text-muted" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-lg leading-none mb-1 text-text-primary">{item.name}</h4>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Verified Client</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-accent-primary opacity-60">
                        <CheckCircle size={10} />
                        <span className="font-mono text-[8px] uppercase tracking-widest">Verified</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-border-subtle bg-bg-surface/50 rounded-3xl">
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">No reviews published yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
