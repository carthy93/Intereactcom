const NoMessages = ({ setDefaultPage }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] mx-[35px] min-h-full mt-[-25px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        fill="none"
        viewBox="0 0 33 32"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M27.333 2.667a2.5 2.5 0 0 1 2.5 2.5v23.778c0 1.335-1.613 2.005-2.558 1.063L21.245 24H5.667a2.5 2.5 0 0 1-2.5-2.5V5.167a2.5 2.5 0 0 1 2.5-2.5z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M23 9.667a1 1 0 0 1 0 2H9.667a1 1 0 1 1 0-2zm-6 6.666a1 1 0 1 1 0 2h-6.667a1 1 0 0 1 0-2z"
          clipRule="evenodd"
        ></path>
      </svg>
      <h2 className="text-[18px] leading-[24px] font-semibold">No messages</h2>
      <span className="text-center text-[14px] leading-[20px] font-normal">
        Messages from the team will be shown here
      </span>
      <button
        onClick={() => setDefaultPage("chat")}
        tabIndex="0"
        className="bg-[#0071b2] text-white absolute bottom-[20px] flex items-center justify-center gap-4 p-2.5 px-4 rounded-lg font-semibold text-sm leading-5 cursor-pointer whitespace-nowrap transition-all duration-200"
      >
        Send us a message
        <i size="16" className="flex items-center w-auto min-w-[16px] h-[16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m4.563 14.605 9.356-5.402c1-.577 1-2.02 0-2.598L4.563 1.203a1.5 1.5 0 0 0-2.25 1.3v10.803a1.5 1.5 0 0 0 2.25 1.3M6.51 8.387 2.313 9.512V6.297L6.51 7.42c.494.133.494.834 0 .966"
              clipRule="evenodd"
            ></path>
          </svg>
        </i>
      </button>
    </div>
  );
};

export default NoMessages;
