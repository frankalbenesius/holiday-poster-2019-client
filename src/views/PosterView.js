import React from "react";
import useLocalStorage from "react-use-localstorage";
import styled from "@emotion/styled";
import { useSwipeable } from "react-swipeable";

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

  const swipeHanders = useSwipeable({
    onSwipedRight: e => {
      const [x, y] = state.location;
      if (x < CELL_COUNT.x - 1) {
        setState({ ...state, location: [x + 1, y] });
      }
    },
    onSwipedLeft: e => {
      const [x, y] = state.location;
      if (x > 0) {
        setState({ ...state, location: [x - 1, y] });
      }
    },
    onSwipedUp: e => {
      const [x, y] = state.location;
      if (y > 0) {
        setState({ ...state, location: [x, y - 1] });
      }
    },
    onSwipedDown: e => {
      const [x, y] = state.location;
      if (y < CELL_COUNT.y - 1) {
        setState({ ...state, location: [x, y + 1] });
      }
    }
  });
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

  const currentSquare = squares.find(s => {
    return (
      s.location[0] === state.location[0] && s.location[1] === state.location[1]
    );
  });
  return (
    <PosterViewWrapper>
      <PosterStatusBar
        zoomedOut={state.zoomedOut}
        location={state.location}
        squares={squares}
      />
      <PosterArea {...swipeHanders}>
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
          label="Enter your passphrase to upload an image:"
          renderWithPassphrase={passphrase => (
            <ImageInput
              label={`Hi, ${currentSquare.participant}! Upload an image:`}
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
  width: 100%;
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
