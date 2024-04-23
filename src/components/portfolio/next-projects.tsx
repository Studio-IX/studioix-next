import ProjectItem from "../projects/project-item";
import ProjectItemTall from "../projects/project-item-tall";
import Wrapper from "../wrapper/wrapper";

const NextProjects = () => {
  return (
    <div className="w-full mt-80 mb-80">
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-7xl text-white text-start w-full md:mt-0">
          Next Projects
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10">
          <ProjectItemTall
            src="/projects/5.png"
            className=" lg:object-left-bottom"
            projectTitle="Chatly"
          />
          <ProjectItem
            className=" object-center"
            src="/projects/nova.png"
            projectTitle="Nova"
          />
        </div>
        <div className="w-full flex flex-col items-end md:mt-[-16vw] lg:flex-row gap-10">
          <ProjectItem src="/projects/1.png" projectTitle="Midas" />
          <ProjectItemTall
            className=" lg:object-center"
            src="/projects/6.png"
            projectTitle="Nixon"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default NextProjects;
