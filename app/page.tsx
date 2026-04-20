"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Globe, Share2, Megaphone, Smartphone, Star,
  CheckCircle2, ArrowRight, MessageCircle, Phone, ExternalLink,
  Zap, Sparkles, BarChart, Users, Layout, Link as LinkIcon
} from "lucide-react";
import { profileService } from "@/lib/appwrite-service";
import { useBusinessStore } from "@/lib/store";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { publicProfiles, fetchPublicProfiles, isLoading: isLoadingProfiles } = useBusinessStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    fetchPublicProfiles();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchPublicProfiles]);

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
                <Link key={item} href={item === "About" ? "/about" : item === "Portfolio" ? "#portfolio" : `#${item.toLowerCase()}`} className="hover:text-[#203EAA] transition-colors">
                  {item}
                </Link>
              ))}
              <Link href="/onboarding" className="hover:text-[#203EAA] transition-colors">
                Register Business
              </Link>
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
      <section className="relative min-h-screen pt-40 pb-24 bg-[#D2E823] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-16">
          <div className="flex-1 text-center">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black text-[#203EAA] leading-[1.05] tracking-tight mb-8 uppercase"
            >
              Put Your Business on the <br className="hidden md:block" /> <span className="text-black underline decoration-[#203EAA] decoration-[8px] underline-offset-[12px]">Digital Map</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#203EAA] font-bold mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We build websites, manage your Google Business Profile, run ads, and handle social media — so you focus on running your business.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" 
                 className="bg-[#203EAA] text-white px-10 py-6 rounded-full text-xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0_0_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
                Get Free Consultation <ArrowRight />
              </a>
              <Link href="/onboarding" className="bg-white text-black border-4 border-black px-10 py-6 rounded-full text-xl font-black hover:bg-black hover:text-white transition-all text-center">
                Register Your Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER SITES ────────────────────────────────────────── */}
      {publicProfiles.length > 0 && (
        <section className="py-32 bg-[#F3F3F1] border-y-4 border-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16 gap-8">
              <div className="max-w-3xl">
                <span className="text-[#203EAA] font-black text-sm uppercase tracking-widest mb-4 inline-block">Our Community</span>
                <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                  LATEST <span className="text-[#203EAA]">PARTNER</span> SITES
                </h2>
                <p className="text-xl font-bold text-gray-500">Join 50+ local businesses scaling with cinematic digital presences.</p>
              </div>
              <Link href="/onboarding" className="flex items-center justify-center bg-black text-white px-10 py-5 rounded-[30px] font-black uppercase text-sm tracking-widest shadow-[8px_8px_0_0_rgba(210,232,35,1)] hover:translate-y-[-2px] transition-all">
                Join Their Journey
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicProfiles.slice(0, 6).map((profile) => (
                <Link key={profile.$id} href={`/${profile.slug}`} className="group relative h-[500px] rounded-[60px] overflow-hidden border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]">
                  <Image 
                    src={profileService.getFileUrl(profile.cover_id)} 
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-10 space-y-4">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-[25px] overflow-hidden border-4 border-white/20 relative shadow-2xl">
                        <Image src={profileService.getFileUrl(profile.logo_id)} alt={profile.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">{profile.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#D2E823] animate-pulse"></div>
                          <p className="text-[#D2E823] text-[10px] font-black uppercase tracking-widest">{profile.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PORTFOLIO / MASTERPIECES ───────────────────────────── */}
      <section id="portfolio" className="py-32 bg-[#203EAA] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-8">Our <br /><span className="text-[#D2E823]">Masterpieces</span></h2>
              <p className="text-xl font-bold text-blue-200">A showcase of our recent high-conversion designs for local businesses across India.</p>
            </div>
            <Link href="/portfolio" className="group flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest gap-3 shadow-[8px_8px_0_0_rgba(210,232,35,1)] hover:translate-x-[-2px] transition-all">
              View All Works <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { img: "/portfolio/saree/1.png", cat: "Saree & Fashion" },
              { img: "/portfolio/restaurant/1.png", cat: "Restaurant" },
              { img: "/portfolio/salon/1.png", cat: "Salon" },
              { img: "/portfolio/wedding%20cards/1.png", cat: "Wedding Cards" },
              { img: "/portfolio/saree/2.png", cat: "Saree & Fashion" },
              { img: "/portfolio/restaurant/2.png", cat: "Restaurant" },
              { img: "/portfolio/salon/2.png", cat: "Salon" },
              { img: "/portfolio/wedding%20cards/2.png", cat: "Wedding Cards" },
              { img: "/portfolio/saree/3.png", cat: "Saree & Fashion" },
              { img: "/portfolio/restaurant/3.png", cat: "Restaurant" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[40px] border-4 border-black/20 bg-black shadow-2xl"
              >
                <Image
                  src={item.img}
                  alt={item.cat}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-center items-center">
                  <span className="text-white text-xs font-black uppercase tracking-widest">{item.cat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#FF7DBC] border-b-4 border-black text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tighter uppercase">Is Your Business <br /> Invisible Online?</h2>
            <p className="text-xl font-bold text-black/60">In today's digital world, if costumers can't find you on their phones, they're going to your competitors.</p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center items-stretch">
              {[
                { icon: "🌐", title: "No Website or Outdated Site", desc: "Customers search online first. If you're not there, they go to your competitor." },
                { icon: "📍", title: "Google Profile Not Set Up", desc: "Missing from Google Maps means missing customers walking right past you." },
                { icon: "📢", title: "Competitors Getting All the Leads", desc: "While you wait, other businesses are running ads and getting your customers." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-4 border-black rounded-[40px] p-10 shadow-[10px_10px_0_0_rgba(0,0,0,1)] group hover:translate-y-[-5px] transition-all flex flex-col items-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                  <h3 className="text-2xl font-black uppercase mb-4 leading-tight">{item.title}</h3>
                  <p className="text-black/60 font-bold leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-black uppercase tracking-tighter pt-10">
               "That's exactly why we built Locallify — your complete digital growth partner."
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────── */}
      <section id="services" className="py-32 bg-[#E2C1E8] border-b-4 border-black text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">EVERYTHING <br /> YOU NEED TO <br /><span className="text-[#203EAA]">GROW.</span></h2>
              <p className="text-xl font-bold text-black/60">One partner. All your digital needs. Zero headache.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe />, title: "Website Development", desc: "Fast, modern websites that look great on mobile and turn visitors into customers." },
              { icon: <MapPin />, title: "Google Business Profile", desc: "Get found on Google Maps. We set up, verify, and optimize your GBP completely." },
              { icon: <Share2 />, title: "Social Media Management", desc: "Regular posts, stories, and reels across Facebook and Instagram — done for you." },
              { icon: <Megaphone />, title: "Google & Meta Ads", desc: "Targeted ad campaigns that bring real customers, not just clicks and impressions." },
              { icon: <Smartphone />, title: "Mobile Apps", desc: "Simple, affordable mobile apps for businesses that want to offer app-based services." },
              { icon: <Zap />, title: "Smart Single Page", desc: "A cinematic, all-in-one digital business card that captures leads and looks sexy on every screen." }
            ].map((service, i) => (
              <div key={i} className="group bg-white border-4 border-black p-10 rounded-[50px] shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:bg-[#D2E823] transition-all flex flex-col items-center h-full">
                <div className="w-20 h-20 rounded-[30px] bg-[#203EAA] flex justify-center items-center text-white mb-8 group-hover:rotate-12 transition-transform">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-tight">{service.title}</h3>
                <p className="text-black/60 font-bold mb-4 flex-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section className="py-32 bg-[#203EAA] text-white text-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Getting Started <br /> is <span className="text-[#D2E823]">Simple.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your business and goals. We'll understand your needs — no charge, no obligation." },
              { step: "02", title: "We Build & Set Up", desc: "Our team builds your website, sets up your Google profile, and prepares your social media." },
              { step: "03", title: "You Get Customers", desc: "Sit back and watch customers find you online. We manage everything so you don't have to." }
            ].map((item, i) => (
              <div key={i} className="relative group flex flex-col items-center">
                <div className="text-[120px] font-black text-white/10 leading-none mb-4 group-hover:text-[#D2E823]/20 transition-colors">{item.step}</div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-xl font-bold text-blue-200 leading-tight max-w-sm mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
             <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#D2E823] text-black px-12 py-8 rounded-full text-2xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
               Start for Free Today →
             </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ────────────────────────────────────────────── */}
      <section id="pricing" className="py-32 bg-[#F3F3F1] border-y-4 border-black text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20 gap-6">
             <div className="max-w-3xl">
               <h2 className="text-5xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6 flex flex-col items-center select-none">
                 Simple <br /><span className="text-[#203EAA]">Pricing.</span>
               </h2>
               <p className="text-2xl font-black text-black/30 select-none">No hidden fees. Just growth.</p>
             </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="bg-white border-4 border-black rounded-[50px] p-10 flex flex-col items-center relative overflow-hidden group hover:bg-[#D2E823] transition-all">
              <div className="absolute top-8 right-[-40px] bg-red-500 text-white px-12 py-2 rotate-45 font-black text-xs border-2 border-black">OFFER</div>
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Starter</h3>
                <p className="text-sm font-bold text-black/40 mb-8 uppercase tracking-widest italic-none">Digital Kickstart</p>
                <div className="flex flex-col mb-10">
                   <div className="text-6xl font-black leading-none uppercase tracking-tighter">₹999</div>
                   <span className="text-xs font-black uppercase text-red-500 tracking-widest mt-3 underline underline-offset-4">One-time payment</span>
                </div>
                <div className="space-y-4 text-sm font-black uppercase leading-none pb-12 w-full">
                   <div className="flex items-center justify-center gap-3">✓ locallify.in/[username]</div>
                   <div className="flex items-center justify-center gap-3">✓ Cinematic Page</div>
                   <div className="flex items-center justify-center gap-3">✓ Lead Generation</div>
                </div>
              </div>
              <Link href="/onboarding" className="flex items-center justify-center w-full bg-black text-white py-6 rounded-full font-black uppercase text-sm tracking-widest group-hover:bg-white group-hover:text-black transition-all">Claim Now</Link>
            </div>

            {/* Growth */}
            <div className="bg-[#203EAA] text-white border-4 border-black rounded-[50px] p-10 flex flex-col items-center relative overflow-hidden scale-105 shadow-2xl z-10">
              <div className="absolute top-0 left-0 bg-[#FF7DBC] text-black px-6 py-2 rounded-br-2xl font-black text-xs uppercase tracking-widest border-r-4 border-b-4 border-black">POPULAR</div>
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Growth</h3>
                <p className="text-sm font-bold text-blue-200 mb-8 uppercase tracking-widest italic-none">Active Marketing</p>
                <div className="flex flex-col mb-10">
                   <div className="text-6xl font-black leading-none uppercase tracking-tighter">₹9,999</div>
                   <span className="text-xs font-black uppercase text-blue-200 tracking-widest mt-3">Per Month</span>
                </div>
                <div className="space-y-4 text-sm font-black uppercase leading-none pb-12 w-full">
                   <div className="flex items-center justify-center gap-3">✓ Everything in Starter</div>
                   <div className="flex items-center justify-center gap-3">✓ Business Manager</div>
                   <div className="flex items-center justify-center gap-3">✓ 8 Social posts</div>
                   <div className="flex items-center justify-center gap-3">✓ Ad account setup</div>
                </div>
              </div>
              <Link href="/onboarding" className="flex items-center justify-center w-full bg-[#D2E823] text-black py-6 rounded-full font-black uppercase text-sm tracking-widest shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">Scale Up</Link>
            </div>

            {/* Pro */}
            <div className="bg-white border-4 border-black rounded-[50px] p-10 flex flex-col items-center relative overflow-hidden group hover:bg-[#E2C1E8] transition-all">
              <div className="flex-1 w-full">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Pro</h3>
                <p className="text-sm font-bold text-black/40 mb-8 uppercase tracking-widest italic-none">Top Domination</p>
                <div className="flex flex-col mb-10">
                   <div className="text-6xl font-black leading-none uppercase tracking-tighter">₹19,999</div>
                   <span className="text-xs font-black uppercase text-black/40 tracking-widest mt-3">Per Month</span>
                </div>
                <div className="space-y-4 text-sm font-black uppercase leading-none pb-12 w-full">
                   <div className="flex items-center justify-center gap-3">✓ Everything in Growth</div>
                   <div className="flex items-center justify-center gap-3">✓ 20 Social posts</div>
                   <div className="flex items-center justify-center gap-3">✓ Full Ad Mgmt</div>
                   <div className="flex items-center justify-center gap-3">✓ Brand Manager</div>
                </div>
              </div>
              <Link href="/onboarding" className="flex items-center justify-center w-full bg-black text-white py-6 rounded-full font-black uppercase text-sm tracking-widest group-hover:bg-purple-700">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#7E0707] text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">READY TO <br /> DOMINATE?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" 
                 className="w-full sm:w-auto flex items-center justify-center bg-[#D2E823] text-black px-12 py-8 rounded-full text-2xl font-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
                Get Consultation
              </a>
              <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" 
                 className="w-full sm:w-auto flex items-center justify-center bg-white text-black px-12 py-8 rounded-full text-2xl font-black gap-4 hover:bg-zinc-100 shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all">
                <MessageCircle className="w-8 h-8" /> WhatsApp Us
              </a>
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
                    { icon: <LinkIcon className="w-8 h-8" />, label: "Instagram", href: "https://instagram.com/locallify.in" },
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
                   href={item === "About" ? "/about" : item === "Portfolio" ? "#portfolio" : `#${item.toLowerCase()}`} 
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
