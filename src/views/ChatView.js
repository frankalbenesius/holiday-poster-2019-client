import React from "react";
import styled from "@emotion/styled";

import MessageInput from "../components/MessageInput";
import PassphraseChecker from "../components/PassphraseChecker";
import { COLORS } from "../constants";
import Message from "../components/Message";

export default function ChatView({ messages, revalidateMessages }) {
  const messagesEndRef = React.useRef(null);
  const scrollToBottom = () => {
    if (messages) {
      messagesEndRef.current.scrollIntoView();
    }
  };
  React.useEffect(scrollToBottom, [messages]);

  if (!messages) {
    return <div>loading...</div>;
  }

  return (
    <ChatViewWrapper>
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
