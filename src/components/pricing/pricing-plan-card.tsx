"use client";

import { motion } from "framer-motion";

const PricingPlanCard = () => {
  return (
    <div className="bg-[#121212] px-4 py-12">
      <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-[#121212] p-1 transition-all duration-500 ease-in-out select-none hover:scale-[1.025] hover:bg-[#222222]">
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-white p-8 transition-colors duration-500 group-hover:bg-white">
          <h4 className="relative z-10 mb-4 w-full text-xl text-black font-cabinetGrotesk font-medium">
            Flexi-Hours
          </h4>
          <h2 className="relative z-10 mb-4 w-full text-5xl text-black font-bold font-cabinetGrotesk">
            $60 - 100 <span className="text-2xl">/ hour</span>
          </h2>

          <p className="relative z-10 text-black/60 font-archivo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum
            sed blanditiis iste molestias nemo nobis repellendus nisi dolorum
            itaque optio impedit cum voluptatem facilis minima, quasi laborum.
            Nihil, quaerat.
          </p>
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
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#F8D38E] via-[#A4AEB2] to-[#4686D9] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default PricingPlanCard;
