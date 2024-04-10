"use client";

import { features } from "@/constants/featuresData";
import FeatureCard from "./feature-cards";
import Lenis from "@studio-freight/lenis";
import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface Feature {
  number: string;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface CardsProps {
  features?: Feature[];
}

const Cards: React.FC<CardsProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  const isAtBottom = scrollYProgress.get() === 1;

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div ref={container} className="flex flex-col items-center bg-black pt-20">
      <div
        className={`flex flex-col md:flex-row justify-between items-start w-full px-3 md:px-20 sticky pb-12 top-6 md:top-48`}
      >
        <h2 className="text-white uppercase text-5xl md:text-6xl font-semibold font-cabinetGrotesk">
          Our process
        </h2>
        <p className="text-white/80 text-lg md:text-2xl font-archivo">
          Our unique processes are tailored to your unique goals, so you can
          dominate <br className="hidden md:block" /> your competition and leave
          a lasting impression on your customers
        </p>
      </div>
      {features.map((feature, i) => {
        const targetScale: number = 1 - (features.length - i) * 0.05;
        return (
          <FeatureCard
            key={`p_${i}`}
            i={i}
            textColor={feature.text}
            {...feature}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

Cards.defaultProps = {
  features: [],
};

export default Cards;
