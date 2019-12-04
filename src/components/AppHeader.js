import React from "react";
import styled from "@emotion/styled";
import Ticker from "react-ticker";

import useTimeUntil2020, { submissionsClosed } from "../hooks/useTimeUntil2020";
import { COLORS } from "../constants";
import { APP_TITLE } from "../views/InfoView";

export default function() {
  return (
    <AppHeaderWrapper>
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
    </AppHeaderWrapper>
  );
}

const AppHeaderWrapper = styled.header`
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

const TickerWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
`;

function TimeUntil2020() {
  const { days, hours, minutes, seconds } = useTimeUntil2020();

  if (submissionsClosed()) {
    return <span>None! Time to print.</span>;
  }

  return (
    <span>
      <TimeThing number={days} text={"days"} />
      <TimeThing number={hours} text={"hrs"} />
      <TimeThing number={minutes} text={"mins"} />
      <TimeThing number={seconds} text={"secs"} />
    </span>
  );
}

function TimeThing({ number, text }) {
  return (
    <TimeThingWrapper>
      <TimeThingBox>{number.toString().padStart(2, "0")}</TimeThingBox>
      {text}
    </TimeThingWrapper>
  );
}

const TimeThingWrapper = styled.span`
  margin-right: 0.2em;
`;

const TimeThingBox = styled.span`
  padding: 0.1rem 0.2rem;
  background: ${COLORS.pinkDark};
  color: white;
  font-weight: bold;
  border-radius: 3px;
  margin-right: 0.1rem;
`;
