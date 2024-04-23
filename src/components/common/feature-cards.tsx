"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PrimaryButton from "./primary-button";

interface FeatureCardProps {
  number: string;
  textColor: string;
  i: number;
  title: string;
  description: string;
  descriptionMobile?: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  i,
  number,
  title,
  description,
  descriptionMobile,
  src,
  color,
  textColor,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start end", "start start"],
    });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: `${color}`,
          top: `0px`,
        }}
        className="card w-full"
      >
        <div className={`body text-${textColor}`}>
          <div className="flex flex-col items-start w-full md:w-[80%] lg:[70%] 2xl:w-[65%] 3xl:w-[50%] 4xl:w-[75%] justify-center md:-mt-[5rem] pl-5 pr-5 md:pl-20 md:pr-0 pt-10 md:pt-0">
            <div className="flex flex-row w-full gap-4">
              <p className="text-lg md:text-xl font-archivo">{number}</p>
              <h2 className="text-4xl md:text-5xl font-semibold font-cabinetGrotesk">
                {title}
              </h2>
            </div>
            <p
              className={`mt-1 md:mt-6 text-lg md:text-xl font-archivo font-normal opacity-80 hidden md:block`}
            >
              {description}
            </p>
            <p
              className={`mt-1 md:mt-6 text-lg md:text-xl font-archivo font-normal opacity-80 md:hidden`}
            >
              {descriptionMobile}
            </p>
            <div className="mt-10 hidden md:block">
              <PrimaryButton text="Get Started Now" link="/about-us" />
            </div>
          </div>

          <div className="imageContainer mt-5 md:mt-0">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <video autoPlay loop muted>
                <source src={`/videos/${src}`} type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
