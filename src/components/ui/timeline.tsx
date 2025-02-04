"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  description: string;
  step: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen w-full md:px-10">
      <div className=" w-full py-20 px-4 md:px-8 lg:px-10">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl tracking-tighter lg:text-7xl text-white text-center mt-6">
          From Vision to execution
        </h2>
        <p className=" font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
          We turn bold ideas into scalable solutions through a streamlined,
          iterative approach designed for maximum impact.
        </p>
      </div>

      <div ref={ref} className="relative w-full max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className=" min-h-[40vh] md:min-h-[50vh] flex flex-col justify-start w-full"
          >
            <div className="sticky top-28 flex flex-col items-center w-full z-50">
              <div className="h-10 absolute left-3 md:left-1/2 md:-translate-x-5 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-white p-2" />
              </div>
              <div
                className={`flex flex-col w-full relative pl-20 pr-3 md:pr-0 md:pl-0 pb-8 md:pb-0  ${
                  index % 2 === 0 ? "md:items-start" : "md:items-end"
                }`}
              >
                <div className="md:max-w-lg">
                  <div className=" text-primary bg-primary/15 rounded-xl px-4 py-2 w-fit flex items-center justify-center text-lg font-archivo">
                    {item.step}
                  </div>
                  <h3 className=" mt-4 text-3xl md:text-5xl font-semibold font-cabinetGrotesk fon text-white ">
                    {item.title}
                  </h3>

                  <h4 className=" text-white text-lg md:text-xl font-archivo mt-2 opacity-80">
                    {item.description}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
