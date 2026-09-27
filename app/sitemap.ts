import { MetadataRoute } from "next";
import { blogService, profileService, projectService } from "@/lib/cms";
import { SITE_URL } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { INDUSTRIES_LIVE, industryPages } from "@/content/industries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  // Core Marketing Routes. No lastModified on static pages: a build-time
  // "today" on every URL tells crawlers nothing and erodes trust in the
  // dates that are real (CMS-driven posts and case studies below).
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
      changeFrequency: isLegal ? ("yearly" as const) : ("weekly" as const),
      priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : isLegal ? 0.3 : 0.8,
    };
  });

  // Individual service capability pages (/services/[slug])
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Verified Business storefront profiles dynamically loaded from DB
  let profileRoutes: MetadataRoute.Sitemap = [];
  try {
    const profiles = await profileService.getPublicProfiles();
    profileRoutes = profiles.map((profile) => ({
      url: `${baseUrl}/${profile.slug}`,
      ...(profile.$createdAt && { lastModified: profile.$createdAt.split("T")[0] }),
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
      ...((project.$updatedAt || project.completionDate) && {
        lastModified: (project.$updatedAt || project.completionDate)!.split("T")[0],
      }),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating dynamic project sitemap entries:", error);
  }

  // Published blog posts: Sanity + shipped articles — the same list /blog renders
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await blogService.getPublishedPosts();
    articleRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      ...((post.updatedAt || post.publishedAt) && {
        lastModified: (post.updatedAt || post.publishedAt)!.split("T")[0],
      }),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating dynamic blog sitemap entries:", error);
  }

  // Industry landing pages — only once launched (they're noindex until then).
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_LIVE
    ? [
        {
          url: `${baseUrl}/industries`,
          lastModified: industryPages.map((p) => p.updatedAt).sort().at(-1),
          changeFrequency: "monthly" as const,
          priority: 0.8,
        },
        ...industryPages.map((page) => ({
          url: `${baseUrl}/industries/${page.slug}`,
          lastModified: page.updatedAt,
          changeFrequency: "monthly" as const,
          priority: 0.8,
        })),
      ]
    : [];

  return [...coreRoutes, ...industryRoutes, ...serviceRoutes, ...articleRoutes, ...profileRoutes, ...projectRoutes];
}
