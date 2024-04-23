import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqItems() {
  return (
    <Accordion type="multiple" className="w-full md:max-w-4xl mt-10 md:mb-20">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Why wouldn&apos;t I just hire a designer or developer?
        </AccordionTrigger>
        <AccordionContent>
          At Studio IX, we value collaboration and believe in working closely
          with our partners throughout the project lifecycle. By choosing us,
          you benefit from a cohesive team approach, encompassing design,
          development, and project management expertise for a streamlined and
          comprehensive solution.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What is the turn around time of most tasks?
        </AccordionTrigger>
        <AccordionContent>
          Turnaround time for most tasks typically depends on the scope and
          complexity of the project, but we strive to deliver efficient and
          timely results, communicating transparently with partners throughout
          the process.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What if I just want a single website?
        </AccordionTrigger>
        <AccordionContent>
          If you&apos;re seeking to have just a single website developed, Studio
          IX can still accommodate your needs efficiently, offering tailored
          solutions to meet your specific requirements and goals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          What if I don&apos;t like the design?
        </AccordionTrigger>
        <AccordionContent>
          If you&apos;re not satisfied with the initial design, we offer
          revision rounds to ensure we meet your expectations, working closely
          with you to refine the design until it aligns perfectly with your
          vision and preferences at no additional cost.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Why does Studio IX sound too good to be true?
        </AccordionTrigger>
        <AccordionContent>
          Studio IX&apos;s dedication to excellence, experienced team, and
          commitment to client satisfaction may seem remarkable, but it&apos;s a
          result of our genuine passion for what we do, years of expertise, and
          a track record of successful projects that speak to the quality of our
          services.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
