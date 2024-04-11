"use client";

import Image from "next/image";
import { FaqItems } from "./faq-items";
import SectionTitle from "./section-title";

export const FAQs = () => {
  return (
    <section className="py-40 relative">
      <div className=" absolute flex items-center justify-center w-full -mt-8">
        <Image
          width={605}
          height={620}
          src="/images/faq-gradient.png"
          alt="Gradient"
        />p
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center mt-6">
          FAQs
        </h2>
        <FaqItems />
      </div>
    </section>
  );
};
