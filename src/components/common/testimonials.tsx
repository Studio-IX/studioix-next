import { Separator } from "@/components/ui/separator";
import TestimonialCarousel from "./testimonial-carousel";
import Wrapper from "../wrapper/wrapper";

const Testimonials = () => {
  return (
    <section className=" py-20">
      <Wrapper
        className={`flex flex-col  w-full px-3 md:px-20 sticky pb-12 top-20 md:top-40 lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]`}
      >
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center mt-6">
          Client Reviews
        </h2>
        <p className=" font-archivo max-w-[52ch] mx-auto text-lg md:text-xl text-white/80 text-center w-full mt-2">
          We&apos;ve worked with innovative startups to create impactful MVPs.
          Read about their experiences working with Studio IX.
        </p>
        <div className=" w-full md:py-8">
          <TestimonialCarousel />
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
