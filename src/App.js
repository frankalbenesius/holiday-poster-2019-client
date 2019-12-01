import React from "react";

import Layout from "./components/Layout";
import DataProvider from "./components/DataProvider";

export default function App() {
  return (
    <ContextProvider>
      <DataProvider render={data => <Layout data={data} />} />
    </ContextProvider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_VIEW": {
      return {
        ...state,
        activeView: action.view
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StateContext = React.createContext(null);
export const DispatchContext = React.createContext(null);

function ContextProvider(props) {
  React.useEffect(() => {
    if (window && window.localStorage) {
      window.localStorage.setItem("hasVisitedBefore", "yep");
    }
  }, []);

  const hasVisitedBefore =
    window && window.localStorage
      ? !!window.localStorage.getItem("hasVisitedBefore")
      : true;
  const [state, dispatch] = React.useReducer(reducer, {
    activeView: hasVisitedBefore ? "poster" : "info"
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
