"use client";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactDrawer } from "./contact-drawer";
import EncryptText from "./encrypt-text";
import SideMenu from "./menu";
import Wrapper from "../wrapper/wrapper";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (isActive) {
        setVisible(true);
      } else {
        if (scrollYProgress.get() < 0.055) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex fixed top-0 2xl:top-0 w-full px-3 xl:px-10 2xl:px-20 z-[2147483005]",
            scrolled ? "bg-black" : "bg-transparent backdrop-blur-md",
            "py-2 md:py-2.5"
          )}
        >
          <Wrapper className="w-full flex flex-row justify-between items-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
            <Link href="/">
              <div className=" relative w-[42px] h-[42px] hover:scale-110 ease-in-out transition-all duration-200  md:hidden">
                <Image
                  quality={100}
                  className=" object-contain"
                  fill
                  src="/logo/icon.png"
                  alt="Studio IX logo"
                />
              </div>
              <div className=" relative w-[152px] h-[42px] hover:scale-110 ease-in-out transition-all duration-200 hidden md:block">
                <Image
                  quality={100}
                  className=" object-contain"
                  fill
                  src="/logo/logo_white.svg"
                  alt="Studio IX logo"
                />
              </div>
            </Link>

            <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
              <div className=" inline-flex items-center gap-8">
                {navItems.map((item, index) => {
                  return (
                    <Link key={index} href={item.href}>
                      <EncryptText targetText={item.title} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <aside className="flex items-center gap-2">
              <ContactDrawer />

              <div className=" md:hidden">
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className="relative group inline-flex h-12 aspect-square overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 ease-in-out transition-all duration-200"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
                    {isActive ? (
                      <X className=" group-hover:rotate-90 transition-transform ease-in-out duration-300" />
                    ) : (
                      <Menu className=" group-hover:rotate-90 transition-transform ease-in-out duration-500" />
                    )}
                  </span>
                </div>
              </div>
            </aside>
          </Wrapper>
        </motion.div>
      </AnimatePresence>
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          {isActive && <SideMenu />}
        </AnimatePresence>
      </div>
    </div>
  );
};
