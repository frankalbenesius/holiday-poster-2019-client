import React from "react";
import useLocalStorage from "react-use-localstorage";
import fetch from "unfetch";

import TextForm from "./TextForm";

export default function PassphraseChecker(props) {
  const [passphrase, setPassphrase] = useLocalStorage("passphrase", "");
  const [defaultLocation, setDefaultLocation] = useLocalStorage(
    "defaultLocation"
  );

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  function handlePassphraseSubmit(proposedPassphrase) {
    setError("");
    setLoading(true);
    fetch("https://poster-api.frank.dev/locate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ passphrase: proposedPassphrase.toLowerCase() })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then(err => {
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
          setPassphrase(proposedPassphrase);
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
    return (
      <TextForm
        label="Enter your passphrase:"
        name="passphrase_input"
        placeholder="passphrase"
        onSubmit={handlePassphraseSubmit}
        loading={loading}
        errorText={error}
      />
    );
  } else {
    return props.renderWithPassphrase(passphrase);
  }
}
