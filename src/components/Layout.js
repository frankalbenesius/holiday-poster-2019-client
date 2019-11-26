import React from "react";

export default function(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.children}
    </div>
  );
}
