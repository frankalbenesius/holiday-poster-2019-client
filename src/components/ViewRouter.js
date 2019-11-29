import React from "react";
import useSWR from "swr";

import { fetcher } from "../lib/util";
import { StateContext } from "../App";
import PosterView from "../views/PosterView";
import InfoView from "../views/InfoView";
import ChatView from "../views/ChatView";
import { API_URL } from "../constants";

export default function ViewRouter() {
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

  const { activeView } = React.useContext(StateContext);

  switch (activeView) {
    case "info": {
      return <InfoView />;
    }
    case "chat": {
      return (
        <ChatView
          messages={messages}
          squares={squares}
          revalidateMessages={revalidateMessages}
        />
      );
    }
    default:
    case "poster": {
      return (
        <PosterView squares={squares} revalidateSquares={revalidateSquares} />
      );
    }
  }
}
