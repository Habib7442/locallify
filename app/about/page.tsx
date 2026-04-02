"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, MapPin, Globe, Share2, Megaphone, Smartphone, Star,
  CheckCircle2, ArrowRight, Target, Users, Zap, Heart, MessageCircle, Phone
} from "lucide-react";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-poppins text-gray-800 bg-white min-h-screen overflow-x-hidden">
      {/* Navigation (Duplicated for standalone capability) */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative z-50 flex items-center gap-2 font-montserrat font-bold text-xl md:text-2xl tracking-tight">
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
            {["Services", "Pricing", "About"].map((item) => (
              <Link key={item} href={item === "About" ? "/about" : `/#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-locallify-green transition-colors ${!isScrolled ? "text-white" : "text-gray-800"}`}>
                {item}
              </Link>
            ))}
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-locallify-green/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-locallify-green/30">
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
          >
            {["Services", "Pricing", "About"].map((item) => (
              <Link
                key={item}
                href={item === "About" ? "/about" : `/#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-montserrat font-semibold text-locallify-blue"
              >
                {item}
              </Link>
            ))}
            <a 
              href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation."
              target="_blank" rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-locallify-green text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-locallify-green/20"
            >
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </nav>

     {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-locallify-blue overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-locallify-green/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-locallify-dark-blue rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-locallify-green" />
                <span>Our Story</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-montserrat tracking-tight text-white leading-[1.1] mb-6">
                Championing the <span className="text-locallify-green">Local Economy</span> in the Digital Age.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                We believe that every local business deserves a world-class digital presence. Locallify was born out of a desire to level the playing field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-24 bg-locallify-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-locallify-blue mb-6">
                Why We Do What We Do
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                In an era where massive corporations dominate search results and social media feeds, local businesses often struggle to stand out—not because they lack quality, but because they lack the digital infrastructure.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Locallify, our mission is simple: empower local enterprises across India with premium website design and ROI-focused digital marketing that genuinely converts visitors into loyal customers.
              </p>
              

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square bg-locallify-dark rounded-3xl overflow-hidden relative shadow-2xl group">
                <Image
                  src="/locallify-team.png"
                  alt="Locallify Team cooperating"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-locallify-dark/90 via-locallify-dark/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
                   <div>
                     <h3 className="text-2xl font-bold text-white mb-4 font-montserrat tracking-tight">Our Vision</h3>
                     <p className="text-white/95 leading-relaxed drop-shadow-md font-medium">To be the catalyst that transforms local Indian businesses into digital powerhouses, enabling them to compete and thrive on a global scale.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-locallify-blue mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide every pixel we push and every campaign we launch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-locallify-green" />,
                title: "Local Empathy",
                desc: "We don't impose generic templates. We take the time to understand the unique pulse of your local market and audience."
              },
              {
                icon: <Zap className="w-8 h-8 text-locallify-green" />,
                title: "Speed & Excellence",
                desc: "We believe premium doesn't have to mean slow. Our agile workflows ensure rapid delivery without compromising on high-end aesthetics."
              },
              {
                icon: <Heart className="w-8 h-8 text-locallify-green" />,
                title: "Radical Transparency",
                desc: "No confusing tech jargon. No hidden fees. We believe in clear reporting and educating our clients every step of the way."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-locallify-light p-10 rounded-3xl hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-montserrat text-locallify-blue mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-locallify-blue rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-locallify-green rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold font-montserrat text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-white/80 mb-10">
                Join dozens of successful local businesses across India who trust Locallify to handle their digital presence.
              </p>
              <Link 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-locallify-green hover:bg-emerald-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-locallify-green/20"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1656] text-white pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-12">
            <div className="md:col-span-4 lg:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2 font-montserrat font-bold text-2xl mb-4 tracking-tight">
                <Image
                  src="/logo.png"
                  alt="Locallify"
                  width={140}
                  height={140}
                  className="w-auto h-16 md:h-20 brightness-0 invert opacity-90"
                />
              </Link>
              <p className="mb-6 text-sm max-w-sm text-gray-300 leading-relaxed">Empowering Local Business through premium digital experiences and measurable growth.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-locallify-green hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-locallify-green hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-locallify-green hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold font-montserrat mb-6">Services</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/#services" className="hover:text-locallify-green transition-colors">Website Design</Link></li>
                  <li><Link href="/#services" className="hover:text-locallify-green transition-colors">Google Business Profile</Link></li>
                  <li><Link href="/#services" className="hover:text-locallify-green transition-colors">Social Media Marketing</Link></li>
                  <li><Link href="/#services" className="hover:text-locallify-green transition-colors">Performance Ads</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold font-montserrat mb-6">Company</h4>
                <ul className="space-y-4 text-sm">
                  <li><Link href="/about" className="hover:text-locallify-green transition-colors">About Us</Link></li>
                  <li><Link href="/#pricing" className="hover:text-locallify-green transition-colors">Pricing Plans</Link></li>
                  <li><Link href="/#contact" className="hover:text-locallify-green transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold font-montserrat mb-6">Contact Us</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-locallify-green shrink-0" />
                    <a href="tel:+916000163450" className="hover:text-locallify-green transition-colors">+91 60001 63450</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-locallify-green shrink-0" />
                    <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" className="hover:text-locallify-green transition-colors">+91 99578 82204</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-locallify-green shrink-0" />
                    <a href="mailto:business@locallify.in" className="hover:text-locallify-green transition-colors">business@locallify.in</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-locallify-green shrink-0" />
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Locallify.in · All Rights Reserved</p>
            <p>Made with <span className="text-red-500">❤️</span> in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
