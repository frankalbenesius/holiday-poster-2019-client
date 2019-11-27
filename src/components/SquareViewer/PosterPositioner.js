import React from "react";

export default function PosterPositioner(props) {
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
      {props.children}
    </div>
  );
}
