"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Globe, Share2, Megaphone, Smartphone, Star,
  CheckCircle2, ArrowRight, MessageCircle, BarChart3, Phone
} from "lucide-react";

export default function Home() {
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
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
            <div className={`flex gap-6 font-medium text-sm transition-colors ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
              {["Services", "Pricing", "About"].map((item) => (
                <Link key={item} href={item === "About" ? "/about" : `/#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-locallify-green transition-colors ${!isScrolled ? "text-white" : "text-gray-800"}`}>
                  {item}
                </Link>
              ))}
            </div>
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-locallify-green/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-locallify-green/30">
              Get Free Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-xl font-heading font-semibold text-locallify-blue">
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
            </div>
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-locallify-green text-white font-medium py-4 px-6 rounded-xl w-full text-lg shadow-lg shadow-locallify-green/30 text-center">
              Get Free Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-locallify-dark overflow-hidden flex items-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-locallify-green rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent background-size-20 bg-[length:40px_40px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Put Your Business on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-locallify-green to-emerald-300">Digital Map</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light"
            >
              We build websites, manage your Google Business Profile, run ads, and handle social media — so you focus on running your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-[#00b084] transition-colors text-white font-medium py-4 px-8 rounded-full shadow-xl shadow-locallify-green/20 flex items-center justify-center gap-2 text-lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>


          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="flex-1 relative w-full aspect-square max-w-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-locallify-blue to-locallify-green rounded-[3rem] transform rotate-6 opacity-30 blur-2xl"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center p-8">
              {/* Abstract Representation of Phone/Dashboard */}
              <div className="w-full h-full bg-locallify-dark/50 rounded-2xl border border-white/10 shadow-inner p-4 relative overflow-hidden flex flex-col">
                <div className="h-10 border-b border-white/10 flex items-center justify-center mb-4">
                  <div className="w-24 h-4 bg-white/20 rounded-full"></div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-locallify-blue to-purple-500"></div>
                  <div className="flex-1 flex flex-col justify-center gap-2">
                    <div className="w-3/4 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-1/2 h-3 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 flex items-end p-4">
                   <div className="w-full h-1/2 flex items-end justify-between gap-2">
                     {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                       <div key={i} className="w-full bg-locallify-green/60 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%` }}></div>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-locallify-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-locallify-blue mb-4">Is Your Business Invisible Online?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">In today's digital world, if costumers can't find you on their phones, they're going to your competitors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "🌐", title: "No Website or Outdated Site", desc: "Customers search online first. If you're not there, they go to your competitor." },
              { icon: "📍", title: "Google Profile Not Set Up", desc: "Missing from Google Maps means missing customers walking right past you." },
              { icon: "📢", title: "Competitors Getting All the Leads", desc: "While you wait, other businesses are running ads and getting your customers." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-lg font-medium text-gray-800 border-t border-gray-200 pt-10">
            "That's exactly why we built Locallify — your complete digital growth partner."
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-locallify-blue mb-4">Everything Your Business Needs to Grow Online</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">One partner. All your digital needs. Zero headache.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe className="w-8 h-8 text-locallify-green" />, title: "Website Development", desc: "Fast, modern websites that look great on mobile and turn visitors into customers." },
              { icon: <MapPin className="w-8 h-8 text-locallify-green" />, title: "Google Business Profile", desc: "Get found on Google Maps. We set up, verify, and optimize your GBP completely." },
              { icon: <Share2 className="w-8 h-8 text-locallify-green" />, title: "Social Media Management", desc: "Regular posts, stories, and reels across Facebook and Instagram — done for you." },
              { icon: <Megaphone className="w-8 h-8 text-locallify-green" />, title: "Google & Meta Ads", desc: "Targeted ad campaigns that bring real customers, not just clicks and impressions." },
              { icon: <Smartphone className="w-8 h-8 text-locallify-green" />, title: "Mobile Apps", desc: "Simple, affordable mobile apps for businesses that want to offer app-based services." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border text-center md:text-left border-gray-100 hover:border-locallify-green/30 hover:shadow-[0_8px_30px_rgb(0,200,150,0.12)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-xl bg-white mix-blend-multiply flex justify-center items-center shadow-sm mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-1 mb-6">{service.desc}</p>
                <a href="#" className="font-medium text-locallify-blue group-hover:text-locallify-green flex items-center justify-center md:justify-start gap-2 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gradient-to-br from-locallify-dark to-[#10237E] relative overflow-hidden text-white">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-locallify-blue rounded-full filter blur-[150px] opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Getting Started is Simple</h2>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-white/10"></div>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative">
              {[
                { step: "01", title: "Free Consultation", desc: "Tell us about your business and goals. We'll understand your needs — no charge, no obligation." },
                { step: "02", title: "We Build & Set Up", desc: "Our team builds your website, sets up your Google profile, and prepares your social media." },
                { step: "03", title: "You Get Customers", desc: "Sit back and watch customers find you online. We manage everything so you don't have to." }
              ].map((item, i) => (
                <div key={i} className="relative pt-6 md:pt-0 pb-6 md:pb-0 text-center md:text-left">
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-white/10 -z-10"></div>
                  
                  <div className="w-[120px] h-[120px] rounded-full mx-auto md:mx-0 flex items-center justify-center font-heading text-5xl font-black bg-[#152778] border-[8px] border-[#0D1F6E] relative z-10 mb-6 group hover:scale-105 transition-transform duration-300">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 group-hover:from-locallify-green group-hover:to-emerald-300 transition-colors duration-300">{item.step}</span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray-300 md:pr-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="bg-locallify-green hover:bg-[#00b084] transition-colors text-white font-medium py-4 px-10 rounded-full shadow-lg shadow-locallify-green/20 inline-flex items-center gap-2 text-lg">
              Start for Free Today <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Results & Social Proof Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results for Real Businesses</h2>
          </div>

          {/* Case Studies */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { type: "Restaurant", icon: "🍜", title: "3x More Walk-ins", prob: "No online presence, no Google listing", sol: "Website + GBP setup + social media", res: "3x more walk-in customers in 60 days" },
              { type: "Retail Shop", icon: "👗", title: "₹50k Revenue from Ads", prob: "Low footfall, no digital ads", sol: "Meta ads + Instagram management", res: "₹50,000 revenue from ads in first month" },
              { type: "Service Provider", icon: "🔧", title: "40+ New Service Calls", prob: "No way for customers to find them", sol: "Website + Google Ads", res: "40+ new service calls per month" }
            ].map((caseStudy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-locallify-blue/20 transition-colors relative"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-3xl p-3 rounded-full shadow-sm border border-gray-100">{caseStudy.icon}</div>
                <div className="text-sm font-bold text-locallify-green uppercase tracking-wider mb-2">{caseStudy.type}</div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">{caseStudy.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Problem</div>
                    <div className="text-gray-700 text-sm">{caseStudy.prob}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Solution</div>
                    <div className="text-gray-700 text-sm">{caseStudy.sol}</div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-locallify-blue uppercase font-bold mb-1">Result</div>
                    <div className="text-gray-900 font-medium text-lg">{caseStudy.res}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simplified Testimonials */}
          <div className="bg-locallify-light rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-gray-200 shadow-sm">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-8">
              "Locallify completely transformed our local shop. We went from being invisible to having customers walk in daily saying they found us on Google. Best investment we've ever made."
            </p>
            <div className="font-bold text-gray-900">Rahul Sharma</div>
            <div className="text-gray-500">Owner, Sharma Hardware</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-locallify-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-locallify-blue mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No hidden fees. No surprises. Just results.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-sm text-gray-500 mb-6">Best for new businesses</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-gray-900">₹4,999</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Website: Basic (5 pages)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Google Business Profile Setup</span></li>
                <li className="flex items-start gap-3 opacity-40"><X className="w-5 h-5 shrink-0" /> <span>Social Media</span></li>
                <li className="flex items-start gap-3 opacity-40"><X className="w-5 h-5 shrink-0" /> <span>Google/Meta Ads</span></li>
                <li className="flex items-start gap-3 opacity-40"><X className="w-5 h-5 shrink-0" /> <span>Monthly Report</span></li>
              </ul>
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20am%20interested%20in%20the%20Starter%20plan." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 rounded-xl font-medium border-2 border-gray-200 text-gray-700 hover:border-gray-800 hover:text-gray-900 transition-colors">Get Started</a>
            </div>

            {/* Growth Plan */}
            <div className="bg-locallify-blue rounded-3xl p-8 shadow-2xl relative lg:-mt-8 lg:mb-8 transform lg:scale-105 border border-blue-800">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-locallify-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                Most Popular
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">Growth<span className="ml-2 text-yellow-400">⭐</span></h3>
              <div className="text-sm text-blue-200 mb-6">Best for growing businesses</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">₹9,999</span>
                <span className="text-blue-200">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-white">Website: Custom (10 pages)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-white">GBP Setup + Optimize</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-white">Social Media: 8 posts/month</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-white">Google or Meta Ads</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-white">Monthly Report</span></li>
              </ul>
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20am%20interested%20in%20the%20Growth%20plan." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 rounded-xl font-medium bg-locallify-green text-white hover:bg-[#00b084] shadow-lg shadow-locallify-green/20 transition-colors">Get Started</a>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="text-sm text-gray-500 mb-6">Best for established businesses</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-gray-900">₹19,999</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Website: Advanced (unlimited)</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">GBP Full Management</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Social Media: 20 posts/month</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Google & Meta Ads</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-locallify-green shrink-0" /> <span className="text-gray-700">Dedicated Manager</span></li>
              </ul>
              <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20am%20interested%20in%20the%20Pro%20plan." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 rounded-xl font-medium border-2 border-gray-200 text-gray-700 hover:border-gray-800 hover:text-gray-900 transition-colors">Get Started</a>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">All prices are starting prices. Custom quotes available.</p>
        </div>
      </section>

      {/* Why Locallify */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Local Businesses Choose Us</h2>
              <p className="text-lg text-gray-600 mb-8">We don't just build websites; we build scalable digital engines for local businesses that want real growth without the technical jargon.</p>
              <button className="hidden lg:inline-flex bg-locallify-blue hover:bg-blue-900 transition-colors text-white font-medium py-3 px-8 rounded-full items-center gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 w-full grid sm:grid-cols-2 gap-4 text-left">
              {[
                { icon: "📍", title: "We Know Local Markets", desc: "We understand the local markets across India. We know what works here." },
                { icon: "⚡", title: "Fast Delivery", desc: "No waiting for months. Most projects delivered within 7–14 days." },
                { icon: "💬", title: "Support in Your Language", desc: "We communicate in Assamese, Hindi, Bengali, and English." },
                { icon: "💰", title: "Affordable Indian Pricing", desc: "Premium quality at prices built for Indian local businesses." }
              ].map((feature, i) => (
                <div key={i} className="bg-gray-50 border-l-4 border-locallify-green p-6 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-locallify-dark relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20 background-size-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent bg-[length:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Get a free consultation today — no commitment required.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/919957882204?text=Hi%20Locallify%2C%20I%20would%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-locallify-green hover:bg-[#00b084] transition-colors text-white font-medium py-4 px-10 rounded-full shadow-lg shadow-locallify-green/20 text-lg flex justify-center items-center">
              Get Free Consultation
            </a>
            <a href="https://wa.me/919957882204" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5b] transition-colors text-white font-medium py-4 px-10 rounded-full shadow-lg flex justify-center items-center gap-2 text-lg">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 font-montserrat font-bold text-2xl mb-4 tracking-tight">
                <Image
                  src="/logo.png"
                  alt="Locallify"
                  width={140}
                  height={140}
                  className="w-auto h-16 md:h-20 brightness-0 invert opacity-90"
                />
              </Link>
              <p className="mb-6 text-sm max-w-sm text-gray-400 leading-relaxed">Empowering Local Business through premium digital experiences and measurable growth.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-locallify-green hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-locallify-green hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
              </div>
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
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-locallify-green transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-locallify-green transition-colors">Google Business Profile</a></li>
                <li><a href="#" className="hover:text-locallify-green transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-locallify-green transition-colors">Google & Meta Ads</a></li>
                <li><a href="#" className="hover:text-locallify-green transition-colors">Mobile Apps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact</h4>
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
                  <div className="w-5 h-5 flex items-center justify-center text-locallify-green shrink-0">✉️</div>
                  <a href="mailto:business@locallify.in" className="hover:text-locallify-green transition-colors">business@locallify.in</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-locallify-green shrink-0" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Locallify.in · All Rights Reserved</p>
            <p>Made with <span className="text-red-500">❤️</span> in India</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919957882204"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform z-50 animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
