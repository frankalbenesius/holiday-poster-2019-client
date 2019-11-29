import React from "react";

import PosterSquare from "../PosterSquare";
import PosterFrame from "./PosterFrame";
import SquareFrame from "./SquareFrame";
import PosterPositioner from "./PosterPositioner";
import AdjacentSquareDimmer from "./AdjacentSquareDimmer";
import PosterControls from "./PosterControls";

export default function SquareViewer(props) {
  return (
    <PosterFrame>
      <SquareFrame>
        <PosterPositioner location={props.location}>
          {props.squares.map(square => (
            <PosterSquare key={square.location} {...square} />
          ))}
        </PosterPositioner>
      </SquareFrame>
      <AdjacentSquareDimmer />
      <PosterControls
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
    </PosterFrame>
  );
}
