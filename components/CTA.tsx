'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from 'motion/react';

interface CTAProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CTA({ 
  title = <>JOIN THE <br /> <span className="text-accent-primary italic font-display">REVOLUTION.</span></>,
  subtitle = "We don't just build pages. We build digital legacies. Join the elite businesses across India who are already winning the digital game.",
  primaryBtnText = "START A PROJECT →",
  primaryBtnHref = "/contact",
  secondaryBtnText = "WHATSAPP US",
  secondaryBtnHref = "https://wa.me"
}: CTAProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-bg-primary">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(208,255,20,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-6xl mx-auto space-y-12 md:space-y-16 text-center"
         >
           <h2 className="text-4xl md:text-7xl font-sans font-black leading-[1.1] tracking-tighter uppercase text-text-primary select-none">
             {title}
           </h2>
           <p className="text-lg md:text-xl font-medium text-text-secondary max-w-3xl mx-auto leading-relaxed">
             {subtitle}
           </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
             <Link 
               href={primaryBtnHref} 
               className="w-full sm:w-auto bg-accent-primary text-bg-primary px-10 py-5 rounded-2xl text-base font-sans font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl text-center"
             >
               {primaryBtnText}
             </Link>
             <Link 
               href={secondaryBtnHref.startsWith('https://wa.me') 
                 ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to chat with the team.")}`
                 : secondaryBtnHref}
               className="w-full sm:w-auto bg-bg-surface border-2 border-border-subtle text-text-primary px-10 py-5 rounded-2xl text-base font-sans font-black uppercase tracking-widest hover:bg-bg-elevated transition-all flex items-center justify-center gap-4 group text-center shadow-sm"
             >
               <div className="relative w-6 h-6 group-hover:scale-110 transition-transform">
                 <Image src="/social-icons/whatsapp.png" alt="WhatsApp" fill sizes="32px" className="object-contain" />
               </div>
               {secondaryBtnText}
             </Link>
           </div>
         </motion.div>
      </div>
    </section>
  );
}
