import React from "react";
import styled from "@emotion/styled";
import Ticker from "react-ticker";

import useTimeUntil2020, { submissionsClosed } from "../hooks/useTimeUntil2020";
import { COLORS } from "../constants";

export default function() {
  return (
    <AppHeaderWrapper>
      <TickerWrapper>
        <Ticker>
          {({ index }) => {
            let text = "test";
            const options = [
              "🆒🆒🆒",
              "P.S. I Frank You",
              "Thank You For Participating"
            ];
            switch (index % 4) {
              default: {
                text = "The Year Was 2019";
                break;
              }
              case 1: {
                text = "A Visual Time Capsule";
                break;
              }
              case 2: {
                text = <i>& Grass-Fed Collaborative Experience</i>;
                break;
              }
              case 3: {
                text = options[Math.floor(Math.random() * options.length)];
                break;
              }
            }

            const lol = Math.random();
            if (lol > 0.95) {
              text = <sup>{text}</sup>;
            }
            if (lol < 0.05) {
              text = <sub>{text}</sub>;
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
