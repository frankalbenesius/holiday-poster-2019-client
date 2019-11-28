import React from "react";
import { css } from "emotion";

export default function SquareFrame(props) {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 70%;
        margin: 15%;
        background: #999;
      `}
    >
      <div
        className={css`
          padding-top: 100%;
        `}
      ></div>
      {props.children}
    </div>
  );
}
