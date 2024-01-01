import { Code, Codesandbox, Gem, Paintbrush, PenTool } from "lucide-react";
import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  let sectionIcon: any = [];
  switch (text) {
    case "PRICING":
      sectionIcon = <Gem />;
      break;
    case "PREVIOUS WEB DEVELOPMENT PROJECTS":
      sectionIcon = <Codesandbox />;
      break;
    case "Development":
      sectionIcon = <Code />;
      break;
    case "User Experience":
      sectionIcon = <Paintbrush />;
      break;
    case "Branding":
      sectionIcon = <PenTool />;
      break;
    default:
      sectionIcon = [];
  }
  return (
    <div className="section">
      <div className="section-button font-archivo font-normal text-lg select-none gap-3 items-center">
        {sectionIcon} {text}
      </div>
      <div className="section-button-backdrop"></div>
    </div>
  );
};

export default SectionTitle;
