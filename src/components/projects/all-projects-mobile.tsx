import { cn } from "@/lib/utils";
import { Code, Figma } from "lucide-react";
import Image from "next/image";

const AllProjectsMobile = () => {
  return (
    <section className=" w-full px-3">
      <h2 className="text-white text-center uppercase text-5xl font-semibold font-cabinetGrotesk">
        Featured Projects
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
    src: "/projects/1.png",
    title: "Midas Fintech",
    year: "2022",
    description: "Save money on transactions over $1000",
    id: 1,
  },
  {
    src: "/projects/2.png",
    title: "Fontsnatcher",
    year: "2020",
    description: "Earn up to 5% cashback on all debit card purchases.",
    id: 2,
  },
  {
    src: "/projects/3.png",
    title: "Astrae",
    year: "2024",
    description: "Get instant notifications for every transaction made.",
    id: 3,
  },
  {
    src: "/projects/4.png",
    title: "Hire1.ai",
    year: "2023",
    description:
      "Access exclusive investment opportunities with as little as $100.",
    id: 4,
  },
  {
    src: "/projects/5.png",
    title: "Nova",
    year: "2022",
    description: "Round up your purchases to automatically grow your savings.",
    id: 5,
  },
  {
    src: "/projects/6.png",
    title: "Stakenet",
    year: "2022",
    description: "Lock and unlock your card instantly for added security.",
    id: 6,
  },
];
