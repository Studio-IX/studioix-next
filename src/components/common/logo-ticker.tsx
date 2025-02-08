"use client";

import { companyLogo } from "@/constants/clients";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Wrapper from "../wrapper/wrapper";
const LogoTicker = () => {
  return (
    <section>
      <Wrapper className="w-full flex flex-col items-start lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
        <h2 className=" text-white font-archivo w-full text-center md:text-start  text-base md:text-lg uppercase opacity-80 md:opacity-100">
          Launchpad for Innovation
        </h2>

        <div className="flex items-center mt-4">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <Marquee direction="right" autoFill>
              <div className=" hidden md:block">
                <motion.div className=" flex flex-none">
                  {companyLogo.map((logo, idx) => (
                    <Image
                      width={220}
                      height={10}
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={`/companies/${logo}`}
                      alt="Company logo"
                      className={`object-contain filter brightness-0 invert ${
                        idx === 0
                          ? "scale-[0.55] md:scale-[0.75] md:mr-6"
                          : idx === 1
                          ? "scale-[0.65] md:scale-[0.75] md:mr-6"
                          : idx === 2
                          ? "scale-[0.85] md:scale-[0.85] md:mr-6"
                          : idx === 3
                          ? "scale-[0.45] md:scale-[0.55]"
                          : idx === 4
                          ? "scale-[0.45] md:scale-[0.60] md:mr-6"
                          : idx === 5
                          ? "scale-[0.80] md:scale-[0.95] md:mr-6"
                          : "scale-75 md:scale-75"
                      }`}
                      key={idx}
                    />
                  ))}
                </motion.div>
              </div>
              <div className="  md:hidden">
                <motion.div className=" flex flex-none">
                  {companyLogo.map((logo, idx) => (
                    <Image
                      width={180}
                      height={10}
                      quality={100}
                      src={`/companies/${logo}`}
                      alt="Company logo"
                      className={`object-contain filter brightness-0 invert ${
                        idx === 0
                          ? "scale-[0.85] mr-6"
                          : idx === 1
                          ? "scale-[0.85] mr-8"
                          : idx === 2
                          ? "scale-105 mr-6"
                          : idx === 3
                          ? "scale-[0.55]"
                          : idx === 4
                          ? "scale-[0.65] mr-6"
                          : idx === 5
                          ? "scale-105 mr-6"
                          : "scale-75"
                      }`}
                      key={idx}
                    />
                  ))}
                </motion.div>
              </div>
            </Marquee>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default LogoTicker;
