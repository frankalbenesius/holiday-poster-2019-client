import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

export default function SquareMetaBar({ square }) {
  return (
    <Wrapper>
      <Name>{square.participant}</Name>
      <Coords>({square.location.join(", ")})</Coords>
    </Wrapper>
  );
}

const Coords = styled.div`
  flex: 0 0 auto;
  color: #aaa;
  margin: 0 0.25rem;
`;
const Name = styled.div`
  flex: 0 0 auto;
  margin: 0 0.25rem;
`;
const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  color: white;
  padding: 0.1rem;
  font-weight: bold;
  font-size: 0.8rem;
  background: ${COLORS.black};
  text-transform: uppercase;
  padding: 0 1rem;
`;
