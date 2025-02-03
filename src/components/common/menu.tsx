import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { menuSlide } from "@/anim/anim";
import { navItems } from "@/constants/data";
import Curve from "./curve";
import MenuLink from "./menu-link";

interface SideMenuProps {
  setIsActive: (value: boolean) => void;
}

const SideMenu = ({ setIsActive }: SideMenuProps) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="flex flex-col w-full h-full justify-between px-5 pt-8  pb-10  ">
        <div className="z-[2147483000] mt-20">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="ml-0"
          >
            {navItems.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  setIsActive={setIsActive}
                ></MenuLink>
              );
            })}
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default SideMenu;
