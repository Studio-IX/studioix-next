import Link from "next/link";
import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className="section">
      <div className="section-button font-archivo font-normal text-lg select-none">
        {text}
      </div>
      <div className="section-button-backdrop"></div>
    </div>
  );
};

export default SectionTitle;
