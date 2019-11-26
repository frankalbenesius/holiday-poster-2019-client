import React from "react";

import Square from "../Square";
import PosterFrame from "./PosterFrame";
import SquareFrame from "./SquareFrame";
import PosterPositioner from "./PosterPositioner";
import AdjacentSquareDimmer from "./AdjacentSquareDimmer";
import ArrowControls from "./ArrowControls";

export default function SquareViewer(props) {
  return (
    <PosterFrame>
      <SquareFrame>
        <PosterPositioner location={props.location}>
          {props.squares.map(square => (
            <Square key={square.location} {...square} />
          ))}
        </PosterPositioner>
      </SquareFrame>
      <AdjacentSquareDimmer />
      <ArrowControls
        location={props.location}
        onLocationChange={props.onLocationChange}
      />
    </PosterFrame>
  );
}
