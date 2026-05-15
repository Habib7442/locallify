'use client';

import { projectService } from '@/lib/appwrite-service';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, type Variants } from 'motion/react';

interface WorkGalleryProps {
  initialProjects?: Project[];
}

export default function WorkGallery({ initialProjects = [] }: WorkGalleryProps) {
  if (initialProjects.length === 0) return null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
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
    <section id="portfolio" className="py-16 bg-bg-primary px-6">
      <div className="container mx-auto">
        
        {/* Header - Aligned with the rest of the site */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="portfolio-header max-w-2xl mb-12"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Featured Portfolio
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Where local legends <br />
            <span className="text-text-muted not-italic">go digital.</span>
          </h2>
        </motion.div>

        {/* Simplified Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {initialProjects.map((project) => (
            <motion.div key={project.$id} variants={itemVariants}>
              <Link 
                href={project.live_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] bg-bg-surface rounded-2xl overflow-hidden border border-border-subtle mb-6 transition-all duration-500 group-hover:border-accent-primary/40">
                  {/* Project Image */}
                  <Image 
                    src={projectService.getThumbnailUrl(project.thumbnail)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-bg-primary/80 backdrop-blur-md p-4 rounded-full text-accent-primary border border-accent-primary/20 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-sans font-bold text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-2">
                      {project.tags?.join(' • ') || 'Digital Storefront'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>
    </section>
  );
}
