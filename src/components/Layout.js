import React from "react";
import styled from "@emotion/styled";

import useTimeUntil2020 from "../hooks/useTimeUntil2020";
import { COLORS } from "../constants";
import ViewNav from "./ViewNav";

export default function Layout(props) {
  return (
    <Wrapper>
      <AppHeader>
        The Poster Project
        <AppSubHeader>
          Time Left &mdash; <TimeUntil2020 />
        </AppSubHeader>
      </AppHeader>
      <Content>{props.children}</Content>
      <ViewNav />
    </Wrapper>
  );
}

function TimeUntil2020() {
  const timerText = useTimeUntil2020();
  return <span>{timerText}</span>;
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  text-align: center;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1.5rem;
`;

const AppSubHeader = styled.div`
  font-size: 0.8rem;
`;
