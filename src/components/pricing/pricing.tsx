import Wrapper from "../wrapper/wrapper";
import PricingHeader from "./pricing-header";
import PricingInfoCard from "./pricing-info-card";
import PricingPlanCard from "./pricing-plan-card";

const Pricing = () => {
  return (
    <div className="bg-[#121212] py-20">
      <Wrapper className="md:px-[25rem]">
        <PricingHeader />
        <div className="flex flex-row justify-between w-full">
          <PricingPlanCard planType="Flexi-Hours" />
          <PricingPlanCard planType="Basic" />
        </div>
        <div className="flex flex-row justify-between w-full mt-10">
          <PricingPlanCard planType="Long Term" />
          <PricingPlanCard planType="Custom" />
        </div>
        <div className="flex flex-row justify-between w-full mt-10">
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
