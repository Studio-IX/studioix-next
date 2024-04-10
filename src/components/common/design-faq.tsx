"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const DesignFaq = () => {
  const [selected] = useState(TABS[0]);
  return (
    <div>
      <Questions selected={selected} />
    </div>
  );
};

const Questions = ({ selected }: { selected: string }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <AnimatePresence mode="wait">
        {Object.entries(QUESTIONS).map(([tab, questions]) => {
          return selected === tab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "backIn",
              }}
              className="space-y-4"
              key={tab}
            >
              {questions.map((q, idx) => (
                <Question key={idx} {...q} />
              ))}
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </div>
  );
};

const Question = ({ question, answer }: QuestionType) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className={`rounded-2xl border-[1px] border-[#1E1E1E] mx-4 md:mx-0 px-5 md:px-8 transition-colors ${
        open ? "bg-[#101010]" : "bg-[#0D0D0D]"
      }`}
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4"
      >
        <span
          className={`text-left pt-6 md:pt-6 text-2xl md:text-3xl font-clashGrotesk font-normal transition-colors ${
            open ? "text-[#C4C4C4] pb-6" : "text-[#cecece] pb-6"
          }`}
        >
          {question}
        </span>
        <motion.span
          className="mt-1"
          variants={{
            open: {
              rotate: "45deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FiPlus
            className={`text-2xl md:text-3xl transition-colors ${
              open ? "text-[#C4C4C4]" : "text-[#cecece]"
            }`}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <p className="text-[#7e7e7e] text-lg md:text-xl font-clashGrotesk pb-2 md:pb-6">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

type QuestionType = {
  question: string;
  answer: string;
};

const TABS = ["01"];

const QUESTIONS = {
  "01": [
    {
      question: "Why not hire a full-time designer?",
      answer:
        "I specialize in front-end technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js. For back-end, I'm proficient in Node.js, with experience in databases such as MongoDB and MySQL. In design, I use Figma.",
    },
    {
      question: "What is the average turnaround time?",
      answer:
        "I believe in open communication throughout the project. Whether working solo or in a team, I prioritize regular updates, feedback sessions, and collaboration tools like email, Slack, or project management platforms such as Trello or Asana.",
    },
    {
      question: "What does unlimited requests mean?",
      answer:
        "Yes, I provide ongoing support and maintenance to ensure projects remain functional, secure, and up-to-date. From bug fixes to feature additions, I offer flexible support plans tailored to client needs, ensuring continued value even post-launch.",
    },
    {
      question: "How does the pause feature work?",
      answer:
        "My work stands out due to a blend of technical expertise, creativity, and attention to detail. I deliver innovative solutions by staying updated on design and development trends.",
    },
    {
      question: "How does the pause feature work?",
      answer:
        "My work stands out due to a blend of technical expertise, creativity, and attention to detail. I deliver innovative solutions by staying updated on design and development trends.",
    },
    {
      question: "How does the pause feature work?",
      answer:
        "My work stands out due to a blend of technical expertise, creativity, and attention to detail. I deliver innovative solutions by staying updated on design and development trends.",
    },
  ],
};

export default DesignFaq;
