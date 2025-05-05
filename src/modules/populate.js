export function populateBoard(player, playerShips) {
  playerShips.forEach((ship) => {
    player.gameboard.placeShip(ship.y, ship.x, ship.length, ship.isVertical);
  });
}
