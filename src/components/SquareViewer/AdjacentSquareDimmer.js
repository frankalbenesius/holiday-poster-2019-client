import React from "react";
import styled from "@emotion/styled";

export default function AdjacentSquareDimmer() {
  return (
    <AbsoluteWrapper>
      <BorderDimmingSolution>
        <SquarePaddingPush />
      </BorderDimmingSolution>
    </AbsoluteWrapper>
  );
}

export const AbsoluteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

// used transparent giant border to dim surrounding area
const BorderDimmingSolution = styled.div`
  box-sizing: content-box;
  flex: 0 0 auto;
  width: 70%;
  max-width: 400px;
  border: 40rem solid rgba(0, 0, 0, 0.25);
`;

export const SquarePaddingPush = styled.div`
  padding-top: 100%;
`;
