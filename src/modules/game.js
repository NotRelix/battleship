import { attackCell } from "./screen";

async function makeComputerMove(currentPlayer) {
  const delay = () => new Promise((res) => setTimeout(res, 2000));
  while (true) {
    const randX = Math.floor(Math.random() * 10);
    const randY = Math.floor(Math.random() * 10);
    if (currentPlayer.gameboard.board[randX][randY] === -1) {
      continue;
    }
    await delay();
    const currentCell = document.querySelector(
      `[data-x="${randX}"][data-y="${randY}"]`,
    );
    const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
    if (!isSuccessfulAttack) {
      break;
    }
  }
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
