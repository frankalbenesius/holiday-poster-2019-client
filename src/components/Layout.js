import React from "react";
import styled from "@emotion/styled";

import { COLORS } from "../constants";
import ViewNav from "./ViewNav";
import MobileViewRouter from "./MobileViewRouter";
import AppHeader from "./AppHeader";

export default function Layout(props) {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <AppHeader />
      </HeaderWrapper>
      <ContentWrapper>
        <MobileViewRouter data={props.data} />
      </ContentWrapper>
      <NavWrapper>
        <ViewNav />
      </NavWrapper>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

const NavWrapper = styled.div``;
const HeaderWrapper = styled.div``;
