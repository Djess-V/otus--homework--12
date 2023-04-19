import { curry } from "./curry";

describe("curry", () => {
  interface Curry {
    (a?: number, b?: number, c?: number, d?: number, e?: number): Curry;
    (a: number, b: number, c: number, d: number, e: number): number;
  }

  let hof: Curry;
  beforeEach(() => {
    type Func = (
      a?: number,
      b?: number,
      c?: number,
      d?: number,
      e?: number
    ) => number;

    const func: Func = (a, b, c, d, e) =>
      (a ?? 0) + (b ?? 0) + (c ?? 0) + (d ?? 0) + (e ?? 0);

    hof = curry(func) as Curry;
  });

  it("is a function", () => {
    expect(curry).toBeInstanceOf(Function);
  });

  it("Checking currying with correct data", () => {
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
    expect(hof(2, 3, 4)(5, 6)).toBe(20);
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
    expect(hof(4, 5)(6)(7, 8)).toBe(30);
    expect(hof(5)(6)(7)(8)(9)).toBe(35);
  });
});
