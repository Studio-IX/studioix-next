"use client";

import BackToTop from "@/components/common/back-to-top";
import Cards from "@/components/common/cards";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import { FAQs } from "@/components/common/faq";
import Hero from "@/components/common/hero";
import { InfiniteMovingCards } from "@/components/common/infinite-moving-cards";
import { Navigation } from "@/components/common/navigation";
import AgencyServices from "@/components/common/services";
import Team from "@/components/common/team";
import Projects from "@/components/projects/projects";
import SlidingProjects from "@/components/projects/sliding-projects";
import Video from "@/components/video/video-reel";
import { clients } from "@/constants/clients";
import { MoveHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <BackToTop />
      <ChatwootWidget />
      <Navigation />
      <Hero />
      <div className="w-full max-w-full px-40 flex items-center justify-between mt-40">
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
      <AgencyServices />
      {/* <Pricing /> */}
      <Team />
      <FAQs />
      <div className="h-[50vh]" />
    </div>
  );
}
