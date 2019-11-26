import React from "react";

export default function(props) {
  return (
    <header
      style={{
        textAlign: "center",
        background: "rgb(160,0,10)",
        color: "white",
        padding: "0.5rem 0",
        width: "100%",
        fontFamily: "Calistoga"
      }}
    >
      {props.children}
    </header>
  );
}
