import Read from "@/components/blog/read";
import BackToTop from "@/components/common/back-to-top";
import Cta from "@/components/common/cta";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { SmoothScroll } from "@/components/common/smooth-scroll";
import Wrapper from "@/components/wrapper/wrapper";
import { getPost, getPosts } from "@/hooks/get-blogs";
import { Post } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft } from "lucide-react";
import { PortableText, SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const response: Post = await getPost(params?.slug);
    const imageUrl = urlFor(response?.mainImage?.asset?._ref).url();
    const baseUrl = "https://studioix.agency";

    const fullUrl = `${baseUrl}/blog/${params.slug}`;

    if (!response) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }

    return {
      title: `${response?.title} — Studio IX`,
      description: `${response?.excerpt}`,
      openGraph: {
        title: response?.title,
        description: response?.excerpt,
        images: [imageUrl],
        siteName: "Studio IX",
        url: `${fullUrl}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${response?.title} — Studio IX`,
        description: response?.excerpt,
        images: [imageUrl],
        creator: "@studioixagency",
      },
      icons: "/favicon.ico",
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  try {
    const response: Post[] = await getPosts();

    if (response.length === 0) return [];

    return response.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);
  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  return (
    <div>
      <SmoothScroll />
      <ScrollProgress />
      <BackToTop />
      <section
        style={{
          backgroundImage: 'url("/images/stars.png")',
        }}
        className="w-full h-fit md:min-h-[50vh] relative pb-12 md:pb-12"
      >
        <div className=" w-full flex flex-col items-center pt-40 md:max-w-5xl mx-auto px-3 md:px-0">
          <Link href="/blog">
            <div className="flex items-center w-full justify-center gap-4 mb-6 md:mb-6">
              <ArrowLeft className=" text-primary" />
              <p className=" text-primary font-archivo text-xl uppercase">
                Back to blog
              </p>
            </div>
          </Link>
          <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-8xl text-white text-center md:mt-2 tracking-tighter">
            Why Webflow is the best platform for businesses in 2025
          </h2>

          <div className=" w-full flex items-center gap-4 uppercase justify-center mt-4">
            <p className=" text-white font-archivo text-xl opacity-80">
              09 February 2025
            </p>
            <p className=" text-white font-archivo text-xl opacity-80 hidden md:block">
              {post?.author}
            </p>
            <p className=" text-white font-archivo text-xl opacity-80">
              {post?.readingTime}
            </p>
          </div>

          <Read />
        </div>
        <Wrapper className="w-full mt-8 md:mt-12 flex flex-row justify-between items-center md:px-0 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
          <div className=" w-full h-[20rem] md:h-[44rem] relative rounded-2xl group overflow-clip">
            <Image
              className=" object-cover object-top group-hover:scale-110 transition-transform ease-in-out duration-500"
              fill
              src={imageUrl}
              alt={altText}
            />
          </div>
        </Wrapper>
        <div
          id="read"
          className=" px-3 md:px-0 mt-12 md:mt-28 prose prose-lg md:prose-xl mx-auto text-justify max-w-4xl prose-mb-2 font-archivo prose-a:text-primary prose-blockquote:text-white/80 prose-lead:text-white prose-li:marker:text-white prose-ol:text-white prose-ul:text-white prose-code:bg-[#262626] prose-code:text-white prose-p:text-white/80 prose-p:font-normal prose-li:text-white prose-strong:text-white prose-headings:text-white"
        >
          <PortableText
            value={post?.body}
            components={portableTextComponents}
          />
        </div>
      </section>

      <Cta />
    </div>
  );
};

interface PortableTextImageProps {
  value: SanityImageAssetDocument;
}

const portableTextComponents = {
  types: {
    image: ({ value }: PortableTextImageProps) => (
      <div className=" w-full h-[18rem] md:h-[32rem] relative mb-20">
        <Image
          fill
          className=" object-cover border border-white/10 rounded-xl"
          src={urlFor(value).url()}
          quality={100}
          alt="Post"
        />
      </div>
    ),
  },
};

export default BlogDetail;
