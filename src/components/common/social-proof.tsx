"use client";

import { RefreshCcw, Rocket, TestTube } from "lucide-react";
import Wrapper from "../wrapper/wrapper";
import Stat from "./stats";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal";

const SocialProof = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  return (
    <section className=" pt-12 pb-12 md:pt-0 md:pb-12">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12 py-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            Build Fast. <br className=" hidden md:block" />
            Validate Smarter.
          </h2>
          <p className="font-archivo md:max-w-[60ch] text-lg md:text-xl text-white/80 text-center w-full">
            <span className="hidden md:inline">
              Speed is crucial for startups. We help you build products that
              solve real problems through rapid iteration and real-world
              testing. Launch your first version in just six weeks and validate
              your idea efficiently.
            </span>
            <span className="md:hidden">
              We help you build and validate MVPs in just six weeks through
              rapid iteration and real-world testing.
            </span>
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]"
          >
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <Rocket />
            </div>
            <h4 className="z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Build Fast
            </h4>
            <p className="z-10 font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              We deliver an impressive MVP in just 6 weeks, so you can launch
              quickly and stay ahead.
            </p>
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </div>
          <div
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]"
          >
            <AnimatePresence>
              {hovered2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>{" "}
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <TestTube />
            </div>
            <h4 className="z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Validate Idea
            </h4>
            <p className="z-10 font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              Validate your idea with real customers—does it truly solve their
              problem(s) and pain point(s)?
            </p>
          </div>
          <div
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
            className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]"
          >
            <AnimatePresence>
              {hovered3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full absolute inset-0"
                >
                  <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                  />
                </motion.div>
              )}
            </AnimatePresence>{" "}
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <RefreshCcw />
            </div>
            <h4 className=" z-10 mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Iterate & Improve
            </h4>
            <p className=" z-10  font-archivo font-normal text-lg text-white/70 group-hover:text-white/100">
              Use real user feedback to refine, optimize, and enhance your
              product for long-term success.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className=" h-12 md:h-[5rem]" />
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            Trusted by founders
          </h2>
          <p className=" font-archivo text-lg md:text-xl text-white/80 text-center w-full">
            Here&apos;s how much impact we&apos;ve made
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center w-fit md:w-full">
          <Stat num={14} subheading="MVPs Completed" />

          <Stat num={19} subheading="Happy Clients" />

          <Stat num={10} subheading="Startups Funded" />
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialProof;
