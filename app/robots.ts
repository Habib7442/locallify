import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://locallify.in";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/onboarding/",
        "/onboarding/*",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
