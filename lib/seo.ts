import { Metadata } from "next";
import { SITE_URL } from "./site-config";

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
  title = "Locallify | Custom Software, Web & Mobile Apps",
  description = "Software studio based in Silchar, Assam, building custom software, web apps, mobile apps, AI features, and SEO + GEO for clients across India and worldwide.",
  image = "/og_image.jpg",
  icons = {
    icon: [
      { url: "/favicons/favicon-16.png",    sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32.png",    sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48.png",    sizes: "48x48", type: "image/png" },
      { url: "/favicons/icon-192.png",      sizes: "192x192", type: "image/png" },
      { url: "/favicons/icon-512.png",      sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicons/favicon-32.png",
  } satisfies Metadata["icons"],
  noIndex = false,
  keywords = [
    "Locallify",
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "AI Feature Development",
    "SEO GEO Software Studio",
    "Generative Engine Optimization",
    "SaaS Development Studio",
    "Global Web Development Agency",
    "Custom App Development",
    "Technical SEO Development",
    // Local-entity terms — keep in sync with the Silchar anchor positioning
    // (see brief §2 / lib/site-config.ts) so meta keywords, JSON-LD, and
    // on-page copy all agree on where Locallify is based.
    "Web Development Company Silchar",
    "Software Company Silchar Assam",
    "Custom Software Development India",
    "App Development Silchar",
  ],
  alternates = {},
}: MetadataProps = {}): Metadata {
  return {
    title: {
      // `absolute` so a page's fully-composed title (most already end in
      // "| Locallify") isn't run through the template a second time —
      // every route calls constructMetadata() independently, so a plain
      // default+template here would double the suffix on every page.
      absolute: title,
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
          alt: "Locallify | Custom Software, Web and Mobile Apps",
        },
      ],
      type: "website",
      locale: "en_US",
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
    metadataBase: new URL(SITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
