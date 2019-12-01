import React from "react";
import styled from "@emotion/styled";

import { COLORS, BREAKPOINTS } from "../constants";
import ViewNav from "./ViewNav";
import MobileViewRouter from "./MobileViewRouter";
import AppHeader from "./AppHeader";
import PosterView from "../views/PosterView";
import InfoView from "../views/InfoView";
import ChatView from "../views/ChatView";

export default function Layout(props) {
  return (
    <CssGridWrapper>
      <HeaderWrapper>
        <AppHeader />
      </HeaderWrapper>
      <MobileContentWrapper>
        <MobileViewRouter data={props.data} />
      </MobileContentWrapper>
      <DesktopPosterViewWrapper>
        <PosterView
          imageInputId="desktop"
          squares={props.data.squares}
          revalidateSquares={props.data.revalidateSquares}
        />
      </DesktopPosterViewWrapper>
      <DesktopInfoViewWrapper>
        <InfoView />
      </DesktopInfoViewWrapper>
      <DesktopChatViewWrapper>
        <ChatView
          messages={props.data.messages}
          revalidateMessages={props.data.revalidateMessages}
        />
      </DesktopChatViewWrapper>
      <MobileNavWrapper>
        <ViewNav />
      </MobileNavWrapper>
    </CssGridWrapper>
  );
}

const CssGridWrapper = styled.div`
  height: 100%;
  background: ${COLORS.white};
  ${"" /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0fr 1fr 0fr;
  grid-template-areas:
    "header"
    "content"
    "nav"; */}
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: grid;
    grid-template-columns: minmax(30%, 300px) 1fr;
    grid-template-rows: 0fr 1fr 40%;
    grid-template-areas:
      "info header"
      "info poster"
      "chat poster";
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: minmax(20%, 300px) 1fr minmax(20%, 300px);
    grid-template-rows: 0fr 1fr;
    grid-template-areas:
      "info header chat"
      "info poster chat";
  }
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const MobileContentWrapper = styled.div`
  grid-area: content;
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

const MobileNavWrapper = styled.div`
  grid-area: nav;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

const DesktopPosterViewWrapper = styled.div`
  grid-area: poster;
  display: none;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: initial;
    border-left: 2px solid ${COLORS.tealDark};
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    border-left: 2px solid ${COLORS.tealDark};
    border-right: 2px solid ${COLORS.tealDark};
  }
`;

const DesktopInfoViewWrapper = styled.div`
  grid-area: info;
  display: none;
  overflow-y: scroll;
  background-color: ${COLORS.pinkLight};
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: initial;
    border-bottom: 2px solid ${COLORS.tealDark};
  }
`;

const DesktopChatViewWrapper = styled.div`
  grid-area: chat;
  display: none;
  overflow-y: scroll;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: initial;
  }
`;
