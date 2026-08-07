import { TestimonialItem } from '@/lib/testimonials';
import ReviewsMarquee from '@/components/ReviewsMarquee';

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-bg-primary py-16 border-t border-border-subtle overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-left">
        <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
          Testimonials
        </span>
        <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
          Serious clients need a <span className="font-display italic font-light text-accent-primary">serious build partner</span>.
        </h2>
      </div>

      <ReviewsMarquee testimonials={testimonials} />
    </section>
  );
}
