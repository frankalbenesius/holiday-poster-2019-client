import React from "react";
import styled from "@emotion/styled";
import { CELL_COUNT } from "../constants";

export default function PosterHeader(props) {
  return (
    <HeaderImg
      alt="header"
      src={
        "https://storage.googleapis.com/holiday-poster-2019.appspot.com/header.png"
      }
    />
  );
}

const HeaderImg = styled.img`
  width: ${100 * CELL_COUNT.x}%;
  position: absolute;
  bottom: 100%;
  left: 0;
`;
