import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <Navbar />

      <main id="main-content" className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 block">
            404
          </span>
          <h1 className="font-display italic text-5xl md:text-7xl leading-[0.9] tracking-tight text-text-primary mb-8">
            This page isn&apos;t here.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            It may have moved, or the link had a typo. These are the pages most people are looking for:
          </p>

          <ul className="divide-y divide-border-subtle border-y border-border-subtle">
            {[
              { href: "/portfolio", label: "See the work we've shipped" },
              { href: "/services", label: "What we build" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Engineering & GEO articles" },
              { href: "/contact", label: "Start a project" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-5 text-text-primary hover:text-accent-primary transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
