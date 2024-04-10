import DesignFaq from "@/components/common/design-faq";
import PrimaryButton from "@/components/common/primary-button";
import DesignPricingGrid from "@/components/grids/design-pricing-grid";
import Wrapper from "@/components/wrapper/wrapper";

const DesignPage = () => {
  return (
    <div className="w-full">
      <Wrapper className="py-20">
        <div className="w-full flex flex-row justify-between items-center">
          <h1 className="font-cabinetGrotesk font-bold text-5xl lg:text-7xl text-white">
            All-in-one design <br /> solution under <br />
            <span className="text-[#4686D9]">one subscription.</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-6 md:gap-20 items-start">
          <p className=" font-archivo text-white/60 text-xl font-normal max-w-prose">
            We rebrand your business and website with a new visual identity that
            makes your competitors jealous.{" "}
            <span className=" font-medium text-white">Outcome</span> ---
            scalable, easy-to-manage & trackable website with a solid brand that
            imprints in user&apos;s minds.
          </p>

          <div>
            <PrimaryButton text="Start a project" link="/contact" />
          </div>
        </div>

        <DesignPricingGrid />
        <DesignFaq />
      </Wrapper>
    </div>
  );
};

export default DesignPage;
