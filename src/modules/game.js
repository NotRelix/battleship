import { attackCell } from "./screen";

function makeComputerMove(currentPlayer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randX = Math.floor(Math.random() * 10);
      const randY = Math.floor(Math.random() * 10);
      const currentCell = document.querySelector(
        `[data-x="${randX}"][data-y="${randY}"]`,
      );
      const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
      console.log(isSuccessfulAttack);
      resolve(true);
    }, 2000);
  });
}

export function game(playerOne, playerTwo) {
  let currentPlayer = playerTwo;
  document.addEventListener("click", async (e) => {
    if (
      !e.target.closest(`.${currentPlayer.kebabName}`) ||
      !e.target.classList.contains("col") ||
      e.target.classList.contains("hit") ||
      e.target.classList.contains("miss")
    ) {
      return;
    }
    if (currentPlayer === playerOne) {
      return;
    }
    const currentCell = e.target;
    const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
    if (!isSuccessfulAttack) {
      currentPlayer = playerOne;
      await makeComputerMove(currentPlayer);
      currentPlayer = playerTwo;
    }
  });
}
