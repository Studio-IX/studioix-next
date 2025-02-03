"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { companyLogo } from "@/constants/clients";
import Wrapper from "../wrapper/wrapper";
const LogoTicker = () => {
  return (
    <section>
      <Wrapper className="w-full flex flex-col items-start lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
        <h2 className=" text-white font-archivo  text-base md:text-lg uppercase">
          Launchpad for Innovation
        </h2>

        <div className="flex items-center gap-5 mt-4">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className=" flex flex-none gap-0 md:gap-6 -translate-x-1/2"
            >
              {companyLogo.map((logo, idx) => (
                <Image
                  width={220}
                  height={10}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/companies/${logo}`}
                  alt="Company logo"
                  className="object-contain scale-75 md:scale-75"
                  key={idx}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default LogoTicker;
