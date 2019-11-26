import React from "react";
import styles from "./ArrowControls.module.css";
import { cells } from "../../../App";

export default function ArrowControls(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      }}
    >
      <div style={{ paddingTop: "100%" }}></div>
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
        className={styles.arrowButton}
        style={{
          top: 0,
          left: "15%",
          width: "70%",
          height: "15%"
        }}
      >
        <i className="fas fa-arrow-circle-up"></i>
      </div>
    );
  }
}
function DownArrow(props) {
  const [x, y] = props.location;
  if (y === cells.y - 1) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x, y + 1]);
        }}
        className={styles.arrowButton}
        style={{
          bottom: 0,
          left: "15%",
          width: "70%",
          height: "15%"
        }}
      >
        <i className="fas fa-arrow-circle-down"></i>
      </div>
    );
  }
}
function RightArrow(props) {
  const [x, y] = props.location;
  if (x === cells.x - 1) {
    return null;
  } else {
    return (
      <div
        onClick={e => {
          props.onLocationChange([x + 1, y]);
        }}
        className={styles.arrowButton}
        style={{
          top: "15%",
          right: 0,
          width: "15%",
          height: "70%"
        }}
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
        className={styles.arrowButton}
        style={{
          top: "15%",
          left: 0,
          width: "15%",
          height: "70%"
        }}
      >
        <i className="fas fa-arrow-circle-left"></i>
      </div>
    );
  }
}
