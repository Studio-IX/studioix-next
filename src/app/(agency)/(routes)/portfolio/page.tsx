"use client";

import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import PortfolioHero from "@/components/common/hero-portfolio";
import Preloader from "@/components/common/preloader";
import StickyCursor from "@/components/common/sticky-cursor";
import AllProjects from "@/components/projects/all-projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioPage = () => {
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
      <ChatwootWidget />
      <BackToTop />
      <StickyCursor />
      <PortfolioHero />

      <AllProjects />
    </div>
  );
};

export default PortfolioPage;
