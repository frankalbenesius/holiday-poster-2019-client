import React from "react";
import styled from "@emotion/styled";
import { COLORS, LOCATION_KEY } from "../constants";
import useLocalStorage from "react-use-localstorage";
import { parseLocationStr } from "../lib/util";

export default function PosterStatusBar({ zoomedOut, location, squares }) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);

  if (zoomedOut) {
    const percentComplete =
      squares.filter((s) => !!s.image).length / (squares.length - 1);

    return (
      <Wrapper>
        The Whole Poster &mdash; {Math.round(percentComplete * 100)}% Complete
      </Wrapper>
    );
  }

  const currentSquare = squares.find((s) => {
    return s.location.toString() === location.toString();
  });
  const name = currentSquare.participant;

  let showYou = false;
  if (defaultLocation) {
    const parsedStoredLocation = parseLocationStr(defaultLocation);
    if (parsedStoredLocation.toString() === location.toString()) {
      showYou = true;
    }
  }

  return (
    <Wrapper>
      <Name>
        {name} {showYou && <You>You!</You>}
      </Name>
      <Coords>({currentSquare.location.join(", ")})</Coords>
    </Wrapper>
  );
}

const Coords = styled.div`
  flex: 0 0 auto;
  color: #aaa;
  margin: 0 0.25rem;
`;
const Name = styled.div`
  flex: 0 0 auto;
  margin: 0 0.25rem;
`;
const You = styled.span`
  color: ${COLORS.teal};
  padding-left: 0.25rem;
  font-style: italic;
`;
const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex: 0 1 auto;
  justify-content: center;
  color: white;
  padding: 0.1rem;
  font-weight: bold;
  font-size: 0.8rem;
  background: ${COLORS.black};
  text-transform: uppercase;
  padding: 0 1rem;
`;
