import fetch from "unfetch";
import { CELL_COUNT } from "../constants";

export const fetcher = url => fetch(url).then(r => r.json());

export const getRandomLocation = () => [
  Math.floor(Math.random() * CELL_COUNT.x),
  Math.floor(Math.random() * CELL_COUNT.y)
];

export const parseLocationStr = defaultLocationStr => {
  if (!defaultLocationStr) {
    return undefined;
  } else {
    return defaultLocationStr.split(",").map(n => parseInt(n));
  }
};
