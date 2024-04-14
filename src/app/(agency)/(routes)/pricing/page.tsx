"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import StickyCursor from "@/components/common/sticky-cursor";
import Pricing from "@/components/pricing/pricing";
import Preloader from "@/components/common/preloader";

const PricingPage = () => {
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
      <StickyCursor />
      <ChatwootWidget />
      <BackToTop />
      <Pricing />
      <div className="h-screen"></div>
    </div>
  );
};

export default PricingPage;
