import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  alternates?: {
    canonical?: string;
  };
}

export function constructMetadata({
  title = "Locallify | Digital Storefronts for Local Legends",
  description = "High-conversion digital presence for India's local business market. Get found on Google and convert searches into WhatsApp inquiries.",
  image = "/og_image.png",
  icons = "/favicon.ico",
  noIndex = false,
  keywords = [
    "Locallify",
    "Digital Storefront India",
    "Local Business Marketing",
    "Google Business Profile Optimization",
    "WhatsApp Commerce",
    "North East India Tech",
    "Small Business Growth India",
    "Local SEO Services",
    "Tier 2 City Digital Transformation",
    "Managed Web Services",
    "Web Development Silchar",
    "App Development Service Silchar",
    "Best Web Agency Silchar",
  ],
  alternates = {},
}: MetadataProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | Locallify`,
    },
    description,
    keywords,
    alternates,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Locallify | Digital Storefronts for Local Legends",
        },
      ],
      type: "website",
      locale: "en_IN",
      siteName: "Locallify",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@locallify",
    },
    icons,
    metadataBase: new URL("https://locallify.in"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
