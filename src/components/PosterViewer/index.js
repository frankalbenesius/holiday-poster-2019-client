import React from "react";

import PosterSquare from "../PosterSquare";
import PosterFrame from "./PosterFrame";
import SquareFrame from "./SquareFrame";
import PosterPositioner from "./PosterPositioner";
import AdjacentSquareDimmer from "./AdjacentSquareDimmer";
import PosterControls from "./PosterControls";
import PosterHeader from "../PosterHeader";

export default function PosterViewer({
  onZoomedOutChange,
  zoomedOut,
  squares,
  location,
  onLocationChange
}) {
  return (
    <PosterFrame>
      <SquareFrame>
        <PosterPositioner zoomedOut={zoomedOut} location={location}>
          <PosterHeader />
          {squares.map(square => (
            <PosterSquare key={square.location} {...square} />
          ))}
        </PosterPositioner>
      </SquareFrame>
      {!zoomedOut && <AdjacentSquareDimmer />}
      <PosterControls
        zoomedOut={zoomedOut}
        onZoomedOutChange={onZoomedOutChange}
        location={location}
        onLocationChange={onLocationChange}
      />
    </PosterFrame>
  );
}
