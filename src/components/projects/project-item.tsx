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
      <div className="relative w-full h-[650px]">
        <Image className="rounded-[20px]" fill src={src} alt="Pclub.io" />
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

export default ProjectItem;
