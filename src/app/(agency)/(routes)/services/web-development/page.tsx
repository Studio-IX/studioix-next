import TerminalContact from "@/components/common/contact-form-terminal";
import SectionTitle from "@/components/common/section-title";
import Projects from "@/components/projects/projects";
import ServiceClientTestimonials from "@/components/service/service-client-testimonials";
import ServiceHero from "@/components/service/service-hero";
import Wrapper from "@/components/wrapper/wrapper";

const WebDevelopmentPage = () => {
  return (
    <div>
      <ServiceHero />
      <div className="w-full flex flex-col items-center bg-[#0A0A0A] py-32">
        <SectionTitle text="PREVIOUS WEB DEV PROJECTS" />
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center md:mt-6">
          Featured Projects
        </h2>
        <Projects />
        <ServiceClientTestimonials />
        <Wrapper className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col items-start w-full py-10">
            <h2 className="font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center mt-6">
              Get <span className=" italic text-[#4686d9]">Started</span>
            </h2>
            <p className=" font-archivo text-white/60 max-w-md text-lg mt-2">
              This is your first step in becoming fresh! Fill out the form,
              we&apos;ll take a closer look then be in touch to get things
              started.
            </p>
          </div>
          <div className="w-full">
            <TerminalContact />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
