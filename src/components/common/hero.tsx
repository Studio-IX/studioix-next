"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StarSvg from "./star";

import { clients } from "@/constants/clients";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./infinite-moving-cards";
const Hero = () => {
  return (
    <div className="w-full h-[100dvh] md:h-screen relative">
      <div className="flex flex-col md:justify-between h-full pb-12 items-center w-full px-3 md:px-0 md:pt-32">
        <div>
          <div className=" flex flex-col items-center md:items-start mt-[7rem] md:mt-8 gap-1">
            <div className=" inline-flex items-center justify-center w-full gap-4 py-4">
              <div className=" h-3 md:h-3.5 animate-pulse aspect-square rounded-full bg-green-600" />
              <h4 className=" text-white text-lg md:text-xl font-archivo">
                <span className=" opacity-80">Limited Availability</span> - Only
                2 Spots left
              </h4>
            </div>
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 flex gap-6 ">
              Build Your MVP in just
            </h2>

            <div className="flex items-center gap-10">
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl lg:text-8xl text-white text-center md:mt-0 flex gap-4 md:gap-6">
                six weeks
              </h2>
              <p className=" font-archivo text-base md:text-xl text-white/80 text-start max-w-[56ch] uppercase hidden md:block">
                We craft MVPs that transform ideas into scalable, investor-ready
                products. Partner with us to bring your vision to life with
                speed, precision, and impact.
              </p>
            </div>
          </div>
          <div className=" w-full flex items-center justify-center px-3 md:px-0">
            <div className=" w-fit md:max-w-4xl overflow-hidden md:px-0 rounded-full bg-[#455CE9] py-3 md:py-5 mt-1 md:mt-3">
              <Marquee speed={100} className="w-fit">
                <h2 className="uppercase font-cabinetGrotesk font-bold text-4xl lg:text-8xl text-white text-center md:mt-0 tracking-tighter">
                  Within your budget
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
                <h2 className="uppercase font-cabinetGrotesk font-bold text-4xl lg:text-8xl text-white text-center md:mt-0 tracking-tighter">
                  With no compromise
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
              </Marquee>
            </div>
          </div>
        </div>

        <div className="md:hidden z-[2147483003] w-full mt-4">
          <p className=" font-archivo text-lg text-white/80 text-center w-full uppercase">
            We design exceptional brands, products, web apps, mobile apps,
            websites for startups.
          </p>
        </div>

        <div className="flex items-center gap-4 z-[2147483003] mt-12">
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
          <p className=" uppercase font-archivo text-white text-lg font-normal">
            Learn More
          </p>
        </div>
        <div className="w-full max-w-full px-3 md:px-40 flex flex-col mt-20">
          <h3 className=" text-white text-lg md:text-xl font-archivo">
            Launchpad for Innovation
          </h3>
          <InfiniteMovingCards items={clients} direction="right" speed="slow" />
        </div>
      </div>

      <div className=" absolute inset-0 z-[-1] ">
        <div className=" h-full w-full relative">
          <Image fill src="/images/stars.png" alt="Stars" />
        </div>
      </div>
      <div className=" absolute inset-0 z-[-1] ">
        <div className=" h-full w-full relative">
          <Image fill src="/images/bg-gradient.png" alt="Gradient" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
