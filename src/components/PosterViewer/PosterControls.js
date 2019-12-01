import React from "react";
import styled from "@emotion/styled";
import useLocalStorage from "react-use-localstorage";

import { CELL_COUNT, COLORS, LOCATION_KEY } from "../../constants";
import { SquarePaddingPush, AbsoluteWrapper } from "./AdjacentSquareDimmer";
import { parseLocationStr } from "../../lib/util";

export default function PosterControls(props) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);

  return (
    <AbsoluteWrapper>
      <SquarePositioningHelper>
        <SquarePaddingPush />
        {!props.zoomedOut && [
          <UpArrow
            key={"up"}
            location={props.location}
            onLocationChange={props.onLocationChange}
          />,
          <DownArrow
            key={"down"}
            location={props.location}
            onLocationChange={props.onLocationChange}
          />,
          <RightArrow
            key={"right"}
            location={props.location}
            onLocationChange={props.onLocationChange}
          />,
          <LeftArrow
            key={"left"}
            location={props.location}
            onLocationChange={props.onLocationChange}
          />
        ]}
      </SquarePositioningHelper>
      {defaultLocation && (
        <HomeButton
          onClick={() => {
            const newLocation = parseLocationStr(defaultLocation);
            if (newLocation.every(v => v >= 0)) {
              props.onLocationChange();
            }
          }}
        />
      )}
      <ZoomButton
        zoomedOut={props.zoomedOut}
        onClick={() => {
          props.onZoomedOutChange(!props.zoomedOut);
        }}
      />
    </AbsoluteWrapper>
  );
}

function HomeButton(props) {
  return (
    <ButtonWrapper
      bottom={"0"}
      left={"0"}
      width={"15%"}
      onClick={props.onClick}
    >
      <SquarePaddingPush />
      <i className="fas fa-home"></i>
    </ButtonWrapper>
  );
}

function ZoomButton(props) {
  const iconClass = props.zoomedOut
    ? "fas fa-search-plus"
    : "fas fa-search-minus";
  return (
    <ButtonWrapper
      bottom={"0"}
      right={"0"}
      width={"15%"}
      onClick={props.onClick}
    >
      <SquarePaddingPush />
      <i className={iconClass}></i>
    </ButtonWrapper>
  );
}

const SquarePositioningHelper = styled.div`
  box-sizing: content-box;
  flex: 0 0 auto;
  width: 100%;
  max-width: 571.42px;
  position: relative;
  pointer-events: none;
`;

const ButtonWrapper = styled.div`
  pointer-events: auto;
  top: ${p => p.top};
  left: ${p => p.left};
  bottom: ${p => p.bottom};
  right: ${p => p.right};
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
  if (y < 1) {
    return null;
  } else {
    return (
      <ButtonWrapper
        top={"0"}
        left={"15%"}
        width={"70%"}
        height={"15%"}
        onClick={e => {
          props.onLocationChange([x, y - 1]);
        }}
      >
        <i className="fas fa-arrow-circle-up"></i>
      </ButtonWrapper>
    );
  }
}
function DownArrow(props) {
  const [x, y] = props.location;
  if (y === CELL_COUNT.y - 1) {
    return null;
  } else {
    return (
      <ButtonWrapper
        onClick={e => {
          props.onLocationChange([x, y + 1]);
        }}
        top="85%"
        left="15%"
        width="70%"
        height="15%"
      >
        <i className="fas fa-arrow-circle-down"></i>
      </ButtonWrapper>
    );
  }
}
function RightArrow(props) {
  const [x, y] = props.location;
  if (x === CELL_COUNT.x - 1) {
    return null;
  } else {
    return (
      <ButtonWrapper
        onClick={e => {
          props.onLocationChange([x + 1, y]);
        }}
        top="15%"
        left="85%"
        width="15%"
        height="70%"
      >
        <i className="fas fa-arrow-circle-right"></i>
      </ButtonWrapper>
    );
  }
}
function LeftArrow(props) {
  const [x, y] = props.location;
  if (x === 0) {
    return null;
  } else {
    return (
      <ButtonWrapper
        onClick={e => {
          props.onLocationChange([x - 1, y]);
        }}
        top="15%"
        left="0"
        width="15%"
        height="70%"
      >
        <i className="fas fa-arrow-circle-left"></i>
      </ButtonWrapper>
    );
  }
}
