import React from "react";
import styled from "@emotion/styled";

import MessageInput from "../components/MessageInput";
import PassphraseChecker from "../components/PassphraseChecker";
import { COLORS } from "../constants";
import Message from "../components/Message";
import LoadingScreen from "../components/LoadingScreen";

export default function ChatView({ messages, revalidateMessages }) {
  const messagesEndRef = React.useRef(null);
  const prevMessageCountRef = React.useRef(null);

  React.useEffect(() => {
    if (messages && messages.length > prevMessageCountRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  React.useEffect(() => {
    if (messages) {
      prevMessageCountRef.current = messages.length;
    }
  });

  if (!messages) {
    return <LoadingScreen />;
  }

  return (
    <ChatViewWrapper>
      <ShittyChatHeader>CHAT!</ShittyChatHeader>
      <MessagesArea>
        {messages.length < 1 && (
          <NoMessagesMessage>
            No messages yet!
            <br />
            Be the change you want to see in this Chat.
          </NoMessagesMessage>
        )}
        {messages.sort(sortByTimestamp).map(message => {
          return (
            <Message
              message={message}
              key={JSON.stringify(message.timestamp)}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </MessagesArea>
      <InputArea>
        <PassphraseChecker
          label="Enter your passphrase to start chatting:"
          renderWithPassphrase={passphrase => (
            <MessageInput
              passphrase={passphrase}
              revalidateMessages={revalidateMessages}
            />
          )}
        />
      </InputArea>
    </ChatViewWrapper>
  );
}

function sortByTimestamp(a, b) {
  return a.timestamp._seconds - b.timestamp._seconds;
}

const ShittyChatHeader = styled.div`
  flex: 0 0 auto;
  padding: 0.2rem 1rem;
  border-top: 1px solid ${COLORS.tealDark};
  background: ${COLORS.pinkDark};
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;
const ChatViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const MessagesArea = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem 0;
  overflow-y: scroll;
`;
const InputArea = styled.div`
  flex: 0 0 auto;
  border-top: 2px solid ${COLORS.tealDark};
  padding: 1rem;
`;

const NoMessagesMessage = styled.div`
  text-align: center;
`;
