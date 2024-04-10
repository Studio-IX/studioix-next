import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TickSquare from "../pricing/tick-square";
import { BentoGrid } from "../common/bento-grid";

const DesignPricingGrid = () => {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem] w-full mt-20">
      <div
        className={cn(
          " relative md:col-span-1 md:row-span-2 row-span-2 rounded-2xl bg-gradient-to-t from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4 w-full"
        )}
      >
        <div className="z-[1] p-4 md:p-10">
          <div className="w-fit gap-4 py-2.5 px-6 rounded-full border border-[#1E1E1E] bg-transparent flex flex-row items-center mt-3 md:mt-0">
            <div className="w-2 h-2 bg-[#4686D9] rounded-full animate-ping" />
            <p className="text-white/60 font-archivo text-lg">3 spots left</p>
          </div>
          <h4 className="text-3xl md:text-4xl z-10 text-[#4686D9] font-archivo font-medium mt-8">
            Monthly
          </h4>
          <h2 className="z-10 mb-1 w-full text-5xl md:text-6xl text-white font-bold font-cabinetGrotesk mt-4">
            $1799<span className="text-2xl"> / mo</span>
          </h2>
          <p className="z-10 text-white font-archivo font-normal text-xl mt-4">
            Ideal for startups with an ongoing{" "}
            <br className="hidden md:block" /> demand for design services.
          </p>
          <div className="w-fit flex flex-row gap-5 mt-10 md:mt-8">
            <button className="w-fit bg-[#4686D9] rounded-2xl py-3 px-6 font-archivo text-lg text-black flex flex-row items-center gap-4">
              Subscribe <ArrowRight />
            </button>
            <button className="w-fit bg-[#101010] border border-[#1E1E1E] rounded-2xl py-3 px-6 font-archivo text-lg text-white">
              Book a call
            </button>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-11">
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Unlimited requests
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Unlimited revisions
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                ~96 hour delivery
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Pause or cancel anytime
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Unlimited brands
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Managed via Slack
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Pause or cancel anytime
              </p>
            </div>
            <div className=" flex flex-row gap-4 items-center mb-8 md:mb-0">
              <TickSquare />
              <p className="text-white/60 font-archivo text-lg">
                Unlimited brands
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 z-0 left-0 w-full h-[45%] md:h-[60%]">
          <div className="relative w-full h-full top-0 bg-gradient-to-r from-[#101010] to-transparent">
            <Image
              fill
              className="object-cover -mt-4 md:-mt-12 ml-0 md:ml-36 scale-125"
              src="/images/grid.webp"
              alt="Grid"
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:col-span-1 row-span-1 md:row-span-1 rounded-2xl p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4"
        )}
      >
        <div className="">
          <h4 className="text-3xl md:text-4xl z-10 text-[#4686D9] font-archivo font-medium mt-2">
            Custom
          </h4>

          <p className="z-10 text-white font-archivo font-normal text-xl mt-2 md:mt-6">
            Ideal for startups with project-
            <br /> based design needs.
          </p>

          <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-center gap-8 mt-8">
            <button className="w-fit bg-[#101010] border border-[#1E1E1E] rounded-2xl py-3 px-6 font-archivo text-lg text-white mb-4 md:mb-0">
              Book a call
            </button>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" flex flex-row gap-4 items-center">
                <TickSquare />
                <p className="text-white/60 font-archivo text-lg">
                  Unlimited requests
                </p>
              </div>
              <div className=" flex flex-row gap-4 items-center">
                <TickSquare />
                <p className="text-white/60 font-archivo text-lg">
                  Unlimited revisions
                </p>
              </div>
              <div className=" flex flex-row gap-4 items-center">
                <TickSquare />
                <p className="text-white/60 font-archivo text-lg">
                  Unlimited requests
                </p>
              </div>
              <div className=" flex flex-row gap-4 items-center">
                <TickSquare />
                <p className="text-white/60 font-archivo text-lg">
                  Unlimited revisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-1 row-span-1 rounded-2xl p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col space-y-4"
        )}
      >
        <div className="">
          <h4 className="text-3xl md:text-4xl z-10 text-[#4686D9] font-archivo font-medium mt-2">
            One-off project
          </h4>
          <h2 className="z-10 mb-1 w-full text-5xl md:text-6xl text-white font-bold font-cabinetGrotesk mt-4">
            $699<span className="text-2xl"> / one time</span>
          </h2>
          <div className="w-full flex flex-col-reverse md:flex-row items-start md:items-center gap-8 mt-4 md:mt-12">
            <button className="w-fit bg-[#4686D9] rounded-2xl py-3 px-6 font-archivo text-lg text-black flex flex-row items-center gap-4 mb-4 md:mb-0">
              Subscribe <ArrowRight />
            </button>
            <p className="z-10 text-white font-archivo font-normal text-xl">
              Ideal for startups with an ongoing{" "}
              <br className="hidden md:block" /> demand for design services.
            </p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-2 row-span-1 md:h-fit rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 md:p-10 bg-gradient-to-r from-black to-[#101010] border-[#1E1E1E] border justify-between flex flex-col md:items-center space-y-4"
        )}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center md:gap-12">
          <h4 className="text-4xl text-[#4686D9] font-archivo font-medium mt-4 md:mt-0">
            Refer a friend & earn
          </h4>
          <p className="text-white font-archivo font-normal text-xl mt-2 md:mt-0">
            Receive $250 for <br className="hidden md:block" /> each referral!
          </p>
          <button className="w-fit bg-transparent border border-[#1E1E1E] rounded-2xl py-3 px-6 font-archivo text-lg text-white mt-6 md:mt-0 mb-4 md:mb-0">
            Join now
          </button>
        </div>
      </div>
    </BentoGrid>
  );
};

export default DesignPricingGrid;
