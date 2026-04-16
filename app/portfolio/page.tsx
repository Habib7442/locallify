"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Globe, Share2, Star,
  ArrowRight, MessageCircle, Phone, 
  ChevronRight, Layout, Palette, Utensils, Scissors, Shirt, Heart
} from "lucide-react";

const categories = [
  { id: "all", name: "All Work", icon: <Layout className="w-4 h-4" /> },
  { id: "saree", name: "Saree & Fashion", icon: <Shirt className="w-4 h-4" /> },
  { id: "salon", name: "Salon & Beauty", icon: <Scissors className="w-4 h-4" /> },
  { id: "restaurant", name: "Restaurants", icon: <Utensils className="w-4 h-4" /> },
  { id: "wedding cards", name: "Wedding Cards", icon: <Heart className="w-4 h-4" /> },
];

const portfolioItems = [
  // Saree items (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `saree-${i + 1}`,
    category: "saree",
    image: `/portfolio/saree/${i + 1}.png`,
    title: `Premium Saree Design ${i + 1}`,
  })),
  // Salon items (5)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `salon-${i + 1}`,
    category: "salon",
    image: `/portfolio/salon/${i + 1}.png`,
    title: `Elite Salon Experience ${i + 1}`,
  })),
  // Restaurant items (10)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `restaurant-${i + 1}`,
    category: "restaurant",
    image: `/portfolio/restaurant/${i + 1}.png`,
    title: `Gourmet Restaurant UI ${i + 1}`,
  })),
  // Wedding Cards items (3)
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `wedding-cards-${i + 1}`,
    category: "wedding cards",
    image: `/portfolio/wedding%20cards/${i + 1}.png`,
    title: `Luxury Wedding Card ${i + 1}`,
  })),
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 font-poppins text-zinc-900">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative z-50 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Locallify"
              priority
              width={160}
              height={160}
              className={`w-auto h-20 md:h-24 transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex gap-8 font-medium text-sm transition-colors ${isScrolled ? "text-zinc-600" : "text-white/90"}`}>
              {["Services", "Portfolio", "Pricing", "About"].map((item) => (
                <Link 
                  key={item} 
                  href={item === "About" ? "/about" : item === "Portfolio" ? "/portfolio" : `/#${item.toLowerCase()}`} 
                  className={`relative group py-2 tracking-wide transition-colors ${item === "Portfolio" ? "text-locallify-green font-semibold" : ""}`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-locallify-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${item === "Portfolio" ? "scale-x-100" : ""}`}></span>
                </Link>
              ))}
            </div>
            <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-emerald-500 text-white px-7 py-3 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:shadow-locallify-green/30 hover:-translate-y-0.5">
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-zinc-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 pt-32 px-10 flex flex-col"
          >
            <div className="flex flex-col gap-8">
              {["Services", "Portfolio", "Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  href={item === "About" ? "/about" : item === "Portfolio" ? "/portfolio" : `/#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold font-montserrat text-zinc-900 flex justify-between items-center group"
                >
                  {item}
                  <ChevronRight className="w-8 h-8 text-locallify-green group-hover:translate-x-2 transition-transform" />
                </Link>
              ))}
            </div>
            <a href="https://wa.me/919957882204" className="mt-16 bg-locallify-green text-white font-bold py-5 rounded-2xl w-full text-xl shadow-xl shadow-locallify-green/20 text-center">
              Let's Talk Business
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-locallify-blue overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-locallify-green rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-emerald-400 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-locallify-green/20 border border-locallify-green/30 text-white text-xs font-bold uppercase tracking-widest mb-8">
              <Star className="w-3.5 h-3.5 fill-locallify-green text-locallify-green" />
              Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-montserrat text-white leading-tight mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-locallify-green to-emerald-400">Masterpieces</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed">
              Explore how we've helped local brands across India transform their digital identity with premium designs that convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-locallify-green text-white shadow-lg shadow-locallify-green/30 scale-105"
                    : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid Gallery */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${hoveredItem === item.id ? "opacity-100" : "opacity-0"}`}>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={hoveredItem === item.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-locallify-green text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-300 text-sm max-w-xs leading-relaxed">Premium digital design tailored for high conversion and brand impact.</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials or Stats Mini Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.05)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projects Completed", value: "250+" },
              { label: "Happy Clients", value: "180+" },
              { label: "Local Impact", value: "Across 20+ Cities" },
              { label: "Success Rate", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-locallify-green mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-locallify-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-locallify-green rounded-full blur-[100px]"></div>
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-8 tracking-tight">
                Want a Masterpiece for Your <span className="text-locallify-green">Business?</span>
              </h2>
              <p className="text-xl text-blue-100/80 mb-12 leading-relaxed">
                Your business deserves to look this good. Let's create something extraordinary together and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-locallify-green/30 flex items-center justify-center gap-2">
                  Start Your Project Now <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+916000163450" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" /> Speak to Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-2">
              <Image src="/logo.png" alt="Locallify" width={180} height={60} className="brightness-0 invert opacity-80 mb-8" />
              <p className="text-lg max-w-md leading-relaxed text-zinc-400">
                Helping local businesses dominate the digital landscape with premium design and data-driven marketing solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Explore</h4>
              <ul className="space-y-4 font-medium">
                <li><Link href="/" className="hover:text-locallify-green transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-locallify-green transition-colors">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-locallify-green transition-colors">About Story</Link></li>
                <li><Link href="/#pricing" className="hover:text-locallify-green transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Connect</h4>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-locallify-green" /> +91 60001 63450</li>
                <li className="flex items-center gap-3 font-bold text-zinc-300"><MessageCircle className="w-4 h-4 text-locallify-green" /> +91 99578 82204</li>
                <li className="flex items-center gap-3"><Globe className="w-4 h-4 text-locallify-green" /> business@locallify.in</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-locallify-green" /> India</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-xs uppercase tracking-widest font-bold">
            <p>© 2026 Locallify.in · Premium Digital Partner</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
