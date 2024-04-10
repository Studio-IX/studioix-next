import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Rounded from "./rounded-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const button = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,

        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },

        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <div ref={button} className="headerButtonContainer">
      <Rounded
        onClick={() => {
          handleScrollToTop();
        }}
        className="button text-white hover:text-black"
      >
        <ArrowUp className={`arrowUp z-10`} />
      </Rounded>
    </div>
  );
};

export default BackToTop;
