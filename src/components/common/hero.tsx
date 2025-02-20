"use client";
import { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StarSvg from "./star";

import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef } from "react";
import LogoTicker from "./logo-ticker";
import Link from "next/link";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0096FA" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
      animate={{
        backgroundPositionX: "800px",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
      className="w-full h-fit min-h-screen md:h-screen relative"
    >
      <div className="flex flex-col gap-20 md:gap-0 justify-between h-full pb-12 items-center w-full px-3 md:px-0 md:pt-32">
        <div className=" w-full flex flex-col items-center">
          <div className=" flex flex-col items-center md:items-start mt-[7rem] md:mt-8 md:gap-1">
            <div className=" inline-flex items-center justify-center w-full gap-2 md:gap-4 py-4">
              <div className=" h-3 md:h-3.5 animate-pulse aspect-square rounded-full bg-green-600" />
              <h4 className=" text-white text-base md:text-xl font-archivo">
                <span className=" opacity-80">Limited Availability</span> - Only
                2 Spots left
              </h4>
            </div>
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 gap-6 md:hidden ">
              Build Your MVP in just six weeks
            </h2>
            <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 gap-6 hidden md:block ">
              Build Your MVP in just
            </h2>

            <div className="flex items-center gap-10">
              <h2 className="uppercase tracking-tighter font-cabinetGrotesk font-extrabold text-5xl lg:text-8xl text-white text-center md:mt-0 gap-4 md:gap-6 hidden md:block">
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
            <div className=" w-fit md:max-w-4xl overflow-hidden md:px-0 rounded-full bg-[#455CE9] py-3 md:py-4 mt-1 md:mt-3">
              <Marquee speed={40} className="w-fit">
                <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 tracking-tighter">
                  Within your budget
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
                <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-0 tracking-tighter">
                  With no compromise
                </h2>
                <div className="mx-4 md:mx-10">
                  <StarSvg />
                </div>
              </Marquee>
            </div>
          </div>
          <div className="md:hidden z-[214748300] w-full mt-4">
            <p className=" font-archivo text-base text-white/80 text-center w-full uppercase">
              We build MVPs that turn ideas into scalable products—fast,
              precise, and investor-ready.
            </p>
            <div
              data-cal-namespace="discovery-call"
              data-cal-link="studio-ix-gonodg/discovery-call"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className=" w-full flex flex-col gap-2 mt-6"
            >
              <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-2.5 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
                  Book A Call Now
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse h-full justify-between md:flex-col w-full items-center">
          <Link href="/#agency-reel">
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
                Learn More
              </p>
            </div>
          </Link>

          <LogoTicker />
        </div>
      </div>

      <div className=" absolute inset-0 z-[-1] ">
        <div className=" h-full w-full relative">
          <Image fill src="/images/bg-gradient.png" alt="Gradient" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
