'use client';

import { projectService } from '@/lib/cms';
import { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

interface WorkGalleryProps {
  initialProjects?: Project[];
}

const fallbackProjects = [
  {
    title: 'Dental AI receptionist',
    category: 'AI agent + web app',
    result: 'Automates patient intake, appointment routing, and follow-up prompts.',
    tags: ['AI workflow', 'Booking', 'GEO content'],
  },
  {
    title: 'Operations portal for service teams',
    category: 'Custom software',
    result: 'Centralizes tasks, customer records, reporting, and internal handoffs.',
    tags: ['Dashboard', 'Role access', 'Analytics'],
  },
  {
    title: 'High-conversion SaaS marketing site',
    category: 'Website + SEO/GEO',
    result: 'Launch-ready positioning, schema, performance, and answer-ready pages.',
    tags: ['Next.js', 'Schema', 'Core Web Vitals'],
  },
];

export default function WorkGallery({ initialProjects = [] }: WorkGalleryProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="work" className="bg-bg-primary px-4 sm:px-6 pb-20 pt-4 w-full max-w-full overflow-hidden box-border">
      <div className="container mx-auto w-full max-w-full overflow-hidden box-border">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
              {initialProjects.length > 0 ? 'Selected work' : 'Example concepts'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight">
              {initialProjects.length > 0 ? (
                <>Product builds with <span className="font-display italic font-light text-accent-primary">clear outcomes</span>.</>
              ) : (
                <>Illustrative software <span className="font-display italic font-light text-accent-primary">concepts</span>.</>
              )}
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-text-secondary font-light text-left">
            {initialProjects.length > 0 
              ? 'Every project is framed as problem, product, and discoverability: what we built, why it mattered, and how people find it.'
              : 'These representative configurations illustrate how we structure custom software schema, API triggers, and indexing.'}
          </p>
        </div>

        {initialProjects.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-full min-w-0 overflow-hidden"
          >
            {initialProjects.slice(0, 4).map((project) => {
              const categoryTag = project.category || project.industry || 'Custom Build';
              return (
                <motion.div key={project.$id} variants={itemVariants} className="w-full max-w-full min-w-0 overflow-hidden">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block w-full max-w-full min-w-0 overflow-hidden"
                  >
                    <div className="bg-bg-surface/40 backdrop-blur-sm border border-border-default rounded-2xl overflow-hidden p-3.5 sm:p-4 transition-all duration-500 group-hover:border-accent-primary/50 group-hover:shadow-[0_0_35px_rgba(208,255,20,0.1)] group-hover:bg-bg-surface/80 min-w-0 w-full max-w-full box-border">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-bg-elevated w-full max-w-full">
                        {/* Floating Action Arrow */}
                        <div className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/10 bg-bg-primary/85 backdrop-blur-md text-text-primary shadow-md transition-all duration-300 group-hover:border-accent-primary group-hover:bg-accent-primary group-hover:text-text-inverse group-hover:scale-110">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        <Image
                          src={projectService.getThumbnailUrl(project.heroBannerImage || project.thumbnail)}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Subtle Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <div className="pt-4 sm:pt-5 pb-2 px-1 min-w-0 overflow-hidden w-full max-w-full">
                        <div className="mb-2 flex items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-accent-primary min-w-0 w-full">
                          <span className="truncate min-w-0 flex-1">{categoryTag}</span>
                          {project.duration && (
                            <span className="text-[11px] text-text-subtle font-normal shrink-0">{project.duration}</span>
                          )}
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-sans font-bold text-text-primary tracking-tight group-hover:text-accent-primary transition-colors duration-300 line-clamp-1 truncate">
                          {project.title}
                        </h3>

                        {(project.tags?.length || project.technologies?.length) ? (
                          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2 min-w-0 max-w-full">
                            {(project.tags?.slice(0, 3) || project.technologies?.slice(0, 3) || []).map((t) => (
                              <span key={t} className="rounded-full border border-border-subtle bg-bg-primary/60 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-mono text-text-muted group-hover:text-text-secondary transition-colors truncate max-w-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {fallbackProjects.map((project) => (
              <motion.article 
                key={project.title} 
                variants={itemVariants} 
                className="group p-6 bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_0_20px_rgba(208,255,20,0.04)]"
              >
                <div className="mb-8 rounded-2xl border border-border-subtle bg-bg-primary p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft border border-accent-primary/20 px-3 py-1 text-xs font-semibold text-accent-primary">
                      {project.category}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-text-subtle transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="space-y-3">
                    {project.tags.map((tag) => (
                      <div key={tag} className="flex items-center justify-between rounded-xl bg-bg-surface px-4 py-3 border border-border-subtle">
                        <span className="text-sm font-medium text-text-secondary">{tag}</span>
                        <CheckCircle2 className="h-4 w-4 text-accent-primary" />
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-sans font-semibold text-text-primary tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary text-left font-light">{project.result}</p>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* View All Projects CTA Button */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-border-default bg-bg-surface px-8 py-4 text-sm font-semibold text-text-primary shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary hover:text-text-inverse hover:shadow-[0_0_30px_rgba(208,255,20,0.25)]"
          >
            <span>View All Projects & Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="mt-3 text-xs font-mono uppercase tracking-wider text-text-subtle">
            Explore complete portfolio & technical breakdowns
          </p>
        </div>
      </div>
    </section>
  );
}
