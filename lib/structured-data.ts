import { CONTACT, GOOGLE_RATING, NAP, SAME_AS, SITE_NAME, SITE_URL } from "./site-config";

/** Sitewide Organization + WebSite graph — rendered once, in the root layout. */
export function organizationWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/locallify_dark.svg`,
        description:
          "Locallify is a software studio based in Silchar, Assam, building custom software, web apps, mobile apps, AI features, and SEO + GEO systems for clients across India and worldwide.",
        sameAs: SAME_AS,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            contactType: "customer support",
            areaServed: ["IN", "Worldwide"],
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

interface LocalBusinessOptions {
  /** Only set true on pages that visibly render real reviews. */
  includeAggregateRating: boolean;
}

/**
 * LocalBusiness node with full Silchar NAP. Pair AggregateRating only with
 * visible reviews.
 *
 * TODO(owner): `image`, `priceRange`, and `openingHoursSpecification` are
 * intentionally omitted — none of these have a verified value in the brief's
 * reference data. Provide the real business photo, price range, and hours
 * (matching the Google Business Profile) and add them back rather than
 * guessing.
 */
export function localBusinessJsonLd({ includeAggregateRating }: LocalBusinessOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Silchar" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    sameAs: SAME_AS,
    ...(includeAggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: GOOGLE_RATING.value.toFixed(1),
        reviewCount: String(GOOGLE_RATING.count),
        bestRating: "5",
      },
    }),
  };
}

interface BreadcrumbItem {
  name: string;
  path: string; // relative, e.g. "/portfolio" or "" for home
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
