import Pricing from "@/components/pricing/pricing";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <Projects />
      <Pricing />
    </div>
  );
}
