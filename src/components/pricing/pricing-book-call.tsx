import React from "react";

interface PricingBookCallProps {
  text: string;
}

const PricingBookCall: React.FC<PricingBookCallProps> = ({ text }) => {
  return (
    <div className="pricing">
      <div className="pricing-button font-archivo font-normal text-lg">
        {text}
      </div>
      <div className="pricing-button-backdrop"></div>
    </div>
  );
};

export default PricingBookCall;
