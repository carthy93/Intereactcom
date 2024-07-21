const ChatHeader = () => {
  return (
    <div>
      <nav className="w-[400px] border border-b-gray-100 z-10 flex flex-col p-2 text-[#737373]">
        <div className="flex flex-grow flex-row items-center justify-between gap-[2px] min-h-[48px] text-[18px] text-[#1a1a1a]">
          <div className="flex flex-1 justify-start">
            <button className="flex items-center justify-center gap-[16px] p-2 relative rounded-[10px] w-fit max-w-full box-border cursor-pointer pointer-events-auto text-[14px] leading-[20px] font-semibold bg-transparent text-[#0071b2] whitespace-nowrap transition-colors duration-200 ease-in-out min-w-[48px] min-h-[48px]">
              <i
                size="24"
                className="flex items-center w-auto min-w-[24px] h-[24px]"
              >
                <svg
                  className="min-w-[24px] w-auto h-[24px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.7"
                    d="m14 18-6-6 6-6"
                  ></path>
                </svg>
              </i>
            </button>{" "}
          </div>
          <div className="w-full">
            <div className="w-full">
              <div className="flex flex-row gap-[16px] w-full">
                <div className="flex flex-none items-center mr-0 whitespace-nowrap w-fit overflow-hidden leading-none">
                  <div className="inline-block z-[20]">
                    <div className="mx-auto inline-block align-middle relative w-[34px] h-[34px] leading-[32px] text-[16px] rounded-[16.7%] border-2 border-solid border-white">
                      <img
                        className="rounded-[16.7%]"
                        src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                        alt="Profile image for Fin"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[4px] text-black">
                  <h1 className="text-[16px] font-semibold text-black leading-[1.1em] max-h-[2.2em] overflow-hidden flex gap-[8px]">
                    Fin
                  </h1>
                  <div className="text-[#737373] pr-[4px] text-[14px] font-normal flex items-center gap-[4px]">
                    <i
                      size="16"
                      className="inline-flex items-center w-auto min-w-[16px] h-[16px]"
                    >
                      <svg
                        className="w-auto min-w[16px] h-[16px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        fill="none"
                        viewBox="0 0 16 15"
                      >
                        <rect
                          width="16"
                          height="14"
                          y="0.5"
                          fill="currentColor"
                          rx="4"
                        ></rect>
                        <path
                          fill="#fff"
                          d="M6.181 11.1H7.9L6.142 4.9H4.213L2.46 11.1h1.564l.297-1.362h1.572zM5.077 6.296h.082l.49 2.307h-1.08zm7.635 4.804V9.832h-1.306V6.167h1.306V4.899H8.527v1.268h1.307v3.665H8.527V11.1z"
                        ></path>
                      </svg>
                    </i>
                    "Agent"
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ChatHeader;
