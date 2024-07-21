const Footer = ({ chat }) => {
  return (
    <div
      className={`block my-0 mx-auto h-[32px] ${
        chat ? "rounded-[16px] w-[200px] flex justify-center" : ""
      } bg-white hover:bg-gray-100 cursor-pointer`}
    >
      <div className="w-[400px]">
        <a
          href="https://www.intercom.com/intercom-link?user_id=669a7536d36afec9da4c3ee2&powered_by_app_id=mbe6u52e&company=Petavue&solution=live-chat&utm_content=4+conversation+we-run-on-intercom&utm_source=desktop-web&utm_medium=messenger&utm_campaign=intercom-link&utm_referrer=https://fe-assignment-lilac.vercel.app/"
          target="blank"
          tabIndex="0"
          className="text-[13px] flex justify-center items-center rounded-[16px] pt-[3px] pb-[4px] px-0 transition-all ease-in-out text-[#737376] "
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="w-[24px] h-[24px] pr-[8px]"
          >
            <g>
              <path
                fill="currentColor"
                d="M13.9 8.8C13.9 9.1 13.6 9.3 13.3 9.3 13 9.3 12.8 9.1 12.8 8.8L12.8 4C12.8 3.7 13 3.5 13.3 3.5 13.6 3.5 13.9 3.7 13.9 4L13.9 8.8 13.9 8.8ZM13.7 12.1C13.6 12.2 11.6 13.9 8 13.9 4.4 13.9 2.4 12.2 2.3 12.1 2.1 11.9 2.1 11.6 2.3 11.4 2.5 11.2 2.8 11.1 3 11.3 3 11.4 4.8 12.8 8 12.8 11.2 12.8 13 11.3 13 11.3 13.2 11.1 13.5 11.2 13.7 11.4 13.9 11.6 13.9 11.9 13.7 12.1L13.7 12.1ZM2.1 4C2.1 3.7 2.4 3.5 2.7 3.5 3 3.5 3.2 3.7 3.2 4L3.2 8.8C3.2 9.1 3 9.3 2.7 9.3 2.4 9.3 2.1 9.1 2.1 8.8L2.1 4 2.1 4ZM4.8 2.9C4.8 2.6 5 2.4 5.3 2.4 5.6 2.4 5.9 2.6 5.9 2.9L5.9 10.1C5.9 10.4 5.6 10.6 5.3 10.6 5 10.6 4.8 10.4 4.8 10.1L4.8 2.9 4.8 2.9ZM7.5 2.7C7.5 2.4 7.7 2.1 8 2.1 8.3 2.1 8.5 2.4 8.5 2.7L8.5 10.4C8.5 10.7 8.3 10.9 8 10.9 7.7 10.9 7.5 10.7 7.5 10.4L7.5 2.7 7.5 2.7ZM10.1 2.9C10.1 2.6 10.4 2.4 10.7 2.4 11 2.4 11.2 2.6 11.2 2.9L11.2 10.1C11.2 10.4 11 10.6 10.7 10.6 10.4 10.6 10.1 10.4 10.1 10.1L10.1 2.9 10.1 2.9ZM14 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L14 16C15.1 16 16 15.1 16 14L16 2C16 0.9 15.1 0 14 0L14 0Z"
              ></path>
            </g>
          </svg>
          <span className="">Powered by Intercom</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
