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
  title = "Locallify | Custom Software, Web & Mobile Apps",
  description = "Global software studio for custom software, web apps, mobile apps, AI features, and SEO + GEO. Built to launch fast and get found.",
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
    metadataBase: new URL("https://locallifyagency.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
