import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us | Locallify",
  description: "Modernizing the street. Discover the mission behind Locallify and how we're bringing elite digital presence to every corner of India.",
  alternates: {
    canonical: "https://locallify.in/about",
  }
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Locallify",
      "description": "Locallify provides elite digital infrastructure and marketing services for local businesses in India.",
      "url": "https://locallify.in",
      "logo": "https://locallify.in/logo.png",
      "sameAs": [
        "https://www.instagram.com/locallify.in/"
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
