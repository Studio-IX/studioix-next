"use client";

import BackToTop from "@/components/common/back-to-top";
import Cards from "@/components/common/cards";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import { FAQs } from "@/components/common/faq";
import Hero from "@/components/common/hero";
import Preloader from "@/components/common/preloader";
import Pricing from "@/components/common/pricing";
import SocialProof from "@/components/common/social-proof";
import StickyCursor from "@/components/common/sticky-cursor";
import Testimonials from "@/components/common/testimonials";
import Video from "@/components/video/video-reel";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full max-w-full h-fit overflow-clip">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <Hero />
      <Video />
      <div className="md:h-[8rem] bg-black" />
      <SocialProof />
      <div className="h-[3rem] md:h-[8rem] bg-black" />
      <Cards />
      <div className=" h-[6rem]" />
      <Pricing />
      <div className=" h-[6rem]" />
      <Testimonials />
      <FAQs />
      <div className="h-[8rem]" />
    </div>
  );
}
