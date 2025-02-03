"use client";

import { MotionValue, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
interface FeatureCardProps {
  textColor: string;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  src,
  color,
  textColor,
}) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: `${color}`,
          top: `0px`,
        }}
        className="card w-full overflow-y-clip"
      >
        <div className={`body md:ml-12 lg:ml-20 text-${textColor}`}>
          <div className="flex flex-col items-start w-full md:w-[80%] lg:[70%] 2xl:w-[65%] 3xl:w-[50%] 4xl:w-[75%] justify-center md:-mt-[5rem] pl-5 pr-5 md:pl-20 md:pr-0 pt-10 md:pt-0">
            <h2 className="text-4xl md:text-7xl uppercase tracking-tighter font-semibold font-cabinetGrotesk">
              {title}
            </h2>
            <p
              className={`mt-1 md:mt-6 text-base md:text-xl font-archivo font-normal opacity-80 md:max-w-xl`}
            >
              {description}
            </p>
            <div className=" mt-4 md:mt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
              <span
                style={{
                  backgroundColor: `${color}`,
                }}
                className={`text-${textColor} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-3xl`}
              >
                Build Your First MVP
                <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
              </span>
            </div>
          </div>

          <div className="imageContainer mt-5 md:mt-8">
            <motion.div className="inner">
              <video className=" scale-150 md:scale-100" autoPlay loop muted>
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
