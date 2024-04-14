import Wrapper from "../wrapper/wrapper";
import PricingHeader from "./pricing-header";
import PricingPlanCard from "./pricing-plan-card";

const Pricing = () => {
  return (
    <div className="py-20 w-full z-50">
      <Wrapper className="w-full items-center justify-center lg:px-[1rem] xl:px-[6rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[14rem] 5xl:px-[1rem]">
        <PricingHeader />
        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-8 4xl:gap-8 5xl:gap-10 items-center justify-center">
          <PricingPlanCard planType="Flexi-Hours" />
          <PricingPlanCard planType="Basic" />
          <PricingPlanCard planType="Long Term" />
        </div>
        {/* <div className="flex flex-col lg:flex-row w-full mt-5 lg:mt-4 xl:mt-6 2xl:mt-8 3xl:mt-8 4xl:mt-8 5xl:mt-10 gap-5 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-8 4xl:gap-8 5xl:gap-10 items-center justify-center">
          <PricingPlanCard planType="Custom" />
        </div> */}
        {/* <div className="flex flex-col lg:flex-row w-full mt-5 lg:mt-4 xl:mt-6 2xl:mt-8 3xl:mt-8 4xl:mt-8 5xl:mt-10 gap-5 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-8 4xl:gap-8 5xl:gap-10 items-center justify-center">
          <PricingInfoCard
            subtitle="Confused?"
            title="Book A Call"
            description="Breach the enigmatic workings of Studio IX and how it can help you."
            buttonText="Book Free Call"
            new={null}
          />
          <PricingInfoCard
            subtitle="Affiliate Program?"
            title="Refer & Earn"
            description="Know someone that needs our services? Might as well get rewarded for it. Earn up to $800 for each referral."
            buttonText="Join Affiliate Program"
            new={null}
          />
        </div> */}
      </Wrapper>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(100%_50%_at_50%_0%,#455CE9_0%,#455CE9_0%,rgba(0,163,255,0)_100%)]"></div>
    </div>
  );
};

export default Pricing;
