import Cards from "@/components/common/cards";
import { TabsFAQ } from "@/components/common/faq";
import Video from "@/components/video/video-reel";
import Pricing from "@/components/pricing/pricing";
import Projects from "@/components/projects/projects";
import AgencyServices from "@/components/common/services";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <div className="h-screen bg-[#0A0A0A] p-10"></div>
      <Video />
      <div className="h-screen bg-[#0A0A0A] p-10"></div>
      <div className="h-screen bg-[#0A0A0A] p-10 md:rounded-t-[8rem]"></div>
      <div>
        <Cards />
      </div>
      <Projects />
      <AgencyServices />
      <Pricing />
      <TabsFAQ />
    </div>
  );
}
