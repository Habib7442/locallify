'use client';

import React, { useEffect, useRef } from 'react';
import { projectService } from '@/lib/appwrite-service';
import { Project } from '@/lib/types';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorkGalleryProps {
  initialProjects?: Project[];
}

export default function WorkGallery({ initialProjects = [] }: WorkGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialProjects.length === 0) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out"
      });

      // Projects staggered reveal
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 1.2,
          ease: "power4.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [initialProjects]);

  if (initialProjects.length === 0) return null;

  return (
    <section id="portfolio" ref={containerRef} className="py-16 bg-bg-primary px-6">
      <div className="container mx-auto">
        
        {/* Header - Aligned with the rest of the site */}
        <div className="portfolio-header max-w-2xl mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
            Featured Portfolio
          </span>
          <h2 className="font-display italic text-4xl md:text-6xl text-text-primary leading-tight">
            Where local legends <br />
            <span className="text-text-muted not-italic">go digital.</span>
          </h2>
        </div>

        {/* Simplified Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {initialProjects.map((project) => (
            <Link 
              key={project.$id} 
              href={project.live_url || '#'}
              target="_blank"
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
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>
    </section>
  );
}
