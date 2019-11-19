import React from "react";
import useSWR from "swr";
import fetch from "unfetch";
import "./App.css";

const fetcher = url => fetch(url).then(r => r.json());

function App() {
  const { data: squares } = useSWR(
    "https://poster-api.frank.dev/squares",
    fetcher
  );

  console.log(squares);

  if (!squares) {
    return null;
  }

  return (
    <div className="App">
      {squares.map(square => (
        <div key={square.loc}>
          {square.loc} | {square.recipient}
        </div>
      ))}
    </div>
  );
}

export default App;
