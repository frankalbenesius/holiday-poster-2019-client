import Color from "color";

// https://colorhunt.co/palette/156289
const teal = Color("#00ffa2");
const orange = Color("#ec9b3b");
const pink = Color("#e8647c");
export const COLORS = {
  black: "#000",
  grayLight: "#cfd3d7",
  gray: "#adb4b9",
  grayDark: "#444",
  grayDarker: "#333",
  white: "#fff",
  teal: teal.string(),
  tealDark: teal.darken(0.25).string(),
  tealLight: teal.lighten(0.75).string(),
  tealAlpha: teal
    .alpha(0.1)
    .hsl()
    .string(),
  orange: orange.string(),
  orangeDark: orange.darken(0.25).string(),
  orangeLight: orange.lighten(0.5).string(),
  pink: pink.string(),
  pinkDark: pink.darken(0.25).string(),
  pinkLight: pink.lighten(0.4).string()
};

export const CELL_COUNT = {
  x: 8,
  y: 9
};

// export const API_URL = "http://localhost:3001";
export const API_URL = "https://poster-api.frank.dev";
export const HEADER_URL =
  "https://storage.googleapis.com/holiday-poster-2019.appspot.com/header.png";

export const PASSPHRASE_KEY = "passphrase2";
export const LOCATION_KEY = "location2";

export const BREAKPOINTS = {
  medium: "800px",
  large: "1200px"
};
