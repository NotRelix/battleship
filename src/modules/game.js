import { attackCell } from "./screen";

export function game(playerOne, playerTwo) {
  let currentPlayer = playerOne;
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(`.${currentPlayer.kebabName}`) ||
      !e.target.classList.contains("col") ||
      e.target.classList.contains("hit") ||
      e.target.classList.contains("miss")
    ) {
      return;
    }
    const currentCell = e.target;
    const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
    if (!isSuccessfulAttack) {
      currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }
  });
}
