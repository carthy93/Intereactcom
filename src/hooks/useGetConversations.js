import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setConversations } from "../Redux/slices/conversationsSlice";
import axios from "axios";

export default function useGetConversations() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getConversations = () => {
    setLoading(true);
    axios
      .post(
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
          user_data: JSON.stringify({
            anonymous_id: "041563f5-ee0b-4244-a692-15af912e1032",
          }),
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
      )
      .then((res) => {
        dispatch(
          setConversations({
            conversations: res?.data?.conversations.map((conversation) => {
              return {
                ...conversation,
                selected: false,
              };
            }),
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  };
  return {
    getConversations,
    loading,
    setLoading,
  };
}
