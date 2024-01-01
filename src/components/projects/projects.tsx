import PrimaryButton from "../common/primary-button";
import Wrapper from "../wrapper/wrapper";
import ProjectItem from "./project-item";
import ProjectItemLarge from "./project-item-large";
import ProjectItemTall from "./project-item-tall";

const Projects = () => {
  return (
    <div className="bg-[#121212] py-20 w-full pb-[40rem]">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-20">
        <div className="w-full flex flex-row gap-10">
          <ProjectItem src="/projects/pclub.png" projectTitle="Pclub.io" />
          <ProjectItem
            src="/projects/quotasignal.png"
            projectTitle="QuotaSignal"
          />
        </div>
        <div className="w-full">
          <ProjectItemLarge
            src="/projects/liftinfluence.png"
            projectTitle="LiftInfluence"
          />
        </div>
        <div className="w-full flex flex-row gap-10">
          <ProjectItemTall src="/projects/pclub.png" projectTitle="Pclub.io" />
          <ProjectItem
            src="/projects/quotasignal.png"
            projectTitle="QuotaSignal"
          />
        </div>

        <div>
          <PrimaryButton text="See All Projects" link="" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Projects;
