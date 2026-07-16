'use client';

import { projectService } from '@/lib/cms';
import { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    <section id="work" className="bg-bg-primary px-6 pb-20 pt-4">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
              Selected work
            </span>
            <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight">
              Product builds with <span className="font-display italic font-light text-accent-primary">clear outcomes</span>.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-text-secondary font-light text-left">
            Every project is framed as problem, product, and discoverability:
            what we built, why it mattered, and how people find it.
          </p>
        </div>

        {initialProjects.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {initialProjects.slice(0, 4).map((project) => (
              <motion.div key={project.$id} variants={itemVariants}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl overflow-hidden p-3 transition-all duration-300 group-hover:border-accent-primary/45 group-hover:shadow-[0_0_25px_rgba(208,255,20,0.06)] group-hover:bg-bg-surface/75">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-bg-elevated">
                      <Image
                        src={projectService.getThumbnailUrl(project.heroBannerImage || project.thumbnail)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex items-end justify-between gap-4 p-5">
                      <div>
                        <h3 className="text-xl font-sans font-semibold text-text-primary tracking-tight">{project.title}</h3>
                        <p className="mt-2 text-xs font-mono uppercase tracking-wider text-text-muted">{project.tags?.join(' / ') || 'Software project'}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-accent-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
      </div>
    </section>
  );
}
