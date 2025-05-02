import { Ship } from "../classes/ship";

describe("Ship Class", () => {
  test("Increase the number of hits", () => {
    const ship = new Ship("Player", 5);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("Increase the number of hits multiple times", () => {
    const ship = new Ship("Player", 5);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(3);
  });
});
