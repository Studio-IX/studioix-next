"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Frame } from "lucide-react";

import Image from "next/image";
import { testimonials } from "@/constants/data";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="flex flex-col h-fit w-full items-end">
          <div className=" w-full h-full flex items-start gap-20 justify-between mt-12">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-[55%] h-[32rem]"
            >
              <Image
                fill
                quality={100}
                src={testimonial.image}
                className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all ease-in-out duration-500"
                alt={testimonial.name}
              />
            </motion.div>

            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col h-[32rem] justify-between"
            >
              <div>
                <h3 className="font-cabinetGrotesk font-medium text-4xl uppercase text-white">
                  {testimonial.name}
                </h3>
                <h4 className="font-archivo text-xl text-white opacity-80">
                  {testimonial.role}
                </h4>
              </div>

              <motion.h2
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className="uppercase w-full font-cabinetGrotesk tracking-tighter font-medium text-white text-5xl max-w-3xl text-start "
              >
                “ {testimonial.review} ”
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
      <div className="flex items-center justify-between w-full mt-6 md:mt-12 bg-black z-10">
        <div className="flex items-center gap-2">
          <div
            onClick={prevTestimonial}
            className=" h-12 aspect-square rounded-full bg-[#1E1E1E] hover:bg-primary cursor-pointer text-white flex items-center justify-center"
          >
            <ChevronLeft />
          </div>
          <div
            onClick={nextTestimonial}
            className=" h-12 aspect-square rounded-full bg-[#1E1E1E] hover:bg-primary cursor-pointer text-white flex items-center justify-center"
          >
            <ChevronRight />
          </div>
        </div>

        <div className="flex items-center gap-1">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-10 bg-white" : "w-5 bg-[#1E1E1E]"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
