"use client";

import React, { useEffect, useRef } from "react";

export const FooterText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-fit w-full items-center overflow-hidden"
      ref={containerRef}
    >
      <span
        className="absolute font-bold bottom-28 left-0 mx-auto whitespace-nowrap text-center uppercase text-white font-cabinetGrotesk z-[50]"
        ref={textRef}
      >
        <span className=" font-normal text-white/70">S:// </span>STUDIOIX
        .AGENCY
      </span>
      <div className=" absolute z-50 bottom-36 left-[13.5vw]">
        <svg
          width="900"
          height="228"
          viewBox="0 0 849 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.67578"
            y="5.91016"
            width="838.761"
            height="217.776"
            stroke="#455CE9"
            stroke-width="2"
          />
          <rect
            x="1.05469"
            y="219.074"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#455CE9"
          />
          <rect
            x="1.05469"
            y="1.29688"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#455CE9"
          />
          <rect
            x="838.812"
            y="219.074"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#455CE9"
          />
          <rect
            x="838.812"
            y="1.29688"
            width="9.24169"
            height="9.222"
            fill="white"
            stroke="#455CE9"
          />
        </svg>
      </div>
    </div>
  );
};
