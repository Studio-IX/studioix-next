import { useEffect, forwardRef } from "react";

interface ChatwootSettings {
  hideMessageBubble: boolean;
  position: "left" | "right";
  locale: string;
  type: "standard" | "expanded_bubble";
}

interface ChatwootSDKSettings {
  websiteToken: string;
  baseUrl: string;
}

declare global {
  interface Window {
    chatwootSettings: ChatwootSettings;
  }
}

const ChatwootWidget = forwardRef((props, ref) => {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "en", // Language to be set
      type: "standard", // [standard, expanded_bubble]
    };

    (function (d: Document, t: string) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t) as HTMLScriptElement;
      var s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode!.insertBefore(g, s);
      g.onload = function () {
        (window as any).chatwootSDK.run({
          websiteToken: "vYLvp9FtejwiFtwXnVhn6Stf",
          baseUrl: BASE_URL,
        } as ChatwootSDKSettings);
      };
    })(document, "script");
  }, []);

  return null;
});

ChatwootWidget.displayName = "ChatwootWidget";

export default ChatwootWidget;
