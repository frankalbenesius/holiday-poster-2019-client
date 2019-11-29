import React, { useContext } from "react";
import styled from "@emotion/styled";

import { DispatchContext, StateContext } from "../App";
import { COLORS } from "../constants";

export default function ViewNav() {
  const { activeView } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const setView = view => event => {
    event.preventDefault();
    dispatch({
      type: "SET_ACTIVE_VIEW",
      view: view
    });
  };

  return (
    <Nav>
      <NavItem isActive={activeView === "info"} onClick={setView("info")}>
        Info
      </NavItem>
      <NavItem isActive={activeView === "poster"} onClick={setView("poster")}>
        Poster
      </NavItem>
      <NavItem isActive={activeView === "chat"} onClick={setView("chat")}>
        Chat
      </NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  border-top: 2px solid ${COLORS.tealDark};
  flex: 0 0 auto;
  display: flex;
  background: COLORS.teal;
`;

const NavItem = styled.div`
  flex: 1 0 auto;
  text-align: center;
  padding: 0.75rem 0.75rem 0.45rem 0.75rem;
  text-decoration: none;
  font-size: 1.5rem;
  background: ${COLORS.teal};
  border-bottom-width: 0.3rem;
  border-bottom-style: solid;
  border-bottom-color: ${p => (p.isActive ? COLORS.tealDark : COLORS.teal)};
`;
