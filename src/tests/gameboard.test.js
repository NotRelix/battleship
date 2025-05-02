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
});
