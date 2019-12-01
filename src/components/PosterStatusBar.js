import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

export default function PosterStatusBar({ zoomedOut, location, squares }) {
  if (zoomedOut) {
    const percentComplete =
      squares.filter(s => !!s.image).length / squares.length;

    return (
      <Wrapper>
        The Whole Poster &mdash; {Math.round(percentComplete * 100)}% Complete
      </Wrapper>
    );
  }

  const currentSquare = squares.find(s => {
    return s.location[0] === location[0] && s.location[1] === location[1];
  });
  return (
    <Wrapper>
      <Name>{currentSquare.participant}</Name>
      <Coords>({currentSquare.location.join(", ")})</Coords>
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
