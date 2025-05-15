import { attackCell } from "./screen";

function giveRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

async function makeAttack(currentPlayer, x, y, delay) {
  if (currentPlayer.gameboard.board[x][y] !== -1) {
    await delay();
  }
  const currentCell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  const shipIndex = currentPlayer.gameboard.board[x][y];
  const isSuccessfulAttack = attackCell(currentPlayer, currentCell);
  if (!isSuccessfulAttack) {
    return false;
  }
  if (shipIndex !== null && shipIndex > -1) {
    const currentShip = currentPlayer.gameboard.ships[shipIndex];
    if (currentShip.isSunk()) {
      return false;
    }
  }
  return true;
}

async function makeRandomMove(currentPlayer, delay) {
  if (currentPlayer.gameboard.isAllSunk()) {
    return null;
  }
  const availableCells = [];
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (currentPlayer.gameboard.board[x][y] !== -1) {
        availableCells.push([x, y]);
      }
    }
  }
  let randomNumber = giveRandomNumber(availableCells.length);
  const randX = availableCells[randomNumber][0];
  const randY = availableCells[randomNumber][1];
  const attackStatus = await makeAttack(currentPlayer, randX, randY, delay);
  if (attackStatus) {
    return [randX, randY];
  }
  const shipIndex = currentPlayer.gameboard.originalBoard[randX][randY];
  if (shipIndex === null) {
    return null;
  }
  const currentShip = currentPlayer.gameboard.ships[shipIndex];
  if (currentShip.isSunk()) {
    return false;
  }
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
    if (currentPlayer.gameboard.board[lastHit[0]][lastHit[1]] === -1) {
      return true;
    }
    attackStatus = await makeAttack(
      currentPlayer,
      lastHit[0],
      lastHit[1],
      delay,
    );
  }
  return attackStatus;
}

async function makeBottomHit(currentPlayer, lastHit, delay) {
  let attackStatus = await makeAttack(
    currentPlayer,
    lastHit[0],
    lastHit[1],
    delay,
  );
  while (attackStatus && lastHit[0] < 9) {
    lastHit = [lastHit[0] + 1, lastHit[1]];
    if (currentPlayer.gameboard.board[lastHit[0]][lastHit[1]] === -1) {
      return true;
    }
    attackStatus = await makeAttack(
      currentPlayer,
      lastHit[0],
      lastHit[1],
      delay,
    );
  }
  return attackStatus;
}

async function makeLeftHit(currentPlayer, lastHit, delay) {
  let attackStatus = await makeAttack(
    currentPlayer,
    lastHit[0],
    lastHit[1],
    delay,
  );
  while (attackStatus && lastHit[1] > 0) {
    lastHit = [lastHit[0], lastHit[1] - 1];
    if (currentPlayer.gameboard.board[lastHit[0]][lastHit[1]] === -1) {
      return true;
    }
    attackStatus = await makeAttack(
      currentPlayer,
      lastHit[0],
      lastHit[1],
      delay,
    );
  }
  return attackStatus;
}

async function makeRightHit(currentPlayer, lastHit, delay) {
  let attackStatus = await makeAttack(
    currentPlayer,
    lastHit[0],
    lastHit[1],
    delay,
  );
  while (attackStatus && lastHit[1] < 9) {
    lastHit = [lastHit[0], lastHit[1] + 1];
    if (currentPlayer.gameboard.board[lastHit[0]][lastHit[1]] === -1) {
      return true;
    }
    attackStatus = await makeAttack(
      currentPlayer,
      lastHit[0],
      lastHit[1],
      delay,
    );
  }
  return attackStatus;
}

async function makeAdjacentHits(currentPlayer, lastHit, delay) {
  const shipIndex =
    currentPlayer.gameboard.originalBoard[lastHit[0]][lastHit[1]];
  if (shipIndex === null || shipIndex < 0) {
    return null;
  }
  const currentShip = currentPlayer.gameboard.ships[shipIndex];
  if (currentShip.isSunk()) {
    return null;
  }
  const topStatus = await makeTopHit(currentPlayer, lastHit, delay);
  if (currentShip.isSunk()) {
    return null;
  }
  if (!topStatus) {
    return lastHit;
  }
  const bottomStatus = await makeBottomHit(currentPlayer, lastHit, delay);
  if (currentShip.isSunk()) {
    return null;
  }
  if (!bottomStatus) {
    return lastHit;
  }
  const leftStatus = await makeLeftHit(currentPlayer, lastHit, delay);
  if (currentShip.isSunk()) {
    return null;
  }
  if (!leftStatus) {
    return lastHit;
  }
  const rightStatus = await makeRightHit(currentPlayer, lastHit, delay);
  if (currentShip.isSunk()) {
    return null;
  }
  if (!rightStatus) {
    return lastHit;
  }
  return null;
}

export async function makeComputerMove(currentPlayer, lastHit) {
  const delay = () => new Promise((res) => setTimeout(res, 1000));
  if (lastHit === null) {
    lastHit = await makeRandomMove(currentPlayer, delay);
    if (lastHit === false) {
      lastHit = null;
      while (lastHit === null) {
        lastHit = await makeRandomMove(currentPlayer, delay);
        if (lastHit === null) {
          break;
        }
        if (lastHit !== null && lastHit !== false) {
          lastHit = await makeAdjacentHits(currentPlayer, lastHit, delay);
        }
      }
    }
  }
  if (lastHit !== null) {
    lastHit = await makeAdjacentHits(currentPlayer, lastHit, delay);
    while (lastHit === null || lastHit === false) {
      if (currentPlayer.gameboard.isAllSunk()) {
        break;
      }
      lastHit = await makeRandomMove(currentPlayer, delay);
      if (lastHit === null) {
        break;
      }
      if (lastHit !== null && lastHit !== false) {
        lastHit = await makeAdjacentHits(currentPlayer, lastHit, delay);
      }
    }
  }
  return lastHit;
}
