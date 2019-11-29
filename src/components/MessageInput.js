import React from "react";
import fetch from "unfetch";
import TextForm from "./TextForm";
import { API_URL } from "../constants";

export default function MessageInput({ passphrase, revalidateMessages }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleMessageSubmit(message) {
    setError("");
    setLoading(true);
    fetch(API_URL + "/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: message, passphrase })
    })
      .then(res => {
        if (!res.ok) {
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
