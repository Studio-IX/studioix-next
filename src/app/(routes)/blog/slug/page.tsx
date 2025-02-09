"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Wrapper from "@/components/wrapper/wrapper";
import { ScrollProgress } from "@/components/common/scroll-progress";
import Cta from "@/components/common/cta";

const BlogDetail = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
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
    <div>
      <ScrollProgress />

      <motion.section
        ref={sectionRef}
        style={{
          backgroundImage: 'url("/images/stars.png")',
          backgroundPositionY,
        }}
        className="w-full h-fit md:min-h-[50vh] relative pb-12 md:pb-32"
      >
        <div className=" w-full flex flex-col items-center pt-40 md:max-w-5xl mx-auto">
          <Link href="/blog">
            <div className="flex items-center w-full justify-center gap-4 mb-4 md:mb-2">
              <ArrowLeft className=" text-primary" />
              <p className=" text-primary font-archivo text-xl uppercase">
                Back to blog
              </p>
            </div>
          </Link>
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-2 tracking-tighter">
            Why Webflow is the best platform for businesses in 2025
          </h2>

          <div className=" w-full flex items-center gap-4 uppercase justify-center mt-4">
            <p className=" text-white font-archivo text-xl opacity-80">
              09 February 2025
            </p>
            <p className=" text-white font-archivo text-xl opacity-80 hidden md:block">
              Abiola Braimah
            </p>
            <p className=" text-white font-archivo text-xl opacity-80">
              14 mins
            </p>
          </div>

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
                Read
              </p>
            </div>
          </Link>
        </div>
        <Wrapper className="w-full mt-8 md:mt-12 flex flex-row justify-between items-center md:px-0 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
          <div className=" w-full h-[20rem] md:h-[44rem] relative rounded-2xl group overflow-clip">
            <Image
              className=" object-cover object-top group-hover:scale-110 transition-transform ease-in-out duration-500"
              fill
              src="/projects/stakenet/1.png"
              alt="Title"
            />
          </div>
        </Wrapper>
      </motion.section>

      <Cta/>
    </div>
  );
};

export default BlogDetail;
