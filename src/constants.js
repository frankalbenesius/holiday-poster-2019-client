import Color from "color";

// https://colorhunt.co/palette/156289
const teal = Color("#00ffa2");
const orange = Color("#ec9b3b");
const pink = Color("#e8647c");
export const COLORS = {
  black: "#000",
  grayLight: "#cfd3d7",
  gray: "#adb4b9",
  grayDark: "#7f8b93",
  white: "#fff",
  teal: teal.string(),
  tealDark: teal.darken(0.25).string(),
  tealLight: teal.lighten(0.75).string(),
  orange: orange.string(),
  orangeDark: orange.darken(0.25).string(),
  orangeLight: orange.lighten(0.75).string(),
  pink: pink.string(),
  pinkDark: pink.darken(0.25).string(),
  pinkLight: pink.lighten(0.4).string()
};

export const CELL_COUNT = {
  x: 8,
  y: 9
};
