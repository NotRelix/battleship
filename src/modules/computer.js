import { attackCell } from "./screen";

function giveRandomNumber() {
  return Math.floor(Math.random() * 10);
}

async function makeRandomMove(currentPlayer, delay) {
  let randX = giveRandomNumber();
  let randY = giveRandomNumber();
  while (currentPlayer.gameboard.board[randX][randY] === -1) {
    randX = giveRandomNumber();
    randY = giveRandomNumber();
  }
  await delay();
  const currentCell = document.querySelector(
    `[data-x="${randX}"][data-y="${randY}"]`,
  );
  const shipIndex = currentPlayer.gameboard.board[randX][randY];
  const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
  if (shipIndex !== null && shipIndex > -1) {
    const currentShip = currentPlayer.gameboard.ships[shipIndex];
    if (currentShip.isSunk()) {
      return null;
    }
  }
  if (!isSuccessfulAttack) {
    return null;
  }
  return [randX, randY];
}

function makeAdjacentHits(currentPlayer, lastHit) {
  // TODO: Make smarter hits for computer
}

export async function makeComputerMove(currentPlayer, lastHit) {
  const delay = () => new Promise((res) => setTimeout(res, 1));
  if (lastHit === null) {
    lastHit = await makeRandomMove(currentPlayer, delay);
  }
  if (lastHit !== null) {
    makeAdjacentHits(currentPlayer, lastHit);
  }
  console.log(lastHit);
  return lastHit;
}
