import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/cms";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";
import { CONTACT, SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/structured-data";
import { services, getServiceBySlug } from "@/lib/data/services";
import { ArrowRight, ArrowUpRight, Check, Zap } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 3600;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  let relatedProjects: Project[] = [];
  try {
    const allProjects = await projectService.getPublicProjects();
    if (service.matchKeywords.length > 0) {
      relatedProjects = allProjects
        .filter((p) => {
          const haystack = [
            p.category,
            p.industry,
            ...(p.tags || []),
            ...(p.technologies || []),
          ]
            .join(" ")
            .toLowerCase();
          return service.matchKeywords.some((kw) => haystack.includes(kw));
        })
        .slice(0, 3);
    }
  } catch (error) {
    console.error(`Failed to fetch related projects for ${slug}:`, error);
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Graphic = service.graphic;
  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        name: service.h1,
        description: service.metaDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        serviceType: service.serviceType,
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
      faqPageJsonLd(service.faqs),
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full focus:outline-none focus:ring-2 focus:ring-accent-primary"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
              <div className="max-w-2xl flex-1">
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-text-muted">
                  <Link href="/services" className="hover:text-accent-primary transition-colors">Services</Link>
                  <span>/</span>
                  <span className="text-accent-primary">{service.title}</span>
                </nav>
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  {service.heroKicker}
                </span>
                <h1 className="font-display italic text-4xl md:text-6xl leading-[0.95] tracking-tight text-text-primary mb-8">
                  {service.h1}
                </h1>
                <p className="font-sans text-lg text-text-secondary leading-relaxed font-light mb-10">
                  {service.heroIntro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex h-14 px-8 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
                  >
                    Start a project
                  </Link>
                  <Link href="/portfolio" className="btn-ghost">
                    See our work
                  </Link>
                </div>
              </div>

              <div className={`flex-1 w-full max-w-md aspect-square bg-bg-surface/40 border border-border-default rounded-3xl relative overflow-hidden transition-all duration-500 ${service.theme.hoverBorder} shadow-2xl shadow-accent-primary/5 self-center`}>
                <Graphic />
              </div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-16 px-6 border-t border-border-subtle bg-bg-surface/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display italic text-3xl md:text-5xl text-text-primary mb-10">
              {service.painPointsTitle}
            </h2>
            <ul className="space-y-5">
              {service.painPoints.map((point) => (
                <li key={point} className="flex gap-4 items-start">
                  <div className={`shrink-0 w-6 h-6 rounded-full ${service.theme.bg} flex items-center justify-center mt-1`}>
                    <Zap className="w-3 h-3" />
                  </div>
                  <p className="text-text-secondary leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-24 px-6 border-t border-border-subtle">
          <div className="container mx-auto">
            <div className="max-w-2xl mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-4 block">
                What&apos;s included
              </span>
              <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">
                Everything under {service.title}.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className={`p-7 bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl transition-all duration-300 ${service.theme.hoverBorder}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${service.theme.bg}`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-text-primary mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">{cap.desc}</p>
                </div>
              ))}
            </div>

            {service.techStack && service.techStack.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted mr-2">Stack:</span>
                {service.techStack.map((tech) => (
                  <span key={tech} className="text-xs bg-bg-elevated border border-border-default rounded-full px-3 py-1.5 text-text-secondary font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-6 bg-bg-surface border-y border-border-default">
          <div className="container mx-auto">
            <h2 className="font-display italic text-4xl md:text-5xl text-text-primary mb-16 max-w-2xl">
              How we build it.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
              {service.process.map((step, i) => (
                <div key={step.title} className="relative z-10 bg-bg-primary/40 border border-border-default rounded-2xl p-6">
                  <span className="font-mono text-[9px] text-accent-primary uppercase tracking-[0.3em] mb-3 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-sans font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED WORK */}
        {relatedProjects.length > 0 && (
          <section className="py-24 px-6 border-t border-border-subtle">
            <div className="container mx-auto">
              <h2 className="font-display italic text-4xl md:text-5xl text-text-primary mb-4">
                Recent {service.title.toLowerCase()} work
              </h2>
              <p className="text-text-secondary max-w-2xl mb-12 leading-relaxed">
                Real client projects, not stock case studies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="group relative bg-bg-surface/30 backdrop-blur-md border border-border-subtle rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-accent-primary/40"
                  >
                    <div className="relative aspect-video overflow-hidden bg-bg-elevated">
                      <Image
                        src={projectService.getThumbnailUrl(project.heroBannerImage || project.thumbnail)}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-accent-primary mb-2">
                          {project.industry || project.category}
                        </p>
                        <h3 className="text-lg font-sans font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-text-muted group-hover:text-accent-primary transition-colors">
                        View case study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-border-subtle bg-bg-surface/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display italic text-4xl md:text-6xl text-text-primary text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="border border-border-subtle bg-bg-surface/20 p-8 rounded-2xl">
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-4 flex gap-3">
                    <span className="text-accent-primary">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER CAPABILITIES */}
        <section className="py-20 px-6 border-t border-border-subtle">
          <div className="container mx-auto">
            <h2 className="font-display italic text-3xl md:text-4xl text-text-primary mb-10">
              Other capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`group p-6 bg-bg-surface/40 border border-border-default rounded-2xl transition-all duration-300 ${s.theme.hoverBorder}`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${s.theme.bg}`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-sans font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                    {s.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-text-muted group-hover:text-accent-primary transition-colors">
                    Explore
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center px-6 border-t border-border-subtle bg-bg-surface">
          <div className="container mx-auto">
            <h2 className="font-display italic text-5xl md:text-7xl text-text-primary mb-8">
              Ready to start your <br />
              <span className="text-accent-primary not-italic">{service.title.toLowerCase()}</span> project?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-12">
              Tell us what you&apos;re building. We&apos;ll reply with next steps within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(service.ctaMessage)}`}
                className="inline-flex h-14 px-10 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
              >
                Start a project
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
              <a href={`mailto:${CONTACT.email}`} className="btn-ghost">
                Email the brief
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/5 text-xs">
              <Link href="/services" className="text-text-muted hover:text-accent-primary transition-colors">All Services</Link>
              <Link href="/portfolio" className="text-text-muted hover:text-accent-primary transition-colors">Portfolio</Link>
              <Link href="/pricing" className="text-text-muted hover:text-accent-primary transition-colors">Pricing</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
