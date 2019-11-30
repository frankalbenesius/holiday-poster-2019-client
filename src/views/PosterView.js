import React from "react";
import useLocalStorage from "react-use-localstorage";
import styled from "@emotion/styled";

import SquareViewer from "../components/SquareViewer";
import { getRandomLocation, parseLocationStr } from "../lib/util";
import PassphraseChecker from "../components/PassphraseChecker";
import { CELL_COUNT, LOCATION_KEY } from "../constants";
import LoadingScreen from "../components/LoadingScreen";
import SquareMetaBar from "../components/SquareMetaBar";
import ImageInput from "../components/ImageInput";

export default function PosterView({ squares, revalidateSquares }) {
  const [defaultLocation] = useLocalStorage(LOCATION_KEY);

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
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [location, setLocation]);

  if (!squares) {
    return <LoadingScreen />;
  }

  const currentSquare = squares.find(s => {
    return s.location[0] === location[0] && s.location[1] === location[1];
  });
  return (
    <PosterViewWrapper>
      <PosterArea>
        <SquareViewer
          squares={squares}
          location={location}
          onLocationChange={setLocation}
        />
      </PosterArea>
      <SquareMetaBar square={currentSquare} />
      <UploadArea>
        <PassphraseChecker
          renderWithPassphrase={passphrase => (
            <ImageInput
              passphrase={passphrase}
              afterSubmit={() => {
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
`;
const PosterArea = styled.div`
  flex: 0 0 auto;
  overflow-y: scroll;
`;
const UploadArea = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
`;
