import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Portfolio | Digital Legacies by Locallify",
  description: "Browse our diverse portfolio of elite digital storefronts and managed web solutions for local businesses across India.",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Locallify Portfolio",
    "description": "Showcase of elite digital storefronts and local business transformation projects.",
    "provider": {
      "@type": "Organization",
      "name": "Locallify",
      "url": "https://locallify.in"
    }
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
