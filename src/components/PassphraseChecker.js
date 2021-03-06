import React from "react";
import useLocalStorage from "react-use-localstorage";
import fetch from "unfetch";

import TextForm from "./TextForm";
import { PASSPHRASE_KEY, LOCATION_KEY } from "../constants";
import { submissionsClosed } from "../hooks/useTimeUntil2020";

export default function PassphraseChecker(props) {
  const [passphrase, setPassphrase] = useLocalStorage(PASSPHRASE_KEY, "");
  const [defaultLocation, setDefaultLocation] = useLocalStorage(LOCATION_KEY);

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function handlePassphraseSubmit(proposedPassphrase) {
    setError("");
    setLoading(true);
    const lowercasePassphrase = proposedPassphrase.toLowerCase();
    fetch("https://poster-api.frank.dev/locate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ passphrase: lowercasePassphrase }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((err) => {
            if (err.message) {
              setError(error.message);
            } else {
              setError("Something went wrong.");
            }
          });
        }
      })
      .then(({ location }) => {
        if (location) {
          setPassphrase(lowercasePassphrase);
          setDefaultLocation(location.toString());
        } else {
          setError("Not a valid passphrase, bud.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (!passphrase || !defaultLocation) {
    const label = props.label || "Enter your passphrase:";
    return (
      <TextForm
        disabled={submissionsClosed()}
        label={label}
        name="passphrase_input"
        placeholder={
          submissionsClosed() ? "Passphrases are inactive." : "passphrase"
        }
        onSubmit={handlePassphraseSubmit}
        loading={loading}
        errorText={error}
      />
    );
  } else {
    return props.renderWithPassphrase(passphrase);
  }
}
