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
  const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
  if (isSuccessfulAttack) {
    return [randX, randY];
  }
  return null;
}

function makeAdjacentHits(currentPlayer, lastHit) {
  // TODO: Make smarter hits for computer
}

export async function makeComputerMove(currentPlayer, lastHit) {
  const delay = () => new Promise((res) => setTimeout(res, 2000));
  if (lastHit === null) {
    lastHit = await makeRandomMove(currentPlayer, delay);
  }
  if (lastHit !== null) {
    makeAdjacentHits(currentPlayer, lastHit);
  }
  console.log(lastHit);
  return lastHit;
}
