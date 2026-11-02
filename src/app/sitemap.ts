import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const siteUrl = "https://www.sanketbhatt.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/skills",
    "/work",
    "/experience",
    "/education",
    "/extras",
    "/contact",
  ]
    .concat(site.features.music ? ["/music"] : [])
    .map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
