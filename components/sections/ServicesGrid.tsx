'use client';

import { Code2, Smartphone } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';

// Custom Branded SVG Icons
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" />
  </svg>
);

const MapPinSearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5H12V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 5 19.5z" />
  </svg>
);

const N8nIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="19" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="5" r="2" />
    <line x1="5" y1="5" x2="10.2" y2="10.2" />
    <line x1="19" y1="19" x2="13.8" y2="13.8" />
    <line x1="5" y1="19" x2="10.2" y2="13.8" />
    <line x1="19" y1="5" x2="13.8" y2="10.2" />
  </svg>
);

const services = [
  {
    title: 'Custom software',
    description: 'Internal tools, portals, workflow systems, and bespoke platforms shaped around how your company actually works.',
    icon: Code2,
    badge: 'Custom',
    theme: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      hoverBorder: 'hover:border-emerald-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] hover:bg-emerald-500/[0.01]',
    }
  },
  {
    title: 'Web apps & SaaS',
    description: 'Fast, secure, scalable web applications with polished product UX and clean engineering foundations.',
    icon: ReactIcon,
    badge: 'SaaS',
    theme: {
      text: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      hoverBorder: 'hover:border-blue-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.06)] hover:bg-blue-500/[0.01]',
    }
  },
  {
    title: 'Mobile apps',
    description: 'iOS and Android products for teams that need a serious mobile experience, not a web view in disguise.',
    icon: Smartphone,
    badge: 'Mobile',
    theme: {
      text: 'text-orange-400',
      bg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      hoverBorder: 'hover:border-orange-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.06)] hover:bg-orange-500/[0.01]',
    }
  },
  {
    title: 'AI features & voice agents',
    description: 'Practical AI inside real workflows: voice agents (phone intake & support), search, reporting, content operations, and automation.',
    icon: SparklesIcon,
    badge: 'AI Agents',
    theme: {
      text: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      hoverBorder: 'hover:border-purple-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.06)] hover:bg-purple-500/[0.01]',
    }
  },
  {
    title: 'n8n & Automation',
    description: 'Connect your tools, sync lead data to CRMs, and trigger automated custom tasks to optimize business operations.',
    icon: N8nIcon,
    badge: 'Automation',
    theme: {
      text: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
      hoverBorder: 'hover:border-rose-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(244,63,94,0.06)] hover:bg-rose-500/[0.01]',
    }
  },
  {
    title: 'SEO + GEO',
    description: 'Semantic HTML, schema, speed, entity clarity, and answer-ready content so your product gets found on Google and AI search.',
    icon: MapPinSearchIcon,
    badge: 'Discovery',
    theme: {
      text: 'text-accent-primary',
      bg: 'bg-accent-primary/10 border-accent-primary/20 text-accent-primary',
      hoverBorder: 'hover:border-accent-primary/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(208,255,20,0.06)] hover:bg-accent-primary/[0.01]',
    }
  },
  {
    title: 'Product systems',
    description: 'Design systems, Figma designs, dashboards, admin panels, integrations, and launch infrastructure in one build plan.',
    icon: FigmaIcon,
    badge: 'Systems',
    theme: {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
      hoverBorder: 'hover:border-cyan-500/30',
      hoverGlow: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] hover:bg-cyan-500/[0.01]',
    }
  },
];

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="services" className="bg-bg-primary px-6 py-16 border-t border-border-subtle">
      <div className="container mx-auto">
        <div className="mb-16 max-w-4xl text-left">
          <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
            Capabilities
          </span>
          <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
            Software design & development, with <span className="font-display italic font-light text-accent-primary">discovery</span> built in.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-2xl font-light text-left">
            We work with startups, SMBs, and growing companies worldwide that need
            useful software shipped well and positioned clearly.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article 
              key={service.title} 
              variants={cardVariants} 
              className={`group p-8 bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl transition-all duration-300 ${service.theme.hoverBorder} ${service.theme.hoverGlow}`}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className={`rounded-xl p-3 transition-transform duration-500 group-hover:scale-110 ${service.theme.bg}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase bg-bg-elevated border border-border-subtle text-text-muted group-hover:text-text-secondary transition-colors">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-xl font-sans font-semibold text-text-primary tracking-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary text-justify font-light">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
