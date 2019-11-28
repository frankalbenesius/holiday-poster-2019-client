import React from "react";
import { css } from "emotion";

export default function Square(props) {
  const [left, top] = getLocationInPixels(props.location);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        left: ${left};
        top: ${top};
        width: 100%;
        height: 100%;
        color: white;
        background: ${createStripesBG(props.location)};
      `}
    >
      <div>Reserved For</div>
      <div
        className={css`
          text-transform: capitalize;
        `}
      >
        {props.participant}
      </div>
      <img
        alt=""
        className={css`
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        `}
        src={props.image}
      />
      <div
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          padding: 0.1rem;
          color: white;
          fontsize: 0.8em;
        `}
      >
        [{props.location.join(",")}]
      </div>
    </div>
  );
}

const getLocationInPixels = location => location.map(n => n * 100 + "%");

const createStripesBG = location => {
  const colorA = "#333";
  const colorB = "#555";
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
