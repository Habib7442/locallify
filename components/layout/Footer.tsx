'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "https://wa.me/916000163450" },
      { name: "Reviews", href: "/reviews" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
    ]
  };

  const socials = [
    { name: "WhatsApp", icon: "/social-icons/whatsapp.png", href: "https://wa.me/916000163450" },
    { name: "Instagram", icon: "/social-icons/instagram.png", href: "https://www.instagram.com/locallify.in/" },
  ];

  return (
    <footer className="bg-bg-primary pt-24 pb-12 px-6 border-t border-border-subtle overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="font-display italic text-4xl text-text-primary">
              Locallify.
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed font-light text-lg">
              Modernizing the street. We build elite digital infrastructure for India&apos;s local market legends.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-11 h-11 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center hover:border-accent-primary/30 transition-all duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={20} 
                    height={20} 
                    className="object-contain"
                  />
                </a>
              ))}
              <a href="mailto:locallify26@gmail.com" className="w-11 h-11 rounded-full bg-bg-surface border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-500">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-secondary hover:text-accent-primary transition-colors inline-flex items-center group text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-subtle flex flex-col md:row justify-between items-center gap-6">
           <div className="font-mono text-[10px] text-text-subtle tracking-widest uppercase">
             &copy; {currentYear} Locallify Digital Services. All rights reserved.
           </div>
           <div className="flex items-center gap-2 font-mono text-[9px] text-text-subtle tracking-widest uppercase">
             Made with <span className="text-accent-secondary">⚡</span> for India
           </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display italic text-[12vw] leading-none text-white/[0.03] pointer-events-none select-none whitespace-nowrap z-0">
        Locallify
      </div>
    </footer>
  );
}
