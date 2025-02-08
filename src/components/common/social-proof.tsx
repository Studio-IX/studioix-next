import { RefreshCcw, Rocket, TestTube } from "lucide-react";
import Wrapper from "../wrapper/wrapper";
import Stat from "./stats";

const SocialProof = () => {
  return (
    <section className=" pt-12 pb-12 md:pt-0 md:pb-12">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12 py-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            Build Fast. <br className=" hidden md:block" />
            Validate Smarter.
          </h2>
          <p className="font-archivo md:max-w-[70ch] text-lg md:text-xl text-white/80 text-center w-full">
            <span className="hidden md:inline">
              Startups thrive on speed. To succeed, you need to invest in
              building a product that solves real problems—without wasting time
              or resources. The best way to do that? Rapid iteration and
              real-world testing. That&apos;s where Studio IX comes in. We
              deliver your first version in just six weeks, helping you validate
              your idea quickly and efficiently.
            </span>
            <span className="md:hidden">
              We help you build and validate MVPs in just six weeks through
              rapid iteration and real-world testing, saving you time and
              resources.
            </span>
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
          <div className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]">
            <div className=" absolute inset-0 bg-gradient-to-br opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -z-[1] from-[#000]/60 to-[#455CE9]/40" />
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <Rocket />
            </div>
            <h4 className="mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Build Fast
            </h4>
            <p className=" font-archivo font-normal text-lg text-white/70 group-hover:text-white">
              We deliver an impressive MVP in just 6 weeks, so you can launch
              quickly and stay ahead.
            </p>
          </div>
          <div className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]">
            <div className=" absolute inset-0 bg-gradient-to-br opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -z-[1] from-[#000]/60 to-[#455CE9]/40" />
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <TestTube />
            </div>
            <h4 className="mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Validate Idea
            </h4>
            <p className=" font-archivo font-normal text-lg text-white/70 group-hover:text-white">
              Validate your idea with real customers—does it truly solve their
              problem(s) and pain point(s)?
            </p>
          </div>
          <div className=" relative rounded-3xl overflow-clip group text-white w-full h-fit p-8 flex flex-col items-start hover:bg-transparent bg-[#090909] border border-[#272727]">
            <div className=" absolute inset-0 bg-gradient-to-br opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 -z-[1] from-[#000]/60 to-[#455CE9]/40" />
            <div className=" z-10 h-14 aspect-square bg-[#101010] border border-[#272727] rounded-full flex items-center justify-center">
              <RefreshCcw />
            </div>
            <h4 className="mt-4 mb-1 text-3xl md:text-4xl tracking-tighter font-cabinetGrotesk font-medium text-white">
              Iterate & Improve
            </h4>
            <p className=" font-archivo font-normal text-lg text-white/70 group-hover:text-white">
              Use real user feedback to refine, optimize, and enhance your
              product for long-term success.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className=" h-12 md:h-[5rem]" />
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-20">
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
            Trusted by founders
          </h2>
          <p className=" font-archivo text-lg md:text-xl text-white/80 text-center w-full">
            Here&apos;s how much impact we&apos;ve made
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center w-fit md:w-full">
          <Stat num={14} subheading="MVPs Completed" />

          <Stat num={19} subheading="Happy Clients" />

          <Stat num={10} subheading="Startups Funded" />
        </div>
      </Wrapper>
    </section>
  );
};

export default SocialProof;
