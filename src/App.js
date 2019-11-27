import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PosterPage from "./pages/PosterPage";
import InfoPage from "./pages/InfoPage";
import ChatPage from "./pages/ChatPage";
import IndexPage from "./pages/IndexPage";
import MissingPage from "./pages/MissingPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/info">
          <InfoPage />
        </Route>
        <Route path="/poster">
          <PosterPage />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="*">
          <MissingPage />
        </Route>
      </Switch>
    </Router>
  );
}
