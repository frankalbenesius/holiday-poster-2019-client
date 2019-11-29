import React from "react";

import SquareViewer from "../components/SquareViewer";
import { getRandomLocation } from "../lib/util";

export default function PosterView({ squares }) {
  const [state, setState] = React.useState({
    location: getRandomLocation()
  });

  if (!squares) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <SquareViewer
        squares={squares}
        location={state.location}
        onLocationChange={location => {
          setState({
            ...state,
            location
          });
        }}
      />
    </div>
  );
}
