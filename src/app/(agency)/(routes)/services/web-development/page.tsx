import { BentoGridSecondDemo } from "@/components/grids/web-development-grid copy";
import Projects from "@/components/projects/projects";
import ServiceClientTestimonials from "@/components/service/service-client-testimonials";
import ServiceHero from "@/components/service/service-hero";
import Wrapper from "@/components/wrapper/wrapper";

const WebDevelopmentPage = () => {
  return (
    <div className="w-full">
      {/* <ServiceHero />
      <div className="w-full flex flex-col items-center bg-black">
        <Projects />
        <ServiceClientTestimonials />
        <Wrapper className="py-20 gap-10 md:gap-16 flex flex-col">
          <h2 className="text-white text-5xl md:text-7xl font-cabinetGrotesk font-bold pr-16 -mt-2 md:pr-0">
            Discover our pricing <br className="hidden md:block" /> and{" "}
            <span className="text-[#4686D9]">get started today.</span>
          </h2>
          <BentoGridSecondDemo />
        </Wrapper>
      </div> */}
    </div>
  );
};

export default WebDevelopmentPage;
