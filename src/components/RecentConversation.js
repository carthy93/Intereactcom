// import { useDispatch } from "react-redux";

import { FIN_IMG_URL } from "../utils/constants";

const RecentConversation = ({
  conversation,
  conversations,
  setDefaultPage,
  dispatch,
  setConversations,
}) => {
  // const dispatch = useDispatch();

  const timeDifference = (createdAt) => {
    const now = Date.now();
    const diff = now - createdAt * 1000; // Convert seconds to milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d ago`;
    } else if (hours > 0) {
      return `${hours}h ago`;
    } else if (minutes > 0) {
      return `${minutes}m ago`;
    } else {
      return `${seconds}s ago`;
    }
  };

  console.log("conversation", conversation);
  return (
    <div
      onClick={() => {
        setDefaultPage("chat");
        dispatch(
          setConversations({
            conversations: conversations.map((conv) => {
              if (conv?.id === conversation?.id) {
                return {
                  ...conv,
                  selected: true,
                };
              } else {
                return {
                  ...conv,
                  selected: false,
                };
              }
            }),
          })
        );
      }}
      className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer"
    >
      <div className="mr-2 self-center">
        <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
          <img
            className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
            src={FIN_IMG_URL}
            alt="Profile image for Fin"
          />
        </div>
      </div>
      <div className="mr-auto flex-1 text-sm leading-[21px] ml-1 min-w-0">
        <div className="flex flex-col cursor-pointer">
          <div className="overflow-hidden truncate text-sm font-normal">
            <span className="whitespace-nowrap">
              {conversation?.conversation_parts[0]?.blocks[0]?.content
                .replaceAll("<p>", "")
                .replaceAll("</p>", "")}
            </span>
          </div>
          <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
            <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
              {conversation?.conversation_parts[0]?.author?.first_name}
            </div>
            <div className="whitespace-nowrap">
              •{" "}
              {timeDifference(conversation?.conversation_parts[0]?.created_at)}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-2 self-center">
        <div>
          <i
            className="flex items-center w-auto min-w-[16px] h-[16px] text-[#0071b2]"
            color="linkColor"
            size="16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
};
export default RecentConversation;
