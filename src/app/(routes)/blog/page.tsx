"use client";

import BlogCard from "@/components/blog/blog-card";
import BlogHero from "@/components/blog/blog-hero";
import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import Cta from "@/components/common/cta";
import StickyCursor from "@/components/common/sticky-cursor";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <BlogHero />
      <Link href="/blog/slug">
        <BlogCard
          date="February 09, 2025"
          excerpt="This article explores how an advanced Webflow website-building platform can help companies save resources and simplify website development. We’ll explain why a combination of flexibility, powerful tools, and scalability is ideal for businesses looking for efficient and high-performance solutions."
          src="/projects/stakenet/1.png"
          tagOne="Web Development"
          tagTwo="UI/UX"
          title="Why Webflow is the best platform for businesses in 2025"
          writer="Abiola Braimah"
        />
      </Link>
      <BlogCard
        date="February 09, 2025"
        excerpt="This article explores how an advanced Webflow website-building platform can help companies save resources and simplify website development. We’ll explain why a combination of flexibility, powerful tools, and scalability is ideal for businesses looking for efficient and high-performance solutions."
        src="/projects/astrae/3.png"
        tagOne="Web Development"
        tagTwo="UI/UX"
        title="Why Webflow is the best platform for businesses in 2025"
        writer="Abiola Braimah"
      />
      <Cta />
    </div>
  );
};

export default Blogs;
