import Image from "next/image";
import SectionTitle from "../common/section-title";
import React from "react";

interface ProjectItemTallInterface {
  src: string;
  projectTitle: string;
}

const ProjectItemTall: React.FC<ProjectItemTallInterface> = ({
  src,
  projectTitle,
}) => {
  return (
    <div className="flex flex-col w-full items-start">
      <div className="relative w-full h-[600px] lg:h-[950px]">
        <Image
          quality={100}
          className="rounded-[20px] object-cover object-left lg:object-object-left-top"
          fill
          src={src}
          alt="Pclub.io"
        />
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row gap-2.5 mt-8 md:gap-3">
          <SectionTitle text="Branding" />
          <SectionTitle text="Development" />
          <SectionTitle text="User Experience" />
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col items-start justify-start mt-8 w-full">
          <div className="flex flex-row gap-2.5 md:gap-3">
            <SectionTitle text="Branding" />
            <SectionTitle text="Development" />
          </div>
          <div className="mt-3">
            <SectionTitle text="UX" />
          </div>
        </div>
      </div>
      <h2 className="font-cabinetGrotesk text-4xl lg:text-6xl text-white font-semibold mt-6 md:mt-8">
        {projectTitle}
      </h2>
    </div>
  );
};

export default ProjectItemTall;
