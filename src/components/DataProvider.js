import useSWR from "swr";

import { fetcher } from "../lib/util";
import { API_URL } from "../constants";

export default function DataProvider(props) {
  const swrConfig = {
    refreshInterval: 5000 // 5 seconds
  };

  const { data: squares, revalidate: revalidateSquares } = useSWR(
    API_URL + "/squares",
    fetcher,
    swrConfig
  );

  const { data: messages, revalidate: revalidateMessages } = useSWR(
    API_URL + "/messages",
    fetcher,
    swrConfig
  );

  return props.render({
    squares,
    revalidateSquares,
    messages,
    revalidateMessages
  });
}
