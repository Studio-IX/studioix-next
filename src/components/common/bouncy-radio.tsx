import React from "react";
import { useFormContext } from "react-hook-form";

interface BouncyComponentProps {
  disabled?: boolean;
}

const BouncyComponent: React.FC<BouncyComponentProps> = ({ disabled }) => {
  const { setValue, watch } = useFormContext();
  const selectedOption = watch("projectType") || "web-application";

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("projectType", event.target.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white text-black ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <div className="radio-group relative grid grid-cols-3 w-full">
        <input
          type="radio"
          id="web-application"
          name="projectType"
          value="web-application"
          checked={selectedOption === "web-application"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="web-application"
          className={`${
            selectedOption === "web-application" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-6`}
        >
          Web <span className="md:hidden">App</span>{" "}
          <span className="hidden md:block">Application</span>
        </label>

        <input
          type="radio"
          id="mobile-app"
          name="projectType"
          value="mobile-app"
          checked={selectedOption === "mobile-app"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="mobile-app"
          className={`${
            selectedOption === "mobile-app" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-0`}
        >
          Mobile App
        </label>

        <input
          type="radio"
          id="other"
          name="projectType"
          value="other"
          checked={selectedOption === "other"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="other"
          className={`${
            selectedOption === "other" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-6`}
        >
          Other
        </label>

        <div className="selection-indicator-wrapper absolute top-1/2 h-full w-1/3 transform -translate-y-1/2">
          <span className="block h-full bg-black rounded-full transition-all duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default BouncyComponent;
