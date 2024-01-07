import Cards from "@/components/common/cards";
import Pricing from "@/components/pricing/pricing";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <div className="h-screen bg-[#121212] p-10"></div>
      <Cards />
      <Projects />
      <Pricing />
    </div>
  );
}
