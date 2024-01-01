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
      <div className="relative w-full h-[850px]">
        <Image
          className="rounded-[20px] object-cover object-center"
          fill
          src={src}
          alt="Pclub.io"
        />
      </div>
      <div className="flex flex-row gap-3 mt-8">
        <SectionTitle text="User Experience" />
        <SectionTitle text="Development" />
      </div>
      <h2 className="font-cabinetGrotesk text-6xl text-white font-semibold mt-8">
        {projectTitle}
      </h2>
    </div>
  );
};

export default ProjectItemLarge;
