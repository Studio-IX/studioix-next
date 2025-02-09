"use client";

import { FaqItems } from "./faq-items";

export const FAQs = () => {
  return (
    <section id="faqs" className="pt-20 pb-12 md:pb-0 relative px-3 md:px-0">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl tracking-tighter lg:text-7xl text-white text-center mt-6">
          Our FAQs
        </h2>
        <p className=" font-archivo max-w-[70ch] text-lg md:text-xl text-white/80 text-center w-full mt-2">
          The most common questions we get asked.
        </p>
        <FaqItems />
      </div>
    </section>
  );
};
