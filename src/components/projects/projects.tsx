import Link from "next/link";
import Rounded from "../common/rounded-button";
import SectionTitle from "../common/section-title";
import Wrapper from "../wrapper/wrapper";
import ProjectItem from "./project-item";
import ProjectItemLarge from "./project-item-large";
import ProjectItemTall from "./project-item-tall";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-black pt-[12rem] md:pt-[8rem] lg:pt-[20rem] w-full pb-[15rem] lg:pb-[25rem]"
    >
      <Wrapper className="flex flex-col w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem] gap-10 lg:gap-12">
        {/* <SectionTitle text="PREVIOUS PROJECTS" /> */}
        <h2 className="uppercase font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white text-center md:mt-0">
          Featured Projects
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:mt-10">
          <ProjectItem src="/projects/pclub.png" projectTitle="Pclub.io" />
          <ProjectItem
            src="/projects/quotasignal.png"
            projectTitle="QuotaSignal"
          />
        </div>
        <div className="w-full md:mt-12">
          <Link href="/portfolio/midas">
            <ProjectItemLarge
              src="/gallery/liftinfluence_showcase.png"
              projectTitle="LiftInfluence"
            />
          </Link>
        </div>
        <div className="w-full flex flex-col md:mt-12 lg:flex-row gap-10">
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
      <Link href="/portfolio">
        <motion.div className=" flex flex-col justify-center w-full items-center mt-[8rem] md:mt-[15rem]">
          <Rounded backgroundColor={"#334BD3"} className="projsButton w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
            <div className="flex flex-col items-center justify-center">
              <p className=" font-archivo uppercase">View Portfolio</p>
            </div>
          </Rounded>
        </motion.div>
      </Link>
    </div>
  );
};

export default Projects;
