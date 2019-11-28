import React from "react";
import styled from "@emotion/styled";
import { SquarePaddingPush } from "./AdjacentSquareDimmer";

export default function PosterFrame(props) {
  return (
    <PosterFrameWrapper>
      <SquarePaddingPush />
      {props.children}
    </PosterFrameWrapper>
  );
}

const PosterFrameWrapper = styled.div`
  flex: 0 0 auto;
  width: 100%;
  background: #333;
  position: relative;
  overflow: hidden;
`;
