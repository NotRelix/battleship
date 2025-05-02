import { Ship } from "../classes/ship";

describe("Ship Class", () => {
  test("Increase the number of hits", () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("Increase the number of hits multiple times", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });

  test("Check if ship hasn't sunk", () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("Check if ship has sunk", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Check if ship has sunk with more hits", () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
