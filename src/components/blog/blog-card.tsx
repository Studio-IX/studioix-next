import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const BlogCard = ({
  title,
  excerpt,
  src,
  writer,
  date,
  tagOne,
  tagTwo,
}: {
  title: string;
  excerpt: string;
  src: string;
  writer: string;
  date: string;
  tagOne: string;
  tagTwo: string;
}) => {
  return (
    <Wrapper className="w-full flex flex-col items-center md:px-0 group lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] my-4">
      <div className=" w-full border-t py-8 border-t-white/50 group-hover:border-t-white/100 transition-opacity ease-in-out duration-300 flex flex-col px-3 md:px-0">
        <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-between md:h-[34rem] md:gap-20">
          <div className=" w-full flex flex-col items-start h-full">
            <div className=" w-full flex justify-between gap-12">
              <h2 className=" font-cabinetGrotesk tracking-tighter font-semibold text-4xl md:text-6xl text-white uppercase">
                {title}
              </h2>
              <ArrowRight
                size={100}
                className=" hidden md:block group-hover:-rotate-45 transition-transform duration-500 ease-in-out text-primary"
              />
            </div>
            <div className=" w-full h-[18rem] md:h-[28rem] rounded-xl relative mt-8 overflow-clip">
              <Image
                className=" object-cover object-top group-hover:scale-110 transition-transform ease-in-out duration-500"
                fill
                src={src}
                alt={title}
              />
            </div>
          </div>
          <div className=" mt-4 md:mt-0 w-full flex flex-col items-start h-full justify-between">
            <h4 className="font-archivo line-clamp-3 md:line-clamp-none text-lg md:text-2xl text-white text-start max-w-[56ch]">
              {excerpt}
            </h4>

            <div className=" mt-4 md:mt-0 flex flex-wrap gap-2 md:gap-4 items-center h-full">
              <div className="flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-primary text-xl font-archivo">
                {tagOne}
              </div>
              <div className="flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-primary text-xl font-archivo">
                {tagTwo}
              </div>
            </div>
            <div className=" mt-4 md:mt-0 flex items-end justify-between w-full h-full">
              <p className=" text-white font-archivo text-xl opacity-80">
                {writer}
              </p>
              <p className=" text-white font-archivo text-xl opacity-80">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCard;
