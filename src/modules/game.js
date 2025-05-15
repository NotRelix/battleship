import { makeComputerMove } from "./computer";
import { attackCell } from "./screen";

export function game(playerOne, playerTwo) {
  let currentPlayer = playerTwo;
  let lastComputerHit = null;

  document.addEventListener("click", async (e) => {
    const currentCell = e.target;
    if (
      currentPlayer === playerOne ||
      !currentCell.closest(`.${currentPlayer.kebabName}`) ||
      !currentCell.classList.contains("col") ||
      currentCell.classList.contains("hit") ||
      currentCell.classList.contains("miss")
    ) {
      return;
    }
    const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
    if (!isSuccessfulAttack) {
      currentPlayer = playerOne;
      lastComputerHit = await makeComputerMove(currentPlayer, lastComputerHit);
      currentPlayer = playerTwo;
    }
  });
}
