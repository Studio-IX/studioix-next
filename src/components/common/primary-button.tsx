import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  link: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, link }) => {
  let buttonIcon: any = [];
  switch (text) {
    case "See All Projects":
      buttonIcon = <ArrowRight />;
      break;
    default:
      buttonIcon = [];
  }
  return (
    <Link className="primary" href={link}>
      <div className="primary-button font-archivo font-normal text-lg items-center gap-3">
        {text}
        {buttonIcon}
      </div>
      <div className="primary-button-backdrop"></div>
    </Link>
  );
};

export default PrimaryButton;
