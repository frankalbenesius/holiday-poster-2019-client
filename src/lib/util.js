import fetch from "unfetch";
import { CELL_COUNT } from "../constants";

export const fetcher = url => fetch(url).then(r => r.json());

export const getRandomLocation = () => [
  Math.floor(Math.random() * CELL_COUNT.x),
  Math.floor(Math.random() * CELL_COUNT.y)
];
