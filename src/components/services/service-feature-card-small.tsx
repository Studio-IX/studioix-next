import Image from "next/image";
import React from "react";

interface ServiceFeatureCardSmallProps {
  src: string;
  title: string;
  alt: string;
  description: string;
}

const ServiceFeatureCardSmall: React.FC<ServiceFeatureCardSmallProps> = ({
  src,
  title,
  description,
  alt,
}) => {
  return (
    <div className="feature-card h-fit">
      <div className="relative w-full h-[280px] lg:h-[350px]">
        <Image
          quality={100}
          className="object-cover rounded-t-[18px]"
          fill
          src={src}
          alt={alt}
        />
      </div>
      <div className="flex flex-col items-center text-center pt-8 pb-16">
        <h4 className=" font-cabinetGrotesk font-semibold text-3xl text-white">
          {title}
        </h4>
        <p className="font-archivo font-normal text-lg text-white/60 max-w-[50ch] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceFeatureCardSmall;
