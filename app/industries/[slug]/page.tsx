import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { projectService } from "@/lib/cms";
import type { Project } from "@/lib/types";
import { INDUSTRIES_LIVE, getIndustryPage, industryPages } from "@/content/industries";
import IndustryPageView from "@/components/industries/IndustryPageView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return constructMetadata({
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: `/industries/${page.slug}` },
    // Generated per page by ./opengraph-image.tsx; used for OG and Twitter.
    image: `/industries/${page.slug}/opengraph-image`,
    // Hidden until the owner confirms prices and 🔒 claims (see content/industries/index.ts).
    noIndex: !INDUSTRIES_LIVE,
  });
}

export default async function IndustryPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  // Proof comes only from real, published portfolio items.
  const projects = (
    await Promise.all(page.proof.portfolioSlugs.map((s) => projectService.getProjectBySlug(s).catch(() => null)))
  ).filter((p): p is Project => p !== null);

  const url = `${SITE_URL}/industries/${page.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: page.seo.title,
        description: page.seo.description,
        url,
        dateModified: page.updatedAt,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        // TODO(owner): add reviewedBy → founder Person once name/LinkedIn are provided.
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        serviceType: page.serviceName,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", audienceType: page.audienceType },
        offers: page.packages.map((pkg) => ({
          "@type": "Offer",
          name: pkg.name,
          price: pkg.priceFrom,
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: pkg.priceFrom,
            priceCurrency: "USD",
            description: "Starting at",
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        ...breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Industries", path: "/industries" },
          { name: page.niche, path: `/industries/${page.slug}` },
        ]),
        "@context": undefined,
        "@id": `${url}#breadcrumb`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <IndustryPageView page={page} projects={projects} />
    </>
  );
}
