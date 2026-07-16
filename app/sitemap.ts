import { MetadataRoute } from "next";
import { profileService } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://locallifyagency.com";

  // Core Marketing Routes
  const coreRoutes = [
    "",
    "/portfolio",
    "/pricing",
    "/services",
    "/about",
    "/reviews",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : 0.8,
  }));

  // Target Cities Routes for Local SEO
  const cities = ["silchar", "guwahati", "imphal", "shillong"];
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Verified Business storefront profiles dynamically loaded from DB
  let profileRoutes: MetadataRoute.Sitemap = [];
  try {
    const profiles = await profileService.getPublicProfiles();
    profileRoutes = profiles.map((profile) => ({
      url: `${baseUrl}/${profile.slug}`,
      lastModified: profile.$createdAt 
        ? profile.$createdAt.split("T")[0] 
        : new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error generating dynamic profiles sitemap entries:", error);
  }

  return [...coreRoutes, ...cityRoutes, ...profileRoutes];
}
