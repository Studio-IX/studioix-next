"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../common/section-title";
import ProjectModal from "./projects-modal";

interface ProjectItemInterface {
  src: string;
  projectTitle: string;
  className?: string;
}

const ProjectItem: React.FC<ProjectItemInterface> = ({
  src,
  projectTitle,
  className,
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
        className="relative w-full h-[350px] lg:h-[650px] cursor-none group rounded-[20px] overflow-hidden"
      >
        <Image
          quality={100}
          className={cn(
            "rounded-[20px] object-cover object-left-top group-hover:scale-110 transition-all ease-in-out duration-500",
            className
          )}
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
      <ProjectModal modal={modal} />
    </div>
  );
};

export default ProjectItem;
