import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

type MagneticProps = {
  children: ReactNode;
};

const Magnetic: React.FC<MagneticProps> = ({ children }: MagneticProps) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });

      magnetic.current.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
};

export default Magnetic;
