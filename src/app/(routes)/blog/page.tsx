import AllBlogs from "@/components/blog/all-blogs";
import BlogHero from "@/components/blog/blog-hero";
import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import Cta from "@/components/common/cta";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import StickyCursor from "@/components/common/sticky-cursor";
import { Metadata } from "next";

const baseUrl = "https://studioix.agency";
const wwwBaseUrl = "https://www.studioix.agency";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "MVP development agency",
    "Startup MVP builder",
    "Quick MVP development",
    "6-week MVP development",
    "Minimum viable product",
    "Tech startup agency",
    "Rapid prototyping",
    "Product strategy",
    "Software development",
    "Product validation",
    "Startup consulting",
    "Digital product design",
    "Web application development",
    "Mobile app development",
    "Full-stack development",
  ],
  title: "Studio IX Blog — MVP Development Insights",
  description:
    "Stay up-to-date with the latest trends in MVP development and. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
  openGraph: {
    title: "Studio IX Blog — MVP Development Insights",
    siteName: "Studio IX",
    description:
      "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
    images: ["/assets/blog-thumbnail.png"],
    url: `${baseUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio IX Blog — MVP Development Insights",
    description:
      "Stay up-to-date with the latest trends in MVP development and. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
    images: ["/assets/blog-thumbnail.png"],
    creator: "@studioixagency",
  },
  icons: "/favicon.ico",
};

const Blogs = () => {
  return (
    <div>
      <SmoothScroll />
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <BlogHero />
      <AllBlogs />
      <Cta />
    </div>
  );
};

export default Blogs;
