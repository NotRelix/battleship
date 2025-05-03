import { Gameboard } from "../classes/gameboard";

describe("Gameboard Class", () => {
  const gameboard = new Gameboard();
  test("Place One Vertical Ship", () => {
    gameboard.placeShip(0, 0, 5, true);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test("Place One Horizontal Ship", () => {
    gameboard.placeShip(9, 1, 3, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 1, 1, 1, null, null, null, null, null, null],
    ]);
  });

  test("Can't Place a Colliding Ship Horizontally", () => {
    gameboard.placeShip(2, 0, 5, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 1, 1, 1, null, null, null, null, null, null],
    ]);
  });

  test("Can't Place Next to a Ship Horizontally", () => {
    gameboard.placeShip(1, 1, 5, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 1, 1, 1, null, null, null, null, null, null],
    ]);
  });

  test("Place Vertical Ship Normally", () => {
    gameboard.placeShip(1, 2, 5, true);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 1, 1, 1, null, null, null, null, null, null],
    ]);
  });

  test("Place Vertical Ship Normally But Too Long", () => {
    gameboard.placeShip(6, 5, 5, true);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, 1, 1, 1, null, null, null, null, null, null],
    ]);
  });

  test("Place Vertical Ship Normally But Just Right", () => {
    gameboard.placeShip(6, 5, 4, true);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Place Horizontal Ship But Just Right", () => {
    gameboard.placeShip(0, 8, 2, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, 4, 4],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Place Horizontal Ship But Too Long", () => {
    gameboard.placeShip(3, 6, 5, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, 4, 4],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Place Vertical Ship On Top of Another", () => {
    gameboard.placeShip(3, 5, 3, true);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, 4, 4],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Place Horizontal Ship Next to Another", () => {
    gameboard.placeShip(0, 5, 3, false);
    expect(gameboard.board).toStrictEqual([
      [0, null, null, null, null, null, null, null, 4, 4],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [0, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Hit a Ship", () => {
    gameboard.receiveAttack(1, 0);
    expect(gameboard.ships[0].hits).toBe(1);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit a Ship on the Same Spot", () => {
    gameboard.receiveAttack(1, 0);
    expect(gameboard.ships[0].hits).toBe(1);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit the Same Ship on a Different Spot", () => {
    gameboard.receiveAttack(2, 0);
    expect(gameboard.ships[0].hits).toBe(2);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit the Same Ship For the 3rd Time", () => {
    gameboard.receiveAttack(3, 0);
    expect(gameboard.ships[0].hits).toBe(3);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit the Same Ship For the 4th Time", () => {
    gameboard.receiveAttack(4, 0);
    expect(gameboard.ships[0].hits).toBe(4);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit the Same Ship on the Same Spot Again", () => {
    gameboard.receiveAttack(4, 0);
    expect(gameboard.ships[0].hits).toBe(4);
    expect(gameboard.ships[0].isSunk()).toBe(false);
  });

  test("Hit the Same Ship and Make it Sink", () => {
    gameboard.receiveAttack(0, 0);
    expect(gameboard.ships[0].hits).toBe(5);
    expect(gameboard.ships[0].isSunk()).toBe(true);
  });

  test("Ensure the Ship Has Sunk", () => {
    gameboard.receiveAttack(3, 0);
    expect(gameboard.ships[0].hits).toBe(5);
    expect(gameboard.ships[0].isSunk()).toBe(true);
  });

  test("Hit a Different Ship", () => {
    gameboard.receiveAttack(7, 5);
    expect(gameboard.ships[3].hits).toBe(1);
    expect(gameboard.ships[3].isSunk()).toBe(false);
  });

  test("Completely Miss A Ship", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.board).toStrictEqual([
      [-1, null, -1, null, null, null, null, null, 4, 4],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, -1, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });

  test("Completely Miss A Ship On the Same Spot", () => {
    gameboard.receiveAttack(0, 2);
    expect(gameboard.board).toStrictEqual([
      [-1, null, -1, null, null, null, null, null, 4, 4],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [-1, null, 2, null, null, null, null, null, null, null],
      [null, null, 2, null, null, null, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, null, null, null, null, -1, null, null, null, null],
      [null, null, null, null, null, 3, null, null, null, null],
      [null, 1, 1, 1, null, 3, null, null, null, null],
    ]);
  });
});
