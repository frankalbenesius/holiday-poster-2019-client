import React, { useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import useSWR from "swr";
import SquareViewer from "./components/SquareViewer";

export const cells = {
  x: 8,
  y: 9
};

export default function App() {
  const [state, setState] = useState({
    location: getRandomLocation(),
    passphrase: ""
  });

  const { data: squares } = useSWR(
    "https://poster-api.frank.dev/squares",
    fetcher
  );

  if (!squares) {
    return <div>loading...</div>;
  }

  return (
    <Layout>
      <Header>Collaborative Holliday Poster 2019</Header>
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
      <div>buttons</div>
    </Layout>
  );
}

const getRandomLocation = () => [
  Math.floor(Math.random() * cells.x),
  Math.floor(Math.random() * cells.y)
];

const fetcher = url => fetch(url).then(r => r.json());
