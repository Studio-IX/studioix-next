"use client";

import { getCalApi } from "@calcom/embed-react";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { Button } from "../ui/button";

const Pricing = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0096FA" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <section className=" w-full px-3">
      <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center mt-6">
        Simple & Flexible Pricing
      </h2>
      <p className=" font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
        Design, Development, or both - Whatever you need we&apos;ve got you
        covered to make sure we bring your MVP to life!
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:max-w-[52rem] gap-4 mx-auto mt-12">
        <div className="flex flex-col justify-between items-start p-6 w-full h-[32rem] bg-[#090909] border border-[#272727] rounded-3xl">
          <div>
            <h4 className=" font-archivo text-xl md:text-2xl w-full text-primary uppercase">
              Design-Only
            </h4>
            <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70 mt-2">
              Ideal for startups looking to launch with polished, user-friendly
              designs. Get a seamless, high-quality UX/UI experience that brings
              your vision to life
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Basic Project Management
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  1 Lead Designer
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Limited Revisions
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white opacity-70" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white opacity-70">
                  Basic Support for 30 Days
                </p>
              </div>
            </div>
          </div>
          <div
            data-cal-namespace="discovery-call"
            data-cal-link="studio-ix-gonodg/discovery-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className=" w-full mt-4 md:mt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#67DBFF_0%,#393BB2_50%,#67DBFF_100%)]" />
            <span
              className={`text-white bg-[#090909] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-2.5 md:px-6 py-1 text-base font-archivo font-medium backdrop-blur-3xl`}
            >
              Book A Call
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start p-6 w-full h-[32rem] bg-[#090909] border border-[#272727] rounded-3xl relative overflow-clip">
          <div className=" z-10">
            <h4 className=" font-archivo text-xl md:text-2xl w-full text-primary uppercase">
              MVP in Six-Weeks
            </h4>
            <p className=" font-archivo text-lg md:text-xl w-full text-white mt-2 opacity-70">
              Full-scale MVP development, connecting with your target audience
              in just six weeks.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  Guaranteed MVP in Nine Weeks
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  Full-Service Management
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  2 Senior Frontend Developers
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  2 Senior Backend Developers
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  1 Lead Designer
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  1 QA Specialist
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Check className=" text-white" />
                <p className=" font-archivo text-lg md:text-xl w-full text-white">
                  Ongoing Support
                </p>
              </div>
            </div>
          </div>
          <Button
            data-cal-namespace="discovery-call"
            data-cal-link="studio-ix-gonodg/discovery-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className=" w-full z-10"
          >
            Book A Call
          </Button>

          <div className=" absolute h-60 aspect-square rounded-full bg-primary blur-3xl opacity-50 bottom-0 right-0 z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
