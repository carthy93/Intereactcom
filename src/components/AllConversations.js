import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../Redux/slices/conversationsSlice";
import RecentConversation from "./RecentConversation";
import SelectMenu from "./SelectMenu";

const AllConversations = ({ defaultPage, setDefaultPage }) => {
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
  }, [dispatch]); // Added dispatch to dependency array

  return (
    <div className="h-full">
      <nav className="z-10 flex flex-col p-2 text-white text-opacity-70 bg-[#0071B2] w-[400px]">
        <div className="flex flex-grow flex-row items-center justify-between gap-[2px] min-h-[48px] text-[18px] text-white">
          <div></div>
          <h1 className="py-2 px-1 font-bold text-center text-[18px] overflow-hidden truncate flex gap-2 items-center">
            Messages
          </h1>
          <div></div>
        </div>
      </nav>
      <div className="w-[400px] h-[58%] overflow-y-auto">
        <ul>
          {conversations?.conversations?.conversations?.map((conversation) => (
            <li className="hover:bg-[#E5F1F7]">
              <RecentConversation
                conversation={conversation}
                setDefaultPage={setDefaultPage}
                dispatch={dispatch}
                conversations={conversations?.conversations?.conversations}
                setConversations={setConversations}
              />
              <div className="px-5 text-gray-50">
                <hr />
              </div>
            </li>
          ))}
        </ul>

        <SelectMenu setDefaultPage={setDefaultPage} />
      </div>
    </div>
  );
};

export default AllConversations;
