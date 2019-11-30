import React from "react";
import styled from "@emotion/styled";
import useLocalStorage from "react-use-localstorage";

import { CELL_COUNT, COLORS, LOCATION_KEY } from "../../constants";
import { SquarePaddingPush } from "./AdjacentSquareDimmer";
import { parseLocationStr } from "../../lib/util";

export default function PosterControls(props) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);

  return (
    <PosterControlsWrapper>
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
      {defaultLocation && (
        <HomeButton
          onClick={() =>
            props.onLocationChange(parseLocationStr(defaultLocation))
          }
        />
      )}
      <ZoomButton />
    </PosterControlsWrapper>
  );
}

function HomeButton(props) {
  return (
    <ButtonWrapper
      top={"85%"}
      left={"0"}
      width={"15%"}
      height={"15%"}
      onClick={props.onClick}
    >
      <i className="fas fa-home"></i>
    </ButtonWrapper>
  );
}

function ZoomButton(props) {
  return (
    <ButtonWrapper
      top={"85%"}
      left={"85%"}
      width={"15%"}
      height={"15%"}
      onClick={props.onClick}
    >
      <i className="fas fa-search-minus"></i>
    </ButtonWrapper>
  );
}

const PosterControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ButtonWrapper = styled.div`
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
