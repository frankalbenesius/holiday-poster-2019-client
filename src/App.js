import React from "react";
import useSWR from "swr";
import fetch from "unfetch";
import "./App.css";
import Square from "./components/Square";

const fetcher = url => fetch(url).then(r => r.json());

function App() {
  const { data: squares } = useSWR(
    "https://poster-api.frank.dev/squares",
    fetcher
  );

  if (!squares) {
    return null;
  }

  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        {squares.map(square => (
          <Square key={square.location} {...square} />
        ))}
      </div>
    </div>
  );
}

export default App;
