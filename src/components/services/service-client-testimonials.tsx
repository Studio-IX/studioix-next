"use client";

import { webDevServiceTestimonials } from "@/constants/testimonials";
import {
  SiAdobe,
  SiAlienware,
  SiHbo,
  SiMicrosoft,
  SiNike,
  SiNvidia,
} from "react-icons/si";
import Wrapper from "../wrapper/wrapper";
import Arrow from "./arrow";
import ServiceTestimonialItem from "./service-testimonial-item";

const ServiceClientTestimonials = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Wrapper className="items-center w-full flex flex-col">
        <h2 className="text-white text-7xl font-cabinetGrotesk font-bold">
          We&apos;ve worked with amazing brands
        </h2>
      </Wrapper>
      <div className="w-full flex flex-row mt-20 mb-[20rem] px-40 gap-8">
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiNike style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiMicrosoft style={{ fontSize: "4.5rem", color: "white" }} />
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiAdobe style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiNvidia style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiAlienware style={{ fontSize: "5rem", color: "white" }} />
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full border border-gray-400 flex items-center justify-center">
          <SiHbo style={{ fontSize: "8rem", color: "white" }} />
        </div>
      </div>
      <Wrapper className="mb-40">
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-white text-7xl font-cabinetGrotesk font-bold">
            Feedback from our clients
          </h2>
          <Arrow />
        </div>
      </Wrapper>
      <div className="px-20">
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
