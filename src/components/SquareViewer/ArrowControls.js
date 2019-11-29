import React from "react";
import styled from "@emotion/styled";

import { CELL_COUNT, COLORS } from "../../constants";
import { SquarePaddingPush } from "./AdjacentSquareDimmer";

export default function ArrowControls(props) {
  return (
    <ArrowControlsWrapper>
      <SquarePaddingPush />
      <UpArrow
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
      <DownArrow
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
      <RightArrow
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
      <LeftArrow
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
    </ArrowControlsWrapper>
  );
}

const ArrowControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ArrowWrapper = styled.div`
  top: ${p => p.top};
  left: ${p => p.left};
  width: ${p => p.width};
  height: ${p => p.height};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2em;
  transition: background-color 0.2s;
  &:active {
    background-color: ${COLORS.tealAlpha};
  }
`;

function UpArrow(props) {
  const [x, y] = props.location;
  if (y === 0) {
    return null;
  } else {
    return (
      <ArrowWrapper
        top={"0"}
        left={"15%"}
        width={"70%"}
        height={"15%"}
        onClick={e => {
          props.onLocationChange([x, y - 1]);
        }}
      >
        <i className="fas fa-arrow-circle-up"></i>
      </ArrowWrapper>
    );
  }
}
function DownArrow(props) {
  const [x, y] = props.location;
  if (y === CELL_COUNT.y - 1) {
    return null;
  } else {
    return (
      <ArrowWrapper
        onClick={e => {
          props.onLocationChange([x, y + 1]);
        }}
        top="85%"
        left="15%"
        width="70%"
        height="15%"
      >
        <i className="fas fa-arrow-circle-down"></i>
      </ArrowWrapper>
    );
  }
}
function RightArrow(props) {
  const [x, y] = props.location;
  if (x === CELL_COUNT.x - 1) {
    return null;
  } else {
    return (
      <ArrowWrapper
        onClick={e => {
          props.onLocationChange([x + 1, y]);
        }}
        top="15%"
        left="85%"
        width="15%"
        height="70%"
      >
        <i className="fas fa-arrow-circle-right"></i>
      </ArrowWrapper>
    );
  }
}
function LeftArrow(props) {
  const [x, y] = props.location;
  if (x === 0) {
    return null;
  } else {
    return (
      <ArrowWrapper
        onClick={e => {
          props.onLocationChange([x - 1, y]);
        }}
        top="15%"
        left="0"
        width="15%"
        height="70%"
      >
        <i className="fas fa-arrow-circle-left"></i>
      </ArrowWrapper>
    );
  }
}
