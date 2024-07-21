import { useDispatch, useSelector } from "react-redux";
import RecentConversation from "./RecentConversation";
import SelectMenu from "./SelectMenu";
import { setConversations } from "../../Redux/slices/conversationsSlice";
import { useEffect } from "react";

const Home = ({ setDefaultPage }) => {
  const conversations = useSelector((state) => state.conversations);
  const dispatch = useDispatch();

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
          setConversations({
            conversations: response?.data?.conversations.map((conversation) => {
              return {
                ...conversation,
                selected: false,
              };
            }),
          })
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className="w-[400px] bg-[#0071B2] overflow-y-scroll scroll-smooth pb-[15px] max-h-96 overflow-x-hidden bg-no-repeat relative text-white opacity-100">
        <div className="pt-8 px-9 pb-[140px]">
          <div className="flex flex-row justify-between items-center mb-[100px] h-[40px]">
            <div className="ml-0">
              <div className="flex flex-none items-center mr-[6px] whitespace-nowrap w-fit overflow-hidden leading-none">
                <div className="inline-block z-10">
                  <div
                    aria-label="Profile image for Karthik"
                    className="mx-auto rounded-full align-middle relative w-[40px] h-[40px] leading-[40px] text-[20px] uppercase bg-[#002b44] text-white text-center inline-flex justify-center items-center"
                  >
                    K
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[32px] leading-[38px]">
            <h1 className="font-bold opacity-100 text-[#b3e3ff]">
              Hi there 👋
            </h1>
            <h2 className="font-bold  opacity-100 text-[#ffffff]">
              How can we help?
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3 -mt-32 py-0 px-[16px]">
          <div className="relative box-border overflow-hidden p-4 px-5 bg-white rounded-lg shadow-md">
            <div className="text-black font-semibold text-sm leading-[150%] cursor-pointer p-0 transition-colors duration-[250ms] ease-in-out">
              Recent message
            </div>
            <div className="p-0 -ml-5 -mr-5 -mb-4 cursor-pointer">
              <ul className="list-none">
                <li className="list-item">
                  <div className="-mt-2">
                    <RecentConversation
                      conversation={
                        conversations?.conversations?.conversations[0]
                      }
                      setDefaultPage={setDefaultPage}
                      dispatch={dispatch}
                      conversations={
                        conversations?.conversations?.conversations
                      }
                      setConversations={setConversations}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative box-border overflow-hidden p-0 bg-white rounded-lg shadow-md">
            <div className="flex justify-between box-border text-black p-4 px-5 items-center opacity-100 cursor-pointer">
              <div className="mr-auto flex-1 text-sm leading-[21px] min-w-0">
                <div className="text-black font-semibold text-sm leading-[150%] p-0 transition-colors duration-[250ms] ease-in-out">
                  Ask a question
                </div>
                <div className="text-sm text-[#737376]">
                  AI Agent and team can help
                </div>
              </div>
              <div className="ml-[8px] self-center">
                <div className="flex flex-shrink-0 items-center mr-0 whitespace-nowrap w-fit overflow-hidden leading-none">
                  <div className="inline-block z-[20]">
                    <div className="m-auto inline-block align-middle relative w-[32px] h-[32px] leading-8 text-base rounded-[16.7%] border-solid border-[2px] border-white">
                      <img
                        className="rounded-[16.7%] w-[32px] h-[32px]"
                        src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                        alt="Profile image for Fin"
                      />
                    </div>
                  </div>
                  <div className="inline-block z-[10] -ml-[8px]">
                    <div
                      aria-label="Profile image for Karthik"
                      className="m-auto rounded-full align-middle relative w-6 h-6 leading-6 text-xs uppercase text-white bg-[#002b44] inline-flex justify-center items-center border-solid border-[2px] border-white"
                    >
                      K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectMenu setDefaultPage={setDefaultPage} />
    </div>
  );
};

export default Home;
