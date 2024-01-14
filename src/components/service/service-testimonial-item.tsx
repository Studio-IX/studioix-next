import Image from "next/image";
import React from "react";

interface ServiceTestimonialItemProps {
  image: string;
  clientName: string;
  companyAndPosition: string;
  clientTestimonial: string;
}

const ServiceTestimonialItem: React.FC<ServiceTestimonialItemProps> = ({
  image,
  clientName,
  companyAndPosition,
  clientTestimonial,
}) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between mb-20 md:mb-28 items-start">
      <div className="flex flex-row items-center gap-8 w-full md:w-[50%] mt-6 md:mt-0">
        <div className="w-16 md:w-24 h-16 md:h-24 rounded-full relative aspect-square">
          <Image
            className="rounded-full object-center object-cover"
            fill
            src={image}
            alt={clientName}
          />
        </div>
        <div className="flex flex-col w-full font-archivo gap-1 md:gap-1.5">
          <h6 className="text-white text-[22px] md:text-[28px]">
            {clientName}
          </h6>
          <p className="text-white/60 text-white md:text-[22px]">
            {companyAndPosition}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-white text-[22px] md:text-[28px] font-normal font-archivo">
          &apos;&apos; {clientTestimonial} &apos;&apos;
        </h4>
      </div>
    </div>
  );
};

export default ServiceTestimonialItem;
