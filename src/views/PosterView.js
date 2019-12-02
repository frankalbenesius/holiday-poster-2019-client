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

function move(state, setState, direction) {
  const [x, y] = state.location;
  switch (direction) {
    case "right": {
      if (x < CELL_COUNT.x - 1) {
        setState({ ...state, location: [x + 1, y] });
      }
      break;
    }
    case "left": {
      if (x > 0) {
        setState({ ...state, location: [x - 1, y] });
      }
      break;
    }
    case "up": {
      if (y > 0) {
        setState({ ...state, location: [x, y - 1] });
      }
      break;
    }
    case "down": {
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

export default function PosterView({
  squares,
  revalidateSquares,
  imageInputId
}) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);
  const parsedLocationString = parseLocationStr(defaultLocation);
  const initialLocation =
    parsedLocationString && parsedLocationString.every(v => v >= 0)
      ? parsedLocationString
      : getRandomLocation();
  const [state, setState] = React.useState({
    location: initialLocation,
    zoomedOut: false
  });
  console.log("state.location", state.location);

  React.useEffect(() => {
    if (defaultLocation) {
      const parsedLocationString = parseLocationStr(defaultLocation);
      if (parsedLocationString.every(v => v >= 0)) {
        setState(state => ({
          ...state,
          location: parseLocationStr(defaultLocation)
        }));
      }
    }
  }, [defaultLocation]);

  const swipeHanders = useSwipeable({
    onSwipedRight: e => {
      move(state, setState, "left");
    },
    onSwipedLeft: e => {
      move(state, setState, "right");
    },
    onSwipedUp: e => {
      move(state, setState, "down");
    },
    onSwipedDown: e => {
      move(state, setState, "up");
    }
  });

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (!state.zoomedOut) {
        const { key } = event;
        if (key) {
          const direction = key.substring(5).toLowerCase();
          move(state, setState, direction);
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [state]);

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
          renderWithPassphrase={passphrase => {
            const usersLocation = parseLocationStr(defaultLocation);
            if (usersLocation && usersLocation.some(v => v < 0)) {
              return <div>You can't upload an image, Frank.</div>;
            }
            return (
              <ImageInput
                passphrase={passphrase}
                inputId={imageInputId}
                afterSubmit={() => {
                  revalidateSquares();
                  setState(state => {
                    return {
                      location: usersLocation ? usersLocation : state.location,
                      zoomedOut: false
                    };
                  });
                }}
              />
            );
          }}
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
