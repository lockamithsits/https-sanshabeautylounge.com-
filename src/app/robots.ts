import type { MetadataRoute } from "next";
import { SITE } from "@/data/siteConfig";

/** Required for static export (output: "export"). */
export const dynamic = "force-static";

/**
 * robots.txt. AI and search crawlers are explicitly allowed — never
 * blocked. Only utility paths are disallowed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: [
      `${SITE.url}/sitemap.xml`,
      `${SITE.url}/image-sitemap.xml`,
    ],
  };
}
