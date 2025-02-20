"use client";

import BackToTop from "@/components/common/back-to-top";
import Cards from "@/components/common/cards";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import Cta from "@/components/common/cta";
import { FAQs } from "@/components/common/faq";
import Hero from "@/components/common/hero";
import OurProcess from "@/components/common/our-process";
import Pricing from "@/components/common/pricing";
import SocialProof from "@/components/common/social-proof";
import StickyCursor from "@/components/common/sticky-cursor";
import Testimonials from "@/components/common/testimonials";
import AllProjects from "@/components/projects/all-projects";
import AllProjectsMobile from "@/components/projects/all-projects-mobile";
import Video from "@/components/video/video-reel";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full max-w-full h-fit overflow-clip">
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <Hero />
      <Video />
      <div className="md:h-[8rem] bg-black" />
      <SocialProof />
      <div className="h-[3rem] md:h-[8rem] bg-black" />
      <div className=" hidden md:block">
        <AllProjects />
      </div>
      <div className="  md:hidden">
        <AllProjectsMobile />
      </div>
      <div className="h-[3rem] md:h-[8rem] bg-black" />
      <Cards />
      <div className=" h-[6rem]" />
      <OurProcess />
      <div className=" h-[6rem]" />
      <Pricing />
      <div className=" h-[6rem]" />
      <Testimonials />
      <FAQs />
      <Cta />
    </div>
  );
}
