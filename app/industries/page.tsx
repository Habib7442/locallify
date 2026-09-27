import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { INDUSTRIES_LIVE, industryPages } from "@/content/industries";
import { formatUsd } from "@/content/industries/pricing";

const title = "Website Design for Service Businesses | Locallify";
const description =
  "Websites and booking systems built for dental practices, med spas, roofers and cleaning companies — where one missed call is a lost job.";

export const metadata = constructMetadata({
  title,
  description,
  alternates: { canonical: "/industries" },
  noIndex: !INDUSTRIES_LIVE,
});

export default function IndustriesHub() {
  const url = `${SITE_URL}/industries`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        name: title,
        description,
        url,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: industryPages.map((page, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: page.serviceName,
            url: `${SITE_URL}/industries/${page.slug}`,
          })),
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Industries", path: "/industries" },
      ]),
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <main id="main-content" className="px-4 sm:px-6 pt-36 pb-24">
        <div className="container mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-text-muted">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-text-primary">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-text-secondary">Industries</li>
            </ol>
          </nav>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-secondary">Industries</p>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl font-sans font-bold leading-[1.05] tracking-tight">
            Websites and booking systems built for your industry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Locallify does website design for service businesses where one missed call is a lost job. Each industry
            page shows the problems we solve, the numbers behind them, and how we build.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {industryPages.map((page) => (
              <Link
                key={page.slug}
                href={`/industries/${page.slug}`}
                className="group flex flex-col rounded-2xl border border-border-default bg-bg-surface/50 p-8 transition-colors hover:border-accent-primary/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">{page.niche}</p>
                <h2 className="mt-4 text-2xl font-bold text-text-primary group-hover:text-accent-primary">{page.serviceName}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-text-secondary">{page.card.summary}</p>
                <p className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-text-muted">From {formatUsd(page.packages[0].priceFrom)}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-text-primary">
                    See how we build <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </p>
              </Link>
            ))}
            <Link
              href="/contact"
              className="group flex flex-col rounded-2xl border border-dashed border-border-strong p-8 transition-colors hover:border-accent-primary/40 md:col-span-2"
            >
              <h2 className="text-2xl font-bold text-text-primary">Don’t see your industry?</h2>
              <p className="mt-3 text-text-secondary">
                The same system works for most appointment- and quote-based businesses. Tell us what you do.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
