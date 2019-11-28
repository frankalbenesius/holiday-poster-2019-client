import React from "react";
import { css } from "emotion";

import useTimeUntil2020 from "../hooks/useTimeUntil2020";
import { COLORS } from "../constants";

export default function Layout(props) {
  return (
    <div
      className={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <PageHeader />
      <div
        className={css`
          flex: 1 0 auto;
          display: flex;
          flex-direction: column;
        `}
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
      className={css`
        flex: 0 0 auto;
        display: flex;
        background: COLORS.black;
      `}
    >
      {props.children}
    </nav>
  );
}

function Link(props) {
  return (
    <div
      className={css`
        flex: 1 0 auto;
        text-align: center;
        padding: 0.75rem 0.75rem 0.3rem 0.75rem;
        text-decoration: none;
        font-size: 1.5rem;
        background: ${COLORS.black};
        border-bottom-width: 0.45rem;
        border-bottom-style: solid;
        border-bottom-color: ${COLORS.black};
        color: ${COLORS.white};
      `}
      // activeStyle={{
      //   borderBottomColor: COLORS.gray
      // }}
      {...props}
    />
  );
}

function PageHeader() {
  return (
    <header
      className={css`
        text-align: center;
        background-color: ${COLORS.black};
        color: ${COLORS.white};
        padding: 0.5rem 1rem;
        width: 100%;
        font-size: 1.5rem;
      `}
    >
      The Poster Project
      <div
        className={css`
          font-size: 0.8rem;
        `}
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
