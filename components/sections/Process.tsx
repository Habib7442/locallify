import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: 'We define the business goal, users, workflows, risks, and search opportunities before writing code.',
  },
  {
    title: 'Design',
    description: 'We map the product experience, pages, states, and content structure so scope stays sharp.',
  },
  {
    title: 'Build',
    description: 'We ship in focused milestones with clean code, responsive UI, integrations, and QA.',
  },
  {
    title: 'Launch',
    description: 'We handle deployment, metadata, analytics, schema, speed checks, and handoff documentation.',
  },
  {
    title: 'Grow',
    description: 'Retainers keep the product maintained, improved, measured, and discoverable over time.',
  },
];

const faqs = [
  ['Who owns the code and IP?', 'You do. We can maintain it, but the product belongs to your company.'],
  ['How long does a project take?', 'Landing pages can move in days. Web apps and mobile apps usually run in milestone-based sprints.'],
];

export default function Process() {
  return (
    <section className="bg-bg-primary px-6 py-16 border-t border-border-subtle">
      <div className="container mx-auto">
        <div className="mb-16 max-w-4xl text-left">
          <span className="mb-5 inline-flex rounded-full border border-accent-primary/20 bg-accent-soft/30 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-accent-primary">
            Process
          </span>
          <h2 className="text-4xl font-sans font-bold leading-[1.1] text-text-primary md:text-6xl tracking-tight max-w-3xl">
            A calm path from idea to <span className="font-display italic font-light text-accent-primary">live product</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article 
              key={step.title} 
              className="group p-6 bg-bg-surface/50 backdrop-blur-sm border border-border-default rounded-2xl transition-all duration-300 hover:border-accent-primary/30 hover:shadow-[0_0_20px_rgba(208,255,20,0.04)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-accent-primary border border-accent-primary/20 bg-accent-primary/10 px-2.5 py-1 rounded-full">
                  Step 0{index + 1}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 text-text-subtle group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-300 lg:block" />
                )}
              </div>
              <h3 className="text-lg font-sans font-semibold text-text-primary tracking-tight">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary text-left font-light">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article 
              key={question} 
              className="group rounded-2xl border border-border-default bg-bg-surface/30 p-8 hover:border-border-strong hover:bg-bg-surface/50 transition-all duration-300"
            >
              <h3 className="text-base font-sans font-semibold text-text-primary mb-3">{question}</h3>
              <p className="text-sm leading-relaxed text-text-secondary text-left font-light">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
