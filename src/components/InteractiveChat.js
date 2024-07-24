import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import ChatHeader from "./ChatHeader";
import UserMessage from "./UserMessage";
import AiAgentMessage from "./AiAgentMessage";
import { useSelector } from "react-redux";
import { FIN_IMG_URL } from "../utils/constants";

const InteractiveChat = ({ defaultPage, setDefaultPage }) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState({});
  const [socket, setSocket] = useState(null);
  const [isAtTop, setIsAtTop] = useState(false);
  const { conversations } = useSelector((state) => state.conversations);
  const uId = useSelector((state) => state.uId);

  const divRef = useRef(null);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scroll({
        top: divRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (divRef.current) {
      setIsAtTop(divRef.current.scrollTop === 0);
    }
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [divRef.current]);

  useEffect(() => {
    scrollToBottom();
  }, [divRef.current]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (
      conversations?.conversations?.find(
        (conversation) => conversation?.selected
      )?.id
    ) {
      axios
        .post(
          `https://api-iam.intercom.io/messenger/web/conversations/${
            conversations?.conversations?.find(
              (conversation) => conversation?.selected
            )?.id
          }`,
          {
            app_id: "mbe6u52e",
            v: 3,
            g: "b3132c3846e21e0e6ed3598fe81b32650b6d479c",
            s: "e2795d4f-f257-4aec-98d5-8988bc7a9e79",
            r: "",
            platform: "web",
            installation_type: "js-snippet",
            "Idempotency-Key": "f1cdbf4e20548b3f",
            internal: "",
            is_intersection_booted: null,
            page_title: "Document",
            user_active_company_id: -1,
            user_data: JSON.stringify({
              anonymous_id: "041563f5-ee0b-4244-a692-15af912e1032",
            }),
            request_origin: "Nexus New Comment",
            referer: "https://fe-assignment-lilac.vercel.app/",
            device_identifier: "b449b746-5dc4-4601-835d-ecadc58fd8a2",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setMessage(res?.data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  }, [conversations]);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-iam.intercom.io/messenger/web/messages",
        {
          app_id: "mbe6u52e",
          v: 3,
          g: "63d8117e5ca2800d0b4764a12fc8764f84d527a4",
          s: "28e6bc24-530e-4751-b288-a5c141137381",
          r: "",
          platform: "web",
          installation_type: "js-snippet",
          "Idempotency-Key": "d75cc63d30ef633b",
          internal: "",
          is_intersection_booted: null,
          page_title: "Document",
          user_active_company_id: -1,
          user_data: JSON.stringify({
            anonymous_id: uId?.uId,
          }),
          created_at: new Date().toString(),
          self_serve_suggestions_match: false,
          composer_suggestions: [],
          snapshot_id: 32340958,
          composer_disabled: false,
          messenger_open_request_id: "0004ciglur70vlg6b9ig",
          blocks: JSON.stringify([
            {
              type: "paragraph",
              text: { text },
            },
          ]),
          referer: "https://fe-assignment-lilac.vercel.app/",
          device_identifier: "1a3b7401-8fb7-4420-a863-a87c03f082f9",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data) {
        setText("");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <ChatHeader setDefaultPage={setDefaultPage} />
      <div
        ref={divRef}
        className="w-[400px] overflow-y-auto overflow-hidden h-80"
      >
        <div className="p-[24px_20px_0] flex flex-wrap justify-between transition-transform duration-200 ease-in overflow-hidden overflow-y-auto w-[400px]">
          <div className="w-full pt-[20px] pb-[24px] box-border text-center leading-[21px] font-normal">
            <div className="pb-[4px]">
              <div className="flex flex-none justify-center items-center mr-0 whitespace-nowrap pb-[8px] overflow-hidden leading-none">
                <div className="inline-block z-20">
                  <div className="mx-auto inline-block align-middle cursor-default relative w-[64px] h-[64px] leading-[64px] text-[32px] rounded-[16.7%]">
                    <img
                      className="rounded-[16.7%]"
                      src={FIN_IMG_URL}
                      alt="Profile image for Fin"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-[16px] font-semibold transition-all duration-[300ms] ease-in text-black text-center">
                AI Agent answers instantly
              </h2>
              <div className="flex items-center justify-center pt-[8px] gap-[6px]">
                <div className="flex flex-none items-center mr-0 whitespace-nowrap w-fit overflow-hidden leading-none">
                  <div className="inline-block z-10">
                    <div
                      aria-label="Profile image for Karthik"
                      className="mx-auto rounded-full align-middle cursor-default relative w-[16px] h-[16px] leading-[16px] text-[8px] uppercase bg-[#002b44] text-white text-center inline-flex justify-center items-center"
                    >
                      K
                    </div>
                  </div>
                </div>
                <p className="text-[14px] break-words text-[#737373]">
                  Ask for the team if needed
                </p>
              </div>
            </div>
          </div>

          <div className="pb-[8px]">
            <div className="relative text-left float-left pl-[45px] w-[calc(100%-45px)]">
              <div className="inline-block relative p-[17px_20px] rounded-[10px] w-auto max-w-[100%] text-black bg-[#f2f2f2]">
                <div className="text-[14px] leading-[1.4] m-0 min-h-[10px]">
                  👋 Hi there! This is a bot speaking. I’m here to answer your
                  questions, but you’ll always have the option to talk to our
                  team.
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>

          {message?.conversation_parts?.map((conversation_part) => {
            if (conversation_part?.author?.type === "Admin") {
              return (
                <AiAgentMessage
                  key={conversation_part.id}
                  messageText={
                    conversation_part?.blocks[0]?.content
                      ?.replaceAll("<p>", "")
                      .replaceAll("</p>\n", "") ||
                    conversation_part?.blocks[0]?.text
                  }
                />
              );
            } else {
              return (
                <UserMessage
                  key={conversation_part.id}
                  messageText={
                    conversation_part?.blocks[0]?.text ||
                    conversation_part?.blocks[0]?.content
                      ?.replaceAll("<p>", "")
                      .replaceAll("</p>\n", "")
                  }
                />
              );
            }
          })}
        </div>
      </div>

      <div className="w-[400px] absolute bottom-0 rounded-b-lg flex flex-col gap-2 items-center pb-2 mt-[-5] z-30 transition-transform duration-300 ease-linear">
        <div className="min-h-[48px] max-h-[200px] px-5 w-full box-border">
          <form onSubmit={fetchData}>
            <div className="relative rounded-[24px] shadow-[0_0_4px_rgba(0,_0,_0,_0.2)] overflow-hidden outline-none transition-[outline-width] duration-150 ease-in">
              <div className="relative flex flex-col">
                <div className="relative min-h-[48px] bg-white">
                  <pre className="box-border font-sans text-[14px] font-normal leading-[20px] max-h-[200px] overflow-hidden break-words p-[14px_72px_14px_16px] invisible w-full whitespace-pre-wrap">
                    <br />
                  </pre>
                  <textarea
                    value={text}
                    onChange={(e) => handleChange(e)}
                    rows="1"
                    placeholder="Ask a question…"
                    aria-label="Ask a question…"
                    className="appearance-none box-border resize-none font-sans text-[14px] font-normal inset-0 leading-[20px] max-h-[200px] outline-none break-words p-[14px_72px_14px_16px] absolute whitespace-pre-wrap w-full"
                  ></textarea>
                </div>
                <div className="absolute top[20px]">
                  <button
                    title="Type an :emoji"
                    tabIndex="0"
                    className="text-[#767676] cursor-pointer inline-block relative opacity-80 transition-opacity duration-200 w-[16px]"
                  ></button>
                </div>
              </div>
              <div className="absolute flex items-end right-2 bottom-0 px-[8px] pl-[7px] pb-[4px]">
                <div className="flex items-center gap-[16px] pb-[7px] min-h-[32px]">
                  <button
                    title="Emoji picker"
                    aria-label="Emoji picker"
                    tabIndex="0"
                    className="text-[#767676] cursor-pointer inline-block relative opacity-80 transition-opacity duration-200 w-[16px]"
                  >
                    <i
                      size="16"
                      className="flex items-center w-auto min-w-[16px] h-[16px]"
                    >
                      <svg
                        className="w-auto min-w-[16px] h-[16px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6.525"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        ></circle>
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M5.819 7.536a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2m4.363 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"
                          clipRule="evenodd"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.7"
                          d="M10 10c-.44.604-1.172 1-2 1s-1.56-.396-2-1"
                        ></path>
                      </svg>
                    </i>
                  </button>
                  <button
                    type="submit"
                    disabled=""
                    aria-label="Send a message…"
                    className="text-[#000]"
                    aria-disabled="true"
                    tabIndex="0"
                  >
                    <i
                      size="16"
                      className="flex items-center w-auto min-w-[16px] h-[16px]"
                    >
                      <svg
                        className="w-auto min-w-[16px] h-[16px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7.4 1.899a.85.85 0 0 1 1.201 0l4.5 4.5A.85.85 0 1 1 11.9 7.6L8.85 4.552V13.5a.85.85 0 0 1-1.7 0V4.552L4.101 7.601A.85.85 0 1 1 2.9 6.399z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {isAtTop && (
          <div className="absolute left-0 right-0 z-30 flex flex-col items-center bottom-[104px]">
            <button
              onClick={scrollToBottom}
              className="w-fit max-w-full box-border p-2 relative rounded-2xl flex justify-center items-center gap-4 cursor-pointer pointer-events-auto text-[14px] leading-[20px] font-semibold whitespace-nowrap border-none shadow-[0px_8px_27px_0px_rgba(0,0,0,0.2)] transition-transform duration-[150ms] ease-out text-[#0071B2] bg-white"
            >
              <i
                size="16"
                className="flex items-center w-auto min-w-[16px] h-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.849 8.473a1.275 1.275 0 0 1 1.803 0L12 12.82l4.349-4.348a1.275 1.275 0 1 1 1.803 1.803l-5.25 5.25a1.275 1.275 0 0 1-1.803 0l-5.25-5.25a1.275 1.275 0 0 1 0-1.803Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </i>
            </button>
          </div>
        )}

        <Footer chat />
      </div>
    </div>
  );
};

export default InteractiveChat;
