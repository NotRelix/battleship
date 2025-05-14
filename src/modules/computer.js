import { attackCell } from "./screen";

function giveRandomNumber() {
  return Math.floor(Math.random() * 10);
}

async function makeAttack(currentPlayer, x, y, delay) {
  await delay();
  const currentCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  const shipIndex = currentPlayer.gameboard.board[x][y];
  const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
  if (shipIndex !== null && shipIndex > -1) {
    const currentShip = currentPlayer.gameboard.ships[shipIndex];
    if (currentShip.isSunk()) {
      return false;
    }
  }
  if (!isSuccessfulAttack) {
    return false;
  }
  return true;
}

async function makeRandomMove(currentPlayer, delay) {
  let randX = giveRandomNumber();
  let randY = giveRandomNumber();
  while (currentPlayer.gameboard.board[randX][randY] === -1) {
    randX = giveRandomNumber();
    randY = giveRandomNumber();
  }
  const attackStatus = makeAttack(currentPlayer, randX, randY, delay);
  if (attackStatus) {
    return [randX, randY];
  }
  return null;
}

async function makeTopHit(currentPlayer, lastHit, delay) {
  let attackStatus = await makeAttack(
    currentPlayer,
    lastHit[0],
    lastHit[1],
    delay,
  );
  while (attackStatus && lastHit[0] > 0) {
    lastHit = [lastHit[0] - 1, lastHit[1]];
    attackStatus = await makeAttack(
      currentPlayer,
      lastHit[0],
      lastHit[1],
      delay,
    );
  }
}

async function makeAdjacentHits(currentPlayer, lastHit, delay) {
  await makeTopHit(currentPlayer, lastHit, delay);
  const shipIndex =
    currentPlayer.gameboard.originalBoard[lastHit[0]][lastHit[1]];
  if (shipIndex === null || shipIndex < 0) {
    return null;
  }
  const currentShip = currentPlayer.gameboard.ships[shipIndex];
  if (!currentShip.isSunk()) {
    return lastHit;
  }
  return null;
}

export async function makeComputerMove(currentPlayer, lastHit) {
  const delay = () => new Promise((res) => setTimeout(res, 500));
  if (lastHit === null) {
    lastHit = await makeRandomMove(currentPlayer, delay);
  }
  if (lastHit !== null) {
    lastHit = await makeAdjacentHits(currentPlayer, lastHit, delay);
  }
  return lastHit;
}
