"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { slideUp } from "@/anim/anim";
import Image from "next/image";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (counter < 100) {
      const timeout = setTimeout(() => {
        setCounter(counter + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {}, 1000);
    }
  }, [counter]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="introduction"
    >
      {dimension.width > 0 && (
        <>
          <Wrapper className="flex flex-col h-dvh justify-center items-center">
            <div></div>
            <div className="w-full flex flex-col items-center z-[50]">
              <div className="relative w-[152px] h-[42px] scale-125">
                <Image
                  quality={100}
                  className=" object-contain"
                  fill
                  src="/logo/logo_white.svg"
                  alt="Studio IX logo"
                />
              </div>
            </div>
          </Wrapper>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;
