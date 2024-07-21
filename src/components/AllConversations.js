import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../Redux/slices/conversationsSlice";
import RecentConversation from "./RecentConversation";

const AllConversations = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations);
  console.log("conversations", conversations);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api-iam.intercom.io/messenger/web/conversations",
          {
            app_id: "mbe6u52e",
            v: 3,
            g: "b3132c3846e21e0e6ed3598fe81b32650b6d479c",
            s: "af57b613-40a7-48fa-a945-a3b985bd5491",
            r: null,
            platform: "web",
            installation_type: "js-snippet",
            "Idempotency-Key": "122e419100862fb8",
            internal: null,
            is_intersection_booted: null,
            page_title: "Document",
            user_active_company_id: -1,
            user_data: {
              anonymous_id: "041563f5-ee0b-4244-a692-15af912e1032",
            },
            page: 1,
            per_page: 10,
            source: "messengerPrefetchSpaceData",
            self_serve_suggestions_match: false,
            referer: "https://fe-assignment-lilac.vercel.app/",
            device_identifier: "b449b746-5dc4-4601-835d-ecadc58fd8a2",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        dispatch(
          setConversations({ conversations: response?.data?.conversations })
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [dispatch]); // Added dispatch to dependency array

  return (
    <div className="w-[400px] max-h-[58%] overflow-y-scroll">
      {/* {conversations?.conversations?.flatMap((conversation) => (
        <div key={conversation?.id}>
          {conversation?.conversation_parts[0]?.blocks[0].content}
        </div>
      ))} */}

      <ul>
        <li className="hover:bg-[#E5F1F7]">
          {/* <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
          </div> */}
          <RecentConversation />
          <div className="px-5 text-gray-50">
            <hr />
          </div>
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
        <li>
          <div className="flex justify-between box-border text-black p-4 items-start transition-colors duration-250 ease-in opacity-100 cursor-pointer">
            <div className="mr-2 self-center">
              <div className="cursor-pointer w-[40px] h-[40px] mx-auto my-0 inline-block align-middle relative leading-[36px] text-[18px] rounded-[16.7%]">
                <img
                  className="cursor-pointer w-[40px] h-[40px] rounded-[16.7%] overflow-clip leading-[36px] text=[18px] text-[#000]"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  alt="Profile image for Fin"
                />
              </div>
            </div>
            <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
              <div className="flex flex-col cursor-pointer">
                <div className="overflow-hidden truncate text-sm font-normal">
                  <span className="whitespace-nowrap">
                    Hello, how can I assist you today?
                  </span>
                </div>
                <div className="font-normal text-sm text-[#666666] flex whitespace-pre-wrap">
                  <div className="whitespace-nowrap overflow-hidden truncate mr-[4px]">
                    Fin
                  </div>
                  <div className="whitespace-nowrap">• 3h ago</div>
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
        </li>
      </ul>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AllConversations;
