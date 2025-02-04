"use client";

import { slideUp2 } from "@/anim/anim";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Figma } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import ProjectModal from "./projects-modal";

const AllProjects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const containerRef = useRef(null);

  const isInView = useInView(containerRef);
  const description = "Featured Projects";

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky h-screen justify-center top-0 flex flex-col">
        <h2
          ref={containerRef}
          className="text-white w-full text-center uppercase text-nowrap text-5xl md:text-7xl font-semibold font-cabinetGrotesk"
        >
          {description.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className=" relative overflow-hidden mr-3 inline-flex"
              >
                <motion.span
                  variants={slideUp2}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>
        <div className=" flex items-center overflow-hidden pt-8">
          <motion.div style={{ x }} className="flex gap-12">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const [modal, setModal] = useState({ active: false });

  return (
    <div
      className={`group ${card.id === 1 ? " ml-[1rem] md:ml-[8rem]" : ""}`}
      key={card.id}
    >
      <div
        onMouseEnter={() => {
          setModal({ active: true });
        }}
        onMouseLeave={() => {
          setModal({ active: false });
        }}
        className="relative w-[680px] h-[350px] lg:h-[520px] group rounded-[20px] overflow-hidden"
      >
        <Image
          quality={100}
          className={cn(
            "rounded-[20px] object-cover object-left-top group-hover:scale-110 transition-all ease-in-out duration-500"
          )}
          fill
          src={card.src}
          alt={card.title}
        />
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap gap-4">
          <div className="bg-[#090909] flex items-center text-white font-archivo text-lg md:text-xl border border-[#272727] rounded-full w-fit px-2 md:px-4 py-1 md:py-1.5">
            <Code className="mr-2" /> MVP Development
          </div>
          <div className="bg-[#090909] flex items-center text-white font-archivo text-lg md:text-xl border border-[#272727] rounded-full w-fit px-2 md:px-4 py-1 md:py-1.5">
            <Figma className="mr-2" /> Design
          </div>
          <div className="bg-primary flex items-center text-white font-archivo text-lg md:text-xl rounded-full w-fit px-2 md:px-4 py-1 md:py-1.5">
            {card.year}
          </div>
        </div>
        <h4 className=" mt-4 text-5xl text-white font-cabinetGrotesk uppercase  font-semibold opacity-80 group-hover:opacity-100 transition-opacity ease-in-out duration-75">
          {card.title}
        </h4>
        <p className=" text-lg md:text-xl opacity-80 text-white">
          {card.description}
        </p>
      </div>
      <ProjectModal modal={modal} />
    </div>
  );
};

export default AllProjects;

type CardType = {
  src: string;
  title: string;
  description: string;
  id: number;
  year: string;
};

const cards: CardType[] = [
  {
    src: "/projects/1.png",
    title: "Midas Fintech",
    year: "2022",
    description: "Save money on transactions over $1000",
    id: 1,
  },
  {
    src: "/projects/2.png",
    title: "Fontsnatcher",
    year: "2020",
    description: "Earn up to 5% cashback on all debit card purchases.",
    id: 2,
  },
  {
    src: "/projects/3.png",
    title: "Astrae",
    year: "2024",
    description: "Get instant notifications for every transaction made.",
    id: 3,
  },
  {
    src: "/projects/4.png",
    title: "Hire1.ai",
    year: "2023",
    description:
      "Access exclusive investment opportunities with as little as $100.",
    id: 4,
  },
  {
    src: "/projects/5.png",
    title: "Nova",
    year: "2022",
    description: "Round up your purchases to automatically grow your savings.",
    id: 5,
  },
  {
    src: "/projects/6.png",
    title: "Stakenet",
    year: "2022",
    description: "Lock and unlock your card instantly for added security.",
    id: 6,
  },
];
