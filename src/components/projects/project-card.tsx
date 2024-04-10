"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "../common/section-title";

const ProjectCard = ({
  title,
  src,
  i,
  progress,
  range,
  targetScale,
}: {
  title: string;
  src: string;
  i: number;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="projectCardContainer px-10">
      <motion.div
        style={{
          scale,
          top: `0px`,
        }}
        className="card border border-white/20"
      >
        <div className="body">
          <div className="absolute z-50 left-10 top-10">
            <h2 className="font-cabinetGrotesk text-4xl lg:text-6xl text-white font-semibold">
              {title}
            </h2>
          </div>
          <div className=" absolute left-10 bottom-10 flex items-center gap-4">
            <SectionTitle text="Branding" />
            <SectionTitle text="Development" />
            <SectionTitle text="User Experience" />
          </div>
          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image
                fill
                quality={100}
                src={`${src}`}
                className=" object-left-top"
                alt="image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
