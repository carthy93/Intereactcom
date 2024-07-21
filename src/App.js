import React from "react";
import ReactDOM from "react-dom/client";
import ChatIcon from "./components/ChatIcon";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="bg-[#E7E7EB] cursor-default h-[100vh]">
        <ChatIcon />
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
