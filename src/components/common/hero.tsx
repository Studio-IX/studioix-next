"use client";
import { useRef, useEffect } from "react";
import AnimatedLink from "./animated-link";
import Image from "next/image";
import ArrowSvg from "./arrow-svg";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

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

  return (
    <div className="w-full h-screen">
      <div className="px-20 w-full flex flex-col mt-40">
        <div className="h-44 w-44 aspect-square relative group cursor-pointer">
          <Image
            className=" animate-[spin_4s_linear_infinite]"
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
            <p className=" font-archivo text-base text-white text-center max-w-prose uppercase">
              We&apos;re focused on delivering original digital products to tech
              startups, global corporations and all companies in between.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className=" font-archivo text-base text-white uppercase">
              GMT 14:47:08
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
