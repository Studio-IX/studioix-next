"use client";

import BackToTop from "@/components/common/back-to-top";
import ChatwootWidget from "@/components/common/chatwoot-widget";
import PrivacyPreferences from "@/components/common/privacy-preferences";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-fit">
      <BackToTop />
      <ChatwootWidget />
      <PrivacyPreferences />
      {children}
    </div>
  );
};

export default MainLayout;
