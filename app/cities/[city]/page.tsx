import React from "react";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/appwrite-service";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, Globe, ArrowRight, Zap, CheckCircle2, Star, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Project } from "@/lib/types";

// Priority City Data
const CITY_DATA: Record<string, {
  name: string;
  state: string;
  landmark: string;
  description: string;
  faqs: { question: string; answer: string }[];
}> = {
  silchar: {
    name: "Silchar",
    state: "Assam",
    landmark: "Barak Valley",
    description: "Get your Silchar business found on Google Maps. We build premium, high-speed WhatsApp storefronts for salons, clinics, and retail shops in Cachar and Barak Valley.",
    faqs: [
      {
        question: "Can Locallify help my shop in Silchar get more walk-in customers?",
        answer: "Yes! Most customers in Silchar search for local shops on Google Maps. We claim and fully optimize your Google Business Profile with keyword strategies for Barak Valley so your business appears first when they search."
      },
      {
        question: "How long does it take to launch a storefront in Silchar?",
        answer: "Our team operates locally in Silchar, meaning we can get your storefront up and running, and fully optimized on Google in under 48 hours."
      }
    ]
  },
  guwahati: {
    name: "Guwahati",
    state: "Assam",
    landmark: "Brahmaputra Valley",
    description: "Guwahati's leading local business storefront builder. Dominate local search results, optimize your Google profile, and receive orders directly on WhatsApp.",
    faqs: [
      {
        question: "How does Locallify compete with standard digital agencies in Guwahati?",
        answer: "Traditional Guwahati agencies charge huge monthly retainers for bloated websites. Locallify offers a high-performance, mobile-first one-page storefront and Google Maps SEO for a fraction of the cost, loading instantly even on 4G."
      },
      {
        question: "Will this help my Guwahati retail store receive online orders?",
        answer: "Yes, we integrate smart WhatsApp catalog ordering, enabling Guwahatians to browse your products and send order requests straight to your WhatsApp."
      }
    ]
  },
  imphal: {
    name: "Imphal",
    state: "Manipur",
    landmark: "Kangla Fort",
    description: "Build a premium digital presence for your Imphal business. Optimize your Google Maps profile and drive WhatsApp leads in Manipur.",
    faqs: [
      {
        question: "Why does my Imphal business need Google Maps optimization?",
        answer: "With increasing internet adoption in Imphal, local searches for services like salons, gyms, and pharmacies are skyrocketing. Getting listed in the Local Pack is the fastest way to get discovered."
      },
      {
        question: "Do you provide support for business owners in Manipur?",
        answer: "Yes, we offer ongoing management for updates, reviews, and SEO rankings, letting you focus on running your business."
      }
    ]
  },
  shillong: {
    name: "Shillong",
    state: "Meghalaya",
    landmark: "Police Bazar",
    description: "Get your Shillong business on the map. Stand out in Meghalaya with a high-speed digital storefront and professional Google SEO.",
    faqs: [
      {
        question: "Can a tourist-facing business in Shillong benefit from Locallify?",
        answer: "Absolutely! Tourists in Shillong rely heavily on Google Maps to find local cafes, boutiques, hotels, and cabs. We ensure you appear prominently on Google Search and Maps."
      },
      {
        question: "Is the storefront page optimized for slow mobile networks in Meghalaya?",
        answer: "Yes. Our pages are built on the Voltage Design System using Next.js static generation, loading in under 1 second even on spotty 3G/4G connections in Shillong."
      }
    ]
  }
};

const getCityData = (citySlug: string) => {
  const normalized = citySlug.toLowerCase();
  if (CITY_DATA[normalized]) return CITY_DATA[normalized];

  // Dynamic Fallback for any other city
  const name = citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, " ");
  return {
    name,
    state: "India",
    landmark: "local market area",
    description: `Claim your Google Business Profile and build a premium digital storefront in ${name}. Get found by local customers in ${name} within 48 hours.`,
    faqs: [
      {
        question: `How does Locallify help my shop in ${name} get more customers?`,
        answer: `Most customers in ${name} search for services on Google Maps. We optimize your Google Business Profile with specialized local SEO keywords so you rank #1 in ${name}.`
      },
      {
        question: `Can I set up WhatsApp ordering for my business in ${name}?`,
        answer: `Yes! We build a direct WhatsApp commerce flow, allowing customers in ${name} to browse your products and order instantly.`
      }
    ]
  };
};

