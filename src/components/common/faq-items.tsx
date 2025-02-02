import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqItems() {
  return (
    <Accordion
      type="single"
      className="w-full md:max-w-4xl mt-10 md:mb-20 border border-[#272727] rounded-2xl px-2 py-6 bg-[#090909]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is your development process like?
        </AccordionTrigger>
        <AccordionContent>
          Our agile development process is structured into clear phases:
          discovery, design, development, and deployment. We maintain daily
          communication through Slack, weekly progress updates, and regular demo
          sessions to ensure alignment with your vision.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What technologies do you work with?</AccordionTrigger>
        <AccordionContent>
          We specialize in modern web technologies including React, Next.js,
          TypeScript, and Node.js. Our tech stack is carefully chosen to provide
          scalable, performant solutions that meet current industry standards
          and future-proof your application.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What do you need to start a project?
        </AccordionTrigger>
        <AccordionContent>
          To begin, we need your project brief, brand guidelines (if available),
          and content requirements. During our initial consultation, we'll
          discuss your goals, timeline, and budget to ensure we can deliver the
          best possible solution for your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you provide post-launch support?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer comprehensive post-launch support packages. This
          includes bug fixes, performance monitoring, security updates, and
          ongoing optimizations. We're committed to ensuring your product's
          long-term success beyond the initial launch.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Are there any hidden costs?</AccordionTrigger>
        <AccordionContent>
          No, our pricing is completely transparent. The project quote includes
          all development, testing, and deployment costs. Any additional
          requirements or third-party services will be discussed and approved by
          you before implementation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          When does the six-week timeline begin?
        </AccordionTrigger>
        <AccordionContent>
          The timeline starts after project kickoff and receipt of all required
          materials. This includes signed contracts, initial payment, and
          project assets. We'll provide a detailed schedule during kickoff to
          ensure clear expectations and milestones.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Book a consultation through our website or contact form. We'll
          schedule a discovery call to discuss your project needs. If we're a
          good fit, we'll provide a proposal and can typically begin within 1-2
          weeks after completing the onboarding process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
