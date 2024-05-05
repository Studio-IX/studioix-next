"use client";

import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import StickyCursor from "@/components/common/sticky-cursor";
import PortfolioInfo from "@/components/portfolio/info";
import NextProjects from "@/components/portfolio/next-projects";
import ProjectHero from "@/components/projects/project-hero";
import Arrow from "@/components/service/arrow";
import ServiceTestimonialItem from "@/components/service/service-testimonial-item";
import ProjectReel from "@/components/video/project-reel";
import Wrapper from "@/components/wrapper/wrapper";
import { midasTestimonials } from "@/constants/testimonials";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/common/preloader";

const MidasPage = () => {
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
    <div className="w-full">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BackToTop />
      <StickyCursor />
      <ChatwootWidget />
      <ProjectHero />
      <div className="h-[8rem] bg-black" />
      <ProjectReel title="Midas Project Showcase" src="/videos/showreel.mp4" />
      <div className="h-screen bg-black" />
      <div className="h-[20rem] bg-black" />
      <PortfolioInfo />
      <Wrapper className="pt-80 mb-20 md:mb-40 w-full">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full">
            <h2 className="text-white text-5xl md:text-6xl font-cabinetGrotesk font-semibold pr-16 -mt-2 md:pr-0 uppercase">
              Feedback from the client
            </h2>
          </div>
          <div className="w-[80%] flex items-center justify-end">
            <Arrow />
          </div>
        </div>
      </Wrapper>
      <div className="px-3 md:px-20">
        {midasTestimonials.map((testimonial, i) => {
          return (
            <ServiceTestimonialItem
              key={i}
              image={testimonial.img}
              clientName={testimonial.clientName}
              companyAndPosition={testimonial.companyAndPosition}
              clientTestimonial={testimonial.clientTestimonial}
            />
          );
        })}
      </div>
      <NextProjects />
    </div>
  );
};

export default MidasPage;
