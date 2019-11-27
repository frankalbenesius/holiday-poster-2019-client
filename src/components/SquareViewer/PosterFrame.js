import React from "react";

export default function PosterFrame(props) {
  return (
    <div
      style={{
        flex: "0 0 auto",
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
