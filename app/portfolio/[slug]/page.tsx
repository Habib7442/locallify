import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projectService } from '@/lib/cms';
import Navbar from '@/components/Navbar';
import {
  ArrowUpRight,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Target,
  Lightbulb,
  BarChart3,
  Globe,
  ExternalLink,
  ChevronLeft,
  Zap,
  Activity,
  Award,
  MessageCircle,
} from 'lucide-react';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await projectService.getProjectBySlug(slug);
  if (!project) return { title: 'Case Study Not Found | Locallify' };
  return {
    title: project.metaTitle || `${project.title} Case Study | Locallify`,
    description: project.metaDescription || project.description,
    keywords: project.metaKeywords?.join(', '),
    alternates: { canonical: project.canonicalUrl || `https://locallifyagency.com/portfolio/${slug}` },
    openGraph: {
      title: project.metaTitle || project.title,
      description: project.metaDescription || project.description,
      images: project.heroBannerImage ? [{ url: project.heroBannerImage, width: 1200, height: 630 }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await projectService.getProjectBySlug(slug);

  if (!project) notFound();

  const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Locallify, I saw the ${project.title} case study and I'd love to discuss a similar project.`)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.heroTitle || project.title,
    description: project.metaDescription || project.description,
    image: project.heroBannerImage || project.thumbnail,
    author: { '@type': 'Organization', name: 'Locallify' },
    publisher: { '@type': 'Organization', name: 'Locallify' },
    datePublished: project.completionDate,
    url: project.canonicalUrl || `https://locallifyagency.com/portfolio/${slug}`,
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent-primary focus:text-bg-primary focus:font-bold focus:rounded-full">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">

        {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-end overflow-hidden">
          {/* Background image */}
          {(project.heroBannerImage || project.thumbnail) && (
            <div className="absolute inset-0 bg-bg-primary">
              <Image
                src={project.heroBannerImage || project.thumbnail}
                alt={project.title}
                fill
                className="object-cover opacity-8 blur-[3px] scale-105 transition-opacity duration-1000"
                priority
                sizes="100vw"
              />
              {/* Fade overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary/90" />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 pb-16 pt-32 w-full">
            {/* Back link */}
            <Link href="/portfolio" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors mb-8 group">
              <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="max-w-4xl">
              {/* Tags row */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.industry && (
                  <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary rounded-full">
                    {project.industry}
                  </span>
                )}
                {project.status && (
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border ${project.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                    {project.status}
                  </span>
                )}
                {project.featured && (
                  <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="font-display italic text-5xl md:text-7xl leading-[0.9] text-text-primary mb-6">
                {project.heroTitle || project.title}
              </h1>
              {project.heroSubtitle && (
                <p className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-light text-justify">
                  {project.heroSubtitle}
                </p>
              )}

              {/* Meta grid for responsiveness */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 pt-10 border-t border-border-subtle">
                {project.clientName && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Client</p>
                    <p className="font-sans text-sm font-medium text-text-primary">{project.clientName}</p>
                  </div>
                )}
                {project.clientLocation && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Location</p>
                    <p className="font-sans text-sm font-medium text-text-primary flex items-center gap-1"><MapPin className="w-3 h-3" />{project.clientLocation}</p>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Timeline</p>
                    <p className="font-sans text-sm font-medium text-text-primary flex items-center gap-1"><Calendar className="w-3 h-3" />{project.duration}</p>
                  </div>
                )}
                {project.myRole && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Role</p>
                    <p className="font-sans text-sm font-medium text-text-primary flex items-center gap-1"><Briefcase className="w-3 h-3" />{project.myRole}</p>
                  </div>
                )}
                {project.teamSize && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Team</p>
                    <p className="font-sans text-sm font-medium text-text-primary flex items-center gap-1"><Users className="w-3 h-3" />{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</p>
                  </div>
                )}
                {project.live_url && (
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-subtle mb-1">Live Site</p>
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium text-accent-primary flex items-center gap-1 hover:underline">
                      <Globe className="w-3 h-3" />{new URL(project.live_url).hostname}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── OVERVIEW & TECH STACK ──────────────────────────────────── */}
        {(project.overview || (project.technologies && project.technologies.length > 0)) && (
          <section className="py-16 px-6 border-t border-border-subtle">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {project.overview && (
                  <div className="lg:col-span-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-4 block">About the Project</span>
                    <p className="font-sans text-lg text-text-secondary leading-relaxed font-light text-justify">{project.overview}</p>
                  </div>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted mb-4 block">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 bg-bg-elevated border border-border-default text-text-secondary rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─── CLIENT RESULTS (MOVED UP) ────────────────────────────────── */}
        {project.results && project.results.length > 0 && (
          <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
            <div className="container mx-auto">
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-3 block">Outcomes</span>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Client Results</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, i) => {
                  const colors = [
                    { border: 'hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.08)]', bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
                    { border: 'hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)]', bg: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
                    { border: 'hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.08)]', bg: 'bg-purple-500/10 border-purple-500/20 text-purple-400' },
                    { border: 'hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.08)]', bg: 'bg-orange-500/10 border-orange-500/20 text-orange-400' }
                  ];
                  const color = colors[i % colors.length];
                  return (
                    <div key={i} className={`flex items-start gap-5 p-6 bg-bg-elevated border border-border-subtle rounded transition-all duration-300 ${color.border}`}>
                      <div className={`w-10 h-10 rounded flex items-center justify-center shrink-0 ${color.bg}`}>
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans text-base font-semibold text-text-primary mb-1">{result.title}</h3>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed text-justify">{result.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── LIGHTHOUSE PERFORMANCE (MOVED UP) ─────────────────────────── */}
        {project.lighthouseDesktop && (
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="w-5 h-5 text-accent-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary">PageSpeed Insights</span>
                </div>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Lighthouse Audit</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {([
                  { label: 'Performance', value: project.lighthouseDesktop.performance, textClass: 'text-accent-primary', borderHoverClass: 'hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(208,255,20,0.08)]' },
                  { label: 'Accessibility', value: project.lighthouseDesktop.accessibility, textClass: 'text-cyan-400', borderHoverClass: 'hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]' },
                  { label: 'Best Practices', value: project.lighthouseDesktop.bestPractices, textClass: 'text-fuchsia-400', borderHoverClass: 'hover:border-fuchsia-400/40 hover:shadow-[0_0_20px_rgba(232,121,249,0.08)]' },
                  { label: 'SEO', value: project.lighthouseDesktop.seo, textClass: 'text-orange-400', borderHoverClass: 'hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(251,146,60,0.08)]' },
                ] as const).map(({ label, value, textClass, borderHoverClass }) => (
                  <div key={label} className={`p-6 bg-bg-surface border border-border-subtle rounded text-center transition-all duration-300 ${borderHoverClass}`}>
                    <div className={`text-4xl font-bold font-mono mb-2 ${textClass}`}>
                      {value ?? '--'}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">{label}</div>
                  </div>
                ))}
              </div>
              {project.lighthouseDesktop.screenshot && (
                <div className="relative w-full max-w-3xl aspect-[16/10] overflow-hidden rounded border border-border-subtle bg-bg-surface">
                  <Image src={project.lighthouseDesktop.screenshot} alt="Lighthouse Desktop Report" fill className="object-contain p-2" sizes="(max-width: 1200px) 100vw, 70vw" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* ─── GOOGLE SEARCH CONSOLE (MOVED UP) ─────────────────────────── */}
        {(project.scClicks !== undefined || project.scImpressions !== undefined) && (
          <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
            <div className="container mx-auto">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-5 h-5 text-accent-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary">Search Performance</span>
                </div>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Google Search Console</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {project.scClicks !== undefined && (
                  <div className="p-6 bg-bg-elevated border border-border-subtle rounded text-center hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(96,165,250,0.08)] transition-all duration-300">
                    <div className="text-3xl font-bold font-mono text-blue-400 mb-1">{project.scClicks.toLocaleString()}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Clicks</div>
                  </div>
                )}
                {project.scImpressions !== undefined && (
                  <div className="p-6 bg-bg-elevated border border-border-subtle rounded text-center hover:border-fuchsia-400/40 hover:shadow-[0_0_20px_rgba(232,121,249,0.08)] transition-all duration-300">
                    <div className="text-3xl font-bold font-mono text-fuchsia-400 mb-1">{project.scImpressions.toLocaleString()}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Impressions</div>
                  </div>
                )}
                {project.scCtr !== undefined && (
                  <div className="p-6 bg-bg-elevated border border-border-subtle rounded text-center hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(208,255,20,0.08)] transition-all duration-300">
                    <div className="text-3xl font-bold font-mono text-accent-primary mb-1">{project.scCtr}%</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Avg CTR</div>
                  </div>
                )}
                {project.scPosition !== undefined && (
                  <div className="p-6 bg-bg-elevated border border-border-subtle rounded text-center hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(251,146,60,0.08)] transition-all duration-300">
                    <div className="text-3xl font-bold font-mono text-orange-400 mb-1">{project.scPosition}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Avg Position</div>
                  </div>
                )}
                {project.scIndexedPages !== undefined && (
                  <div className="p-6 bg-bg-elevated border border-border-subtle rounded text-center hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300">
                    <div className="text-3xl font-bold font-mono text-cyan-400 mb-1">{project.scIndexedPages}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted">Indexed Pages</div>
                  </div>
                )}
              </div>
              {/* GSC Screenshots */}
              {(project.scPerformanceScreenshot || project.scCoreWebVitalsScreenshot) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.scPerformanceScreenshot && (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3">Performance Overview</p>
                      <div className="relative aspect-[16/10] overflow-hidden rounded border border-border-subtle bg-bg-elevated">
                        <Image src={project.scPerformanceScreenshot} alt="GSC Performance" fill className="object-contain animate-fade-in" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </div>
                  )}
                  {project.scCoreWebVitalsScreenshot && (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3">Core Web Vitals</p>
                      <div className="relative aspect-[16/10] overflow-hidden rounded border border-border-subtle bg-bg-elevated">
                        <Image src={project.scCoreWebVitalsScreenshot} alt="GSC Core Web Vitals" fill className="object-contain animate-fade-in" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ─── CHALLENGE & GOALS ──────────────────────────────────────── */}
        {(project.problemSummary || (project.goals && project.goals.length > 0)) && (
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {project.problemSummary && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-accent-secondary/10 border border-accent-secondary/20 rounded flex items-center justify-center">
                        <Target className="w-4 h-4 text-accent-secondary" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-secondary">The Challenge</span>
                    </div>
                    <p className="font-sans text-base text-text-secondary leading-relaxed text-justify">{project.problemSummary}</p>
                  </div>
                )}

                {project.goals && project.goals.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-accent-primary/10 border border-accent-primary/20 rounded flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent-primary" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary">Project Goals</span>
                    </div>
                    <ul className="space-y-3">
                      {project.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="font-mono text-[9px] text-accent-primary mt-1 shrink-0">0{i + 1}</span>
                          <p className="font-sans text-sm text-text-secondary leading-relaxed text-justify">{goal}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─── SOLUTION ──────────────────────────────────────────────── */}
        {project.solution && (
          <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-accent-primary/10 border border-accent-primary/20 rounded flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-accent-primary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary">The Solution</span>
                </div>
                <p className="font-sans text-lg text-text-secondary leading-relaxed font-light text-justify">{project.solution}</p>
              </div>
            </div>
          </section>
        )}

        {/* ─── KEY FEATURES ───────────────────────────────────────────── */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-3 block">What We Built</span>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="group p-6 bg-bg-surface border border-border-subtle hover:border-accent-primary/30 transition-all duration-300 rounded">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-mono text-[9px] text-accent-primary mt-0.5">0{i + 1}</span>
                      <Zap className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    </div>
                    <h3 className="font-sans text-base font-semibold text-text-primary mb-2">{feature.title}</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed text-justify">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── LOCAL SEO ──────────────────────────────────────────────── */}
        {project.enableLocalSeo && (
          <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
            <div className="container mx-auto">
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-3 block">Local SEO</span>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Local Discovery Strategy</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  {project.napConsistency && (
                    <div className="p-6 bg-bg-elevated border border-border-subtle rounded">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-2">NAP Consistency</p>
                      <p className="font-sans text-sm text-text-secondary text-justify">{project.napConsistency}</p>
                    </div>
                  )}
                  {project.localKeywords && project.localKeywords.length > 0 && (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3">Local Keywords</p>
                      <div className="flex flex-wrap gap-2">
                        {project.localKeywords.map((kw) => (
                          <span key={kw} className="font-mono text-[10px] px-3 py-1 bg-bg-elevated border border-border-subtle text-text-secondary rounded">{kw}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.targetAreas && project.targetAreas.length > 0 && (
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted mb-3">Target Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {project.targetAreas.map((area) => (
                          <span key={area} className="font-mono text-[10px] px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary rounded">{area}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.gbpUrl && (
                    <a href={project.gbpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-primary hover:underline">
                      <Globe className="w-3 h-3" />
                      View on Google Business
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                {project.mapsEmbedUrl && (
                  <div className="aspect-video rounded overflow-hidden border border-border-subtle bg-bg-elevated">
                    <iframe
                      src={project.mapsEmbedUrl}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      title="Google Maps location"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ─── TESTIMONIAL ────────────────────────────────────────────── */}
        {project.testimonial && (
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: project.testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-primary text-accent-primary" />
                  ))}
                </div>
                <blockquote className="font-display italic text-2xl md:text-3xl text-text-primary leading-relaxed mb-10 text-justify">
                  &ldquo;{project.testimonial.testimonial}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  {project.testimonial.photo && (
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-primary/30 bg-bg-elevated shrink-0">
                      <Image src={project.testimonial.photo} alt={project.testimonial.clientName} width={48} height={48} className="object-cover w-full h-full" />
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-sans text-sm font-semibold text-text-primary">{project.testimonial.clientName}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      {project.testimonial.designation}{project.testimonial.company ? ` · ${project.testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── FAQ ────────────────────────────────────────────────────── */}
        {project.faq && project.faq.length > 0 && (
          <section className="py-16 px-6 bg-bg-surface border-y border-border-subtle">
            <div className="container mx-auto">
              <div className="mb-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-3 block">Frequently Asked</span>
                <h2 className="font-display italic text-4xl md:text-5xl text-text-primary">Questions & Answers</h2>
              </div>
              <div className="max-w-3xl space-y-6">
                {project.faq.map((item, i) => (
                  <div key={i} className="p-6 bg-bg-elevated border border-border-subtle rounded">
                    <h3 className="font-sans text-base font-semibold text-text-primary mb-3 flex items-start gap-3">
                      <span className="font-mono text-[9px] text-accent-primary mt-1 shrink-0">Q{i + 1}</span>
                      {item.question}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed pl-6">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── TAGS ───────────────────────────────────────────────────── */}
        {project.tags && project.tags.length > 0 && (
          <section className="py-10 px-6 border-t border-border-subtle">
            <div className="container mx-auto flex flex-wrap items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-subtle">Tags:</span>
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-3 py-1 bg-bg-surface border border-border-subtle text-text-muted rounded">#{tag}</span>
              ))}
            </div>
          </section>
        )}

        {/* ─── BOTTOM CTA ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-bg-surface border-t border-border-subtle text-center">
          <div className="container mx-auto max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-primary mb-6 block">
              {project.cta?.title ? '' : "Let's Build Together"}
            </span>
            <h2 className="font-display italic text-5xl md:text-7xl text-text-primary mb-6">
              {project.cta?.title || <>Want results like <br /><span className="text-accent-primary not-italic">this?</span></>}
            </h2>
            <p className="font-sans text-lg text-text-secondary font-light mb-12 max-w-xl mx-auto text-justify">
              {project.cta?.description || "We build premium digital presences for local businesses that want to dominate their market."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-14 px-10 bg-accent-primary text-bg-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {project.cta?.buttonText || 'Start a project'}
              </a>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-14 px-10 border border-border-default text-text-primary font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:border-text-primary transition-colors"
                >
                  View Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
