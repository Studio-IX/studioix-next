"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  link: string;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const AnimatedNavLink = ({
  text,
  link,
  isActive,
  setIsActive,
  setMobileNav,
}: Props) => {
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
      <motion.a
        variants={menuLinkVariants}
        rel="nofollow"
        href={link}
        onClick={() => {
          setIsActive(false);
          setMobileNav(false);
        }}
        className="h-[40px] overflow-hidden flex items-start gap-2 uppercase tracking-tighter"
      >
        <motion.div whileHover={{ y: -40 }}>
          <span
            className={`${
              isActive ? " text-primary" : " text-white"
            } font-semibold flex items-center font-cabinetGrotesk tracking-tighter uppercase text-5xl h-[40px]`}
          >
            {text}
          </span>

          <span className="text-white font-semibold flex items-center tracking-tighter font-cabinetGrotesk uppercase text-5xl  h-[40px]">
            {text}
          </span>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default AnimatedNavLink;
