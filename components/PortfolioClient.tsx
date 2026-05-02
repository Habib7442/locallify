"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, Search, Globe } from "lucide-react";
import { Project } from "@/lib/types";
import { projectService } from "@/lib/appwrite-service";

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
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statuses: { label: string; value: "all" | "ongoing" | "completed" }[] = [
    { label: "All Projects", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <>
      {/* ─── SEARCH & FILTERS ─────────────────────────────────────── */}
      <section className="py-6 sticky top-[72px] z-40 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-none py-4 pl-12 pr-6 text-sm font-bold placeholder:text-zinc-400 focus:outline-none focus:border-black transition-all"
              />
            </div>

            {/* Status Filters */}
            <div className="flex bg-zinc-100 p-1 rounded-none border border-zinc-200">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setStatusFilter(status.value)}
                  className={`px-6 py-2 rounded-none text-[10px] font-black uppercase tracking-widest transition-all ${
                    statusFilter === status.value
                      ? "bg-black text-white"
                      : "text-zinc-500 hover:text-black"
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white relative min-h-[60vh]">
        <div className="container mx-auto px-6 relative z-10">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-zinc-200">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.$id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <div className="bg-white border-r border-b border-zinc-200 p-8 flex flex-col h-full">
                      {/* Image Container */}
                      <div className="relative aspect-video overflow-hidden bg-zinc-100 mb-8">
                        <Image
                          src={projectService.getThumbnailUrl(item.thumbnail)}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700"
                        />
                        <div className="absolute top-0 right-0">
                          <span className={`px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] ${
                            item.status === 'completed' 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-amber-500 text-white'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-black uppercase tracking-tighter text-black leading-none">{item.title}</h3>
                          <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button - Always Visible */}
                      <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-col gap-4">
                        <a 
                          href={item.live_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-black text-white font-black py-4 px-6 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-800 transition-colors"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                        <div className="flex items-center justify-between">
                           <div className="flex -space-x-1">
                              {[1,2,3].map(i => (
                                <div key={i} className="w-6 h-6 border border-zinc-200 bg-white flex items-center justify-center">
                                   <Star className="w-2.5 h-2.5 fill-black text-black" />
                                </div>
                              ))}
                           </div>
                           <p className="text-[9px] font-black uppercase tracking-widest text-zinc-300">Managed by Locallify</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-32 bg-zinc-50 border border-zinc-200">
              <div className="w-16 h-16 bg-white border border-zinc-200 flex items-center justify-center mx-auto mb-6">
                <Globe className="text-zinc-300" size={24} />
              </div>
              <h3 className="text-xl font-black text-black uppercase tracking-tighter">No results found</h3>
              <p className="text-zinc-400 font-bold mt-2 uppercase text-[10px] tracking-widest">Adjust your filters and try again.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
