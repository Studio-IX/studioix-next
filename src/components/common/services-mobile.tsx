import Link from "next/link";
import PlusServices from "./plus";
import PrimaryButton from "./primary-button";

const ServiceMobile = ({
  href,
  title,
  number,
  sub1,
  sub2,
  sub3,
  description,
}: {
  href: string;
  title: string;
  number: string;
  sub1: string;
  sub2: string;
  sub3: string;
  description: string;
}) => {
  return (
    <Link className="flex w-full" href={href}>
      <div className="border-t border-b border-t-[#292b3d] border-b-[#292b3d] px-3 py-14 bg-black">
        <div className="flex flex-col items-start">
          <h2 className="text-start text-white font-cabinetGrotesk font-semibold text-6xl">
            {title}
          </h2>
          <p className=" font-archivo text-lg text-white/80 text-start mt-2.5">
            {description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 pb-10 pt-10">
            <div className="flex flex-col items-start gap-2.5" id="sub">
              <PlusServices />
              <p className="font-archivo font-medium uppercase text-lg text-start text-white">
                {sub1}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2.5" id="sub">
              <PlusServices />
              <p className=" font-archivo font-medium uppercase text-lg text-start text-white">
                {sub2}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2.5" id="sub">
              <PlusServices />
              <p className=" font-archivo font-medium uppercase text-lg text-start text-white">
                {sub3}
              </p>
            </div>
          </div>
          <div className="w-fit">
            <PrimaryButton text="Start your project here" link="/about-us" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceMobile;
