export class Ship {
  constructor(player, length) {
    this.player = player;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
  }
}
