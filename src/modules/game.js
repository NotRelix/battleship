import { attackCell } from "./screen";

function cellListener(player) {
  document.addEventListener("click", (e) => {
    const currentCell = e.target;
    if (e.target.closest(`.${player.kebabName}`)) {
      attackCell(player, currentCell);
    }
  })
}

export function game(playerOne, playerTwo) {
  let currentPlayer = playerOne;
  cellListener(currentPlayer);
}
