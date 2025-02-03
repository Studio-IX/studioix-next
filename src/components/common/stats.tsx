"use client";

import { animate, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  num: number;

  decimals?: number;

  subheading: string;
}

const Stat = ({ num, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,

      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  const formattedSubheading = subheading.split(" ").map((word, index, arr) => (
    <span key={index}>
      {word}
      {index < arr.length - 1 && <br />}
    </span>
  ));

  return (
    <div className="flex w-fit md:w-72 md:flex-col items-center gap-4 md:gap-0 py-8 relative">
      <h4 className="mb-2 text-center text-white text-6xl lg:text-8xl font-cabinetGrotesk font-semibold">
        <span ref={ref}></span>
      </h4>
      <TrendingUp size={32} className=" text-green-600 md:hidden -mt-12" />

      <p className=" text-start md:text-center text-white text-lg opacity-80 font-archivo ml-4 md:ml-0">
        {formattedSubheading}
      </p>
      <TrendingUp
        size={32}
        className=" absolute right-12 text-green-600 hidden md:block"
      />
    </div>
  );
};

export default Stat;
