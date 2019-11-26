import React from "react";
import Square from "./Square";

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
    </PosterFrame>
  );
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
        height: "100%"
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
