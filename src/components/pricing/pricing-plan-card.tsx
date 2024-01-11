"use client";

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import PricingButton from "./pricing-button";
import TickSquare from "./tick-square";
import {
  basicPlanDescription,
  basicPlanListItems,
  basicPlanPrice,
  customPlanDescription,
  customPlanListItems,
  customTermPlanPrice,
  flexiPlanDescription,
  flexiPlanListItems,
  flexiPlanPrice,
  hourlyPlan,
  longTermPlanDescription,
  longTermPlanListItems,
  longTermPlanPrice,
  monthlyPlan,
} from "@/constants/pricing";
import React from "react";

interface PricingProps {
  planType: string;
}

const PricingPlanCard: React.FC<PricingProps> = ({ planType }) => {
  let listItems: any = [];
  let planPricing: any = [];
  let planPeriod: any = [];
  let planDescription: React.ReactNode = null;
  switch (planType) {
    case "Flexi-Hours":
      listItems = flexiPlanListItems;
      planPricing = flexiPlanPrice;
      planPeriod = hourlyPlan;
      planDescription = flexiPlanDescription;
      break;
    case "Basic":
      listItems = basicPlanListItems;
      planPricing = basicPlanPrice;
      planPeriod = null;
      planDescription = basicPlanDescription;
      break;
    case "Long Term":
      listItems = longTermPlanListItems;
      planPricing = longTermPlanPrice;
      planPeriod = monthlyPlan;
      planDescription = longTermPlanDescription;
      break;
    case "Custom":
      listItems = customPlanListItems;
      planPricing = customTermPlanPrice;
      planPeriod = null;
      planDescription = customPlanDescription;
      break;
    default:
      listItems = [];
  }
  return (
    <div className="group relative w-full max-w-lg overflow-hidden rounded-[20px] bg-[#121212] p-[3px] transition-all duration-500 ease-in-out select-none hover:scale-[1.025] hover:bg-[#222222]">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[19px] bg-white px-4 py-6 md:py-8 md:px-8 transition-colors duration-500 group-hover:bg-white">
        <h4 className="relative mb-1 z-10 w-full text-xl text-black font-cabinetGrotesk font-medium">
          {planType}
        </h4>
        <h2 className="relative z-10 mb-1 w-full text-5xl text-black font-bold font-cabinetGrotesk">
          {planPricing} <span className="text-2xl">{planPeriod}</span>
        </h2>

        <p className="relative z-10 text-black/60 font-archivo text-lg">
          {planDescription}
        </p>

        <Separator className="my-4" />

        <PricingButton
          text={`Get Started With ${planType}`}
          link="https://www.studioix.agency"
        />

        <div className="flex flex-col gap-2.5 items-start w-full mt-8">
          {listItems.map((item: any, index: any) => (
            <div key={index} className="flex flex-row items-center gap-2.5">
              <TickSquare />
              <p className="text-lg font-archivo font-normal text-black">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#F8D38E] via-[#A4AEB2] to-[#4686D9] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default PricingPlanCard;
