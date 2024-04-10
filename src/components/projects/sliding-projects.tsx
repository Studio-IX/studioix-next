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

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="slidingImages">
      <motion.div style={{ x: x1 }} className="slider">
        {slider1.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div className="imageContainer">
                <Image
                  className=" rounded-[20px]"
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
        <motion.div className="projsButtonContainer top-[40%] left-[45%]">
          <Rounded backgroundColor={"#334BD3"} className="projsButton">
            <div className="flex flex-col items-center justify-center">
              <h4 className=" font-cabinetGrotesk text-4xl font-semibold uppercase">
                100+
              </h4>

              <p className="font-archivo uppercase">Products Built</p>
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
                  className=" rounded-[20px]"
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
