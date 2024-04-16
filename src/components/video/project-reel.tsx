"use client";

import { useState } from "react";
import Modal from "./video-modal";

const ProjectReel = ({ title, src }: { title: string; src: string }) => {
  const [modal, setModal] = useState({ active: false });
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true });
      }}
      onMouseLeave={() => {
        setModal({ active: false });
      }}
      className="h-fit bg-black cursor-none z-[2147483003]"
    >
      <div className="absolute z-10 pt-10 md:pt-10 md:mt-5 px-3 md:px-20 w-full flex flex-row justify-between items-center font-archivo text-xl">
        <p className="text-white">{title}</p>
        <p className="text-white">® 2024</p>
      </div>
      <video
        autoPlay
        muted
        loop
        className="min-w-screen h-[70dvh] md:h-[125vh] object-cover absolute"
      >
        <source src={src} type="video/mp4" />
      </video>
      <Modal modal={modal} />
    </div>
  );
};

export default ProjectReel;
