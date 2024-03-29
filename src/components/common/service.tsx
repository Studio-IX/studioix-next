import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import PlusServices from "./plus";
import Marquee from "react-fast-marquee";
import Asterisk from "./asterisk";

const Service = ({
  href,
  index,
  title,
  number,
  setModal,
  sub1,
  sub2,
  sub3,
  description,
}: {
  href: string;
  index: number;
  title: string;
  number: string;
  sub1: string;
  sub2: string;
  sub3: string;
  description: string;
  setModal: (value: any) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
        setIsHovered(false);
      }}
      className="project hover:bg-[#4686d9] transition-all ease-in w-full"
    >
      <Link className="flex w-full" href={href}>
        <div className="w-full flex flex-col">
          <div className="flex flex-row w-full justify-between items-start px-28">
            <div className="flex flex-row space-x-5 md:space-x-20">
              <h1 className="text-white text-[14px] md:text-[120px] font-cabinetGrotesk font-semibold">
                {number}
              </h1>
              <div className="flex flex-col items-start">
                <h2 className="font-cabinetGrotesk font-semibold">{title}</h2>
              </div>
            </div>
            <div id="arrow" className="mt-4">
              <h3 className="w-[600px] text-start text-[20px] text-xl font-archivo font-medium">
                {description}
              </h3>
            </div>
          </div>

          <div className="hidden md:block px-60 -mt-8">
            <div className="flex flex-row items-center gap-10 w-full">
              <div className="flex flex-row items-center gap-4" id="sub">
                <PlusServices />
                <p className=" font-archivo font-normal">{sub1}</p>
              </div>
              <div className="flex flex-row items-center gap-4" id="sub">
                <PlusServices />
                <p className=" font-archivo font-normal">{sub2}</p>
              </div>
              <div className="flex flex-row items-center gap-4" id="sub">
                <PlusServices />
                <p className=" font-archivo font-normal">{sub3}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            {isHovered && (
              <Marquee autoFill>
                <div className="flex flex-row">
                  <Asterisk />
                  <p className="font-archivo font-normal mx-6">
                    Click to start your project
                  </p>
                </div>
              </Marquee>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
