import { Bot, FileSearch, Gauge, Network, SearchCheck, ShieldCheck } from 'lucide-react';

const proofPoints = [
  {
    title: 'Technical SEO foundation',
    description: 'Semantic HTML, metadata, clean URLs, schema, sitemaps, and Core Web Vitals from the first sprint.',
    icon: SearchCheck,
  },
  {
    title: 'GEO-ready structure',
    description: 'Clear entities, factual content blocks, machine-readable pages, and answer-ready sections for AI search.',
    icon: Bot,
  },
  {
    title: 'Performance as positioning',
    description: 'Fast pages convert better, rank better, and make the whole product feel more premium.',
    icon: Gauge,
  },
  {
    title: 'Ownership and clarity',
    description: 'You own the code and IP. We document the architecture, launch plan, and post-launch growth work.',
    icon: ShieldCheck,
  },
];

export default function SeoGeoEdge() {
  return (
    <section className="bg-bg-primary px-6 py-16">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-border-subtle bg-bg-surface/50 backdrop-blur-sm">
          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div className="flex flex-col justify-between">
              <div>
                <span className="mb-6 inline-flex rounded-full border border-accent-secondary/20 bg-accent-secondary/10 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-secondary">
                  SEO + GEO edge
                </span>
                <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-6xl tracking-tight">
                  We build the product & make it <span className="font-display italic font-light text-accent-secondary">easy to discover</span>.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary font-light text-left">
                  Most dev shops stop when the app works. Locallify treats
                  discoverability as part of the build: Google, AI answers, social
                  previews, performance, schema, and clear product positioning.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
                {['Schema.org', 'LLM-ready content', 'Core Web Vitals', 'Entity clarity'].map((item) => (
                  <div key={item} className="rounded-xl border border-border-subtle bg-bg-elevated px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-text-muted text-center hover:border-accent-secondary/30 hover:text-text-secondary transition-all duration-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <article key={point.title} className="group rounded-2xl border border-border-subtle bg-bg-elevated/40 p-6 hover:border-accent-secondary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center mb-6 text-accent-secondary group-hover:scale-110 transition-transform duration-500">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-sans font-semibold text-text-primary tracking-tight">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary font-light text-left">{point.description}</p>
                </article>
              ))}
              <article className="group rounded-2xl border border-accent-primary/20 bg-accent-primary/[0.02] p-6 text-text-primary sm:col-span-2 hover:border-accent-primary/30 transition-all duration-300">
                <div className="mb-6 flex items-center justify-between">
                  <FileSearch className="h-6 w-6 text-accent-primary" />
                  <Network className="h-6 w-6 text-accent-secondary" />
                </div>
                <p className="text-xl font-sans font-bold tracking-tight text-text-primary">Design. Build. Rank.</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary font-light text-left">
                  The site, app, and content system should explain the business
                  clearly enough for humans, crawlers, and AI search engines to reference it.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
