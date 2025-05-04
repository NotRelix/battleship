export function displayBoard(name) {
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
    }
  }
}