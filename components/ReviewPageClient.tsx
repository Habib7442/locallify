"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle, User, MessageSquare, Quote, ArrowLeft } from "lucide-react";
import { Review } from "@/lib/types";
import { reviewService } from "@/lib/appwrite-service";
import { toast } from "sonner";

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

  useEffect(() => {
    setMounted(true);
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
    <div className="min-h-screen bg-white">
      {/* Back to Home Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-100 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-[#0066FF] hover:border-blue-100 transition-all shadow-xl shadow-blue-500/5 group"
        >
          <motion.div
            animate={{ x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowLeft size={12} />
          </motion.div>
          Back to Home
        </Link>
      </div>

      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Colorful Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-50/30 blur-[100px] -z-10 rounded-full" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#0066FF] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
              <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.85] mb-8">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-400">Reviews</span>
              </h1>
              <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                We value your feedback. Share your experience with <span className="text-[#0066FF] font-bold">Locallify</span> and help us grow our local community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 mt-10 pb-32">
        {/* ─── REVIEW FORM ───────────────────────────────────────── */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="bg-white p-8 md:p-10 border border-zinc-100 shadow-xl shadow-blue-500/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0066FF]" />
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-xl">
                      <MessageSquare className="text-[#0066FF]" size={18} />
                    </div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-black">Write a <span className="text-[#0066FF]">Review</span></h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Your Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-zinc-50 border border-zinc-100 p-4 text-sm font-bold focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/5 transition-all"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: num })}
                            className="transition-transform active:scale-90"
                          >
                            <Star 
                              className={`w-6 h-6 ${num <= formData.rating ? "fill-[#FFD700] text-[#FFD700]" : "text-zinc-200"}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Your Feedback</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-zinc-50 border border-zinc-100 p-4 text-sm font-bold focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
                        placeholder="How was your experience?"
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0066FF] text-white font-black py-5 px-8 text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-600 disabled:bg-zinc-400 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                  >
                    {isSubmitting ? "Submitting..." : <>Submit Review <Send size={16} /></>}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-black">Thank You!</h3>
                  <p className="text-zinc-500 font-medium mb-8">
                    Your review has been submitted successfully and is waiting for admin approval.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#0066FF] hover:underline"
                  >
                    Submit another review
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ─── REVIEWS LIST ──────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-2xl">
                <MessageSquare className="text-[#0066FF]" size={20} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-black">
                What People <span className="text-[#0066FF]">Say</span>
              </h2>
            </div>

            {reviews.length > 0 ? (
              <div className="space-y-8">
                {reviews.map((item, index) => (
                  <motion.div
                    key={item.$id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-white p-8 border border-zinc-100 shadow-sm relative overflow-hidden group hover:border-[#0066FF]/30 transition-all duration-500">
                      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <Quote size={80} className="text-black" />
                      </div>
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < item.rating ? "fill-[#FFD700] text-[#FFD700]" : "text-zinc-200"}`} 
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all duration-300">
                          <User className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-tight text-lg leading-none mb-1 text-zinc-900">{item.name}</h4>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Verified Client</p>
                        </div>
                      </div>

                      <p className="text-lg text-zinc-600 font-medium leading-relaxed italic relative z-10">
                        "{item.review}"
                      </p>

                      <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-between items-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-300">
                          {mounted && `Posted on ${new Date(item.$createdAt).toLocaleDateString()}`}
                        </p>
                        <div className="flex items-center gap-2 text-emerald-500">
                          <CheckCircle size={12} />
                          <span className="text-[9px] font-black uppercase tracking-widest">Verified Project</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-zinc-100 bg-zinc-50/50">
                <p className="text-zinc-400 font-black uppercase text-[10px] tracking-[0.3em]">No reviews published yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
