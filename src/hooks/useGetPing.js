import axios from "axios";
import { useSelector } from "react-redux";
import { usePingContext } from "../components/PingContext";

export default function useGetPing() {
  const uId = useSelector((state) => state.uId);
  const { setPingData } = usePingContext();
  const getPing = () => {
    axios
      .post(
        "https://api-iam.intercom.io/messenger/web/ping",
        {
          app_id: "mbe6u52e",
          v: 3,
          g: "63d8117e5ca2800d0b4764a12fc8764f84d527a4",
          s: "ccc2bcd8-430b-4935-8d6d-79437374448b",
          r: null,
          platform: "web",
          installation_type: "js-snippet",
          "Idempotency-Key": "fb56ede44d094b8e",
          internal: null,
          is_intersection_booted: null,
          page_title: "Document",
          user_active_company_id: -1,
          user_data: JSON.stringify({
            anonymous_id: uId?.uId,
          }),

          source: "apiBoot",
          sampling: false,
          referer: "https://fe-assignment-lilac.vercel.app/",
          device_identifier: "1a3b7401-8fb7-4420-a863-a87c03f082f9",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setPingData(res?.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  return {
    getPing,
  };
}
