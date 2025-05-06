import { Gameboard } from "./gameboard";

export class Player {
  constructor(name) {
    this.gameboard = new Gameboard();
    this.name = name;
    this.kebabName = kebabCase(name);
  }
}

function kebabCase(text) {
  return text
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("-")
    .toLowerCase();
}
