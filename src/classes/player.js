import { Gameboard } from "./gameboard";

export class Player {
  constructor(name) {
    this.gameboard = new Gameboard();
    this.name = name;
  }
}
