import React from "react";
import { css } from "emotion";

export default function AdjacentSquareDimmer() {
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
          paddingtop: 100%;
        `}
      ></div>
      <div
        className={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15%;
          background: rgba(0;0;0;0.25);
        `}
      ></div>
      <div
        className={css`
          position: absolute;
          top: 15%;
          left: 0;
          width: 15%;
          height: 70%;
          background: rgba(0;0;0;0.25);
        `}
      ></div>
      <div
        className={css`
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 15%;
          background: rgba(0;0;0;0.25);
        `}
      ></div>
      <div
        className={css`
          position: absolute;
          right: 0;
          top: 15%;
          width: 15%;
          height: 70%;
          background: rgba(0;0;0;0.25);
        `}
      ></div>
    </div>
  );
}
