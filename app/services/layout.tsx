import { constructMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-config";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/structured-data";
import { servicesFaqs } from "@/lib/data/services-faqs";

export const metadata = constructMetadata({
  title: "Custom Software, Web & Mobile App Development in Silchar, India | Locallify",
  description: "Custom software, web apps, mobile apps, AI features, and SEO + GEO — built by a Silchar, Assam studio for clients across India and worldwide.",
  alternates: { canonical: "/services" },
});

const serviceCapabilities: { name: string; description: string }[] = [
  { name: "Custom Software & SaaS", description: "Internal tools, admin portals, and workflow systems built around how a company actually works." },
  { name: "Web Apps & Products", description: "High-performance web applications on Next.js/React with polished product UX." },
  { name: "Mobile Applications", description: "Cross-platform iOS and Android apps via React Native." },
  { name: "SEO & GEO Systems", description: "Structured schema, Core Web Vitals, and entity clarity so software ranks on Google and gets referenced in AI search." },
  { name: "n8n & Automations", description: "Webhook-triggered workflow automation connecting tools, CRMs, and AI pipelines." },
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services#service`,
        "name": "Locallify Custom Software & SEO+GEO Services",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "serviceType": serviceCapabilities.map((s) => s.name),
        "areaServed": [
          { "@type": "City", name: "Silchar" },
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Capabilities",
          "itemListElement": serviceCapabilities.map((s) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": s.name,
              "description": s.description,
            },
          })),
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "" },
        { name: "Services", path: "/services" },
      ]),
      faqPageJsonLd(servicesFaqs),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
