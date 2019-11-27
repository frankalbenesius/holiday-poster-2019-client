import React from "react";
import { NavLink } from "react-router-dom";

import colors from "../../colors";
import useTimeUntil2020 from "../../hooks/useTimeUntil2020";

export default function(props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <PageHeader />
      <div
        style={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}
      >
        {props.children}
      </div>
      <Nav>
        <Link to="/info">Info</Link>
        <Link to="/poster" dividers="true">
          Poster
        </Link>
        <Link to="/chat">Chat</Link>
      </Nav>
    </div>
  );
}

function Nav(props) {
  return (
    <nav
      style={{ flex: "0 0 auto", display: "flex", background: colors.red[2] }}
    >
      {props.children}
    </nav>
  );
}

function Link(props) {
  return (
    <NavLink
      style={{
        flex: "1 0 auto",
        textAlign: "center",
        padding: "0.75rem 0.75rem 0.3rem 0.75rem",
        textDecoration: "none",
        fontSize: "1.5rem",
        background: colors.red[2],
        borderBottomWidth: "0.45rem",
        borderBottomStyle: "solid",
        borderBottomColor: colors.red[2],
        color: colors.white
      }}
      activeStyle={{
        borderBottomColor: colors.red[3]
      }}
      {...props}
    />
  );
}

function PageHeader() {
  return (
    <header
      style={{
        textAlign: "center",
        backgroundColor: colors.red[2],
        color: colors.white,
        padding: "0.5rem 1rem",
        width: "100%",
        fontSize: "1.5rem"
      }}
    >
      The Poster Project
      <div
        style={{
          fontSize: "0.8rem"
        }}
      >
        Time Left &mdash; <TimeUntil2020 />
      </div>
    </header>
  );
}

function TimeUntil2020() {
  const timerText = useTimeUntil2020();
  return <span>{timerText}</span>;
}
