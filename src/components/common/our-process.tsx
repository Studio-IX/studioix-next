import { Timeline } from "@/components/ui/timeline";
const OurProcess = () => {
  const data = [
    {
      title: "Discovery & Strategy",
      step: "Step 01",
      description:
        "We analyze your MVP concept, define core features, and create a lean development strategy that brings your product to market quickly while maximizing impact.",
    },
    {
      title: "Design & Prototyping",
      step: "Step 02",
      description:
        "Our team crafts intuitive user interfaces and creates interactive prototypes to validate your MVP's core functionality before full development begins.",
    },
    {
      title: "Build & Iterate",
      step: "Step 03",
      description:
        "We develop your MVP using modern tech stack, focusing on essential features while maintaining flexibility for future scaling and improvements.",
    },
    {
      title: "Launch & Scale",
      step: "Step 04",
      description:
        "We help launch your MVP to market, gather user feedback, and implement data-driven improvements to prepare your product for growth and expansion.",
    },
  ];
  return (
    <div id="how-it-works" className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default OurProcess;
