import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { COLORS } from "../constants";

export const APP_TITLE = "Frank's Collaborative Poster Project 2019";

export default function InfoView() {
  return (
    <InfoViewWrapper>
      <InfoHeader>Welcome to {APP_TITLE}!!!</InfoHeader>
      <WelcomeImg src={`${process.env.PUBLIC_URL}/welcome.gif`} />
      <InfoContent>
        <div>
          <b>Goal: </b> Create a poster together.
        </div>
        <div>
          <b>Your Task: </b>
          <DetailsOrderedList>
            <li>Go to the "Poster" view.</li>
            <li>Enter the passphrase I sent you.</li>
            <li>Upload an image.</li>
          </DetailsOrderedList>
        </div>
        <div>
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
        </div>
      </InfoContent>
    </InfoViewWrapper>
  );
}

const DetailsUnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 1.5em;
`;
const DetailsOrderedList = styled.ol`
  padding: 0;
  margin: 0;
  margin-left: 1.5em;
`;

const InfoViewWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  text-align: center;
  background-color: ${COLORS.pinkLight};
  overflow-y: scroll;
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
