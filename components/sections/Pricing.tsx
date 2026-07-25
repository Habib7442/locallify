'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion, type Variants } from 'motion/react';

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I'd like a quote for a software project.")}`;

const buildPackages = [
  ['Landing / marketing site', 'from $600'],
  ['Business website, multi-page', 'from $1,800'],
  ['Web app / MVP', 'from $6,000'],
  ['Mobile app, iOS + Android', 'from $9,000'],
  ['Custom software / larger builds', 'Custom quote'],
];

const retainers = [
  {
    name: 'Care',
    price: '$99',
    description: 'Hosting, maintenance, updates, monitoring, and support.',
    features: ['Managed hosting', 'Security updates', 'Uptime checks', 'Support queue'],
  },
  {
    name: 'Growth',
    price: '$399',
    description: 'Care plus ongoing SEO + GEO, content, and reporting.',
    features: ['Everything in Care', 'SEO + GEO roadmap', 'Monthly reporting', 'Content updates'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '$899',
    description: 'Growth plus priority development hours and deeper analytics.',
    features: ['Everything in Growth', 'Priority dev hours', 'Analytics reviews', 'Launch experiments'],
  },
];

interface PricingProps {
  showHeader?: boolean;
}

export default function Pricing({ showHeader = true }: PricingProps) {
  const reduceMotion = useReducedMotion();

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
    <section id="pricing" className={cn('bg-bg-primary px-6', showHeader ? 'py-20' : 'py-10')}>
      <div className="container mx-auto">
        {showHeader && (
          <div className="mb-16 max-w-4xl text-left">
            <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
              Pricing
            </span>
            <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
              Fixed starting points. <span className="font-display italic font-light text-accent-primary">Custom scope</span> when the build needs it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl font-light text-left">
              Projects are milestone-based in USD. Retainers keep the product secure,
              improving, and discoverable after launch.
            </p>
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={itemVariants} className="studio-card p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-text-primary">Build packages</h3>
            <p className="mt-3 text-text-secondary">One-time fixed-scope starting prices.</p>
            <div className="mt-8 divide-y divide-border-subtle">
              {buildPackages.map(([name, price]) => (
                <div key={name} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-text-secondary">{name}</span>
                  <span className="text-right font-semibold text-text-primary">{price}</span>
                </div>
              ))}
            </div>
            <Link href={whatsappHref} className="btn-primary mt-8 w-full gap-2">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {retainers.map((plan) => (
              <motion.article
                key={plan.name}
                variants={itemVariants}
                className={cn(
                  'studio-card flex flex-col p-6',
                  plan.featured && 'border-accent-primary bg-accent-soft'
                )}
              >
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-pill bg-bg-inverse px-3 py-1 text-xs font-semibold text-text-inverse">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold text-text-primary">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-text-primary">{plan.price}</span>
                  <span className="text-sm text-text-muted">/mo</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-text-secondary">{plan.description}</p>
                <div className="mt-6 flex-grow space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm text-text-secondary">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-accent-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 max-w-3xl text-left text-sm leading-6 text-text-muted">
          Typical milestone split: 50% start, 40% on delivery, 10% at launch.
          Out-of-scope work is quoted per milestone before any of it starts.
        </p>
      </div>
    </section>
  );
}
