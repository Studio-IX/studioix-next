"use client";

import ChatwootWidget from "@/components/common/chatwoot-widget";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ChatwootWidget />
      {children}
    </div>
  );
};

export default MainLayout;
