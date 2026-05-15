import React from "react";
import { constructMetadata } from "@/lib/seo";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata = constructMetadata({
  title: "Our Mission | Locallify",
  description: "Modernizing the street. We empower India's local legends with elite digital presence and high-performance storefronts.",
});

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Locallify",
    "description": "Learn about Locallify's mission to modernize Indian local businesses through elite digital presence.",
    "url": "https://locallify.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Locallify",
      "slogan": "Modernizing the street.",
      "url": "https://locallify.in"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageClient />
    </>
  );
}
