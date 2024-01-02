"use client";

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import PricingButton from "./pricing-button";
import React from "react";
import PricingBookCall from "./pricing-book-call";

interface InfoProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  new: string | null;
}

const PricingInfoCard: React.FC<InfoProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  new: newProp,
}) => {
  const isBookFreeCall = buttonText === "Book Free Call";
  return (
    <div className="group relative w-full max-w-lg overflow-hidden rounded-[20px] bg-[#121212] p-[3px] transition-all duration-500 ease-in-out select-none hover:scale-[1.025] hover:bg-[#222222]">
      <div className="relative py-10 z-10 flex flex-col items-center justify-center overflow-hidden rounded-[19px] bg-white p-6 md:p-8 transition-colors duration-500 group-hover:bg-white">
        <div className="w-full flex flex-row justify-between items-center">
          <h4 className="relative z-10 w-full text-xl text-black font-cabinetGrotesk font-medium">
            {subtitle}
          </h4>
          {newProp && (
            <div className="-mt-4 rounded-full bg-[#4686D9] flex items-center justify-center w-fit px-4 py-2">
              <p className="relative z-10 text-white font-archivo text-lg">
                New
              </p>
            </div>
          )}
        </div>
        <h2 className="relative z-10 mb-1 w-full text-5xl text-black font-bold font-cabinetGrotesk">
          {title}
        </h2>
        <p className="relative z-10 text-black/60 font-archivo text-lg">
          {description}
        </p>

        <Separator className="mt-6 mb-6" />

        {isBookFreeCall ? (
          <PricingBookCall text={buttonText} />
        ) : (
          <PricingButton text={buttonText} link="/home" />
        )}
      </div>
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "12deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#F8D38E] via-[#A4AEB2] to-[#4686D9] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

export default PricingInfoCard;
