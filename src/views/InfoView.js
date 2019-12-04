import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { COLORS, BREAKPOINTS } from "../constants";

export const APP_TITLE = "The Year Was 2019";

export default function InfoView() {
  return (
    <InfoViewWrapper>
      <InfoHeader>
        <div
          style={{
            fontSize: "0.6em",
            textTransform: "uppercase"
          }}
        >
          Welcome To
        </div>
        <div
          style={{
            fontSize: "1.7em",
            fontFamily: "Calistoga",
            lineHeight: "0.9",
            color: COLORS.pinkDark
          }}
        >
          The Year Was 2019
        </div>
        <div style={{ fontSize: "1.2em", color: COLORS.tealDark }}>
          A Visual Time Capsule
        </div>
        <div
          style={{
            fontSize: "0.6em",
            fontStyle: "italic",
            color: COLORS.orangeDark
          }}
        >
          & Grass Fed Collaborative Experience
        </div>
      </InfoHeader>
      <WelcomeImg src={`${process.env.PUBLIC_URL}/welcome.gif`} />
      <InfoContent>
        <InfoContentBlock>
          <b>Goal: </b> Create a poster together.
        </InfoContentBlock>
        <InfoContentBlock>
          <b>Your Task: </b>
          <MobileTasks>
            <li>Go to the "Poster" tab.</li>
            <li>Enter the passphrase I sent you.</li>
            <li>Upload an image.</li>
          </MobileTasks>
          <DesktopTasks>
            <li>
              In the input below the poster, enter the passphrase I sent you.
            </li>
            <li>Upload an image.</li>
          </DesktopTasks>
        </InfoContentBlock>
        <InfoContentBlock>
          <b>Other Things: </b>
          <DetailsUnorderedList>
            <li>
              On 1/1/2020 submissions will close and I will print the poster and
              hang it up in my home forever.
            </li>
            <li>
              Don't know what to upload? Submit a bad selfie or a pic of a neat
              squirrel or something. You can always upload a different photo
              later.
            </li>
            <li>
              If you're feeling ambitious, you could use the "Chat" tab to
              coordinate with adjacent squares.
            </li>
            <li>
              If you don't submit an image before 12/28/19, I may give your
              square to someone else. I just want a completed poster!
            </li>
            <li>
              For you image professionals, the final size of each square will be
              2.25in at 300ppi (675px).
            </li>
            <li>I appreciate you all. Thank you.</li>
          </DetailsUnorderedList>
        </InfoContentBlock>
      </InfoContent>
    </InfoViewWrapper>
  );
}

const MobileTasks = styled.ol`
  display: block;
  padding: 0;
  margin: 0;
  margin-left: 1.5em;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;
const DesktopTasks = styled.ol`
  display: none;
  padding: 0;
  margin: 0;
  margin-left: 1.5em;
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    display: block;
  }
`;

const DetailsUnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 1.5em;
`;

const InfoViewWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  text-align: center;
  background-color: ${COLORS.pinkLight};
  overflow-y: auto;
`;

const InfoHeader = styled.div`
  font-size: 1.2em;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 0.5em;
`;

const InfoContent = styled.div`
  margin: 1rem 0;
  text-align: left;
`;
const InfoContentBlock = styled.div`
  margin: 0 0 0.5rem;
`;

const animationName = keyframes`
0% {
  border-color: ${COLORS.pink};
}
33% {
  border-color: ${COLORS.orange};
}
66% {
  border-color: ${COLORS.teal};
}
100% {
  border-color: ${COLORS.pink};
}
`;

const WelcomeImg = styled.img`
  margin: 0 auto;
  width: 80%;
  border: 6px solid ${COLORS.pink};
  animation-name: ${animationName};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
