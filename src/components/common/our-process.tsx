import { Timeline } from "@/components/ui/timeline";
const OurProjcess = () => {
  const data = [
    {
      title: "Discovery & Strategy",
      step: "Step 01",
      description:
        "We dive deep into your vision, goals, and challenges to craft a tailored strategy that sets the foundation for success.",
    },
    {
      title: "Design & Prototyping",
      step: "Step 02",
      description:
        "Our team creates sleek, high-converting designs and interactive prototypes to bring your ideas to life before development begins.",
    },
    {
      title: "Build & Iterate",
      step: "Step 03",
      description:
        "We develop scalable, high-performance solutions while continuously refining based on user feedback and data-driven insights.",
    },
    {
      title: "Launch & Scale",
      step: "Step 04",
      description:
        "Our team creates sleek, high-converting designs and interactive prototypes to bring your ideas to life before development begins.",
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default OurProjcess;
