import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import SectionTitle from "./section-title";

const Team = () => {
  return (
    <div className="w-full">
      <Wrapper className="lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[0rem]">
        <h2 className="uppercase font-cabinetGrotesk font-bold text-6xl lg:text-[92px] text-white text-start">
          Meet our team
        </h2>
        <div className="w-full flex items-center mt-5 gap-8">
          <div className="flex flex-col items-start hover:-translate-y-14 ease-in-out transition-transform duration-500">
            <div className="w-[24rem] h-[30rem] rounded-[40px] overflow-hidden relative">
              <Image
                className=" object-cover object-bottom scale-110 rounded-[40px]"
                fill
                src="/team/4.jpg"
                alt="Team"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className=" mb-4 font-cabinetGrotesk text-3xl lg:text-5xl text-white font-semibold mt-4 md:mt-5">
                Duke Opoku
              </h2>
              <SectionTitle text="Product Manager" />
            </div>
          </div>
          <div className="flex flex-col items-start hover:-translate-y-14 ease-in-out transition-transform duration-500">
            <div className="w-[24rem] h-[30rem] rounded-2xl relative">
              <Image
                className=" object-cover object-top rounded-[40px] "
                fill
                src="/team/2.jpg"
                alt="Team"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className=" mb-4 font-cabinetGrotesk text-3xl lg:text-5xl text-white font-semibold mt-4 md:mt-5">
                Hallic M.
              </h2>
              <SectionTitle text="FrontEnd Developer" />
            </div>
          </div>
          <div className="flex flex-col items-start hover:-translate-y-14 ease-in-out transition-transform duration-500">
            <div className="w-[24rem] h-[30rem] rounded-[40px] relative overflow-hidden">
              <Image
                className=" object-cover object-bottom rounded-[40px] scale-125 "
                fill
                src="/team/3.jpg"
                alt="Team"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className=" mb-4 font-cabinetGrotesk text-3xl lg:text-5xl text-white font-semibold mt-4 md:mt-5">
                Abiola Braimah
              </h2>
              <SectionTitle text="Creative Developer" />
            </div>
          </div>
          <div className="flex flex-col items-start hover:-translate-y-14 ease-in-out transition-transform duration-500">
            <div className="w-[24rem] h-[30rem] rounded-2xl relative">
              <Image
                className=" object-cover object-center rounded-[40px] "
                fill
                src="/team/1.jpg"
                alt="Team"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className=" mb-4 font-cabinetGrotesk text-3xl lg:text-5xl text-white font-semibold mt-4 md:mt-5">
                Alan Obeng
              </h2>
              <SectionTitle text="Product Designer" />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Team;
