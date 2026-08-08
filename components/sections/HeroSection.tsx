'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, Star } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { GOOGLE_RATING } from '@/lib/site-config';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I'd like to start a software project.")}`;

const capabilities = ['Custom software', 'Web apps', 'Mobile apps', 'SEO + GEO'];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-bg-primary px-6 pb-16 pt-32 md:pb-20 md:pt-40">
      {/* Starry night & mountain background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-bg-primary">
        <Image
          src="/hero_bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-bottom opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/45 to-bg-primary" />
      </div>
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-pill border border-border-subtle bg-bg-surface px-4 py-2 text-xs font-semibold text-text-secondary shadow-sm"
          >
            <Globe className="h-4 w-4 text-accent-primary" />
            Software studio based in Silchar, Assam &middot; serving clients worldwide
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-5xl font-display italic text-5xl font-normal leading-[1.2] tracking-tight text-text-primary md:text-7xl lg:text-[5.5rem]"
          >
            Custom software, web & mobile apps <span className="text-accent-primary font-normal">built to be found.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-12 flex flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary gap-2">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              See our work
            </Link>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href={GOOGLE_RATING.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Rated ${GOOGLE_RATING.value.toFixed(1)} out of 5 from ${GOOGLE_RATING.count} Google reviews`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
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
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="scrollbar-hide mt-8 flex flex-row items-center justify-start md:justify-center gap-2 overflow-x-auto whitespace-nowrap text-xs md:text-sm text-text-muted w-full max-w-full px-4 md:px-6"
          >
            {capabilities.map((item) => (
              <span key={item} className="rounded-xl border border-border-subtle bg-bg-surface px-3 py-1.5 md:px-4 md:py-2 flex-shrink-0">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