export async function generateStaticParams() {
  return [
    { city: "silchar" },
    { city: "guwahati" },
    { city: "imphal" },
    { city: "shillong" }
  ];
}

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  
  return constructMetadata({
    title: `Best Google Business & Website Services in ${data.name}, ${data.state} | Locallify`,
    description: data.description,
    keywords: [
      `Local SEO ${data.name}`,
      `Google Business Profile ${data.name}`,
      `Website builder ${data.name}`,
      `Digital marketing agency ${data.name}`,
      `WhatsApp marketing ${data.name}`,
      `Web development ${data.name}`,
      `Locallify ${data.name}`
    ]
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const data = getCityData(city);

  let projects: Project[] = [];
  try {
    const allProjects = await projectService.getPublicProjects();
    // Filter projects matching the city name in tags or description
    projects = allProjects.filter(p => 
      p.tags?.some(t => t.toLowerCase() === city.toLowerCase() || t.toLowerCase().includes(data.name.toLowerCase())) || 
      p.description?.toLowerCase().includes(data.name.toLowerCase())
    );
  } catch (error) {
    console.error("Failed to fetch projects for city page:", error);
  }

  // Schema generation
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://locallify.in/cities/${city}#localbusiness`,
        "name": `Locallify ${data.name}`,
        "image": "https://locallify.in/og_image.png",
        "url": `https://locallify.in/cities/${city}`,
        "telephone": process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": data.name,
          "addressRegion": data.state,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "description": `${data.landmark} in ${data.name}`
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://locallify.in/cities/${city}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://locallify.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://locallify.in/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.name,
            "item": `https://locallify.in/cities/${city}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://locallify.in/cities/${city}#faq`,
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary"
      >
        Skip to content
      </a>
      
      <Navbar />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          {/* Glowing Mesh Background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(208,255,20,0.06)_0%,transparent_70%)] blur-[100px]" />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
                Local Dominance &middot; {data.name}
              </span>
              <h1 className="font-display italic text-5xl md:text-8xl leading-[0.9] tracking-tight text-text-primary mb-8">
                Get your <span className="text-text-muted not-italic">{data.name}</span> <br /> 
                business on Google.
              </h1>
              <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light mb-10">
                A high-conversion digital presence built for the shop owners and local legends of <span className="text-text-primary font-medium">{data.name}, {data.state}</span>. Optimize your Google Maps profile and capture WhatsApp leads in under 48 hours.
              </p>
              
              <Link 
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I want to dominate local search in ${data.name}.`)}`}
                className="inline-flex h-14 px-8 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
              >
                Claim your page in {data.name}
              </Link>
            </div>
          </div>
        </section>

        {/* LOCAL SHOWCASE */}
        <section className="py-16 px-6 border-t border-border-subtle bg-bg-surface/10">
          <div className="container mx-auto">
            <h2 className="font-display italic text-3xl md:text-5xl text-text-primary mb-12">
              Shops we power in {data.name}
            </h2>
            
            {projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <div 
                    key={project.$id}
                    className="relative bg-bg-surface/30 backdrop-blur-md border border-border-subtle p-8 rounded-none flex flex-col group transition-all duration-500 hover:bg-bg-elevated/30 hover:border-accent-primary/20"
                  >
                    {/* Hover highlights */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_rgba(208,255,20,0.8)]" />
                    
                    <div className="relative aspect-video overflow-hidden rounded-none bg-[#0C0C10] mb-8 border border-border-subtle flex items-center justify-center p-2">
                      <Image
                        src={projectService.getThumbnailUrl(project.thumbnail)}
                        alt={project.title}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                            {project.title}
                          </h3>
                          {project.live_url && (
                            <a 
                              href={project.live_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 border border-border-subtle text-text-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                            >
                              <ArrowUpRight size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, i) => (
                          <span key={i} className="text-[9px] font-mono uppercase tracking-widest text-text-muted border border-border-subtle px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-border-subtle bg-bg-surface/30 backdrop-blur-md p-12 text-center rounded-none max-w-2xl">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Be the business that sets the standard. We are currently selecting the elite salons, retail stores, and clinics in <span className="text-text-primary font-medium">{data.name}</span> to dominate the local Google search listings.
                </p>
                <Link 
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I want my business to be the first Locallify showcase in ${data.name}.`)}`}
                  className="inline-flex h-11 px-6 items-center justify-center border border-accent-primary text-accent-primary font-sans font-bold uppercase tracking-widest text-[10px] hover:bg-accent-primary hover:text-bg-primary transition-colors"
                >
                  Apply as Launch Partner
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* LOCAL VALUE PROPOSITION */}
        <section className="py-24 px-6 border-t border-border-subtle">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display italic text-4xl md:text-6xl text-text-primary mb-8">
                How we win {data.name}&apos;s local market.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Ranking on Google isn&apos;t about generic keywords. It&apos;s about claiming your territory. We optimize your local profile specifically for customers searching in {data.name}.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Hyperlocal Keyword Mapping", desc: `Targeting searches specifically around ${data.landmark} and Cachar districts.` },
                  { title: "Review Acceleration", desc: "Automated WhatsApp flows that request reviews from customers at the perfect moment." },
                  { title: "Sub-Second Storefronts", desc: "Mobile-optimized storefronts that load instantly on local networks, converting traffic into WhatsApp orders." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary mt-1">
                      <Zap className="w-3 h-3" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-text-primary">{item.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-bg-surface border border-border-subtle p-8 md:p-12 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-50" />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">The Package</span>
                <h3 className="font-display italic text-3xl text-text-primary mt-4 mb-6">All-Inclusive Domination</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  No hidden fees, no complex setup. A high-speed storefront, complete Google Maps listing setup, local review system, and hosting.
                </p>
              </div>
              <div className="border-t border-border-subtle pt-6 flex justify-between items-end">
                <div>
                  <p className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Pricing Starts At</p>
                  <p className="text-3xl font-display italic text-accent-primary mt-1">₹1,499<span className="text-xs text-text-secondary not-italic font-sans">/mo</span></p>
                </div>
                <Link 
                  href="/pricing"
                  className="inline-flex h-11 px-6 items-center bg-bg-primary border border-border-subtle hover:border-text-primary text-text-primary font-sans font-bold uppercase tracking-widest text-[9px]"
                >
                  View Pricing details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 border-t border-border-subtle bg-bg-surface/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display italic text-4xl md:text-6xl text-text-primary text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <div key={i} className="border border-border-subtle bg-bg-surface/20 p-8 rounded-none">
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-4 flex gap-3">
                    <span className="text-accent-primary">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-24 text-center px-6 border-t border-border-subtle bg-bg-surface">
          <div className="container mx-auto">
            <h2 className="font-display italic text-5xl md:text-7xl text-text-primary mb-8">
              Dominate search in <br />
              <span className="text-accent-primary not-italic">{data.name}.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-12">
              Ready to take your business to the next level? Claim your localized storefront and set up your Google profile today.
            </p>
            <Link 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm ready to launch my storefront in ${data.name}.`)}`}
              className="inline-flex h-14 px-10 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors mb-8"
            >
              Get Started Now
            </Link>
            
            <div className="flex justify-center gap-6 mt-8 text-xs">
              <Link href="/" className="text-text-muted hover:text-accent-primary transition-colors">Home</Link>
              <span className="text-white/10">&middot;</span>
              <Link href="/portfolio" className="text-text-muted hover:text-accent-primary transition-colors">Portfolio</Link>
              <span className="text-white/10">&middot;</span>
              <Link href="/pricing" className="text-text-muted hover:text-accent-primary transition-colors">Pricing</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
