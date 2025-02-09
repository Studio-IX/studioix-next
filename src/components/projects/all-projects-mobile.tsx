import { cn } from "@/lib/utils";
import { Code, Figma } from "lucide-react";
import Image from "next/image";

const AllProjectsMobile = () => {
  return (
    <section id="portfolio-mobile" className=" w-full px-3">
      <h2 className="text-white text-center uppercase text-5xl font-semibold font-cabinetGrotesk">
        Our Projects
      </h2>
      <div className="flex flex-col gap-6 mt-8">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="">
      <div className="relative w-full h-[22rem] rounded-2xl overflow-hidden">
        <Image
          quality={100}
          className={cn(
            "rounded-2xl object-cover object-left-top group-hover:scale-110 transition-all ease-in-out duration-500"
          )}
          fill
          src={card.src}
          alt={card.title}
        />
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <div className="bg-[#090909] flex items-center text-white font-archivo text-lg  border border-[#272727] rounded-full w-fit px-4 py-1">
            <Code className="mr-2" /> MVP
          </div>
          <div className="bg-[#090909] flex items-center text-white font-archivo text-lg  border border-[#272727] rounded-full w-fit px-4 py-1">
            <Figma className="mr-2" /> Design
          </div>
          <div className="bg-primary flex items-center text-white font-archivo text-lg  rounded-full w-fit px-4 py-1">
            {card.year}
          </div>
        </div>
        <h4 className=" mt-4 text-3xl text-white font-cabinetGrotesk uppercase  font-semibold opacity-80 group-hover:opacity-100 transition-opacity ease-in-out duration-75">
          {card.title}
        </h4>
        <p className=" text-lg opacity-80 text-white">{card.description}</p>
      </div>
    </div>
  );
};

export default AllProjectsMobile;

type CardType = {
  src: string;
  title: string;
  description: string;
  id: number;
  year: string;
};

const cards: CardType[] = [
  {
    src: "/projects/astrae/1.png",
    title: "Astrae",
    year: "2024",
    description:
      "Beautifully crafted react/next.js templates for stunning and premium websites.",
    id: 1,
  },
  {
    src: "/projects/midas/3.png",
    title: "Midas Fintech",
    year: "2023",
    description:
      "Midas is the best way to create virtual debit cards powered by mobile money. All in one fin tech app that solves all your card needs.",
    id: 2,
  },
  {
    src: "/projects/stakenet/1.png",
    title: "Stakenet",
    year: "2023",
    description:
      "Predict, connect and win with Stakenet. Share your predictions, compete with others",
    id: 3,
  },
  {
    src: "/projects/nova/3.png",
    title: "Nova",
    year: "2022",
    description:
      "Nova is your personalized AI companion for instant, 24/7 conversations. Craft your AI friend and chat anytime, anywhere.",
    id: 4,
  },
  {
    src: "/projects/hire1/1.png",
    title: "Hire1.ai",
    year: "2022",
    description:
      "Get the best 1% of Google & Adobe Developers, carefully vetted by both AI and people.",
    id: 5,
  },
  {
    src: "/projects/fontsnatcher/1.png",
    title: "Fontsnatcher",
    year: "2020",
    description:
      "Fontsnatcher is a revolutionary way to discover and find fonts used on your favorite websites and across the whole web.",
    id: 6,
  },
];
