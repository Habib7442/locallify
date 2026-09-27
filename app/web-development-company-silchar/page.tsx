import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { projectService } from "@/lib/cms";
import { Project } from "@/lib/types";
import { constructMetadata } from "@/lib/seo";
import { CONTACT, NAP, SITE_URL } from "@/lib/site-config";
import NapDetails from "@/components/NapDetails";
import { breadcrumbJsonLd, faqPageJsonLd, localBusinessJsonLd } from "@/lib/structured-data";
import { ArrowRight, ArrowUpRight, MapPin, Zap } from "lucide-react";

export const metadata = constructMetadata({
  title: "Web Development Company in Silchar, Assam | Locallify",
  description:
    "Locallify is a Silchar-based software studio building custom software, web apps, and mobile apps for businesses in Cachar, Barak Valley, and worldwide. See our local work.",
  alternates: { canonical: "/web-development-company-silchar" },
});

export const revalidate = 3600;

const faqs = [
  {
    question: "Do you actually work with businesses in Silchar, or is this a franchise/agency network?",
    answer:
      "We're based in Silchar, Assam, and this is where our team works from day to day. The clinics, hotels, and clients you see in our portfolio are real Barak Valley businesses we've built for directly.",
  },
  {
    question: "What kind of Silchar businesses do you build for?",
    answer:
      "Clinics and specialists, hospitality (hotels, boutique stays), and growing service businesses that need a fast, credible website or a custom booking/operations system — plus startups anywhere that need custom software.",
  },
  {
    question: "Do you only take on local projects?",
    answer:
      "No. We're based in Silchar and serve Cachar and the wider Barak Valley directly, but the majority of our engineering work is for clients across India and internationally — the studio is set up to work remotely with any timezone.",
  },
  {
    question: "How is this different from a generic web design agency in Silchar?",
    answer:
      "Most local agencies stop at a template website. We build custom software (booking systems, dashboards, AI intake) and engineer every build for SEO and Generative Engine Optimization (GEO), so the site or app is easier to find on Google and gets cited in AI search — not just something that exists online.",
  },
];

export default async function SilcharPage() {
  let localProjects: Project[] = [];
  try {
    const allProjects = await projectService.getPublicProjects();
    localProjects = allProjects.filter((p) =>
      p.clientLocation?.toLowerCase().includes("silchar")
    );
  } catch (error) {
    console.error("Failed to fetch Silchar projects:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/web-development-company-silchar#service`,
        name: "Web & Software Development in Silchar, Assam",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Silchar" },
          { "@type": "AdministrativeArea", name: "Cachar" },
          { "@type": "AdministrativeArea", name: "Barak Valley" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: ["Web Development", "Custom Software Development", "Mobile App Development", "SEO & GEO"],
      },
      localBusinessJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Web Development Company in Silchar", path: "/web-development-company-silchar" },
      ]),
      faqPageJsonLd(faqs),
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-40 pb-16 px-6 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent-primary mb-6 flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                Silchar, Assam &middot; Barak Valley
              </span>
              <h1 className="font-display italic text-5xl md:text-7xl leading-[0.95] tracking-tight text-text-primary mb-8">
                Web development company <br />
                <span className="text-text-muted not-italic">in Silchar, Assam.</span>
              </h1>
              <p className="font-sans text-xl text-text-secondary max-w-2xl leading-relaxed font-light mb-10">
                Locallify is a software studio based in Silchar. We design and build websites,
                booking systems, and custom software for clinics, hotels, and growing businesses
                across Cachar and the Barak Valley &mdash; and custom software, web apps, and mobile
                apps for clients across India and worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 px-8 items-center justify-center bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
                >
                  Start a project
                </Link>
                <Link href="/portfolio" className="btn-ghost">
                  See our Silchar work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL WORK */}
        <section className="py-16 px-6 border-t border-border-subtle bg-bg-surface/10">
          <div className="container mx-auto">
            <h2 className="font-display italic text-3xl md:text-5xl text-text-primary mb-4">
              Businesses we&apos;ve built for in Silchar
            </h2>
            <p className="text-text-secondary max-w-2xl mb-12 leading-relaxed">
              Real clients, real outcomes &mdash; not stock case studies. Every project below is a
              working business in Silchar or the wider Barak Valley.
            </p>

            {localProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localProjects.map((project) => (
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
            ) : (
              <div className="border border-border-subtle bg-bg-surface/30 p-10 rounded-2xl max-w-2xl">
                <p className="text-text-secondary leading-relaxed">
                  Our full Silchar case studies live on the{" "}
                  <Link href="/portfolio" className="text-accent-primary hover:underline">
                    portfolio page
                  </Link>{" "}
                  &mdash; take a look, or reach out directly and we&apos;ll walk you through recent work.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* AREAS + VALUE PROP */}
        <section className="py-24 px-6 border-t border-border-subtle">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display italic text-4xl md:text-5xl text-text-primary mb-8">
                Areas we cover
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                We work in person with clients across Silchar and the Barak Valley, and remotely
                with clients everywhere else.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Silchar", "Cachar", "Barak Valley", "Assam", "India (remote)", "Worldwide (remote)"].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full border border-border-subtle bg-bg-surface text-sm text-text-secondary"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>

              <h3 className="font-sans font-bold text-text-primary mt-12 mb-4">Where to find us</h3>
              <NapDetails />
              <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface">
                <iframe
                  src={NAP.mapsEmbedUrl}
                  title="Map showing the Locallify studio in Fakirtilla, Silchar"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display italic text-4xl md:text-5xl text-text-primary mb-8">
                Why a Silchar business builds with us
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "We're reachable in person", desc: "Based in Silchar — meetings, walkthroughs, and support don't have to happen over a bad video call." },
                  { title: "SEO + GEO built in", desc: "Every build ships with schema, clean semantic HTML, and fast Core Web Vitals so it actually gets found on Google and in AI search." },
                  { title: "Custom, not templated", desc: "Booking flows, dashboards, and AI intake — built around how your business actually runs, not a page builder." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 border-t border-border-subtle bg-bg-surface/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display italic text-4xl md:text-6xl text-text-primary text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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

        {/* CTA */}
        <section className="py-24 text-center px-6 border-t border-border-subtle bg-bg-surface">
          <div className="container mx-auto">
            <h2 className="font-display italic text-5xl md:text-7xl text-text-primary mb-8">
              Building something in <br />
              <span className="text-accent-primary not-italic">Silchar?</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-12">
              Tell us what you&apos;re building. We&apos;ll reply with next steps within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
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
              <Link href="/portfolio" className="text-text-muted hover:text-accent-primary transition-colors">Portfolio</Link>
              <Link href="/services" className="text-text-muted hover:text-accent-primary transition-colors">Services</Link>
              <Link href="/pricing" className="text-text-muted hover:text-accent-primary transition-colors">Pricing</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
