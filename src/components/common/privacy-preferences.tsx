import { useState } from "react";
import PrivacyPreferencesDialog from "./privacy-preferences-dialog";

const PrivacyPreferences = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptClick = () => {
    setIsVisible(false);
  };
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 left-5 right-5 bg-[#313131] md:w-[400px] h-fit rounded-2xl p-6 z-[3147483000] md:z-50">
          <p className=" font-archivo text-white text-lg">
            By using this website, you agree with <br />
            our <span className="underline">privacy policy</span>
          </p>
          <div className="w-full mt-7 mb-1.5 flex flex-row gap-6 items-center">
            <div className="w-fit cursor-pointer" onClick={handleAcceptClick}>
              <div className="primary">
                <div className="primary-button font-archivo font-normal text-lg items-center gap-3 select-none">
                  Accept
                </div>
                <div className="primary-button-backdrop"></div>
              </div>
            </div>
            <div className="cursor-pointer text-white/80 hover:text-white transition-colors">
              <PrivacyPreferencesDialog />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPreferences;
