"use client";

import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import gsap from "gsap";

interface SliderTextProps {
  text: string;
}

const SliderText: React.FC<SliderTextProps> = ({ text }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const xPercent = useRef(0);
  const direction = useRef(-1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.2,
        start: 0,
        end: "bottom bottom ",
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  });

  const animate = () => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    requestAnimationFrame(animate);
    xPercent.current += 0.1 * direction.current;
  };

  return (
    <div className="sliderContainer font-cabinetGrotesk font-bold">
      <div ref={slider} className="slider">
        <p ref={firstText}>{text}</p>
        <p ref={secondText}>{text}</p>
      </div>
    </div>
  );
};

export default SliderText;
