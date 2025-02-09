/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { ContactDrawer } from "./contact-drawer";
import EncryptText from "./encrypt-text";
import SideMenu from "./menu";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

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
            "flex fixed top-0 2xl:top-0 w-full z-[2147483000]",
            scrolled
              ? " bg-black/90 backdrop-blur-md"
              : "bg-black/90 backdrop-blur-md",
            "py-3 md:py-2.5"
          )}
        >
          <Wrapper className="w-full flex flex-row justify-between items-center md:px-0 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
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

            <aside className="flex items-center gap-4">
              <ContactDrawer />

              <div className=" md:hidden">
                <div>
                  <motion.button
                    initial="hide"
                    animate={mobileNav ? "show" : "hide"}
                    onClick={() => {
                      toggleMobileNav();
                      setIsActive(!isActive);
                    }}
                    className="flex flex-col space-y-1.5 relative z-[2147483000]"
                    aria-label={mobileNav ? "Close menu" : "Open menu"}
                  >
                    <motion.span
                      variants={{
                        hide: {
                          rotate: 0,
                        },
                        show: {
                          rotate: 45,
                          y: 7.5,
                        },
                      }}
                      className="w-6 bg-white rounded-full h-[1.5px] block"
                    ></motion.span>
                    <motion.span
                      variants={{
                        hide: {
                          opacity: 1,
                        },
                        show: {
                          opacity: 0,
                        },
                      }}
                      className="w-6 bg-white rounded-full h-[1.5px] block"
                    ></motion.span>
                    <motion.span
                      variants={{
                        hide: {
                          rotate: 0,
                        },
                        show: {
                          rotate: -45,
                          y: -7.5,
                        },
                      }}
                      className="w-6 bg-white rounded-full h-[1.5px] block"
                    ></motion.span>
                  </motion.button>
                </div>
              </div>
            </aside>
          </Wrapper>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isActive && (
          <SideMenu setIsActive={setIsActive} setMobileNav={setMobileNav} />
        )}
      </AnimatePresence>
    </div>
  );
};
