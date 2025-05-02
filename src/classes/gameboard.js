export class Gameboard {
  constructor() {
    this.board = this.generateBoard();
    this.ships = [];
  }

  generateBoard() {
    const board = [];
    for (let row = 0; row < 10; row++) {
      const rowArr = [];
      for (let col = 0; col < 10; col++) {
        rowArr.push(null);
      }
      board.push(rowArr);
    }
    return board;
  }
}
