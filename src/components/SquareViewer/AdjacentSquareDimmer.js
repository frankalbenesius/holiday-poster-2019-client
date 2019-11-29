import React from "react";
import styled from "@emotion/styled";

export default function AdjacentSquareDimmer() {
  return (
    <Wrapper>
      <SquarePaddingPush />
      <DimmedRectangle top={"0"} left={"0"} width={"100%"} height={"15%"} />
      <DimmedRectangle top={"15%"} left={"0"} width={"15%"} height={"70%"} />
      <DimmedRectangle top={"85%"} left={"0"} width={"100%"} height={"15%"} />
      <DimmedRectangle top={"15%"} left={"85%"} width={"15%"} height={"70%"} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const SquarePaddingPush = styled.div`
  padding-top: 100%;
`;

const DimmedRectangle = styled.div`
  position: absolute;
  top: ${p => p.top};
  left: ${p => p.left};
  width: ${p => p.width};
  height: ${p => p.height};
  background: rgba(0, 0, 0, 0.25);
`;
