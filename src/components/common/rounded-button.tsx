"use client";

import React, { ReactNode, MouseEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./magnetic";

const Rounded = ({
  children,
  backgroundColor = "#ffab10",
  onClick,
  ...rest
}: React.HTMLProps<HTMLDivElement> & {
  children: ReactNode;
  backgroundColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    if (!timeline.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className="roundedButton"
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onClick={onClick}
        {...rest}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className="circle"></div>
      </div>
    </Magnetic>
  );
};

export default Rounded;
