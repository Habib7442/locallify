'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav 
        className={cn(
          'fixed w-full z-[100] transition-all duration-500 px-6',
          isScrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle' : 'py-8 bg-transparent'
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group relative z-[110]">
            <div className="relative w-12 h-12 bg-bg-surface border border-border-subtle rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shadow-glow-subtle overflow-hidden">
              <Image 
                src="/logo2.png" 
                alt="Locallify Logo" 
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-sans font-black text-2xl tracking-tighter uppercase text-text-primary">
              Locallify<span className="text-accent-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-10 font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="hover:text-accent-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            
            <Link 
              href="https://wa.me/91XXXXXXXXXX?text=PAGE" 
              className="btn-primary py-3 px-6 text-sm gap-2"
            >
              Claim your page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[110] p-3 rounded-xl bg-bg-surface border border-border-subtle text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[105] bg-bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center p-12 text-center"
          >
            {/* Dedicated Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-4 rounded-full bg-bg-surface border border-border-subtle text-accent-primary"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display italic text-5xl text-text-primary hover:text-accent-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <Link 
                  href="https://wa.me/916000163450" 
                  className="btn-primary w-full text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Claim your page
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
