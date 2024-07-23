import axios from "axios";
import useGetConversations from "../hooks/useGetConversations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversations } from "../../Redux/slices/conversationsSlice";
import RecentConversation from "./RecentConversation";
import SelectMenu from "./SelectMenu";

const AllConversations = ({ defaultPage, setDefaultPage }) => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations);
  const { getConversations, loading } = useGetConversations();

  useEffect(() => {
    getConversations();
  }, []);

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
            <li key={conversation?.id} className="hover:bg-[#E5F1F7]">
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
        <div
          onClick={() => setDefaultPage("chat")}
          className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2"
        >
          <button className="relative flex items-center justify-center gap-4 p-2.5 px-4 rounded-lg box-border max-w-full cursor-pointer pointer-events-auto text-sm font-semibold leading-5 whitespace-nowrap transition-colors duration-200 ease-in-out shadow-[0_0_25px_rgba(0,0,0,0.1),0_0_25px_rgba(0,0,0,0.1)] text-white bg-[#0071b2]">
            <span>Ask a question</span>
            <i
              size="16"
              className="flex items-center min-w-[16px] w-auto h-[16px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                fill="none"
                viewBox="0 0 13 15"
              >
                <path
                  fill="currentColor"
                  d="M6.29 0a6.29 6.29 0 0 1 6.29 6.29c0 6.29-6.284 8.71-6.284 8.71v-2.42H6.29A6.29 6.29 0 1 1 6.29 0m.58 9.103a.578.578 0 1 0 0 .001zm-.578-5.71c-1.01 0-1.84.78-1.925 1.77l.957.135a.97.97 0 0 1 1.938.028c0 .964-1.355.964-1.355 2.312v.108h.77v-.108c0-.77 1.547-.963 1.547-2.312a1.934 1.934 0 0 0-1.932-1.932z"
                ></path>
              </svg>
            </i>
          </button>
        </div>

        <SelectMenu defaultPage={defaultPage} setDefaultPage={setDefaultPage} />
      </div>
    </div>
  );
};

export default AllConversations;
