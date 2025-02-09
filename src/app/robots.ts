import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: ["/studio"],
    },
    sitemap: "https://www.studioix.agency/sitemap.xml",
  };
}
