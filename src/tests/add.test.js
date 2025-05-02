import { add } from "../modules/add";

describe("Testing", () => {
  test("Add 2 numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
