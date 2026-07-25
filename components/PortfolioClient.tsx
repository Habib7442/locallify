'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Globe, ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { projectService } from "@/lib/cms";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from 'motion/react';

interface PortfolioClientProps {
  initialProjects: Project[];
}

export default function PortfolioClient({ initialProjects }: PortfolioClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "ongoing" | "completed">("all");

  // Debouncing search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredItems = initialProjects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
      project.description?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.tags?.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const statuses: { label: string; value: "all" | "ongoing" | "completed" }[] = [
    { label: "All Projects", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="bg-bg-primary">
      {/* ─── SEARCH & FILTERS ─────────────────────────────────────── */}
      <section className="py-8 sticky top-[80px] z-40 bg-bg-primary/80 backdrop-blur-xl border-y border-border-subtle">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-text-muted">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-bg-surface border border-border-subtle rounded-full py-4 pl-12 pr-6 text-sm font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 transition-all"
              />
            </div>

            {/* Status Filters */}
            <div className="flex bg-bg-surface p-1 rounded-full border border-border-subtle">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setStatusFilter(status.value)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                    statusFilter === status.value
                      ? "bg-accent-primary text-bg-primary font-bold shadow-sm"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 relative min-h-[60vh] px-6">
        <div className="container mx-auto relative z-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div 
                key="grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredItems.map((item) => (
                  <motion.div 
                    key={item.slug}
                    variants={itemVariants}
                    layout
                    className="group"
                  >
                    <div className="relative bg-bg-surface/50 backdrop-blur-md border border-border-default p-4.5 rounded-2xl h-full flex flex-col transition-all duration-500 hover:border-accent-primary/50 hover:bg-bg-surface/80 hover:shadow-[0_0_35px_rgba(208,255,20,0.1)]">
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-bg-elevated mb-5">
                        <Link href={`/portfolio/${item.slug}`} className="w-full h-full relative block">
                          <Image
                            src={projectService.getThumbnailUrl(item.heroBannerImage || item.thumbnail)}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />
                        </Link>
                        
                        {/* Status Badge */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border shadow-md backdrop-blur-md",
                            item.status === 'completed' 
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                            : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                          )}>
                            {item.status}
                          </span>
                        </div>

                        {/* Live URL Link Icon */}
                        {item.live_url && (
                          <a 
                            href={item.live_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-bg-primary/85 text-text-primary shadow-md backdrop-blur-md transition-all duration-300 hover:border-accent-primary hover:bg-accent-primary hover:text-text-inverse hover:scale-110"
                            title="Visit Live Website"
                          >
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow flex flex-col justify-between p-1">
                        <div>
                          {/* Category Tag */}
                          <div className="mb-1.5 text-xs font-mono uppercase tracking-wider text-accent-primary font-medium">
                            {item.category || item.industry || 'Custom Build'}
                          </div>

                          <h3 className="text-xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors tracking-tight line-clamp-1 mb-3">
                            <Link href={`/portfolio/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h3>
                          
                          <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 mb-5 font-light">
                            {item.description}
                          </p>
                        </div>
                        
                        <div>
                          {/* Prominent Clickable Case Study CTA Button */}
                          <Link
                            href={`/portfolio/${item.slug}`}
                            className="group/btn flex items-center justify-between w-full px-4 py-3 rounded-xl border border-border-default bg-bg-elevated/70 text-xs font-mono uppercase tracking-wider text-text-primary hover:border-accent-primary hover:bg-accent-primary hover:text-text-inverse transition-all duration-300 shadow-sm"
                          >
                            <span className="font-semibold">View Case Study & Outcomes</span>
                            <ArrowRight className="h-4 w-4 text-accent-primary group-hover/btn:text-text-inverse transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </Link>

                          {/* Tech Tags */}
                          {(item.tags?.length || item.technologies?.length) ? (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {(item.tags?.slice(0, 3) || item.technologies?.slice(0, 3) || []).map((tag, i) => (
                                <span key={i} className="text-[11px] font-mono text-text-muted border border-border-subtle bg-bg-primary/50 px-3 py-1 rounded-full group-hover:border-accent-primary/20 transition-colors">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-32 bg-bg-surface border border-border-subtle rounded-none"
              >
                <div className="w-16 h-16 bg-bg-primary border border-border-subtle flex items-center justify-center mx-auto mb-6 rounded-none">
                  <Globe className="text-text-muted" size={24} />
                </div>
                <h3 className="text-xl font-sans font-bold text-text-primary">No results found</h3>
                <p className="text-text-muted font-mono mt-2 uppercase text-[10px] tracking-widest">Adjust your filters and try again.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
