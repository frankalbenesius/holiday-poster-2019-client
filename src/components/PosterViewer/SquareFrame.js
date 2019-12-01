import React from "react";
import styled from "@emotion/styled";
import { SquarePaddingPush } from "./AdjacentSquareDimmer";

export default function SquareFrame(props) {
  return (
    <SquareFrameWrapper>
      <SquarePaddingPush />
      {props.children}
    </SquareFrameWrapper>
  );
}

const SquareFrameWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 70%;
  max-width: 400px;
`;
