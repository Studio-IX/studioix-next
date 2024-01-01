import Wrapper from "../wrapper/wrapper";
import PricingHeader from "./pricing-header";
import PricingInfoCard from "./pricing-info-card";
import PricingPlanCard from "./pricing-plan-card";

const Pricing = () => {
  return (
    <div className="bg-[#121212] py-20">
      <Wrapper className=" 2xl:px-[25rem]">
        <PricingHeader />
        <div className="flex flex-col lg:flex-row justify-between w-full gap-5 lg:gap-0">
          <PricingPlanCard planType="Flexi-Hours" />
          <PricingPlanCard planType="Basic" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full mt-5 lg:mt-10 gap-5 lg:gap-0">
          <PricingPlanCard planType="Long Term" />
          <PricingPlanCard planType="Custom" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full mt-5 lg:mt-10 gap-5 lg:gap-0">
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
            new="New"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Pricing;
