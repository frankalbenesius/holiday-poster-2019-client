import React from "react";
import fetch from "unfetch";
import TextForm from "./TextForm";

export default function MessageInput({ passphrase, revalidateMessages }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleMessageSubmit(message) {
    setLoading(true);
    fetch("https://poster-api.frank.dev/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: message, passphrase })
    })
      .then(res => {
        if (res.ok) {
          setError("");
        } else {
          res.json().then(err => {
            if (err.message) {
              setError(err.message);
            } else {
              setError("Something went wrong.");
            }
          });
        }
      })
      .finally(() => {
        setLoading(false);
        revalidateMessages();
      });
  }
  return (
    <TextForm
      label="Send a message:"
      name="message_input"
      placeholder="Hello, pals!"
      onSubmit={handleMessageSubmit}
      loading={loading}
      buttonText="Send"
      errorText={error}
    />
  );
}
