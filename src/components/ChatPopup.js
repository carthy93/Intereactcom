import React from "react";
import AllConversatiions from "./AllConversations";
import Home from "./Home";
import Footer from "./Footer";
import InteractiveChat from "./InteractiveChat";
import ChatHeader from "./ChatHeader";

const ChatPopup = ({
  isVisible,
  content,
  showConversations,
  setShowConversations,
  showHome,
  setShowHome,
}) => {
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
        {showConversations ? (
          <nav className="z-10 flex flex-col p-2 text-white text-opacity-70 bg-[#0071B2] w-[400px]">
            <div className="flex flex-grow flex-row items-center justify-between gap-[2px] min-h-[48px] text-[18px] text-white">
              <div></div>
              <h1 className="py-2 px-1 font-bold text-center text-[18px] overflow-hidden truncate flex gap-2 items-center">
                Messages
              </h1>
              <div></div>
            </div>
          </nav>
        ) : null}

        {!showConversations ? <ChatHeader /> : null}

        <InteractiveChat />

        {/* {showConversations ? <AllConversatiions /> : <Home />}
        <div
          style={{
            transition: "margin 0.3s ease-out, opacity 0.3s ease-out",
          }}
          className="z-[2147483002] absolute bottom-0"
        >
          <div className="flex justify-between text-sm leading-[21px] h-[80px] w-[400px] bg-white">
            <button
              onClick={() => {
                setShowHome(true);
                setShowConversations(false);
              }}
              className="flex-1 flex flex-col items-center p-4 cursor-pointer transition-all duration-150 ease-linear leading-4 overflow-hidden text-clip text-center text-[#0071B2] font-semibold"
            >
              <div className="relative flex items-center justify-center mx-auto mb-2">
                <div className="absolute leading-[13px] translate-x-full top-[-5px] right-[calc(100%-22px)]"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask id="5451a" fill="#fff">
                    <path
                      fillRule="evenodd"
                      d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.5 2.335 3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 0 0-3 0M7.316 14.366a.85.85 0 1 0-1.132 1.268A8.7 8.7 0 0 0 12 17.852a8.7 8.7 0 0 0 5.816-2.218.85.85 0 1 0-1.132-1.268A7 7 0 0 1 12 16.152c-1.8 0-3.44-.675-4.684-1.786"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m3 7.51-.965-1.4-.01.007zm7.5-5.175L9.538.934l-.003.002zM21 7.51l.974-1.393-.009-.006zm-7.5-5.175.966-1.4-.004-.001zM6.116 14.434l1.268 1.132zm1.2-.068 1.133-1.268zm-1.132 1.268L5.05 16.902zm11.632 0 1.133 1.268zm.068-1.2-1.268 1.132zm-1.2-.068-1.133-1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175zm-.265.44c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35zm0 10.35V9.35H.3V19.7zm.8.6a.9.9 0 0 1-.615-.227.5.5 0 0 1-.185-.373H.3c0 2.335 2.022 4 4.2 4zm15 0h-15v3.4h15zm.8-.6a.5.5 0 0 1-.185.373.9.9 0 0 1-.615.227v3.4c2.178 0 4.2-1.665 4.2-4zm0-10.35V19.7h3.4V9.35zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233zm-7.491-5.169 7.5 5.175 1.93-2.798-7.5-5.175zm-1.073.002a.99.99 0 0 1 1.076 0L14.462.934a4.39 4.39 0 0 0-4.924 0zm-4.078 11.83a.85.85 0 0 1-1.2.068l2.265-2.536a2.55 2.55 0 0 0-3.6.203zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 0 0 .203 3.6zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.4 10.4 0 0 0 12 19.552zm4.684-1.786A7 7 0 0 1 12 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65zm-.068 1.2a.85.85 0 0 1 .068-1.2l2.265 2.536a2.55 2.55 0 0 0 .203-3.6zm1.2.068a.85.85 0 0 1-1.2-.068l2.536-2.265a2.55 2.55 0 0 0-3.6-.203zM12 17.852a8.7 8.7 0 0 0 5.816-2.218l-2.265-2.536A5.3 5.3 0 0 1 12 14.452zm-5.816-2.218A8.7 8.7 0 0 0 12 17.852v-3.4a5.3 5.3 0 0 1-3.551-1.354z"
                    mask="url(#5451a)"
                  ></path>
                </svg>
              </div>
              <span className="block text-center mx-auto">Home</span>
            </button>
            <button
              onClick={() => {
                setShowConversations(true);
                setShowHome(false);
              }}
              className="flex-1 flex flex-col items-center p-4 cursor-pointer transition-all duration-150 ease-linear leading-4 overflow-hidden text-clip text-center text-gray-800 hover:text-[#0071B2]"
            >
              <div className="relative flex items-center justify-center mx-auto mb-2">
                <div className="absolute leading-[13px] translate-x-full top-[-5px] right-[calc(100%-22px)]"></div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <mask id="b0b1a" fill="#fff">
                    <path
                      fillRule="evenodd"
                      d="M19 2a3 3 0 0 1 3 3v15.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
                      clipRule="evenodd"
                    ></path>
                  </mask>
                  <path
                    fill="#1A1A1A"
                    d="m19.441 21.868 1.2-1.204zM15.56 18v-1.7h.702l.498.496zM20.3 5A1.3 1.3 0 0 0 19 3.7V.3A4.7 4.7 0 0 1 23.7 5zm0 8.956V5h3.4v8.956zm0 2.544v-2.544h3.4V16.5zm0 4.306V16.5h3.4v4.306zm.341-.142a.23.23 0 0 0-.218-.043.23.23 0 0 0-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267zm-3.882-3.868 3.882 3.868-2.4 2.409-3.882-3.869zM5 16.3h10.559v3.4H5zM3.7 15A1.3 1.3 0 0 0 5 16.3v3.4A4.7 4.7 0 0 1 .3 15zm0-10v10H.3V5zM5 3.7A1.3 1.3 0 0 0 3.7 5H.3A4.7 4.7 0 0 1 5 .3zm14 0H5V.3h14z"
                    mask="url(#b0b1a)"
                  ></path>
                  <path
                    fill="#1A1A1A"
                    fillRule="evenodd"
                    d="M17 7a.85.85 0 0 1 0 1.7H7A.85.85 0 1 1 7 7zm-5 4a.85.85 0 0 1 0 1.7H7A.85.85 0 0 1 7 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="block text-center mx-auto">Messages</span>
            </button>
          </div>
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default ChatPopup;
