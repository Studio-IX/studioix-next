import { getPosts } from "@/hooks/get-blogs";
import { Post } from "@/lib/interface";

export default async function sitemap() {
  const baseUrl = "https://www.studioix.agency";

  const response: Post[] = await getPosts();
  const blogPosts = response?.map((post) => {
    return {
      url: `${baseUrl}/blog/${post?.slug?.current}`,
      lastModified: post?.publishedAt,
      priority: 0.8
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legals/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legals/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legals/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogPosts,
  ];
}
