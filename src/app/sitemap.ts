import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/content";

const siteUrl = "https://sanketbhatt.dev"; // [TODO: update once the custom domain is confirmed]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/music"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const slugs = await getAllProjectSlugs();
  const projectRoutes = slugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
