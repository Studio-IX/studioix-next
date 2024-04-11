"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideMenu from "./menu";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
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
    <div>
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
            "flex fixed top-0 2xl:top-0 w-full mx-auto px-3 xl:px-10 2xl:px-20 z-[100] bg-gradient-to-b from-black/0 to-black/0 py-3.5 backdrop-blur-md"
          )}
        >
          <div className="w-full flex flex-row justify-between items-center">
            <Link href="/">
              <div className=" relative w-[152px] h-[42px] hover:scale-110 ease-in-out transition-all duration-200">
                <Image
                  quality={100}
                  className=" object-contain"
                  fill
                  src="/logo/logo_white.svg"
                  alt="Studio IX logo"
                />
              </div>
            </Link>

            <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <p className=" font-archivo text-base text-white uppercase">
                Studio IX - modern digital agency
              </p>
            </div>

            <aside className="flex items-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
                  Start A Project{" "}
                  <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                </span>
              </Link>

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
            </aside>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">{isActive && <SideMenu />}</AnimatePresence>
    </div>
  );
};
