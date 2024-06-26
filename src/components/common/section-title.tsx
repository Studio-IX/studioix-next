import {
  Braces,
  Code,
  Codepen,
  Codesandbox,
  DraftingCompass,
  FolderKanban,
  FolderOpenDot,
  Frame,
  Gem,
  GitBranchPlus,
  GitMerge,
  Paintbrush,
  PenTool,
  ShieldQuestion,
} from "lucide-react";
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
    case "OUR PORTFOLIO":
      sectionIcon = <FolderOpenDot />;
      break;
    case "LET'S ANSWER SOME QUESTIONS":
      sectionIcon = <ShieldQuestion />;
      break;
    case "PREVIOUS PROJECTS":
      sectionIcon = <Codesandbox />;
      break;
    case "Development":
      sectionIcon = <Code />;
      break;
    case "User Experience":
      sectionIcon = <Paintbrush />;
      break;
    case "UX":
      sectionIcon = <Paintbrush />;
      break;
    case "Branding":
      sectionIcon = <PenTool />;
      break;
    case "Product Manager":
      sectionIcon = <FolderKanban />;
      break;
    case "Backend Developer":
      sectionIcon = <Braces />;
      break;
    case "Creative Developer":
      sectionIcon = <GitBranchPlus />;
      break;
    case "FrontEnd Developer":
      sectionIcon = <GitMerge />;
      break;
    case "FullStack Developer":
      sectionIcon = <Frame />;
      break;
    case "Product Designer":
      sectionIcon = <DraftingCompass />;
      break;
    default:
      sectionIcon = [];
  }
  return (
    <div className="section">
      <div className="section-button font-archivo font-normal text-base md:text-lg select-none gap-2 md:gap-3 items-center">
        {sectionIcon} {text}
      </div>
      <div className="section-button-backdrop"></div>
    </div>
  );
};

export default SectionTitle;
