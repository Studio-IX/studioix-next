import { ArrowRight } from "lucide-react";
import AnimatedLink from "../common/animated-link";
import Wrapper from "../wrapper/wrapper";

const PortfolioInfo = () => {
  return (
    <div className="w-full">
      <Wrapper className="flex items-start justify-between w-full  max-w-full">
        <div className="w-full flex flex-col items-start">
          <p className="text-2xl font-archivo text-white font-normal">
            Midas is a mobile application designed to provide users in Ghana
            with a seamless and convenient way to make online purchases and pay
            for subscriptions and services using virtual debit cards powered by
            only mobile money.
          </p>
          <p className="text-2xl font-archivo text-white font-normal mt-4">
            Our goal is to make online transactions more accessible to everyone
            in Ghana, regardless of their location or access to traditional
            banking services.
          </p>
        </div>

        <div className="w-full flex flex-row items-star justify-center gap-40">
          <div className="w-fit flex flex-col gap-10">
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white/80 font-archivo text-lg">Client</h4>
              <p className=" text-white font-archivo text-xl uppercase">
                Midas Financial Inc.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white/80 font-archivo text-lg">Services</h4>
              <p className=" text-white font-archivo text-xl uppercase">
                UX Design
              </p>
              <p className=" text-white font-archivo text-xl uppercase">
                Graphic Design
              </p>
              <p className=" text-white font-archivo text-xl uppercase">
                Mobile App Development
              </p>
            </div>
            <div className="z-[2147483002] relative inline-flex h-20 overflow-hidden w-fit rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black pr-8 pl-3 text-xl font-archivo font-medium text-white backdrop-blur-3xl">
                <div className=" aspect-square h-14 w-14 rounded-full bg-[#455CE9] mr-5 flex items-center justify-center">
                  <ArrowRight className=" group-hover:-rotate-45 ease-in-out transition-all duration-500" />
                </div>
                Live Website
              </span>
            </div>
          </div>

          <div className="w-fit flex flex-col items-start gap-10">
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white/80 font-archivo text-lg">Industry</h4>
              <p className=" text-white font-archivo text-xl uppercase">
                Financial
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-white/80 font-archivo text-lg">Year</h4>
              <p className=" text-white font-archivo text-xl uppercase">2022</p>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="w-full max-w-full mt-40">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-6xl text-white text-start md:mt-0">
          The Challenge
        </h2>
        <p className="text-2xl font-archivo text-white/80 font-normal w-[40%] mt-4">
          Midas is a mobile application designed to provide users in Ghana with
          a seamless and convenient way to make online purchases and pay for
          subscriptions and services using virtual debit cards powered by only
          mobile money.
        </p>

        <div className="w-full flex mt-10">
          <div className="w-full bg-purple-300 h-[52rem]"></div>
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-end">
              <div className=" bg-red-400 w-1/2 h-[25rem]"></div>
            </div>
            <div className="w-full mt-20">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-1/2">
                  <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-5xl text-white w-full">
                    Our solution
                  </h2>

                  <p className="text-xl font-archivo text-white/80 font-normal w-full text-start mt-2">
                    Midas is a mobile application designed to provide users in
                    Ghana with a seamless and convenient way to make online
                    purchases and pay for subscriptions and services using
                    virtual debit cards powered by only mobile money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="w-full max-w-full mt-20">
        <div className="w-full flex items-end gap-20 justify-between">
          <div className="w-1/2">
            <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-5xl text-white w-full">
              UX Design
            </h2>

            <p className="text-xl font-archivo text-white/80 font-normal w-full text-start mt-2">
              Midas is a mobile application designed to provide users in Ghana
              with a seamless and convenient way to make online purchases and
              pay for subscriptions and services using virtual debit cards
              powered by only mobile money.
            </p>
          </div>
          <div className="w-full h-[42rem] bg-white"></div>
        </div>
      </Wrapper>

      <div className="w-full h-[60rem] bg-white mt-20"></div>

      <Wrapper className="w-full max-w-full mt-20">
        <div className="w-full flex items-end gap-20 justify-between mt-20">
          <div className="w-full h-[42rem] bg-white"></div>
          <div className="w-1/2">
            <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-5xl text-white w-full">
              UX Design
            </h2>

            <p className="text-xl font-archivo text-white/80 font-normal w-full text-start mt-2">
              Midas is a mobile application designed to provide users in Ghana
              with a seamless and convenient way to make online purchases and
              pay for subscriptions and services using virtual debit cards
              powered by only mobile money.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PortfolioInfo;
