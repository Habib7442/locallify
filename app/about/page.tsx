"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Globe, Share2, Megaphone, Smartphone, Star,
  CheckCircle2, ArrowRight, MessageCircle, Phone, ExternalLink,
  Zap, Sparkles, BarChart, Users, Layout,  Link as LinkIcon
} from "lucide-react";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-locallify-lime selection:text-black bg-white overflow-x-hidden">
      {/* ─── NAVIGATION ────────────────────────────────────────────── */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white py-4 shadow-xl border-b-4 border-black" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative z-50 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Locallify"
              priority
              width={200}
              height={200}
              className="w-auto h-16 md:h-20 transition-all"
            />
            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-black">Locallify</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex gap-8 font-black uppercase text-xs tracking-widest ${isScrolled ? "text-black/70" : "text-black"}`}>
              {["Services", "Portfolio", "Pricing", "About"].map((item) => (
                <Link key={item} href={item === "About" ? "/about" : item === "Portfolio" ? "#portfolio" : `/#${item.toLowerCase()}`} className="hover:text-[#203EAA] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" 
               className="bg-[#203EAA] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-tighter shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] active:translate-y-[2px] transition-all">
              Get Free Consultation
            </a>
          </div>

          <button className="lg:hidden z-50 bg-black text-white p-4 rounded-full flex items-center justify-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-screen pt-48 pb-32 bg-[#203EAA] flex items-center text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2E823] rounded-full blur-[300px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-[#D2E823] font-black uppercase tracking-[0.3em] mb-8 inline-block text-sm">Our Manifesto</span>
            <h1 className="text-6xl md:text-[150px] font-black text-white leading-[0.85] tracking-tighter uppercase mb-12 select-none">
              LOCAL <br /> IS THE NEW <br /><span className="text-[#D2E823]">GLOBAL.</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold text-blue-100 max-w-3xl mx-auto leading-tight mb-20 italic-none">
              We started with one mission: To give local Indian businesses the cinematic digital presence they deserve.
            </p>
            <div className="w-px h-32 bg-gradient-to-b from-[#D2E823] to-transparent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* ─── THE MISSION BENTO ───────────────────────────────────── */}
      <section className="py-32 bg-white border-y-8 border-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6">
            
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="lg:col-span-7 bg-[#FF7DBC] border-4 border-black p-12 rounded-[60px] flex flex-col justify-center items-center text-center shadow-[15px_15px_0_0_rgba(0,0,0,1)]"
            >
              <h2 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter uppercase mb-8">THE <br /> PROBLEM</h2>
              <p className="text-xl md:text-2xl font-black text-black/60 leading-tight uppercase">
                Most local businesses are invisible online. Not because they lack quality, but because they lack the digital infrastructure to compete with big giants.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="lg:col-span-5 bg-[#D2E823] border-4 border-black p-12 rounded-[60px] flex flex-col items-center justify-center text-center shadow-[15px_15px_0_0_rgba(0,0,0,1)]"
            >
              <h2 className="text-5xl md:text-7xl font-black text-[#203EAA] leading-none tracking-tighter uppercase mb-8">OUR <br /> EYES</h2>
              <p className="text-xl font-black text-[#203EAA] uppercase leading-tight italic">
                We don't see customers. We see masterpieces waiting to be digitalized.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="lg:col-span-12 bg-black border-4 border-black p-16 rounded-[80px] flex flex-col items-center text-center text-white relative overflow-hidden group shadow-[20px_20px_0_0_rgba(32,62,170,1)]"
            >
               <div className="relative z-10">
                 <h2 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-10">LOCALLIFY'S <br /><span className="text-[#D2E823]">SOUL.</span></h2>
                 <p className="text-2xl font-bold text-white/50 max-w-4xl mx-auto leading-relaxed mb-12">
                   Locallify was born out of a desire to level the playing field. Based in <span className="text-[#D2E823]">Silchar, India</span>, we help local enterprises across the country dominate their digital space with ROI-focused designs.
                 </p>
                 <div className="flex flex-wrap justify-center gap-4">
                    {["Premium Design", "Business Growth", "Local Focus", "Speed", "Cinema Vibe"].map(tag => (
                      <span key={tag} className="px-8 py-4 bg-white/10 rounded-full font-black uppercase text-xs tracking-widest border border-white/10 group-hover:bg-[#203EAA] transition-all">{tag}</span>
                    ))}
                 </div>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────── */}
      <section className="py-32 bg-[#E2C1E8] text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase mb-8">Why Businesses <br /><span className="text-[#203EAA]">Stuck</span> with Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { color: "bg-white", title: "Local Empathy", desc: "We don't impose generic templates. We understand the unique pulse of your local market." },
              { color: "bg-[#203EAA]", text: "text-white", title: "Speed & Excellence", desc: "Premium doesn't mean slow. Our agile workflows ensure rapid delivery without compromises." },
              { color: "bg-[#D2E823]", title: "Zero Jargon", desc: "Clear reporting. No confusing tech talk. Just results that you can see and measure." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`${card.color} ${card.text || "text-black"} p-12 border-4 border-black rounded-[50px] shadow-[10px_10px_0_0_rgba(0,0,0,1)] flex flex-col items-center h-full`}
              >
                <div className="text-5xl mb-10">★</div>
                <h3 className="text-3xl font-black leading-none uppercase tracking-tighter mb-6">{card.title}</h3>
                <p className={`text-xl font-bold ${card.text ? "text-blue-100" : "text-black/60"} leading-tight`}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── READY TO GROW ────────────────────────────────────────── */}
      <section className="py-32 bg-[#7E0707] text-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">READY TO <br /> LEVEL UP?</h2>
           <p className="text-2xl font-bold text-red-200 mb-16 max-w-2xl mx-auto leading-tight italic-none uppercase">Join 50+ local businesses scaling with cinematic digital presences.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center bg-[#D2E823] text-black px-12 py-8 rounded-full text-2xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
               Get Consultation
             </a>
             <Link href="/onboarding" className="w-full sm:w-auto flex items-center justify-center bg-white text-black px-12 py-8 rounded-full text-2xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
               Join Today
             </Link>
           </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer className="bg-black text-white py-32 border-t-8 border-[#203EAA] text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
             <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-4 mb-8">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                     <Image src="/logo.png" alt="Locallify" width={80} height={80} className="w-auto h-12 brightness-0 invert" />
                   </div>
                   <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">Locallify</span>
                </div>
                <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/30 max-w-xl leading-none italic-none mb-10">
                  PUTTING YOUR BUSINESS <br /> ON THE MAP SINCE DAY ONE.
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-6 justify-center">
                  {[
                    { icon: <LinkIcon className="w-8 h-8" />, label: "Instagram", href: "https://www.instagram.com/locallify26/" },
                    { icon: <Globe className="w-8 h-8" />, label: "Website", href: "/" },
                    { icon: <MessageCircle className="w-8 h-8" />, label: "WhatsApp", href: "https://wa.me/919957882204" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-[22px] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D2E823] hover:text-black hover:border-[#D2E823] hover:translate-y-[-5px] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-2 gap-x-24 gap-y-12 w-full max-w-2xl border-y-2 border-white/5 py-16">
               <div className="flex flex-col items-center">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#D2E823] mb-8">Navigation</h4>
                  <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
                    <li><Link href="/about" className="hover:text-[#D2E823] transition-colors">About Us</Link></li>
                    <li><Link href="#portfolio" className="hover:text-[#D2E823] transition-colors">Portfolio</Link></li>
                    <li><Link href="#pricing" className="hover:text-[#D2E823] transition-colors">Pricing</Link></li>
                  </ul>
               </div>
               <div className="flex flex-col items-center">
                  <h4 className="text-xs font-black uppercase tracking-[0.4em] text-[#D2E823] mb-8">Get In Touch</h4>
                  <ul className="space-y-4 text-xl md:text-2xl font-black uppercase tracking-tighter">
                    <li className="hover:text-[#D2E823] transition-colors">+91 60001 63450</li>
                    <li className="hover:text-[#D2E823] transition-colors uppercase">business@locallify.in</li>
                    <li className="text-white/40">Silchar, India</li>
                  </ul>
               </div>
             </div>

             <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-8 font-black uppercase tracking-[0.2em] text-[10px] text-white/20">
                <span>© 2026 LOCALLIFY — ALL RIGHTS RESERVED</span>
                <div className="flex gap-8">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
                <span>MADE BY THE LOCALLIFY TEAM</span>
             </div>
          </div>
        </div>
      </footer>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }} 
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#D2E823] z-[100] flex flex-col p-10 overflow-y-auto items-center text-center"
          >
            <div className="flex justify-between items-center w-full mb-20">
               <div className="flex items-center gap-3">
                 <Image src="/logo.png" alt="Locallify" width={140} height={140} className="h-12 w-auto" />
                 <span className="text-xl font-black uppercase text-black">Locallify</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="bg-black text-white p-4 rounded-full">
                 <X className="w-6 h-6" />
               </button>
            </div>
            <div className="flex flex-col gap-6 w-full">
               {["Services", "Portfolio", "Pricing", "About"].map(item => (
                 <Link 
                   key={item} 
                   href={item === "About" ? "/about" : item === "Portfolio" ? "#portfolio" : `/#${item.toLowerCase()}`} 
                   onClick={() => setIsMobileMenuOpen(false)} 
                   className="text-6xl font-black text-[#203EAA] tracking-tighter uppercase leading-none hover:scale-105 transition-transform"
                 >
                   {item}
                 </Link>
               ))}
               <hr className="border-black/10 my-4" />
               <Link href="/onboarding" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-black tracking-tighter uppercase leading-none">Register Biz</Link>
               <a href="https://wa.me/919957882204" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-[#203EAA] tracking-tighter uppercase leading-none underline">Consultation</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
