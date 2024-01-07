import SectionTitle from "@/components/common/section-title";
import Projects from "@/components/projects/projects";
import ServiceClientTestimonials from "@/components/services/service-client-testimonials";
import ServiceHero from "@/components/services/service-hero";

const WebDevelopmentPage = () => {
  return (
    <div>
      <ServiceHero />
      <div className="w-full flex flex-col items-center bg-[#121212] py-32">
        <SectionTitle text="PREVIOUS WEB DEV PROJECTS" />
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center mt-6">
          Featured Projects
        </h2>
        <Projects />
        <ServiceClientTestimonials />
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
