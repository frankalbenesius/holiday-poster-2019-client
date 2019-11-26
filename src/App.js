import React, { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import useSWR from "swr";
import SquareViewer from "./components/SquareViewer";

export default function App() {
  const [state, setState] = useState({
    location: getRandomLocation(),
    passphrase: ""
  });

  useInterval(() => {
    setState({
      ...state,
      location: getRandomLocation()
    });
  }, 2000);

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
      <SquareViewer squares={squares} location={state.location} />
      <div>buttons</div>
    </Layout>
  );
}

const getRandomLocation = () => [
  Math.floor(Math.random() * 8),
  Math.floor(Math.random() * 9)
];

const fetcher = url => fetch(url).then(r => r.json());

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
