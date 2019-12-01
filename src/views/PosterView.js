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
  const [zoomedOut, setZoomedOut] = React.useState(false);
  const [location, setLocation] = React.useState(
    defaultLocation ? parseLocationStr(defaultLocation) : getRandomLocation()
  );

  React.useEffect(() => {
    if (defaultLocation) {
      setLocation(parseLocationStr(defaultLocation));
    }
  }, [defaultLocation]);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (!zoomedOut) {
        const { key } = event;
        const [x, y] = location;
        switch (key) {
          case "ArrowRight": {
            if (x < CELL_COUNT.x - 1) {
              setLocation([x + 1, y]);
            }
            break;
          }
          case "ArrowLeft": {
            if (x > 0) {
              setLocation([x - 1, y]);
            }
            break;
          }
          case "ArrowUp": {
            if (y > 0) {
              setLocation([x, y - 1]);
            }
            break;
          }
          case "ArrowDown": {
            if (y < CELL_COUNT.y - 1) {
              setLocation([x, y + 1]);
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
  }, [location, setLocation, zoomedOut]);

  if (!squares) {
    return <LoadingScreen />;
  }

  return (
    <PosterViewWrapper>
      <PosterStatusBar
        zoomedOut={zoomedOut}
        location={location}
        squares={squares}
      />
      <PosterArea>
        <PosterViewer
          zoomedOut={zoomedOut}
          squares={squares}
          location={location}
          onLocationChange={setLocation}
          onZoomedOutChange={zoomedOut => setZoomedOut(zoomedOut)}
        />
      </PosterArea>
      <UploadArea>
        <PassphraseChecker
          renderWithPassphrase={passphrase => (
            <ImageInput
              passphrase={passphrase}
              afterSubmit={() => {
                setZoomedOut(false);
                revalidateSquares();
                if (defaultLocation) {
                  setLocation(parseLocationStr(defaultLocation));
                }
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
  background: #333;
`;
const PosterArea = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  display: flex;
`;
const UploadArea = styled.div`
  border-top: 2px solid ${COLORS.tealDark};
  flex: 0 0 auto;
  padding: 1rem;
  background: ${COLORS.white};
`;
