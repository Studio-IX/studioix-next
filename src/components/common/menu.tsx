import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

import MenuLink from "./menu-link";
import Image from "next/image";
import Link from "next/link";
import { menuSlide } from "@/anim/anim";
import Curve from "./curve";
import AnimatedLink from "./animated-link";

const SideMenu = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Agency",
      href: "/agency",
    },
    {
      title: "Reviews",
      href: "/reviews",
    },
    {
      title: "Blog",
      href: "/blogs",
    },
  ];

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
      <div className="flex flex-row w-full h-full justify-between px-5 md:px-20 pt-8 md:pt-28 pb-10 md:pb-28 items-end">
        <div className="flex flex-col justify-between z-50">
          <div className="flex flex-row items-end gap-20 fit">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start gap-4 mb-20">
                <div className=" relative w-[450px] h-[280px] group rounded-xl border border-white/20 overflow-hidden">
                  <Image
                    fill
                    quality={100}
                    src="/projects/5.png"
                    className=" object-cover object-top rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
                    alt="Featured Project"
                  />
                </div>
                <div className="flex items-center gap-2.5">
                  <ArrowUp />
                  <p className="text-white text-base uppercase font-archivo font-normal">
                    Previous Project - Chatly
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white/70 text-base font-archivo font-normal">
                  Socials
                </p>
                <div className="flex flex-col items-start mt-3">
                  <AnimatedLink link="" text="Instagram" />
                  <AnimatedLink link="" text="Twitter/X" />
                  <AnimatedLink link="" text="Behance" />
                  <AnimatedLink link="" text="Calendly" />
                </div>
              </div>

              <div className="flex flex-col mt-20">
                <p className="text-white/70 text-base font-archivo font-normal">
                  Email
                </p>
                <div className="flex flex-col items-start mt-3">
                  <AnimatedLink link="" text="hey@studioix.agency" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-white/70 text-base font-archivo font-normal">
                Company Deck
              </p>
              <div className="flex flex-col items-start mt-3">
                <AnimatedLink link="" text="Download PDF" />
              </div>
            </div>
          </div>
        </div>
        <div className="z-50">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="mr-20"
          >
            {navItems.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></MenuLink>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#455CE9,#000)]"></div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default SideMenu;