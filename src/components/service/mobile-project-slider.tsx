import { motion } from "framer-motion";
import Image from "next/image";

const ProjectSlider = () => {
  return (
    <div className="bg-black md:hidden">
      <div className="p-4 overflow-x-hidden relative">
        <div className="flex items-center mb-4">
          <ProjectsList list={testimonials.top} duration={100} />
          <ProjectsList list={testimonials.top} duration={100} />
          <ProjectsList list={testimonials.top} duration={100} />
        </div>
        <div className="flex items-center mb-4">
          <ProjectsList list={testimonials.middle} duration={60} reverse />
          <ProjectsList list={testimonials.middle} duration={60} reverse />
          <ProjectsList list={testimonials.middle} duration={60} reverse />
        </div>
      </div>
    </div>
  );
};

const ProjectsList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[300px] h-[300px] grid grid-cols-[7rem,_1fr] rounded-2xl overflow-hidden relative"
          >
            <Image
              fill
              alt="Project image"
              src={t.img}
              className="object-cover object-left"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "/projects/pclub.png",
    },
    {
      id: 2,
      img: "/projects/quotasignal.png",
    },
    {
      id: 3,
      img: "/projects/pclub.png",
    },
    {
      id: 4,
      img: "/projects/quotasignal.png",
    },
    {
      id: 5,
      img: "/projects/pclub.png",
    },
    {
      id: 6,
      img: "/projects/quotasignal.png",
    },
  ],
  middle: [
    {
      id: 1,
      img: "/projects/pclub.png",
    },
    {
      id: 2,
      img: "/projects/quotasignal.png",
    },
    {
      id: 3,
      img: "/projects/pclub.png",
    },
    {
      id: 4,
      img: "/projects/quotasignal.png",
    },
    {
      id: 5,
      img: "/projects/pclub.png",
    },
    {
      id: 6,
      img: "/projects/quotasignal.png",
    },
  ],
};

export default ProjectSlider;
