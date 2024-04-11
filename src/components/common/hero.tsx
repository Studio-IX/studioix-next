"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import AnimatedLink from "./animated-link";
import ArrowSvg from "./arrow-svg";
import StarSvg from "./star";
import { AnimatedTooltip } from "./animated-tooltip";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Hero = () => {
  // Define a reference to an SVGPathElement
  const path = useRef<SVGPathElement>(null);

  // Initialize progress, x, time, and reqId variables
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  // Use the useEffect hook to set the path on component mount
  useEffect(() => {
    setPath(progress);
  }, []);

  // Define a function to set the path of the SVG element
  const setPath = (progress: number) => {
    // Get the width of the window
    const width = window.innerWidth * 1;

    // Set the "d" attribute of the SVG path element using a quadratic Bézier curve
    path.current?.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  // Define a linear interpolation function
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  // Define a function to handle mouse enter events
  const manageMouseEnter = () => {
    // If there is an animation frame request, cancel it and reset the animation
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  // Define a function to handle mouse move events
  const manageMouseMove = (e: MouseEvent) => {
    // Get the movementY and clientX properties from the event object
    const { movementY, clientX } = e;

    // Get the bounding rectangle of the SVG path element
    const pathBound = path.current?.getBoundingClientRect();

    // If the bounding rectangle exists, update x and progress and set the path
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  // Define a function to handle mouse leave events
  const manageMouseLeave = () => {
    // Start animating out
    animateOut();
  };

  // Define a function to animate out
  const animateOut = () => {
    // Calculate newProgress using sine of time
    const newProgress = progress * Math.sin(time);

    // Update progress using linear interpolation towards zero
    progress = lerp(progress, 0, 0.025);

    // Increment time by 0.2
    time += 0.2;

    // Set the path using newProgress
    setPath(newProgress);

    // If progress is greater than a threshold, request another animation frame,
    // otherwise reset the animation.
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  // Define a function to reset the animation variables
  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setLocalTime(timeString);
    };

    const intervalId = setInterval(getCurrentTime, 60000);

    getCurrentTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-screen">
      <div className=" mt-32 flex flex-col items-center w-full">
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 text-base font-archivo font-medium text-white backdrop-blur-3xl">
            <div className=" aspect-square h-3 w-3 rounded-full bg-white mr-2 animate-pulse" />
            Limited Availability - Only 2 spots left
          </span>
        </div>
        <div className="flex flex-col items-start mt-8 gap-1">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-white text-center md:mt-0">
            Full-Service Digital
          </h2>

          <div className="flex items-center gap-10">
            <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-white text-center md:mt-0">
              Agency For
            </h2>
            <p className=" font-archivo text-base text-white/80 text-start max-w-[36ch] uppercase">
              We design exceptional brands, products, web apps, mobile apps,
              websites for startups.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className=" w-fit max-w-2xl overflow-hidden px-0 rounded-full bg-[#455CE9] py-5 mt-1">
            <Marquee speed={100} className="w-fit">
              <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-white text-center md:mt-0">
                SAAS Products
              </h2>
              <div className="mx-10">
                <StarSvg />
              </div>
              <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-white text-center md:mt-0">
                Software Solutions
              </h2>
              <div className="mx-10">
                <StarSvg />
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-12 w-full z-50">
          <AnimatedTooltip items={people} />
        </div>
        {/* <div className="w-fit mt-10">
          <PrimaryButton link="" text="Start My Journey" />
        </div> */}
      </div>
      <div className="absolute top-[50%] left-20 z-20">
        <div className="h-44 w-44 aspect-square relative group cursor-pointer opacity-50 hover:opacity-100 transition-opacity ease-in duration-300">
          <Image
            className=" animate-[spin_7s_linear_infinite]"
            fill
            src="/images/hero-cta.svg"
            alt="Cta"
          />

          <div className="absolute top-[3.8rem] left-14 transition-all ease-in-out duration-500 group-hover:-rotate-45">
            <ArrowSvg />
          </div>
        </div>
      </div>
      <div className="px-20 absolute bottom-20 w-full flex flex-col">
        <div
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseMove={(e) => {
            manageMouseMove(e);
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          className="relative z-10 h-10 w-full top-[-40px]"
        ></div>
        <svg className="absolute w-[92%] h-[500px] top-[-250px]">
          <path
            ref={path}
            className="stroke-current text-white/40 stroke-[1px] fill-none"
          ></path>
        </svg>
        <div className="w-full flex flex-row justify-between items-start z-20">
          <div className="flex flex-row items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-white" />
            <AnimatedLink link="" text="hey@studioix.agency" />
          </div>
          <div>
            <p className="font-archivo text-base text-white text-center max-w-prose uppercase">
              We&apos;re focused on delivering original digital products to tech
              startups, global corporations and all companies in between.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className=" font-archivo text-base text-white uppercase">
              {localTime}
            </p>
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#455CE9_100%)]"></div>
    </div>
  );
};

export default Hero;
