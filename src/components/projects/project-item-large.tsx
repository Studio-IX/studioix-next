import Image from "next/image";
import SectionTitle from "../common/section-title";
import React from "react";

interface ProjectItemLargeInterface {
  src: string;
  projectTitle: string;
}

const ProjectItemLarge: React.FC<ProjectItemLargeInterface> = ({
  src,
  projectTitle,
}) => {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="relative w-full h-[600px] lg:h-[850px]">
        <Image
          quality={100}
          className="rounded-[20px] object-cover object-left"
          fill
          src={src}
          alt="Pclub.io"
        />
      </div>
      <div className="flex flex-row gap-2.5 md:gap-3 mt-8">
        <SectionTitle text="User Experience" />
        <SectionTitle text="Development" />
      </div>
      <h2 className="font-cabinetGrotesk text-4xl lg:text-6xl text-white font-semibold mt-6 md:mt-8">
        {projectTitle}
      </h2>
    </div>
  );
};

export default ProjectItemLarge;
