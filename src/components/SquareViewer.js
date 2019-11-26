import React from "react";
import Square from "./Square";
import { cells } from "../App";

export default function SquareViewer(props) {
  return (
    <PosterFrame>
      <SquareFrame>
        <PosterPositioner location={props.location}>
          {props.squares.map(square => (
            <Square key={square.location} {...square} />
          ))}
        </PosterPositioner>
      </SquareFrame>
      <AdjacentSquareDimmer />
      <ArrowControls
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
    </PosterFrame>
  );
}

function ArrowControls(props) {
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

const arrowStyles = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2em"
};
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
        style={{
          ...arrowStyles,
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
        style={{
          ...arrowStyles,
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
        style={{
          ...arrowStyles,
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
        style={{
          ...arrowStyles,
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

function PosterPositioner(props) {
  const [x, y] = props.location;
  const left = x * -100 + "%";
  const top = y * -100 + "%";
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "100%",
        height: "100%",
        transition: "top 0.5s, left 0.5s"
      }}
    >
      <div style={{ paddingTop: "100%" }}></div>
      {props.children}
    </div>
  );
}

function SquareFrame(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "70%",
        margin: "15%",
        background: "#999"
      }}
    >
      <div style={{ paddingTop: "100%" }}></div>
      {props.children}
    </div>
  );
}

function PosterFrame(props) {
  return (
    <div
      style={{
        flex: "0 0",
        width: "100%",
        background: "black",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div style={{ paddingTop: "100%" }}></div>
      {props.children}
    </div>
  );
}

function AdjacentSquareDimmer() {
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "15%",
          background: "rgba(0,0,0,0.25)"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: 0,
          width: "15%",
          height: "70%",
          background: "rgba(0,0,0,0.25)"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "15%",
          background: "rgba(0,0,0,0.25)"
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "15%",
          width: "15%",
          height: "70%",
          background: "rgba(0,0,0,0.25)"
        }}
      ></div>
    </div>
  );
}
