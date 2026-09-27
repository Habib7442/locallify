import React from "react";
import Image from "next/image";
import { Star, User, Quote } from "lucide-react";
import { TestimonialItem } from "@/lib/testimonials";

interface ReviewsMarqueeProps {
  testimonials: TestimonialItem[];
  /** Higher = slower scroll. Defaults to a slow, readable pace. */
  speed?: number;
}

export default function ReviewsMarquee({ testimonials, speed = 14 }: ReviewsMarqueeProps) {
  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly.
  const loop = testimonials.length === 1 ? testimonials : [...testimonials, ...testimonials];
  const durationSeconds = Math.max(30, testimonials.length * speed);

  if (testimonials.length === 1) {
    return (
      <div className="flex justify-center px-6">
        <TestimonialCard item={testimonials[0]} />
      </div>
    );
  }

  return (
    <div
      className="relative flex overflow-x-hidden group"
      tabIndex={0}
      role="region"
      aria-label="Client testimonials, auto-scrolling. Press Tab to focus and pause."
    >
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 whitespace-nowrap py-4 animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {loop.map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} duplicate={idx >= testimonials.length} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ item, duplicate = false }: { item: TestimonialItem; duplicate?: boolean }) {
  return (
    <div
      // The duplicate set only exists so the loop has no seam: hidden from
      // assistive tech, but not inert, so its visible links still take clicks.
      aria-hidden={duplicate || undefined}
      className="inline-block w-[340px] sm:w-[400px] p-7 sm:p-8 bg-bg-surface border border-border-subtle rounded-2xl shadow-xl shadow-accent-primary/[0.03] relative overflow-hidden group/card shrink-0 whitespace-normal transition-all hover:border-accent-primary/20"
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover/card:opacity-[0.08] transition-opacity">
        <Quote size={56} className="text-text-primary" />
      </div>

      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < item.rating ? "h-4 w-4 fill-accent-primary text-accent-primary" : "h-4 w-4 text-border-strong"}
          />
        ))}
      </div>

      <p className="text-base text-text-secondary font-light leading-relaxed mb-7 line-clamp-4 relative z-10">
        &quot;{item.quote}&quot;
      </p>

      <div className="flex items-center gap-3 border-t border-border-subtle pt-5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-border-subtle bg-bg-elevated shrink-0 flex items-center justify-center">
          {item.photo ? (
            <Image src={item.photo} alt={item.name} fill sizes="44px" className="object-cover" />
          ) : (
            <User className="w-5 h-5 text-text-muted" />
          )}
        </div>
        <div className="min-w-0">
          <p className="font-sans font-semibold text-sm text-text-primary truncate">{item.name}</p>
          {item.role && (
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider truncate">{item.role}</p>
          )}
        </div>
        {item.verified && item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Keyboard users reach each source once, via the original card.
            tabIndex={duplicate ? -1 : undefined}
            aria-label={`Verified: view ${item.name}'s original review`}
            className="ml-auto shrink-0 text-[9px] bg-accent-primary/10 border border-accent-primary/20 rounded-full px-2 py-0.5 text-accent-primary font-mono font-medium hover:bg-accent-primary/20 transition-colors"
          >
            Verified
          </a>
        )}
      </div>
    </div>
  );
}
