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
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  margin: 15%;
  background: #999;
`;
