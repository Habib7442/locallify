import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Digital Marketing Services for Local Businesses | Locallify",
  description: "Google Business mastery, WhatsApp sales engines, premium shop pages, and managed growth. Digital domination tools for local legends. Get started in 48 hours.",
  image: "/og_image.png",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Locallify Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Locallify",
      "url": "https://locallify.in"
    },
    "serviceType": ["Google Business Optimization", "WhatsApp Commerce", "Web Design", "Growth Management"],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Mastery",
            "description": "Full optimization of Google Business Profile for local dominance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Sales Engines",
            "description": "Turning WhatsApp into a powerful sales and lead capture tool."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Storefronts",
            "description": "Premium, high-performance one-page websites for local shops."
          }
        }
      ]
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
