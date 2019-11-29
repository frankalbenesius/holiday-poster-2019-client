import React from "react";
import useLocalStorage from "react-use-localstorage";
import styled from "@emotion/styled";

import SquareViewer from "../components/SquareViewer";
import { getRandomLocation, parseLocationStr } from "../lib/util";
import PassphraseChecker from "../components/PassphraseChecker";
import { COLORS } from "../constants";
import LoadingScreen from "../components/LoadingScreen";

export default function PosterView({ squares }) {
  const [defaultLocation] = useLocalStorage("defaultLocation");

  const [state, setState] = React.useState({
    location: defaultLocation
      ? parseLocationStr(defaultLocation)
      : getRandomLocation()
  });

  React.useEffect(() => {
    if (defaultLocation) {
      setState({
        location: parseLocationStr(defaultLocation)
      });
    }
  }, [defaultLocation]);

  if (!squares) {
    return <LoadingScreen />;
  }

  return (
    <PosterViewWrapper>
      <PosterArea>
        <SquareViewer
          squares={squares}
          location={state.location}
          onLocationChange={location => {
            setState({
              ...state,
              location
            });
          }}
        />
      </PosterArea>
      <UploadArea>
        <PassphraseChecker
          renderWithPassphrase={passphrase => <div>{passphrase}</div>}
        />
      </UploadArea>
    </PosterViewWrapper>
  );
}

const PosterViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const PosterArea = styled.div`
  flex: 0 0 auto;
  overflow-y: scroll;
`;
const UploadArea = styled.div`
  flex: 0 0 auto;
  border-top: 2px solid ${COLORS.tealDark};
  padding: 1rem;
`;
