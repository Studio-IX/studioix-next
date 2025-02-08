"use client";

import { slideUp2 } from "@/anim/anim";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Figma } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

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
    <section
      id="portfolio"
      ref={targetRef}
      className="relative h-[300vh] w-full"
    >
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const startImageCycle = () => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === card.images.length - 1 ? 0 : prev + 1
      );
    }, 400);
    setIntervalId(interval);
  };

  const stopImageCycle = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
    setCurrentImageIndex(0);
  };

  return (
    <div
      onMouseEnter={startImageCycle}
      onMouseLeave={stopImageCycle}
      className={`group ${card.id === 1 ? "ml-[1rem] md:ml-[8rem]" : ""}`}
    >
      <div className="relative w-[680px] h-[350px] lg:h-[520px] group rounded-[20px] overflow-hidden">
        <Image
          quality={100}
          className={cn(
            "rounded-[20px] object-cover object-left-top group-hover:scale-110 transition-all ease-in-out duration-500"
          )}
          fill
          src={card.images[currentImageIndex]}
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
    </div>
  );
};

export default AllProjects;

type CardType = {
  images: string[];
  title: string;
  description: string;
  id: number;
  year: string;
};

const cards: CardType[] = [
  {
    images: [
      "/projects/astrae/1.png",
      "/projects/astrae/2.png",
      "/projects/astrae/3.png",
    ],
    title: "Astrae",
    year: "2024",
    description:
      "Beautifully crafted react/next.js templates for stunning and premium websites.",
    id: 1,
  },
  {
    images: [
      "/projects/midas/1.png",
      "/projects/midas/2.png",
      "/projects/midas/3.png",
    ],
    title: "Midas Fintech",
    year: "2023",
    description:
      "Midas is the best way to create virtual debit cards powered by mobile money. All in one fin tech app that solves all your card needs.",
    id: 2,
  },
  {
    images: [
      "/projects/stakenet/1.png",
      "/projects/stakenet/2.png",
      "/projects/stakenet/3.png",
    ],
    title: "Stakenet",
    year: "2023",
    description:
      "Predict, connect and win with Stakenet. Share your predictions, compete with others",
    id: 3,
  },
  {
    images: [
      "/projects/nova/3.png",
      "/projects/nova/2.png",
      "/projects/nova/1.png",
    ],
    title: "Nova",
    year: "2022",
    description:
      "Nova is your personalized AI companion for instant, 24/7 conversations. Craft your AI friend and chat anytime, anywhere.",
    id: 4,
  },
  {
    images: [
      "/projects/hire1/3.png",
      "/projects/hire1/1.png",
      "/projects/hire1/2.png",
    ],
    title: "Hire1.ai",
    year: "2022",
    description:
      "Get the best 1% of Google & Adobe Developers, carefully vetted by both AI and people.",
    id: 5,
  },
  {
    images: [
      "/projects/fontsnatcher/1.png",
      "/projects/fontsnatcher/2.png",
      "/projects/fontsnatcher/3.png",
    ],
    title: "Fontsnatcher",
    year: "2020",
    description:
      "Fontsnatcher is a revolutionary way to discover and find fonts used on your favorite websites and across the whole web.",
    id: 6,
  },
];
