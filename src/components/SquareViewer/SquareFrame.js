import React from "react";

export default function SquareFrame(props) {
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
