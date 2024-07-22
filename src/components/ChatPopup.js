import React, { useState } from "react";
import AllConversatiions from "./AllConversations";
import Home from "./Home";
import Footer from "./Footer";
import InteractiveChat from "./InteractiveChat";

const ChatPopup = ({ isVisible, content, open }) => {
  const [defaultPage, setDefaultPage] = useState("Home");
  if (!isVisible) return null;

  return (
    <div
      style={{
        height: "min(704px, calc(100% - 104px))",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 5px 40px",
        transition:
          "width 200ms ease, height 200ms ease, max-height 200ms ease, transform 300ms cubic-bezier(0, 1.2, 1, 1), opacity 83ms ease-out",
      }}
      className="fixed bottom-[84px] right-5 origin-bottom-right min-h-[80px] w-[400px] max-h[704px] bg-white rounded-[16px] overflow-hidden z-[2147483000]"
    >
      <div className="flex flex-col h-[110vh] w-[100vw] bg-white">
        {defaultPage === "Home" ? (
          <Home
            defaultPage={defaultPage}
            setDefaultPage={setDefaultPage}
            open={open}
          />
        ) : defaultPage === "messages" ? (
          <AllConversatiions
            defaultPage={defaultPage}
            setDefaultPage={setDefaultPage}
          />
        ) : (
          <InteractiveChat
            defaultPage={defaultPage}
            setDefaultPage={setDefaultPage}
          />
        )}
      </div>
    </div>
  );
};

export default ChatPopup;
