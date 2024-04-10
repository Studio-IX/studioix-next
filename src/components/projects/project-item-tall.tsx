"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../common/section-title";
import ProjectModal from "./projects-modal";

interface ProjectItemTallInterface {
  src: string;
  projectTitle: string;
  className?: string;
}

const ProjectItemTall: React.FC<ProjectItemTallInterface> = ({
  src,
  projectTitle,
  className,
}) => {
  const [modal, setModal] = useState({ active: false });

  return (
    <div className="flex flex-col w-full items-start">
      <div
        className="relative w-full h-[600px] lg:h-[950px] cursor-none group overflow-hidden rounded-[20px] border border-white/10"
        onMouseEnter={() => {
          setModal({ active: true });
        }}
        onMouseLeave={() => {
          setModal({ active: false });
        }}
      >
        <Image
          quality={100}
          className={cn(
            "rounded-[20px] object-cover object-left lg:object-left-top group-hover:scale-110 transition-all ease-in-out duration-500",
            className
          )}
          fill
          src={src}
          alt={projectTitle}
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
      <ProjectModal modal={modal} />
    </div>
  );
};

export default ProjectItemTall;
