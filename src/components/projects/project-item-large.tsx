"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../common/section-title";
import ProjectModal from "./projects-modal";

interface ProjectItemLargeInterface {
  src: string;
  projectTitle: string;
}

const ProjectItemLarge: React.FC<ProjectItemLargeInterface> = ({
  src,
  projectTitle,
}) => {
  const [modal, setModal] = useState({ active: false });

  return (
    <div className="flex flex-col w-full items-start">
      <div
        onMouseEnter={() => {
          setModal({ active: true });
        }}
        onMouseLeave={() => {
          setModal({ active: false });
        }}
        className="relative rounded-[20px] group cursor-none w-full h-[600px] overflow-hidden lg:h-[850px]"
      >
        <Image
          quality={100}
          className="rounded-[20px] group-hover:scale-110 transition-all ease-in-out duration-500 object-cover object-left-top"
          fill
          src={src}
          alt="Pclub.io"
        />
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row gap-2.5 md:gap-3 mt-8">
          <SectionTitle text="Development" />
          <SectionTitle text="User Experience" />
        </div>
      </div>

      <div className=" md:hidden">
        <div className="flex flex-row gap-2.5 md:gap-3 mt-8">
          <SectionTitle text="UX" />
          <SectionTitle text="Development" />
        </div>
      </div>
      <h2 className="font-cabinetGrotesk text-4xl lg:text-6xl text-white font-semibold mt-6 md:mt-8">
        {projectTitle}
      </h2>
      <ProjectModal modal={modal} />
    </div>
  );
};

export default ProjectItemLarge;
