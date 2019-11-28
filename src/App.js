import React from "react";
import Layout from "./components/Layout";
import ViewRouter from "./components/ViewRouter";

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <ViewRouter />
      </Layout>
    </AppProvider>
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

function AppProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    activeView: "poster"
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
