"use client";

import { navItems } from "@/constants/data";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { FaDribbble, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";
import AnimatedLink from "./animated-link";
import { FooterText } from "./footer-text";

const Footer = () => {
  return (
    <div className="w-full h-fit md:h-screen relative md:max-h-screen overflow-hidden">
      <div className="flex flex-col items-center w-full md:h-screen md:justify-between pt-8 md:pt-12 pb-8 md:pb-10">
        <Wrapper className="w-full flex flex-col lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
          <div className="z-[2147483] flex flex-col items-start gap-0 w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-start">
              <div className="w-full ">
                <div className="w-full flex flex-col">
                  <div className=" relative w-[152px] h-[42px] hover:scale-110 ease-in-out transition-all duration-200 ">
                    <Image
                      quality={100}
                      className=" object-contain"
                      fill
                      src="/logo/logo_white.svg"
                      alt="Studio IX logo"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-8">
                    <h3 className=" font-cabinetGrotesk uppercase text-white font-semibold text-5xl md:text-7xl tracking-tighter  leading-[0.85]">
                      Get Your <br className=" hidden md:block" /> MVP Off the
                      <br className=" hidden md:block" /> Ground
                    </h3>
                  </div>

                  <div className="relative inline-flex w-fit h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-4">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
                      Book A Call Now
                    </span>
                  </div>
                </div>
              </div>

              <div className=" w-full mt-6 md:mt-0">
                <div className="flex flex-wrap md:flex-row gap-y-6 md:gap-y-0 items-start w-full justify-between">
                  <div className=" w-fit md:w-full">
                    <h3 className=" font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl">
                      Navigation
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      {navItems.map((navItem, index) => {
                        return (
                          <AnimatedLink
                            key={index}
                            link={navItem.href}
                            text={navItem.title}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className=" w-fit md:w-full">
                    <h3 className=" font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl">
                      Legal Info
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Terms & Conditions" />
                      <AnimatedLink link="" text="Privacy Policy" />
                      <AnimatedLink link="" text="Cookie Policy" />
                    </div>
                  </div>

                  <div className=" w-fit md:w-full">
                    <h3 className=" font-cabinetGrotesk uppercase text-white font-medium mt-3 text-xl">
                      Resources
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Download Company Deck" />
                      <AnimatedLink link="" text="Free MVP Guide" />
                      <div className=" flex items-center gap-4 mt-4">
                        <Button size="icon">
                          <FaDribbble className=" scale-150" />
                        </Button>
                        <Button size="icon">
                          <Instagram className=" scale-100" />
                        </Button>
                        <Button size="icon">
                          <FaGithub className=" scale-150" />
                        </Button>
                        <Button size="icon">
                          <FaXTwitter className=" scale-150" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>

        {/* Middle Part */}
        <div className="z-[50] w-full flex items-center justify-center -mt-0 md:-mt-40">
          <video
            autoPlay
            muted
            loop
            className="md:w-[55%] scale-150 md:scale-110 rounded-full object-cover"
          >
            <source src="/videos/footer.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Bottom Part */}
        <div className="flex flex-col items-start w-full h-fit mt-20 md:mt-0 z-[50]">
          <FooterText />
        </div>

        <div className="mb-20"></div>
        <div className="z-[2147483002] w-full px-4 md:px-32">
          <Separator className="  md:-mt-20" />
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 gap-2 md:gap-0">
            <h4 className=" font-archivo text-white text-base hidden md:block ">
              © Studio IX 2025, All rights reserved.
            </h4>
            <h4 className=" font-archivo text-white text-lg md:hidden">
              © Studio IX 2025
            </h4>
            <h4 className=" font-archivo text-white text-base hidden md:block ">
              1:28 AM GMT
            </h4>
          </div>
        </div>
      </div>
      <div className=" absolute inset-0 z-[1] ">
        <div className=" h-full w-full relative">
          <Image fill src="/images/stars.png" alt="Stars" />
        </div>
      </div>
      <div className="absolute inset-0 z-[-1] -mt-80 rotate-180 w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#455CE9_100%)]"></div>
    </div>
  );
};

export default Footer;
