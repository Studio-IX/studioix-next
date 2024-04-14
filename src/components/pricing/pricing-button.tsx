import Link from "next/link";
import React from "react";

interface PricingButtonProps {
  text: string;
  link: string;
}

const PricingButton: React.FC<PricingButtonProps> = ({ text, link }) => {
  return (
    <Link className="pricing" href={link}>
      <div className="pricing-button font-archivo font-medium text-lg">
        {text}
      </div>
      <div className="pricing-button-backdrop"></div>
    </Link>
  );
};

export default PricingButton;
