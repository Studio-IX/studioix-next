import CompanyLogos from "../common/company-logos";
import PrimaryButtonLight from "../common/primary-button-light";
import Wrapper from "../wrapper/wrapper";
import ArrowOne from "./arrow-one";
import ArrowThree from "./arrow-three";
import ArrowTwo from "./arrow-two";
import WebDevelopmentGallery from "./web-development-gallery";

const ServiceHero = () => {
  return (
    <div className="w-full">
      <Wrapper className="py-20">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2.5">
              <ArrowOne />{" "}
              <p className=" text-lg text-black font-archivo font-medium">
                CRO
              </p>
            </div>
            <div className="flex flex-row items-center gap-2.5">
              <ArrowTwo />{" "}
              <p className=" text-lg text-black font-archivo font-medium uppercase">
                Website Content
              </p>
            </div>
            <div className="flex flex-row items-center gap-2.5">
              <ArrowThree />{" "}
              <p className=" text-lg text-black font-archivo font-medium uppercase">
                Web + Interaction Design
              </p>
            </div>
          </div>
          <h1 className="font-cabinetGrotesk font-bold text-6xl lg:text-8xl text-black">
            Evolve your website.
          </h1>
        </div>
        <h1 className="font-cabinetGrotesk font-bold text-6xl lg:text-[6.8rem] text-black">
          Stay engraved in user&apos;s minds.
        </h1>

        <div className="flex flex-row mt-8 gap-20 items-start">
          <p className=" font-archivo text-black/60 text-xl font-normal max-w-prose">
            We rebrand your business and website with a new visual identity that
            makes your competitors jealous.{" "}
            <span className=" font-medium text-black">Outcome</span> ---
            scalable, easy-to-manage & trackable website with a solid brand that
            imprints in user&apos;s minds.
          </p>

          <div>
            <PrimaryButtonLight text="Start a project" link="/contact" />
          </div>
        </div>
      </Wrapper>
      <WebDevelopmentGallery />
      <CompanyLogos />
    </div>
  );
};

export default ServiceHero;
