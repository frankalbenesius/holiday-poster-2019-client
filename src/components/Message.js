import React from "react";
import styled from "@emotion/styled";
import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import { COLORS } from "../constants";

export default function Message({ message, square }) {
  let squareContent = <i className="fas fa-question"></i>;
  if (square && square.image) {
    squareContent = <Image alt="" src={square.image} />;
  }
  if (square && square.participant.toLowerCase() === "frank") {
    squareContent = (
      <Image alt="" src={`${process.env.PUBLIC_URL}/welcome.gif`} />
    );
  }
  return (
    <MessageWrapper isFrank={message.participant.toLowerCase() === "frank"}>
      <ImageWrapper>{squareContent}</ImageWrapper>
      <NonImageWrapper>
        <MessageMeta>
          <MessageParticipant>{message.participant}</MessageParticipant>
          <MessageTimestamp>{message.timestamp}</MessageTimestamp>
        </MessageMeta>
        {message.text}
      </NonImageWrapper>
    </MessageWrapper>
  );
}

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  background: ${COLORS.grayDarker};
  color: ${COLORS.gray};
`;

const NonImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  background: black;
`;

const MessageWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  background-color: ${(p) => (p.isFrank ? COLORS.tealLight : "inherit")};
`;

const MessageMeta = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MessageParticipant = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

function MessageTimestamp({ children }) {
  const date = fromUnixTime(children.seconds);
  return (
    <MessageTimestampStyles>
      {format(date, "M/dd/yy h:mm aaaa")}
    </MessageTimestampStyles>
  );
}

const MessageTimestampStyles = styled.span`
  margin-left: 1rem;
  font-size: 0.9em;
  font-style: italic;
`;
