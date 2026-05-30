'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Globe, ArrowUpRight, X } from "lucide-react";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                {filteredItems.map((item, index) => (
                  <motion.div 
                    key={item.$id}
                    variants={itemVariants}
                    layout
                    className="group"
                  >
                    <div className={cn(
                      "relative bg-bg-surface/30 backdrop-blur-md border border-border-subtle p-8 rounded-none h-full flex flex-col transition-all duration-500 hover:bg-bg-elevated/30",
                      index % 2 === 0 
                        ? "hover:border-accent-primary/30 hover:shadow-[0_0_30px_rgba(208,255,20,0.1)]" 
                        : "hover:border-accent-secondary/30 hover:shadow-[0_0_30px_rgba(255,92,40,0.1)]"
                    )}>
                      {/* Neon Top Border Highlight on Hover */}
                      <div className={cn(
                        "absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-all duration-300 group-hover:opacity-100",
                        index % 2 === 0 
                          ? "bg-accent-primary shadow-[0_0_12px_rgba(208,255,20,0.8)]" 
                          : "bg-accent-secondary shadow-[0_0_12px_rgba(255,92,40,0.8)]"
                      )} />

                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden rounded-none bg-[#0C0C10] mb-8 border border-border-subtle flex items-center justify-center p-2">
                        <Image
                          src={projectService.getThumbnailUrl(item.thumbnail)}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute top-4 right-4 z-10">
                          <span className={cn(
                            "px-3 py-1 rounded-none text-[8px] font-mono font-bold uppercase tracking-[0.2em] border shadow-sm backdrop-blur-md",
                            item.status === 'completed' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          )}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                             <h3 className="text-2xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                                {item.title}
                             </h3>
                             {item.live_url && (
                               <a 
                                 href={item.live_url} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="p-2 rounded-none border border-border-subtle text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                               >
                                 <ArrowUpRight size={18} />
                               </a>
                             )}
                          </div>
                          
                          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 h-[4.75rem] overflow-hidden mb-4">
                            {item.description}
                          </p>

                          <div className="min-h-[28px] mb-6 flex items-center">
                            {item.description && item.description.length > 130 ? (
                              <button
                                onClick={() => setSelectedProject(item)}
                                className={cn(
                                  "text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer border-b border-transparent hover:border-current pb-0.5",
                                  index % 2 === 0 ? "text-accent-primary" : "text-accent-secondary"
                                )}
                              >
                                Expand More +
                              </button>
                            ) : (
                              <button
                                onClick={() => setSelectedProject(item)}
                                className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer border-b border-transparent hover:border-current pb-0.5"
                              >
                                View Details +
                              </button>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.tags?.map((tag, i) => (
                            <span key={i} className="text-[9px] font-mono uppercase tracking-widest text-text-muted border border-border-subtle px-3 py-1 rounded-none group-hover:border-accent-primary/20 transition-colors">
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

      {/* ─── DETAIL DIALOG (MODAL) ────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-surface/95 backdrop-blur-xl border border-white/10 rounded-none w-full max-w-xl overflow-hidden shadow-2xl relative flex flex-col p-8 md:p-10 my-8"
            >
              {/* Glow indicator at the top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_1px_10px_rgba(208,255,20,0.5)]" />

              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-sans font-bold text-text-primary leading-tight pr-4">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-text-muted hover:text-text-primary border border-transparent hover:border-border-subtle transition-all cursor-pointer rounded-none"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto mb-8 max-h-[350px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="inline-flex h-11 px-6 items-center justify-center border border-border-subtle text-text-primary font-sans font-bold uppercase tracking-widest text-[10px] rounded-none hover:border-text-primary hover:bg-bg-surface/50 transition-colors cursor-pointer w-full mt-auto"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
