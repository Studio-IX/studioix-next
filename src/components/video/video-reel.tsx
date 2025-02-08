"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./video-modal";

const Video = () => {
  const [modal, setModal] = useState({ active: false });
  return (
    <div
      id="agency-reel"
      onMouseEnter={() => {
        setModal({ active: true });
      }}
      onMouseLeave={() => {
        setModal({ active: false });
      }}
      className="h-fit bg-black cursor-none"
    >
      <div className="absolute z-20 pt-10 md:pt-16 md:mt-5 px-3 md:px-20 lg:px-40 w-full flex flex-row justify-between items-center font-archivo text-base md:text-xl">
        <p className="text-white text-lg font-archivo md:text-xl">
          Studio IX Showreel
        </p>
        <p className="text-white text-lg font-archivo md:text-xl">® 2025</p>
      </div>
      <div className="min-w-screen h-[90dvh] md:h-[125vh] object-cover relative">
        <div className=" inset-0 absolute bg-black/60 z-10" />
        <Image
          fill
          unoptimized
          src="/gif/showcase.gif"
          className=" object-cover"
          alt="Showcase"
        />
      </div>
      <Modal modal={modal} />
    </div>
  );
};

export default Video;
