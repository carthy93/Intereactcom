import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import ChatIcon from "./components/ChatIcon";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import { PingProvider } from "./components/PingContext";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="bg-[#E7E7EB] cursor-default h-[100vh]">
        <PingProvider>
          <ChatIcon />
        </PingProvider>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
