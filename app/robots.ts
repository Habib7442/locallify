import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  // GEO (Generative Engine Optimization) depends on AI crawlers being able to
  // read the site, so they're explicitly allowed alongside the general rule.
  const aiCrawlers = ["GPTBot", "PerplexityBot", "Google-Extended", "ClaudeBot", "CCBot"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
