'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { services } from '@/lib/data/services';

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  const cardVariants: Variants = {
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
    <section id="services" className="bg-bg-primary px-6 py-16 border-t border-border-subtle">
      <div className="container mx-auto">
        <div className="mb-16 max-w-4xl text-left">
          <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
            Capabilities
          </span>
          <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
            Software design & development, with <span className="font-display italic font-light text-accent-primary">discovery</span> built in.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl font-light text-left">
            We work with startups, SMBs, and growing companies worldwide that need
            useful software shipped well and positioned clearly.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}`}
                className={`group block h-full p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl transition-all duration-300 ${service.theme.hoverBorder} ${service.theme.hoverGlow}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className={`rounded-xl p-3 transition-transform duration-500 group-hover:scale-110 ${service.theme.bg}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase bg-bg-elevated border border-border-subtle text-text-muted group-hover:text-text-secondary transition-colors">
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-text-primary tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary text-justify font-light">{service.shortDescription}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-muted group-hover:text-accent-primary transition-colors">
                  Explore capability
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
