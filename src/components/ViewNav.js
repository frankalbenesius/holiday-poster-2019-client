import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

export default function ViewNav() {
  return (
    <Nav>
      <NavItem>Info</NavItem>
      <NavItem>Poster</NavItem>
      <NavItem>Chat</NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  flex: 0 0 auto;
  display: flex;
  background: COLORS.black;
`;

const NavItem = styled.div`
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
`;
