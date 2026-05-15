'use client';

import React, { useState, useEffect, type ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ className, ...props }: ComponentProps<'nav'>) {
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
          isScrolled ? 'py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle' : 'py-8 bg-transparent',
          className
        )}
        {...props}
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
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to get started.")}`}
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
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-[105] bg-bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center p-12 text-center transition-all duration-300",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
        style={{
          transitionDuration: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? '0ms' : '300ms'
        }}
      >
        {/* Dedicated Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-8 right-8 p-4 rounded-full bg-bg-surface border border-border-subtle text-accent-primary"
          aria-label="Close mobile menu"
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
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to talk to an expert.")}`}
              className="btn-primary w-full text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Claim your page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
