import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.board = generateBoard();
    this.ships = [];
  }

  placeShip(x, y, length, isVertical) {
    if (!isValidShipPlacement(this.board, x, y, length, isVertical)) {
      return;
    }

    const ship = new Ship(length);
    const currentShipIndex = this.ships.length;
    this.ships.push(ship);
    for (let i = 0; i < length; i++) {
      isVertical
        ? (this.board[x + i][y] = currentShipIndex)
        : (this.board[x][y + i] = currentShipIndex);
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y] === -1) {
      return;
    }
    if (this.board[x][y] !== null) {
      const shipIndex = this.board[x][y];
      const currShip = this.ships[shipIndex];
      currShip.hit();
      if (currShip.isSunk()) {
        currShip.sunk = true;
      }
    }
    this.board[x][y] = -1;
  }

  isAllSunk() {
    for (let ship of this.ships) {
      if (!ship.sunk) {
        return false;
      }
    }
    return true;
  }
}

function generateBoard() {
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

function isValidShipPlacement(board, x, y, length, isVertical) {
  for (let i = 0; i < length; i++) {
    const currentX = isVertical ? x + i : x;
    const currentY = isVertical ? y : y + i;
    const surroundingCoordinates = [
      [currentX - 1, currentY - 1],
      [currentX - 1, currentY],
      [currentX - 1, currentY + 1],
      [currentX, currentY - 1],
      [currentX, currentY],
      [currentX, currentY + 1],
      [currentX + 1, currentY - 1],
      [currentX + 1, currentY],
      [currentX + 1, currentY + 1],
    ];
    if (currentX < 0 || currentX > 9 || currentY < 0 || currentY > 9) {
      return false;
    }
    for (let coords of surroundingCoordinates) {
      if (coords[0] < 0 || coords[0] > 9 || coords[1] < 0 || coords[1] > 9) {
        continue;
      }
      if (board[coords[0]][coords[1]] !== null) {
        return false;
      }
    }
  }
  return true;
}
