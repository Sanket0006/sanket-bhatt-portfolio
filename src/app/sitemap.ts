import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const siteUrl = "https://sanketbhatt.dev"; // [TODO: update once the custom domain is confirmed]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/music"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
