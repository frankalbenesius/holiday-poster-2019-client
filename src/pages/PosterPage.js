import React, { useState } from "react";
import useSWR from "swr";

import Page from "../components/Page";
import SquareViewer from "../components/SquareViewer";

export default function PosterPage(props) {
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
    <Page header="Collaborative Holliday Poster 2019">
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
      <div style={{ flex: "1 0 auto" }}>buttons</div>
    </Page>
  );
}

const getRandomLocation = () => [
  Math.floor(Math.random() * cells.x),
  Math.floor(Math.random() * cells.y)
];

const fetcher = url => fetch(url).then(r => r.json());

export const cells = {
  x: 8,
  y: 9
};
