"use client";

import ProjectCard from "@/components/projects/project-card";
import { portfolio } from "@/constants/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main className="pb-20">
      {portfolio.map((project, i) => {
        const targetScale = 1 - (portfolio.length - i) * 0.05;
        return (
          <ProjectCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 2]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default Portfolio;
