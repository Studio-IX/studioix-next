// Import necessary dependencies
import React, { useState } from "react";

// Define the component
const BouncyComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Number 1");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <div className="radio-group relative grid grid-cols-3 w-full">
        <input
          type="radio"
          id="Number1"
          name="color"
          value="Number 1"
          checked={selectedOption === "Number 1"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="Number1"
          className={`${
            selectedOption === "Number 1" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-0`}
        >
          Branding
        </label>

        <input
          type="radio"
          id="Number2"
          name="color"
          value="Number 2"
          checked={selectedOption === "Number 2"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="Number2"
          className={`${
            selectedOption === "Number 2" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-0`}
        >
          UX Design
        </label>

        <input
          type="radio"
          id="Number3"
          name="color"
          value="Number 3"
          checked={selectedOption === "Number 3"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="Number3"
          className={`${
            selectedOption === "Number 3" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-4`}
        >
          <span className="flex items-center gap-1 md:gap-2">
            Web <span className=" hidden md:block">Development</span>
            <span className="  md:hidden">Dev</span>
          </span>
        </label>

        <div className="selection-indicator-wrapper absolute top-1/2 h-full w-1/3 transform -translate-y-1/2">
          <span className="block h-full bg-black rounded-full transition-all duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default BouncyComponent;
