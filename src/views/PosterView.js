import React from "react";
import useLocalStorage from "react-use-localstorage";
import styled from "@emotion/styled";

import PosterViewer from "../components/PosterViewer";
import { getRandomLocation, parseLocationStr } from "../lib/util";
import PassphraseChecker from "../components/PassphraseChecker";
import { CELL_COUNT, LOCATION_KEY, COLORS } from "../constants";
import LoadingScreen from "../components/LoadingScreen";
import PosterStatusBar from "../components/PosterStatusBar";
import ImageInput from "../components/ImageInput";

export default function PosterView({ squares, revalidateSquares }) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);
  const [state, setState] = React.useState({
    location: defaultLocation
      ? parseLocationStr(defaultLocation)
      : getRandomLocation(),
    zoomedOut: false
  });

  React.useEffect(() => {
    if (defaultLocation) {
      setState(state => ({
        ...state,
        location: parseLocationStr(defaultLocation)
      }));
    }
  }, [defaultLocation]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (!state.zoomedOut) {
        const { key } = event;
        const [x, y] = state.location;
        switch (key) {
          case "ArrowRight": {
            if (x < CELL_COUNT.x - 1) {
              setState({ ...state, location: [x + 1, y] });
            }
            break;
          }
          case "ArrowLeft": {
            if (x > 0) {
              setState({ ...state, location: [x - 1, y] });
            }
            break;
          }
          case "ArrowUp": {
            if (y > 0) {
              setState({ ...state, location: [x, y - 1] });
            }
            break;
          }
          case "ArrowDown": {
            if (y < CELL_COUNT.y - 1) {
              setState({ ...state, location: [x, y + 1] });
            }
            break;
          }
          default: {
            break;
          }
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [state, setState]);

  if (!squares) {
    return <LoadingScreen />;
  }

  return (
    <PosterViewWrapper>
      <PosterStatusBar
        zoomedOut={state.zoomedOut}
        location={state.location}
        squares={squares}
      />
      <PosterArea>
        <PosterViewer
          zoomedOut={state.zoomedOut}
          squares={squares}
          location={state.location}
          onLocationChange={location => {
            setState({
              zoomedOut: false,
              location
            });
          }}
          onZoomedOutChange={zoomedOut =>
            setState({
              ...state,
              zoomedOut
            })
          }
        />
      </PosterArea>
      <UploadArea>
        <PassphraseChecker
          renderWithPassphrase={passphrase => (
            <ImageInput
              passphrase={passphrase}
              afterSubmit={() => {
                revalidateSquares();
                setState(state => {
                  return {
                    location: defaultLocation
                      ? parseLocationStr(defaultLocation)
                      : state.location,
                    zoomedOut: false
                  };
                });
              }}
            />
          )}
        />
      </UploadArea>
    </PosterViewWrapper>
  );
}

const PosterViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${COLORS.pink};
`;
const PosterArea = styled.div`
  flex: 1 1 auto;
  overflow: scroll;
  display: flex;
`;
const UploadArea = styled.div`
  border-top: 2px solid ${COLORS.tealDark};
  flex: 0 0 auto;
  padding: 1rem;
  background: ${COLORS.white};
`;
