import React from "react";
import styled from "@emotion/styled";
import { CELL_COUNT } from "../constants";

export default function PosterHeader(props) {
  return (
    <HeaderImg alt="header" src={`${process.env.PUBLIC_URL}/header.png`} />
  );
}

const HeaderImg = styled.img`
  width: ${100 * CELL_COUNT.x}%;
  position: absolute;
  bottom: 100%;
  left: 0;
`;
