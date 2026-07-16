import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I'd like to talk about a software project.")}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    studio: [
      { name: "Work", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "About", href: "/about" },
    ],
    contact: [
      { name: "WhatsApp", href: whatsappHref },
      { name: "Email", href: "mailto:hello@locallifyagency.com" },
      { name: "Reviews", href: "/reviews" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  const socials = [
    { name: "WhatsApp", href: whatsappHref },
    { name: "Instagram", href: "https://www.instagram.com/locallify.in/" },
    { name: "Email", href: "mailto:hello@locallifyagency.com" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border-default bg-bg-primary px-6 pb-8 pt-24">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-12 pb-16">
          <div className="md:col-span-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border-default bg-bg-surface">
                <Image src="/logo2.png" alt="Locallify logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-xl font-sans font-bold tracking-tight text-text-primary">Locallify</span>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary font-light">
              A global software studio for custom software, web apps, mobile apps,
              AI features, and SEO + GEO systems built to be found.
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-text-subtle">
              Founded in India &middot; Serving companies globally.
            </p>
            
            {/* Pill-shaped modern social buttons */}
            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-default bg-bg-surface/30 text-[10px] font-mono uppercase tracking-wider text-text-muted hover:text-text-primary hover:border-accent-primary hover:bg-bg-surface/80 transition-all duration-300"
                >
                  {social.name}
                  <ArrowUpRight className="h-3 w-3 text-text-subtle transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-3 gap-6">
            <FooterColumn title="Studio" links={footerLinks.studio} />
            <FooterColumn title="Contact" links={footerLinks.contact} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        {/* Large screen-spanning brand signature */}
        <div className="select-none text-center font-display italic text-[12vw] font-light leading-[0.8] tracking-tight text-border-default/40 py-8 border-y border-border-default/50 selection:bg-transparent">
          Locallify.
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs font-mono uppercase tracking-wider text-text-subtle md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Locallify Digital Services &bull; All rights reserved.</p>
          <p className="text-accent-primary font-bold">Design &bull; Build &bull; Rank.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: Array<{ name: string; href: string }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-accent-primary shrink-0 animate-pulse" />
        <h2 className="text-[10px] font-mono uppercase tracking-widest text-text-muted">{title}</h2>
      </div>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="group inline-flex items-center text-sm font-light text-text-secondary transition-all duration-300 hover:text-text-primary hover:translate-x-0.5"
            >
              {link.name}
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-text-subtle transition-transform duration-300 group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
