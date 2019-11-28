import React from "react";
import { css } from "emotion";

export default function PosterFrame(props) {
  return (
    <div
      className={css`
        flex: 0 0 auto;
        width: 100%;
        background: #333;
        position: relative;
        overflow: hidden;
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
