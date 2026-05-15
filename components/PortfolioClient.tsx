'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Globe, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { projectService } from "@/lib/appwrite-service";
import { cn } from "@/lib/utils";

interface PortfolioClientProps {
  initialProjects: Project[];
}

import { motion, AnimatePresence, type Variants } from 'motion/react';

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
                      ? "bg-accent-primary text-bg-primary font-bold"
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
                    key={item.$id}
                    variants={itemVariants}
                    layout
                    className="group"
                  >
                    <div className="bg-bg-surface border border-border-subtle p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:border-accent-primary/30 hover:bg-bg-elevated">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden rounded-2xl bg-bg-primary mb-8 border border-border-subtle">
                        <Image
                          src={projectService.getThumbnailUrl(item.thumbnail)}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[8px] font-mono font-bold uppercase tracking-[0.2em] border shadow-sm backdrop-blur-md",
                            item.status === 'completed' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          )}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-2xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                              {item.title}
                           </h3>
                           <a 
                             href={item.live_url || "#"} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="p-2 rounded-full border border-border-subtle text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                           >
                             <ArrowUpRight size={18} />
                           </a>
                        </div>
                        
                        <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tags?.map((tag, i) => (
                            <span key={i} className="text-[9px] font-mono uppercase tracking-widest text-text-muted border border-border-subtle px-3 py-1 rounded-full group-hover:border-accent-primary/20 transition-colors">
                              {tag}
                            </span>
                          ))}
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
                className="text-center py-32 bg-bg-surface border border-border-subtle rounded-3xl"
              >
                <div className="w-16 h-16 bg-bg-primary border border-border-subtle flex items-center justify-center mx-auto mb-6 rounded-2xl">
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
