"use client";

import { ArrowRight } from "lucide-react";
import Wrapper from "../wrapper/wrapper";
import { useEffect, useRef } from "react";

interface MouseEvent {
  movementY: number;
  clientX: number;
}

const ProjectHero = () => {
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
  });

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
    <div className="w-full relative">
      <Wrapper className="mt-[8rem] w-full flex items-end">
        <h1 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-white text-start md:mt-0">
          <span className="text-[#455CE9]">Midas</span> — All in one fintech app
          that solves all your money & card needs
        </h1>
      </Wrapper>

      <div className="absolute top-80 z-[2147483002] w-full flex flex-col">
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
        <svg className="absolute w-full h-[500px] top-[-250px]">
          <path
            ref={path}
            className="stroke-current text-white/15 stroke-[1px] fill-none"
          ></path>
        </svg>
      </div>

      <Wrapper className="">
        <div className="w-full mt-20 flex items-start justify-between">
          <div className="w-[60%]">
            <div className="z-[2147483002] relative inline-flex h-20 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black pl-8 pr-3 text-xl font-archivo font-medium text-white backdrop-blur-3xl">
                Live Website
                <div className=" aspect-square h-14 w-14 rounded-full bg-[#455CE9] ml-5 flex items-center justify-center">
                  <ArrowRight className=" group-hover:-rotate-45 ease-in-out transition-all duration-500" />
                </div>
              </span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-2xl font-archivo text-white/80 font-normal">
              Midas is a mobile application designed to provide users in Ghana
              with a seamless and convenient way to make online purchases and
              pay for subscriptions and services using virtual debit cards
              powered by only mobile money
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProjectHero;
