import React from "react";
import styled from "@emotion/styled";

import { COLORS } from "../constants";
import ViewNav from "./ViewNav";
import MobileViewRouter from "./MobileViewRouter";
import AppHeader from "./AppHeader";

export default function Layout(props) {
  return (
    <CssGridWrapper>
      <HeaderWrapper>
        <AppHeader />
      </HeaderWrapper>
      <ContentWrapper>
        <MobileViewRouter data={props.data} />
      </ContentWrapper>
      <NavWrapper>
        <ViewNav />
      </NavWrapper>
    </CssGridWrapper>
  );
}

const CssGridWrapper = styled.div`
  height: 100%;
  background: ${COLORS.white};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0fr 100fr 0fr;
  grid-template-areas:
    "header"
    "content"
    "nav";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  background: blue;
`;

const ContentWrapper = styled.div`
  grid-area: content;
  flex: 1 1 auto;
  height: 100%;
  background: red;
`;

const NavWrapper = styled.div`
  grid-area: nav;
  background: yellow;
`;
