import { MetadataRoute } from "next";
import { blogService, profileService, projectService } from "@/lib/cms";
import { SITE_URL } from "@/lib/site-config";
import { services } from "@/lib/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Core Marketing Routes
  const coreRoutes = [
    "",
    "/portfolio",
    "/pricing",
    "/services",
    "/about",
    "/reviews",
    "/contact",
    "/blog",
    "/web-development-company-silchar",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
    "/shipping-policy",
  ].map((route) => {
    const isLegal = ["/privacy-policy", "/terms", "/refund-policy", "/shipping-policy"].includes(route);
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: isLegal ? ("yearly" as const) : ("weekly" as const),
      priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : isLegal ? 0.3 : 0.8,
    };
  });

  // Individual service capability pages (/services/[slug])
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.8,
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

  // Public case studies dynamically loaded from DB
  let projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const projects = await projectService.getPublicProjects();
    projectRoutes = projects.map((project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified: project.completionDate || new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating dynamic project sitemap entries:", error);
  }

  // Published blog posts dynamically loaded from Sanity (falls back to shipped articles)
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await blogService.getPublishedPosts();
    articleRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt || new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating dynamic blog sitemap entries:", error);
  }

  return [...coreRoutes, ...serviceRoutes, ...articleRoutes, ...profileRoutes, ...projectRoutes];
}
