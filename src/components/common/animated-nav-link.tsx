"use client";

import { motion } from "framer-motion";

const AnimatedNavLink = ({
  text,
  link,
  isActive,
}: {
  text: string;
  link: string;
  isActive: boolean;
}) => {
  const menuLinkVariants = {
    open: {
      y: 0,

      opacity: 1,
    },
    closed: {
      y: -20,

      opacity: 0,
    },
  };

  return (
    <div className=" relative">
      {isActive ? (
        <>
          <motion.div className="absolute top-[20%] -left-48 h-[1px] hidden md:block">
            <svg
              width="140"
              height="71"
              viewBox="0 0 140 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M3.35938 32.4108C11.2594 23.7735 18.7071 14.8049 29.2835 9.44004C32.5054 7.80577 43.1738 1.69719 46.9217 3.77938C57.141 9.45683 41.4565 36.366 39.1281 42.7476C33.1411 59.1563 35.0682 71.9703 55.946 66.8669C78.4668 61.3618 105.803 48.1857 124.284 33.9695C129.173 30.2086 142.277 25.0273 130.027 25.0273C125.628 25.0273 107.113 24.6345 121.413 26.4219C122.687 26.5812 137.082 26.1627 137.082 26.8321C137.082 28.4526 130.598 34.5767 129.616 36.7588C127.914 40.5408 125.925 42.9122 125.925 47.1777"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{
                  strokeDasharray: 500,
                  strokeDashoffset: 500,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </svg>
          </motion.div>

          <motion.div className="absolute bottom-[10%] -right-28 rotate-180 h-[1px] md:hidden">
            <svg
              width="100"
              height="40"
              viewBox="0 0 140 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M3.35938 32.4108C11.2594 23.7735 18.7071 14.8049 29.2835 9.44004C32.5054 7.80577 43.1738 1.69719 46.9217 3.77938C57.141 9.45683 41.4565 36.366 39.1281 42.7476C33.1411 59.1563 35.0682 71.9703 55.946 66.8669C78.4668 61.3618 105.803 48.1857 124.284 33.9695C129.173 30.2086 142.277 25.0273 130.027 25.0273C125.628 25.0273 107.113 24.6345 121.413 26.4219C122.687 26.5812 137.082 26.1627 137.082 26.8321C137.082 28.4526 130.598 34.5767 129.616 36.7588C127.914 40.5408 125.925 42.9122 125.925 47.1777"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{
                  strokeDasharray: 500,
                  strokeDashoffset: 500,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 1,
                }}
              />
            </svg>
          </motion.div>
        </>
      ) : null}
      <>
        <div className="hidden md:block">
          <motion.a
            variants={menuLinkVariants}
            rel="nofollow"
            href={link}
            className="h-[80px] overflow-hidden flex items-start gap-2 uppercase"
          >
            <motion.div whileHover={{ y: -80 }}>
              <span
                className={`${
                  isActive ? " text-white" : " text-white/70"
                } font-semibold flex items-center font-cabinetGrotesk uppercase text-8xl h-[80px]`}
              >
                {text}
              </span>

              <span className="text-white font-semibold flex items-center font-cabinetGrotesk uppercase text-8xl h-[80px]">
                {text}
              </span>
            </motion.div>
          </motion.a>
        </div>
        <div className="md:hidden">
          <motion.a
            variants={menuLinkVariants}
            rel="nofollow"
            href={link}
            className="h-[40px] overflow-hidden flex items-start gap-2 uppercase"
          >
            <motion.div whileHover={{ y: -40 }}>
              <span
                className={`${
                  isActive ? " text-white" : " text-white/70"
                } font-semibold flex items-center font-cabinetGrotesk uppercase text-5xl md:text-8xl h-[40px]`}
              >
                {text}
              </span>

              <span className="text-white font-semibold flex items-center font-cabinetGrotesk uppercase text-5xl md:text-8xl h-[40px]">
                {text}
              </span>
            </motion.div>
          </motion.a>
        </div>
      </>
    </div>
  );
};

export default AnimatedNavLink;
