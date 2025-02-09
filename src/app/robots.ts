import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [
        "/studio",
        "/legals/terms",
        "/legals/privacy-policy",
        "/legals/cookie-policy",
      ],
    },
    sitemap: "https://www.studioix.agency/sitemap.xml",
  };
}
