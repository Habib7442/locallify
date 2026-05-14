'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // Serenity Style States
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY, opacity: 1 });
    };
    const handleMouseLeave = () => setMousePos(prev => ({ ...prev, opacity: 0 }));
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.2 }
      });

      // Staggered word reveal for headline
      if (titleRef.current) {
        const originalText = "We make your shop findable.";
        const words = originalText.split(' ');
        
        titleRef.current.innerHTML = words.map((word, i) => {
          const isItalic = word.toLowerCase().includes('findable');
          return `<span class="inline-block overflow-hidden">
            <span class="inline-block translate-y-[120%] ${isItalic ? 'italic' : ''}">${word}</span>
          </span>${i < words.length - 1 ? '&nbsp;' : ''}`;
        }).join('');

        tl.to(titleRef.current.querySelectorAll('span span'), {
          y: 0,
          stagger: 0.1,
          duration: 1.5,
        });
      }

      tl.from(subheadRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
      }, '-=1');

      tl.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
      }, '-=0.8');

      // Grid line animation
      gsap.from('.grid-line', {
        strokeDashoffset: 1000,
        opacity: 0,
        duration: 2.5,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-40 pb-16 overflow-hidden px-6 bg-bg-primary select-none"
    >
      {/* Serenity-style SVG Grid Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="voltageGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(208, 255, 20, 0.03)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#voltageGrid)" />
        
        {/* Animated Accent Lines */}
        <line x1="0" y1="30%" x2="100%" y2="30%" className="grid-line stroke-accent-primary/10" style={{ strokeDasharray: '5 5', strokeDashoffset: 1000 }} />
        <line x1="70%" y1="0" x2="70%" y2="100%" className="grid-line stroke-accent-primary/10" style={{ strokeDasharray: '5 5', strokeDashoffset: 1000 }} />
        
        {/* Detail Dots */}
        <circle cx="70%" cy="30%" r="2" className="fill-accent-primary/40 animate-pulse" />
      </svg>

      {/* Mouse Follow Gradient */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full blur-[100px] transition-opacity duration-500 will-change-transform"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          opacity: mousePos.opacity * 0.15,
          background: 'radial-gradient(circle, var(--accent-primary), transparent 70%)'
        }}
      />

      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed w-1 h-1 bg-accent-primary/40 rounded-full pointer-events-none z-50 animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      <div className="container mx-auto relative z-20 text-center flex flex-col items-center">
        
        {/* Top Tagline */}
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary">
            Stillness in the Noise
          </span>
          <div className="mt-4 w-12 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mx-auto" />
        </div>

        {/* Headline */}
        <h1 
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight text-text-primary mb-6 max-w-5xl"
        >
          We make your shop findable.
        </h1>
        
        {/* Subhead */}
        <p 
          ref={subheadRef}
          className="font-sans text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl leading-relaxed font-light"
        >
          On Google. On WhatsApp. In 48 hours. <br className="hidden md:block" />
          The new standard for local businesses in <span className="text-accent-primary font-medium">India</span>.
        </p>

        {/* CTA Row */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="https://wa.me/916000163450?text=PAGE" 
            className="btn-primary gap-2 group px-10 py-5 text-lg"
          >
            Claim your page
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link 
            href="/work" 
            className="btn-ghost px-10 py-5 text-lg"
          >
            See live examples
          </Link>
        </div>

        {/* Minimal Detail Line */}
        <div className="mt-12 w-px h-16 bg-gradient-to-b from-accent-primary/40 to-transparent" />
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-bg-surface/30 backdrop-blur-sm border-y border-border-subtle py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
          <span className="mx-12">Made in the North East</span>
          <span className="mx-12">1,000+ Local Legends</span>
          <span className="mx-12">Live in 48 Hours</span>
          <span className="mx-12">Built in India</span>
          <span className="mx-12">Made in the North East</span>
          <span className="mx-12">1,000+ Local Legends</span>
          <span className="mx-12">Live in 48 Hours</span>
          <span className="mx-12">Built in India</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(100); opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-ripple {
          animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
