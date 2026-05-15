'use client';

import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const plans = [
  {
    name: "Scale",
    price: "2,999",
    description: "Perfect for local shops just starting their digital journey.",
    features: [
      "Digital Shop Page",
      "locallify.in/[business] URL",
      "Google Business Profile",
      "WhatsApp Direct Button",
      "Managed Hosting",
      "Standard Support"
    ],
    isFeatured: false,
    cta: "Start Scaling"
  },
  {
    name: "Growth",
    price: "4,999",
    description: "The sweet spot for businesses ready to dominate their street.",
    features: [
      "Everything in Scale",
      "FREE Custom .com/.in Domain",
      "Google Review Setup",
      "Monthly SEO Support",
      "QR Code Catalog",
      "Priority WhatsApp Support"
    ],
    isFeatured: true,
    cta: "Accelerate Growth"
  },
  {
    name: "Dominate",
    price: "9,999",
    description: "For the local legends who want to own the entire city.",
    features: [
      "Everything in Growth",
      "FREE Custom .com/.in Domain",
      "Social Media Management",
      "FB/Insta Ads Management",
      "Growth Analytics",
      "24/7 Dedicated Manager"
    ],
    isFeatured: false,
    cta: "Dominate Market"
  }
];

interface PricingProps {
  showHeader?: boolean;
}

export default function Pricing({ showHeader = true }: PricingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="pricing" className={cn("bg-bg-primary px-6", showHeader ? "py-16" : "py-8")}>
      <div className="container mx-auto">
        
        {/* Header - Matched with Services Header */}
        {showHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="pricing-header max-w-2xl mb-12"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
              Pricing Plans
            </span>
            <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
              Investment for <br />
              <span className="text-text-muted not-italic">massive growth.</span>
            </h2>
          </motion.div>
        )}

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div 
              key={plan.name}
              variants={itemVariants}
              className={cn(
                "relative p-8 rounded-3xl bg-bg-surface border transition-all duration-500 flex flex-col",
                plan.isFeatured 
                  ? "border-accent-secondary shadow-[0_0_40px_rgba(255,92,40,0.05)] scale-105 z-10" 
                  : "border-border-subtle hover:border-border-strong"
              )}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-secondary text-text-inverse font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-sans font-bold text-xl text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-text-muted text-lg">₹</span>
                  <span className="text-4xl md:text-5xl font-display font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-muted text-sm">/mo</span>
                </div>
                <p className="text-text-secondary text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-accent-primary/10 text-accent-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan.`)}`}
                className={cn(
                  "w-full h-14 flex items-center justify-center gap-2 rounded-2xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all",
                  plan.isFeatured
                    ? "bg-accent-secondary text-text-inverse hover:bg-accent-secondary-hover"
                    : "bg-bg-primary text-text-primary border border-border-subtle hover:border-text-primary"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Subscription Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-[10px] uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Note: We provide a custom locallify.in/[business] slug by default. Growth & Dominate plans include a FREE custom .com/.in domain. For Scale, custom domains incur an additional annual fee. All plans are billed monthly.
          </p>
        </div>
      </div>
    </section>
  );
}
