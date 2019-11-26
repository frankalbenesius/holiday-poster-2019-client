import React from "react";
import useSWR from "swr";
import fetch from "unfetch";

const fetcher = url => fetch(url).then(r => r.json());

export default function SquaresProvider(props) {
  const { data: squares } = useSWR(
    "https://poster-api.frank.dev/squares",
    fetcher
  );

  if (!squares) {
    return <div>loading...</div>;
  }

  return props.render(squares);
}
