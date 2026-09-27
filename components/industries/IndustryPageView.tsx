import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import type { IndustryPage } from "@/content/industries/types";
import { industryPages } from "@/content/industries";
import { formatUsd } from "@/content/industries/pricing";
import { getServiceBySlug } from "@/lib/data/services";
import type { Project } from "@/lib/types";
import RevenueCalculator from "./RevenueCalculator";
import AuditForm from "./AuditForm";
import IndustryHeader from "./IndustryHeader";
import MobileCtaBar from "./MobileCtaBar";

const section = "px-4 sm:px-6 py-20 border-t border-border-subtle";
const container = "container mx-auto max-w-6xl";
const eyebrow = "font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary";
const h2 = "text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function IndustryPageView({ page, projects }: { page: IndustryPage; projects: Project[] }) {
  const heroProject = projects.find((p) => p.heroBannerImage || p.thumbnail);
  const heroImage = heroProject?.heroBannerImage || heroProject?.thumbnail;
  const services = page.relatedServices.map(getServiceBySlug).filter((s) => s !== undefined);
  const otherNiches = industryPages.filter((p) => p.slug !== page.slug);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary pb-20 md:pb-0">
      <IndustryHeader slug={page.slug} />

      <main id="main-content">
        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="px-4 sm:px-6 pt-32 pb-16">
          <div className={container}>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs text-text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-text-primary">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/industries" className="hover:text-text-primary">Industries</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-text-secondary">{page.niche}</li>
              </ol>
            </nav>

            {/* Niche banner: shows at a glance who this page is for. Stock photo, credited below. */}
            <figure className="mb-12">
              <div className="relative aspect-[2/1] sm:aspect-[3/1] overflow-hidden rounded-2xl border border-border-default bg-bg-surface">
                <Image
                  src={page.banner.src}
                  alt={page.banner.alt}
                  fill
                  preload
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  className="object-cover"
                  style={{ objectPosition: page.banner.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-bg-primary/20 to-transparent" aria-hidden="true" />
                <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-full border border-border-default bg-bg-primary/80 px-4 py-2 text-xs sm:text-sm font-medium text-text-primary backdrop-blur-sm">
                  {page.hero.eyebrow}
                </p>
              </div>
              <figcaption className="mt-2 text-right text-[11px] text-text-muted">
                Photo:{" "}
                <a href={page.banner.creditUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-text-secondary">
                  {page.banner.credit}
                </a>
              </figcaption>
            </figure>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h1 className="text-4xl sm:text-6xl font-sans font-bold leading-[1.05] tracking-tight text-text-primary">
                  {page.hero.headline}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">{page.hero.subhead}</p>
                <ul className="mt-8 space-y-3">
                  {page.hero.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-text-secondary">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#audit" className="btn-primary gap-2">
                    Get my free audit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href="#calculator" className="btn-ghost">Calculate lost revenue</a>
                </div>
              </div>

              {heroImage && heroProject ? (
                <figure className="overflow-hidden rounded-2xl border border-border-default bg-bg-surface">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={heroImage}
                      alt={`${heroProject.title} website, built by Locallify`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="px-5 py-3 text-xs text-text-muted">
                    A real Locallify build: <Link href={`/portfolio/${heroProject.slug}`} className="underline underline-offset-2 hover:text-text-primary">{heroProject.title}</Link>
                  </figcaption>
                </figure>
              ) : (
                <AtAGlance page={page} />
              )}
            </div>

            <p className="mt-16 max-w-3xl text-lg leading-relaxed text-text-secondary">{page.hero.intro}</p>
            {heroImage && <div className="mt-10 max-w-xl"><AtAGlance page={page} /></div>}
          </div>
        </section>

        {/* ─── PROBLEM ──────────────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <h2 className={h2}>{page.problems.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">{page.problems.intro}</p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {page.problems.items.map((item, i) => (
                <article key={item.title} className="rounded-2xl border border-border-default bg-bg-surface/50 p-8">
                  <span className="font-mono text-xs text-accent-secondary">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-secondary">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CALCULATOR ───────────────────────────────────────── */}
        <section id="calculator" className={`${section} scroll-mt-20`}>
          <div className={container}>
            <h2 className={h2}>{page.calculator.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">{page.calculator.intro}</p>
            <div className="mt-12">
              <RevenueCalculator niche={page.slug} model={page.calculator.model} inputs={page.calculator.inputs} />
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text-muted">
              <strong className="font-medium text-text-secondary">How the estimate works: </strong>
              {page.calculator.howItWorks}
            </p>
          </div>
        </section>

        {/* ─── FRAMEWORK ────────────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <p className={eyebrow}>{page.framework.steps.map((step) => step.title).join(" → ")}</p>
            <h2 className={`${h2} mt-4`}>{page.framework.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">{page.framework.intro}</p>
            <ol className="mt-12 grid gap-4 lg:grid-cols-4">
              {page.framework.steps.map((step, i) => (
                <li key={step.key} className="relative rounded-2xl border border-border-default bg-bg-surface/50 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-accent-primary/30 bg-accent-soft px-3 py-1 font-mono text-[10px] text-text-primary">
                      Step {i + 1}
                    </span>
                    {i < page.framework.steps.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-text-subtle lg:block" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.body}</p>
                  <p className="mt-4 border-t border-border-subtle pt-4 text-sm leading-relaxed text-text-primary">
                    <span className="text-text-muted">For {page.niche.toLowerCase()}: </span>{step.example}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── FEATURES ─────────────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <h2 className={h2}>{page.features.heading}</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.features.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border-default bg-bg-surface/50 p-6">
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                </article>
              ))}
            </div>
            {services.length > 0 && (
              <p className="mt-10 text-sm text-text-secondary">
                Related services:{" "}
                {services.map((service, i) => (
                  <span key={service.slug}>
                    {i > 0 && " · "}
                    <Link href={`/services/${service.slug}`} className="text-text-primary underline underline-offset-4 hover:text-accent-primary">
                      {service.title}
                    </Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>

        {/* ─── CHECKLIST (answer-first) ─────────────────────────── */}
        <section className={section}>
          <div className={`${container} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 className={h2}>{page.checklist.heading}</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">{page.checklist.answer}</p>
            </div>
            <ol className="space-y-3">
              {page.checklist.items.map((item, i) => (
                <li key={item} className="flex gap-4 rounded-xl border border-border-subtle bg-bg-surface/40 px-5 py-4 text-text-secondary">
                  <span className="font-mono text-xs text-text-secondary">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── PROOF ────────────────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            {projects.length > 0 ? (
              <>
                <p className={eyebrow}>{page.proof.label ?? "Our work"}</p>
                <h2 className={`${h2} mt-4`}>Real builds, not mockups</h2>
                {page.proof.note && <p className="mt-4 max-w-2xl text-lg text-text-secondary">{page.proof.note}</p>}
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/portfolio/${project.slug}`}
                      className="group overflow-hidden rounded-2xl border border-border-default bg-bg-surface/50 transition-colors hover:border-accent-primary/40"
                    >
                      {(project.thumbnail || project.heroBannerImage) && (
                        <div className="relative aspect-[16/10] bg-bg-elevated">
                          <Image
                            src={project.thumbnail || project.heroBannerImage!}
                            alt={`${project.title} website`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="font-semibold text-text-primary group-hover:text-accent-primary">{project.title}</h3>
                        <p className="mt-1 text-sm text-text-muted">{project.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <OurStandards />
            )}
          </div>
        </section>

        {/* ─── BEFORE / AFTER ───────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <h2 className={h2}>Before and after</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border-default bg-bg-surface/30 p-8">
                <h3 className="text-lg font-semibold text-text-muted">Before</h3>
                <ul className="mt-6 space-y-4">
                  {page.beforeAfter.before.map((item) => (
                    <li key={item} className="flex gap-3 text-text-secondary">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-semantic-bad" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-accent-primary/30 bg-accent-soft/40 p-8">
                <h3 className="text-lg font-semibold text-text-primary">After</h3>
                <ul className="mt-6 space-y-4">
                  {page.beforeAfter.after.map((item) => (
                    <li key={item} className="flex gap-3 text-text-primary">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-semantic-good" aria-hidden="true" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPARISON TABLE ─────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <h2 className={h2}>{page.comparison.heading}</h2>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-border-default">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-bg-surface text-text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-medium"><span className="sr-only">Aspect</span></th>
                    <th scope="col" className="px-5 py-4 font-medium">Template / status quo</th>
                    <th scope="col" className="px-5 py-4 font-medium text-text-primary">Locallify build</th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row.aspect} className="border-t border-border-subtle">
                      <th scope="row" className="px-5 py-4 font-medium text-text-primary">{row.aspect}</th>
                      <td className="px-5 py-4 text-text-secondary">{row.template}</td>
                      <td className="px-5 py-4 text-text-primary">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── COST + PACKAGES ──────────────────────────────────── */}
        <section className={section}>
          <div className={container}>
            <h2 className={h2}>{page.cost.heading}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-primary">{page.cost.answer}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-text-secondary">{page.cost.body}</p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {page.packages.map((pkg, i) => (
                <article
                  key={pkg.name}
                  className={`flex flex-col rounded-2xl border p-8 ${i === 1 ? "border-accent-primary/50 bg-accent-soft/30" : "border-border-default bg-bg-surface/50"}`}
                >
                  <h3 className="text-xl font-semibold text-text-primary">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{pkg.idealFor}</p>
                  <p className="mt-6">
                    <span className="text-sm text-text-muted">from </span>
                    <span className="text-4xl font-bold tracking-tight text-text-primary">{formatUsd(pkg.priceFrom)}{pkg.openEnded ? "+" : ""}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-text-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-border-subtle pt-4 text-xs text-text-muted">Timeline: {pkg.timeline}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-text-secondary">
              Hosting, updates and ongoing SEO are available as{" "}
              <Link href="/pricing" className="text-text-primary underline underline-offset-4 hover:text-accent-primary">
                Care, Growth and Scale retainers
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ─── FIT ──────────────────────────────────────────────── */}
        <section className={section}>
          <div className={`${container} grid gap-6 md:grid-cols-2`}>
            <div className="rounded-2xl border border-border-default bg-bg-surface/50 p-8">
              <h2 className="text-2xl font-bold text-text-primary">This is for you if…</h2>
              <ul className="mt-6 space-y-4">
                {page.fit.forYou.map((item) => (
                  <li key={item} className="flex gap-3 text-text-secondary">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-semantic-good" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border-default bg-bg-surface/30 p-8">
              <h2 className="text-2xl font-bold text-text-primary">It’s not for you if…</h2>
              <ul className="mt-6 space-y-4">
                {page.fit.notForYou.map((item) => (
                  <li key={item} className="flex gap-3 text-text-secondary">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-semantic-bad" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── OFFER + FORM ─────────────────────────────────────── */}
        <section id="audit" className={`${section} scroll-mt-20`}>
          <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
            <div>
              <p className={eyebrow}>Free</p>
              <h2 className={`${h2} mt-4`}>Get a free Website &amp; Lead Leak Audit</h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                A personalised video walkthrough, about 10 minutes, of your current website and Google presence. Delivered within 48 hours.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Speed and mobile issues",
                  "Missing schema and structured data",
                  "How you appear on Google and in AI answers",
                  "Booking and quote friction",
                  "The top 5 fixes, in priority order",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-text-secondary">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-primary" aria-hidden="true" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <AuditForm slug={page.slug} niche={page.niche} painOptions={page.audit.painOptions} />
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section className={section}>
          <div className="container mx-auto max-w-3xl">
            <h2 className={h2}>Frequently asked questions</h2>
            <div className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
              {page.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-medium">{item.q}</h3>
                    <ChevronDown className="h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 leading-relaxed text-text-secondary">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-xs text-text-muted">Last updated {formatDate(page.updatedAt)}</p>
          </div>
        </section>

        {/* ─── ALSO SERVING ─────────────────────────────────────── */}
        <section className="px-4 sm:px-6 py-12 border-t border-border-subtle">
          <div className={`${container} flex flex-wrap items-center gap-x-6 gap-y-3 text-sm`}>
            <span className="text-text-muted">Also serving:</span>
            {otherNiches.map((other) => (
              <Link key={other.slug} href={`/industries/${other.slug}`} className="text-text-primary underline underline-offset-4 hover:text-accent-primary">
                {other.serviceName}
              </Link>
            ))}
            <Link href="/industries" className="text-text-secondary hover:text-text-primary">All industries</Link>
          </div>
        </section>
      </main>

      <MobileCtaBar />
    </div>
  );
}

function AtAGlance({ page }: { page: IndustryPage }) {
  return (
    <aside aria-label="At a glance" className="rounded-2xl border border-border-default bg-bg-surface p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">At a glance</p>
      <dl className="mt-4 divide-y divide-border-subtle">
        {page.atAGlance.map((row) => (
          <div key={row.label} className="grid grid-cols-[7rem_1fr] gap-4 py-3 text-sm">
            <dt className="text-text-muted">{row.label}</dt>
            <dd className="text-text-primary">{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function OurStandards() {
  const standards = [
    { title: "Lighthouse 95+ target", body: "Every page is built and tested for speed on a mid-range phone before launch." },
    { title: "Schema on every page", body: "Structured data that tells Google and AI assistants exactly what you do and where." },
    { title: "You own the code", body: "The code, content and domain are yours after the final milestone. No lock-in." },
    { title: "Fixed milestone pricing", body: "Scope and price agreed in writing up front, billed per milestone." },
    { title: "1–2 week landing builds", body: "Focused landing pages can go live in one to two weeks; full sites take longer." },
  ];
  return (
    <>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary">How we build</p>
      <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-bold tracking-tight text-text-primary">Our standards</h2>
      <p className="mt-4 max-w-2xl text-lg text-text-secondary">
        We haven’t built for this industry yet, so here’s what every Locallify build is held to instead.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {standards.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border-default bg-bg-surface/50 p-6">
            <h3 className="font-semibold text-text-primary">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-text-secondary">
        Our shipped work so far is mostly clinics and hospitality —{" "}
        <Link href="/portfolio" className="text-text-primary underline underline-offset-4 hover:text-accent-primary">
          here’s how we build
        </Link>
        .
      </p>
    </>
  );
}
