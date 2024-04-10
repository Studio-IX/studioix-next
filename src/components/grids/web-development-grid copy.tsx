import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BentoGrid } from "../common/bento-grid";
import TickSquare from "../pricing/tick-square";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem] w-full">
      <div
        className={cn(
          " relative md:col-span-1 md:row-span-2 row-span-1 rounded-xl bg-gradient-to-t from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4"
        )}
      >
        <div className="z-[1] p-4 md:p-10">
          <div className="w-fit gap-4 py-2.5 px-6 rounded-full border border-[#1E1E1E] bg-transparent flex flex-row items-center">
            <div className="w-3 h-3 bg-[#4686D9] rounded-full animate-ping" />
            <p className="text-white font-archivo text-lg">3 spots left</p>
          </div>
          <h4 className="text-3xl z-10 text-[#4686D9] font-archivo mt-8">
            Monthly
          </h4>
          <h2 className="z-10 mb-1 w-full text-5xl text-white font-bold font-cabinetGrotesk mt-4">
            $1799<span className="text-2xl">/mo</span>
          </h2>
          <p className="z-10 text-white/60 font-archivo font-normal text-lg mt-6">
            Ideal for startups with an ongoing{" "}
            <br className="hidden md:block" /> demand for design services.
          </p>
          <div className="w-fit flex flex-row gap-5 mt-10">
            <button className="w-fit bg-[#4686D9] rounded-xl py-3.5 px-6 font-archivo text-lg text-black flex flex-row items-center gap-4">
              Subscribe <ArrowRight />
            </button>
            <button className="w-fit bg-[#101010] border border-[#1E1E1E] rounded-xl py-3.5 px-6 font-archivo text-lg text-white">
              Book a call
            </button>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-0 left-0 w-full h-1/2">
          <div className="relative w-full h-full top-0 bg-gradient-to-r from-[#101010] to-transparent">
            <Image
              fill
              className=" object-cover scale-110"
              src="/images/grid.webp"
              alt="Grid"
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:col-span-1 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4"
        )}
      >
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            Hi
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            Description
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-1 row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4"
        )}
      >
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            Hi
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            Description
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-2 row-span-1 md:h-fit rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col md:items-center space-y-4"
        )}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center md:gap-12">
          <h4 className="text-4xl text-[#4686D9] font-archivo font-medium">
            Refer a friend & earn
          </h4>
          <p className="text-white font-archivo font-normal text-xl">
            Receive $250 for <br className="hidden md:block" /> each referral!
          </p>
          <button className="w-fit bg-transparent border border-[#1E1E1E] rounded-xl py-3.5 px-6 font-archivo text-lg text-white">
            Join now
          </button>
        </div>
      </div>
    </BentoGrid>
  );
}
