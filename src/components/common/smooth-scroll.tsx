"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
};