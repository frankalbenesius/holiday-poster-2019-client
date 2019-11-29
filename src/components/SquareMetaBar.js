import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

export default function SquareMetaBar({ square }) {
  return <Wrapper>{square.participant}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  color: white;
  padding: 0.1rem;
  font-weight: bold;
  font-size: 0.8rem;
  background: ${COLORS.black};
  text-transform: uppercase;
`;
