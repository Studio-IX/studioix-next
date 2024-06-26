"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Rounded from "../common/rounded-button";
import Link from "next/link";

const slider1 = [
  {
    src: "1.png",
  },
  {
    src: "2.png",
  },
  {
    src: "4.png",
  },
  {
    src: "3.png",
  },
];

const slider2 = [
  {
    src: "5.png",
  },
  {
    src: "6.png",
  },
  {
    src: "2.png",
  },
  {
    src: "1.png",
  },
];

const SlidingProjects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div ref={container} className="slidingImages overflow-x-hidden">
      <motion.div style={{ x: x1 }} className="slider">
        {slider1.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div className="imageContainer">
                <Image
                  className=" rounded-xl md:rounded-[20px]"
                  fill={true}
                  alt={"image"}
                  src={`/projects/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <Link href="/#projects">
        <motion.div className="projsButtonContainer top-[25%] left-[30%]  md:top-[40%] md:left-[45%]">
          <Rounded backgroundColor={"#334BD3"} className="projsButton w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
            <div className="flex flex-col items-center justify-center">
              <h4 className=" font-cabinetGrotesk text-3xl md:text-4xl font-semibold uppercase">
                100+
              </h4>

              <p className="font-archivo uppercase text-sm md:text-lg">Products Built</p>
            </div>
          </Rounded>
        </motion.div>
      </Link>
      <motion.div style={{ x: x2 }} className="slider mt-[1vw]">
        {slider2.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div key={index} className="imageContainer">
                <Image
                  className=" rounded-xl md:rounded-[20px]"
                  fill={true}
                  alt={"image"}
                  src={`/projects/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingProjects;
