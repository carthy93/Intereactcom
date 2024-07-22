import { FIN_IMG_URL } from "../utils/constants";

const AiAgentMessage = ({ messageText }) => {
  return (
    <div className="relative text-left float-left pl-[45px] pb-[16px] w-[calc(100%-45px)]">
      <div className="absolute left-0 bottom-[10px] pb-[16px]">
        <div className="mx-auto inline-block align-middle cursor-default relative w-[32px] h-[32px] leading-[32px] text-[16px] rounded-[16.7%]">
          <img
            className="rounded-{16.7%]"
            src={FIN_IMG_URL}
            alt="Profile image for Fin"
          />
        </div>
      </div>
      <div className="inline-block relative p-[17px_20px] rounded-[10px] w-auto max-w-[100%] text-black bg-[#f2f2f2]">
        <div className="text-[14px] leading-[1.4] m-0 min-h-[10px]">
          {messageText}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default AiAgentMessage;
