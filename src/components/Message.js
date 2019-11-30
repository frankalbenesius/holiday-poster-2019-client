import React from "react";
import styled from "@emotion/styled";
import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import { COLORS } from "../constants";

export default function Message({ message }) {
  return (
    <MessageWrapper isFrank={message.participant.toLowerCase() === "frank"}>
      <MessageMeta>
        <MessageParticipant>{message.participant}</MessageParticipant>
        <MessageTimestamp>{message.timestamp}</MessageTimestamp>
      </MessageMeta>
      {message.text}
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  margin-bottom: 0.5rem;
  background-color: ${p => (p.isFrank ? COLORS.tealLight : "inherit")};
`;

const MessageMeta = styled.div`
  display: block;
`;
const MessageParticipant = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

function MessageTimestamp({ children }) {
  const date = fromUnixTime(children._seconds);
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
