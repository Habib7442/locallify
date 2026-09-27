import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  // GEO (Generative Engine Optimization) depends on AI crawlers being able to
  // read the site, so they're explicitly allowed alongside the general rule.
  // Search/answer bots (fetch pages to cite them in answers) plus training
  // crawlers. TODO(owner): confirm allowing AI *training* crawlers
  // (GPTBot, Google-Extended, ClaudeBot, CCBot) is intended.
  const aiCrawlers = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User",
    "ClaudeBot", "Claude-SearchBot", "Claude-User",
    "PerplexityBot", "Perplexity-User",
    "Google-Extended", "Bingbot", "CCBot",
  ];

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
