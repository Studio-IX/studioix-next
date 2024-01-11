import PrimaryButton from "../common/primary-button";
import SectionTitle from "../common/section-title";
import Wrapper from "../wrapper/wrapper";
import ProjectItem from "./project-item";
import ProjectItemLarge from "./project-item-large";
import ProjectItemTall from "./project-item-tall";

const Projects = () => {
  return (
    <div className="bg-[#0A0A0A] pt-[12rem] md:pt-[8rem] w-full pb-[40rem]">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-20">
        <SectionTitle text="PREVIOUS WEB DEV PROJECTS" />
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-center md:mt-6">
          Featured Projects
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <ProjectItem src="/projects/pclub.png" projectTitle="Pclub.io" />
          <ProjectItem
            src="/projects/quotasignal.png"
            projectTitle="QuotaSignal"
          />
        </div>
        <div className="w-full">
          <ProjectItemLarge
            src="/gallery/liftinfluence_showcase.png"
            projectTitle="LiftInfluence"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <ProjectItemTall src="/projects/pclub.png" projectTitle="Pclub.io" />
          <ProjectItem
            src="/projects/quotasignal.png"
            projectTitle="QuotaSignal"
          />
        </div>

        <div className="mt-16 md:mt-10">
          <PrimaryButton text="See All Projects" link="" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
