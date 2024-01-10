"use client";

import { webDevServiceTestimonials } from "@/constants/testimonials";
import {
  SiAdobe,
  SiAlienware,
  SiBytedance,
  SiMicrosoft,
  SiNike,
  SiNvidia
} from "react-icons/si";
import Wrapper from "../wrapper/wrapper";
import Arrow from "./arrow";
import ServiceTestimonialItem from "./service-testimonial-item";

const ServiceClientTestimonials = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#0A0A0A]">
      <Wrapper className="items-center w-full flex flex-col">
        <h2 className="text-white text-5xl md:text-7xl font-cabinetGrotesk font-bold">
          We&apos;ve worked with amazing brands
        </h2>
      </Wrapper>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 pb-32 pt-20 md:pt-20 md:pb-52">
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiNike style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiMicrosoft style={{ fontSize: "4.5rem", color: "white" }} />
        </div>
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiAdobe style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiNvidia style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiAlienware style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[12rem] md:w-[16rem] h-[12rem] md:h-[16rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiBytedance style={{ fontSize: "5rem", color: "white" }} />
        </div>
      </div>
      <Wrapper className="mb-20 md:mb-40">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-white text-5xl md:text-7xl font-cabinetGrotesk font-bold pr-16 -mt-2 md:pr-0">
            Feedback <span className="hidden md:block">from our clients</span>
          </h2>
          <Arrow />
        </div>
      </Wrapper>
      <div className="px-3 md:px-20">
        {webDevServiceTestimonials.map((testimonial, i) => {
          return (
            <ServiceTestimonialItem
              key={i}
              image={testimonial.img}
              clientName={testimonial.clientName}
              companyAndPosition={testimonial.companyAndPosition}
              clientTestimonial={testimonial.clientTestimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServiceClientTestimonials;
