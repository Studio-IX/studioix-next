import { ArrowRight } from "lucide-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "../ui/input";
import BouncyComponent from "./bouncy-radio";

export function ContactDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#000_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-2.5 md:px-6 py-1 text-base font-archivo font-medium text-white backdrop-blur-3xl">
            Build Your First MVP
            <ArrowRight className="ml-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" h-[100dvh] md:h-[55dvh] py-5 md:py-0 w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center px-3 md:px-20">
          <div className="md:w-[65%] flex flex-col items-start">
            <div className="hidden md:block text-start">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-4xl lg:text-7xl text-black text-start md:mt-0">
                We Are
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-4xl lg:text-7xl text-black text-start md:-mt-3">
                Glad that
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-4xl lg:text-7xl text-black text-start md:-mt-3">
                You Chose
              </h2>
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-4xl lg:text-7xl text-[#455CE9] text-start md:-mt-3">
                Studio IX®
              </h2>
            </div>

            <div className=" md:hidden">
              <h2 className="uppercase font-cabinetGrotesk font-extrabold text-4xl lg:text-7xl text-black text-start md:mt-0">
                We are glad <br /> that you Chose{" "}
                <span className="text-[#455CE9]">Studio IX®</span>
              </h2>
            </div>

            <div className="hidden md:block">
              <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group mt-10">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#455CE9_50%,#67DBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-3 pr-6 py-1 text-base font-archivo font-medium text-black backdrop-blur-3xl">
                  <ArrowRight className="ml-2 mr-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                  Submit Form
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-8 md:gap-12">
            <div className="md:hidden w-full">
              <div className="w-full flex items-center justify-center">
                <div className="w-12 h-1.5 bg-black/10 rounded-full" />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
              <div className="flex flex-col items-start gap-1 md:gap-4 w-full">
                <h4 className="  font-archivo font-semibold text-xl text-black">
                  Name
                </h4>
                <Input placeholder="Your Name" type="text" />
              </div>
              <div className="flex flex-col items-start gap-1 md:gap-4 w-full">
                <h4 className="  font-archivo font-semibold text-xl text-black">
                  Contact
                </h4>
                <Input placeholder="Your Email" type="email" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-2.5 md:gap-4 w-full">
              <h4 className=" font-archivo font-semibold text-xl text-black">
                Looking for help with
              </h4>
              <BouncyComponent />
            </div>
            <div className="flex flex-col items-start gap-1 md:gap-4 w-full">
              <h4 className="  font-archivo font-semibold text-xl text-black">
                Message
              </h4>
              <Input placeholder="Describe project (optional)" type="text" />
            </div>
            <div className="md:hidden">
              <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#455CE9_50%,#67DBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white pl-3 pr-6 py-1 text-base font-archivo font-medium text-black backdrop-blur-3xl">
                  <ArrowRight className="ml-2 mr-2 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                  Submit Form
                </span>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
