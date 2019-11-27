import React from "react";

import Page from "../components/Page";

export default function MissingPage() {
  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        how did you get here?
        <img
          alt="silly harry potter gif"
          src="https://i.pinimg.com/originals/f5/86/74/f5867464631f045051e14b02838b0506.gif"
        />
      </div>
    </Page>
  );
}
