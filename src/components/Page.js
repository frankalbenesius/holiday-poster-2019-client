import React from "react";

import { NavLink } from "react-router-dom";

export default function(props) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header>{props.header}</Header>
      <div
        style={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}
      >
        {props.children}
      </div>
      <Nav>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/poster">Poster</NavLink>
        <NavLink to="/chat">Chat</NavLink>
      </Nav>
    </div>
  );
}

function Nav(props) {
  return <nav style={{ flex: "0 0 auto" }}>{props.children}</nav>;
}

function Header(props) {
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
