import React from "react";
import styled from "@emotion/styled";
import Ticker from "react-ticker";

import useTimeUntil2020 from "../hooks/useTimeUntil2020";
import { COLORS } from "../constants";
import ViewNav from "./ViewNav";
import { APP_TITLE } from "../views/InfoView";

export default function Layout(props) {
  return (
    <Wrapper>
      <AppHeader>
        <TickerWrapper>
          <Ticker>
            {({ index }) => {
              let text = APP_TITLE;
              if (index > 0 && index % 9 === 0) {
                text = "P.S. I Frank You";
              }
              if (index > 0 && index % 16 === 0) {
                text = "Alligators. Dingo babies.";
              }
              if (index > 0 && index % 6 === 0) {
                text = "Thank you for participating!";
              }
              if (index > 0 && index % 20 === 0) {
                text = "🆒🆒🆒";
              }
              return (
                <span style={{ width: "506px" }}>
                  {text}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                </span>
              );
            }}
          </Ticker>
        </TickerWrapper>
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

const TickerWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
`;

const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
`;

const AppHeader = styled.header`
  text-align: center;
  font-family: "Calistoga";
  background-color: ${COLORS.teal};
  color: ${COLORS.black};
  padding: 0.5rem 0rem;
  width: 100%;
  font-size: 1.5rem;
  border-bottom: 2px solid ${COLORS.tealDark};
`;

const AppSubHeader = styled.div`
  font-size: 0.8rem;
  font-family: "Roboto";
`;
