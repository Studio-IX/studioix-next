"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Read = () => {
  return (
    <Link href="/#read">
      <div className="flex items-center gap-4 z-[214748300] mt-12">
        <div className=" h-12 w-7 rounded-full border-[2px] border-white flex items-start justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className=" w-[2.5px] h-4 mt-2 bg-white rounded-full"
          />
        </div>
        <p className=" uppercase font-archivo text-white hidden md:block md:text-lg font-normal">
          Read
        </p>
      </div>
    </Link>
  );
};

export default Read;
