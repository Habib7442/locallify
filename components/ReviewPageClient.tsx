"use client";

import React, { useId, useState } from "react";
import { Star, Send, CheckCircle, MessageSquare, Quote } from "lucide-react";
import { reviewService } from "@/lib/cms";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { GOOGLE_RATING } from "@/lib/site-config";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { TestimonialItem } from "@/lib/testimonials";
import ReviewsMarquee from "@/components/ReviewsMarquee";

interface ReviewPageClientProps {
  testimonials: TestimonialItem[];
}

import { motion, type Variants } from 'motion/react';

export default function ReviewPageClient({ testimonials }: ReviewPageClientProps) {
  const uid = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

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
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <Navbar />

      <main id="main-content">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl hero-content"
            >
              <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">Testimonials</motion.span>
              <motion.h1 variants={itemVariants} className="font-display italic text-6xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
                Community <br />
                <span className="text-text-muted not-italic">Voices.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light">
                Real feedback from the clients we&apos;ve built for. Share your experience with <span className="text-text-primary font-medium">Locallify</span> and help us grow.
              </motion.p>
              <motion.a
                variants={itemVariants}
                href={GOOGLE_RATING.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Rated ${GOOGLE_RATING.value.toFixed(1)} out of 5 from ${GOOGLE_RATING.count} Google reviews`}
                className="mt-8 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <GoogleIcon className="h-4 w-4" />
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < Math.round(GOOGLE_RATING.value)
                          ? "h-3.5 w-3.5 fill-accent-primary text-accent-primary"
                          : "h-3.5 w-3.5 text-border-strong"
                      }
                    />
                  ))}
                </span>
                <span aria-hidden="true" className="font-bold text-text-primary leading-none">{GOOGLE_RATING.value.toFixed(1)}</span>
                <span aria-hidden="true" className="leading-none">· {GOOGLE_RATING.count} Google reviews</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ─── ALL TESTIMONIALS — HORIZONTAL SCROLL ──────────────────── */}
        <section className="pb-24">
          <div className="container mx-auto px-6 mb-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-bg-surface border border-border-subtle flex items-center justify-center rounded-2xl">
              <Quote className="text-accent-primary" size={20} />
            </div>
            <h2 className="font-sans font-bold text-3xl uppercase tracking-tight text-text-primary">
              Latest Feedback
            </h2>
          </div>

          {testimonials.length > 0 ? (
            <ReviewsMarquee testimonials={testimonials} />
          ) : (
            <div className="container mx-auto px-6">
              <div className="py-20 text-center border border-border-subtle bg-bg-surface/50 rounded-3xl">
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">No reviews published yet.</p>
              </div>
            </div>
          )}
        </section>

        {/* ─── WRITE A REVIEW ─────────────────────────────────────────── */}
        <section className="pb-32 px-6">
          <div className="container mx-auto max-w-2xl">
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
                      <label htmlFor={`${uid}-name`} className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Your Full Name</label>
                      <input
                        id={`${uid}-name`}
                        type="text"
                        required
                        className="w-full bg-bg-primary border border-border-subtle p-4 text-sm text-text-primary rounded-xl focus:outline-none focus:border-accent-primary/50 transition-all"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <span id={`${uid}-rating-label`} className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Rating</span>
                      <div role="group" aria-labelledby={`${uid}-rating-label`} className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: num })}
                            aria-label={`${num} star${num > 1 ? "s" : ""}`}
                            aria-pressed={formData.rating === num}
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
                      <label htmlFor={`${uid}-feedback`} className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3 block">Your Feedback</label>
                      <textarea
                        id={`${uid}-feedback`}
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
        </section>
      </main>
    </div>
  );
}
