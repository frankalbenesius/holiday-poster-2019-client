import React from "react";
import styled from "@emotion/styled";

export default function PosterSquare(props) {
  const [left, top] = getLocationInPixels(props.location);

  return (
    <PosterSquareWrapper top={top} left={left} location={props.location}>
      <div>Reserved For</div>
      <ParticipantName>{props.participant}</ParticipantName>
      {props.image && (
        <>
          <BlackFill />
          <PosterSquareImage alt="" src={props.image} />
        </>
      )}
    </PosterSquareWrapper>
  );
}

const PosterSquareImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const BlackFill = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  left: 0;
  top: 0;
`;

const ParticipantName = styled.div`
  font-family: "Calistoga";
  font-size: 1.5em;
  text-transform: capitalize;
`;

const PosterSquareWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: ${p => p.left};
  top: ${p => p.top};
  width: 100%;
  height: 100%;
  color: white;
  background: ${props => createStripesBG(props.location)};
`;

const getLocationInPixels = location => location.map(n => n * 100 + "%");

const createStripesBG = location => {
  const colorA = "#333";
  const colorB = "#555";
  const isEven = (location[0] + location[1]) % 2 === 0;
  const deg = isEven ? "45" : "-45";
  return `repeating-linear-gradient(
    ${deg}deg,
    ${colorA},
    ${colorA} 4px,
    ${colorB} 4px,
    ${colorB} 8px
  )`;
};
