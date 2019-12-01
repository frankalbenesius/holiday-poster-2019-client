import React from "react";
import styled from "@emotion/styled";

export default function PosterFrame(props) {
  return <PosterFrameWrapper>{props.children}</PosterFrameWrapper>;
}

const PosterFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;
  overflow: hidden;
`;
