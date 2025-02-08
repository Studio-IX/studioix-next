import { scale, slide } from "@/anim/anim";
import { motion } from "framer-motion";
import AnimatedNavLink from "./animated-nav-link";

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const MenuLink = ({
  data,
  isActive,
  setSelectedIndicator,
  setIsActive,
  setMobileNav,
}: MenuLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className=" flex flex-col gap-10 items-start"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <AnimatedNavLink
        setIsActive={setIsActive}
        setMobileNav={setMobileNav} 
        isActive={isActive}
        link={href}
        text={title}
      />
    </motion.div>
  );
};

export default MenuLink;
