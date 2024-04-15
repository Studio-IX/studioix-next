"use client";

import BackToTop from "@/components/common/back-to-top";
import Cards from "@/components/common/cards";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import { FAQs } from "@/components/common/faq";
import Hero from "@/components/common/hero";
import { InfiniteMovingCards } from "@/components/common/infinite-moving-cards";
import Preloader from "@/components/common/preloader";
import StickyCursor from "@/components/common/sticky-cursor";
import Projects from "@/components/projects/projects";
import SlidingProjects from "@/components/projects/sliding-projects";
import Video from "@/components/video/video-reel";
import { clients } from "@/constants/clients";
import { AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div className="w-full h-fit">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <Hero />
      <div className="w-full max-w-full px-40 flex items-center justify-between mt-20">
        <h3 className=" text-white text-xl font-archivo">
          Partnered with trailblazers.{" "}
          <span className=" text-[#4686d9]">You&apos;re in good hands.</span>
        </h3>
        <div className="flex text-white/70 items-center gap-4 font-archivo text-lg font-light">
          <p>Drag horizontally to see our previous partners</p>
          <MoveHorizontal />
        </div>
      </div>
      <InfiniteMovingCards items={clients} direction="right" speed="slow" />
      <SlidingProjects />
      <div className="h-[30rem] bg-black p-10" />
      <Video />
      <div className="h-screen bg-black" />
      <div className="h-[40rem] bg-black" />
      <div>
        <Cards />
      </div>
      <Projects />
      {/* <AgencyServices /> */}
      {/* <Pricing /> */}
      {/* <Team /> */}
      <FAQs />
      <div className="h-[50vh]" />
    </div>
  );
}
