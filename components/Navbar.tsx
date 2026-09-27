'use client';

import React, { useState, useEffect, type ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowRight, Briefcase, Layers, Tag, Info, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I'd like to start a software project.")}`;

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
    { name: 'Work', href: '/portfolio', icon: Briefcase },
    { name: 'Services', href: '/services', icon: Layers },
    { name: 'Pricing', href: '/pricing', icon: Tag },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Blog', href: '/blog', icon: BookOpen },
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
          <Link href="/" className="flex items-center group relative z-[110]">
            <Image 
              src="/locallify_dark.svg" 
              alt="Locallify Logo" 
              width={180}
              height={51}
              className="h-9 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-7 text-sm font-medium text-text-secondary">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="inline-flex items-center gap-2 hover:text-text-primary transition-colors relative group py-1"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent-primary group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent-primary transition-all group-hover:w-full" />
                  </Link>
                );
              })}
            </div>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider text-text-inverse transition-all hover:bg-accent-primary hover:text-bg-primary hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              Start a project
              <ArrowRight className="w-3.5 h-3.5" />
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
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-3 font-display italic text-4xl sm:text-5xl text-text-primary hover:text-accent-primary transition-colors"
              >
                <Icon className="w-7 h-7 text-accent-primary" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <div className="pt-8 flex flex-col gap-4">
            <Link
              href="/contact"
              className="btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a project
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
