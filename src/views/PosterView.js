import React, { useState } from "react";
import useSWR from "swr";
import { css } from "emotion";

import SquareViewer from "../components/SquareViewer";
import { fetcher, getRandomLocation } from "../lib/util";

export default function PosterView() {
  const [state, setState] = useState({
    location: getRandomLocation()
  });

  const { data: squares } = useSWR(
    "https://poster-api.frank.dev/squares",
    fetcher
  );

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
      <div
        className={css`
          flex: 1 0 auto;
        `}
      ></div>
    </div>
  );
}
