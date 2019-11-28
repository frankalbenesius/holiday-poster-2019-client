import React from "react";
import { css } from "emotion";

import { CELL_COUNT } from "../../constants";

export default function ArrowControls(props) {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      `}
    >
      <div
        className={css`
          padding-top: 100%;
        `}
      ></div>
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
    </div>
  );
}
const sharedArrowStyles = `
position: absolute;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 2em;
transition: background-color 0.2s;
&:active {
    background-color: rgba(255, 255, 255, 0.1);
}
`;

function UpArrow(props) {
  const [x, y] = props.location;
  if (y === 0) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x, y - 1]);
        }}
        // className={styles.arrowButton}
        className={css`
          ${sharedArrowStyles}
          top: 0;
          left: 15%;
          width: 70%;
          height: 15%;
        `}
      >
        <i className="fas fa-arrow-circle-up"></i>
      </div>
    );
  }
}
function DownArrow(props) {
  const [x, y] = props.location;
  if (y === CELL_COUNT.y - 1) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x, y + 1]);
        }}
        // className={styles.arrowButton}
        className={css`
          ${sharedArrowStyles}
          bottom: 0;
          left: 15%;
          width: 70%;
          height: 15%;
        `}
      >
        <i className="fas fa-arrow-circle-down"></i>
      </div>
    );
  }
}
function RightArrow(props) {
  const [x, y] = props.location;
  if (x === CELL_COUNT.x - 1) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x + 1, y]);
        }}
        // className={styles.arrowButton}
        className={css`
          ${sharedArrowStyles}
          top: 15%;
          right: 0;
          width: 15%;
          height: 70%;
        `}
      >
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    );
  }
}
function LeftArrow(props) {
  const [x, y] = props.location;
  if (x === 0) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x - 1, y]);
        }}
        // className={styles.arrowButton}
        className={css`
          ${sharedArrowStyles}
          top: 15%;
          left: 0;
          width: 15%;
          height: 70%;
        `}
      >
        <i className="fas fa-arrow-circle-left"></i>
      </div>
    );
  }
}
