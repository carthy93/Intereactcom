import axios from "axios";
import { useState } from "react";
import ChatPopup from "./ChatPopup";

const ChatIcon = () => {
  const [open, setOpen] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [showConversations, setShowConversations] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://api-iam.intercom.io/messenger/web/open",
        {
          app_id: "mbe6u52e",
          v: 3,
          g: "b3132c3846e21e0e6ed3598fe81b32650b6d479c",
          s: "9d5462a5-b196-4cb0-98be-dbcb78dbc5f0",
          r: "",
          platform: "web",
          installation_type: "js-snippet",
          "Idempotency-Key": "6b7d5655cc22f271",
          internal: "",
          is_intersection_booted: false,
          page_title: "Document",
          user_active_company_id: -1,
          user_data: { anonymous_id: "041563f5-ee0b-4244-a692-15af912e1032" },
          referer: "https://fe-assignment-lilac.vercel.app/",
          device_identifier: "b449b746-5dc4-4601-835d-ecadc58fd8a2",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);
      setOpen(response.data);
      setHasFetchedData(true);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (!hasFetchedData) {
      fetchData();
    }
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-[48px] h-[48px] absolute bottom-5 right-5 bg-[#0071B2] antialiased cursor-pointer overflow-auto rounded-[50%]"
      >
        <div className="flex justify-center items-center mt-[25%]">
          {isPopupVisible ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
                fill="white"
              ></path>
            </svg>
          ) : (
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 28 32"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
            </svg>
          )}
        </div>
      </div>
      <ChatPopup
        isVisible={isPopupVisible}
        content={JSON.stringify(open, null, 2)}
        showConversations={showConversations}
        setShowConversations={setShowConversations}
        showHome={showHome}
        setShowHome={setShowHome}
        open={open}
      />
    </>
  );
};

export default ChatIcon;
