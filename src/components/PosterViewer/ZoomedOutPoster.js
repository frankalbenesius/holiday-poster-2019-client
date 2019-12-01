import React from "react";
import styled from "@emotion/styled";
import { CELL_COUNT, HEADER_URL, COLORS } from "../../constants";
import { SquarePaddingPush } from "./AdjacentSquareDimmer";

export default function ZoomedOutPoster({ squares, onLocationClick }) {
  const posterRef = React.useRef(null);
  return (
    <ZoomedOutPosterWrapper ref={posterRef}>
      <PosterRatioPusher />
      <HeaderImg src={HEADER_URL} />
      {squares.map(square => {
        const [x, y] = square.location;
        if (x < 0 || y < 0 || x >= CELL_COUNT.x || y >= CELL_COUNT.y) {
          return null;
        }
        const left = (100 / CELL_COUNT.x) * x;
        const bottom = (84.375 / CELL_COUNT.y) * (CELL_COUNT.y - 1 - y);
        return (
          <SquareContainer
            left={left}
            bottom={bottom}
            isEven={(x + y) % 2 === 0}
            key={square.location}
            onClick={() => {
              onLocationClick(square.location);
            }}
          >
            <SquarePaddingPush />
            {square.image ? (
              <SquareImg src={square.image} />
            ) : (
              <i className="fas fa-question"></i>
            )}
          </SquareContainer>
        );
      })}
    </ZoomedOutPosterWrapper>
  );
}

const ZoomedOutPosterWrapper = styled.div`
  background-color: black;
  flex: 0 0 auto;
  width: 100%;
  max-width: 40vh;
  position: relative;
`;

const PosterRatioPusher = styled.div`
  padding-top: ${(24 / 18) * 100}%;
`;

const HeaderImg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SquareContainer = styled.div`
  position: absolute;
  left: ${p => p.left}%;
  bottom: ${p => p.bottom}%;
  width: ${100 / CELL_COUNT.x}%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => (p.isEven ? COLORS.grayDark : COLORS.grayDarker)};
  color: ${p => (!p.isEven ? COLORS.grayDark : COLORS.grayDarker)};
`;

const SquareImg = styled.img`
  width: 100%;
  display: block;
`;
