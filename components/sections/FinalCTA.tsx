import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

const whatsappHref = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Locallify, I'd like to discuss a software project.")}`;

export default function FinalCTA() {
  return (
    <section className="bg-bg-primary px-6 py-20">
      <div className="container mx-auto">
        <div className="rounded-[2rem] border border-border-subtle bg-bg-surface p-6 text-center shadow-2xl shadow-accent-primary/10 md:p-12">
          <span className="mb-5 inline-flex rounded-pill bg-accent-soft px-4 py-2 text-xs font-semibold text-accent-primary">
            Ready when the idea is serious
          </span>
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-text-primary md:text-6xl">
            Tell us what you want to build. We will help shape the first clean version.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
            Send the goal, rough budget, timeline, and any references. We will reply
            with the best next step: fixed package, discovery sprint, or custom quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary gap-2">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="mailto:hello@locallifyagency.com" className="btn-ghost gap-2">
              Email the brief
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
