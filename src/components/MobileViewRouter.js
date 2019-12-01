import React from "react";

import { StateContext } from "../App";
import PosterView from "../views/PosterView";
import InfoView from "../views/InfoView";
import ChatView from "../views/ChatView";

export default function MobileViewRouter({ data }) {
  const { revalidateMessages, messages, squares, revalidateSquares } = data;

  const { activeView } = React.useContext(StateContext);

  switch (activeView) {
    case "info": {
      return <InfoView />;
    }
    case "chat": {
      return (
        <ChatView messages={messages} revalidateMessages={revalidateMessages} />
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
