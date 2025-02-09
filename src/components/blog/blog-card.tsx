import { Post } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import Link from "next/link";

interface Props {
  post: Post;
}

const BlogCard = ({ post }: Props) => {
  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  return (
    <Link className=" group" href={`/blog/${post?.slug?.current}`}>
      <Wrapper className="w-full flex flex-col items-center md:px-0 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] my-4">
        <div className=" w-full border-t py-8 border-t-white/15 group-hover:border-t-white/40 transition-opacity ease-in-out duration-300 flex flex-col px-3 md:px-0">
          <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-between md:h-[44rem] md:gap-20">
            <div className=" w-full flex flex-col items-start h-full">
              <div className=" w-full flex justify-between gap-12">
                <h2 className=" font-cabinetGrotesk tracking-tighter font-semibold text-4xl md:text-6xl text-white uppercase">
                  {post?.title}
                </h2>
                <ArrowRight
                  size={52}
                  className=" shrink-0 flex-nowrap hidden md:block group-hover:-rotate-45 transition-transform duration-300 ease-in-out text-primary"
                />
              </div>
              <div className=" w-full h-[18rem] md:h-[40rem] rounded-xl relative mt-8 overflow-clip">
                <Image
                  className=" object-cover object-top group-hover:scale-110 transition-transform ease-in-out duration-500"
                  fill
                  src={imageUrl}
                  alt={altText}
                />
              </div>
            </div>
            <div className=" mt-4 md:mt-0 w-full flex flex-col items-start h-full justify-between">
              <h4 className="font-archivo line-clamp-3 md:line-clamp-none text-lg md:text-2xl text-white text-start max-w-[56ch]">
                {post?.excerpt}
              </h4>

              <div className=" mt-4 md:mt-0 flex flex-wrap gap-2 md:gap-4 items-center h-full">
                <div className="flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-primary text-xl font-archivo">
                  {post?.tagOne}
                </div>
                <div className="flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-primary text-xl font-archivo">
                  {post?.tagTwo}
                </div>
              </div>
              <div className=" mt-4 md:mt-0 flex items-end justify-between w-full h-full">
                <p className=" text-white font-archivo text-xl opacity-80">
                  {post?.author}
                </p>
                <p className=" text-white font-archivo text-xl opacity-80">
                  {new Date(post?.publishedAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
};

export default BlogCard;
