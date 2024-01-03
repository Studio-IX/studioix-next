import Image from "next/image";
import SectionTitle from "../common/section-title";
import React from "react";

interface ProjectItemInterface {
  src: string;
  projectTitle: string;
}

const ProjectItem: React.FC<ProjectItemInterface> = ({ src, projectTitle }) => {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="relative w-full h-[350px] lg:h-[650px]">
        <Image
          quality={100}
          className="rounded-[20px]"
          fill
          src={src}
          alt="Pclub.io"
        />
      </div>
      <div className="flex flex-row gap-2.5 md:gap-3 mt-8">
        <SectionTitle text="Development" />
        <SectionTitle text="User Experience" />
      </div>
      <h2 className="font-cabinetGrotesk text-4xl lg:text-6xl text-white font-semibold mt-6 md:mt-8">
        {projectTitle}
      </h2>
    </div>
  );
};

export default ProjectItem;
