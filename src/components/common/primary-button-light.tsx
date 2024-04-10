import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PrimaryButtonLightProps {
  text: string;
  link: string;
}

const PrimaryButtonLight: React.FC<PrimaryButtonLightProps> = ({
  text,
  link,
}) => {
  let buttonIcon: any = [];
  switch (text) {
    case "Start a project":
      buttonIcon = <ArrowRight />;
      break;
    case "Subscribe":
      buttonIcon = <ArrowRight />;
      break;
    default:
      buttonIcon = [];
  }
  return (
    <Link className="primary-light" href={link}>
      <div className="primary-light-button font-archivo font-normal text-lg items-center gap-3">
        {text}
        {buttonIcon}
      </div>
      <div className="primary-light-button-backdrop"></div>
    </Link>
  );
};

export default PrimaryButtonLight;
