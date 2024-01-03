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
    <div className="w-full flex flex-row justify-between mb-28 items-start">
      <div className="flex flex-row items-center gap-8 w-[50%]">
        <div className="w-24 h-24 rounded-full relative aspect-square">
          <Image
            className="rounded-full object-center object-cover"
            fill
            src={image}
            alt={clientName}
          />
        </div>
        <div className="flex flex-col w-full font-archivo gap-1.5">
          <h6 className="text-white text-[28px]">{clientName}</h6>
          <p className="text-white/60 text-[22px]">{companyAndPosition}</p>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-white text-[28px] font-normal font-archivo">
          &apos;&apos; {clientTestimonial} &apos;&apos;
        </h4>
      </div>
    </div>
  );
};

export default ServiceTestimonialItem;
