import type { MetadataRoute } from "next";

const siteUrl = "https://sanketbhatt.dev"; // [TODO: update once the custom domain is confirmed]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
