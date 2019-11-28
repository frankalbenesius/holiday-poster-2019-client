import React from "react";
import styled from "@emotion/styled";

export default function PosterPositioner(props) {
  const [x, y] = props.location;
  const left = x * -100 + "%";
  const top = y * -100 + "%";
  return (
    <Wrapper left={left} top={top}>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 100%;
  height: 100%;
  transition: top 0.5s, left 0.5s;
`;
