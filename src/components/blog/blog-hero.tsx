"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const BlogHero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundImage: 'url("/images/stars.png")',
        backgroundPositionY,
      }}
      className="w-full h-fit md:min-h-[50vh] relative pb-12 md:pb-32"
    >
      <div className="hidden md:block">
        <div className=" w-full flex flex-col items-center pt-40">
          <div className=" w-fit overflow-hidden md:px-8 rounded-full bg-[#455CE9] py-3 md:py-4 mt-1 md:mt-3">
            <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 tracking-tighter">
              From idea to launch
            </h2>
          </div>
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-2 tracking-tighter">
            Expert insights & advice
          </h2>

          <Link href="/#all-blogs">
            <div className="flex items-center gap-4 z-[214748300] mt-12">
              <div className=" h-12 w-7 rounded-full border-[2px] border-white flex items-start justify-center">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className=" w-[2.5px] h-4 mt-2 bg-white rounded-full"
                />
              </div>
              <p className=" uppercase font-archivo text-white hidden md:block md:text-lg font-normal">
                Read Blogs
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className=" md:hidden mt-32">
        <div className=" w-full flex flex-col items-center">
          <div className=" w-fit overflow-hidden px-8 rounded-full bg-[#455CE9] py-3 mt-1">
            <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl text-white text-center tracking-tighter">
              All Blogs
            </h2>
          </div>
          <p className=" font-archivo text-base text-white/80 text-center w-full uppercase mt-4 max-w-xs">
            From idea to launch — Expert insights & advice
          </p>

          <Link href="/#all-blogs">
            <div className="flex items-center gap-4 z-[214748300] mt-8">
              <div className=" h-12 w-7 rounded-full border-[2px] border-white flex items-start justify-center">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [1, 0.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className=" w-[2.5px] h-4 mt-2 bg-white rounded-full"
                />
              </div>
              <p className=" uppercase font-archivo text-white hidden md:block md:text-lg font-normal">
                Read Blogs
              </p>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogHero;
