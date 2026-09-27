"use client";

import Link from "next/link";
import { Target, Globe, KeyRound, ArrowRight } from "lucide-react";
import { motion, type Variants } from 'motion/react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
}

// TODO(owner): add founder/team names, roles, photos, short bios and LinkedIn
// URLs. The Team section stays hidden until this list has real entries —
// never fill it with placeholder people.
const TEAM: TeamMember[] = [];

const values = [
  {
    icon: KeyRound,
    title: "You own the code",
    body: "The source code, the repository and the IP belong to you from launch day. We can maintain it for you, but it's never locked to us.",
  },
  {
    icon: Globe,
    title: "Built to be found",
    body: "Schema, metadata and a clean page structure ship with every build, so Google and AI answer engines can understand what your business does.",
  },
  {
    icon: Target,
    title: "Fast on real phones",
    body: "We build on Next.js and TypeScript and check Core Web Vitals before launch. A slow page loses people on mobile data before it loads.",
  },
];

export default function AboutPageClient() {
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

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      {/* ─── WHO WE ARE ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto relative z-10 about-hero"
        >
          <motion.span variants={itemVariants} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
            The Studio
          </motion.span>
          <motion.h1 variants={itemVariants} className="font-display italic text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight text-text-primary mb-12">
            Software engineered for <br />
            <span className="text-accent-primary not-italic font-sans font-bold">discoverability.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="font-sans text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed font-light">
            Locallify is a software studio based in Silchar, Assam. We design and build custom software, web apps and mobile apps for clients across India and worldwide &mdash; fast, cleanly built, and structured so Google and AI answer engines can find them.
          </motion.p>
        </motion.div>

        {/* Decorative Grid Line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
      </section>

      {/* ─── WHAT WE BELIEVE ─────────────────────────────────────── */}
      <motion.section
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary mb-16 max-w-3xl">
            What we <span className="font-display italic font-light text-accent-primary">believe</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center text-accent-primary">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-sans font-bold">{title}</h3>
                <p className="text-text-secondary leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── TEAM (renders only with real, owner-provided entries) ── */}
      {TEAM.length > 0 && (
        <section className="py-24 px-4 sm:px-6 border-t border-border-subtle">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary mb-16">
              The <span className="font-display italic font-light text-accent-primary">team</span>.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member) => (
                <article key={member.name} className="rounded-2xl border border-border-default bg-bg-surface/50 p-8">
                  <h3 className="text-xl font-sans font-bold text-text-primary">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent-primary">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">{member.bio}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-text-primary underline underline-offset-4 hover:text-accent-primary">
                      {member.name} on LinkedIn
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PROOF ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 bg-bg-surface/30 border-y border-border-subtle">
        <div className="container mx-auto grid gap-6 md:grid-cols-2">
          <Link
            href="/portfolio"
            className="group rounded-2xl border border-border-default bg-bg-surface/50 p-8 transition-colors hover:border-accent-primary/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-primary">Work</span>
            <h2 className="mt-4 text-2xl font-sans font-bold text-text-primary">See what we&apos;ve shipped</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Case studies with the problem, the build, and what changed after launch.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-accent-primary">
              Browse the portfolio <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
          <Link
            href="/reviews"
            className="group rounded-2xl border border-border-default bg-bg-surface/50 p-8 transition-colors hover:border-accent-primary/40"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-primary">Clients</span>
            <h2 className="mt-4 text-2xl font-sans font-bold text-text-primary">Hear it from clients</h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              What the people we&apos;ve built for say about working with us.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-accent-primary">
              Read client reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
