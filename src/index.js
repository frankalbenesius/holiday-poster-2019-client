import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import "./index.css";
import App from "./App";

WebFont.load({
  google: {
    families: ["Calistoga", "Roboto"]
  },
  active: renderApp,
  inactive: renderApp
});

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
