import React from "react";

const squareWidth = 200;

export default function Square(props) {
  const [left, top] = getLocationInPixels(props.location);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        left: left,
        top: top,
        width: squareWidth,
        height: squareWidth,
        color: "white",
        textTransform: "uppercase",
        background: createStripesBG(props.location)
      }}
    >
      <div>RESERVED FOR:</div>
      <div>{props.participant}</div>
      <img
        alt=""
        style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
        src={props.image}
      />
    </div>
  );
}

const getLocationInPixels = location => location.map(n => n * squareWidth);

const createStripesBG = location => {
  const colorA = "#222";
  const colorB = "#333";
  const isEven = (location[0] + location[1]) % 2 === 0;
  const deg = isEven ? "45" : "-45";
  return `repeating-linear-gradient(
    ${deg}deg,
    ${colorA},
    ${colorA} 4px,
    ${colorB} 4px,
    ${colorB} 8px
  )`;
};
