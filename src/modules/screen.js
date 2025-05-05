export function displayBoard(name, ships) {
  const game = document.querySelector(".game");
  const player = document.createElement("div");
  player.classList.add("player");
  player.classList.add(name);
  game.appendChild(player);

  for (let rowCount = 0; rowCount < 10; rowCount++) {
    const row = document.createElement("div");
    row.classList.add("row");
    player.appendChild(row);
    for (let colCount = 0; colCount < 10; colCount++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      if (isShip(ships, rowCount, colCount)) {
        col.classList.add("ship");
      }
    }
  }
}

export function isShip(ships, row, col) {
  for (let ship of ships) {
    if (
      !ship.isVertical &&
      col >= ship.x &&
      col < ship.x + ship.length &&
      ship.y === row
    ) {
      return true;
    } else if (
      ship.isVertical &&
      row >= ship.y &&
      row < ship.y + ship.length &&
      ship.x === col
    ) {
      return true;
    }
  }
  return false;
}
