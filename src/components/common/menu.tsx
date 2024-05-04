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
      title: "Pricing",
      href: "/pricing",
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
      <div className="flex flex-col-reverse md:flex-row w-full h-full justify-between px-5 md:px-20 pt-8 md:pt-28 pb-10 md:pb-28 md:items-end">
        <div className="flex flex-col justify-between z-50">
          <div className="flex flex-row items-end gap-4 fit">
            <div className="flex flex-col items-start">
              <div className="hidden md:block">
                <div className="flex flex-col items-start gap-4 mb-20">
                  <video
                    autoPlay
                    loop
                    className="relative w-[450px] h-[280px] object-cover rounded-xl border border-white/20 hover:scale-105 ease-in-out duration-300"
                  >
                    <source src="/videos/menu-video.mp4" />
                  </video>
                  <div className="flex items-center gap-2.5">
                    <ArrowUp />
                    <p className="text-white text-base uppercase font-archivo font-normal">
                      Previous Projects - Reel
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
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
              </div>

              <div className="w-full md:hidden">
                <div className="w-full flex items-end justify-between gap-14">
                  <div className="flex flex-col w-fit">
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

                  <div className="flex flex-col items-start gap-4 w-full">
                    <video
                      autoPlay
                      loop
                      className="relative w-[450px] h-[180px] object-cover rounded-xl border border-white/20 hover:scale-105 ease-in-out duration-300"
                    >
                      <source src="/videos/menu-video.mp4" />
                    </video>
                    <div className="flex items-center gap-2.5">
                      <ArrowUp />
                      <p className="text-white text-base uppercase font-archivo font-normal">
                        Previous Projects - Reel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="flex flex-col mt-20">
                  <p className="text-white/70 text-base font-archivo font-normal">
                    Email
                  </p>
                  <div className="flex flex-col items-start mt-3">
                    <AnimatedLink link="" text="hey@studioix.agency" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
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
        </div>
        <div className="z-50 mt-10 md:mt-0">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="ml-0 md:ml-0 md:mr-40"
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
